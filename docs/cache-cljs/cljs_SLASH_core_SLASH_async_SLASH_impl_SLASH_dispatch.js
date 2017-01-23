goog.provide("cljs.core.async.impl.dispatch");
(function (){
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32)); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.tasks;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","tasks","cljs.core.async.impl.dispatch/tasks",(1605641232),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"tasks","tasks",(-113837353),null),"cljs/core/async/impl/dispatch.cljs",(11),(1),(5),(5),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.dispatch.tasks)?cljs.core.async.impl.dispatch.tasks.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.running_QMARK_ = false; return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.running_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","running?","cljs.core.async.impl.dispatch/running?",(-185937621),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"running?","running?",(1382646764),null),"cljs/core/async/impl/dispatch.cljs",(14),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.dispatch.running_QMARK_)?cljs.core.async.impl.dispatch.running_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.queued_QMARK_ = false; return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.queued_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","queued?","cljs.core.async.impl.dispatch/queued?",(456437289),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"queued?","queued?",(2042335476),null),"cljs/core/async/impl/dispatch.cljs",(13),(1),(7),(7),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.dispatch.queued_QMARK_)?cljs.core.async.impl.dispatch.queued_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.TASK_BATCH_SIZE;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","TASK_BATCH_SIZE","cljs.core.async.impl.dispatch/TASK_BATCH_SIZE",(-211523049),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"TASK_BATCH_SIZE","TASK_BATCH_SIZE",(300332840),null),"cljs/core/async/impl/dispatch.cljs",(21),(1),(9),(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)?cljs.core.async.impl.dispatch.TASK_BATCH_SIZE.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.queue_dispatcher; return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.queue_dispatcher;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","queue-dispatcher","cljs.core.async.impl.dispatch/queue-dispatcher",(-1645045642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"queue-dispatcher","queue-dispatcher",(994954547),null),"cljs/core/async/impl/dispatch.cljs",(26),(1),(11),true,(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.dispatch.queue_dispatcher)?cljs.core.async.impl.dispatch.queue_dispatcher.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_25 = (0);
while(true){
var m_26 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_26 == null)){
} else {
m_26.call(null);

if((count_25 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__27 = (count_25 + (1));
count_25 = G__27;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.process_messages;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","process-messages","cljs.core.async.impl.dispatch/process-messages",(1062172008),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"process-messages","process-messages",(-775805387),null),"cljs/core/async/impl/dispatch.cljs",(23),(1),(13),(13),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.async.impl.dispatch.process_messages)?cljs.core.async.impl.dispatch.process_messages.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__20770__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.queue_dispatcher;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","queue-dispatcher","cljs.core.async.impl.dispatch/queue-dispatcher",(-1645045642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"queue-dispatcher","queue-dispatcher",(994954547),null),"cljs/core/async/impl/dispatch.cljs",(23),(1),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.async.impl.dispatch.queue_dispatcher)?cljs.core.async.impl.dispatch.queue_dispatcher.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.run;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","run","cljs.core.async.impl.dispatch/run",(1404881359),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"run","run",(-180635126),null),"cljs/core/async/impl/dispatch.cljs",(10),(1),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.dispatch.run)?cljs.core.async.impl.dispatch.run.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.dispatch.queue_delay;},new cljs.core.Symbol("cljs.core.async.impl.dispatch","queue-delay","cljs.core.async.impl.dispatch/queue-delay",(2111980580),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.dispatch","cljs.core.async.impl.dispatch",(-168768127),null),new cljs.core.Symbol(null,"queue-delay","queue-delay",(-547057177),null),"cljs/core/async/impl/dispatch.cljs",(18),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"delay","delay",(1066306308),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.dispatch.queue_delay)?cljs.core.async.impl.dispatch.queue_delay.cljs$lang$test:null)])));})()
;
