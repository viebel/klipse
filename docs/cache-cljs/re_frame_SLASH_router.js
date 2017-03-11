goog.provide("re_frame.router");
(function (){
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",(-933676816)),(function (f){
return re_frame.interop.after_render.call(null,(function (){
return re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",(177875009)),re_frame.interop.next_tick], null); return (
new cljs.core.Var(function(){return re_frame.router.later_fns;},new cljs.core.Symbol("re-frame.router","later-fns","re-frame.router/later-fns",(-1599523123),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"later-fns","later-fns",(95921777),null),"re_frame/router.cljc",(15),(1),(65),(65),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.router.later_fns)?re_frame.router.later_fns.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
re_frame.router.IEventQueue = function(){}; return (
new cljs.core.Var(function(){return re_frame.router.IEventQueue;},new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"IEventQueue","IEventQueue",(-559325986),null),"re_frame/router.cljc",(25),(1),(71),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentHashMap.fromArrays([cljs.core.with_meta(new cljs.core.Symbol(null,"-run-queue","-run-queue",(-1223480987),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"remove-post-event-callback","remove-post-event-callback",(-909482234),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-add-event","-add-event",(359588522),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-resume","-resume",(1374405354),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"push","push",(-1854644502),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-run-next-tick","-run-next-tick",(-1506999860),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-fsm-trigger","-fsm-trigger",(1685336629),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-pause","-pause",(686049622),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"add-post-event-callback","add-post-event-callback",(182608154),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-process-1st-event-in-queue","-process-1st-event-in-queue",(445965755),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-call-post-event-callbacks","-call-post-event-callbacks",(1053461564),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"-exception","-exception",(-51899650),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null))],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"trigger","trigger",(1743997666),null),new cljs.core.Symbol(null,"arg","arg",(-106730310),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"later-fn","later-fn",(-1189002771),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"callack","callack",(1314802695),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"ex","ex",(226760186),null)], null)], null)])], null),(71),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(re_frame.router.IEventQueue)?re_frame.router.IEventQueue.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router.push = (function re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router.push[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,event);
} else {
var m__25347__auto____$1 = (re_frame.router.push["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router.push;},new cljs.core.Symbol("re-frame.router","push","re-frame.router/push",(932302126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"push","push",(-1854644502),null),"re_frame/router.cljc",(8),(1),(71),(74),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),null,(cljs.core.truth_(re_frame.router.push)?re_frame.router.push.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,id,callack);
} else {
var m__25347__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router.add_post_event_callback;},new cljs.core.Symbol("re-frame.router","add-post-event-callback","re-frame.router/add-post-event-callback",(-276293930),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"add-post-event-callback","add-post-event-callback",(182608154),null),"re_frame/router.cljc",(27),(1),(71),(75),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"callack","callack",(1314802695),null)], null)),null,(cljs.core.truth_(re_frame.router.add_post_event_callback)?re_frame.router.add_post_event_callback.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,f);
} else {
var m__25347__auto____$1 = (re_frame.router.remove_post_event_callback["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router.remove_post_event_callback;},new cljs.core.Symbol("re-frame.router","remove-post-event-callback","re-frame.router/remove-post-event-callback",(1457649530),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"remove-post-event-callback","remove-post-event-callback",(-909482234),null),"re_frame/router.cljc",(30),(1),(71),(76),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(re_frame.router.remove_post_event_callback)?re_frame.router.remove_post_event_callback.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,trigger,arg);
} else {
var m__25347__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._fsm_trigger;},new cljs.core.Symbol("re-frame.router","-fsm-trigger","re-frame.router/-fsm-trigger",(123380337),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-fsm-trigger","-fsm-trigger",(1685336629),null),"re_frame/router.cljc",(16),(1),(71),(79),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"trigger","trigger",(1743997666),null),new cljs.core.Symbol(null,"arg","arg",(-106730310),null)], null)),null,(cljs.core.truth_(re_frame.router._fsm_trigger)?re_frame.router._fsm_trigger.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._add_event[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,event);
} else {
var m__25347__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._add_event;},new cljs.core.Symbol("re-frame.router","-add-event","re-frame.router/-add-event",(-2013179282),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-add-event","-add-event",(359588522),null),"re_frame/router.cljc",(14),(1),(71),(82),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),null,(cljs.core.truth_(re_frame.router._add_event)?re_frame.router._add_event.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._process_1st_event_in_queue;},new cljs.core.Symbol("re-frame.router","-process-1st-event-in-queue","re-frame.router/-process-1st-event-in-queue",(2008118631),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-process-1st-event-in-queue","-process-1st-event-in-queue",(445965755),null),"re_frame/router.cljc",(31),(1),(71),(83),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(re_frame.router._process_1st_event_in_queue)?re_frame.router._process_1st_event_in_queue.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._run_next_tick;},new cljs.core.Symbol("re-frame.router","-run-next-tick","re-frame.router/-run-next-tick",(956338480),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-run-next-tick","-run-next-tick",(-1506999860),null),"re_frame/router.cljc",(18),(1),(71),(84),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(re_frame.router._run_next_tick)?re_frame.router._run_next_tick.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._run_queue[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._run_queue;},new cljs.core.Symbol("re-frame.router","-run-queue","re-frame.router/-run-queue",(171358497),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-run-queue","-run-queue",(-1223480987),null),"re_frame/router.cljc",(14),(1),(71),(85),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(re_frame.router._run_queue)?re_frame.router._run_queue.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._exception[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,ex);
} else {
var m__25347__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._exception;},new cljs.core.Symbol("re-frame.router","-exception","re-frame.router/-exception",(1539473978),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-exception","-exception",(-51899650),null),"re_frame/router.cljc",(14),(1),(71),(86),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"ex","ex",(226760186),null)], null)),null,(cljs.core.truth_(re_frame.router._exception)?re_frame.router._exception.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._pause[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,later_fn);
} else {
var m__25347__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._pause;},new cljs.core.Symbol("re-frame.router","-pause","re-frame.router/-pause",(1271847066),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-pause","-pause",(686049622),null),"re_frame/router.cljc",(10),(1),(71),(87),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"later-fn","later-fn",(-1189002771),null)], null)),null,(cljs.core.truth_(re_frame.router._pause)?re_frame.router._pause.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._resume[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._resume;},new cljs.core.Symbol("re-frame.router","-resume","re-frame.router/-resume",(-233942354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-resume","-resume",(1374405354),null),"re_frame/router.cljc",(11),(1),(71),(88),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(re_frame.router._resume)?re_frame.router._resume.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,event);
} else {
var m__25347__auto____$1 = (re_frame.router._call_post_event_callbacks["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return re_frame.router._call_post_event_callbacks;},new cljs.core.Symbol("re-frame.router","-call-post-event-callbacks","re-frame.router/-call-post-event-callbacks",(-642974600),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"-call-post-event-callbacks","-call-post-event-callbacks",(1053461564),null),"re_frame/router.cljc",(30),(1),(71),(89),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),null,(cljs.core.truth_(re_frame.router._call_post_event_callbacks)?re_frame.router._call_post_event_callbacks.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
})
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",(753148477)),null);
} else {
var temp__21873__auto__ = cljs.core.some.call(null,re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__21873__auto__)){
var later_fn = temp__21873__auto__;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),later_fn);
} else {
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__606 = (n - (1));
n = G__606;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return re_frame.router._run_queue.call(null,this$__$1);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",(938429088)),event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",(-1701798027)),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_580 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",(1379787274))], null));

try{try{var vec__593 = (function (){var G__596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"exception","exception",(-335277064))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._exception.call(null,this$__$1,arg);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"finish-run","finish-run",(753148477))], null),G__596)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"pause","pause",(-2095325672))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._pause.call(null,this$__$1,arg);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),new cljs.core.Keyword(null,"resume","resume",(-118572261))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._resume.call(null,this$__$1);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),new cljs.core.Keyword(null,"run-queue","run-queue",(-1701798027))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._run_queue.call(null,this$__$1);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__596)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__596,_STAR_current_trace_STAR_580,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__596,_STAR_current_trace_STAR_580,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: router state transition not found. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",(1656310533)),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",(103466139)),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__593,(0),null);
var action_fn = cljs.core.nth.call(null,vec__593,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___607 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",(1048284452)),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",(-490349212)),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",(1048284452)),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",(-490349212)),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___607;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___608 = re_frame.interop.now.call(null);
var duration__2__auto___609 = (end__1__auto___608 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__581_610 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__582_611 = null;
var count__583_612 = (0);
var i__584_613 = (0);
while(true){
if((i__584_613 < count__583_612)){
var vec__585_614 = cljs.core._nth.call(null,chunk__582_611,i__584_613);
var k__3__auto___615 = cljs.core.nth.call(null,vec__585_614,(0),null);
var cb__4__auto___616 = cljs.core.nth.call(null,vec__585_614,(1),null);
try{cb__4__auto___616.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___609,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e588){var e__5__auto___617 = e588;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___615,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___617);
}
var G__618 = seq__581_610;
var G__619 = chunk__582_611;
var G__620 = count__583_612;
var G__621 = (i__584_613 + (1));
seq__581_610 = G__618;
chunk__582_611 = G__619;
count__583_612 = G__620;
i__584_613 = G__621;
continue;
} else {
var temp__22186__auto___622 = cljs.core.seq.call(null,seq__581_610);
if(temp__22186__auto___622){
var seq__581_623__$1 = temp__22186__auto___622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__581_623__$1)){
var c__25653__auto___624 = cljs.core.chunk_first.call(null,seq__581_623__$1);
var G__625 = cljs.core.chunk_rest.call(null,seq__581_623__$1);
var G__626 = c__25653__auto___624;
var G__627 = cljs.core.count.call(null,c__25653__auto___624);
var G__628 = (0);
seq__581_610 = G__625;
chunk__582_611 = G__626;
count__583_612 = G__627;
i__584_613 = G__628;
continue;
} else {
var vec__589_629 = cljs.core.first.call(null,seq__581_623__$1);
var k__3__auto___630 = cljs.core.nth.call(null,vec__589_629,(0),null);
var cb__4__auto___631 = cljs.core.nth.call(null,vec__589_629,(1),null);
try{cb__4__auto___631.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___609,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e592){var e__5__auto___632 = e592;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___630,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___632);
}
var G__633 = cljs.core.next.call(null,seq__581_623__$1);
var G__634 = null;
var G__635 = (0);
var G__636 = (0);
seq__581_610 = G__633;
chunk__582_611 = G__634;
count__583_612 = G__635;
i__584_613 = G__636;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_580;
}} else {
var vec__597 = (function (){var G__600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__600,this$__$1){
return (function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"exception","exception",(-335277064))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._exception.call(null,this$__$1,arg);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"finish-run","finish-run",(753148477))], null),G__600)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",(-2007156861))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__600,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"pause","pause",(-2095325672))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._pause.call(null,this$__$1,arg);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),new cljs.core.Keyword(null,"resume","resume",(-118572261))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._resume.call(null,this$__$1);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),new cljs.core.Keyword(null,"run-queue","run-queue",(-1701798027))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._run_queue.call(null,this$__$1);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",(-1710376127)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",(1554969103)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__600,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),new cljs.core.Keyword(null,"add-event","add-event",(938429088))], null),G__600)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",(553898551)),((function (G__600,this$__$1){
return (function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__600,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: router state transition not found. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",(1656310533)),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",(103466139)),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__597,(0),null);
var action_fn = cljs.core.nth.call(null,vec__597,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___637 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",(1048284452)),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",(-490349212)),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",(1048284452)),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",(-490349212)),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___637;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",(-118572261)),null);
});})(this$__$1))
);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e601){var ex = e601;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",(-335277064)),ex);
}});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__602 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__603 = null;
var count__604 = (0);
var i__605 = (0);
while(true){
if((i__605 < count__604)){
var callback = cljs.core._nth.call(null,chunk__603,i__605);
callback.call(null,event_v,self__.queue);

var G__638 = seq__602;
var G__639 = chunk__603;
var G__640 = count__604;
var G__641 = (i__605 + (1));
seq__602 = G__638;
chunk__603 = G__639;
count__604 = G__640;
i__605 = G__641;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__602);
if(temp__22186__auto__){
var seq__602__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__602__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__602__$1);
var G__642 = cljs.core.chunk_rest.call(null,seq__602__$1);
var G__643 = c__25653__auto__;
var G__644 = cljs.core.count.call(null,c__25653__auto__);
var G__645 = (0);
seq__602 = G__642;
chunk__603 = G__643;
count__604 = G__644;
i__605 = G__645;
continue;
} else {
var callback = cljs.core.first.call(null,seq__602__$1);
callback.call(null,event_v,self__.queue);

var G__646 = cljs.core.next.call(null,seq__602__$1);
var G__647 = null;
var G__648 = (0);
var G__649 = (0);
seq__602 = G__646;
chunk__603 = G__647;
count__604 = G__648;
i__605 = G__649;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = re_frame.interop.empty_queue;

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",(-998125236),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",(-1198599890),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",(-297038335),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__24979__auto__,writer__24980__auto__,opt__24981__auto__){
return cljs.core._write.call(null,writer__24980__auto__,"re-frame.router/EventQueue");
});

(function (){
re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
}); return (
new cljs.core.Var(function(){return re_frame.router.__GT_EventQueue;},new cljs.core.Symbol("re-frame.router","->EventQueue","re-frame.router/->EventQueue",(-445912872),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("re-frame.router","IEventQueue","re-frame.router/IEventQueue",(2075380866),null),null], null), null),new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"->EventQueue","->EventQueue",(1245730972),null),"re_frame/router.cljc",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",(-998125236),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",(-1198599890),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",(-297038335),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),null,null,(cljs.core.truth_(re_frame.router.__GT_EventQueue)?re_frame.router.__GT_EventQueue.cljs$lang$test:null)])));})()
;

(function (){
re_frame.router.event_queue = re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",(-2007156861)),re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return re_frame.router.event_queue;},new cljs.core.Symbol("re-frame.router","event-queue","re-frame.router/event-queue",(-1696244614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"event-queue","event-queue",(666954814),null),"re_frame/router.cljc",(17),(1),(222),(222),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.router.event_queue)?re_frame.router.event_queue.cljs$lang$test:null)])));})()
;
/**
 * Queue the given event for processing by the registered event handler.
 * 
 *   Just to be clear: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:delete-item 42])
 */
(function (){
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push.call(null,re_frame.router.event_queue,event);
}

return null;
}); return (
new cljs.core.Var(function(){return re_frame.router.dispatch;},new cljs.core.Symbol("re-frame.router","dispatch","re-frame.router/dispatch",(1393144380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"dispatch","dispatch",(-1335098760),null),"re_frame/router.cljc",(15),(1),(229),(229),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null)], null)),"Queue the given event for processing by the registered event handler.\n\n  Just to be clear: the event handler is not run immediately - it is not run\n  synchronously. It will likely be run 'very soon', although it may be\n  added to the end of a FIFO queue which already contain events.\n\n  Usage:\n     (dispatch [:delete-item 42])",(cljs.core.truth_(re_frame.router.dispatch)?re_frame.router.dispatch.cljs$lang$test:null)])));})()
;
/**
 * Sychronously (immediately!) process the given event using the registered handler.
 * 
 *   Generally, you shouldn't use this - you should use `dispatch` instead.  It
 *   is an error to use `dispatch-sync` within an event handler.
 * 
 *   Usage:
 *   (dispatch-sync [:delete-item 42])
 */
(function (){
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle.call(null,event_v);

re_frame.router._call_post_event_callbacks.call(null,re_frame.router.event_queue,event_v);

return null;
}); return (
new cljs.core.Var(function(){return re_frame.router.dispatch_sync;},new cljs.core.Symbol("re-frame.router","dispatch-sync","re-frame.router/dispatch-sync",(-1413265322),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.router","re-frame.router",(50041615),null),new cljs.core.Symbol(null,"dispatch-sync","dispatch-sync",(-990037526),null),"re_frame/router.cljc",(20),(1),(245),(245),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-v","event-v",(-1275754404),null)], null)),"Sychronously (immediately!) process the given event using the registered handler.\n\n  Generally, you shouldn't use this - you should use `dispatch` instead.  It\n  is an error to use `dispatch-sync` within an event handler.\n\n  Usage:\n     (dispatch-sync [:delete-item 42])",(cljs.core.truth_(re_frame.router.dispatch_sync)?re_frame.router.dispatch_sync.cljs$lang$test:null)])));})()
;
