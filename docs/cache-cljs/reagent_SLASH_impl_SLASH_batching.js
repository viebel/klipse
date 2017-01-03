goog.provide("reagent.impl.batching");
if(typeof reagent.impl.batching.mount_count !== 'undefined'){
} else {
(function (){
reagent.impl.batching.mount_count = (0); return (
new cljs.core.Var(function(){return reagent.impl.batching.mount_count;},new cljs.core.Symbol("reagent.impl.batching","mount-count","reagent.impl.batching/mount-count",(859950366),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"mount-count","mount-count",(-1773000748),null),"reagent/impl/batching.cljs",(21),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.batching.mount_count)?reagent.impl.batching.mount_count.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.next_mount_count;},new cljs.core.Symbol("reagent.impl.batching","next-mount-count","reagent.impl.batching/next-mount-count",(-116482549),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"next-mount-count","next-mount-count",(1410987093),null),"reagent/impl/batching.cljs",(23),(1),(12),(12),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.batching.next_mount_count)?reagent.impl.batching.next_mount_count.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.fake_raf;},new cljs.core.Symbol("reagent.impl.batching","fake-raf","reagent.impl.batching/fake-raf",(804295622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"fake-raf","fake-raf",(1289518080),null),"reagent/impl/batching.cljs",(15),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.fake_raf)?reagent.impl.batching.fake_raf.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.next_tick = ((cljs.core.not.call(null,reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;
var or__20817__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var or__20817__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__20817__auto____$1)){
return or__20817__auto____$1;
} else {
var or__20817__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__20817__auto____$2)){
return or__20817__auto____$2;
} else {
var or__20817__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__20817__auto____$3)){
return or__20817__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})()); return (
new cljs.core.Var(function(){return reagent.impl.batching.next_tick;},new cljs.core.Symbol("reagent.impl.batching","next-tick","reagent.impl.batching/next-tick",(87436643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"next-tick","next-tick",(-500999387),null),"reagent/impl/batching.cljs",(15),(1),(18),(18),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.batching.next_tick)?reagent.impl.batching.next_tick.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.compare_mount_order;},new cljs.core.Symbol("reagent.impl.batching","compare-mount-order","reagent.impl.batching/compare-mount-order",(-1868047205),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"compare-mount-order","compare-mount-order",(900867921),null),"reagent/impl/batching.cljs",(26),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c1","c1",(-1521904966),null),new cljs.core.Symbol(null,"c2","c2",(78651156),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.compare_mount_order)?reagent.impl.batching.compare_mount_order.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__23475__auto__ = a.length;
var i = (0);
while(true){
if((i < n__23475__auto__)){
var c_113 = (a[i]);
if((c_113["cljsIsDirty"]) === true){
(c_113["forceUpdate"])();
} else {
}

var G__114 = (i + (1));
i = G__114;
continue;
} else {
return null;
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.run_queue;},new cljs.core.Symbol("reagent.impl.batching","run-queue","reagent.impl.batching/run-queue",(-1823850634),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"run-queue","run-queue",(-61266500),null),"reagent/impl/batching.cljs",(16),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.run_queue)?reagent.impl.batching.run_queue.cljs$lang$test:null)])));})()
;
if(typeof reagent.impl.batching.ratom_flush !== 'undefined'){
} else {
(function (){
reagent.impl.batching.ratom_flush = (function reagent$impl$batching$ratom_flush(){
return null;
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.ratom_flush;},new cljs.core.Symbol("reagent.impl.batching","ratom-flush","reagent.impl.batching/ratom-flush",(220472144),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"ratom-flush","ratom-flush",(-1463235298),null),"reagent/impl/batching.cljs",(21),(1),(43),(43),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.batching.ratom_flush)?reagent.impl.batching.ratom_flush.cljs$lang$test:null)])));})()
;
}

/**
* @constructor
 * @implements {reagent.impl.batching.Object}
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){
var self__ = this;
var this$ = this;
var temp__20427__auto__ = (this$[k]);
if((temp__20427__auto__ == null)){
return null;
} else {
var fs = temp__20427__auto__;
(this$[k] = null);

var n__23475__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__23475__auto__)){
(fs[i]).call(null);

var G__115 = (i + (1));
i = G__115;
continue;
} else {
return null;
}
break;
}
}
});

reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
return this$.run_funs("afterRender");
});

reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
return this$.enqueue("componentQueue",c);
});

reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
self__.scheduled_QMARK_ = true;

return reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){
return this$.run_queues();
});})(this$))
);
}
});

reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.run_funs("beforeFlush");

reagent.impl.batching.ratom_flush.call(null);

var temp__20427__auto___116 = (this$["componentQueue"]);
if((temp__20427__auto___116 == null)){
} else {
var cs_117 = temp__20427__auto___116;
(this$["componentQueue"] = null);

reagent.impl.batching.run_queue.call(null,cs_117);
}

return this$.flush_after_render();
});

reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
self__.scheduled_QMARK_ = false;

return this$.flush_queues();
});

reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){
var self__ = this;
var this$ = this;
if(cljs.core.some_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (some? f)"));
}

if(((this$[k]) == null)){
(this$[k] = []);
} else {
}

(this$[k]).push(f);

return this$.schedule();
});

reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("beforeFlush",f);
});

reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("afterRender",f);
});

reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",(579986609),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.impl.batching.RenderQueue.cljs$lang$type = true;

reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";

reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.impl.batching/RenderQueue");
});

(function (){
reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.__GT_RenderQueue;},new cljs.core.Symbol("reagent.impl.batching","->RenderQueue","reagent.impl.batching/->RenderQueue",(-1994666337),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("reagent.impl.batching","Object","reagent.impl.batching/Object",(-1598736568),null),null], null), null),new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"->RenderQueue","->RenderQueue",(1818687829),null),"reagent/impl/batching.cljs",(21),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",(579986609),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),null,null,(cljs.core.truth_(reagent.impl.batching.__GT_RenderQueue)?reagent.impl.batching.__GT_RenderQueue.cljs$lang$test:null)])));})()
;

if(typeof reagent.impl.batching.render_queue !== 'undefined'){
} else {
(function (){
reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue(false)); return (
new cljs.core.Var(function(){return reagent.impl.batching.render_queue;},new cljs.core.Symbol("reagent.impl.batching","render-queue","reagent.impl.batching/render-queue",(-599129675),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"render-queue","render-queue",(-1084920245),null),"reagent/impl/batching.cljs",(22),(1),(89),(89),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.batching.render_queue)?reagent.impl.batching.render_queue.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.flush;},new cljs.core.Symbol("reagent.impl.batching","flush","reagent.impl.batching/flush",(-1093397150),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"flush","flush",(501820328),null),"reagent/impl/batching.cljs",(12),(1),(91),(91),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.batching.flush)?reagent.impl.batching.flush.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.flush_after_render = (function reagent$impl$batching$flush_after_render(){
return reagent.impl.batching.render_queue.flush_after_render();
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.flush_after_render;},new cljs.core.Symbol("reagent.impl.batching","flush-after-render","reagent.impl.batching/flush-after-render",(-1097058421),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"flush-after-render","flush-after-render",(296802753),null),"reagent/impl/batching.cljs",(25),(1),(94),(94),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.batching.flush_after_render)?reagent.impl.batching.flush_after_render.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
if(cljs.core.truth_((c["cljsIsDirty"]))){
return null;
} else {
(c["cljsIsDirty"] = true);

return reagent.impl.batching.render_queue.queue_render(c);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.queue_render;},new cljs.core.Symbol("reagent.impl.batching","queue-render","reagent.impl.batching/queue-render",(169954821),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"queue-render","queue-render",(-1760380861),null),"reagent/impl/batching.cljs",(19),(1),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.queue_render)?reagent.impl.batching.queue_render.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.mark_rendered;},new cljs.core.Symbol("reagent.impl.batching","mark-rendered","reagent.impl.batching/mark-rendered",(2121716303),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"mark-rendered","mark-rendered",(-620640247),null),"reagent/impl/batching.cljs",(20),(1),(102),(102),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.mark_rendered)?reagent.impl.batching.mark_rendered.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.do_before_flush;},new cljs.core.Symbol("reagent.impl.batching","do-before-flush","reagent.impl.batching/do-before-flush",(1620718154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"do-before-flush","do-before-flush",(-2085691520),null),"reagent/impl/batching.cljs",(22),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.do_before_flush)?reagent.impl.batching.do_before_flush.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.do_after_render;},new cljs.core.Symbol("reagent.impl.batching","do-after-render","reagent.impl.batching/do-after-render",(-507112612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"do-after-render","do-after-render",(81344666),null),"reagent/impl/batching.cljs",(22),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.batching.do_after_render)?reagent.impl.batching.do_after_render.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.batching.schedule;},new cljs.core.Symbol("reagent.impl.batching","schedule","reagent.impl.batching/schedule",(364323895),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.batching","reagent.impl.batching",(-1041567891),null),new cljs.core.Symbol(null,"schedule","schedule",(1989806793),null),"reagent/impl/batching.cljs",(15),(1),(111),(111),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.batching.schedule)?reagent.impl.batching.schedule.cljs$lang$test:null)])));})()
;
