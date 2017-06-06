goog.provide("cljs_time.internal.core");
(function (){
cljs_time.internal.core.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null); return (
new cljs.core.Var(function(){return cljs_time.internal.core.months;},new cljs.core.Symbol("cljs-time.internal.core","months","cljs-time.internal.core/months",(-618121448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),"cljs_time/internal/core.cljs",(12),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.internal.core.months)?cljs_time.internal.core.months.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null); return (
new cljs.core.Var(function(){return cljs_time.internal.core.days;},new cljs.core.Symbol("cljs-time.internal.core","days","cljs-time.internal.core/days",(-2102675603),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"days","days",(246458963),null),"cljs_time/internal/core.cljs",(10),(1),(12),(12),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.internal.core.days)?cljs_time.internal.core.days.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.abbreviate = (function cljs_time$internal$core$abbreviate(n,s){
return cljs.core.subs.call(null,s,(0),n);
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.abbreviate;},new cljs.core.Symbol("cljs-time.internal.core","abbreviate","cljs-time.internal.core/abbreviate",(1641426231),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"abbreviate","abbreviate",(-439404487),null),"cljs_time/internal/core.cljs",(17),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.abbreviate)?cljs_time.internal.core.abbreviate.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__24990__auto__ = [];
var len__24987__auto___23 = arguments.length;
var i__24988__auto___24 = (0);
while(true){
if((i__24988__auto___24 < len__24987__auto___23)){
args__24990__auto__.push((arguments[i__24988__auto___24]));

var G__25 = (i__24988__auto___24 + (1));
i__24988__auto___24 = G__25;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((0) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core._EQ_;},new cljs.core.Symbol("cljs-time.internal.core","=","cljs-time.internal.core/=",(580910645),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"=","=",(-1501502141),null),"cljs_time/internal/core.cljs",(8),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core._EQ_)?cljs_time.internal.core._EQ_.cljs$lang$test:null)])));})()
;

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_.call(null,(function (p1__1_SHARP_){
return (p1__1_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__2_SHARP_){
return p1__2_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq22){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22));
});

new cljs.core.Var(function(){return cljs_time.internal.core._EQ_;},new cljs.core.Symbol("cljs-time.internal.core","=","cljs-time.internal.core/=",(580910645),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"=","=",(-1501502141),null),"cljs_time/internal/core.cljs",(8),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core._EQ_)?cljs_time.internal.core._EQ_.cljs$lang$test:null)]));
(function (){
cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod.call(null,y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod.call(null,y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod.call(null,y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.leap_year_QMARK_;},new cljs.core.Symbol("cljs-time.internal.core","leap-year?","cljs-time.internal.core/leap-year?",(1049422221),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"leap-year?","leap-year?",(-1296579449),null),"cljs_time/internal/core.cljs",(17),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",(-117328249),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.leap_year_QMARK_)?cljs_time.internal.core.leap_year_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null); return (
new cljs.core.Var(function(){return cljs_time.internal.core.days_in_month;},new cljs.core.Symbol("cljs-time.internal.core","days-in-month","cljs-time.internal.core/days-in-month",(1910271642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"days-in-month","days-in-month",(-840262740),null),"cljs_time/internal/core.cljs",(19),(1),(29),(29),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_time.internal.core.days_in_month)?cljs_time.internal.core.days_in_month.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.corrected_dim = (function cljs_time$internal$core$corrected_dim(month){
return cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,month,(1)))?(11):(month - (1))));
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.corrected_dim;},new cljs.core.Symbol("cljs-time.internal.core","corrected-dim","cljs-time.internal.core/corrected-dim",(1125461978),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"corrected-dim","corrected-dim",(-819733808),null),"cljs_time/internal/core.cljs",(20),(1),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.corrected_dim)?cljs_time.internal.core.corrected_dim.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__27 = cljs_time.internal.core.corrected_dim.call(null,month);
if(cljs.core.truth_((function (){var and__23164__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,year);
if(cljs.core.truth_(and__23164__auto__)){
return cljs_time.internal.core._EQ_.call(null,month,(2));
} else {
return and__23164__auto__;
}
})())){
return (G__27 + (1));
} else {
return G__27;
}
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.year_corrected_dim;},new cljs.core.Symbol("cljs-time.internal.core","year-corrected-dim","cljs-time.internal.core/year-corrected-dim",(-1403466380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"year-corrected-dim","year-corrected-dim",(543282766),null),"cljs_time/internal/core.cljs",(25),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"year","year",(1976444920),null),new cljs.core.Symbol(null,"month","month",(-319717006),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.year_corrected_dim)?cljs_time.internal.core.year_corrected_dim.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__28){
var map__32 = p__28;
var map__32__$1 = ((((!((map__32 == null)))?((((map__32.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32):map__32);
var d = map__32__$1;
var years = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"years","years",(-1298579689)));
var months = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"months","months",(-45571637)));
var days = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)));
var hours = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"hours","hours",(58380855)));
var minutes = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)));
var seconds = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)));
var millis = cljs.core.get.call(null,map__32__$1,new cljs.core.Keyword(null,"millis","millis",(-1338288387)));
var months_QMARK_ = (cljs.core.truth_(months)?(((1) <= months)) && ((months <= (12))):null);
var dim = (cljs.core.truth_(years)?(function (){var and__23164__auto__ = months;
if(cljs.core.truth_(and__23164__auto__)){
var and__23164__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__23164__auto____$1)){
return cljs_time.internal.core.year_corrected_dim.call(null,years,months);
} else {
return and__23164__auto____$1;
}
} else {
return and__23164__auto__;
}
})():(function (){var and__23164__auto__ = months;
if(cljs.core.truth_(and__23164__auto__)){
var and__23164__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__23164__auto____$1)){
return cljs_time.internal.core.corrected_dim.call(null,months);
} else {
return and__23164__auto____$1;
}
} else {
return and__23164__auto__;
}
})());
var days_QMARK_ = (cljs.core.truth_(days)?(cljs.core.truth_(dim)?(((1) <= days)) && ((days <= dim)):(((1) <= days)) && ((days <= (31)))):null);
var hours_QMARK_ = (cljs.core.truth_(hours)?(((0) <= hours)) && ((hours <= (23))):null);
var minutes_QMARK_ = (cljs.core.truth_(minutes)?(((0) <= minutes)) && ((minutes <= (59))):null);
var seconds_QMARK_ = (cljs.core.truth_(seconds)?(((0) <= seconds)) && ((seconds <= (60))):null);
var millis_QMARK_ = (cljs.core.truth_(millis)?(((0) <= millis)) && ((millis <= (999))):null);
if(cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [months_QMARK_,days_QMARK_,hours_QMARK_,minutes_QMARK_,seconds_QMARK_,millis_QMARK_], null)))){
return d;
} else {
throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"invalid-date","invalid-date",(2030506573)),new cljs.core.Keyword(null,"date","date",(-1463434462)),d,new cljs.core.Keyword(null,"errors","errors",(-908790718)),(function (){var G__34 = cljs.core.PersistentArrayMap.EMPTY;
var G__34__$1 = ((months_QMARK_ === false)?cljs.core.assoc.call(null,G__34,new cljs.core.Keyword(null,"months","months",(-45571637)),months):G__34);
var G__34__$2 = ((days_QMARK_ === false)?cljs.core.assoc.call(null,G__34__$1,new cljs.core.Keyword(null,"days","days",(-1394072564)),days):G__34__$1);
var G__34__$3 = ((hours_QMARK_ === false)?cljs.core.assoc.call(null,G__34__$2,new cljs.core.Keyword(null,"hours","hours",(58380855)),hours):G__34__$2);
var G__34__$4 = ((minutes_QMARK_ === false)?cljs.core.assoc.call(null,G__34__$3,new cljs.core.Keyword(null,"minutes","minutes",(1319166394)),minutes):G__34__$3);
var G__34__$5 = ((seconds_QMARK_ === false)?cljs.core.assoc.call(null,G__34__$4,new cljs.core.Keyword(null,"seconds","seconds",(-445266194)),seconds):G__34__$4);
if(millis_QMARK_ === false){
return cljs.core.assoc.call(null,G__34__$5,new cljs.core.Keyword(null,"millis","millis",(-1338288387)),millis);
} else {
return G__34__$5;
}
})()], null));
}
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.valid_date_QMARK_;},new cljs.core.Symbol("cljs-time.internal.core","valid-date?","cljs-time.internal.core/valid-date?",(56768377),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"valid-date?","valid-date?",(2137742451),null),"cljs_time/internal/core.cljs",(18),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",(341951838),null),new cljs.core.Symbol(null,"months","months",(1594959890),null),new cljs.core.Symbol(null,"days","days",(246458963),null),new cljs.core.Symbol(null,"hours","hours",(1698912382),null),new cljs.core.Symbol(null,"minutes","minutes",(-1335269375),null),new cljs.core.Symbol(null,"seconds","seconds",(1195265333),null),new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.valid_date_QMARK_)?cljs_time.internal.core.valid_date_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__4_SHARP_,p2__3_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,p2__3_SHARP_,x))){
return p1__4_SHARP_;
} else {
return null;
}
}),coll));
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.index_of;},new cljs.core.Symbol("cljs-time.internal.core","index-of","cljs-time.internal.core/index-of",(-923350985),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"index-of","index-of",(1275975485),null),"cljs_time/internal/core.cljs",(15),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.index_of)?cljs_time.internal.core.index_of.cljs$lang$test:null)])));})()
;
/**
 * Formats a string using goog.string.format.
 */
(function (){
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__24990__auto__ = [];
var len__24987__auto___37 = arguments.length;
var i__24988__auto___38 = (0);
while(true){
if((i__24988__auto___38 < len__24987__auto___37)){
args__24990__auto__.push((arguments[i__24988__auto___38]));

var G__39 = (i__24988__auto___38 + (1));
i__24988__auto___38 = G__39;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.format;},new cljs.core.Symbol("cljs-time.internal.core","format","cljs-time.internal.core/format",(-1611049881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"format","format",(333606761),null),"cljs_time/internal/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(67),(67),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Formats a string using goog.string.format.",(cljs.core.truth_(cljs_time.internal.core.format)?cljs_time.internal.core.format.cljs$lang$test:null)])));})()
;

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq35){
var G__36 = cljs.core.first.call(null,seq35);
var seq35__$1 = cljs.core.next.call(null,seq35);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__36,seq35__$1);
});

new cljs.core.Var(function(){return cljs_time.internal.core.format;},new cljs.core.Symbol("cljs-time.internal.core","format","cljs-time.internal.core/format",(-1611049881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"format","format",(333606761),null),"cljs_time/internal/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(67),(67),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Formats a string using goog.string.format.",(cljs.core.truth_(cljs_time.internal.core.format)?cljs_time.internal.core.format.cljs$lang$test:null)]));
/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
(function (){
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args40 = [];
var len__24987__auto___43 = arguments.length;
var i__24988__auto___44 = (0);
while(true){
if((i__24988__auto___44 < len__24987__auto___43)){
args40.push((arguments[i__24988__auto___44]));

var G__45 = (i__24988__auto___44 + (1));
i__24988__auto___44 = G__45;
continue;
} else {
}
break;
}

var G__42 = args40.length;
switch (G__42) {
case (1):
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.zero_pad;},new cljs.core.Symbol("cljs-time.internal.core","zero-pad","cljs-time.internal.core/zero-pad",(1342004562),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"zero-pad","zero-pad",(-888911324),null),"cljs_time/internal/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(77),(77),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),"Remove the need to pull in gstring/format code in advanced compilation",(cljs.core.truth_(cljs_time.internal.core.zero_pad)?cljs_time.internal.core.zero_pad.cljs$lang$test:null)])));})()
;

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if((zeros < (1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.take.call(null,(zeros - cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),cljs.core.repeat.call(null,"0")))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs_time.internal.core.zero_pad;},new cljs.core.Symbol("cljs-time.internal.core","zero-pad","cljs-time.internal.core/zero-pad",(1342004562),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"zero-pad","zero-pad",(-888911324),null),"cljs_time/internal/core.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(77),(77),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"zeros","zeros",(1975953779),null)], null)),"Remove the need to pull in gstring/format code in advanced compilation",(cljs.core.truth_(cljs_time.internal.core.zero_pad)?cljs_time.internal.core.zero_pad.cljs$lang$test:null)]));
(function (){
cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",(-1338288387))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",(-445266194))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",(1319166394))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",(58380855))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",(-1394072564))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",(1844596125))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",(-45571637))], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",(-1298579689))], null),scale_fn);
}); return (
new cljs.core.Var(function(){return cljs_time.internal.core.multiplied_by;},new cljs.core.Symbol("cljs-time.internal.core","multiplied-by","cljs-time.internal.core/multiplied-by",(1146149385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.internal.core","cljs-time.internal.core",(246204595),null),new cljs.core.Symbol(null,"multiplied-by","multiplied-by",(-664813305),null),"cljs_time/internal/core.cljs",(20),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"period","period",(1288402336),null),new cljs.core.Symbol(null,"scalar","scalar",(-1043076198),null)], null)),null,(cljs.core.truth_(cljs_time.internal.core.multiplied_by)?cljs_time.internal.core.multiplied_by.cljs$lang$test:null)])));})()
;
