goog.provide("cljs_time.core");
(function (){
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.call(null,"DEPRECATION WARNING: ",message);
}); return (
new cljs.core.Var(function(){return cljs_time.core.deprecated;},new cljs.core.Symbol("cljs-time.core","deprecated","cljs-time.core/deprecated",(-1100838458),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"deprecated","deprecated",(-1156160421),null),"cljs_time/core.cljs",(17),(1),(89),(89),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",(1234475525),null)], null)),null,(cljs.core.truth_(cljs_time.core.deprecated)?cljs_time.core.deprecated.cljs$lang$test:null)])));})()
;
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
(function (){
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_; return (
new cljs.core.Var(function(){return cljs_time.core._EQ_;},new cljs.core.Symbol("cljs-time.core","=","cljs-time.core/=",(-1405872178),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"=","=",(-1501502141),null),"cljs_time/core.cljs",(4),(1),(92),(101),cljs.core.List.EMPTY,"**Note:** Equality in goog.date.* (and also with plain\njavascript dates) is not the same as in Joda/clj-time. Two date\nobjects representing the same instant in time in goog.date.* are not\nequal.\n\nIf you need to test for equality use either `cljs-time.core/=`, or\noptionally you can require the `cljs-time.extend` namespace which will\nextend the goog.date.* datatypes, so that clojure.core/= works as\nexpected.",(cljs.core.truth_(cljs_time.core._EQ_)?cljs_time.core._EQ_.cljs$lang$test:null)])));})()
;

/**
 * Interface for various date time functions
 * @interface
 */
(function (){
cljs_time.core.DateTimeProtocol = function(){}; return (
new cljs.core.Var(function(){return cljs_time.core.DateTimeProtocol;},new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"DateTimeProtocol","DateTimeProtocol",(-957395500),null),"cljs_time/core.cljs",(30),(1),(103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentHashMap.fromArrays([cljs.core.with_meta(new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the minute of hour component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"after?","after?",(262754856),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns true if DateTime 'this' is strictly after date/time 'that'."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the day of month component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the second of minute component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"plus-","plus-",(306434256),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s)."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"day-of-week","day-of-week",(-1015109040),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the day of week component of the given date/time. Monday is 1 and Sunday is 7"], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"last-day-of-the-month-","last-day-of-the-month-",(2007536785),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns the last day of the month"], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the month component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns true if DateTime 'this' is strictly equal to date/time 'that'."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"before?","before?",(-1888814730),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns true if DateTime 'this' is strictly before date/time 'that'."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the year component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"week-number-of-year","week-number-of-year",(-163270631),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returs the number of weeks in the year"], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"minus-","minus-",(-409669891),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s)."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"sec","sec",(60154974),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the second of minute component of the given date/time."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"first-day-of-the-month-","first-day-of-the-month-",(-1330214402),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns the first day of the month"], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"milli","milli",(-134785985),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the millisecond of second component of the given date/time."], null))],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)])], null),(103),cljs.core.List.EMPTY,"Interface for various date time functions",cljs.core.list("@interface"),(cljs.core.truth_(cljs_time.core.DateTimeProtocol)?cljs_time.core.DateTimeProtocol.cljs$lang$test:null)])));})()
;

/**
 * Return the year component of the given date/time.
 */
(function (){
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.year[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.year;},new cljs.core.Symbol("cljs-time.core","year","cljs-time.core/year",(1920660863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"year","year",(1976444920),null),"cljs_time/core.cljs",(8),(1),(103),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the year component of the given date/time.",(cljs.core.truth_(cljs_time.core.year)?cljs_time.core.year.cljs$lang$test:null)])));})()
;

/**
 * Return the month component of the given date/time.
 */
(function (){
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.month[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.month;},new cljs.core.Symbol("cljs-time.core","month","cljs-time.core/month",(-382905601),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),"cljs_time/core.cljs",(9),(1),(103),(106),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the month component of the given date/time.",(cljs.core.truth_(cljs_time.core.month)?cljs_time.core.month.cljs$lang$test:null)])));})()
;

/**
 * Return the day of month component of the given date/time.
 */
(function (){
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.day[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.day;},new cljs.core.Symbol("cljs-time.core","day","cljs-time.core/day",(1524422068),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),"cljs_time/core.cljs",(7),(1),(103),(107),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the day of month component of the given date/time.",(cljs.core.truth_(cljs_time.core.day)?cljs_time.core.day.cljs$lang$test:null)])));})()
;

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
(function (){
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.day_of_week;},new cljs.core.Symbol("cljs-time.core","day-of-week","cljs-time.core/day-of-week",(-909502229),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"day-of-week","day-of-week",(-1015109040),null),"cljs_time/core.cljs",(15),(1),(103),(108),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the day of week component of the given date/time. Monday is 1 and Sunday is 7",(cljs.core.truth_(cljs_time.core.day_of_week)?cljs_time.core.day_of_week.cljs$lang$test:null)])));})()
;

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
(function (){
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.hour[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.hour;},new cljs.core.Symbol("cljs-time.core","hour","cljs-time.core/hour",(1164976110),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),"cljs_time/core.cljs",(8),(1),(103),(109),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.",(cljs.core.truth_(cljs_time.core.hour)?cljs_time.core.hour.cljs$lang$test:null)])));})()
;

/**
 * Return the minute of hour component of the given date/time.
 */
(function (){
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.minute[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.minute;},new cljs.core.Symbol("cljs-time.core","minute","cljs-time.core/minute",(875189949),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),"cljs_time/core.cljs",(10),(1),(103),(110),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the minute of hour component of the given date/time.",(cljs.core.truth_(cljs_time.core.minute)?cljs_time.core.minute.cljs$lang$test:null)])));})()
;

/**
 * Return the second of minute component of the given date/time.
 */
(function (){
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.sec[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.sec;},new cljs.core.Symbol("cljs-time.core","sec","cljs-time.core/sec",(116003547),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"sec","sec",(60154974),null),"cljs_time/core.cljs",(7),(1),(103),(111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the second of minute component of the given date/time.",(cljs.core.truth_(cljs_time.core.sec)?cljs_time.core.sec.cljs$lang$test:null)])));})()
;

/**
 * Return the second of minute component of the given date/time.
 */
(function (){
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.second[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.second;},new cljs.core.Symbol("cljs-time.core","second","cljs-time.core/second",(940121224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),"cljs_time/core.cljs",(10),(1),(103),(112),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the second of minute component of the given date/time.",(cljs.core.truth_(cljs_time.core.second)?cljs_time.core.second.cljs$lang$test:null)])));})()
;

/**
 * Return the millisecond of second component of the given date/time.
 */
(function (){
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.milli[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.milli;},new cljs.core.Symbol("cljs-time.core","milli","cljs-time.core/milli",(-46384204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"milli","milli",(-134785985),null),"cljs_time/core.cljs",(9),(1),(103),(113),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the millisecond of second component of the given date/time.",(cljs.core.truth_(cljs_time.core.milli)?cljs_time.core.milli.cljs$lang$test:null)])));})()
;

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
(function (){
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$,that);
} else {
var m__24344__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.equal_QMARK_;},new cljs.core.Symbol("cljs-time.core","equal?","cljs-time.core/equal?",(-1708364845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),"cljs_time/core.cljs",(10),(1),(103),(114),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)),"Returns true if DateTime 'this' is strictly equal to date/time 'that'.",(cljs.core.truth_(cljs_time.core.equal_QMARK_)?cljs_time.core.equal_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
(function (){
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$,that);
} else {
var m__24344__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.after_QMARK_;},new cljs.core.Symbol("cljs-time.core","after?","cljs-time.core/after?",(48619941),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"after?","after?",(262754856),null),"cljs_time/core.cljs",(10),(1),(103),(115),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)),"Returns true if DateTime 'this' is strictly after date/time 'that'.",(cljs.core.truth_(cljs_time.core.after_QMARK_)?cljs_time.core.after_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
(function (){
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$,that);
} else {
var m__24344__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.before_QMARK_;},new cljs.core.Symbol("cljs-time.core","before?","cljs-time.core/before?",(-2111853325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"before?","before?",(-1888814730),null),"cljs_time/core.cljs",(11),(1),(103),(116),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"that","that",(828965210),null)], null)),"Returns true if DateTime 'this' is strictly before date/time 'that'.",(cljs.core.truth_(cljs_time.core.before_QMARK_)?cljs_time.core.before_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
(function (){
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.plus_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$,period);
} else {
var m__24344__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.plus_;},new cljs.core.Symbol("cljs-time.core","plus-","cljs-time.core/plus-",(347499863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"plus-","plus-",(306434256),null),"cljs_time/core.cljs",(9),(1),(103),(117),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)),"Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.plus_)?cljs_time.core.plus_.cljs$lang$test:null)])));})()
;

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
(function (){
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.minus_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$,period);
} else {
var m__24344__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.minus_;},new cljs.core.Symbol("cljs-time.core","minus-","cljs-time.core/minus-",(476131448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minus-","minus-",(-409669891),null),"cljs_time/core.cljs",(10),(1),(103),(118),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)),"Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.minus_)?cljs_time.core.minus_.cljs$lang$test:null)])));})()
;

/**
 * Returns the first day of the month
 */
(function (){
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.first_day_of_the_month_;},new cljs.core.Symbol("cljs-time.core","first-day-of-the-month-","cljs-time.core/first-day-of-the-month-",(-1211947141),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"first-day-of-the-month-","first-day-of-the-month-",(-1330214402),null),"cljs_time/core.cljs",(27),(1),(103),(119),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the first day of the month",(cljs.core.truth_(cljs_time.core.first_day_of_the_month_)?cljs_time.core.first_day_of_the_month_.cljs$lang$test:null)])));})()
;

/**
 * Returns the last day of the month
 */
(function (){
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.last_day_of_the_month_;},new cljs.core.Symbol("cljs-time.core","last-day-of-the-month-","cljs-time.core/last-day-of-the-month-",(1929126172),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"last-day-of-the-month-","last-day-of-the-month-",(2007536785),null),"cljs_time/core.cljs",(26),(1),(103),(120),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the last day of the month",(cljs.core.truth_(cljs_time.core.last_day_of_the_month_)?cljs_time.core.last_day_of_the_month_.cljs$lang$test:null)])));})()
;

/**
 * Returs the number of weeks in the year
 */
(function (){
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.week-number-of-year",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.week_number_of_year;},new cljs.core.Symbol("cljs-time.core","week-number-of-year","cljs-time.core/week-number-of-year",(-251018606),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","DateTimeProtocol","cljs-time.core/DateTimeProtocol",(-610132399),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"week-number-of-year","week-number-of-year",(-163270631),null),"cljs_time/core.cljs",(23),(1),(103),(121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returs the number of weeks in the year",(cljs.core.truth_(cljs_time.core.week_number_of_year)?cljs_time.core.week_number_of_year.cljs$lang$test:null)])));})()
;


/**
 * Interface for in-<time unit> functions
 * @interface
 */
(function (){
cljs_time.core.InTimeUnitProtocol = function(){}; return (
new cljs.core.Var(function(){return cljs_time.core.InTimeUnitProtocol;},new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"InTimeUnitProtocol","InTimeUnitProtocol",(1844233940),null),"cljs_time/core.cljs",(32),(1),(123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"in-millis","in-millis",(-1474872738),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in milliseconds."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-seconds","in-seconds",(1595790567),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in seconds."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-minutes","in-minutes",(-1933452471),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in minutes."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-hours","in-hours",(1987573619),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in hours."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-days","in-days",(-110433998),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in days."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-weeks","in-weeks",(-1891054655),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in weeks"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-months","in-months",(-1529478944),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in months"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"in-years","in-years",(-1249863211),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the time in years"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)])], null),(123),cljs.core.List.EMPTY,"Interface for in-<time unit> functions",cljs.core.list("@interface"),(cljs.core.truth_(cljs_time.core.InTimeUnitProtocol)?cljs_time.core.InTimeUnitProtocol.cljs$lang$test:null)])));})()
;

/**
 * Return the time in milliseconds.
 */
(function (){
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_millis;},new cljs.core.Symbol("cljs-time.core","in-millis","cljs-time.core/in-millis",(-1496520485),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-millis","in-millis",(-1474872738),null),"cljs_time/core.cljs",(13),(1),(123),(125),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in milliseconds.",(cljs.core.truth_(cljs_time.core.in_millis)?cljs_time.core.in_millis.cljs$lang$test:null)])));})()
;

/**
 * Return the time in seconds.
 */
(function (){
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_seconds;},new cljs.core.Symbol("cljs-time.core","in-seconds","cljs-time.core/in-seconds",(1389798044),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-seconds","in-seconds",(1595790567),null),"cljs_time/core.cljs",(14),(1),(123),(126),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in seconds.",(cljs.core.truth_(cljs_time.core.in_seconds)?cljs_time.core.in_seconds.cljs$lang$test:null)])));})()
;

/**
 * Return the time in minutes.
 */
(function (){
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_minutes;},new cljs.core.Symbol("cljs-time.core","in-minutes","cljs-time.core/in-minutes",(-1995829822),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-minutes","in-minutes",(-1933452471),null),"cljs_time/core.cljs",(14),(1),(123),(127),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in minutes.",(cljs.core.truth_(cljs_time.core.in_minutes)?cljs_time.core.in_minutes.cljs$lang$test:null)])));})()
;

/**
 * Return the time in hours.
 */
(function (){
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_hours;},new cljs.core.Symbol("cljs-time.core","in-hours","cljs-time.core/in-hours",(1941577992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-hours","in-hours",(1987573619),null),"cljs_time/core.cljs",(12),(1),(123),(128),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in hours.",(cljs.core.truth_(cljs_time.core.in_hours)?cljs_time.core.in_hours.cljs$lang$test:null)])));})()
;

/**
 * Return the time in days.
 */
(function (){
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_days[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_days;},new cljs.core.Symbol("cljs-time.core","in-days","cljs-time.core/in-days",(-141084977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-days","in-days",(-110433998),null),"cljs_time/core.cljs",(11),(1),(123),(129),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in days.",(cljs.core.truth_(cljs_time.core.in_days)?cljs_time.core.in_days.cljs$lang$test:null)])));})()
;

/**
 * Return the time in weeks
 */
(function (){
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_weeks;},new cljs.core.Symbol("cljs-time.core","in-weeks","cljs-time.core/in-weeks",(-1785357990),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-weeks","in-weeks",(-1891054655),null),"cljs_time/core.cljs",(12),(1),(123),(130),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in weeks",(cljs.core.truth_(cljs_time.core.in_weeks)?cljs_time.core.in_weeks.cljs$lang$test:null)])));})()
;

/**
 * Return the time in months
 */
(function (){
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_months[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_months;},new cljs.core.Symbol("cljs-time.core","in-months","cljs-time.core/in-months",(-1570549145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-months","in-months",(-1529478944),null),"cljs_time/core.cljs",(13),(1),(123),(131),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in months",(cljs.core.truth_(cljs_time.core.in_months)?cljs_time.core.in_months.cljs$lang$test:null)])));})()
;

/**
 * Return the time in years
 */
(function (){
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__24343__auto__ = (((this$ == null))?null:this$);
var m__24344__auto__ = (cljs_time.core.in_years[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,this$);
} else {
var m__24344__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_years;},new cljs.core.Symbol("cljs-time.core","in-years","cljs-time.core/in-years",(-1194571184),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","InTimeUnitProtocol","cljs-time.core/InTimeUnitProtocol",(1621202267),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-years","in-years",(-1249863211),null),"cljs_time/core.cljs",(12),(1),(123),(132),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the time in years",(cljs.core.truth_(cljs_time.core.in_years)?cljs_time.core.in_years.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k48,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__50 = k48;
var G__50__$1 = (((G__50 instanceof cljs.core.Keyword))?G__50.fqn:null);
switch (G__50__$1) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48,else__24310__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#cljs-time.core.Interval{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",(-355208981)),self__.start],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",(-268185958)),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47){
var self__ = this;
var G__47__$1 = this;
return (new cljs.core.RecordIter((0),G__47__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Keyword(null,"end","end",(-268185958))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",(-355208981)),null,new cljs.core.Keyword(null,"end","end",(-268185958)),null], null), null),k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__47){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__51 = cljs.core.keyword_identical_QMARK_;
var expr__52 = k__24315__auto__;
if(cljs.core.truth_(pred__51.call(null,new cljs.core.Keyword(null,"start","start",(-355208981)),expr__52))){
return (new cljs_time.core.Interval(G__47,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51.call(null,new cljs.core.Keyword(null,"end","end",(-268185958)),expr__52))){
return (new cljs_time.core.Interval(self__.start,G__47,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__47),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",(-355208981)),self__.start],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",(-268185958)),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__47){
var self__ = this;
var this__24306__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__47,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"cljs-time.core/Interval");
});

(function (){
cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.__GT_Interval;},new cljs.core.Symbol("cljs-time.core","->Interval","cljs-time.core/->Interval",(620304909),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"->Interval","->Interval",(588007574),null),"cljs_time/core.cljs",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),null,(cljs.core.truth_(cljs_time.core.__GT_Interval)?cljs_time.core.__GT_Interval.cljs$lang$test:null)])));})()
;

(function (){
cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__49){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(G__49),new cljs.core.Keyword(null,"end","end",(-268185958)).cljs$core$IFn$_invoke$arity$1(G__49),null,cljs.core.dissoc.call(null,G__49,new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Keyword(null,"end","end",(-268185958))),null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.map__GT_Interval;},new cljs.core.Symbol("cljs-time.core","map->Interval","cljs-time.core/map->Interval",(1759844453),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"map->Interval","map->Interval",(1662634722),null),"cljs_time/core.cljs",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__49","G__49",(880297370),null)], null)),null,(cljs.core.truth_(cljs_time.core.map__GT_Interval)?cljs_time.core.map__GT_Interval.cljs$lang$test:null)])));})()
;

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
(function (){
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
}); return (
new cljs.core.Var(function(){return cljs_time.core.interval;},new cljs.core.Symbol("cljs-time.core","interval","cljs-time.core/interval",(-920033763),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"interval","interval",(-945940352),null),"cljs_time/core.cljs",(15),(1),(136),(136),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"Returns an Interval representing the span between the two given DateTime.\n  Note that intervals are closed on the left and open on the right.",(cljs.core.truth_(cljs_time.core.interval)?cljs_time.core.interval.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k56,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__58 = k56;
var G__58__$1 = (((G__58 instanceof cljs.core.Keyword))?G__58.fqn:null);
switch (G__58__$1) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56,else__24310__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#cljs-time.core.Period{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",(-1298579689)),self__.years],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",(-45571637)),self__.months],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),self__.weeks],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",(-1394072564)),self__.days],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",(58380855)),self__.hours],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),self__.minutes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),self__.seconds],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",(-1338288387)),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55){
var self__ = this;
var G__55__$1 = this;
return (new cljs.core.RecordIter((0),G__55__$1,(8),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",(-1298579689)),new cljs.core.Keyword(null,"months","months",(-45571637)),new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),new cljs.core.Keyword(null,"days","days",(-1394072564)),new cljs.core.Keyword(null,"hours","hours",(58380855)),new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),new cljs.core.Keyword(null,"millis","millis",(-1338288387))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((8) + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",(-1298579689)),null,new cljs.core.Keyword(null,"months","months",(-45571637)),null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),null,new cljs.core.Keyword(null,"days","days",(-1394072564)),null,new cljs.core.Keyword(null,"hours","hours",(58380855)),null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),null,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),null], null), null),k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__55){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__59 = cljs.core.keyword_identical_QMARK_;
var expr__60 = k__24315__auto__;
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"years","years",(-1298579689)),expr__60))){
return (new cljs_time.core.Period(G__55,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"months","months",(-45571637)),expr__60))){
return (new cljs_time.core.Period(self__.years,G__55,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,G__55,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__55,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"hours","hours",(58380855)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__55,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__55,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__55,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59.call(null,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),expr__60))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__55,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__55),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",(-1298579689)),self__.years],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",(-45571637)),self__.months],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),self__.weeks],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",(-1394072564)),self__.days],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",(58380855)),self__.hours],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),self__.minutes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),self__.seconds],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",(-1338288387)),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__55){
var self__ = this;
var this__24306__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__55,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",(341951838),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),new cljs.core.Symbol(null,"weeks","weeks",(-809839644),null),new cljs.core.Symbol(null,"days","days",(246458963),null),new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"cljs-time.core/Period");
});

(function (){
cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.__GT_Period;},new cljs.core.Symbol("cljs-time.core","->Period","cljs-time.core/->Period",(-324247),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"->Period","->Period",(-181413140),null),"cljs_time/core.cljs",(18),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(143),(143),cljs.core.list(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",(341951838),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),new cljs.core.Symbol(null,"weeks","weeks",(-809839644),null),new cljs.core.Symbol(null,"days","days",(246458963),null),new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),null,(cljs.core.truth_(cljs_time.core.__GT_Period)?cljs_time.core.__GT_Period.cljs$lang$test:null)])));})()
;

(function (){
cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__57){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",(-1298579689)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"months","months",(-45571637)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"weeks","weeks",(1844596125)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"days","days",(-1394072564)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"hours","hours",(58380855)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"minutes","minutes",(1319166394)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"seconds","seconds",(-445266194)).cljs$core$IFn$_invoke$arity$1(G__57),new cljs.core.Keyword(null,"millis","millis",(-1338288387)).cljs$core$IFn$_invoke$arity$1(G__57),null,cljs.core.dissoc.call(null,G__57,new cljs.core.Keyword(null,"years","years",(-1298579689)),new cljs.core.Keyword(null,"months","months",(-45571637)),new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),new cljs.core.Keyword(null,"days","days",(-1394072564)),new cljs.core.Keyword(null,"hours","hours",(58380855)),new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),new cljs.core.Keyword(null,"millis","millis",(-1338288387))),null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.map__GT_Period;},new cljs.core.Symbol("cljs-time.core","map->Period","cljs-time.core/map->Period",(-806268908),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"map->Period","map->Period",(-922385517),null),"cljs_time/core.cljs",(18),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(143),(143),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__57","G__57",(-72968888),null)], null)),null,(cljs.core.truth_(cljs_time.core.map__GT_Period)?cljs_time.core.map__GT_Period.cljs$lang$test:null)])));})()
;

(function (){
cljs_time.core.period = (function cljs_time$core$period(var_args){
var args63 = [];
var len__24987__auto___69 = arguments.length;
var i__24988__auto___70 = (0);
while(true){
if((i__24988__auto___70 < len__24987__auto___69)){
args63.push((arguments[i__24988__auto___70]));

var G__71 = (i__24988__auto___70 + (1));
i__24988__auto___70 = G__71;
continue;
} else {
}
break;
}

var G__68 = args63.length;
switch (G__68) {
case (2):
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25007__auto__ = (new cljs.core.IndexedSeq(args63.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25007__auto__);

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.period;},new cljs.core.Symbol("cljs-time.core","period","cljs-time.core/period",(-1300355283),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period","period",(1288402336),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"v1","v1",(-2141311508),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"v1","v1",(-2141311508),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),null,(cljs.core.truth_(cljs_time.core.period)?cljs_time.core.period.cljs$lang$test:null)])));})()
;

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([period,value]));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq64){
var G__65 = cljs.core.first.call(null,seq64);
var seq64__$1 = cljs.core.next.call(null,seq64);
var G__66 = cljs.core.first.call(null,seq64__$1);
var seq64__$2 = cljs.core.next.call(null,seq64__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__65,G__66,seq64__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.period;},new cljs.core.Symbol("cljs-time.core","period","cljs-time.core/period",(-1300355283),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period","period",(1288402336),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"v1","v1",(-2141311508),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"v1","v1",(-2141311508),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),null,(cljs.core.truth_(cljs_time.core.period)?cljs_time.core.period.cljs$lang$test:null)]));
(function (){
cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",(-1338288387)),(function (date,op,value){
var ms = op.call(null,date.getTime(),value);
var G__73 = date;
G__73.setTime(ms);

return G__73;
}),new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),(function (date,op,value){
var days = op.call(null,(0),(value * (7)));
var G__74 = date;
G__74.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__74;
})], null); return (
new cljs.core.Var(function(){return cljs_time.core.period_fns;},new cljs.core.Symbol("cljs-time.core","period-fns","cljs-time.core/period-fns",(-593525614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period-fns","period-fns",(-970950119),null),"cljs_time/core.cljs",(16),(1),(151),(151),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.core.period_fns)?cljs_time.core.period_fns.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",(58380855)),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",(-1394072564)),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",(-45571637)),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",(-1298579689)),goog.date.Interval.YEARS], null); return (
new cljs.core.Var(function(){return cljs_time.core.periods;},new cljs.core.Symbol("cljs-time.core","periods","cljs-time.core/periods",(-1013909086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"periods","periods",(-958557145),null),"cljs_time/core.cljs",(13),(1),(160),(160),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.core.periods)?cljs_time.core.periods.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__23164__auto__ = interval;
if(cljs.core.truth_(and__23164__auto__)){
return value;
} else {
return and__23164__auto__;
}
})())){
return (new goog.date.Interval(interval,op.call(null,(0),value)));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__85_95 = cljs.core.seq.call(null,p);
var chunk__86_96 = null;
var count__87_97 = (0);
var i__88_98 = (0);
while(true){
if((i__88_98 < count__87_97)){
var vec__89_99 = cljs.core._nth.call(null,chunk__86_96,i__88_98);
var k_100 = cljs.core.nth.call(null,vec__89_99,(0),null);
var v_101 = cljs.core.nth.call(null,vec__89_99,(1),null);
var temp__22382__auto___102 = cljs_time.core.periods.call(null,k_100);
if(cljs.core.truth_(temp__22382__auto___102)){
var period_103 = temp__22382__auto___102;
var temp__22562__auto___104 = __GT_goog_interval.call(null,operator,period_103,v_101);
if(cljs.core.truth_(temp__22562__auto___104)){
var i_105 = temp__22562__auto___104;
date_SINGLEQUOTE_.add(i_105);
} else {
}
} else {
var temp__22562__auto___106 = cljs_time.core.period_fns.call(null,k_100);
if(cljs.core.truth_(temp__22562__auto___106)){
var f_107 = temp__22562__auto___106;
f_107.call(null,date_SINGLEQUOTE_,operator,v_101);
} else {
}
}

var G__108 = seq__85_95;
var G__109 = chunk__86_96;
var G__110 = count__87_97;
var G__111 = (i__88_98 + (1));
seq__85_95 = G__108;
chunk__86_96 = G__109;
count__87_97 = G__110;
i__88_98 = G__111;
continue;
} else {
var temp__22562__auto___112 = cljs.core.seq.call(null,seq__85_95);
if(temp__22562__auto___112){
var seq__85_113__$1 = temp__22562__auto___112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85_113__$1)){
var c__24659__auto___114 = cljs.core.chunk_first.call(null,seq__85_113__$1);
var G__115 = cljs.core.chunk_rest.call(null,seq__85_113__$1);
var G__116 = c__24659__auto___114;
var G__117 = cljs.core.count.call(null,c__24659__auto___114);
var G__118 = (0);
seq__85_95 = G__115;
chunk__86_96 = G__116;
count__87_97 = G__117;
i__88_98 = G__118;
continue;
} else {
var vec__92_119 = cljs.core.first.call(null,seq__85_113__$1);
var k_120 = cljs.core.nth.call(null,vec__92_119,(0),null);
var v_121 = cljs.core.nth.call(null,vec__92_119,(1),null);
var temp__22382__auto___122 = cljs_time.core.periods.call(null,k_120);
if(cljs.core.truth_(temp__22382__auto___122)){
var period_123 = temp__22382__auto___122;
var temp__22562__auto___124__$1 = __GT_goog_interval.call(null,operator,period_123,v_121);
if(cljs.core.truth_(temp__22562__auto___124__$1)){
var i_125 = temp__22562__auto___124__$1;
date_SINGLEQUOTE_.add(i_125);
} else {
}
} else {
var temp__22562__auto___126__$1 = cljs_time.core.period_fns.call(null,k_120);
if(cljs.core.truth_(temp__22562__auto___126__$1)){
var f_127 = temp__22562__auto___126__$1;
f_127.call(null,date_SINGLEQUOTE_,operator,v_121);
} else {
}
}

var G__128 = cljs.core.next.call(null,seq__85_113__$1);
var G__129 = null;
var G__130 = (0);
var G__131 = (0);
seq__85_95 = G__128;
chunk__86_96 = G__129;
count__87_97 = G__130;
i__88_98 = G__131;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
}); return (
new cljs.core.Var(function(){return cljs_time.core.period_fn;},new cljs.core.Symbol("cljs-time.core","period-fn","cljs-time.core/period-fn",(-1882942658),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period-fn","period-fn",(-1995487815),null),"cljs_time/core.cljs",(16),(1),(168),(168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs_time.core.period_fn)?cljs_time.core.period_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.call(null,yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.call(null,dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.compare_local_dates;},new cljs.core.Symbol("cljs-time.core","compare-local-dates","cljs-time.core/compare-local-dates",(-2070692079),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"compare-local-dates","compare-local-dates",(-1104752492),null),"cljs_time/core.cljs",(27),(1),(180),(180),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"other","other",(-1658642225),null)], null)),null,(cljs.core.truth_(cljs_time.core.compare_local_dates)?cljs_time.core.compare_local_dates.cljs$lang$test:null)])));})()
;
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) > (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates.call(null,this$__$1,that) < (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});
(function (){
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY}); return (
new cljs.core.Var(function(){return cljs_time.core.utc;},new cljs.core.Symbol("cljs-time.core","utc","cljs-time.core/utc",(507333576),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"utc","utc",(553000525),null),"cljs_time/core.cljs",(9),(1),(263),(263),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.core.utc)?cljs_time.core.utc.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
}); return (
new cljs.core.Var(function(){return cljs_time.core.default_ms_fn;},new cljs.core.Symbol("cljs-time.core","default-ms-fn","cljs-time.core/default-ms-fn",(-2083655075),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"default-ms-fn","default-ms-fn",(-1635704640),null),"cljs_time/core.cljs",(20),(1),(265),(265),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs_time.core.default_ms_fn)?cljs_time.core.default_ms_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
}); return (
new cljs.core.Var(function(){return cljs_time.core.offset_ms_fn;},new cljs.core.Symbol("cljs-time.core","offset-ms-fn","cljs-time.core/offset-ms-fn",(128544388),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"offset-ms-fn","offset-ms-fn",(2088098825),null),"cljs_time/core.cljs",(19),(1),(268),(268),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs_time.core.offset_ms_fn)?cljs_time.core.offset_ms_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
}); return (
new cljs.core.Var(function(){return cljs_time.core.static_ms_fn;},new cljs.core.Symbol("cljs-time.core","static-ms-fn","cljs-time.core/static-ms-fn",(-950343983),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"static-ms-fn","static-ms-fn",(-603507622),null),"cljs_time/core.cljs",(19),(1),(272),(272),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ms","ms",(487821794),null)], null)),null,(cljs.core.truth_(cljs_time.core.static_ms_fn)?cljs_time.core.static_ms_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null); return (
new cljs.core.Var(function(){return cljs_time.core._STAR_ms_fn_STAR_;},new cljs.core.Symbol("cljs-time.core","*ms-fn*","cljs-time.core/*ms-fn*",(1313215143),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"*ms-fn*","*ms-fn*",(1259437868),null),"cljs_time/core.cljs",(23),(1),true,(276),(276),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.core._STAR_ms_fn_STAR_)?cljs_time.core._STAR_ms_fn_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
(function (){
cljs_time.core.now = (function cljs_time$core$now(){
var G__133 = (new goog.date.UtcDateTime());
G__133.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__133;
}); return (
new cljs.core.Var(function(){return cljs_time.core.now;},new cljs.core.Symbol("cljs-time.core","now","cljs-time.core/now",(-105696407),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"now","now",(-9994004),null),"cljs_time/core.cljs",(10),(1),(278),(278),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a DateTime for the current instant in the UTC time zone.",(cljs.core.truth_(cljs_time.core.now)?cljs_time.core.now.cljs$lang$test:null)])));})()
;
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
(function (){
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__135 = (new goog.date.DateTime());
G__135.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__135;
}); return (
new cljs.core.Var(function(){return cljs_time.core.time_now;},new cljs.core.Symbol("cljs-time.core","time-now","cljs-time.core/time-now",(-1430174825),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"time-now","time-now",(1434292496),null),"cljs_time/core.cljs",(15),(1),(283),(283),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a local DateTime for the current instant without date or time zone\n  in the current time zone.",(cljs.core.truth_(cljs_time.core.time_now)?cljs_time.core.time_now.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__137 = datetime__$1;
G__137.setHours((0));

G__137.setMinutes((0));

G__137.setSeconds((0));

G__137.setMilliseconds((0));

return G__137;
}); return (
new cljs.core.Var(function(){return cljs_time.core.at_midnight;},new cljs.core.Symbol("cljs-time.core","at-midnight","cljs-time.core/at-midnight",(875500091),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"at-midnight","at-midnight",(837042356),null),"cljs_time/core.cljs",(18),(1),(289),(289),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datetime","datetime",(2135207229),null)], null)),null,(cljs.core.truth_(cljs_time.core.at_midnight)?cljs_time.core.at_midnight.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
(function (){
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.today_at_midnight;},new cljs.core.Symbol("cljs-time.core","today-at-midnight","cljs-time.core/today-at-midnight",(1355556378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"today-at-midnight","today-at-midnight",(1467521941),null),"cljs_time/core.cljs",(24),(1),(297),(297),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a DateTime for today at midnight in the UTC time zone.",(cljs.core.truth_(cljs_time.core.today_at_midnight)?cljs_time.core.today_at_midnight.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
(function (){
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__139 = (new goog.date.UtcDateTime());
G__139.setTime((0));

return G__139;
}); return (
new cljs.core.Var(function(){return cljs_time.core.epoch;},new cljs.core.Symbol("cljs-time.core","epoch","cljs-time.core/epoch",(-1408418354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"epoch","epoch",(-1218802103),null),"cljs_time/core.cljs",(12),(1),(302),(302),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a DateTime for the begining of the Unix epoch in the UTC time zone.",(cljs.core.truth_(cljs_time.core.epoch)?cljs_time.core.epoch.cljs$lang$test:null)])));})()
;
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
(function (){
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args140 = [];
var len__24987__auto___143 = arguments.length;
var i__24988__auto___144 = (0);
while(true){
if((i__24988__auto___144 < len__24987__auto___143)){
args140.push((arguments[i__24988__auto___144]));

var G__145 = (i__24988__auto___144 + (1));
i__24988__auto___144 = G__145;
continue;
} else {
}
break;
}

var G__142 = args140.length;
switch (G__142) {
case (1):
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args140.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.date_midnight;},new cljs.core.Symbol("cljs-time.core","date-midnight","cljs-time.core/date-midnight",(71685028),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"date-midnight","date-midnight",(453674543),null),"cljs_time/core.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(307),(307),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),"Constructs and returns a new DateTime at midnight in UTC.\n\n  Specify the year, month of year, day of month. Note that month and day are\n  1-indexed. Any number of least-significant components can be ommited, in\n  which case they will default to 1.",(cljs.core.truth_(cljs_time.core.date_midnight)?cljs_time.core.date_midnight.cljs$lang$test:null)])));})()
;

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs_time.core.date_midnight;},new cljs.core.Symbol("cljs-time.core","date-midnight","cljs-time.core/date-midnight",(71685028),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"date-midnight","date-midnight",(453674543),null),"cljs_time/core.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(307),(307),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),"Constructs and returns a new DateTime at midnight in UTC.\n\n  Specify the year, month of year, day of month. Note that month and day are\n  1-indexed. Any number of least-significant components can be ommited, in\n  which case they will default to 1.",(cljs.core.truth_(cljs_time.core.date_midnight)?cljs_time.core.date_midnight.cljs$lang$test:null)]));
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
(function (){
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args147 = [];
var len__24987__auto___150 = arguments.length;
var i__24988__auto___151 = (0);
while(true){
if((i__24988__auto___151 < len__24987__auto___150)){
args147.push((arguments[i__24988__auto___151]));

var G__152 = (i__24988__auto___151 + (1));
i__24988__auto___151 = G__152;
continue;
} else {
}
break;
}

var G__149 = args147.length;
switch (G__149) {
case (1):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (7):
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args147.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.date_time;},new cljs.core.Symbol("cljs-time.core","date-time","cljs-time.core/date-time",(397310156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"date-time","date-time",(1818469707),null),"cljs_time/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(7),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null,null)], null),(1),(320),(320),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),"Constructs and returns a new DateTime in UTC.\n\n  Specify the year, month of year, day of month, hour of day, minute if hour,\n  second of minute, and millisecond of second. Note that month and day are\n  1-indexed while hour, second, minute, and millis are 0-indexed.\n\n  Any number of least-significant components can be ommited, in which case\n  they will default to 1 or 0 as appropriate.",(cljs.core.truth_(cljs_time.core.date_time)?cljs_time.core.date_time.cljs$lang$test:null)])));})()
;

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = (7);

new cljs.core.Var(function(){return cljs_time.core.date_time;},new cljs.core.Symbol("cljs-time.core","date-time","cljs-time.core/date-time",(397310156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"date-time","date-time",(1818469707),null),"cljs_time/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(7),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null,null)], null),(1),(320),(320),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),"Constructs and returns a new DateTime in UTC.\n\n  Specify the year, month of year, day of month, hour of day, minute if hour,\n  second of minute, and millisecond of second. Note that month and day are\n  1-indexed while hour, second, minute, and millis are 0-indexed.\n\n  Any number of least-significant components can be ommited, in which case\n  they will default to 1 or 0 as appropriate.",(cljs.core.truth_(cljs_time.core.date_time)?cljs_time.core.date_time.cljs$lang$test:null)]));
/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
(function (){
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args154 = [];
var len__24987__auto___157 = arguments.length;
var i__24988__auto___158 = (0);
while(true){
if((i__24988__auto___158 < len__24987__auto___157)){
args154.push((arguments[i__24988__auto___158]));

var G__159 = (i__24988__auto___158 + (1));
i__24988__auto___158 = G__159;
continue;
} else {
}
break;
}

var G__156 = args154.length;
switch (G__156) {
case (1):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (7):
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args154.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.local_date_time;},new cljs.core.Symbol("cljs-time.core","local-date-time","cljs-time.core/local-date-time",(-56721052),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"local-date-time","local-date-time",(-70045719),null),"cljs_time/core.cljs",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(7),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null,null)], null),(1),(344),(344),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),"Constructs and returns a new local DateTime.\nSpecify the year, month of year, day of month, hour of day, minute of hour,\nsecond of minute, and millisecond of second. Note that month and day are\n1-indexed while hour, second, minute, and millis are 0-indexed.\nAny number of least-significant components can be ommited, in which case\nthey will default to 1 or 0 as appropriate.",(cljs.core.truth_(cljs_time.core.local_date_time)?cljs_time.core.local_date_time.cljs$lang$test:null)])));})()
;

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = (7);

new cljs.core.Var(function(){return cljs_time.core.local_date_time;},new cljs.core.Symbol("cljs-time.core","local-date-time","cljs-time.core/local-date-time",(-56721052),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"local-date-time","local-date-time",(-70045719),null),"cljs_time/core.cljs",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(7),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null,null)], null),(1),(344),(344),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null),new cljs.core.Symbol(null,"hour","hour",(1084542313),null),new cljs.core.Symbol(null,"minute","minute",(997655558),null),new cljs.core.Symbol(null,"second","second",(1195829517),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),"Constructs and returns a new local DateTime.\nSpecify the year, month of year, day of month, hour of day, minute of hour,\nsecond of minute, and millisecond of second. Note that month and day are\n1-indexed while hour, second, minute, and millis are 0-indexed.\nAny number of least-significant components can be ommited, in which case\nthey will default to 1 or 0 as appropriate.",(cljs.core.truth_(cljs_time.core.local_date_time)?cljs_time.core.local_date_time.cljs$lang$test:null)]));
/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
(function (){
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
}); return (
new cljs.core.Var(function(){return cljs_time.core.local_date;},new cljs.core.Symbol("cljs-time.core","local-date","cljs-time.core/local-date",(-747689898),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"local-date","local-date",(-824674341),null),"cljs_time/core.cljs",(17),(1),(366),(366),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null),new cljs.core.Symbol(null,"day","day",(1365731081),null)], null)),"Constructs and returns a new goog.date.Date in the local timezone.\nSpecify the year, month, and day.",(cljs.core.truth_(cljs_time.core.local_date)?cljs_time.core.local_date.cljs$lang$test:null)])));})()
;
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
(function (){
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date(cljs_time.core._STAR_ms_fn_STAR_.call(null)))));
}); return (
new cljs.core.Var(function(){return cljs_time.core.today;},new cljs.core.Symbol("cljs-time.core","today","cljs-time.core/today",(-1653805099),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"today","today",(-1709164206),null),"cljs_time/core.cljs",(12),(1),(372),(372),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Constructs and returns a new goog.date.Date representing today in the local timezone.",(cljs.core.truth_(cljs_time.core.today)?cljs_time.core.today.cljs$lang$test:null)])));})()
;
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
(function (){
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args161 = [];
var len__24987__auto___164 = arguments.length;
var i__24988__auto___165 = (0);
while(true){
if((i__24988__auto___165 < len__24987__auto___164)){
args161.push((arguments[i__24988__auto___165]));

var G__166 = (i__24988__auto___165 + (1));
i__24988__auto___165 = G__166;
continue;
} else {
}
break;
}

var G__163 = args161.length;
switch (G__163) {
case (1):
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args161.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.time_zone_for_offset;},new cljs.core.Symbol("cljs-time.core","time-zone-for-offset","cljs-time.core/time-zone-for-offset",(629587325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"time-zone-for-offset","time-zone-for-offset",(718081734),null),"cljs_time/core.cljs",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(378),(378),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),"Returns a timezone map for the given offset, specified either in hours or\n  hours and minutes.",(cljs.core.truth_(cljs_time.core.time_zone_for_offset)?cljs_time.core.time_zone_for_offset.cljs$lang$test:null)])));})()
;

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",(-2112348439)):new cljs.core.Keyword(null,"+","+",(1913524883)));
var fmt = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("UTC%s%02d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",(-1388402092)),tz_name,new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__23200__auto__ = minutes;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",(1198912366)),"-",new cljs.core.Keyword(null,"names","names",(-1943074658)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",(751963705))], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.time_zone_for_offset;},new cljs.core.Symbol("cljs-time.core","time-zone-for-offset","cljs-time.core/time-zone-for-offset",(629587325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"time-zone-for-offset","time-zone-for-offset",(718081734),null),"cljs_time/core.cljs",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(378),(378),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),"Returns a timezone map for the given offset, specified either in hours or\n  hours and minutes.",(cljs.core.truth_(cljs_time.core.time_zone_for_offset)?cljs_time.core.time_zone_for_offset.cljs$lang$test:null)]));
/**
 * Returns the default timezone map for the current environment.
 */
(function (){
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__169 = (new goog.date.DateTime());
G__169.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__169;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
}); return (
new cljs.core.Var(function(){return cljs_time.core.default_time_zone;},new cljs.core.Symbol("cljs-time.core","default-time-zone","cljs-time.core/default-time-zone",(-1379194135),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"default-time-zone","default-time-zone",(-1422885780),null),"cljs_time/core.cljs",(24),(1),(397),(397),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the default timezone map for the current environment.",(cljs.core.truth_(cljs_time.core.default_time_zone)?cljs_time.core.default_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
(function (){
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
}); return (
new cljs.core.Var(function(){return cljs_time.core.to_default_time_zone;},new cljs.core.Symbol("cljs-time.core","to-default-time-zone","cljs-time.core/to-default-time-zone",(-1458552593),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"to-default-time-zone","to-default-time-zone",(-1297769118),null),"cljs_time/core.cljs",(27),(1),(405),(405),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),"Assuming `dt` is in the UTC timezone, returns a DateTime\n  corresponding to the same absolute instant in time as the given\n  DateTime, but with calendar fields corresponding to the default\n  (local) timezone.",(cljs.core.truth_(cljs_time.core.to_default_time_zone)?cljs_time.core.to_default_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
(function (){
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
}); return (
new cljs.core.Var(function(){return cljs_time.core.to_utc_time_zone;},new cljs.core.Symbol("cljs-time.core","to-utc-time-zone","cljs-time.core/to-utc-time-zone",(-1386194042),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"to-utc-time-zone","to-utc-time-zone",(1345162267),null),"cljs_time/core.cljs",(23),(1),(413),(413),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),"Assuming `dt` is in the Local timezone, returns a UtcDateTime\n  corresponding to the same absolute instant in time as the given\n  DateTime, but with calendar fields corresponding to the UTC\n  timezone.",(cljs.core.truth_(cljs_time.core.to_utc_time_zone)?cljs_time.core.to_utc_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
(function (){
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}); return (
new cljs.core.Var(function(){return cljs_time.core.from_default_time_zone;},new cljs.core.Symbol("cljs-time.core","from-default-time-zone","cljs-time.core/from-default-time-zone",(2061261292),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"from-default-time-zone","from-default-time-zone",(2003373153),null),"cljs_time/core.cljs",(29),(1),(421),(421),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),"Assuming `dt` is in the UTC timezone, returns a DateTime\n  corresponding to the same point in calendar time as the given\n  DateTime, but for a correspondingly different absolute instant in\n  time in the default (local) timezone.\n\n  Note: This implementation uses the ECMAScript 5.1 implementation which\n  trades some historical daylight savings transition accuracy for simplicity.\n  see http://es5.github.io/#x15.9.1.8\n  ",(cljs.core.truth_(cljs_time.core.from_default_time_zone)?cljs_time.core.from_default_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
(function (){
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,dt)))){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.from_utc_time_zone;},new cljs.core.Symbol("cljs-time.core","from-utc-time-zone","cljs-time.core/from-utc-time-zone",(1961639380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"from-utc-time-zone","from-utc-time-zone",(2040098643),null),"cljs_time/core.cljs",(25),(1),(440),(440),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),"Assuming `dt` is in the local timezone, returns a UtcDateTime\n  corresponding to the same point in calendar time as the given\n  DateTime, but for a correspondingly different absolute instant in\n  time in the UTC timezone.\n\n  Note: This implementation uses the ECMAScript 5.1 implementation which\n  trades some historical daylight savings transition accuracy for simplicity.\n  see http://es5.github.io/#x15.9.1.8\n  ",(cljs.core.truth_(cljs_time.core.from_utc_time_zone)?cljs_time.core.from_utc_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
(function (){
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args170 = [];
var len__24987__auto___173 = arguments.length;
var i__24988__auto___174 = (0);
while(true){
if((i__24988__auto___174 < len__24987__auto___173)){
args170.push((arguments[i__24988__auto___174]));

var G__175 = (i__24988__auto___174 + (1));
i__24988__auto___174 = G__175;
continue;
} else {
}
break;
}

var G__172 = args170.length;
switch (G__172) {
case (0):
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args170.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.years;},new cljs.core.Symbol("cljs-time.core","years","cljs-time.core/years",(724442075),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"years","years",(341951838),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(462),(462),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many years.\n  Without an argument, returns a Period representing only years.",(cljs.core.truth_(cljs_time.core.years)?cljs_time.core.years.cljs$lang$test:null)])));})()
;

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",(-1298579689)),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.years;},new cljs.core.Symbol("cljs-time.core","years","cljs-time.core/years",(724442075),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"years","years",(341951838),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(462),(462),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many years.\n  Without an argument, returns a Period representing only years.",(cljs.core.truth_(cljs_time.core.years)?cljs_time.core.years.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
(function (){
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args177 = [];
var len__24987__auto___180 = arguments.length;
var i__24988__auto___181 = (0);
while(true){
if((i__24988__auto___181 < len__24987__auto___180)){
args177.push((arguments[i__24988__auto___181]));

var G__182 = (i__24988__auto___181 + (1));
i__24988__auto___181 = G__182;
continue;
} else {
}
break;
}

var G__179 = args177.length;
switch (G__179) {
case (0):
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args177.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.months;},new cljs.core.Symbol("cljs-time.core","months","cljs-time.core/months",(1650220693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(468),(468),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many months.\n  Without an argument, returns a Period representing only months.",(cljs.core.truth_(cljs_time.core.months)?cljs_time.core.months.cljs$lang$test:null)])));})()
;

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",(-45571637)),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.months;},new cljs.core.Symbol("cljs-time.core","months","cljs-time.core/months",(1650220693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(468),(468),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many months.\n  Without an argument, returns a Period representing only months.",(cljs.core.truth_(cljs_time.core.months)?cljs_time.core.months.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
(function (){
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args184 = [];
var len__24987__auto___187 = arguments.length;
var i__24988__auto___188 = (0);
while(true){
if((i__24988__auto___188 < len__24987__auto___187)){
args184.push((arguments[i__24988__auto___188]));

var G__189 = (i__24988__auto___188 + (1));
i__24988__auto___188 = G__189;
continue;
} else {
}
break;
}

var G__186 = args184.length;
switch (G__186) {
case (0):
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.weeks;},new cljs.core.Symbol("cljs-time.core","weeks","cljs-time.core/weeks",(-905091681),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"weeks","weeks",(-809839644),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(474),(474),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many weeks.\n  Without an argument, returns a Period representing only weeks.",(cljs.core.truth_(cljs_time.core.weeks)?cljs_time.core.weeks.cljs$lang$test:null)])));})()
;

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.weeks;},new cljs.core.Symbol("cljs-time.core","weeks","cljs-time.core/weeks",(-905091681),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"weeks","weeks",(-809839644),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(474),(474),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many weeks.\n  Without an argument, returns a Period representing only weeks.",(cljs.core.truth_(cljs_time.core.weeks)?cljs_time.core.weeks.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
(function (){
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args191 = [];
var len__24987__auto___194 = arguments.length;
var i__24988__auto___195 = (0);
while(true){
if((i__24988__auto___195 < len__24987__auto___194)){
args191.push((arguments[i__24988__auto___195]));

var G__196 = (i__24988__auto___195 + (1));
i__24988__auto___195 = G__196;
continue;
} else {
}
break;
}

var G__193 = args191.length;
switch (G__193) {
case (0):
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args191.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.days;},new cljs.core.Symbol("cljs-time.core","days","cljs-time.core/days",(155457768),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"days","days",(246458963),null),"cljs_time/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(480),(480),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many days.\n  Without an argument, returns a Period representing only days.",(cljs.core.truth_(cljs_time.core.days)?cljs_time.core.days.cljs$lang$test:null)])));})()
;

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.days;},new cljs.core.Symbol("cljs-time.core","days","cljs-time.core/days",(155457768),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"days","days",(246458963),null),"cljs_time/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(480),(480),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many days.\n  Without an argument, returns a Period representing only days.",(cljs.core.truth_(cljs_time.core.days)?cljs_time.core.days.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
(function (){
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args198 = [];
var len__24987__auto___201 = arguments.length;
var i__24988__auto___202 = (0);
while(true){
if((i__24988__auto___202 < len__24987__auto___201)){
args198.push((arguments[i__24988__auto___202]));

var G__203 = (i__24988__auto___202 + (1));
i__24988__auto___202 = G__203;
continue;
} else {
}
break;
}

var G__200 = args198.length;
switch (G__200) {
case (0):
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.hours;},new cljs.core.Symbol("cljs-time.core","hours","cljs-time.core/hours",(2140663797),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"hours","hours",(1698912382),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(486),(486),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many hours.\n  Without an argument, returns a Period representing only hours.",(cljs.core.truth_(cljs_time.core.hours)?cljs_time.core.hours.cljs$lang$test:null)])));})()
;

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",(58380855)),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.hours;},new cljs.core.Symbol("cljs-time.core","hours","cljs-time.core/hours",(2140663797),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"hours","hours",(1698912382),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(486),(486),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many hours.\n  Without an argument, returns a Period representing only hours.",(cljs.core.truth_(cljs_time.core.hours)?cljs_time.core.hours.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
(function (){
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args205 = [];
var len__24987__auto___208 = arguments.length;
var i__24988__auto___209 = (0);
while(true){
if((i__24988__auto___209 < len__24987__auto___208)){
args205.push((arguments[i__24988__auto___209]));

var G__210 = (i__24988__auto___209 + (1));
i__24988__auto___209 = G__210;
continue;
} else {
}
break;
}

var G__207 = args205.length;
switch (G__207) {
case (0):
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args205.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.minutes;},new cljs.core.Symbol("cljs-time.core","minutes","cljs-time.core/minutes",(-1156434020),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(492),(492),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many minutes.\n  Without an argument, returns a Period representing only minutes.",(cljs.core.truth_(cljs_time.core.minutes)?cljs_time.core.minutes.cljs$lang$test:null)])));})()
;

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.minutes;},new cljs.core.Symbol("cljs-time.core","minutes","cljs-time.core/minutes",(-1156434020),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(492),(492),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many minutes.\n  Without an argument, returns a Period representing only minutes.",(cljs.core.truth_(cljs_time.core.minutes)?cljs_time.core.minutes.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
(function (){
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args212 = [];
var len__24987__auto___215 = arguments.length;
var i__24988__auto___216 = (0);
while(true){
if((i__24988__auto___216 < len__24987__auto___215)){
args212.push((arguments[i__24988__auto___216]));

var G__217 = (i__24988__auto___216 + (1));
i__24988__auto___216 = G__217;
continue;
} else {
}
break;
}

var G__214 = args212.length;
switch (G__214) {
case (0):
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args212.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.seconds;},new cljs.core.Symbol("cljs-time.core","seconds","cljs-time.core/seconds",(1576270000),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(498),(498),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many seconds.\n  Without an argument, returns a Period representing only seconds.",(cljs.core.truth_(cljs_time.core.seconds)?cljs_time.core.seconds.cljs$lang$test:null)])));})()
;

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.seconds;},new cljs.core.Symbol("cljs-time.core","seconds","cljs-time.core/seconds",(1576270000),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(498),(498),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many seconds.\n  Without an argument, returns a Period representing only seconds.",(cljs.core.truth_(cljs_time.core.seconds)?cljs_time.core.seconds.cljs$lang$test:null)]));
/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
(function (){
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args219 = [];
var len__24987__auto___222 = arguments.length;
var i__24988__auto___223 = (0);
while(true){
if((i__24988__auto___223 < len__24987__auto___222)){
args219.push((arguments[i__24988__auto___223]));

var G__224 = (i__24988__auto___223 + (1));
i__24988__auto___223 = G__224;
continue;
} else {
}
break;
}

var G__221 = args219.length;
switch (G__221) {
case (0):
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args219.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.millis;},new cljs.core.Symbol("cljs-time.core","millis","cljs-time.core/millis",(414755839),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(504),(504),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many milliseconds.\n  Without an argument, returns a Period representing only milliseconds.",(cljs.core.truth_(cljs_time.core.millis)?cljs_time.core.millis.cljs$lang$test:null)])));})()
;

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs_time.core.millis;},new cljs.core.Symbol("cljs-time.core","millis","cljs-time.core/millis",(414755839),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(504),(504),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Given a number, returns a Period representing that many milliseconds.\n  Without an argument, returns a Period representing only milliseconds.",(cljs.core.truth_(cljs_time.core.millis)?cljs_time.core.millis.cljs$lang$test:null)]));
/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
(function (){
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args226 = [];
var len__24987__auto___232 = arguments.length;
var i__24988__auto___233 = (0);
while(true){
if((i__24988__auto___233 < len__24987__auto___232)){
args226.push((arguments[i__24988__auto___233]));

var G__234 = (i__24988__auto___233 + (1));
i__24988__auto___233 = G__234;
continue;
} else {
}
break;
}

var G__231 = args226.length;
switch (G__231) {
case (2):
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25007__auto__ = (new cljs.core.IndexedSeq(args226.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25007__auto__);

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.plus;},new cljs.core.Symbol("cljs-time.core","plus","cljs-time.core/plus",(1798364515),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"plus","plus",(1852072188),null),"cljs_time/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(510),(510),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),"Returns a new date/time corresponding to the given date/time moved\n  forwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.plus)?cljs_time.core.plus.cljs$lang$test:null)])));})()
;

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq227){
var G__228 = cljs.core.first.call(null,seq227);
var seq227__$1 = cljs.core.next.call(null,seq227);
var G__229 = cljs.core.first.call(null,seq227__$1);
var seq227__$2 = cljs.core.next.call(null,seq227__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__228,G__229,seq227__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.plus;},new cljs.core.Symbol("cljs-time.core","plus","cljs-time.core/plus",(1798364515),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"plus","plus",(1852072188),null),"cljs_time/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(510),(510),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),"Returns a new date/time corresponding to the given date/time moved\n  forwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.plus)?cljs_time.core.plus.cljs$lang$test:null)]));
/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
(function (){
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args236 = [];
var len__24987__auto___242 = arguments.length;
var i__24988__auto___243 = (0);
while(true){
if((i__24988__auto___243 < len__24987__auto___242)){
args236.push((arguments[i__24988__auto___243]));

var G__244 = (i__24988__auto___243 + (1));
i__24988__auto___243 = G__244;
continue;
} else {
}
break;
}

var G__241 = args236.length;
switch (G__241) {
case (2):
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25007__auto__ = (new cljs.core.IndexedSeq(args236.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25007__auto__);

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.minus;},new cljs.core.Symbol("cljs-time.core","minus","cljs-time.core/minus",(-98943042),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minus","minus",(-43029965),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(518),(518),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),"Returns a new date/time object corresponding to the given date/time\n  moved backwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.minus)?cljs_time.core.minus.cljs$lang$test:null)])));})()
;

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq237){
var G__238 = cljs.core.first.call(null,seq237);
var seq237__$1 = cljs.core.next.call(null,seq237);
var G__239 = cljs.core.first.call(null,seq237__$1);
var seq237__$2 = cljs.core.next.call(null,seq237__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__238,G__239,seq237__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.minus;},new cljs.core.Symbol("cljs-time.core","minus","cljs-time.core/minus",(-98943042),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minus","minus",(-43029965),null),"cljs_time/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(518),(518),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),"Returns a new date/time object corresponding to the given date/time\n  moved backwards by the given Period(s).",(cljs.core.truth_(cljs_time.core.minus)?cljs_time.core.minus.cljs$lang$test:null)]));
/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
(function (){
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
}); return (
new cljs.core.Var(function(){return cljs_time.core.ago;},new cljs.core.Symbol("cljs-time.core","ago","cljs-time.core/ago",(376809100),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"ago","ago",(457099265),null),"cljs_time/core.cljs",(10),(1),(526),(526),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)),"Returns a DateTime a supplied period before the present.\n\n  e.g. `(-> 5 years ago)`",(cljs.core.truth_(cljs_time.core.ago)?cljs_time.core.ago.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime for yesterday relative to now
 */
(function (){
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
}); return (
new cljs.core.Var(function(){return cljs_time.core.yesterday;},new cljs.core.Symbol("cljs-time.core","yesterday","cljs-time.core/yesterday",(1998716669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"yesterday","yesterday",(1929120122),null),"cljs_time/core.cljs",(16),(1),(533),(533),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a DateTime for yesterday relative to now",(cljs.core.truth_(cljs_time.core.yesterday)?cljs_time.core.yesterday.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
(function (){
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
}); return (
new cljs.core.Var(function(){return cljs_time.core.from_now;},new cljs.core.Symbol("cljs-time.core","from-now","cljs-time.core/from-now",(48523508),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"from-now","from-now",(139565641),null),"cljs_time/core.cljs",(15),(1),(538),(538),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null)], null)),"Returns a DateTime a supplied period after the present.\n  e.g. `(-> 30 minutes from-now)`",(cljs.core.truth_(cljs_time.core.from_now)?cljs_time.core.from_now.cljs$lang$test:null)])));})()
;
/**
 * Returns the earliest of the supplied DateTimes
 */
(function (){
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args246 = [];
var len__24987__auto___249 = arguments.length;
var i__24988__auto___250 = (0);
while(true){
if((i__24988__auto___250 < len__24987__auto___249)){
args246.push((arguments[i__24988__auto___250]));

var G__251 = (i__24988__auto___250 + (1));
i__24988__auto___250 = G__251;
continue;
} else {
}
break;
}

var G__248 = args246.length;
switch (G__248) {
case (2):
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args246.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.earliest;},new cljs.core.Symbol("cljs-time.core","earliest","cljs-time.core/earliest",(-401609038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"earliest","earliest",(-287622855),null),"cljs_time/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(544),(544),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),"Returns the earliest of the supplied DateTimes",(cljs.core.truth_(cljs_time.core.earliest)?cljs_time.core.earliest.cljs$lang$test:null)])));})()
;

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.earliest;},new cljs.core.Symbol("cljs-time.core","earliest","cljs-time.core/earliest",(-401609038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"earliest","earliest",(-287622855),null),"cljs_time/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(544),(544),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),"Returns the earliest of the supplied DateTimes",(cljs.core.truth_(cljs_time.core.earliest)?cljs_time.core.earliest.cljs$lang$test:null)]));
/**
 * Returns the latest of the supplied DateTimes
 */
(function (){
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args253 = [];
var len__24987__auto___256 = arguments.length;
var i__24988__auto___257 = (0);
while(true){
if((i__24988__auto___257 < len__24987__auto___256)){
args253.push((arguments[i__24988__auto___257]));

var G__258 = (i__24988__auto___257 + (1));
i__24988__auto___257 = G__258;
continue;
} else {
}
break;
}

var G__255 = args253.length;
switch (G__255) {
case (2):
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args253.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.latest;},new cljs.core.Symbol("cljs-time.core","latest","cljs-time.core/latest",(1819729683),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"latest","latest",(1664855192),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(551),(551),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),"Returns the latest of the supplied DateTimes",(cljs.core.truth_(cljs_time.core.latest)?cljs_time.core.latest.cljs$lang$test:null)])));})()
;

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.latest;},new cljs.core.Symbol("cljs-time.core","latest","cljs-time.core/latest",(1819729683),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"latest","latest",(1664855192),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(551),(551),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt1","dt1",(1944610672),null),new cljs.core.Symbol(null,"dt2","dt2",(680659104),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dts","dts",(133706567),null)], null)),"Returns the latest of the supplied DateTimes",(cljs.core.truth_(cljs_time.core.latest)?cljs_time.core.latest.cljs$lang$test:null)]));
/**
 * Returns the start DateTime of an Interval.
 */
(function (){
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(in$);
}); return (
new cljs.core.Var(function(){return cljs_time.core.start;},new cljs.core.Symbol("cljs-time.core","start","cljs-time.core/start",(1180115657),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"start","start",(1285322546),null),"cljs_time/core.cljs",(12),(1),(558),(558),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null)], null)),"Returns the start DateTime of an Interval.",(cljs.core.truth_(cljs_time.core.start)?cljs_time.core.start.cljs$lang$test:null)])));})()
;
/**
 * Returns the end DateTime of an Interval.
 */
(function (){
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",(-268185958)).cljs$core$IFn$_invoke$arity$1(in$);
}); return (
new cljs.core.Var(function(){return cljs_time.core.end;},new cljs.core.Symbol("cljs-time.core","end","cljs-time.core/end",(1597081466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),"cljs_time/core.cljs",(10),(1),(563),(563),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null)], null)),"Returns the end DateTime of an Interval.",(cljs.core.truth_(cljs_time.core.end)?cljs_time.core.end.cljs$lang$test:null)])));})()
;
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
(function (){
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__24990__auto__ = [];
var len__24987__auto___262 = arguments.length;
var i__24988__auto___263 = (0);
while(true){
if((i__24988__auto___263 < len__24987__auto___262)){
args__24990__auto__.push((arguments[i__24988__auto___263]));

var G__264 = (i__24988__auto___263 + (1));
i__24988__auto___263 = G__264;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return cljs_time.core.extend;},new cljs.core.Symbol("cljs-time.core","extend","cljs-time.core/extend",(-990660206),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"extend","extend",(-817951763),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"by","by",(1671132383),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"by","by",(1671132383),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(568),(568),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"by","by",(1671132383),null)], null)),"Returns an Interval with an end DateTime the specified Period after the end\n  of the given Interval",(cljs.core.truth_(cljs_time.core.extend)?cljs_time.core.extend.cljs$lang$test:null)])));})()
;

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",(-268185958)),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq260){
var G__261 = cljs.core.first.call(null,seq260);
var seq260__$1 = cljs.core.next.call(null,seq260);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__261,seq260__$1);
});

new cljs.core.Var(function(){return cljs_time.core.extend;},new cljs.core.Symbol("cljs-time.core","extend","cljs-time.core/extend",(-990660206),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"extend","extend",(-817951763),null),"cljs_time/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"by","by",(1671132383),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"by","by",(1671132383),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(568),(568),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"by","by",(1671132383),null)], null)),"Returns an Interval with an end DateTime the specified Period after the end\n  of the given Interval",(cljs.core.truth_(cljs_time.core.extend)?cljs_time.core.extend.cljs$lang$test:null)]));
(function (){
cljs_time.core.month_range = (function cljs_time$core$month_range(p__265){
var map__268 = p__265;
var map__268__$1 = ((((!((map__268 == null)))?((((map__268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__268):map__268);
var start = cljs.core.get.call(null,map__268__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__268__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
return cljs.core.take_while.call(null,((function (map__268,map__268__$1,start,end){
return (function (p1__6_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__6_SHARP_,end));
});})(map__268,map__268__$1,start,end))
,cljs.core.map.call(null,((function (map__268,map__268__$1,start,end){
return (function (p1__5_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__5_SHARP_ + (1))));
});})(map__268,map__268__$1,start,end))
,cljs.core.range.call(null)));
}); return (
new cljs.core.Var(function(){return cljs_time.core.month_range;},new cljs.core.Symbol("cljs-time.core","month-range","cljs-time.core/month-range",(1960003884),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"month-range","month-range",(1762540727),null),"cljs_time/core.cljs",(19),(1),(574),(574),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null)], null)),null,(cljs.core.truth_(cljs_time.core.month_range)?cljs_time.core.month_range.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__7_SHARP_){
return p1__7_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
}); return (
new cljs.core.Var(function(){return cljs_time.core.total_days_in_whole_months;},new cljs.core.Symbol("cljs-time.core","total-days-in-whole-months","cljs-time.core/total-days-in-whole-months",(-665856402),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"total-days-in-whole-months","total-days-in-whole-months",(586458339),null),"cljs_time/core.cljs",(34),(1),(579),(579),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interval","interval",(-945940352),null)], null)),null,(cljs.core.truth_(cljs_time.core.total_days_in_whole_months)?cljs_time.core.total_days_in_whole_months.cljs$lang$test:null)])));})()
;
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
(function (){
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__270){
var map__273 = p__270;
var map__273__$1 = ((((!((map__273 == null)))?((((map__273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__273):map__273);
var interval = map__273__$1;
var start = cljs.core.get.call(null,map__273__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__273__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_months_;},new cljs.core.Symbol("cljs-time.core","in-months-","cljs-time.core/in-months-",(272056623),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-months-","in-months-",(501264018),null),"cljs_time/core.cljs",(18),(1),(582),(582),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"interval","interval",(-945940352),null)], null)], null)),"Returns the number of months in the given Interval.\n\n  For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,\n  returns 1 month.\n\n  Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.\n\n  But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.\n\n  And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.",(cljs.core.truth_(cljs_time.core.in_months_)?cljs_time.core.in_months_.cljs$lang$test:null)])));})()
;
/**
 * Returns the number of standard years in the given Interval.
 */
(function (){
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__275){
var map__278 = p__275;
var map__278__$1 = ((((!((map__278 == null)))?((((map__278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__278):map__278);
var start = cljs.core.get.call(null,map__278__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__278__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__23164__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__23164__auto__)){
var and__23164__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__23164__auto____$1)){
var and__23164__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__23164__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__23164__auto____$2;
}
} else {
return and__23164__auto____$1;
}
} else {
return and__23164__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
}); return (
new cljs.core.Var(function(){return cljs_time.core.in_years_;},new cljs.core.Symbol("cljs-time.core","in-years-","cljs-time.core/in-years-",(-1416183497),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"in-years-","in-years-",(-1255525750),null),"cljs_time/core.cljs",(17),(1),(596),(596),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null)], null)),"Returns the number of standard years in the given Interval.",(cljs.core.truth_(cljs_time.core.in_years_)?cljs_time.core.in_years_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",(1890540953))], null));
}); return (
new cljs.core.Var(function(){return cljs_time.core.conversion_error;},new cljs.core.Symbol("cljs-time.core","conversion-error","cljs-time.core/conversion-error",(-361413720),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"conversion-error","conversion-error",(-306643667),null),"cljs_time/core.cljs",(23),(1),(609),(609),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null)),null,(cljs.core.truth_(cljs_time.core.conversion_error)?cljs_time.core.conversion_error.cljs$lang$test:null)])));})()
;
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__285){
var map__286 = p__285;
var map__286__$1 = ((((!((map__286 == null)))?((((map__286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286):map__286);
var millis = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years = cljs.core.get.call(null,map__286__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
var map__288 = this;
var map__288__$1 = ((((!((map__288 == null)))?((((map__288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288):map__288);
var millis__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years__$1 = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",(-45571637)),new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",(-1298579689)),new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__290){
var map__291 = p__290;
var map__291__$1 = ((((!((map__291 == null)))?((((map__291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291):map__291);
var millis = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
var map__293 = this;
var map__293__$1 = ((((!((map__293 == null)))?((((map__293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293):map__293);
var millis__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years__$1 = cljs.core.get.call(null,map__293__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",(58380855)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),new cljs.core.Keyword(null,"months","months",(-45571637)));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__23200__auto__ = years__$1;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
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
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__280){
var map__281 = p__280;
var map__281__$1 = ((((!((map__281 == null)))?((((map__281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__281):map__281);
var millis = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years = cljs.core.get.call(null,map__281__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
var map__283 = this;
var map__283__$1 = ((((!((map__283 == null)))?((((map__283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283):map__283);
var millis__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var seconds__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var minutes__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var hours__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var days__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var weeks__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)));
var months__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var years__$1 = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",(58380855)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),new cljs.core.Keyword(null,"years","years",(-1298579689)));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
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
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__295){
var map__296 = p__295;
var map__296__$1 = ((((!((map__296 == null)))?((((map__296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__296):map__296);
var start = cljs.core.get.call(null,map__296__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__296__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var map__298 = this;
var map__298__$1 = ((((!((map__298 == null)))?((((map__298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298):map__298);
var start__$1 = cljs.core.get.call(null,map__298__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end__$1 = cljs.core.get.call(null,map__298__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
(function (){
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args300 = [];
var len__24987__auto___306 = arguments.length;
var i__24988__auto___307 = (0);
while(true){
if((i__24988__auto___307 < len__24987__auto___306)){
args300.push((arguments[i__24988__auto___307]));

var G__308 = (i__24988__auto___307 + (1));
i__24988__auto___307 = G__308;
continue;
} else {
}
break;
}

var G__302 = args300.length;
switch (G__302) {
case (2):
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args300.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.within_QMARK_;},new cljs.core.Symbol("cljs-time.core","within?","cljs-time.core/within?",(-1991441746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"within?","within?",(-2078912459),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(660),(660),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),"With 2 arguments: Returns true if the given Interval contains the given\n  DateTime. Note that if the DateTime is exactly equal to the\n  end of the interval, this function returns false.\n\n  With 3 arguments: Returns true if the start DateTime is\n  equal to or before and the end DateTime is equal to or after the test\n  DateTime.",(cljs.core.truth_(cljs_time.core.within_QMARK_)?cljs_time.core.within_QMARK_.cljs$lang$test:null)])));})()
;

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__303,date){
var map__304 = p__303;
var map__304__$1 = ((((!((map__304 == null)))?((((map__304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__304):map__304);
var start = cljs.core.get.call(null,map__304__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__304__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__23200__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
var and__23164__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__23164__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__23164__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs_time.core.within_QMARK_;},new cljs.core.Symbol("cljs-time.core","within?","cljs-time.core/within?",(-1991441746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"within?","within?",(-2078912459),null),"cljs_time/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(660),(660),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)], null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),"With 2 arguments: Returns true if the given Interval contains the given\n  DateTime. Note that if the DateTime is exactly equal to the\n  end of the interval, this function returns false.\n\n  With 3 arguments: Returns true if the start DateTime is\n  equal to or before and the end DateTime is equal to or after the test\n  DateTime.",(cljs.core.truth_(cljs_time.core.within_QMARK_)?cljs_time.core.within_QMARK_.cljs$lang$test:null)]));
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
(function (){
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args310 = [];
var len__24987__auto___319 = arguments.length;
var i__24988__auto___320 = (0);
while(true){
if((i__24988__auto___320 < len__24987__auto___319)){
args310.push((arguments[i__24988__auto___320]));

var G__321 = (i__24988__auto___320 + (1));
i__24988__auto___320 = G__321;
continue;
} else {
}
break;
}

var G__312 = args310.length;
switch (G__312) {
case (2):
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args310.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.overlaps_QMARK_;},new cljs.core.Symbol("cljs-time.core","overlaps?","cljs-time.core/overlaps?",(1440024391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"overlaps?","overlaps?",(1533661898),null),"cljs_time/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(675),(675),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),"With 2 arguments: Returns true of the two given Intervals overlap.\n  Note that intervals that satisfy abuts? do not satisfy overlaps?\n\n  With 4 arguments: Returns true if the range specified by start-a and end-a\n  overlaps with the range specified by start-b and end-b.",(cljs.core.truth_(cljs_time.core.overlaps_QMARK_)?cljs_time.core.overlaps_QMARK_.cljs$lang$test:null)])));})()
;

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__313,p__314){
var map__315 = p__313;
var map__315__$1 = ((((!((map__315 == null)))?((((map__315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__315):map__315);
var start_a = cljs.core.get.call(null,map__315__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end_a = cljs.core.get.call(null,map__315__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var map__316 = p__314;
var map__316__$1 = ((((!((map__316 == null)))?((((map__316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__316):map__316);
var start_b = cljs.core.get.call(null,map__316__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end_b = cljs.core.get.call(null,map__316__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var and__23164__auto__ = cljs.core.not.call(null,(function (){var or__23200__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__23164__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__23164__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__23200__auto__ = (function (){var and__23164__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__23164__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__23164__auto__;
}
})();
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
var or__23200__auto____$1 = (function (){var and__23164__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__23164__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__23164__auto__;
}
})();
if(cljs.core.truth_(or__23200__auto____$1)){
return or__23200__auto____$1;
} else {
var or__23200__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__23200__auto____$2)){
return or__23200__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs_time.core.overlaps_QMARK_;},new cljs.core.Symbol("cljs-time.core","overlaps?","cljs-time.core/overlaps?",(1440024391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"overlaps?","overlaps?",(1533661898),null),"cljs_time/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(675),(675),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null)], null)),"With 2 arguments: Returns true of the two given Intervals overlap.\n  Note that intervals that satisfy abuts? do not satisfy overlaps?\n\n  With 4 arguments: Returns true if the range specified by start-a and end-a\n  overlaps with the range specified by start-b and end-b.",(cljs.core.truth_(cljs_time.core.overlaps_QMARK_)?cljs_time.core.overlaps_QMARK_.cljs$lang$test:null)]));
/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
(function (){
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now.call(null);
return cljs_time.core.overlap.call(null,i_a,cljs_time.core.interval.call(null,n,n));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.call(null,i_a,i_b))){
return cljs_time.core.interval.call(null,cljs_time.core.latest.call(null,cljs_time.core.start.call(null,i_a),cljs_time.core.start.call(null,i_b)),cljs_time.core.earliest.call(null,cljs_time.core.end.call(null,i_a),cljs_time.core.end.call(null,i_b)));
} else {
return null;

}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.overlap;},new cljs.core.Symbol("cljs-time.core","overlap","cljs-time.core/overlap",(-446717856),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"overlap","overlap",(-32804117),null),"cljs_time/core.cljs",(14),(1),(689),(689),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i-a","i-a",(-2012729656),null),new cljs.core.Symbol(null,"i-b","i-b",(1364550150),null)], null)),"Returns an Interval representing the overlap of the specified Intervals.\n Returns nil if the Intervals do not overlap.\n The first argument must not be nil.\n If the second argument is nil then the overlap of the first argument\n and a zero duration interval with both start and end times equal to the\n current time is returned.",(cljs.core.truth_(cljs_time.core.overlap)?cljs_time.core.overlap.cljs$lang$test:null)])));})()
;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
(function (){
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__323,p__324){
var map__329 = p__323;
var map__329__$1 = ((((!((map__329 == null)))?((((map__329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__329):map__329);
var start_a = cljs.core.get.call(null,map__329__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end_a = cljs.core.get.call(null,map__329__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var map__330 = p__324;
var map__330__$1 = ((((!((map__330 == null)))?((((map__330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__330):map__330);
var start_b = cljs.core.get.call(null,map__330__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end_b = cljs.core.get.call(null,map__330__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var or__23200__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.abuts_QMARK_;},new cljs.core.Symbol("cljs-time.core","abuts?","cljs-time.core/abuts?",(220971451),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"abuts?","abuts?",(40152126),null),"cljs_time/core.cljs",(13),(1),(704),(704),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-a","start-a",(-700040297),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-a","end-a",(-87686131),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"start-b","start-b",(-386798506),null),new cljs.core.Keyword(null,"start","start",(-355208981)),new cljs.core.Symbol(null,"end-b","end-b",(278326686),null),new cljs.core.Keyword(null,"end","end",(-268185958))], null)], null)),"Returns true if Interval a abuts b, i.e. then end of a is exactly the\n  beginning of b.",(cljs.core.truth_(cljs_time.core.abuts_QMARK_)?cljs_time.core.abuts_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs_time$core$DateTimeProtocol$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.date_QMARK_;},new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",(1865755164),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"date?","date?",(1785305217),null),"cljs_time/core.cljs",(12),(1),(710),(710),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs_time.core.date_QMARK_)?cljs_time.core.date_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
}); return (
new cljs.core.Var(function(){return cljs_time.core.interval_QMARK_;},new cljs.core.Symbol("cljs-time.core","interval?","cljs-time.core/interval?",(-390574086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"interval?","interval?",(-168451743),null),"cljs_time/core.cljs",(16),(1),(713),(713),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs_time.core.interval_QMARK_)?cljs_time.core.interval_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
}); return (
new cljs.core.Var(function(){return cljs_time.core.period_QMARK_;},new cljs.core.Symbol("cljs-time.core","period?","cljs-time.core/period?",(-1813365123),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period?","period?",(-1801360134),null),"cljs_time/core.cljs",(14),(1),(716),(716),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs_time.core.period_QMARK_)?cljs_time.core.period_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__23164__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__23164__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__23164__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.period_type_QMARK_;},new cljs.core.Symbol("cljs-time.core","period-type?","cljs-time.core/period-type?",(-1613971992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"period-type?","period-type?",(-1522929837),null),"cljs_time/core.cljs",(19),(1),(719),(719),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs_time.core.period_type_QMARK_)?cljs_time.core.period_type_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Years
 */
(function (){
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",(-1298579689)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.years_QMARK_;},new cljs.core.Symbol("cljs-time.core","years?","cljs-time.core/years?",(2011899690),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"years?","years?",(1923062181),null),"cljs_time/core.cljs",(13),(1),(722),(722),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Years",(cljs.core.truth_(cljs_time.core.years_QMARK_)?cljs_time.core.years_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Months
 */
(function (){
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",(-45571637)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.months_QMARK_;},new cljs.core.Symbol("cljs-time.core","months?","cljs-time.core/months?",(1186692010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"months?","months?",(1274284335),null),"cljs_time/core.cljs",(14),(1),(727),(727),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Months",(cljs.core.truth_(cljs_time.core.months_QMARK_)?cljs_time.core.months_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Weeks
 */
(function (){
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",(1844596125)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.weeks_QMARK_;},new cljs.core.Symbol("cljs-time.core","weeks?","cljs-time.core/weeks?",(-1942093448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"weeks?","weeks?",(-2115282947),null),"cljs_time/core.cljs",(13),(1),(732),(732),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Weeks",(cljs.core.truth_(cljs_time.core.weeks_QMARK_)?cljs_time.core.weeks_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Days
 */
(function (){
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",(-1394072564)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.days_QMARK_;},new cljs.core.Symbol("cljs-time.core","days?","cljs-time.core/days?",(-1444796962),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"days?","days?",(-1369573339),null),"cljs_time/core.cljs",(12),(1),(737),(737),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Days",(cljs.core.truth_(cljs_time.core.days_QMARK_)?cljs_time.core.days_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Hours
 */
(function (){
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",(58380855)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.hours_QMARK_;},new cljs.core.Symbol("cljs-time.core","hours?","cljs-time.core/hours?",(-592648107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"hours?","hours?",(-703056424),null),"cljs_time/core.cljs",(13),(1),(742),(742),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Hours",(cljs.core.truth_(cljs_time.core.hours_QMARK_)?cljs_time.core.hours_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Minutes
 */
(function (){
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.minutes_QMARK_;},new cljs.core.Symbol("cljs-time.core","minutes?","cljs-time.core/minutes?",(1519077830),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"minutes?","minutes?",(1707091035),null),"cljs_time/core.cljs",(15),(1),(747),(747),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Minutes",(cljs.core.truth_(cljs_time.core.minutes_QMARK_)?cljs_time.core.minutes_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if the given value is an instance of Seconds
 */
(function (){
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),val);
}); return (
new cljs.core.Var(function(){return cljs_time.core.seconds_QMARK_;},new cljs.core.Symbol("cljs-time.core","seconds?","cljs-time.core/seconds?",(220763618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"seconds?","seconds?",(40126569),null),"cljs_time/core.cljs",(15),(1),(752),(752),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Returns true if the given value is an instance of Seconds",(cljs.core.truth_(cljs_time.core.seconds_QMARK_)?cljs_time.core.seconds_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
}); return (
new cljs.core.Var(function(){return cljs_time.core.mins_ago;},new cljs.core.Symbol("cljs-time.core","mins-ago","cljs-time.core/mins-ago",(2042824745),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"mins-ago","mins-ago",(1933466278),null),"cljs_time/core.cljs",(15),(1),(757),(757),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(cljs_time.core.mins_ago)?cljs_time.core.mins_ago.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args335 = [];
var len__24987__auto___338 = arguments.length;
var i__24988__auto___339 = (0);
while(true){
if((i__24988__auto___339 < len__24987__auto___338)){
args335.push((arguments[i__24988__auto___339]));

var G__340 = (i__24988__auto___339 + (1));
i__24988__auto___339 = G__340;
continue;
} else {
}
break;
}

var G__337 = args335.length;
switch (G__337) {
case (1):
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args335.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.last_day_of_the_month;},new cljs.core.Symbol("cljs-time.core","last-day-of-the-month","cljs-time.core/last-day-of-the-month",(-479213383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",(-432331230),null),"cljs_time/core.cljs",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(761),(761),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.last_day_of_the_month)?cljs_time.core.last_day_of_the_month.cljs$lang$test:null)])));})()
;

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.last_day_of_the_month;},new cljs.core.Symbol("cljs-time.core","last-day-of-the-month","cljs-time.core/last-day-of-the-month",(-479213383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",(-432331230),null),"cljs_time/core.cljs",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(761),(761),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.last_day_of_the_month)?cljs_time.core.last_day_of_the_month.cljs$lang$test:null)]));
(function (){
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args342 = [];
var len__24987__auto___345 = arguments.length;
var i__24988__auto___346 = (0);
while(true){
if((i__24988__auto___346 < len__24987__auto___345)){
args342.push((arguments[i__24988__auto___346]));

var G__347 = (i__24988__auto___346 + (1));
i__24988__auto___346 = G__347;
continue;
} else {
}
break;
}

var G__344 = args342.length;
switch (G__344) {
case (1):
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args342.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.number_of_days_in_the_month;},new cljs.core.Symbol("cljs-time.core","number-of-days-in-the-month","cljs-time.core/number-of-days-in-the-month",(-1454868228),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",(-1408914063),null),"cljs_time/core.cljs",(34),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(767),(767),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.number_of_days_in_the_month)?cljs_time.core.number_of_days_in_the_month.cljs$lang$test:null)])));})()
;

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.number_of_days_in_the_month;},new cljs.core.Symbol("cljs-time.core","number-of-days-in-the-month","cljs-time.core/number-of-days-in-the-month",(-1454868228),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",(-1408914063),null),"cljs_time/core.cljs",(34),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(767),(767),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.number_of_days_in_the_month)?cljs_time.core.number_of_days_in_the_month.cljs$lang$test:null)]));
(function (){
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args349 = [];
var len__24987__auto___352 = arguments.length;
var i__24988__auto___353 = (0);
while(true){
if((i__24988__auto___353 < len__24987__auto___352)){
args349.push((arguments[i__24988__auto___353]));

var G__354 = (i__24988__auto___353 + (1));
i__24988__auto___353 = G__354;
continue;
} else {
}
break;
}

var G__351 = args349.length;
switch (G__351) {
case (1):
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args349.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.first_day_of_the_month;},new cljs.core.Symbol("cljs-time.core","first-day-of-the-month","cljs-time.core/first-day-of-the-month",(1176891276),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",(2104394251),null),"cljs_time/core.cljs",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(773),(773),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.first_day_of_the_month)?cljs_time.core.first_day_of_the_month.cljs$lang$test:null)])));})()
;

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.core.first_day_of_the_month;},new cljs.core.Symbol("cljs-time.core","first-day-of-the-month","cljs-time.core/first-day-of-the-month",(1176891276),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",(2104394251),null),"cljs_time/core.cljs",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(773),(773),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.core.first_day_of_the_month)?cljs_time.core.first_day_of_the_month.cljs$lang$test:null)]));

/**
 * @interface
 */
(function (){
cljs_time.core.IToPeriod = function(){}; return (
new cljs.core.Var(function(){return cljs_time.core.IToPeriod;},new cljs.core.Symbol("cljs-time.core","IToPeriod","cljs-time.core/IToPeriod",(-1468211941),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"IToPeriod","IToPeriod",(-1390383202),null),"cljs_time/core.cljs",(23),(1),(780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"->period","->period",(1512663509),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)], null)])], null),(780),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs_time.core.IToPeriod)?cljs_time.core.IToPeriod.cljs$lang$test:null)])));})()
;

(function (){
cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__24343__auto__ = (((obj == null))?null:obj);
var m__24344__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,obj);
} else {
var m__24344__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.core.__GT_period;},new cljs.core.Symbol("cljs-time.core","->period","cljs-time.core/->period",(1602083920),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.core","IToPeriod","cljs-time.core/IToPeriod",(-1468211941),null),new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"->period","->period",(1512663509),null),"cljs_time/core.cljs",(12),(1),(780),(781),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),null,(cljs.core.truth_(cljs_time.core.__GT_period)?cljs_time.core.__GT_period.cljs$lang$test:null)])));})()
;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__356){
var map__357 = p__356;
var map__357__$1 = ((((!((map__357 == null)))?((((map__357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__357):map__357);
var interval = map__357__$1;
var start = cljs.core.get.call(null,map__357__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end = cljs.core.get.call(null,map__357__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var map__359 = this;
var map__359__$1 = ((((!((map__359 == null)))?((((map__359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__359):map__359);
var interval__$1 = map__359__$1;
var start__$1 = cljs.core.get.call(null,map__359__$1,new cljs.core.Keyword(null,"start","start",(-355208981)));
var end__$1 = cljs.core.get.call(null,map__359__$1,new cljs.core.Keyword(null,"end","end",(-268185958)));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",(-1298579689)),years,new cljs.core.Keyword(null,"months","months",(-45571637)),months,new cljs.core.Keyword(null,"days","days",(-1394072564)),days,new cljs.core.Keyword(null,"hours","hours",(58380855)),hours,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),minutes,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),seconds,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
(function (){
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args361 = [];
var len__24987__auto___365 = arguments.length;
var i__24988__auto___366 = (0);
while(true){
if((i__24988__auto___366 < len__24987__auto___365)){
args361.push((arguments[i__24988__auto___366]));

var G__367 = (i__24988__auto___366 + (1));
i__24988__auto___366 = G__367;
continue;
} else {
}
break;
}

var G__363 = args361.length;
switch (G__363) {
case (4):
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (3):
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args361.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.core.today_at;},new cljs.core.Symbol("cljs-time.core","today-at","cljs-time.core/today-at",(371410262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"today-at","today-at",(728643803),null),"cljs_time/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(816),(816),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),null,(cljs.core.truth_(cljs_time.core.today_at)?cljs_time.core.today_at.cljs$lang$test:null)])));})()
;

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__364 = (new goog.date.UtcDateTime());
G__364.setHours(hours);

G__364.setMinutes(minutes);

G__364.setSeconds(seconds);

G__364.setMilliseconds(millis);

return G__364;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs_time.core.today_at;},new cljs.core.Symbol("cljs-time.core","today-at","cljs-time.core/today-at",(371410262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"today-at","today-at",(728643803),null),"cljs_time/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(816),(816),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null)], null)),null,(cljs.core.truth_(cljs_time.core.today_at)?cljs_time.core.today_at.cljs$lang$test:null)]));
(function (){
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_370 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_370;
}}); return (
new cljs.core.Var(function(){return cljs_time.core.do_at_STAR_;},new cljs.core.Symbol("cljs-time.core","do-at*","cljs-time.core/do-at*",(-1240004926),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"do-at*","do-at*",(-1331539897),null),"cljs_time/core.cljs",(13),(1),(828),(828),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"body-fn","body-fn",(566678420),null)], null)),null,(cljs.core.truth_(cljs_time.core.do_at_STAR_)?cljs_time.core.do_at_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
(function (){
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.call(null,cljs_time.core.date_time,cljs.core.map.call(null,cljs.core.apply,cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
}); return (
new cljs.core.Var(function(){return cljs_time.core.floor;},new cljs.core.Symbol("cljs-time.core","floor","cljs-time.core/floor",(-616339583),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.core","cljs-time.core",(1525760334),null),new cljs.core.Symbol(null,"floor","floor",(-772394748),null),"cljs_time/core.cljs",(12),(1),(832),(832),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"dt-fn","dt-fn",(-652824050),null)], null)),"Floors the given date-time dt to the given time unit dt-fn,\n e.g. (floor (now) hour) returns (now) for all units\n up to and including the hour",(cljs.core.truth_(cljs_time.core.floor)?cljs_time.core.floor.cljs$lang$test:null)])));})()
;
