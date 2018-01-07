// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.cards.test.eval');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('klipse.lang.clojure');
goog.require('devcards.core');
klipse.cards.test.eval.remove_chars = (function klipse$cards$test$eval$remove_chars(s){
if(typeof s === 'string'){
return clojure.string.replace.call(null,s,/\n|\s/,"");
} else {
return s;
}
});
klipse.cards.test.eval.a_EQ_ = (function klipse$cards$test$eval$a_EQ_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___151463 = arguments.length;
var i__9641__auto___151464 = (0);
while(true){
if((i__9641__auto___151464 < len__9640__auto___151463)){
args__9647__auto__.push((arguments[i__9641__auto___151464]));

var G__151465 = (i__9641__auto___151464 + (1));
i__9641__auto___151464 = G__151465;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.test.eval.remove_chars,args));
});

klipse.cards.test.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.eval.a_EQ_.cljs$lang$applyTo = (function (seq151462){
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151462));
});

klipse.cards.test.eval.b_EQ_ = (function klipse$cards$test$eval$b_EQ_(p__151466,p__151467){
var vec__151468 = p__151466;
var status_a = cljs.core.nth.call(null,vec__151468,(0),null);
var a = cljs.core.nth.call(null,vec__151468,(1),null);
var vec__151471 = p__151467;
var status_b = cljs.core.nth.call(null,vec__151471,(0),null);
var b = cljs.core.nth.call(null,vec__151471,(1),null);
var and__8351__auto__ = cljs.core._EQ_.call(null,status_a,status_b);
if(and__8351__auto__){
return klipse.cards.test.eval.a_EQ_.call(null,a,b);
} else {
return and__8351__auto__;
}
});

klipse.cards.test.eval.test_eval = (function klipse$cards$test$eval$test_eval(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval.cljs$lang$var);
});
klipse.cards.test.eval.test_eval.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval151474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval151474 = (function (meta151475){
this.meta151475 = meta151475;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_151476,meta151475__$1){
var self__ = this;
var _151476__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval151474(meta151475__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_151476){
var self__ = this;
var _151476__$1 = this;
return self__.meta151475;
});


klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_151520){
var state_val_151521 = (state_151520[(1)]);
if((state_val_151521 === (1))){
var state_151520__$1 = state_151520;
var statearr_151522_151594 = state_151520__$1;
(statearr_151522_151594[(2)] = null);

(statearr_151522_151594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151521 === (2))){
var inst_151517 = (state_151520[(2)]);
var inst_151518 = done.call(null);
var state_151520__$1 = (function (){var statearr_151523 = state_151520;
(statearr_151523[(7)] = inst_151517);

return statearr_151523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151520__$1,inst_151518);
} else {
if((state_val_151521 === (3))){
var inst_151478 = (state_151520[(2)]);
var inst_151479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151480 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151481 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151480,inst_151478,null];
var inst_151482 = cljs.core.PersistentHashMap.fromArrays(inst_151479,inst_151481);
var inst_151483 = cljs.test.do_report.call(null,inst_151482);
var state_151520__$1 = state_151520;
var statearr_151524_151595 = state_151520__$1;
(statearr_151524_151595[(2)] = inst_151483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151521 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151520,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151487 = klipse.lang.clojure.eval.call(null,"(+ 1 2");
var state_151520__$1 = state_151520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151520__$1,(5),inst_151487);
} else {
if((state_val_151521 === (5))){
var inst_151494 = (state_151520[(8)]);
var inst_151493 = (state_151520[(9)]);
var inst_151489 = (state_151520[(2)]);
var inst_151490 = cljs.core.first.call(null,inst_151489);
var inst_151491 = cljs.core.List.EMPTY;
var inst_151492 = cljs.core._conj.call(null,inst_151491,inst_151490);
var inst_151493__$1 = cljs.core._conj.call(null,inst_151492,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_151494__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_151493__$1);
var state_151520__$1 = (function (){var statearr_151525 = state_151520;
(statearr_151525[(8)] = inst_151494__$1);

(statearr_151525[(9)] = inst_151493__$1);

return statearr_151525;
})();
if(cljs.core.truth_(inst_151494__$1)){
var statearr_151526_151596 = state_151520__$1;
(statearr_151526_151596[(1)] = (6));

} else {
var statearr_151527_151597 = state_151520__$1;
(statearr_151527_151597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151521 === (6))){
var inst_151493 = (state_151520[(9)]);
var inst_151496 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151497 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151498 = cljs.core.cons.call(null,cljs.core._EQ_,inst_151493);
var inst_151499 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151497,inst_151498,null];
var inst_151500 = cljs.core.PersistentHashMap.fromArrays(inst_151496,inst_151499);
var inst_151501 = cljs.test.do_report.call(null,inst_151500);
var state_151520__$1 = state_151520;
var statearr_151528_151598 = state_151520__$1;
(statearr_151528_151598[(2)] = inst_151501);

(statearr_151528_151598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151521 === (7))){
var inst_151493 = (state_151520[(9)]);
var inst_151503 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151504 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151505 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_151506 = cljs.core.cons.call(null,inst_151505,inst_151493);
var inst_151507 = cljs.core.List.EMPTY;
var inst_151508 = cljs.core._conj.call(null,inst_151507,inst_151506);
var inst_151509 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151510 = cljs.core._conj.call(null,inst_151508,inst_151509);
var inst_151511 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151504,inst_151510,null];
var inst_151512 = cljs.core.PersistentHashMap.fromArrays(inst_151503,inst_151511);
var inst_151513 = cljs.test.do_report.call(null,inst_151512);
var state_151520__$1 = state_151520;
var statearr_151529_151599 = state_151520__$1;
(statearr_151529_151599[(2)] = inst_151513);

(statearr_151529_151599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151521 === (8))){
var inst_151494 = (state_151520[(8)]);
var inst_151515 = (state_151520[(2)]);
var state_151520__$1 = (function (){var statearr_151530 = state_151520;
(statearr_151530[(10)] = inst_151515);

return statearr_151530;
})();
var statearr_151531_151600 = state_151520__$1;
(statearr_151531_151600[(2)] = inst_151494);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_151532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_151532[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_151532[(1)] = (1));

return statearr_151532;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_151520){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151533){if((e151533 instanceof Object)){
var ex__13458__auto__ = e151533;
var statearr_151534_151601 = state_151520;
(statearr_151534_151601[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151602 = state_151520;
state_151520 = G__151602;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_151520){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_151520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_151535 = f__13545__auto__.call(null);
(statearr_151535[(6)] = c__13544__auto__);

return statearr_151535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.apply = (function (self__,args151477){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args151477)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval151474.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_151578){
var state_val_151579 = (state_151578[(1)]);
if((state_val_151579 === (1))){
var state_151578__$1 = state_151578;
var statearr_151580_151603 = state_151578__$1;
(statearr_151580_151603[(2)] = null);

(statearr_151580_151603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151579 === (2))){
var inst_151575 = (state_151578[(2)]);
var inst_151576 = done.call(null);
var state_151578__$1 = (function (){var statearr_151581 = state_151578;
(statearr_151581[(7)] = inst_151575);

return statearr_151581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151578__$1,inst_151576);
} else {
if((state_val_151579 === (3))){
var inst_151536 = (state_151578[(2)]);
var inst_151537 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151538 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151539 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151538,inst_151536,null];
var inst_151540 = cljs.core.PersistentHashMap.fromArrays(inst_151537,inst_151539);
var inst_151541 = cljs.test.do_report.call(null,inst_151540);
var state_151578__$1 = state_151578;
var statearr_151582_151604 = state_151578__$1;
(statearr_151582_151604[(2)] = inst_151541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151579 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151578,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151545 = klipse.lang.clojure.eval.call(null,"(+ 1 2");
var state_151578__$1 = state_151578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151578__$1,(5),inst_151545);
} else {
if((state_val_151579 === (5))){
var inst_151552 = (state_151578[(8)]);
var inst_151551 = (state_151578[(9)]);
var inst_151547 = (state_151578[(2)]);
var inst_151548 = cljs.core.first.call(null,inst_151547);
var inst_151549 = cljs.core.List.EMPTY;
var inst_151550 = cljs.core._conj.call(null,inst_151549,inst_151548);
var inst_151551__$1 = cljs.core._conj.call(null,inst_151550,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_151552__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_151551__$1);
var state_151578__$1 = (function (){var statearr_151583 = state_151578;
(statearr_151583[(8)] = inst_151552__$1);

(statearr_151583[(9)] = inst_151551__$1);

return statearr_151583;
})();
if(cljs.core.truth_(inst_151552__$1)){
var statearr_151584_151605 = state_151578__$1;
(statearr_151584_151605[(1)] = (6));

} else {
var statearr_151585_151606 = state_151578__$1;
(statearr_151585_151606[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151579 === (6))){
var inst_151551 = (state_151578[(9)]);
var inst_151554 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151555 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151556 = cljs.core.cons.call(null,cljs.core._EQ_,inst_151551);
var inst_151557 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151555,inst_151556,null];
var inst_151558 = cljs.core.PersistentHashMap.fromArrays(inst_151554,inst_151557);
var inst_151559 = cljs.test.do_report.call(null,inst_151558);
var state_151578__$1 = state_151578;
var statearr_151586_151607 = state_151578__$1;
(statearr_151586_151607[(2)] = inst_151559);

(statearr_151586_151607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151579 === (7))){
var inst_151551 = (state_151578[(9)]);
var inst_151561 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151562 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))));
var inst_151563 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_151564 = cljs.core.cons.call(null,inst_151563,inst_151551);
var inst_151565 = cljs.core.List.EMPTY;
var inst_151566 = cljs.core._conj.call(null,inst_151565,inst_151564);
var inst_151567 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151568 = cljs.core._conj.call(null,inst_151566,inst_151567);
var inst_151569 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151562,inst_151568,null];
var inst_151570 = cljs.core.PersistentHashMap.fromArrays(inst_151561,inst_151569);
var inst_151571 = cljs.test.do_report.call(null,inst_151570);
var state_151578__$1 = state_151578;
var statearr_151587_151608 = state_151578__$1;
(statearr_151587_151608[(2)] = inst_151571);

(statearr_151587_151608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151579 === (8))){
var inst_151552 = (state_151578[(8)]);
var inst_151573 = (state_151578[(2)]);
var state_151578__$1 = (function (){var statearr_151588 = state_151578;
(statearr_151588[(10)] = inst_151573);

return statearr_151588;
})();
var statearr_151589_151609 = state_151578__$1;
(statearr_151589_151609[(2)] = inst_151552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_151590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_151590[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_151590[(1)] = (1));

return statearr_151590;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_151578){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151591){if((e151591 instanceof Object)){
var ex__13458__auto__ = e151591;
var statearr_151592_151610 = state_151578;
(statearr_151592_151610[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151611 = state_151578;
state_151578 = G__151611;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_151578){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_151578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151593 = f__13545__auto__.call(null);
(statearr_151593[(6)] = c__13544__auto__);

return statearr_151593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta151475","meta151475",937616751,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval151474.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval151474.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval151474";

klipse.cards.test.eval.t_klipse$cards$test$eval151474.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval151474");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval151474 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval151474(meta151475){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval151474(meta151475));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval151474(null));
});

klipse.cards.test.eval.test_eval.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval","klipse.cards.test.eval/test-eval",-1937427125,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval","test-eval",-971461358,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",19,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval)?klipse.cards.test.eval.test_eval.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_2 = (function klipse$cards$test$eval$test_eval_2(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval_2.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_2.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval151612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval151612 = (function (meta151613){
this.meta151613 = meta151613;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_151614,meta151613__$1){
var self__ = this;
var _151614__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval151612(meta151613__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_151614){
var self__ = this;
var _151614__$1 = this;
return self__.meta151613;
});


klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_151914){
var state_val_151915 = (state_151914[(1)]);
if((state_val_151915 === (7))){
var inst_151633 = (state_151914[(7)]);
var inst_151643 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151644 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_151645 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151646 = cljs.core.cons.call(null,inst_151645,inst_151633);
var inst_151647 = cljs.core.List.EMPTY;
var inst_151648 = cljs.core._conj.call(null,inst_151647,inst_151646);
var inst_151649 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151650 = cljs.core._conj.call(null,inst_151648,inst_151649);
var inst_151651 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151644,inst_151650,null];
var inst_151652 = cljs.core.PersistentHashMap.fromArrays(inst_151643,inst_151651);
var inst_151653 = cljs.test.do_report.call(null,inst_151652);
var state_151914__$1 = state_151914;
var statearr_151916_152364 = state_151914__$1;
(statearr_151916_152364[(2)] = inst_151653);

(statearr_151916_152364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (20))){
var inst_151717 = (state_151914[(8)]);
var inst_151720 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151721 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151722 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151717);
var inst_151723 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151721,inst_151722,null];
var inst_151724 = cljs.core.PersistentHashMap.fromArrays(inst_151720,inst_151723);
var inst_151725 = cljs.test.do_report.call(null,inst_151724);
var state_151914__$1 = state_151914;
var statearr_151917_152365 = state_151914__$1;
(statearr_151917_152365[(2)] = inst_151725);

(statearr_151917_152365[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (27))){
var inst_151759 = (state_151914[(9)]);
var inst_151762 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151763 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_151764 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151759);
var inst_151765 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151763,inst_151764,null];
var inst_151766 = cljs.core.PersistentHashMap.fromArrays(inst_151762,inst_151765);
var inst_151767 = cljs.test.do_report.call(null,inst_151766);
var state_151914__$1 = state_151914;
var statearr_151918_152366 = state_151914__$1;
(statearr_151918_152366[(2)] = inst_151767);

(statearr_151918_152366[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (1))){
var state_151914__$1 = state_151914;
var statearr_151919_152367 = state_151914__$1;
(statearr_151919_152367[(2)] = null);

(statearr_151919_152367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (24))){
var inst_151742 = (state_151914[(2)]);
var inst_151743 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151744 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_151745 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151744,inst_151742,null];
var inst_151746 = cljs.core.PersistentHashMap.fromArrays(inst_151743,inst_151745);
var inst_151747 = cljs.test.do_report.call(null,inst_151746);
var state_151914__$1 = state_151914;
var statearr_151920_152368 = state_151914__$1;
(statearr_151920_152368[(2)] = inst_151747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_151836 = klipse.lang.clojure.eval.call(null,"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(40),inst_151836);
} else {
if((state_val_151915 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_151879 = klipse.lang.clojure.eval.call(null,"(ns my.aa) (+ 1 2)");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(47),inst_151879);
} else {
if((state_val_151915 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151625 = klipse.lang.clojure.eval.call(null," (def x 12)\n                  (+ x 5)");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(5),inst_151625);
} else {
if((state_val_151915 === (15))){
var inst_151676 = (state_151914[(10)]);
var inst_151697 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151921 = state_151914;
(statearr_151921[(11)] = inst_151697);

return statearr_151921;
})();
var statearr_151922_152369 = state_151914__$1;
(statearr_151922_152369[(2)] = inst_151676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (48))){
var inst_151887 = (state_151914[(12)]);
var inst_151890 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151891 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151892 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151887);
var inst_151893 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151891,inst_151892,null];
var inst_151894 = cljs.core.PersistentHashMap.fromArrays(inst_151890,inst_151893);
var inst_151895 = cljs.test.do_report.call(null,inst_151894);
var state_151914__$1 = state_151914;
var statearr_151923_152370 = state_151914__$1;
(statearr_151923_152370[(2)] = inst_151895);

(statearr_151923_152370[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (50))){
var inst_151888 = (state_151914[(13)]);
var inst_151909 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151924 = state_151914;
(statearr_151924[(14)] = inst_151909);

return statearr_151924;
})();
var statearr_151925_152371 = state_151914__$1;
(statearr_151925_152371[(2)] = inst_151888);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (21))){
var inst_151717 = (state_151914[(8)]);
var inst_151727 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151728 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151729 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151730 = cljs.core.cons.call(null,inst_151729,inst_151717);
var inst_151731 = cljs.core.List.EMPTY;
var inst_151732 = cljs.core._conj.call(null,inst_151731,inst_151730);
var inst_151733 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151734 = cljs.core._conj.call(null,inst_151732,inst_151733);
var inst_151735 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151728,inst_151734,null];
var inst_151736 = cljs.core.PersistentHashMap.fromArrays(inst_151727,inst_151735);
var inst_151737 = cljs.test.do_report.call(null,inst_151736);
var state_151914__$1 = state_151914;
var statearr_151926_152372 = state_151914__$1;
(statearr_151926_152372[(2)] = inst_151737);

(statearr_151926_152372[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (31))){
var inst_151784 = (state_151914[(2)]);
var inst_151785 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151786 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_151787 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151786,inst_151784,null];
var inst_151788 = cljs.core.PersistentHashMap.fromArrays(inst_151785,inst_151787);
var inst_151789 = cljs.test.do_report.call(null,inst_151788);
var state_151914__$1 = state_151914;
var statearr_151927_152373 = state_151914__$1;
(statearr_151927_152373[(2)] = inst_151789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_151793 = klipse.lang.clojure.eval.call(null,"(map inc [1 2 3])");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(33),inst_151793);
} else {
if((state_val_151915 === (40))){
var inst_151845 = (state_151914[(15)]);
var inst_151846 = (state_151914[(16)]);
var inst_151838 = (state_151914[(2)]);
var inst_151839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151840 = cljs.core.list((10),(11),(12));
var inst_151841 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_151840];
var inst_151842 = (new cljs.core.PersistentVector(null,2,(5),inst_151839,inst_151841,null));
var inst_151843 = cljs.core.List.EMPTY;
var inst_151844 = cljs.core._conj.call(null,inst_151843,inst_151842);
var inst_151845__$1 = cljs.core._conj.call(null,inst_151844,inst_151838);
var inst_151846__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151845__$1);
var state_151914__$1 = (function (){var statearr_151928 = state_151914;
(statearr_151928[(15)] = inst_151845__$1);

(statearr_151928[(16)] = inst_151846__$1);

return statearr_151928;
})();
if(cljs.core.truth_(inst_151846__$1)){
var statearr_151929_152374 = state_151914__$1;
(statearr_151929_152374[(1)] = (41));

} else {
var statearr_151930_152375 = state_151914__$1;
(statearr_151930_152375[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (33))){
var inst_151802 = (state_151914[(17)]);
var inst_151803 = (state_151914[(18)]);
var inst_151795 = (state_151914[(2)]);
var inst_151796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151797 = cljs.core.list((2),(3),(4));
var inst_151798 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_151797];
var inst_151799 = (new cljs.core.PersistentVector(null,2,(5),inst_151796,inst_151798,null));
var inst_151800 = cljs.core.List.EMPTY;
var inst_151801 = cljs.core._conj.call(null,inst_151800,inst_151799);
var inst_151802__$1 = cljs.core._conj.call(null,inst_151801,inst_151795);
var inst_151803__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151802__$1);
var state_151914__$1 = (function (){var statearr_151931 = state_151914;
(statearr_151931[(17)] = inst_151802__$1);

(statearr_151931[(18)] = inst_151803__$1);

return statearr_151931;
})();
if(cljs.core.truth_(inst_151803__$1)){
var statearr_151932_152376 = state_151914__$1;
(statearr_151932_152376[(1)] = (34));

} else {
var statearr_151933_152377 = state_151914__$1;
(statearr_151933_152377[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (13))){
var inst_151675 = (state_151914[(19)]);
var inst_151678 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151679 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151680 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151675);
var inst_151681 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151679,inst_151680,null];
var inst_151682 = cljs.core.PersistentHashMap.fromArrays(inst_151678,inst_151681);
var inst_151683 = cljs.test.do_report.call(null,inst_151682);
var state_151914__$1 = state_151914;
var statearr_151934_152378 = state_151914__$1;
(statearr_151934_152378[(2)] = inst_151683);

(statearr_151934_152378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (22))){
var inst_151718 = (state_151914[(20)]);
var inst_151739 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151935 = state_151914;
(statearr_151935[(21)] = inst_151739);

return statearr_151935;
})();
var statearr_151936_152379 = state_151914__$1;
(statearr_151936_152379[(2)] = inst_151718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (36))){
var inst_151803 = (state_151914[(18)]);
var inst_151824 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151937 = state_151914;
(statearr_151937[(22)] = inst_151824);

return statearr_151937;
})();
var statearr_151938_152380 = state_151914__$1;
(statearr_151938_152380[(2)] = inst_151803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (41))){
var inst_151845 = (state_151914[(15)]);
var inst_151848 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151849 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_151850 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151845);
var inst_151851 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151849,inst_151850,null];
var inst_151852 = cljs.core.PersistentHashMap.fromArrays(inst_151848,inst_151851);
var inst_151853 = cljs.test.do_report.call(null,inst_151852);
var state_151914__$1 = state_151914;
var statearr_151939_152381 = state_151914__$1;
(statearr_151939_152381[(2)] = inst_151853);

(statearr_151939_152381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (43))){
var inst_151846 = (state_151914[(16)]);
var inst_151867 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151940 = state_151914;
(statearr_151940[(23)] = inst_151867);

return statearr_151940;
})();
var statearr_151941_152382 = state_151914__$1;
(statearr_151941_152382[(2)] = inst_151846);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (29))){
var inst_151760 = (state_151914[(24)]);
var inst_151781 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151942 = state_151914;
(statearr_151942[(25)] = inst_151781);

return statearr_151942;
})();
var statearr_151943_152383 = state_151914__$1;
(statearr_151943_152383[(2)] = inst_151760);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (44))){
var inst_151911 = (state_151914[(2)]);
var inst_151912 = done.call(null);
var state_151914__$1 = (function (){var statearr_151944 = state_151914;
(statearr_151944[(26)] = inst_151911);

return statearr_151944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151914__$1,inst_151912);
} else {
if((state_val_151915 === (6))){
var inst_151633 = (state_151914[(7)]);
var inst_151636 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151637 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_151638 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151633);
var inst_151639 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151637,inst_151638,null];
var inst_151640 = cljs.core.PersistentHashMap.fromArrays(inst_151636,inst_151639);
var inst_151641 = cljs.test.do_report.call(null,inst_151640);
var state_151914__$1 = state_151914;
var statearr_151945_152384 = state_151914__$1;
(statearr_151945_152384[(2)] = inst_151641);

(statearr_151945_152384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (28))){
var inst_151759 = (state_151914[(9)]);
var inst_151769 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151770 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_151771 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151772 = cljs.core.cons.call(null,inst_151771,inst_151759);
var inst_151773 = cljs.core.List.EMPTY;
var inst_151774 = cljs.core._conj.call(null,inst_151773,inst_151772);
var inst_151775 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151776 = cljs.core._conj.call(null,inst_151774,inst_151775);
var inst_151777 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151770,inst_151776,null];
var inst_151778 = cljs.core.PersistentHashMap.fromArrays(inst_151769,inst_151777);
var inst_151779 = cljs.test.do_report.call(null,inst_151778);
var state_151914__$1 = state_151914;
var statearr_151946_152385 = state_151914__$1;
(statearr_151946_152385[(2)] = inst_151779);

(statearr_151946_152385[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_151751 = klipse.lang.clojure.eval.call(null,"(if 1 2 3)");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(26),inst_151751);
} else {
if((state_val_151915 === (34))){
var inst_151802 = (state_151914[(17)]);
var inst_151805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151806 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_151807 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_151802);
var inst_151808 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_151806,inst_151807,null];
var inst_151809 = cljs.core.PersistentHashMap.fromArrays(inst_151805,inst_151808);
var inst_151810 = cljs.test.do_report.call(null,inst_151809);
var state_151914__$1 = state_151914;
var statearr_151947_152386 = state_151914__$1;
(statearr_151947_152386[(2)] = inst_151810);

(statearr_151947_152386[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (17))){
var inst_151700 = (state_151914[(2)]);
var inst_151701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151702 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151703 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151702,inst_151700,null];
var inst_151704 = cljs.core.PersistentHashMap.fromArrays(inst_151701,inst_151703);
var inst_151705 = cljs.test.do_report.call(null,inst_151704);
var state_151914__$1 = state_151914;
var statearr_151948_152387 = state_151914__$1;
(statearr_151948_152387[(2)] = inst_151705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (3))){
var inst_151616 = (state_151914[(2)]);
var inst_151617 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151618 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_151619 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151618,inst_151616,null];
var inst_151620 = cljs.core.PersistentHashMap.fromArrays(inst_151617,inst_151619);
var inst_151621 = cljs.test.do_report.call(null,inst_151620);
var state_151914__$1 = state_151914;
var statearr_151949_152388 = state_151914__$1;
(statearr_151949_152388[(2)] = inst_151621);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (12))){
var inst_151676 = (state_151914[(10)]);
var inst_151675 = (state_151914[(19)]);
var inst_151669 = (state_151914[(2)]);
var inst_151670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151671 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_151672 = (new cljs.core.PersistentVector(null,2,(5),inst_151670,inst_151671,null));
var inst_151673 = cljs.core.List.EMPTY;
var inst_151674 = cljs.core._conj.call(null,inst_151673,inst_151672);
var inst_151675__$1 = cljs.core._conj.call(null,inst_151674,inst_151669);
var inst_151676__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151675__$1);
var state_151914__$1 = (function (){var statearr_151950 = state_151914;
(statearr_151950[(10)] = inst_151676__$1);

(statearr_151950[(19)] = inst_151675__$1);

return statearr_151950;
})();
if(cljs.core.truth_(inst_151676__$1)){
var statearr_151951_152389 = state_151914__$1;
(statearr_151951_152389[(1)] = (13));

} else {
var statearr_151952_152390 = state_151914__$1;
(statearr_151952_152390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (2))){
var inst_151657 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151953 = state_151914;
(statearr_151953[(27)] = inst_151657);

return statearr_151953;
})();
var statearr_151954_152391 = state_151914__$1;
(statearr_151954_152391[(2)] = null);

(statearr_151954_152391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (23))){
var inst_151783 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151955 = state_151914;
(statearr_151955[(28)] = inst_151783);

return statearr_151955;
})();
var statearr_151956_152392 = state_151914__$1;
(statearr_151956_152392[(2)] = null);

(statearr_151956_152392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (47))){
var inst_151887 = (state_151914[(12)]);
var inst_151888 = (state_151914[(13)]);
var inst_151881 = (state_151914[(2)]);
var inst_151882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151883 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_151884 = (new cljs.core.PersistentVector(null,2,(5),inst_151882,inst_151883,null));
var inst_151885 = cljs.core.List.EMPTY;
var inst_151886 = cljs.core._conj.call(null,inst_151885,inst_151884);
var inst_151887__$1 = cljs.core._conj.call(null,inst_151886,inst_151881);
var inst_151888__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151887__$1);
var state_151914__$1 = (function (){var statearr_151957 = state_151914;
(statearr_151957[(12)] = inst_151887__$1);

(statearr_151957[(13)] = inst_151888__$1);

return statearr_151957;
})();
if(cljs.core.truth_(inst_151888__$1)){
var statearr_151958_152393 = state_151914__$1;
(statearr_151958_152393[(1)] = (48));

} else {
var statearr_151959_152394 = state_151914__$1;
(statearr_151959_152394[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (35))){
var inst_151802 = (state_151914[(17)]);
var inst_151812 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151813 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_151814 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151815 = cljs.core.cons.call(null,inst_151814,inst_151802);
var inst_151816 = cljs.core.List.EMPTY;
var inst_151817 = cljs.core._conj.call(null,inst_151816,inst_151815);
var inst_151818 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151819 = cljs.core._conj.call(null,inst_151817,inst_151818);
var inst_151820 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151813,inst_151819,null];
var inst_151821 = cljs.core.PersistentHashMap.fromArrays(inst_151812,inst_151820);
var inst_151822 = cljs.test.do_report.call(null,inst_151821);
var state_151914__$1 = state_151914;
var statearr_151960_152395 = state_151914__$1;
(statearr_151960_152395[(2)] = inst_151822);

(statearr_151960_152395[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (19))){
var inst_151718 = (state_151914[(20)]);
var inst_151717 = (state_151914[(8)]);
var inst_151711 = (state_151914[(2)]);
var inst_151712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151713 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_151714 = (new cljs.core.PersistentVector(null,2,(5),inst_151712,inst_151713,null));
var inst_151715 = cljs.core.List.EMPTY;
var inst_151716 = cljs.core._conj.call(null,inst_151715,inst_151714);
var inst_151717__$1 = cljs.core._conj.call(null,inst_151716,inst_151711);
var inst_151718__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151717__$1);
var state_151914__$1 = (function (){var statearr_151961 = state_151914;
(statearr_151961[(20)] = inst_151718__$1);

(statearr_151961[(8)] = inst_151717__$1);

return statearr_151961;
})();
if(cljs.core.truth_(inst_151718__$1)){
var statearr_151962_152396 = state_151914__$1;
(statearr_151962_152396[(1)] = (20));

} else {
var statearr_151963_152397 = state_151914__$1;
(statearr_151963_152397[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_151667 = klipse.lang.clojure.eval.call(null,"(+ 1 2)");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(12),inst_151667);
} else {
if((state_val_151915 === (9))){
var inst_151699 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151964 = state_151914;
(statearr_151964[(29)] = inst_151699);

return statearr_151964;
})();
var statearr_151965_152398 = state_151914__$1;
(statearr_151965_152398[(2)] = null);

(statearr_151965_152398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (5))){
var inst_151634 = (state_151914[(30)]);
var inst_151633 = (state_151914[(7)]);
var inst_151627 = (state_151914[(2)]);
var inst_151628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151629 = [new cljs.core.Keyword(null,"ok","ok",967785236),(17)];
var inst_151630 = (new cljs.core.PersistentVector(null,2,(5),inst_151628,inst_151629,null));
var inst_151631 = cljs.core.List.EMPTY;
var inst_151632 = cljs.core._conj.call(null,inst_151631,inst_151630);
var inst_151633__$1 = cljs.core._conj.call(null,inst_151632,inst_151627);
var inst_151634__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151633__$1);
var state_151914__$1 = (function (){var statearr_151966 = state_151914;
(statearr_151966[(30)] = inst_151634__$1);

(statearr_151966[(7)] = inst_151633__$1);

return statearr_151966;
})();
if(cljs.core.truth_(inst_151634__$1)){
var statearr_151967_152399 = state_151914__$1;
(statearr_151967_152399[(1)] = (6));

} else {
var statearr_151968_152400 = state_151914__$1;
(statearr_151968_152400[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (14))){
var inst_151675 = (state_151914[(19)]);
var inst_151685 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151686 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151687 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151688 = cljs.core.cons.call(null,inst_151687,inst_151675);
var inst_151689 = cljs.core.List.EMPTY;
var inst_151690 = cljs.core._conj.call(null,inst_151689,inst_151688);
var inst_151691 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151692 = cljs.core._conj.call(null,inst_151690,inst_151691);
var inst_151693 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151686,inst_151692,null];
var inst_151694 = cljs.core.PersistentHashMap.fromArrays(inst_151685,inst_151693);
var inst_151695 = cljs.test.do_report.call(null,inst_151694);
var state_151914__$1 = state_151914;
var statearr_151969_152401 = state_151914__$1;
(statearr_151969_152401[(2)] = inst_151695);

(statearr_151969_152401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (45))){
var inst_151870 = (state_151914[(2)]);
var inst_151871 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151872 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151873 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151872,inst_151870,null];
var inst_151874 = cljs.core.PersistentHashMap.fromArrays(inst_151871,inst_151873);
var inst_151875 = cljs.test.do_report.call(null,inst_151874);
var state_151914__$1 = state_151914;
var statearr_151970_152402 = state_151914__$1;
(statearr_151970_152402[(2)] = inst_151875);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (26))){
var inst_151759 = (state_151914[(9)]);
var inst_151760 = (state_151914[(24)]);
var inst_151753 = (state_151914[(2)]);
var inst_151754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151755 = [new cljs.core.Keyword(null,"ok","ok",967785236),(2)];
var inst_151756 = (new cljs.core.PersistentVector(null,2,(5),inst_151754,inst_151755,null));
var inst_151757 = cljs.core.List.EMPTY;
var inst_151758 = cljs.core._conj.call(null,inst_151757,inst_151756);
var inst_151759__$1 = cljs.core._conj.call(null,inst_151758,inst_151753);
var inst_151760__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_151759__$1);
var state_151914__$1 = (function (){var statearr_151971 = state_151914;
(statearr_151971[(9)] = inst_151759__$1);

(statearr_151971[(24)] = inst_151760__$1);

return statearr_151971;
})();
if(cljs.core.truth_(inst_151760__$1)){
var statearr_151972_152403 = state_151914__$1;
(statearr_151972_152403[(1)] = (27));

} else {
var statearr_151973_152404 = state_151914__$1;
(statearr_151973_152404[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (16))){
var inst_151741 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151974 = state_151914;
(statearr_151974[(31)] = inst_151741);

return statearr_151974;
})();
var statearr_151975_152405 = state_151914__$1;
(statearr_151975_152405[(2)] = null);

(statearr_151975_152405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (38))){
var inst_151827 = (state_151914[(2)]);
var inst_151828 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151829 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_151830 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151829,inst_151827,null];
var inst_151831 = cljs.core.PersistentHashMap.fromArrays(inst_151828,inst_151830);
var inst_151832 = cljs.test.do_report.call(null,inst_151831);
var state_151914__$1 = state_151914;
var statearr_151976_152406 = state_151914__$1;
(statearr_151976_152406[(2)] = inst_151832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (30))){
var inst_151826 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151977 = state_151914;
(statearr_151977[(32)] = inst_151826);

return statearr_151977;
})();
var statearr_151978_152407 = state_151914__$1;
(statearr_151978_152407[(2)] = null);

(statearr_151978_152407[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (10))){
var inst_151658 = (state_151914[(2)]);
var inst_151659 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151660 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151661 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151660,inst_151658,null];
var inst_151662 = cljs.core.PersistentHashMap.fromArrays(inst_151659,inst_151661);
var inst_151663 = cljs.test.do_report.call(null,inst_151662);
var state_151914__$1 = state_151914;
var statearr_151979_152408 = state_151914__$1;
(statearr_151979_152408[(2)] = inst_151663);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151914,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_151709 = klipse.lang.clojure.eval.call(null,"(+ 1 2)\n\n   \n");
var state_151914__$1 = state_151914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151914__$1,(19),inst_151709);
} else {
if((state_val_151915 === (42))){
var inst_151845 = (state_151914[(15)]);
var inst_151855 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151856 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_151857 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151858 = cljs.core.cons.call(null,inst_151857,inst_151845);
var inst_151859 = cljs.core.List.EMPTY;
var inst_151860 = cljs.core._conj.call(null,inst_151859,inst_151858);
var inst_151861 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151862 = cljs.core._conj.call(null,inst_151860,inst_151861);
var inst_151863 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151856,inst_151862,null];
var inst_151864 = cljs.core.PersistentHashMap.fromArrays(inst_151855,inst_151863);
var inst_151865 = cljs.test.do_report.call(null,inst_151864);
var state_151914__$1 = state_151914;
var statearr_151980_152409 = state_151914__$1;
(statearr_151980_152409[(2)] = inst_151865);

(statearr_151980_152409[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (37))){
var inst_151869 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151981 = state_151914;
(statearr_151981[(33)] = inst_151869);

return statearr_151981;
})();
var statearr_151982_152410 = state_151914__$1;
(statearr_151982_152410[(2)] = null);

(statearr_151982_152410[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (8))){
var inst_151634 = (state_151914[(30)]);
var inst_151655 = (state_151914[(2)]);
var state_151914__$1 = (function (){var statearr_151983 = state_151914;
(statearr_151983[(34)] = inst_151655);

return statearr_151983;
})();
var statearr_151984_152411 = state_151914__$1;
(statearr_151984_152411[(2)] = inst_151634);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151915 === (49))){
var inst_151887 = (state_151914[(12)]);
var inst_151897 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151898 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_151899 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_151900 = cljs.core.cons.call(null,inst_151899,inst_151887);
var inst_151901 = cljs.core.List.EMPTY;
var inst_151902 = cljs.core._conj.call(null,inst_151901,inst_151900);
var inst_151903 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_151904 = cljs.core._conj.call(null,inst_151902,inst_151903);
var inst_151905 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_151898,inst_151904,null];
var inst_151906 = cljs.core.PersistentHashMap.fromArrays(inst_151897,inst_151905);
var inst_151907 = cljs.test.do_report.call(null,inst_151906);
var state_151914__$1 = state_151914;
var statearr_151985_152412 = state_151914__$1;
(statearr_151985_152412[(2)] = inst_151907);

(statearr_151985_152412[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_151986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_151986[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_151986[(1)] = (1));

return statearr_151986;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_151914){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151987){if((e151987 instanceof Object)){
var ex__13458__auto__ = e151987;
var statearr_151988_152413 = state_151914;
(statearr_151988_152413[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152414 = state_151914;
state_151914 = G__152414;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_151914){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_151914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_151989 = f__13545__auto__.call(null);
(statearr_151989[(6)] = c__13544__auto__);

return statearr_151989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.apply = (function (self__,args151615){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args151615)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval151612.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_152288){
var state_val_152289 = (state_152288[(1)]);
if((state_val_152289 === (7))){
var inst_152007 = (state_152288[(7)]);
var inst_152017 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152018 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_152019 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152020 = cljs.core.cons.call(null,inst_152019,inst_152007);
var inst_152021 = cljs.core.List.EMPTY;
var inst_152022 = cljs.core._conj.call(null,inst_152021,inst_152020);
var inst_152023 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152024 = cljs.core._conj.call(null,inst_152022,inst_152023);
var inst_152025 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152018,inst_152024,null];
var inst_152026 = cljs.core.PersistentHashMap.fromArrays(inst_152017,inst_152025);
var inst_152027 = cljs.test.do_report.call(null,inst_152026);
var state_152288__$1 = state_152288;
var statearr_152290_152415 = state_152288__$1;
(statearr_152290_152415[(2)] = inst_152027);

(statearr_152290_152415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (20))){
var inst_152091 = (state_152288[(8)]);
var inst_152094 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152095 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152096 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152091);
var inst_152097 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152095,inst_152096,null];
var inst_152098 = cljs.core.PersistentHashMap.fromArrays(inst_152094,inst_152097);
var inst_152099 = cljs.test.do_report.call(null,inst_152098);
var state_152288__$1 = state_152288;
var statearr_152291_152416 = state_152288__$1;
(statearr_152291_152416[(2)] = inst_152099);

(statearr_152291_152416[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (27))){
var inst_152133 = (state_152288[(9)]);
var inst_152136 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152137 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_152138 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152133);
var inst_152139 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152137,inst_152138,null];
var inst_152140 = cljs.core.PersistentHashMap.fromArrays(inst_152136,inst_152139);
var inst_152141 = cljs.test.do_report.call(null,inst_152140);
var state_152288__$1 = state_152288;
var statearr_152292_152417 = state_152288__$1;
(statearr_152292_152417[(2)] = inst_152141);

(statearr_152292_152417[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (1))){
var state_152288__$1 = state_152288;
var statearr_152293_152418 = state_152288__$1;
(statearr_152293_152418[(2)] = null);

(statearr_152293_152418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (24))){
var inst_152116 = (state_152288[(2)]);
var inst_152117 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152118 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_152119 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152118,inst_152116,null];
var inst_152120 = cljs.core.PersistentHashMap.fromArrays(inst_152117,inst_152119);
var inst_152121 = cljs.test.do_report.call(null,inst_152120);
var state_152288__$1 = state_152288;
var statearr_152294_152419 = state_152288__$1;
(statearr_152294_152419[(2)] = inst_152121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_152210 = klipse.lang.clojure.eval.call(null,"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(40),inst_152210);
} else {
if((state_val_152289 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_152253 = klipse.lang.clojure.eval.call(null,"(ns my.aa) (+ 1 2)");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(47),inst_152253);
} else {
if((state_val_152289 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151999 = klipse.lang.clojure.eval.call(null," (def x 12)\n                  (+ x 5)");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(5),inst_151999);
} else {
if((state_val_152289 === (15))){
var inst_152050 = (state_152288[(10)]);
var inst_152071 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152295 = state_152288;
(statearr_152295[(11)] = inst_152071);

return statearr_152295;
})();
var statearr_152296_152420 = state_152288__$1;
(statearr_152296_152420[(2)] = inst_152050);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (48))){
var inst_152261 = (state_152288[(12)]);
var inst_152264 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152265 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152266 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152261);
var inst_152267 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152265,inst_152266,null];
var inst_152268 = cljs.core.PersistentHashMap.fromArrays(inst_152264,inst_152267);
var inst_152269 = cljs.test.do_report.call(null,inst_152268);
var state_152288__$1 = state_152288;
var statearr_152297_152421 = state_152288__$1;
(statearr_152297_152421[(2)] = inst_152269);

(statearr_152297_152421[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (50))){
var inst_152262 = (state_152288[(13)]);
var inst_152283 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152298 = state_152288;
(statearr_152298[(14)] = inst_152283);

return statearr_152298;
})();
var statearr_152299_152422 = state_152288__$1;
(statearr_152299_152422[(2)] = inst_152262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (21))){
var inst_152091 = (state_152288[(8)]);
var inst_152101 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152102 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152103 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152104 = cljs.core.cons.call(null,inst_152103,inst_152091);
var inst_152105 = cljs.core.List.EMPTY;
var inst_152106 = cljs.core._conj.call(null,inst_152105,inst_152104);
var inst_152107 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152108 = cljs.core._conj.call(null,inst_152106,inst_152107);
var inst_152109 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152102,inst_152108,null];
var inst_152110 = cljs.core.PersistentHashMap.fromArrays(inst_152101,inst_152109);
var inst_152111 = cljs.test.do_report.call(null,inst_152110);
var state_152288__$1 = state_152288;
var statearr_152300_152423 = state_152288__$1;
(statearr_152300_152423[(2)] = inst_152111);

(statearr_152300_152423[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (31))){
var inst_152158 = (state_152288[(2)]);
var inst_152159 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152160 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_152161 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152160,inst_152158,null];
var inst_152162 = cljs.core.PersistentHashMap.fromArrays(inst_152159,inst_152161);
var inst_152163 = cljs.test.do_report.call(null,inst_152162);
var state_152288__$1 = state_152288;
var statearr_152301_152424 = state_152288__$1;
(statearr_152301_152424[(2)] = inst_152163);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_152167 = klipse.lang.clojure.eval.call(null,"(map inc [1 2 3])");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(33),inst_152167);
} else {
if((state_val_152289 === (40))){
var inst_152219 = (state_152288[(15)]);
var inst_152220 = (state_152288[(16)]);
var inst_152212 = (state_152288[(2)]);
var inst_152213 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152214 = cljs.core.list((10),(11),(12));
var inst_152215 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_152214];
var inst_152216 = (new cljs.core.PersistentVector(null,2,(5),inst_152213,inst_152215,null));
var inst_152217 = cljs.core.List.EMPTY;
var inst_152218 = cljs.core._conj.call(null,inst_152217,inst_152216);
var inst_152219__$1 = cljs.core._conj.call(null,inst_152218,inst_152212);
var inst_152220__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152219__$1);
var state_152288__$1 = (function (){var statearr_152302 = state_152288;
(statearr_152302[(15)] = inst_152219__$1);

(statearr_152302[(16)] = inst_152220__$1);

return statearr_152302;
})();
if(cljs.core.truth_(inst_152220__$1)){
var statearr_152303_152425 = state_152288__$1;
(statearr_152303_152425[(1)] = (41));

} else {
var statearr_152304_152426 = state_152288__$1;
(statearr_152304_152426[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (33))){
var inst_152177 = (state_152288[(17)]);
var inst_152176 = (state_152288[(18)]);
var inst_152169 = (state_152288[(2)]);
var inst_152170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152171 = cljs.core.list((2),(3),(4));
var inst_152172 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_152171];
var inst_152173 = (new cljs.core.PersistentVector(null,2,(5),inst_152170,inst_152172,null));
var inst_152174 = cljs.core.List.EMPTY;
var inst_152175 = cljs.core._conj.call(null,inst_152174,inst_152173);
var inst_152176__$1 = cljs.core._conj.call(null,inst_152175,inst_152169);
var inst_152177__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152176__$1);
var state_152288__$1 = (function (){var statearr_152305 = state_152288;
(statearr_152305[(17)] = inst_152177__$1);

(statearr_152305[(18)] = inst_152176__$1);

return statearr_152305;
})();
if(cljs.core.truth_(inst_152177__$1)){
var statearr_152306_152427 = state_152288__$1;
(statearr_152306_152427[(1)] = (34));

} else {
var statearr_152307_152428 = state_152288__$1;
(statearr_152307_152428[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (13))){
var inst_152049 = (state_152288[(19)]);
var inst_152052 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152053 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152054 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152049);
var inst_152055 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152053,inst_152054,null];
var inst_152056 = cljs.core.PersistentHashMap.fromArrays(inst_152052,inst_152055);
var inst_152057 = cljs.test.do_report.call(null,inst_152056);
var state_152288__$1 = state_152288;
var statearr_152308_152429 = state_152288__$1;
(statearr_152308_152429[(2)] = inst_152057);

(statearr_152308_152429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (22))){
var inst_152092 = (state_152288[(20)]);
var inst_152113 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152309 = state_152288;
(statearr_152309[(21)] = inst_152113);

return statearr_152309;
})();
var statearr_152310_152430 = state_152288__$1;
(statearr_152310_152430[(2)] = inst_152092);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (36))){
var inst_152177 = (state_152288[(17)]);
var inst_152198 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152311 = state_152288;
(statearr_152311[(22)] = inst_152198);

return statearr_152311;
})();
var statearr_152312_152431 = state_152288__$1;
(statearr_152312_152431[(2)] = inst_152177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (41))){
var inst_152219 = (state_152288[(15)]);
var inst_152222 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152223 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_152224 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152219);
var inst_152225 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152223,inst_152224,null];
var inst_152226 = cljs.core.PersistentHashMap.fromArrays(inst_152222,inst_152225);
var inst_152227 = cljs.test.do_report.call(null,inst_152226);
var state_152288__$1 = state_152288;
var statearr_152313_152432 = state_152288__$1;
(statearr_152313_152432[(2)] = inst_152227);

(statearr_152313_152432[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (43))){
var inst_152220 = (state_152288[(16)]);
var inst_152241 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152314 = state_152288;
(statearr_152314[(23)] = inst_152241);

return statearr_152314;
})();
var statearr_152315_152433 = state_152288__$1;
(statearr_152315_152433[(2)] = inst_152220);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (29))){
var inst_152134 = (state_152288[(24)]);
var inst_152155 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152316 = state_152288;
(statearr_152316[(25)] = inst_152155);

return statearr_152316;
})();
var statearr_152317_152434 = state_152288__$1;
(statearr_152317_152434[(2)] = inst_152134);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (44))){
var inst_152285 = (state_152288[(2)]);
var inst_152286 = done.call(null);
var state_152288__$1 = (function (){var statearr_152318 = state_152288;
(statearr_152318[(26)] = inst_152285);

return statearr_152318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152288__$1,inst_152286);
} else {
if((state_val_152289 === (6))){
var inst_152007 = (state_152288[(7)]);
var inst_152010 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152011 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_152012 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152007);
var inst_152013 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152011,inst_152012,null];
var inst_152014 = cljs.core.PersistentHashMap.fromArrays(inst_152010,inst_152013);
var inst_152015 = cljs.test.do_report.call(null,inst_152014);
var state_152288__$1 = state_152288;
var statearr_152319_152435 = state_152288__$1;
(statearr_152319_152435[(2)] = inst_152015);

(statearr_152319_152435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (28))){
var inst_152133 = (state_152288[(9)]);
var inst_152143 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152144 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_152145 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152146 = cljs.core.cons.call(null,inst_152145,inst_152133);
var inst_152147 = cljs.core.List.EMPTY;
var inst_152148 = cljs.core._conj.call(null,inst_152147,inst_152146);
var inst_152149 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152150 = cljs.core._conj.call(null,inst_152148,inst_152149);
var inst_152151 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152144,inst_152150,null];
var inst_152152 = cljs.core.PersistentHashMap.fromArrays(inst_152143,inst_152151);
var inst_152153 = cljs.test.do_report.call(null,inst_152152);
var state_152288__$1 = state_152288;
var statearr_152320_152436 = state_152288__$1;
(statearr_152320_152436[(2)] = inst_152153);

(statearr_152320_152436[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_152125 = klipse.lang.clojure.eval.call(null,"(if 1 2 3)");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(26),inst_152125);
} else {
if((state_val_152289 === (34))){
var inst_152176 = (state_152288[(18)]);
var inst_152179 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152180 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_152181 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152176);
var inst_152182 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152180,inst_152181,null];
var inst_152183 = cljs.core.PersistentHashMap.fromArrays(inst_152179,inst_152182);
var inst_152184 = cljs.test.do_report.call(null,inst_152183);
var state_152288__$1 = state_152288;
var statearr_152321_152437 = state_152288__$1;
(statearr_152321_152437[(2)] = inst_152184);

(statearr_152321_152437[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (17))){
var inst_152074 = (state_152288[(2)]);
var inst_152075 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152076 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152077 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152076,inst_152074,null];
var inst_152078 = cljs.core.PersistentHashMap.fromArrays(inst_152075,inst_152077);
var inst_152079 = cljs.test.do_report.call(null,inst_152078);
var state_152288__$1 = state_152288;
var statearr_152322_152438 = state_152288__$1;
(statearr_152322_152438[(2)] = inst_152079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (3))){
var inst_151990 = (state_152288[(2)]);
var inst_151991 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_151992 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n                  (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_151993 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_151992,inst_151990,null];
var inst_151994 = cljs.core.PersistentHashMap.fromArrays(inst_151991,inst_151993);
var inst_151995 = cljs.test.do_report.call(null,inst_151994);
var state_152288__$1 = state_152288;
var statearr_152323_152439 = state_152288__$1;
(statearr_152323_152439[(2)] = inst_151995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (12))){
var inst_152050 = (state_152288[(10)]);
var inst_152049 = (state_152288[(19)]);
var inst_152043 = (state_152288[(2)]);
var inst_152044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152045 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_152046 = (new cljs.core.PersistentVector(null,2,(5),inst_152044,inst_152045,null));
var inst_152047 = cljs.core.List.EMPTY;
var inst_152048 = cljs.core._conj.call(null,inst_152047,inst_152046);
var inst_152049__$1 = cljs.core._conj.call(null,inst_152048,inst_152043);
var inst_152050__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152049__$1);
var state_152288__$1 = (function (){var statearr_152324 = state_152288;
(statearr_152324[(10)] = inst_152050__$1);

(statearr_152324[(19)] = inst_152049__$1);

return statearr_152324;
})();
if(cljs.core.truth_(inst_152050__$1)){
var statearr_152325_152440 = state_152288__$1;
(statearr_152325_152440[(1)] = (13));

} else {
var statearr_152326_152441 = state_152288__$1;
(statearr_152326_152441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (2))){
var inst_152031 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152327 = state_152288;
(statearr_152327[(27)] = inst_152031);

return statearr_152327;
})();
var statearr_152328_152442 = state_152288__$1;
(statearr_152328_152442[(2)] = null);

(statearr_152328_152442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (23))){
var inst_152157 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152329 = state_152288;
(statearr_152329[(28)] = inst_152157);

return statearr_152329;
})();
var statearr_152330_152443 = state_152288__$1;
(statearr_152330_152443[(2)] = null);

(statearr_152330_152443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (47))){
var inst_152262 = (state_152288[(13)]);
var inst_152261 = (state_152288[(12)]);
var inst_152255 = (state_152288[(2)]);
var inst_152256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152257 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_152258 = (new cljs.core.PersistentVector(null,2,(5),inst_152256,inst_152257,null));
var inst_152259 = cljs.core.List.EMPTY;
var inst_152260 = cljs.core._conj.call(null,inst_152259,inst_152258);
var inst_152261__$1 = cljs.core._conj.call(null,inst_152260,inst_152255);
var inst_152262__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152261__$1);
var state_152288__$1 = (function (){var statearr_152331 = state_152288;
(statearr_152331[(13)] = inst_152262__$1);

(statearr_152331[(12)] = inst_152261__$1);

return statearr_152331;
})();
if(cljs.core.truth_(inst_152262__$1)){
var statearr_152332_152444 = state_152288__$1;
(statearr_152332_152444[(1)] = (48));

} else {
var statearr_152333_152445 = state_152288__$1;
(statearr_152333_152445[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (35))){
var inst_152176 = (state_152288[(18)]);
var inst_152186 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152187 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_152188 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152189 = cljs.core.cons.call(null,inst_152188,inst_152176);
var inst_152190 = cljs.core.List.EMPTY;
var inst_152191 = cljs.core._conj.call(null,inst_152190,inst_152189);
var inst_152192 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152193 = cljs.core._conj.call(null,inst_152191,inst_152192);
var inst_152194 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152187,inst_152193,null];
var inst_152195 = cljs.core.PersistentHashMap.fromArrays(inst_152186,inst_152194);
var inst_152196 = cljs.test.do_report.call(null,inst_152195);
var state_152288__$1 = state_152288;
var statearr_152334_152446 = state_152288__$1;
(statearr_152334_152446[(2)] = inst_152196);

(statearr_152334_152446[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (19))){
var inst_152092 = (state_152288[(20)]);
var inst_152091 = (state_152288[(8)]);
var inst_152085 = (state_152288[(2)]);
var inst_152086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152087 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_152088 = (new cljs.core.PersistentVector(null,2,(5),inst_152086,inst_152087,null));
var inst_152089 = cljs.core.List.EMPTY;
var inst_152090 = cljs.core._conj.call(null,inst_152089,inst_152088);
var inst_152091__$1 = cljs.core._conj.call(null,inst_152090,inst_152085);
var inst_152092__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152091__$1);
var state_152288__$1 = (function (){var statearr_152335 = state_152288;
(statearr_152335[(20)] = inst_152092__$1);

(statearr_152335[(8)] = inst_152091__$1);

return statearr_152335;
})();
if(cljs.core.truth_(inst_152092__$1)){
var statearr_152336_152447 = state_152288__$1;
(statearr_152336_152447[(1)] = (20));

} else {
var statearr_152337_152448 = state_152288__$1;
(statearr_152337_152448[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_152041 = klipse.lang.clojure.eval.call(null,"(+ 1 2)");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(12),inst_152041);
} else {
if((state_val_152289 === (9))){
var inst_152073 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152338 = state_152288;
(statearr_152338[(29)] = inst_152073);

return statearr_152338;
})();
var statearr_152339_152449 = state_152288__$1;
(statearr_152339_152449[(2)] = null);

(statearr_152339_152449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (5))){
var inst_152008 = (state_152288[(30)]);
var inst_152007 = (state_152288[(7)]);
var inst_152001 = (state_152288[(2)]);
var inst_152002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152003 = [new cljs.core.Keyword(null,"ok","ok",967785236),(17)];
var inst_152004 = (new cljs.core.PersistentVector(null,2,(5),inst_152002,inst_152003,null));
var inst_152005 = cljs.core.List.EMPTY;
var inst_152006 = cljs.core._conj.call(null,inst_152005,inst_152004);
var inst_152007__$1 = cljs.core._conj.call(null,inst_152006,inst_152001);
var inst_152008__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152007__$1);
var state_152288__$1 = (function (){var statearr_152340 = state_152288;
(statearr_152340[(30)] = inst_152008__$1);

(statearr_152340[(7)] = inst_152007__$1);

return statearr_152340;
})();
if(cljs.core.truth_(inst_152008__$1)){
var statearr_152341_152450 = state_152288__$1;
(statearr_152341_152450[(1)] = (6));

} else {
var statearr_152342_152451 = state_152288__$1;
(statearr_152342_152451[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (14))){
var inst_152049 = (state_152288[(19)]);
var inst_152059 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152060 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152061 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152062 = cljs.core.cons.call(null,inst_152061,inst_152049);
var inst_152063 = cljs.core.List.EMPTY;
var inst_152064 = cljs.core._conj.call(null,inst_152063,inst_152062);
var inst_152065 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152066 = cljs.core._conj.call(null,inst_152064,inst_152065);
var inst_152067 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152060,inst_152066,null];
var inst_152068 = cljs.core.PersistentHashMap.fromArrays(inst_152059,inst_152067);
var inst_152069 = cljs.test.do_report.call(null,inst_152068);
var state_152288__$1 = state_152288;
var statearr_152343_152452 = state_152288__$1;
(statearr_152343_152452[(2)] = inst_152069);

(statearr_152343_152452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (45))){
var inst_152244 = (state_152288[(2)]);
var inst_152245 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152246 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152247 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152246,inst_152244,null];
var inst_152248 = cljs.core.PersistentHashMap.fromArrays(inst_152245,inst_152247);
var inst_152249 = cljs.test.do_report.call(null,inst_152248);
var state_152288__$1 = state_152288;
var statearr_152344_152453 = state_152288__$1;
(statearr_152344_152453[(2)] = inst_152249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (26))){
var inst_152133 = (state_152288[(9)]);
var inst_152134 = (state_152288[(24)]);
var inst_152127 = (state_152288[(2)]);
var inst_152128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152129 = [new cljs.core.Keyword(null,"ok","ok",967785236),(2)];
var inst_152130 = (new cljs.core.PersistentVector(null,2,(5),inst_152128,inst_152129,null));
var inst_152131 = cljs.core.List.EMPTY;
var inst_152132 = cljs.core._conj.call(null,inst_152131,inst_152130);
var inst_152133__$1 = cljs.core._conj.call(null,inst_152132,inst_152127);
var inst_152134__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152133__$1);
var state_152288__$1 = (function (){var statearr_152345 = state_152288;
(statearr_152345[(9)] = inst_152133__$1);

(statearr_152345[(24)] = inst_152134__$1);

return statearr_152345;
})();
if(cljs.core.truth_(inst_152134__$1)){
var statearr_152346_152454 = state_152288__$1;
(statearr_152346_152454[(1)] = (27));

} else {
var statearr_152347_152455 = state_152288__$1;
(statearr_152347_152455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (16))){
var inst_152115 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152348 = state_152288;
(statearr_152348[(31)] = inst_152115);

return statearr_152348;
})();
var statearr_152349_152456 = state_152288__$1;
(statearr_152349_152456[(2)] = null);

(statearr_152349_152456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (38))){
var inst_152201 = (state_152288[(2)]);
var inst_152202 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152203 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_152204 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152203,inst_152201,null];
var inst_152205 = cljs.core.PersistentHashMap.fromArrays(inst_152202,inst_152204);
var inst_152206 = cljs.test.do_report.call(null,inst_152205);
var state_152288__$1 = state_152288;
var statearr_152350_152457 = state_152288__$1;
(statearr_152350_152457[(2)] = inst_152206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (30))){
var inst_152200 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152351 = state_152288;
(statearr_152351[(32)] = inst_152200);

return statearr_152351;
})();
var statearr_152352_152458 = state_152288__$1;
(statearr_152352_152458[(2)] = null);

(statearr_152352_152458[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (10))){
var inst_152032 = (state_152288[(2)]);
var inst_152033 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152034 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152035 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152034,inst_152032,null];
var inst_152036 = cljs.core.PersistentHashMap.fromArrays(inst_152033,inst_152035);
var inst_152037 = cljs.test.do_report.call(null,inst_152036);
var state_152288__$1 = state_152288;
var statearr_152353_152459 = state_152288__$1;
(statearr_152353_152459[(2)] = inst_152037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152288,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_152083 = klipse.lang.clojure.eval.call(null,"(+ 1 2)\n\n   \n");
var state_152288__$1 = state_152288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152288__$1,(19),inst_152083);
} else {
if((state_val_152289 === (42))){
var inst_152219 = (state_152288[(15)]);
var inst_152229 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152230 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n                  (concat (rest lst) [a]))\n                  (-> (repeat 3 nil)\n                  (append-cyclic  9)\n                  (append-cyclic  10)\n                  (append-cyclic  11)\n                  (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_152231 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152232 = cljs.core.cons.call(null,inst_152231,inst_152219);
var inst_152233 = cljs.core.List.EMPTY;
var inst_152234 = cljs.core._conj.call(null,inst_152233,inst_152232);
var inst_152235 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152236 = cljs.core._conj.call(null,inst_152234,inst_152235);
var inst_152237 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152230,inst_152236,null];
var inst_152238 = cljs.core.PersistentHashMap.fromArrays(inst_152229,inst_152237);
var inst_152239 = cljs.test.do_report.call(null,inst_152238);
var state_152288__$1 = state_152288;
var statearr_152354_152460 = state_152288__$1;
(statearr_152354_152460[(2)] = inst_152239);

(statearr_152354_152460[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (37))){
var inst_152243 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152355 = state_152288;
(statearr_152355[(33)] = inst_152243);

return statearr_152355;
})();
var statearr_152356_152461 = state_152288__$1;
(statearr_152356_152461[(2)] = null);

(statearr_152356_152461[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (8))){
var inst_152008 = (state_152288[(30)]);
var inst_152029 = (state_152288[(2)]);
var state_152288__$1 = (function (){var statearr_152357 = state_152288;
(statearr_152357[(34)] = inst_152029);

return statearr_152357;
})();
var statearr_152358_152462 = state_152288__$1;
(statearr_152358_152462[(2)] = inst_152008);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152289 === (49))){
var inst_152261 = (state_152288[(12)]);
var inst_152271 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152272 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_152273 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152274 = cljs.core.cons.call(null,inst_152273,inst_152261);
var inst_152275 = cljs.core.List.EMPTY;
var inst_152276 = cljs.core._conj.call(null,inst_152275,inst_152274);
var inst_152277 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152278 = cljs.core._conj.call(null,inst_152276,inst_152277);
var inst_152279 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152272,inst_152278,null];
var inst_152280 = cljs.core.PersistentHashMap.fromArrays(inst_152271,inst_152279);
var inst_152281 = cljs.test.do_report.call(null,inst_152280);
var state_152288__$1 = state_152288;
var statearr_152359_152463 = state_152288__$1;
(statearr_152359_152463[(2)] = inst_152281);

(statearr_152359_152463[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_152360[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152360[(1)] = (1));

return statearr_152360;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152288){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152361){if((e152361 instanceof Object)){
var ex__13458__auto__ = e152361;
var statearr_152362_152464 = state_152288;
(statearr_152362_152464[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152465 = state_152288;
state_152288 = G__152465;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152288){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_152363 = f__13545__auto__.call(null);
(statearr_152363[(6)] = c__13544__auto__);

return statearr_152363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval151612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta151613","meta151613",-1765980345,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval151612.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval151612.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval151612";

klipse.cards.test.eval.t_klipse$cards$test$eval151612.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval151612");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval151612 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval151612(meta151613){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval151612(meta151613));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval151612(null));
});

klipse.cards.test.eval.test_eval_2.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_2;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-2","klipse.cards.test.eval/test-eval-2",610299424,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-2","test-eval-2",1863055047,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",21,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_2)?klipse.cards.test.eval.test_eval_2.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_macros = (function klipse$cards$test$eval$test_eval_macros(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval_macros.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_macros.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval152466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval152466 = (function (meta152467){
this.meta152467 = meta152467;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_152468,meta152467__$1){
var self__ = this;
var _152468__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152466(meta152467__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_152468){
var self__ = this;
var _152468__$1 = this;
return self__.meta152467;
});


klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_152515){
var state_val_152516 = (state_152515[(1)]);
if((state_val_152516 === (1))){
var state_152515__$1 = state_152515;
var statearr_152517_152592 = state_152515__$1;
(statearr_152517_152592[(2)] = null);

(statearr_152517_152592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152516 === (2))){
var inst_152512 = (state_152515[(2)]);
var inst_152513 = done.call(null);
var state_152515__$1 = (function (){var statearr_152518 = state_152515;
(statearr_152518[(7)] = inst_152512);

return statearr_152518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152515__$1,inst_152513);
} else {
if((state_val_152516 === (3))){
var inst_152470 = (state_152515[(2)]);
var inst_152471 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152472 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152473 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152472,inst_152470,null];
var inst_152474 = cljs.core.PersistentHashMap.fromArrays(inst_152471,inst_152473);
var inst_152475 = cljs.test.do_report.call(null,inst_152474);
var state_152515__$1 = state_152515;
var statearr_152519_152593 = state_152515__$1;
(statearr_152519_152593[(2)] = inst_152475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152516 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152515,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152479 = klipse.lang.clojure.eval.call(null,"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)");
var state_152515__$1 = state_152515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152515__$1,(5),inst_152479);
} else {
if((state_val_152516 === (5))){
var inst_152488 = (state_152515[(8)]);
var inst_152489 = (state_152515[(9)]);
var inst_152481 = (state_152515[(2)]);
var inst_152482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152483 = cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13));
var inst_152484 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_152483];
var inst_152485 = (new cljs.core.PersistentVector(null,2,(5),inst_152482,inst_152484,null));
var inst_152486 = cljs.core.List.EMPTY;
var inst_152487 = cljs.core._conj.call(null,inst_152486,inst_152485);
var inst_152488__$1 = cljs.core._conj.call(null,inst_152487,inst_152481);
var inst_152489__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152488__$1);
var state_152515__$1 = (function (){var statearr_152520 = state_152515;
(statearr_152520[(8)] = inst_152488__$1);

(statearr_152520[(9)] = inst_152489__$1);

return statearr_152520;
})();
if(cljs.core.truth_(inst_152489__$1)){
var statearr_152521_152594 = state_152515__$1;
(statearr_152521_152594[(1)] = (6));

} else {
var statearr_152522_152595 = state_152515__$1;
(statearr_152522_152595[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152516 === (6))){
var inst_152488 = (state_152515[(8)]);
var inst_152491 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152492 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152493 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152488);
var inst_152494 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152492,inst_152493,null];
var inst_152495 = cljs.core.PersistentHashMap.fromArrays(inst_152491,inst_152494);
var inst_152496 = cljs.test.do_report.call(null,inst_152495);
var state_152515__$1 = state_152515;
var statearr_152523_152596 = state_152515__$1;
(statearr_152523_152596[(2)] = inst_152496);

(statearr_152523_152596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152516 === (7))){
var inst_152488 = (state_152515[(8)]);
var inst_152498 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152499 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152500 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152501 = cljs.core.cons.call(null,inst_152500,inst_152488);
var inst_152502 = cljs.core.List.EMPTY;
var inst_152503 = cljs.core._conj.call(null,inst_152502,inst_152501);
var inst_152504 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152505 = cljs.core._conj.call(null,inst_152503,inst_152504);
var inst_152506 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152499,inst_152505,null];
var inst_152507 = cljs.core.PersistentHashMap.fromArrays(inst_152498,inst_152506);
var inst_152508 = cljs.test.do_report.call(null,inst_152507);
var state_152515__$1 = state_152515;
var statearr_152524_152597 = state_152515__$1;
(statearr_152524_152597[(2)] = inst_152508);

(statearr_152524_152597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152516 === (8))){
var inst_152489 = (state_152515[(9)]);
var inst_152510 = (state_152515[(2)]);
var state_152515__$1 = (function (){var statearr_152525 = state_152515;
(statearr_152525[(10)] = inst_152510);

return statearr_152525;
})();
var statearr_152526_152598 = state_152515__$1;
(statearr_152526_152598[(2)] = inst_152489);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152527[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152527[(1)] = (1));

return statearr_152527;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152515){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152528){if((e152528 instanceof Object)){
var ex__13458__auto__ = e152528;
var statearr_152529_152599 = state_152515;
(statearr_152529_152599[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152600 = state_152515;
state_152515 = G__152600;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152515){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_152530 = f__13545__auto__.call(null);
(statearr_152530[(6)] = c__13544__auto__);

return statearr_152530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.apply = (function (self__,args152469){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args152469)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval152466.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_152576){
var state_val_152577 = (state_152576[(1)]);
if((state_val_152577 === (1))){
var state_152576__$1 = state_152576;
var statearr_152578_152601 = state_152576__$1;
(statearr_152578_152601[(2)] = null);

(statearr_152578_152601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152577 === (2))){
var inst_152573 = (state_152576[(2)]);
var inst_152574 = done.call(null);
var state_152576__$1 = (function (){var statearr_152579 = state_152576;
(statearr_152579[(7)] = inst_152573);

return statearr_152579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152576__$1,inst_152574);
} else {
if((state_val_152577 === (3))){
var inst_152531 = (state_152576[(2)]);
var inst_152532 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152533 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152534 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152533,inst_152531,null];
var inst_152535 = cljs.core.PersistentHashMap.fromArrays(inst_152532,inst_152534);
var inst_152536 = cljs.test.do_report.call(null,inst_152535);
var state_152576__$1 = state_152576;
var statearr_152580_152602 = state_152576__$1;
(statearr_152580_152602[(2)] = inst_152536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152576__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152577 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152576,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152540 = klipse.lang.clojure.eval.call(null,"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)");
var state_152576__$1 = state_152576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152576__$1,(5),inst_152540);
} else {
if((state_val_152577 === (5))){
var inst_152549 = (state_152576[(8)]);
var inst_152550 = (state_152576[(9)]);
var inst_152542 = (state_152576[(2)]);
var inst_152543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_152544 = cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13));
var inst_152545 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_152544];
var inst_152546 = (new cljs.core.PersistentVector(null,2,(5),inst_152543,inst_152545,null));
var inst_152547 = cljs.core.List.EMPTY;
var inst_152548 = cljs.core._conj.call(null,inst_152547,inst_152546);
var inst_152549__$1 = cljs.core._conj.call(null,inst_152548,inst_152542);
var inst_152550__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152549__$1);
var state_152576__$1 = (function (){var statearr_152581 = state_152576;
(statearr_152581[(8)] = inst_152549__$1);

(statearr_152581[(9)] = inst_152550__$1);

return statearr_152581;
})();
if(cljs.core.truth_(inst_152550__$1)){
var statearr_152582_152603 = state_152576__$1;
(statearr_152582_152603[(1)] = (6));

} else {
var statearr_152583_152604 = state_152576__$1;
(statearr_152583_152604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152577 === (6))){
var inst_152549 = (state_152576[(8)]);
var inst_152552 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152553 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152554 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152549);
var inst_152555 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152553,inst_152554,null];
var inst_152556 = cljs.core.PersistentHashMap.fromArrays(inst_152552,inst_152555);
var inst_152557 = cljs.test.do_report.call(null,inst_152556);
var state_152576__$1 = state_152576;
var statearr_152584_152605 = state_152576__$1;
(statearr_152584_152605[(2)] = inst_152557);

(statearr_152584_152605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152577 === (7))){
var inst_152549 = (state_152576[(8)]);
var inst_152559 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152560 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n                  (defmacro hello \n                  [x] \n                  `(inc ~x))\n                  (hello nil nil 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null));
var inst_152561 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152562 = cljs.core.cons.call(null,inst_152561,inst_152549);
var inst_152563 = cljs.core.List.EMPTY;
var inst_152564 = cljs.core._conj.call(null,inst_152563,inst_152562);
var inst_152565 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152566 = cljs.core._conj.call(null,inst_152564,inst_152565);
var inst_152567 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152560,inst_152566,null];
var inst_152568 = cljs.core.PersistentHashMap.fromArrays(inst_152559,inst_152567);
var inst_152569 = cljs.test.do_report.call(null,inst_152568);
var state_152576__$1 = state_152576;
var statearr_152585_152606 = state_152576__$1;
(statearr_152585_152606[(2)] = inst_152569);

(statearr_152585_152606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152577 === (8))){
var inst_152550 = (state_152576[(9)]);
var inst_152571 = (state_152576[(2)]);
var state_152576__$1 = (function (){var statearr_152586 = state_152576;
(statearr_152586[(10)] = inst_152571);

return statearr_152586;
})();
var statearr_152587_152607 = state_152576__$1;
(statearr_152587_152607[(2)] = inst_152550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152576__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152588[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152588[(1)] = (1));

return statearr_152588;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152576){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152589){if((e152589 instanceof Object)){
var ex__13458__auto__ = e152589;
var statearr_152590_152608 = state_152576;
(statearr_152590_152608[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152609 = state_152576;
state_152576 = G__152609;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152576){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_152591 = f__13545__auto__.call(null);
(statearr_152591[(6)] = c__13544__auto__);

return statearr_152591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta152467","meta152467",-677981735,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval152466.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval152466.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval152466";

klipse.cards.test.eval.t_klipse$cards$test$eval152466.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval152466");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval152466 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval152466(meta152467){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152466(meta152467));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval152466(null));
});

klipse.cards.test.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_macros;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-macros","klipse.cards.test.eval/test-eval-macros",-1840749386,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",26,1,55,55,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_macros)?klipse.cards.test.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_4 = (function klipse$cards$test$eval$test_eval_4(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval_4.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_4.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval152610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval152610 = (function (meta152611){
this.meta152611 = meta152611;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_152612,meta152611__$1){
var self__ = this;
var _152612__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152610(meta152611__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_152612){
var self__ = this;
var _152612__$1 = this;
return self__.meta152611;
});


klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_152657){
var state_val_152658 = (state_152657[(1)]);
if((state_val_152658 === (1))){
var state_152657__$1 = state_152657;
var statearr_152659_152732 = state_152657__$1;
(statearr_152659_152732[(2)] = null);

(statearr_152659_152732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152658 === (2))){
var inst_152654 = (state_152657[(2)]);
var inst_152655 = done.call(null);
var state_152657__$1 = (function (){var statearr_152660 = state_152657;
(statearr_152660[(7)] = inst_152654);

return statearr_152660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152657__$1,inst_152655);
} else {
if((state_val_152658 === (3))){
var inst_152614 = (state_152657[(2)]);
var inst_152615 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152616 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152617 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152616,inst_152614,null];
var inst_152618 = cljs.core.PersistentHashMap.fromArrays(inst_152615,inst_152617);
var inst_152619 = cljs.test.do_report.call(null,inst_152618);
var state_152657__$1 = state_152657;
var statearr_152661_152733 = state_152657__$1;
(statearr_152661_152733[(2)] = inst_152619);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152658 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152657,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152623 = klipse.lang.clojure.eval.call(null,"(type 1)");
var state_152657__$1 = state_152657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152657__$1,(5),inst_152623);
} else {
if((state_val_152658 === (5))){
var inst_152631 = (state_152657[(8)]);
var inst_152630 = (state_152657[(9)]);
var inst_152625 = (state_152657[(2)]);
var inst_152626 = cljs.core.second.call(null,inst_152625);
var inst_152627 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152626)].join('');
var inst_152628 = cljs.core.List.EMPTY;
var inst_152629 = cljs.core._conj.call(null,inst_152628,"function Number() {[native code]}");
var inst_152630__$1 = cljs.core._conj.call(null,inst_152629,inst_152627);
var inst_152631__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_152630__$1);
var state_152657__$1 = (function (){var statearr_152662 = state_152657;
(statearr_152662[(8)] = inst_152631__$1);

(statearr_152662[(9)] = inst_152630__$1);

return statearr_152662;
})();
if(cljs.core.truth_(inst_152631__$1)){
var statearr_152663_152734 = state_152657__$1;
(statearr_152663_152734[(1)] = (6));

} else {
var statearr_152664_152735 = state_152657__$1;
(statearr_152664_152735[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152658 === (6))){
var inst_152630 = (state_152657[(9)]);
var inst_152633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152634 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152635 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_152630);
var inst_152636 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152634,inst_152635,null];
var inst_152637 = cljs.core.PersistentHashMap.fromArrays(inst_152633,inst_152636);
var inst_152638 = cljs.test.do_report.call(null,inst_152637);
var state_152657__$1 = state_152657;
var statearr_152665_152736 = state_152657__$1;
(statearr_152665_152736[(2)] = inst_152638);

(statearr_152665_152736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152658 === (7))){
var inst_152630 = (state_152657[(9)]);
var inst_152640 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152641 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152642 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_152643 = cljs.core.cons.call(null,inst_152642,inst_152630);
var inst_152644 = cljs.core.List.EMPTY;
var inst_152645 = cljs.core._conj.call(null,inst_152644,inst_152643);
var inst_152646 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152647 = cljs.core._conj.call(null,inst_152645,inst_152646);
var inst_152648 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152641,inst_152647,null];
var inst_152649 = cljs.core.PersistentHashMap.fromArrays(inst_152640,inst_152648);
var inst_152650 = cljs.test.do_report.call(null,inst_152649);
var state_152657__$1 = state_152657;
var statearr_152666_152737 = state_152657__$1;
(statearr_152666_152737[(2)] = inst_152650);

(statearr_152666_152737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152658 === (8))){
var inst_152631 = (state_152657[(8)]);
var inst_152652 = (state_152657[(2)]);
var state_152657__$1 = (function (){var statearr_152667 = state_152657;
(statearr_152667[(10)] = inst_152652);

return statearr_152667;
})();
var statearr_152668_152738 = state_152657__$1;
(statearr_152668_152738[(2)] = inst_152631);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152669[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152669[(1)] = (1));

return statearr_152669;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152657){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152670){if((e152670 instanceof Object)){
var ex__13458__auto__ = e152670;
var statearr_152671_152739 = state_152657;
(statearr_152671_152739[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152740 = state_152657;
state_152657 = G__152740;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152657){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_152672 = f__13545__auto__.call(null);
(statearr_152672[(6)] = c__13544__auto__);

return statearr_152672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.apply = (function (self__,args152613){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args152613)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval152610.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_152716){
var state_val_152717 = (state_152716[(1)]);
if((state_val_152717 === (1))){
var state_152716__$1 = state_152716;
var statearr_152718_152741 = state_152716__$1;
(statearr_152718_152741[(2)] = null);

(statearr_152718_152741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152717 === (2))){
var inst_152713 = (state_152716[(2)]);
var inst_152714 = done.call(null);
var state_152716__$1 = (function (){var statearr_152719 = state_152716;
(statearr_152719[(7)] = inst_152713);

return statearr_152719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152716__$1,inst_152714);
} else {
if((state_val_152717 === (3))){
var inst_152673 = (state_152716[(2)]);
var inst_152674 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152675 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152676 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152675,inst_152673,null];
var inst_152677 = cljs.core.PersistentHashMap.fromArrays(inst_152674,inst_152676);
var inst_152678 = cljs.test.do_report.call(null,inst_152677);
var state_152716__$1 = state_152716;
var statearr_152720_152742 = state_152716__$1;
(statearr_152720_152742[(2)] = inst_152678);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152717 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152716,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152682 = klipse.lang.clojure.eval.call(null,"(type 1)");
var state_152716__$1 = state_152716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152716__$1,(5),inst_152682);
} else {
if((state_val_152717 === (5))){
var inst_152690 = (state_152716[(8)]);
var inst_152689 = (state_152716[(9)]);
var inst_152684 = (state_152716[(2)]);
var inst_152685 = cljs.core.second.call(null,inst_152684);
var inst_152686 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152685)].join('');
var inst_152687 = cljs.core.List.EMPTY;
var inst_152688 = cljs.core._conj.call(null,inst_152687,"function Number() {[native code]}");
var inst_152689__$1 = cljs.core._conj.call(null,inst_152688,inst_152686);
var inst_152690__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_152689__$1);
var state_152716__$1 = (function (){var statearr_152721 = state_152716;
(statearr_152721[(8)] = inst_152690__$1);

(statearr_152721[(9)] = inst_152689__$1);

return statearr_152721;
})();
if(cljs.core.truth_(inst_152690__$1)){
var statearr_152722_152743 = state_152716__$1;
(statearr_152722_152743[(1)] = (6));

} else {
var statearr_152723_152744 = state_152716__$1;
(statearr_152723_152744[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152717 === (6))){
var inst_152689 = (state_152716[(9)]);
var inst_152692 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152693 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152694 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_152689);
var inst_152695 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152693,inst_152694,null];
var inst_152696 = cljs.core.PersistentHashMap.fromArrays(inst_152692,inst_152695);
var inst_152697 = cljs.test.do_report.call(null,inst_152696);
var state_152716__$1 = state_152716;
var statearr_152724_152745 = state_152716__$1;
(statearr_152724_152745[(2)] = inst_152697);

(statearr_152724_152745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152717 === (7))){
var inst_152689 = (state_152716[(9)]);
var inst_152699 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152700 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)")))),"function Number() {[native code]}");
var inst_152701 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_152702 = cljs.core.cons.call(null,inst_152701,inst_152689);
var inst_152703 = cljs.core.List.EMPTY;
var inst_152704 = cljs.core._conj.call(null,inst_152703,inst_152702);
var inst_152705 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152706 = cljs.core._conj.call(null,inst_152704,inst_152705);
var inst_152707 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152700,inst_152706,null];
var inst_152708 = cljs.core.PersistentHashMap.fromArrays(inst_152699,inst_152707);
var inst_152709 = cljs.test.do_report.call(null,inst_152708);
var state_152716__$1 = state_152716;
var statearr_152725_152746 = state_152716__$1;
(statearr_152725_152746[(2)] = inst_152709);

(statearr_152725_152746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152717 === (8))){
var inst_152690 = (state_152716[(8)]);
var inst_152711 = (state_152716[(2)]);
var state_152716__$1 = (function (){var statearr_152726 = state_152716;
(statearr_152726[(10)] = inst_152711);

return statearr_152726;
})();
var statearr_152727_152747 = state_152716__$1;
(statearr_152727_152747[(2)] = inst_152690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152728[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152728[(1)] = (1));

return statearr_152728;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152716){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152729){if((e152729 instanceof Object)){
var ex__13458__auto__ = e152729;
var statearr_152730_152748 = state_152716;
(statearr_152730_152748[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152749 = state_152716;
state_152716 = G__152749;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152716){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_152731 = f__13545__auto__.call(null);
(statearr_152731[(6)] = c__13544__auto__);

return statearr_152731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta152611","meta152611",904660020,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval152610.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval152610.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval152610";

klipse.cards.test.eval.t_klipse$cards$test$eval152610.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval152610");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval152610 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval152610(meta152611){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152610(meta152611));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval152610(null));
});

klipse.cards.test.eval.test_eval_4.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_4;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-4","klipse.cards.test.eval/test-eval-4",-860176866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-4","test-eval-4",-1237301659,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",21,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_4)?klipse.cards.test.eval.test_eval_4.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_functions = (function klipse$cards$test$eval$test_eval_functions(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval_functions.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_functions.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval152750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval152750 = (function (meta152751){
this.meta152751 = meta152751;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_152752,meta152751__$1){
var self__ = this;
var _152752__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152750(meta152751__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_152752){
var self__ = this;
var _152752__$1 = this;
return self__.meta152751;
});


klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_152797){
var state_val_152798 = (state_152797[(1)]);
if((state_val_152798 === (1))){
var state_152797__$1 = state_152797;
var statearr_152799_152872 = state_152797__$1;
(statearr_152799_152872[(2)] = null);

(statearr_152799_152872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152798 === (2))){
var inst_152794 = (state_152797[(2)]);
var inst_152795 = done.call(null);
var state_152797__$1 = (function (){var statearr_152800 = state_152797;
(statearr_152800[(7)] = inst_152794);

return statearr_152800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152797__$1,inst_152795);
} else {
if((state_val_152798 === (3))){
var inst_152754 = (state_152797[(2)]);
var inst_152755 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152756 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152757 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152756,inst_152754,null];
var inst_152758 = cljs.core.PersistentHashMap.fromArrays(inst_152755,inst_152757);
var inst_152759 = cljs.test.do_report.call(null,inst_152758);
var state_152797__$1 = state_152797;
var statearr_152801_152873 = state_152797__$1;
(statearr_152801_152873[(2)] = inst_152759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152798 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152797,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152763 = klipse.lang.clojure.eval.call(null,"(ns my.func) (defn foo [] 1)");
var state_152797__$1 = state_152797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152797__$1,(5),inst_152763);
} else {
if((state_val_152798 === (5))){
var inst_152770 = (state_152797[(8)]);
var inst_152771 = (state_152797[(9)]);
var inst_152765 = (state_152797[(2)]);
var inst_152766 = cljs.core.second.call(null,inst_152765);
var inst_152767 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152766)].join('');
var inst_152768 = cljs.core.List.EMPTY;
var inst_152769 = cljs.core._conj.call(null,inst_152768,"#'my.func/foo");
var inst_152770__$1 = cljs.core._conj.call(null,inst_152769,inst_152767);
var inst_152771__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_152770__$1);
var state_152797__$1 = (function (){var statearr_152802 = state_152797;
(statearr_152802[(8)] = inst_152770__$1);

(statearr_152802[(9)] = inst_152771__$1);

return statearr_152802;
})();
if(cljs.core.truth_(inst_152771__$1)){
var statearr_152803_152874 = state_152797__$1;
(statearr_152803_152874[(1)] = (6));

} else {
var statearr_152804_152875 = state_152797__$1;
(statearr_152804_152875[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152798 === (6))){
var inst_152770 = (state_152797[(8)]);
var inst_152773 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152774 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152775 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_152770);
var inst_152776 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152774,inst_152775,null];
var inst_152777 = cljs.core.PersistentHashMap.fromArrays(inst_152773,inst_152776);
var inst_152778 = cljs.test.do_report.call(null,inst_152777);
var state_152797__$1 = state_152797;
var statearr_152805_152876 = state_152797__$1;
(statearr_152805_152876[(2)] = inst_152778);

(statearr_152805_152876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152798 === (7))){
var inst_152770 = (state_152797[(8)]);
var inst_152780 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152781 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152782 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_152783 = cljs.core.cons.call(null,inst_152782,inst_152770);
var inst_152784 = cljs.core.List.EMPTY;
var inst_152785 = cljs.core._conj.call(null,inst_152784,inst_152783);
var inst_152786 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152787 = cljs.core._conj.call(null,inst_152785,inst_152786);
var inst_152788 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152781,inst_152787,null];
var inst_152789 = cljs.core.PersistentHashMap.fromArrays(inst_152780,inst_152788);
var inst_152790 = cljs.test.do_report.call(null,inst_152789);
var state_152797__$1 = state_152797;
var statearr_152806_152877 = state_152797__$1;
(statearr_152806_152877[(2)] = inst_152790);

(statearr_152806_152877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152798 === (8))){
var inst_152771 = (state_152797[(9)]);
var inst_152792 = (state_152797[(2)]);
var state_152797__$1 = (function (){var statearr_152807 = state_152797;
(statearr_152807[(10)] = inst_152792);

return statearr_152807;
})();
var statearr_152808_152878 = state_152797__$1;
(statearr_152808_152878[(2)] = inst_152771);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152809[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152809[(1)] = (1));

return statearr_152809;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152797){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152810){if((e152810 instanceof Object)){
var ex__13458__auto__ = e152810;
var statearr_152811_152879 = state_152797;
(statearr_152811_152879[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152880 = state_152797;
state_152797 = G__152880;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152797){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_152812 = f__13545__auto__.call(null);
(statearr_152812[(6)] = c__13544__auto__);

return statearr_152812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.apply = (function (self__,args152753){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args152753)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval152750.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_152856){
var state_val_152857 = (state_152856[(1)]);
if((state_val_152857 === (1))){
var state_152856__$1 = state_152856;
var statearr_152858_152881 = state_152856__$1;
(statearr_152858_152881[(2)] = null);

(statearr_152858_152881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152857 === (2))){
var inst_152853 = (state_152856[(2)]);
var inst_152854 = done.call(null);
var state_152856__$1 = (function (){var statearr_152859 = state_152856;
(statearr_152859[(7)] = inst_152853);

return statearr_152859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152856__$1,inst_152854);
} else {
if((state_val_152857 === (3))){
var inst_152813 = (state_152856[(2)]);
var inst_152814 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152815 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152816 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152815,inst_152813,null];
var inst_152817 = cljs.core.PersistentHashMap.fromArrays(inst_152814,inst_152816);
var inst_152818 = cljs.test.do_report.call(null,inst_152817);
var state_152856__$1 = state_152856;
var statearr_152860_152882 = state_152856__$1;
(statearr_152860_152882[(2)] = inst_152818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152857 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152856,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152822 = klipse.lang.clojure.eval.call(null,"(ns my.func) (defn foo [] 1)");
var state_152856__$1 = state_152856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152856__$1,(5),inst_152822);
} else {
if((state_val_152857 === (5))){
var inst_152829 = (state_152856[(8)]);
var inst_152830 = (state_152856[(9)]);
var inst_152824 = (state_152856[(2)]);
var inst_152825 = cljs.core.second.call(null,inst_152824);
var inst_152826 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152825)].join('');
var inst_152827 = cljs.core.List.EMPTY;
var inst_152828 = cljs.core._conj.call(null,inst_152827,"#'my.func/foo");
var inst_152829__$1 = cljs.core._conj.call(null,inst_152828,inst_152826);
var inst_152830__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_152829__$1);
var state_152856__$1 = (function (){var statearr_152861 = state_152856;
(statearr_152861[(8)] = inst_152829__$1);

(statearr_152861[(9)] = inst_152830__$1);

return statearr_152861;
})();
if(cljs.core.truth_(inst_152830__$1)){
var statearr_152862_152883 = state_152856__$1;
(statearr_152862_152883[(1)] = (6));

} else {
var statearr_152863_152884 = state_152856__$1;
(statearr_152863_152884[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152857 === (6))){
var inst_152829 = (state_152856[(8)]);
var inst_152832 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152833 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152834 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_152829);
var inst_152835 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152833,inst_152834,null];
var inst_152836 = cljs.core.PersistentHashMap.fromArrays(inst_152832,inst_152835);
var inst_152837 = cljs.test.do_report.call(null,inst_152836);
var state_152856__$1 = state_152856;
var statearr_152864_152885 = state_152856__$1;
(statearr_152864_152885[(2)] = inst_152837);

(statearr_152864_152885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152857 === (7))){
var inst_152829 = (state_152856[(8)]);
var inst_152839 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152840 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_152841 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_152842 = cljs.core.cons.call(null,inst_152841,inst_152829);
var inst_152843 = cljs.core.List.EMPTY;
var inst_152844 = cljs.core._conj.call(null,inst_152843,inst_152842);
var inst_152845 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152846 = cljs.core._conj.call(null,inst_152844,inst_152845);
var inst_152847 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152840,inst_152846,null];
var inst_152848 = cljs.core.PersistentHashMap.fromArrays(inst_152839,inst_152847);
var inst_152849 = cljs.test.do_report.call(null,inst_152848);
var state_152856__$1 = state_152856;
var statearr_152865_152886 = state_152856__$1;
(statearr_152865_152886[(2)] = inst_152849);

(statearr_152865_152886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152857 === (8))){
var inst_152830 = (state_152856[(9)]);
var inst_152851 = (state_152856[(2)]);
var state_152856__$1 = (function (){var statearr_152866 = state_152856;
(statearr_152866[(10)] = inst_152851);

return statearr_152866;
})();
var statearr_152867_152887 = state_152856__$1;
(statearr_152867_152887[(2)] = inst_152830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_152868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_152868[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_152868[(1)] = (1));

return statearr_152868;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152856){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e152869){if((e152869 instanceof Object)){
var ex__13458__auto__ = e152869;
var statearr_152870_152888 = state_152856;
(statearr_152870_152888[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e152869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__152889 = state_152856;
state_152856 = G__152889;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152856){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_152871 = f__13545__auto__.call(null);
(statearr_152871[(6)] = c__13544__auto__);

return statearr_152871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta152751","meta152751",1570564947,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval152750.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval152750.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval152750";

klipse.cards.test.eval.t_klipse$cards$test$eval152750.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval152750");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval152750 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval152750(meta152751){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152750(meta152751));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval152750(null));
});

klipse.cards.test.eval.test_eval_functions.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_functions;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-functions","klipse.cards.test.eval/test-eval-functions",-168688956,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-functions","test-eval-functions",844692125,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",29,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_functions)?klipse.cards.test.eval.test_eval_functions.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_vars = (function klipse$cards$test$eval$test_eval_vars(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.test_eval_vars.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_vars.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval152890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval152890 = (function (meta152891){
this.meta152891 = meta152891;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_152892,meta152891__$1){
var self__ = this;
var _152892__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152890(meta152891__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_152892){
var self__ = this;
var _152892__$1 = this;
return self__.meta152891;
});


klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_152978){
var state_val_152979 = (state_152978[(1)]);
if((state_val_152979 === (7))){
var inst_152910 = (state_152978[(7)]);
var inst_152920 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152921 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_152922 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152923 = cljs.core.cons.call(null,inst_152922,inst_152910);
var inst_152924 = cljs.core.List.EMPTY;
var inst_152925 = cljs.core._conj.call(null,inst_152924,inst_152923);
var inst_152926 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152927 = cljs.core._conj.call(null,inst_152925,inst_152926);
var inst_152928 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152921,inst_152927,null];
var inst_152929 = cljs.core.PersistentHashMap.fromArrays(inst_152920,inst_152928);
var inst_152930 = cljs.test.do_report.call(null,inst_152929);
var state_152978__$1 = state_152978;
var statearr_152980_153114 = state_152978__$1;
(statearr_152980_153114[(2)] = inst_152930);

(statearr_152980_153114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (1))){
var state_152978__$1 = state_152978;
var statearr_152981_153115 = state_152978__$1;
(statearr_152981_153115[(2)] = null);

(statearr_152981_153115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152978,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_152903 = klipse.lang.clojure.eval.call(null,"(ns my.vars) (def a 1)");
var state_152978__$1 = state_152978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152978__$1,(5),inst_152903);
} else {
if((state_val_152979 === (15))){
var inst_152952 = (state_152978[(8)]);
var inst_152973 = (state_152978[(2)]);
var state_152978__$1 = (function (){var statearr_152982 = state_152978;
(statearr_152982[(9)] = inst_152973);

return statearr_152982;
})();
var statearr_152983_153116 = state_152978__$1;
(statearr_152983_153116[(2)] = inst_152952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (13))){
var inst_152951 = (state_152978[(10)]);
var inst_152954 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152955 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_152956 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152951);
var inst_152957 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152955,inst_152956,null];
var inst_152958 = cljs.core.PersistentHashMap.fromArrays(inst_152954,inst_152957);
var inst_152959 = cljs.test.do_report.call(null,inst_152958);
var state_152978__$1 = state_152978;
var statearr_152984_153117 = state_152978__$1;
(statearr_152984_153117[(2)] = inst_152959);

(statearr_152984_153117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (6))){
var inst_152910 = (state_152978[(7)]);
var inst_152913 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152914 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_152915 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_152910);
var inst_152916 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_152914,inst_152915,null];
var inst_152917 = cljs.core.PersistentHashMap.fromArrays(inst_152913,inst_152916);
var inst_152918 = cljs.test.do_report.call(null,inst_152917);
var state_152978__$1 = state_152978;
var statearr_152985_153118 = state_152978__$1;
(statearr_152985_153118[(2)] = inst_152918);

(statearr_152985_153118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (3))){
var inst_152894 = (state_152978[(2)]);
var inst_152895 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152896 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_152897 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152896,inst_152894,null];
var inst_152898 = cljs.core.PersistentHashMap.fromArrays(inst_152895,inst_152897);
var inst_152899 = cljs.test.do_report.call(null,inst_152898);
var state_152978__$1 = state_152978;
var statearr_152986_153119 = state_152978__$1;
(statearr_152986_153119[(2)] = inst_152899);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (12))){
var inst_152951 = (state_152978[(10)]);
var inst_152952 = (state_152978[(8)]);
var inst_152946 = (state_152978[(2)]);
var inst_152947 = cljs.core.second.call(null,inst_152946);
var inst_152948 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152947)].join('');
var inst_152949 = cljs.core.List.EMPTY;
var inst_152950 = cljs.core._conj.call(null,inst_152949,"1");
var inst_152951__$1 = cljs.core._conj.call(null,inst_152950,inst_152948);
var inst_152952__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152951__$1);
var state_152978__$1 = (function (){var statearr_152987 = state_152978;
(statearr_152987[(10)] = inst_152951__$1);

(statearr_152987[(8)] = inst_152952__$1);

return statearr_152987;
})();
if(cljs.core.truth_(inst_152952__$1)){
var statearr_152988_153120 = state_152978__$1;
(statearr_152988_153120[(1)] = (13));

} else {
var statearr_152989_153121 = state_152978__$1;
(statearr_152989_153121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (2))){
var inst_152934 = (state_152978[(2)]);
var state_152978__$1 = (function (){var statearr_152990 = state_152978;
(statearr_152990[(11)] = inst_152934);

return statearr_152990;
})();
var statearr_152991_153122 = state_152978__$1;
(statearr_152991_153122[(2)] = null);

(statearr_152991_153122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_152978,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_152944 = klipse.lang.clojure.eval.call(null,"(ns my.vars) (def b 1) b");
var state_152978__$1 = state_152978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_152978__$1,(12),inst_152944);
} else {
if((state_val_152979 === (9))){
var inst_152975 = (state_152978[(2)]);
var inst_152976 = done.call(null);
var state_152978__$1 = (function (){var statearr_152992 = state_152978;
(statearr_152992[(12)] = inst_152975);

return statearr_152992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_152978__$1,inst_152976);
} else {
if((state_val_152979 === (5))){
var inst_152911 = (state_152978[(13)]);
var inst_152910 = (state_152978[(7)]);
var inst_152905 = (state_152978[(2)]);
var inst_152906 = cljs.core.second.call(null,inst_152905);
var inst_152907 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_152906)].join('');
var inst_152908 = cljs.core.List.EMPTY;
var inst_152909 = cljs.core._conj.call(null,inst_152908,"#'my.vars/a");
var inst_152910__$1 = cljs.core._conj.call(null,inst_152909,inst_152907);
var inst_152911__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_152910__$1);
var state_152978__$1 = (function (){var statearr_152993 = state_152978;
(statearr_152993[(13)] = inst_152911__$1);

(statearr_152993[(7)] = inst_152910__$1);

return statearr_152993;
})();
if(cljs.core.truth_(inst_152911__$1)){
var statearr_152994_153123 = state_152978__$1;
(statearr_152994_153123[(1)] = (6));

} else {
var statearr_152995_153124 = state_152978__$1;
(statearr_152995_153124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (14))){
var inst_152951 = (state_152978[(10)]);
var inst_152961 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152962 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_152963 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_152964 = cljs.core.cons.call(null,inst_152963,inst_152951);
var inst_152965 = cljs.core.List.EMPTY;
var inst_152966 = cljs.core._conj.call(null,inst_152965,inst_152964);
var inst_152967 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_152968 = cljs.core._conj.call(null,inst_152966,inst_152967);
var inst_152969 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_152962,inst_152968,null];
var inst_152970 = cljs.core.PersistentHashMap.fromArrays(inst_152961,inst_152969);
var inst_152971 = cljs.test.do_report.call(null,inst_152970);
var state_152978__$1 = state_152978;
var statearr_152996_153125 = state_152978__$1;
(statearr_152996_153125[(2)] = inst_152971);

(statearr_152996_153125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (10))){
var inst_152935 = (state_152978[(2)]);
var inst_152936 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_152937 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_152938 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_152937,inst_152935,null];
var inst_152939 = cljs.core.PersistentHashMap.fromArrays(inst_152936,inst_152938);
var inst_152940 = cljs.test.do_report.call(null,inst_152939);
var state_152978__$1 = state_152978;
var statearr_152997_153126 = state_152978__$1;
(statearr_152997_153126[(2)] = inst_152940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_152979 === (8))){
var inst_152911 = (state_152978[(13)]);
var inst_152932 = (state_152978[(2)]);
var state_152978__$1 = (function (){var statearr_152998 = state_152978;
(statearr_152998[(14)] = inst_152932);

return statearr_152998;
})();
var statearr_152999_153127 = state_152978__$1;
(statearr_152999_153127[(2)] = inst_152911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_153000[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153000[(1)] = (1));

return statearr_153000;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_152978){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_152978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153001){if((e153001 instanceof Object)){
var ex__13458__auto__ = e153001;
var statearr_153002_153128 = state_152978;
(statearr_153002_153128[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_152978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153129 = state_152978;
state_152978 = G__153129;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_152978){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_152978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_153003 = f__13545__auto__.call(null);
(statearr_153003[(6)] = c__13544__auto__);

return statearr_153003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.apply = (function (self__,args152893){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args152893)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval152890.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_153088){
var state_val_153089 = (state_153088[(1)]);
if((state_val_153089 === (7))){
var inst_153020 = (state_153088[(7)]);
var inst_153030 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153031 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_153032 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_153033 = cljs.core.cons.call(null,inst_153032,inst_153020);
var inst_153034 = cljs.core.List.EMPTY;
var inst_153035 = cljs.core._conj.call(null,inst_153034,inst_153033);
var inst_153036 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153037 = cljs.core._conj.call(null,inst_153035,inst_153036);
var inst_153038 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153031,inst_153037,null];
var inst_153039 = cljs.core.PersistentHashMap.fromArrays(inst_153030,inst_153038);
var inst_153040 = cljs.test.do_report.call(null,inst_153039);
var state_153088__$1 = state_153088;
var statearr_153090_153130 = state_153088__$1;
(statearr_153090_153130[(2)] = inst_153040);

(statearr_153090_153130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (1))){
var state_153088__$1 = state_153088;
var statearr_153091_153131 = state_153088__$1;
(statearr_153091_153131[(2)] = null);

(statearr_153091_153131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153088,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153013 = klipse.lang.clojure.eval.call(null,"(ns my.vars) (def a 1)");
var state_153088__$1 = state_153088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153088__$1,(5),inst_153013);
} else {
if((state_val_153089 === (15))){
var inst_153062 = (state_153088[(8)]);
var inst_153083 = (state_153088[(2)]);
var state_153088__$1 = (function (){var statearr_153092 = state_153088;
(statearr_153092[(9)] = inst_153083);

return statearr_153092;
})();
var statearr_153093_153132 = state_153088__$1;
(statearr_153093_153132[(2)] = inst_153062);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (13))){
var inst_153061 = (state_153088[(10)]);
var inst_153064 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153065 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_153066 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_153061);
var inst_153067 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153065,inst_153066,null];
var inst_153068 = cljs.core.PersistentHashMap.fromArrays(inst_153064,inst_153067);
var inst_153069 = cljs.test.do_report.call(null,inst_153068);
var state_153088__$1 = state_153088;
var statearr_153094_153133 = state_153088__$1;
(statearr_153094_153133[(2)] = inst_153069);

(statearr_153094_153133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (6))){
var inst_153020 = (state_153088[(7)]);
var inst_153023 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153024 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_153025 = cljs.core.cons.call(null,klipse.cards.test.eval.b_EQ_,inst_153020);
var inst_153026 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153024,inst_153025,null];
var inst_153027 = cljs.core.PersistentHashMap.fromArrays(inst_153023,inst_153026);
var inst_153028 = cljs.test.do_report.call(null,inst_153027);
var state_153088__$1 = state_153088;
var statearr_153095_153134 = state_153088__$1;
(statearr_153095_153134[(2)] = inst_153028);

(statearr_153095_153134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (3))){
var inst_153004 = (state_153088[(2)]);
var inst_153005 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153006 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_153007 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153006,inst_153004,null];
var inst_153008 = cljs.core.PersistentHashMap.fromArrays(inst_153005,inst_153007);
var inst_153009 = cljs.test.do_report.call(null,inst_153008);
var state_153088__$1 = state_153088;
var statearr_153096_153135 = state_153088__$1;
(statearr_153096_153135[(2)] = inst_153009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (12))){
var inst_153062 = (state_153088[(8)]);
var inst_153061 = (state_153088[(10)]);
var inst_153056 = (state_153088[(2)]);
var inst_153057 = cljs.core.second.call(null,inst_153056);
var inst_153058 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_153057)].join('');
var inst_153059 = cljs.core.List.EMPTY;
var inst_153060 = cljs.core._conj.call(null,inst_153059,"1");
var inst_153061__$1 = cljs.core._conj.call(null,inst_153060,inst_153058);
var inst_153062__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_153061__$1);
var state_153088__$1 = (function (){var statearr_153097 = state_153088;
(statearr_153097[(8)] = inst_153062__$1);

(statearr_153097[(10)] = inst_153061__$1);

return statearr_153097;
})();
if(cljs.core.truth_(inst_153062__$1)){
var statearr_153098_153136 = state_153088__$1;
(statearr_153098_153136[(1)] = (13));

} else {
var statearr_153099_153137 = state_153088__$1;
(statearr_153099_153137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (2))){
var inst_153044 = (state_153088[(2)]);
var state_153088__$1 = (function (){var statearr_153100 = state_153088;
(statearr_153100[(11)] = inst_153044);

return statearr_153100;
})();
var statearr_153101_153138 = state_153088__$1;
(statearr_153101_153138[(2)] = null);

(statearr_153101_153138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153088,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_153054 = klipse.lang.clojure.eval.call(null,"(ns my.vars) (def b 1) b");
var state_153088__$1 = state_153088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153088__$1,(12),inst_153054);
} else {
if((state_val_153089 === (9))){
var inst_153085 = (state_153088[(2)]);
var inst_153086 = done.call(null);
var state_153088__$1 = (function (){var statearr_153102 = state_153088;
(statearr_153102[(12)] = inst_153085);

return statearr_153102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153088__$1,inst_153086);
} else {
if((state_val_153089 === (5))){
var inst_153021 = (state_153088[(13)]);
var inst_153020 = (state_153088[(7)]);
var inst_153015 = (state_153088[(2)]);
var inst_153016 = cljs.core.second.call(null,inst_153015);
var inst_153017 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_153016)].join('');
var inst_153018 = cljs.core.List.EMPTY;
var inst_153019 = cljs.core._conj.call(null,inst_153018,"#'my.vars/a");
var inst_153020__$1 = cljs.core._conj.call(null,inst_153019,inst_153017);
var inst_153021__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.b_EQ_,inst_153020__$1);
var state_153088__$1 = (function (){var statearr_153103 = state_153088;
(statearr_153103[(13)] = inst_153021__$1);

(statearr_153103[(7)] = inst_153020__$1);

return statearr_153103;
})();
if(cljs.core.truth_(inst_153021__$1)){
var statearr_153104_153139 = state_153088__$1;
(statearr_153104_153139[(1)] = (6));

} else {
var statearr_153105_153140 = state_153088__$1;
(statearr_153105_153140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (14))){
var inst_153061 = (state_153088[(10)]);
var inst_153071 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153072 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_153073 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_153074 = cljs.core.cons.call(null,inst_153073,inst_153061);
var inst_153075 = cljs.core.List.EMPTY;
var inst_153076 = cljs.core._conj.call(null,inst_153075,inst_153074);
var inst_153077 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153078 = cljs.core._conj.call(null,inst_153076,inst_153077);
var inst_153079 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153072,inst_153078,null];
var inst_153080 = cljs.core.PersistentHashMap.fromArrays(inst_153071,inst_153079);
var inst_153081 = cljs.test.do_report.call(null,inst_153080);
var state_153088__$1 = state_153088;
var statearr_153106_153141 = state_153088__$1;
(statearr_153106_153141[(2)] = inst_153081);

(statearr_153106_153141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (10))){
var inst_153045 = (state_153088[(2)]);
var inst_153046 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153047 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.vars) (def b 1) b")))),"1");
var inst_153048 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153047,inst_153045,null];
var inst_153049 = cljs.core.PersistentHashMap.fromArrays(inst_153046,inst_153048);
var inst_153050 = cljs.test.do_report.call(null,inst_153049);
var state_153088__$1 = state_153088;
var statearr_153107_153142 = state_153088__$1;
(statearr_153107_153142[(2)] = inst_153050);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153089 === (8))){
var inst_153021 = (state_153088[(13)]);
var inst_153042 = (state_153088[(2)]);
var state_153088__$1 = (function (){var statearr_153108 = state_153088;
(statearr_153108[(14)] = inst_153042);

return statearr_153108;
})();
var statearr_153109_153143 = state_153088__$1;
(statearr_153109_153143[(2)] = inst_153021);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_153110[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153110[(1)] = (1));

return statearr_153110;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_153088){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_153088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153111){if((e153111 instanceof Object)){
var ex__13458__auto__ = e153111;
var statearr_153112_153144 = state_153088;
(statearr_153112_153144[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153145 = state_153088;
state_153088 = G__153145;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_153088){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_153088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_153113 = f__13545__auto__.call(null);
(statearr_153113[(6)] = c__13544__auto__);

return statearr_153113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval152890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta152891","meta152891",1923329758,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval152890.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval152890.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval152890";

klipse.cards.test.eval.t_klipse$cards$test$eval152890.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval152890");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval152890 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval152890(meta152891){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval152890(meta152891));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval152890(null));
});

klipse.cards.test.eval.test_eval_vars.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_vars;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-vars","klipse.cards.test.eval/test-eval-vars",-1898698132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-vars","test-eval-vars",1882948151,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",24,1,98,98,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_vars)?klipse.cards.test.eval.test_eval_vars.cljs$lang$test:null)]));

klipse.cards.test.eval.eval_in_ns = (function klipse$cards$test$eval$eval_in_ns(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.eval_in_ns.cljs$lang$var);
});
klipse.cards.test.eval.eval_in_ns.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval153146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval153146 = (function (meta153147){
this.meta153147 = meta153147;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153148,meta153147__$1){
var self__ = this;
var _153148__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153146(meta153147__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153148){
var self__ = this;
var _153148__$1 = this;
return self__.meta153147;
});


klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_153192){
var state_val_153193 = (state_153192[(1)]);
if((state_val_153193 === (1))){
var state_153192__$1 = state_153192;
var statearr_153194_153266 = state_153192__$1;
(statearr_153194_153266[(2)] = null);

(statearr_153194_153266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153193 === (2))){
var inst_153189 = (state_153192[(2)]);
var inst_153190 = done.call(null);
var state_153192__$1 = (function (){var statearr_153195 = state_153192;
(statearr_153195[(7)] = inst_153189);

return statearr_153195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153192__$1,inst_153190);
} else {
if((state_val_153193 === (3))){
var inst_153150 = (state_153192[(2)]);
var inst_153151 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153152 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153153 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153152,inst_153150,null];
var inst_153154 = cljs.core.PersistentHashMap.fromArrays(inst_153151,inst_153153);
var inst_153155 = cljs.test.do_report.call(null,inst_153154);
var state_153192__$1 = state_153192;
var statearr_153196_153267 = state_153192__$1;
(statearr_153196_153267[(2)] = inst_153155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153193 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153192,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153159 = klipse.lang.clojure.eval.call(null,"(ns my.foo) ::foo");
var state_153192__$1 = state_153192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153192__$1,(5),inst_153159);
} else {
if((state_val_153193 === (5))){
var inst_153165 = (state_153192[(8)]);
var inst_153166 = (state_153192[(9)]);
var inst_153161 = (state_153192[(2)]);
var inst_153162 = cljs.core.second.call(null,inst_153161);
var inst_153163 = cljs.core.List.EMPTY;
var inst_153164 = cljs.core._conj.call(null,inst_153163,new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153165__$1 = cljs.core._conj.call(null,inst_153164,inst_153162);
var inst_153166__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153165__$1);
var state_153192__$1 = (function (){var statearr_153197 = state_153192;
(statearr_153197[(8)] = inst_153165__$1);

(statearr_153197[(9)] = inst_153166__$1);

return statearr_153197;
})();
if(cljs.core.truth_(inst_153166__$1)){
var statearr_153198_153268 = state_153192__$1;
(statearr_153198_153268[(1)] = (6));

} else {
var statearr_153199_153269 = state_153192__$1;
(statearr_153199_153269[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153193 === (6))){
var inst_153165 = (state_153192[(8)]);
var inst_153168 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153169 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153170 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153165);
var inst_153171 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153169,inst_153170,null];
var inst_153172 = cljs.core.PersistentHashMap.fromArrays(inst_153168,inst_153171);
var inst_153173 = cljs.test.do_report.call(null,inst_153172);
var state_153192__$1 = state_153192;
var statearr_153200_153270 = state_153192__$1;
(statearr_153200_153270[(2)] = inst_153173);

(statearr_153200_153270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153193 === (7))){
var inst_153165 = (state_153192[(8)]);
var inst_153175 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153176 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153177 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153178 = cljs.core.cons.call(null,inst_153177,inst_153165);
var inst_153179 = cljs.core.List.EMPTY;
var inst_153180 = cljs.core._conj.call(null,inst_153179,inst_153178);
var inst_153181 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153182 = cljs.core._conj.call(null,inst_153180,inst_153181);
var inst_153183 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153176,inst_153182,null];
var inst_153184 = cljs.core.PersistentHashMap.fromArrays(inst_153175,inst_153183);
var inst_153185 = cljs.test.do_report.call(null,inst_153184);
var state_153192__$1 = state_153192;
var statearr_153201_153271 = state_153192__$1;
(statearr_153201_153271[(2)] = inst_153185);

(statearr_153201_153271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153193 === (8))){
var inst_153166 = (state_153192[(9)]);
var inst_153187 = (state_153192[(2)]);
var state_153192__$1 = (function (){var statearr_153202 = state_153192;
(statearr_153202[(10)] = inst_153187);

return statearr_153202;
})();
var statearr_153203_153272 = state_153192__$1;
(statearr_153203_153272[(2)] = inst_153166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_153204[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153204[(1)] = (1));

return statearr_153204;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_153192){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_153192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153205){if((e153205 instanceof Object)){
var ex__13458__auto__ = e153205;
var statearr_153206_153273 = state_153192;
(statearr_153206_153273[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153274 = state_153192;
state_153192 = G__153274;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_153192){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_153192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_153207 = f__13545__auto__.call(null);
(statearr_153207[(6)] = c__13544__auto__);

return statearr_153207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.apply = (function (self__,args153149){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args153149)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval153146.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_153250){
var state_val_153251 = (state_153250[(1)]);
if((state_val_153251 === (1))){
var state_153250__$1 = state_153250;
var statearr_153252_153275 = state_153250__$1;
(statearr_153252_153275[(2)] = null);

(statearr_153252_153275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153251 === (2))){
var inst_153247 = (state_153250[(2)]);
var inst_153248 = done.call(null);
var state_153250__$1 = (function (){var statearr_153253 = state_153250;
(statearr_153253[(7)] = inst_153247);

return statearr_153253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153250__$1,inst_153248);
} else {
if((state_val_153251 === (3))){
var inst_153208 = (state_153250[(2)]);
var inst_153209 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153210 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153211 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153210,inst_153208,null];
var inst_153212 = cljs.core.PersistentHashMap.fromArrays(inst_153209,inst_153211);
var inst_153213 = cljs.test.do_report.call(null,inst_153212);
var state_153250__$1 = state_153250;
var statearr_153254_153276 = state_153250__$1;
(statearr_153254_153276[(2)] = inst_153213);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153251 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153250,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153217 = klipse.lang.clojure.eval.call(null,"(ns my.foo) ::foo");
var state_153250__$1 = state_153250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153250__$1,(5),inst_153217);
} else {
if((state_val_153251 === (5))){
var inst_153224 = (state_153250[(8)]);
var inst_153223 = (state_153250[(9)]);
var inst_153219 = (state_153250[(2)]);
var inst_153220 = cljs.core.second.call(null,inst_153219);
var inst_153221 = cljs.core.List.EMPTY;
var inst_153222 = cljs.core._conj.call(null,inst_153221,new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153223__$1 = cljs.core._conj.call(null,inst_153222,inst_153220);
var inst_153224__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153223__$1);
var state_153250__$1 = (function (){var statearr_153255 = state_153250;
(statearr_153255[(8)] = inst_153224__$1);

(statearr_153255[(9)] = inst_153223__$1);

return statearr_153255;
})();
if(cljs.core.truth_(inst_153224__$1)){
var statearr_153256_153277 = state_153250__$1;
(statearr_153256_153277[(1)] = (6));

} else {
var statearr_153257_153278 = state_153250__$1;
(statearr_153257_153278[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153251 === (6))){
var inst_153223 = (state_153250[(9)]);
var inst_153226 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153227 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153228 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153223);
var inst_153229 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153227,inst_153228,null];
var inst_153230 = cljs.core.PersistentHashMap.fromArrays(inst_153226,inst_153229);
var inst_153231 = cljs.test.do_report.call(null,inst_153230);
var state_153250__$1 = state_153250;
var statearr_153258_153279 = state_153250__$1;
(statearr_153258_153279[(2)] = inst_153231);

(statearr_153258_153279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153251 === (7))){
var inst_153223 = (state_153250[(9)]);
var inst_153233 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153234 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_153235 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153236 = cljs.core.cons.call(null,inst_153235,inst_153223);
var inst_153237 = cljs.core.List.EMPTY;
var inst_153238 = cljs.core._conj.call(null,inst_153237,inst_153236);
var inst_153239 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153240 = cljs.core._conj.call(null,inst_153238,inst_153239);
var inst_153241 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153234,inst_153240,null];
var inst_153242 = cljs.core.PersistentHashMap.fromArrays(inst_153233,inst_153241);
var inst_153243 = cljs.test.do_report.call(null,inst_153242);
var state_153250__$1 = state_153250;
var statearr_153259_153280 = state_153250__$1;
(statearr_153259_153280[(2)] = inst_153243);

(statearr_153259_153280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153251 === (8))){
var inst_153224 = (state_153250[(8)]);
var inst_153245 = (state_153250[(2)]);
var state_153250__$1 = (function (){var statearr_153260 = state_153250;
(statearr_153260[(10)] = inst_153245);

return statearr_153260;
})();
var statearr_153261_153281 = state_153250__$1;
(statearr_153261_153281[(2)] = inst_153224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_153262[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153262[(1)] = (1));

return statearr_153262;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_153250){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_153250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153263){if((e153263 instanceof Object)){
var ex__13458__auto__ = e153263;
var statearr_153264_153282 = state_153250;
(statearr_153264_153282[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153283 = state_153250;
state_153250 = G__153283;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_153250){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_153250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_153265 = f__13545__auto__.call(null);
(statearr_153265[(6)] = c__13544__auto__);

return statearr_153265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta153147","meta153147",-1419723272,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval153146.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval153146.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval153146";

klipse.cards.test.eval.t_klipse$cards$test$eval153146.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval153146");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval153146 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval153146(meta153147){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153146(meta153147));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval153146(null));
});

klipse.cards.test.eval.eval_in_ns.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.eval_in_ns;},new cljs.core.Symbol("klipse.cards.test.eval","eval-in-ns","klipse.cards.test.eval/eval-in-ns",1512473161,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"eval-in-ns","eval-in-ns",530324192,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",20,1,108,108,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.eval_in_ns)?klipse.cards.test.eval.eval_in_ns.cljs$lang$test:null)]));

klipse.cards.test.eval.display_evaluation_with_errors = (function klipse$cards$test$eval$display_evaluation_with_errors(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.display_evaluation_with_errors.cljs$lang$var);
});
klipse.cards.test.eval.display_evaluation_with_errors.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval153284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval153284 = (function (meta153285){
this.meta153285 = meta153285;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153286,meta153285__$1){
var self__ = this;
var _153286__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153284(meta153285__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153286){
var self__ = this;
var _153286__$1 = this;
return self__.meta153285;
});


klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_153458){
var state_val_153459 = (state_153458[(1)]);
if((state_val_153459 === (7))){
var inst_153305 = (state_153458[(7)]);
var inst_153326 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153460 = state_153458;
(statearr_153460[(8)] = inst_153326);

return statearr_153460;
})();
var statearr_153461_153720 = state_153458__$1;
(statearr_153461_153720[(2)] = inst_153305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (20))){
var inst_153455 = (state_153458[(2)]);
var inst_153456 = done.call(null);
var state_153458__$1 = (function (){var statearr_153462 = state_153458;
(statearr_153462[(9)] = inst_153455);

return statearr_153462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153458__$1,inst_153456);
} else {
if((state_val_153459 === (1))){
var state_153458__$1 = state_153458;
var statearr_153463_153721 = state_153458__$1;
(statearr_153463_153721[(2)] = null);

(statearr_153463_153721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (24))){
var inst_153431 = (state_153458[(10)]);
var inst_153441 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153442 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153443 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153444 = cljs.core.cons.call(null,inst_153443,inst_153431);
var inst_153445 = cljs.core.List.EMPTY;
var inst_153446 = cljs.core._conj.call(null,inst_153445,inst_153444);
var inst_153447 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153448 = cljs.core._conj.call(null,inst_153446,inst_153447);
var inst_153449 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153442,inst_153448,null];
var inst_153450 = cljs.core.PersistentHashMap.fromArrays(inst_153441,inst_153449);
var inst_153451 = cljs.test.do_report.call(null,inst_153450);
var state_153458__$1 = state_153458;
var statearr_153464_153722 = state_153458__$1;
(statearr_153464_153722[(2)] = inst_153451);

(statearr_153464_153722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (4))){
var inst_153304 = (state_153458[(11)]);
var inst_153305 = (state_153458[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153458,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153297 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153298 = [false,null];
var inst_153299 = cljs.core.PersistentHashMap.fromArrays(inst_153297,inst_153298);
var inst_153300 = klipse.lang.clojure.result_as_str.call(null,inst_153299,(2));
var inst_153301 = cljs.core.second.call(null,inst_153300);
var inst_153302 = cljs.core.List.EMPTY;
var inst_153303 = cljs.core._conj.call(null,inst_153302,"nil");
var inst_153304__$1 = cljs.core._conj.call(null,inst_153303,inst_153301);
var inst_153305__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153304__$1);
var state_153458__$1 = (function (){var statearr_153465 = state_153458;
(statearr_153465[(11)] = inst_153304__$1);

(statearr_153465[(7)] = inst_153305__$1);

return statearr_153465;
})();
if(cljs.core.truth_(inst_153305__$1)){
var statearr_153466_153723 = state_153458__$1;
(statearr_153466_153723[(1)] = (5));

} else {
var statearr_153467_153724 = state_153458__$1;
(statearr_153467_153724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (15))){
var inst_153371 = (state_153458[(2)]);
var inst_153372 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153373 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153374 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153373,inst_153371,null];
var inst_153375 = cljs.core.PersistentHashMap.fromArrays(inst_153372,inst_153374);
var inst_153376 = cljs.test.do_report.call(null,inst_153375);
var state_153458__$1 = state_153458;
var statearr_153468_153725 = state_153458__$1;
(statearr_153468_153725[(2)] = inst_153376);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (21))){
var inst_153412 = (state_153458[(2)]);
var inst_153413 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153414 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153415 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153414,inst_153412,null];
var inst_153416 = cljs.core.PersistentHashMap.fromArrays(inst_153413,inst_153415);
var inst_153417 = cljs.test.do_report.call(null,inst_153416);
var state_153458__$1 = state_153458;
var statearr_153469_153726 = state_153458__$1;
(statearr_153469_153726[(2)] = inst_153417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (13))){
var inst_153347 = (state_153458[(12)]);
var inst_153368 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153470 = state_153458;
(statearr_153470[(13)] = inst_153368);

return statearr_153470;
})();
var statearr_153471_153727 = state_153458__$1;
(statearr_153471_153727[(2)] = inst_153347);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (22))){
var inst_153432 = (state_153458[(14)]);
var inst_153431 = (state_153458[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153458,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_153421 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_153423 = [(1),(2)];
var inst_153424 = (new cljs.core.PersistentVector(null,2,(5),inst_153422,inst_153423,null));
var inst_153425 = [false,inst_153424];
var inst_153426 = cljs.core.PersistentHashMap.fromArrays(inst_153421,inst_153425);
var inst_153427 = klipse.lang.clojure.result_as_str.call(null,inst_153426,(2));
var inst_153428 = cljs.core.second.call(null,inst_153427);
var inst_153429 = cljs.core.List.EMPTY;
var inst_153430 = cljs.core._conj.call(null,inst_153429,"[1 2]");
var inst_153431__$1 = cljs.core._conj.call(null,inst_153430,inst_153428);
var inst_153432__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153431__$1);
var state_153458__$1 = (function (){var statearr_153472 = state_153458;
(statearr_153472[(14)] = inst_153432__$1);

(statearr_153472[(10)] = inst_153431__$1);

return statearr_153472;
})();
if(cljs.core.truth_(inst_153432__$1)){
var statearr_153473_153728 = state_153458__$1;
(statearr_153473_153728[(1)] = (23));

} else {
var statearr_153474_153729 = state_153458__$1;
(statearr_153474_153729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (6))){
var inst_153304 = (state_153458[(11)]);
var inst_153314 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153315 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153316 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153317 = cljs.core.cons.call(null,inst_153316,inst_153304);
var inst_153318 = cljs.core.List.EMPTY;
var inst_153319 = cljs.core._conj.call(null,inst_153318,inst_153317);
var inst_153320 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153321 = cljs.core._conj.call(null,inst_153319,inst_153320);
var inst_153322 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153315,inst_153321,null];
var inst_153323 = cljs.core.PersistentHashMap.fromArrays(inst_153314,inst_153322);
var inst_153324 = cljs.test.do_report.call(null,inst_153323);
var state_153458__$1 = state_153458;
var statearr_153475_153730 = state_153458__$1;
(statearr_153475_153730[(2)] = inst_153324);

(statearr_153475_153730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (25))){
var inst_153432 = (state_153458[(14)]);
var inst_153453 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153476 = state_153458;
(statearr_153476[(15)] = inst_153453);

return statearr_153476;
})();
var statearr_153477_153731 = state_153458__$1;
(statearr_153477_153731[(2)] = inst_153432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (17))){
var inst_153387 = (state_153458[(16)]);
var inst_153390 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153391 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153392 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153387);
var inst_153393 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153391,inst_153392,null];
var inst_153394 = cljs.core.PersistentHashMap.fromArrays(inst_153390,inst_153393);
var inst_153395 = cljs.test.do_report.call(null,inst_153394);
var state_153458__$1 = state_153458;
var statearr_153478_153732 = state_153458__$1;
(statearr_153478_153732[(2)] = inst_153395);

(statearr_153478_153732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (3))){
var inst_153288 = (state_153458[(2)]);
var inst_153289 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153290 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153291 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153290,inst_153288,null];
var inst_153292 = cljs.core.PersistentHashMap.fromArrays(inst_153289,inst_153291);
var inst_153293 = cljs.test.do_report.call(null,inst_153292);
var state_153458__$1 = state_153458;
var statearr_153479_153733 = state_153458__$1;
(statearr_153479_153733[(2)] = inst_153293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (12))){
var inst_153346 = (state_153458[(17)]);
var inst_153356 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153357 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153358 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153359 = cljs.core.cons.call(null,inst_153358,inst_153346);
var inst_153360 = cljs.core.List.EMPTY;
var inst_153361 = cljs.core._conj.call(null,inst_153360,inst_153359);
var inst_153362 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153363 = cljs.core._conj.call(null,inst_153361,inst_153362);
var inst_153364 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153357,inst_153363,null];
var inst_153365 = cljs.core.PersistentHashMap.fromArrays(inst_153356,inst_153364);
var inst_153366 = cljs.test.do_report.call(null,inst_153365);
var state_153458__$1 = state_153458;
var statearr_153480_153734 = state_153458__$1;
(statearr_153480_153734[(2)] = inst_153366);

(statearr_153480_153734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (2))){
var inst_153328 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153481 = state_153458;
(statearr_153481[(18)] = inst_153328);

return statearr_153481;
})();
var statearr_153482_153735 = state_153458__$1;
(statearr_153482_153735[(2)] = null);

(statearr_153482_153735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (23))){
var inst_153431 = (state_153458[(10)]);
var inst_153434 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153435 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153436 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153431);
var inst_153437 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153435,inst_153436,null];
var inst_153438 = cljs.core.PersistentHashMap.fromArrays(inst_153434,inst_153437);
var inst_153439 = cljs.test.do_report.call(null,inst_153438);
var state_153458__$1 = state_153458;
var statearr_153483_153736 = state_153458__$1;
(statearr_153483_153736[(2)] = inst_153439);

(statearr_153483_153736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (19))){
var inst_153388 = (state_153458[(19)]);
var inst_153409 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153484 = state_153458;
(statearr_153484[(20)] = inst_153409);

return statearr_153484;
})();
var statearr_153485_153737 = state_153458__$1;
(statearr_153485_153737[(2)] = inst_153388);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (11))){
var inst_153346 = (state_153458[(17)]);
var inst_153349 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153350 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153351 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153346);
var inst_153352 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153350,inst_153351,null];
var inst_153353 = cljs.core.PersistentHashMap.fromArrays(inst_153349,inst_153352);
var inst_153354 = cljs.test.do_report.call(null,inst_153353);
var state_153458__$1 = state_153458;
var statearr_153486_153738 = state_153458__$1;
(statearr_153486_153738[(2)] = inst_153354);

(statearr_153486_153738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (9))){
var inst_153329 = (state_153458[(2)]);
var inst_153330 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153331 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153332 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153331,inst_153329,null];
var inst_153333 = cljs.core.PersistentHashMap.fromArrays(inst_153330,inst_153332);
var inst_153334 = cljs.test.do_report.call(null,inst_153333);
var state_153458__$1 = state_153458;
var statearr_153487_153739 = state_153458__$1;
(statearr_153487_153739[(2)] = inst_153334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (5))){
var inst_153304 = (state_153458[(11)]);
var inst_153307 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153308 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153309 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153304);
var inst_153310 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153308,inst_153309,null];
var inst_153311 = cljs.core.PersistentHashMap.fromArrays(inst_153307,inst_153310);
var inst_153312 = cljs.test.do_report.call(null,inst_153311);
var state_153458__$1 = state_153458;
var statearr_153488_153740 = state_153458__$1;
(statearr_153488_153740[(2)] = inst_153312);

(statearr_153488_153740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (14))){
var inst_153411 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153489 = state_153458;
(statearr_153489[(21)] = inst_153411);

return statearr_153489;
})();
var statearr_153490_153741 = state_153458__$1;
(statearr_153490_153741[(2)] = null);

(statearr_153490_153741[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (16))){
var inst_153388 = (state_153458[(19)]);
var inst_153387 = (state_153458[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153458,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_153380 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153381 = [false,(1)];
var inst_153382 = cljs.core.PersistentHashMap.fromArrays(inst_153380,inst_153381);
var inst_153383 = klipse.lang.clojure.result_as_str.call(null,inst_153382,(2));
var inst_153384 = cljs.core.second.call(null,inst_153383);
var inst_153385 = cljs.core.List.EMPTY;
var inst_153386 = cljs.core._conj.call(null,inst_153385,"1");
var inst_153387__$1 = cljs.core._conj.call(null,inst_153386,inst_153384);
var inst_153388__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153387__$1);
var state_153458__$1 = (function (){var statearr_153491 = state_153458;
(statearr_153491[(19)] = inst_153388__$1);

(statearr_153491[(16)] = inst_153387__$1);

return statearr_153491;
})();
if(cljs.core.truth_(inst_153388__$1)){
var statearr_153492_153742 = state_153458__$1;
(statearr_153492_153742[(1)] = (17));

} else {
var statearr_153493_153743 = state_153458__$1;
(statearr_153493_153743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (10))){
var inst_153346 = (state_153458[(17)]);
var inst_153347 = (state_153458[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153458,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_153338 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153339 = ["ab"].join('');
var inst_153340 = [false,inst_153339];
var inst_153341 = cljs.core.PersistentHashMap.fromArrays(inst_153338,inst_153340);
var inst_153342 = klipse.lang.clojure.result_as_str.call(null,inst_153341,(2));
var inst_153343 = cljs.core.second.call(null,inst_153342);
var inst_153344 = cljs.core.List.EMPTY;
var inst_153345 = cljs.core._conj.call(null,inst_153344,"\"ab\"");
var inst_153346__$1 = cljs.core._conj.call(null,inst_153345,inst_153343);
var inst_153347__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153346__$1);
var state_153458__$1 = (function (){var statearr_153494 = state_153458;
(statearr_153494[(17)] = inst_153346__$1);

(statearr_153494[(12)] = inst_153347__$1);

return statearr_153494;
})();
if(cljs.core.truth_(inst_153347__$1)){
var statearr_153495_153744 = state_153458__$1;
(statearr_153495_153744[(1)] = (11));

} else {
var statearr_153496_153745 = state_153458__$1;
(statearr_153496_153745[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (18))){
var inst_153387 = (state_153458[(16)]);
var inst_153397 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153398 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153399 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153400 = cljs.core.cons.call(null,inst_153399,inst_153387);
var inst_153401 = cljs.core.List.EMPTY;
var inst_153402 = cljs.core._conj.call(null,inst_153401,inst_153400);
var inst_153403 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153404 = cljs.core._conj.call(null,inst_153402,inst_153403);
var inst_153405 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153398,inst_153404,null];
var inst_153406 = cljs.core.PersistentHashMap.fromArrays(inst_153397,inst_153405);
var inst_153407 = cljs.test.do_report.call(null,inst_153406);
var state_153458__$1 = state_153458;
var statearr_153497_153746 = state_153458__$1;
(statearr_153497_153746[(2)] = inst_153407);

(statearr_153497_153746[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153459 === (8))){
var inst_153370 = (state_153458[(2)]);
var state_153458__$1 = (function (){var statearr_153498 = state_153458;
(statearr_153498[(22)] = inst_153370);

return statearr_153498;
})();
var statearr_153499_153747 = state_153458__$1;
(statearr_153499_153747[(2)] = null);

(statearr_153499_153747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_153500[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153500[(1)] = (1));

return statearr_153500;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_153458){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_153458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153501){if((e153501 instanceof Object)){
var ex__13458__auto__ = e153501;
var statearr_153502_153748 = state_153458;
(statearr_153502_153748[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153749 = state_153458;
state_153458 = G__153749;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_153458){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_153458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_153503 = f__13545__auto__.call(null);
(statearr_153503[(6)] = c__13544__auto__);

return statearr_153503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.apply = (function (self__,args153287){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args153287)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval153284.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_153674){
var state_val_153675 = (state_153674[(1)]);
if((state_val_153675 === (7))){
var inst_153521 = (state_153674[(7)]);
var inst_153542 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153676 = state_153674;
(statearr_153676[(8)] = inst_153542);

return statearr_153676;
})();
var statearr_153677_153750 = state_153674__$1;
(statearr_153677_153750[(2)] = inst_153521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (20))){
var inst_153671 = (state_153674[(2)]);
var inst_153672 = done.call(null);
var state_153674__$1 = (function (){var statearr_153678 = state_153674;
(statearr_153678[(9)] = inst_153671);

return statearr_153678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153674__$1,inst_153672);
} else {
if((state_val_153675 === (1))){
var state_153674__$1 = state_153674;
var statearr_153679_153751 = state_153674__$1;
(statearr_153679_153751[(2)] = null);

(statearr_153679_153751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (24))){
var inst_153647 = (state_153674[(10)]);
var inst_153657 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153658 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153659 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153660 = cljs.core.cons.call(null,inst_153659,inst_153647);
var inst_153661 = cljs.core.List.EMPTY;
var inst_153662 = cljs.core._conj.call(null,inst_153661,inst_153660);
var inst_153663 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153664 = cljs.core._conj.call(null,inst_153662,inst_153663);
var inst_153665 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153658,inst_153664,null];
var inst_153666 = cljs.core.PersistentHashMap.fromArrays(inst_153657,inst_153665);
var inst_153667 = cljs.test.do_report.call(null,inst_153666);
var state_153674__$1 = state_153674;
var statearr_153680_153752 = state_153674__$1;
(statearr_153680_153752[(2)] = inst_153667);

(statearr_153680_153752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (4))){
var inst_153520 = (state_153674[(11)]);
var inst_153521 = (state_153674[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153674,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153513 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153514 = [false,null];
var inst_153515 = cljs.core.PersistentHashMap.fromArrays(inst_153513,inst_153514);
var inst_153516 = klipse.lang.clojure.result_as_str.call(null,inst_153515,(2));
var inst_153517 = cljs.core.second.call(null,inst_153516);
var inst_153518 = cljs.core.List.EMPTY;
var inst_153519 = cljs.core._conj.call(null,inst_153518,"nil");
var inst_153520__$1 = cljs.core._conj.call(null,inst_153519,inst_153517);
var inst_153521__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153520__$1);
var state_153674__$1 = (function (){var statearr_153681 = state_153674;
(statearr_153681[(11)] = inst_153520__$1);

(statearr_153681[(7)] = inst_153521__$1);

return statearr_153681;
})();
if(cljs.core.truth_(inst_153521__$1)){
var statearr_153682_153753 = state_153674__$1;
(statearr_153682_153753[(1)] = (5));

} else {
var statearr_153683_153754 = state_153674__$1;
(statearr_153683_153754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (15))){
var inst_153587 = (state_153674[(2)]);
var inst_153588 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153589 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153590 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153589,inst_153587,null];
var inst_153591 = cljs.core.PersistentHashMap.fromArrays(inst_153588,inst_153590);
var inst_153592 = cljs.test.do_report.call(null,inst_153591);
var state_153674__$1 = state_153674;
var statearr_153684_153755 = state_153674__$1;
(statearr_153684_153755[(2)] = inst_153592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (21))){
var inst_153628 = (state_153674[(2)]);
var inst_153629 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153630 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153631 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153630,inst_153628,null];
var inst_153632 = cljs.core.PersistentHashMap.fromArrays(inst_153629,inst_153631);
var inst_153633 = cljs.test.do_report.call(null,inst_153632);
var state_153674__$1 = state_153674;
var statearr_153685_153756 = state_153674__$1;
(statearr_153685_153756[(2)] = inst_153633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (13))){
var inst_153563 = (state_153674[(12)]);
var inst_153584 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153686 = state_153674;
(statearr_153686[(13)] = inst_153584);

return statearr_153686;
})();
var statearr_153687_153757 = state_153674__$1;
(statearr_153687_153757[(2)] = inst_153563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (22))){
var inst_153648 = (state_153674[(14)]);
var inst_153647 = (state_153674[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153674,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_153637 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_153639 = [(1),(2)];
var inst_153640 = (new cljs.core.PersistentVector(null,2,(5),inst_153638,inst_153639,null));
var inst_153641 = [false,inst_153640];
var inst_153642 = cljs.core.PersistentHashMap.fromArrays(inst_153637,inst_153641);
var inst_153643 = klipse.lang.clojure.result_as_str.call(null,inst_153642,(2));
var inst_153644 = cljs.core.second.call(null,inst_153643);
var inst_153645 = cljs.core.List.EMPTY;
var inst_153646 = cljs.core._conj.call(null,inst_153645,"[1 2]");
var inst_153647__$1 = cljs.core._conj.call(null,inst_153646,inst_153644);
var inst_153648__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153647__$1);
var state_153674__$1 = (function (){var statearr_153688 = state_153674;
(statearr_153688[(14)] = inst_153648__$1);

(statearr_153688[(10)] = inst_153647__$1);

return statearr_153688;
})();
if(cljs.core.truth_(inst_153648__$1)){
var statearr_153689_153758 = state_153674__$1;
(statearr_153689_153758[(1)] = (23));

} else {
var statearr_153690_153759 = state_153674__$1;
(statearr_153690_153759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (6))){
var inst_153520 = (state_153674[(11)]);
var inst_153530 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153531 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153532 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153533 = cljs.core.cons.call(null,inst_153532,inst_153520);
var inst_153534 = cljs.core.List.EMPTY;
var inst_153535 = cljs.core._conj.call(null,inst_153534,inst_153533);
var inst_153536 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153537 = cljs.core._conj.call(null,inst_153535,inst_153536);
var inst_153538 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153531,inst_153537,null];
var inst_153539 = cljs.core.PersistentHashMap.fromArrays(inst_153530,inst_153538);
var inst_153540 = cljs.test.do_report.call(null,inst_153539);
var state_153674__$1 = state_153674;
var statearr_153691_153760 = state_153674__$1;
(statearr_153691_153760[(2)] = inst_153540);

(statearr_153691_153760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (25))){
var inst_153648 = (state_153674[(14)]);
var inst_153669 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153692 = state_153674;
(statearr_153692[(15)] = inst_153669);

return statearr_153692;
})();
var statearr_153693_153761 = state_153674__$1;
(statearr_153693_153761[(2)] = inst_153648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (17))){
var inst_153603 = (state_153674[(16)]);
var inst_153606 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153607 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153608 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153603);
var inst_153609 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153607,inst_153608,null];
var inst_153610 = cljs.core.PersistentHashMap.fromArrays(inst_153606,inst_153609);
var inst_153611 = cljs.test.do_report.call(null,inst_153610);
var state_153674__$1 = state_153674;
var statearr_153694_153762 = state_153674__$1;
(statearr_153694_153762[(2)] = inst_153611);

(statearr_153694_153762[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (3))){
var inst_153504 = (state_153674[(2)]);
var inst_153505 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153506 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153507 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153506,inst_153504,null];
var inst_153508 = cljs.core.PersistentHashMap.fromArrays(inst_153505,inst_153507);
var inst_153509 = cljs.test.do_report.call(null,inst_153508);
var state_153674__$1 = state_153674;
var statearr_153695_153763 = state_153674__$1;
(statearr_153695_153763[(2)] = inst_153509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (12))){
var inst_153562 = (state_153674[(17)]);
var inst_153572 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153573 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153574 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153575 = cljs.core.cons.call(null,inst_153574,inst_153562);
var inst_153576 = cljs.core.List.EMPTY;
var inst_153577 = cljs.core._conj.call(null,inst_153576,inst_153575);
var inst_153578 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153579 = cljs.core._conj.call(null,inst_153577,inst_153578);
var inst_153580 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153573,inst_153579,null];
var inst_153581 = cljs.core.PersistentHashMap.fromArrays(inst_153572,inst_153580);
var inst_153582 = cljs.test.do_report.call(null,inst_153581);
var state_153674__$1 = state_153674;
var statearr_153696_153764 = state_153674__$1;
(statearr_153696_153764[(2)] = inst_153582);

(statearr_153696_153764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (2))){
var inst_153544 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153697 = state_153674;
(statearr_153697[(18)] = inst_153544);

return statearr_153697;
})();
var statearr_153698_153765 = state_153674__$1;
(statearr_153698_153765[(2)] = null);

(statearr_153698_153765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (23))){
var inst_153647 = (state_153674[(10)]);
var inst_153650 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153651 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2))),"[1 2]");
var inst_153652 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153647);
var inst_153653 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153651,inst_153652,null];
var inst_153654 = cljs.core.PersistentHashMap.fromArrays(inst_153650,inst_153653);
var inst_153655 = cljs.test.do_report.call(null,inst_153654);
var state_153674__$1 = state_153674;
var statearr_153699_153766 = state_153674__$1;
(statearr_153699_153766[(2)] = inst_153655);

(statearr_153699_153766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (19))){
var inst_153604 = (state_153674[(19)]);
var inst_153625 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153700 = state_153674;
(statearr_153700[(20)] = inst_153625);

return statearr_153700;
})();
var statearr_153701_153767 = state_153674__$1;
(statearr_153701_153767[(2)] = inst_153604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (11))){
var inst_153562 = (state_153674[(17)]);
var inst_153565 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153566 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153567 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153562);
var inst_153568 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153566,inst_153567,null];
var inst_153569 = cljs.core.PersistentHashMap.fromArrays(inst_153565,inst_153568);
var inst_153570 = cljs.test.do_report.call(null,inst_153569);
var state_153674__$1 = state_153674;
var statearr_153702_153768 = state_153674__$1;
(statearr_153702_153768[(2)] = inst_153570);

(statearr_153702_153768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (9))){
var inst_153545 = (state_153674[(2)]);
var inst_153546 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153547 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ab")], null),(2))),"\"ab\"");
var inst_153548 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153547,inst_153545,null];
var inst_153549 = cljs.core.PersistentHashMap.fromArrays(inst_153546,inst_153548);
var inst_153550 = cljs.test.do_report.call(null,inst_153549);
var state_153674__$1 = state_153674;
var statearr_153703_153769 = state_153674__$1;
(statearr_153703_153769[(2)] = inst_153550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (5))){
var inst_153520 = (state_153674[(11)]);
var inst_153523 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153524 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null),(2))),"nil");
var inst_153525 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153520);
var inst_153526 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153524,inst_153525,null];
var inst_153527 = cljs.core.PersistentHashMap.fromArrays(inst_153523,inst_153526);
var inst_153528 = cljs.test.do_report.call(null,inst_153527);
var state_153674__$1 = state_153674;
var statearr_153704_153770 = state_153674__$1;
(statearr_153704_153770[(2)] = inst_153528);

(statearr_153704_153770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (14))){
var inst_153627 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153705 = state_153674;
(statearr_153705[(21)] = inst_153627);

return statearr_153705;
})();
var statearr_153706_153771 = state_153674__$1;
(statearr_153706_153771[(2)] = null);

(statearr_153706_153771[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (16))){
var inst_153604 = (state_153674[(19)]);
var inst_153603 = (state_153674[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153674,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_153596 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153597 = [false,(1)];
var inst_153598 = cljs.core.PersistentHashMap.fromArrays(inst_153596,inst_153597);
var inst_153599 = klipse.lang.clojure.result_as_str.call(null,inst_153598,(2));
var inst_153600 = cljs.core.second.call(null,inst_153599);
var inst_153601 = cljs.core.List.EMPTY;
var inst_153602 = cljs.core._conj.call(null,inst_153601,"1");
var inst_153603__$1 = cljs.core._conj.call(null,inst_153602,inst_153600);
var inst_153604__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153603__$1);
var state_153674__$1 = (function (){var statearr_153707 = state_153674;
(statearr_153707[(19)] = inst_153604__$1);

(statearr_153707[(16)] = inst_153603__$1);

return statearr_153707;
})();
if(cljs.core.truth_(inst_153604__$1)){
var statearr_153708_153772 = state_153674__$1;
(statearr_153708_153772[(1)] = (17));

} else {
var statearr_153709_153773 = state_153674__$1;
(statearr_153709_153773[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (10))){
var inst_153563 = (state_153674[(12)]);
var inst_153562 = (state_153674[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_153674,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_153554 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_153555 = ["ab"].join('');
var inst_153556 = [false,inst_153555];
var inst_153557 = cljs.core.PersistentHashMap.fromArrays(inst_153554,inst_153556);
var inst_153558 = klipse.lang.clojure.result_as_str.call(null,inst_153557,(2));
var inst_153559 = cljs.core.second.call(null,inst_153558);
var inst_153560 = cljs.core.List.EMPTY;
var inst_153561 = cljs.core._conj.call(null,inst_153560,"\"ab\"");
var inst_153562__$1 = cljs.core._conj.call(null,inst_153561,inst_153559);
var inst_153563__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153562__$1);
var state_153674__$1 = (function (){var statearr_153710 = state_153674;
(statearr_153710[(12)] = inst_153563__$1);

(statearr_153710[(17)] = inst_153562__$1);

return statearr_153710;
})();
if(cljs.core.truth_(inst_153563__$1)){
var statearr_153711_153774 = state_153674__$1;
(statearr_153711_153774[(1)] = (11));

} else {
var statearr_153712_153775 = state_153674__$1;
(statearr_153712_153775[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (18))){
var inst_153603 = (state_153674[(16)]);
var inst_153613 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153614 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"error","error",-978969032),(1)], null),(2))),"1");
var inst_153615 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153616 = cljs.core.cons.call(null,inst_153615,inst_153603);
var inst_153617 = cljs.core.List.EMPTY;
var inst_153618 = cljs.core._conj.call(null,inst_153617,inst_153616);
var inst_153619 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153620 = cljs.core._conj.call(null,inst_153618,inst_153619);
var inst_153621 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153614,inst_153620,null];
var inst_153622 = cljs.core.PersistentHashMap.fromArrays(inst_153613,inst_153621);
var inst_153623 = cljs.test.do_report.call(null,inst_153622);
var state_153674__$1 = state_153674;
var statearr_153713_153776 = state_153674__$1;
(statearr_153713_153776[(2)] = inst_153623);

(statearr_153713_153776[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153675 === (8))){
var inst_153586 = (state_153674[(2)]);
var state_153674__$1 = (function (){var statearr_153714 = state_153674;
(statearr_153714[(22)] = inst_153586);

return statearr_153714;
})();
var statearr_153715_153777 = state_153674__$1;
(statearr_153715_153777[(2)] = null);

(statearr_153715_153777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_153716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_153716[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_153716[(1)] = (1));

return statearr_153716;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_153674){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_153674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e153717){if((e153717 instanceof Object)){
var ex__13458__auto__ = e153717;
var statearr_153718_153778 = state_153674;
(statearr_153718_153778[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__153779 = state_153674;
state_153674 = G__153779;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_153674){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_153674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_153719 = f__13545__auto__.call(null);
(statearr_153719[(6)] = c__13544__auto__);

return statearr_153719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta153285","meta153285",-126036803,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval153284.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval153284.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval153284";

klipse.cards.test.eval.t_klipse$cards$test$eval153284.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval153284");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval153284 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval153284(meta153285){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153284(meta153285));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval153284(null));
});

klipse.cards.test.eval.display_evaluation_with_errors.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.display_evaluation_with_errors;},new cljs.core.Symbol("klipse.cards.test.eval","display-evaluation-with-errors","klipse.cards.test.eval/display-evaluation-with-errors",-1926689857,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"display-evaluation-with-errors","display-evaluation-with-errors",1134014544,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",40,1,119,119,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.display_evaluation_with_errors)?klipse.cards.test.eval.display_evaluation_with_errors.cljs$lang$test:null)]));

klipse.cards.test.eval.display_evaluation_and_beautify = (function klipse$cards$test$eval$display_evaluation_and_beautify(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.display_evaluation_and_beautify.cljs$lang$var);
});
klipse.cards.test.eval.display_evaluation_and_beautify.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval153780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval153780 = (function (meta153781){
this.meta153781 = meta153781;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153782,meta153781__$1){
var self__ = this;
var _153782__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153780(meta153781__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153782){
var self__ = this;
var _153782__$1 = this;
return self__.meta153781;
});


klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_154101){
var state_val_154102 = (state_154101[(1)]);
if((state_val_154102 === (7))){
var inst_153804 = (state_154101[(7)]);
var inst_153825 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154103 = state_154101;
(statearr_154103[(8)] = inst_153825);

return statearr_154103;
})();
var statearr_154104_154570 = state_154101__$1;
(statearr_154104_154570[(2)] = inst_153804);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (20))){
var inst_153962 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154105 = state_154101;
(statearr_154105[(9)] = inst_153962);

return statearr_154105;
})();
var statearr_154106_154571 = state_154101__$1;
(statearr_154106_154571[(2)] = null);

(statearr_154106_154571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (27))){
var inst_153963 = (state_154101[(2)]);
var inst_153964 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153965 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_153966 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153965,inst_153963,null];
var inst_153967 = cljs.core.PersistentHashMap.fromArrays(inst_153964,inst_153966);
var inst_153968 = cljs.test.do_report.call(null,inst_153967);
var state_154101__$1 = state_154101;
var statearr_154107_154572 = state_154101__$1;
(statearr_154107_154572[(2)] = inst_153968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (1))){
var state_154101__$1 = state_154101;
var statearr_154108_154573 = state_154101__$1;
(statearr_154108_154573[(2)] = null);

(statearr_154108_154573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (24))){
var inst_153938 = (state_154101[(10)]);
var inst_153948 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153949 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_153950 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153951 = cljs.core.cons.call(null,inst_153950,inst_153938);
var inst_153952 = cljs.core.List.EMPTY;
var inst_153953 = cljs.core._conj.call(null,inst_153952,inst_153951);
var inst_153954 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153955 = cljs.core._conj.call(null,inst_153953,inst_153954);
var inst_153956 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153949,inst_153955,null];
var inst_153957 = cljs.core.PersistentHashMap.fromArrays(inst_153948,inst_153956);
var inst_153958 = cljs.test.do_report.call(null,inst_153957);
var state_154101__$1 = state_154101;
var statearr_154109_154574 = state_154101__$1;
(statearr_154109_154574[(2)] = inst_153958);

(statearr_154109_154574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (39))){
var inst_154054 = (state_154101[(2)]);
var inst_154055 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154056 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154057 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154056,inst_154054,null];
var inst_154058 = cljs.core.PersistentHashMap.fromArrays(inst_154055,inst_154057);
var inst_154059 = cljs.test.do_report.call(null,inst_154058);
var state_154101__$1 = state_154101;
var statearr_154110_154575 = state_154101__$1;
(statearr_154110_154575[(2)] = inst_154059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (4))){
var inst_153804 = (state_154101[(7)]);
var inst_153803 = (state_154101[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_153793 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_153794 = [true,null];
var inst_153795 = cljs.core.PersistentHashMap.fromArrays(inst_153793,inst_153794);
var inst_153796 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_153797 = [true,(2)];
var inst_153798 = cljs.core.PersistentHashMap.fromArrays(inst_153796,inst_153797);
var inst_153799 = klipse.lang.clojure.result_as_str.call(null,inst_153795,inst_153798);
var inst_153800 = cljs.core.second.call(null,inst_153799);
var inst_153801 = cljs.core.List.EMPTY;
var inst_153802 = cljs.core._conj.call(null,inst_153801,"nil");
var inst_153803__$1 = cljs.core._conj.call(null,inst_153802,inst_153800);
var inst_153804__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153803__$1);
var state_154101__$1 = (function (){var statearr_154111 = state_154101;
(statearr_154111[(7)] = inst_153804__$1);

(statearr_154111[(11)] = inst_153803__$1);

return statearr_154111;
})();
if(cljs.core.truth_(inst_153804__$1)){
var statearr_154112_154576 = state_154101__$1;
(statearr_154112_154576[(1)] = (5));

} else {
var statearr_154113_154577 = state_154101__$1;
(statearr_154113_154577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (15))){
var inst_153872 = (state_154101[(2)]);
var inst_153873 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153874 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_153875 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153874,inst_153872,null];
var inst_153876 = cljs.core.PersistentHashMap.fromArrays(inst_153873,inst_153875);
var inst_153877 = cljs.test.do_report.call(null,inst_153876);
var state_154101__$1 = state_154101;
var statearr_154114_154578 = state_154101__$1;
(statearr_154114_154578[(2)] = inst_153877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (21))){
var inst_153916 = (state_154101[(2)]);
var inst_153917 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153918 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_153919 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153918,inst_153916,null];
var inst_153920 = cljs.core.PersistentHashMap.fromArrays(inst_153917,inst_153919);
var inst_153921 = cljs.test.do_report.call(null,inst_153920);
var state_154101__$1 = state_154101;
var statearr_154115_154579 = state_154101__$1;
(statearr_154115_154579[(2)] = inst_153921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (31))){
var inst_153986 = (state_154101[(12)]);
var inst_154007 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154116 = state_154101;
(statearr_154116[(13)] = inst_154007);

return statearr_154116;
})();
var statearr_154117_154580 = state_154101__$1;
(statearr_154117_154580[(2)] = inst_153986);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (32))){
var inst_154053 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154118 = state_154101;
(statearr_154118[(14)] = inst_154053);

return statearr_154118;
})();
var statearr_154119_154581 = state_154101__$1;
(statearr_154119_154581[(2)] = null);

(statearr_154119_154581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (40))){
var inst_154074 = (state_154101[(15)]);
var inst_154075 = (state_154101[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_154063 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154064 = cljs.core.range.call(null);
var inst_154065 = [true,inst_154064];
var inst_154066 = cljs.core.PersistentHashMap.fromArrays(inst_154063,inst_154065);
var inst_154067 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154068 = [true,(2)];
var inst_154069 = cljs.core.PersistentHashMap.fromArrays(inst_154067,inst_154068);
var inst_154070 = klipse.lang.clojure.result_as_str.call(null,inst_154066,inst_154069);
var inst_154071 = cljs.core.second.call(null,inst_154070);
var inst_154072 = cljs.core.List.EMPTY;
var inst_154073 = cljs.core._conj.call(null,inst_154072,"(0 1 ...)");
var inst_154074__$1 = cljs.core._conj.call(null,inst_154073,inst_154071);
var inst_154075__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154074__$1);
var state_154101__$1 = (function (){var statearr_154120 = state_154101;
(statearr_154120[(15)] = inst_154074__$1);

(statearr_154120[(16)] = inst_154075__$1);

return statearr_154120;
})();
if(cljs.core.truth_(inst_154075__$1)){
var statearr_154121_154582 = state_154101__$1;
(statearr_154121_154582[(1)] = (41));

} else {
var statearr_154122_154583 = state_154101__$1;
(statearr_154122_154583[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (33))){
var inst_154010 = (state_154101[(2)]);
var inst_154011 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154012 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154013 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154012,inst_154010,null];
var inst_154014 = cljs.core.PersistentHashMap.fromArrays(inst_154011,inst_154013);
var inst_154015 = cljs.test.do_report.call(null,inst_154014);
var state_154101__$1 = state_154101;
var statearr_154123_154584 = state_154101__$1;
(statearr_154123_154584[(2)] = inst_154015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (13))){
var inst_153848 = (state_154101[(17)]);
var inst_153869 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154124 = state_154101;
(statearr_154124[(18)] = inst_153869);

return statearr_154124;
})();
var statearr_154125_154585 = state_154101__$1;
(statearr_154125_154585[(2)] = inst_153848);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (22))){
var inst_153939 = (state_154101[(19)]);
var inst_153938 = (state_154101[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_153925 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_153926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_153927 = [(1),(2)];
var inst_153928 = (new cljs.core.PersistentVector(null,2,(5),inst_153926,inst_153927,null));
var inst_153929 = [true,inst_153928];
var inst_153930 = cljs.core.PersistentHashMap.fromArrays(inst_153925,inst_153929);
var inst_153931 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_153932 = [true,(2)];
var inst_153933 = cljs.core.PersistentHashMap.fromArrays(inst_153931,inst_153932);
var inst_153934 = klipse.lang.clojure.result_as_str.call(null,inst_153930,inst_153933);
var inst_153935 = cljs.core.second.call(null,inst_153934);
var inst_153936 = cljs.core.List.EMPTY;
var inst_153937 = cljs.core._conj.call(null,inst_153936,"[1 2]");
var inst_153938__$1 = cljs.core._conj.call(null,inst_153937,inst_153935);
var inst_153939__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153938__$1);
var state_154101__$1 = (function (){var statearr_154126 = state_154101;
(statearr_154126[(19)] = inst_153939__$1);

(statearr_154126[(10)] = inst_153938__$1);

return statearr_154126;
})();
if(cljs.core.truth_(inst_153939__$1)){
var statearr_154127_154586 = state_154101__$1;
(statearr_154127_154586[(1)] = (23));

} else {
var statearr_154128_154587 = state_154101__$1;
(statearr_154128_154587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (36))){
var inst_154029 = (state_154101[(20)]);
var inst_154039 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154040 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154041 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154042 = cljs.core.cons.call(null,inst_154041,inst_154029);
var inst_154043 = cljs.core.List.EMPTY;
var inst_154044 = cljs.core._conj.call(null,inst_154043,inst_154042);
var inst_154045 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154046 = cljs.core._conj.call(null,inst_154044,inst_154045);
var inst_154047 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154040,inst_154046,null];
var inst_154048 = cljs.core.PersistentHashMap.fromArrays(inst_154039,inst_154047);
var inst_154049 = cljs.test.do_report.call(null,inst_154048);
var state_154101__$1 = state_154101;
var statearr_154129_154588 = state_154101__$1;
(statearr_154129_154588[(2)] = inst_154049);

(statearr_154129_154588[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (41))){
var inst_154074 = (state_154101[(15)]);
var inst_154077 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154078 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154079 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154074);
var inst_154080 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154078,inst_154079,null];
var inst_154081 = cljs.core.PersistentHashMap.fromArrays(inst_154077,inst_154080);
var inst_154082 = cljs.test.do_report.call(null,inst_154081);
var state_154101__$1 = state_154101;
var statearr_154130_154589 = state_154101__$1;
(statearr_154130_154589[(2)] = inst_154082);

(statearr_154130_154589[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (43))){
var inst_154075 = (state_154101[(16)]);
var inst_154096 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154131 = state_154101;
(statearr_154131[(21)] = inst_154096);

return statearr_154131;
})();
var statearr_154132_154590 = state_154101__$1;
(statearr_154132_154590[(2)] = inst_154075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (29))){
var inst_153985 = (state_154101[(22)]);
var inst_153988 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153989 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_153990 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153985);
var inst_153991 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153989,inst_153990,null];
var inst_153992 = cljs.core.PersistentHashMap.fromArrays(inst_153988,inst_153991);
var inst_153993 = cljs.test.do_report.call(null,inst_153992);
var state_154101__$1 = state_154101;
var statearr_154133_154591 = state_154101__$1;
(statearr_154133_154591[(2)] = inst_153993);

(statearr_154133_154591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (6))){
var inst_153803 = (state_154101[(11)]);
var inst_153813 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153814 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_153815 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153816 = cljs.core.cons.call(null,inst_153815,inst_153803);
var inst_153817 = cljs.core.List.EMPTY;
var inst_153818 = cljs.core._conj.call(null,inst_153817,inst_153816);
var inst_153819 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153820 = cljs.core._conj.call(null,inst_153818,inst_153819);
var inst_153821 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153814,inst_153820,null];
var inst_153822 = cljs.core.PersistentHashMap.fromArrays(inst_153813,inst_153821);
var inst_153823 = cljs.test.do_report.call(null,inst_153822);
var state_154101__$1 = state_154101;
var statearr_154134_154592 = state_154101__$1;
(statearr_154134_154592[(2)] = inst_153823);

(statearr_154134_154592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (28))){
var inst_153986 = (state_154101[(12)]);
var inst_153985 = (state_154101[(22)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_153972 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_153973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_153974 = [(1),(2),(3),(4),(5)];
var inst_153975 = (new cljs.core.PersistentVector(null,5,(5),inst_153973,inst_153974,null));
var inst_153976 = [true,inst_153975];
var inst_153977 = cljs.core.PersistentHashMap.fromArrays(inst_153972,inst_153976);
var inst_153978 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_153979 = [true,(2)];
var inst_153980 = cljs.core.PersistentHashMap.fromArrays(inst_153978,inst_153979);
var inst_153981 = klipse.lang.clojure.result_as_str.call(null,inst_153977,inst_153980);
var inst_153982 = cljs.core.second.call(null,inst_153981);
var inst_153983 = cljs.core.List.EMPTY;
var inst_153984 = cljs.core._conj.call(null,inst_153983,"[1 2 ...]");
var inst_153985__$1 = cljs.core._conj.call(null,inst_153984,inst_153982);
var inst_153986__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153985__$1);
var state_154101__$1 = (function (){var statearr_154135 = state_154101;
(statearr_154135[(12)] = inst_153986__$1);

(statearr_154135[(22)] = inst_153985__$1);

return statearr_154135;
})();
if(cljs.core.truth_(inst_153986__$1)){
var statearr_154136_154593 = state_154101__$1;
(statearr_154136_154593[(1)] = (29));

} else {
var statearr_154137_154594 = state_154101__$1;
(statearr_154137_154594[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (25))){
var inst_153939 = (state_154101[(19)]);
var inst_153960 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154138 = state_154101;
(statearr_154138[(23)] = inst_153960);

return statearr_154138;
})();
var statearr_154139_154595 = state_154101__$1;
(statearr_154139_154595[(2)] = inst_153939);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (34))){
var inst_154030 = (state_154101[(24)]);
var inst_154029 = (state_154101[(20)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_154019 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154020 = [true,"abcdef"];
var inst_154021 = cljs.core.PersistentHashMap.fromArrays(inst_154019,inst_154020);
var inst_154022 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154023 = [true,(2)];
var inst_154024 = cljs.core.PersistentHashMap.fromArrays(inst_154022,inst_154023);
var inst_154025 = klipse.lang.clojure.result_as_str.call(null,inst_154021,inst_154024);
var inst_154026 = cljs.core.second.call(null,inst_154025);
var inst_154027 = cljs.core.List.EMPTY;
var inst_154028 = cljs.core._conj.call(null,inst_154027,"abcdef");
var inst_154029__$1 = cljs.core._conj.call(null,inst_154028,inst_154026);
var inst_154030__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154029__$1);
var state_154101__$1 = (function (){var statearr_154140 = state_154101;
(statearr_154140[(24)] = inst_154030__$1);

(statearr_154140[(20)] = inst_154029__$1);

return statearr_154140;
})();
if(cljs.core.truth_(inst_154030__$1)){
var statearr_154141_154596 = state_154101__$1;
(statearr_154141_154596[(1)] = (35));

} else {
var statearr_154142_154597 = state_154101__$1;
(statearr_154142_154597[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (17))){
var inst_153891 = (state_154101[(25)]);
var inst_153894 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153895 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_153896 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153891);
var inst_153897 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153895,inst_153896,null];
var inst_153898 = cljs.core.PersistentHashMap.fromArrays(inst_153894,inst_153897);
var inst_153899 = cljs.test.do_report.call(null,inst_153898);
var state_154101__$1 = state_154101;
var statearr_154143_154598 = state_154101__$1;
(statearr_154143_154598[(2)] = inst_153899);

(statearr_154143_154598[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (3))){
var inst_153784 = (state_154101[(2)]);
var inst_153785 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153786 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_153787 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153786,inst_153784,null];
var inst_153788 = cljs.core.PersistentHashMap.fromArrays(inst_153785,inst_153787);
var inst_153789 = cljs.test.do_report.call(null,inst_153788);
var state_154101__$1 = state_154101;
var statearr_154144_154599 = state_154101__$1;
(statearr_154144_154599[(2)] = inst_153789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (12))){
var inst_153847 = (state_154101[(26)]);
var inst_153857 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153858 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_153859 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153860 = cljs.core.cons.call(null,inst_153859,inst_153847);
var inst_153861 = cljs.core.List.EMPTY;
var inst_153862 = cljs.core._conj.call(null,inst_153861,inst_153860);
var inst_153863 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153864 = cljs.core._conj.call(null,inst_153862,inst_153863);
var inst_153865 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153858,inst_153864,null];
var inst_153866 = cljs.core.PersistentHashMap.fromArrays(inst_153857,inst_153865);
var inst_153867 = cljs.test.do_report.call(null,inst_153866);
var state_154101__$1 = state_154101;
var statearr_154145_154600 = state_154101__$1;
(statearr_154145_154600[(2)] = inst_153867);

(statearr_154145_154600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (2))){
var inst_153827 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154146 = state_154101;
(statearr_154146[(27)] = inst_153827);

return statearr_154146;
})();
var statearr_154147_154601 = state_154101__$1;
(statearr_154147_154601[(2)] = null);

(statearr_154147_154601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (23))){
var inst_153938 = (state_154101[(10)]);
var inst_153941 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153942 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_153943 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153938);
var inst_153944 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153942,inst_153943,null];
var inst_153945 = cljs.core.PersistentHashMap.fromArrays(inst_153941,inst_153944);
var inst_153946 = cljs.test.do_report.call(null,inst_153945);
var state_154101__$1 = state_154101;
var statearr_154148_154602 = state_154101__$1;
(statearr_154148_154602[(2)] = inst_153946);

(statearr_154148_154602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (35))){
var inst_154029 = (state_154101[(20)]);
var inst_154032 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154033 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154034 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154029);
var inst_154035 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154033,inst_154034,null];
var inst_154036 = cljs.core.PersistentHashMap.fromArrays(inst_154032,inst_154035);
var inst_154037 = cljs.test.do_report.call(null,inst_154036);
var state_154101__$1 = state_154101;
var statearr_154149_154603 = state_154101__$1;
(statearr_154149_154603[(2)] = inst_154037);

(statearr_154149_154603[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (19))){
var inst_153892 = (state_154101[(28)]);
var inst_153913 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154150 = state_154101;
(statearr_154150[(29)] = inst_153913);

return statearr_154150;
})();
var statearr_154151_154604 = state_154101__$1;
(statearr_154151_154604[(2)] = inst_153892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (11))){
var inst_153847 = (state_154101[(26)]);
var inst_153850 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153851 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_153852 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153847);
var inst_153853 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153851,inst_153852,null];
var inst_153854 = cljs.core.PersistentHashMap.fromArrays(inst_153850,inst_153853);
var inst_153855 = cljs.test.do_report.call(null,inst_153854);
var state_154101__$1 = state_154101;
var statearr_154152_154605 = state_154101__$1;
(statearr_154152_154605[(2)] = inst_153855);

(statearr_154152_154605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (9))){
var inst_153828 = (state_154101[(2)]);
var inst_153829 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153830 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_153831 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_153830,inst_153828,null];
var inst_153832 = cljs.core.PersistentHashMap.fromArrays(inst_153829,inst_153831);
var inst_153833 = cljs.test.do_report.call(null,inst_153832);
var state_154101__$1 = state_154101;
var statearr_154153_154606 = state_154101__$1;
(statearr_154153_154606[(2)] = inst_153833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (5))){
var inst_153803 = (state_154101[(11)]);
var inst_153806 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153807 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_153808 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_153803);
var inst_153809 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_153807,inst_153808,null];
var inst_153810 = cljs.core.PersistentHashMap.fromArrays(inst_153806,inst_153809);
var inst_153811 = cljs.test.do_report.call(null,inst_153810);
var state_154101__$1 = state_154101;
var statearr_154154_154607 = state_154101__$1;
(statearr_154154_154607[(2)] = inst_153811);

(statearr_154154_154607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (14))){
var inst_153915 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154155 = state_154101;
(statearr_154155[(30)] = inst_153915);

return statearr_154155;
})();
var statearr_154156_154608 = state_154101__$1;
(statearr_154156_154608[(2)] = null);

(statearr_154156_154608[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (26))){
var inst_154009 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154157 = state_154101;
(statearr_154157[(31)] = inst_154009);

return statearr_154157;
})();
var statearr_154158_154609 = state_154101__$1;
(statearr_154158_154609[(2)] = null);

(statearr_154158_154609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (16))){
var inst_153892 = (state_154101[(28)]);
var inst_153891 = (state_154101[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_153881 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_153882 = [true,"ab"];
var inst_153883 = cljs.core.PersistentHashMap.fromArrays(inst_153881,inst_153882);
var inst_153884 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_153885 = [true,(2)];
var inst_153886 = cljs.core.PersistentHashMap.fromArrays(inst_153884,inst_153885);
var inst_153887 = klipse.lang.clojure.result_as_str.call(null,inst_153883,inst_153886);
var inst_153888 = cljs.core.second.call(null,inst_153887);
var inst_153889 = cljs.core.List.EMPTY;
var inst_153890 = cljs.core._conj.call(null,inst_153889,"ab");
var inst_153891__$1 = cljs.core._conj.call(null,inst_153890,inst_153888);
var inst_153892__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153891__$1);
var state_154101__$1 = (function (){var statearr_154159 = state_154101;
(statearr_154159[(28)] = inst_153892__$1);

(statearr_154159[(25)] = inst_153891__$1);

return statearr_154159;
})();
if(cljs.core.truth_(inst_153892__$1)){
var statearr_154160_154610 = state_154101__$1;
(statearr_154160_154610[(1)] = (17));

} else {
var statearr_154161_154611 = state_154101__$1;
(statearr_154161_154611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (38))){
var inst_154098 = (state_154101[(2)]);
var inst_154099 = done.call(null);
var state_154101__$1 = (function (){var statearr_154162 = state_154101;
(statearr_154162[(32)] = inst_154098);

return statearr_154162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154101__$1,inst_154099);
} else {
if((state_val_154102 === (30))){
var inst_153985 = (state_154101[(22)]);
var inst_153995 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153996 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_153997 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153998 = cljs.core.cons.call(null,inst_153997,inst_153985);
var inst_153999 = cljs.core.List.EMPTY;
var inst_154000 = cljs.core._conj.call(null,inst_153999,inst_153998);
var inst_154001 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154002 = cljs.core._conj.call(null,inst_154000,inst_154001);
var inst_154003 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153996,inst_154002,null];
var inst_154004 = cljs.core.PersistentHashMap.fromArrays(inst_153995,inst_154003);
var inst_154005 = cljs.test.do_report.call(null,inst_154004);
var state_154101__$1 = state_154101;
var statearr_154163_154612 = state_154101__$1;
(statearr_154163_154612[(2)] = inst_154005);

(statearr_154163_154612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (10))){
var inst_153848 = (state_154101[(17)]);
var inst_153847 = (state_154101[(26)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154101,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_153837 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_153838 = [true,"\n1"];
var inst_153839 = cljs.core.PersistentHashMap.fromArrays(inst_153837,inst_153838);
var inst_153840 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_153841 = [true,(2)];
var inst_153842 = cljs.core.PersistentHashMap.fromArrays(inst_153840,inst_153841);
var inst_153843 = klipse.lang.clojure.result_as_str.call(null,inst_153839,inst_153842);
var inst_153844 = cljs.core.second.call(null,inst_153843);
var inst_153845 = cljs.core.List.EMPTY;
var inst_153846 = cljs.core._conj.call(null,inst_153845,"\n1");
var inst_153847__$1 = cljs.core._conj.call(null,inst_153846,inst_153844);
var inst_153848__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_153847__$1);
var state_154101__$1 = (function (){var statearr_154164 = state_154101;
(statearr_154164[(17)] = inst_153848__$1);

(statearr_154164[(26)] = inst_153847__$1);

return statearr_154164;
})();
if(cljs.core.truth_(inst_153848__$1)){
var statearr_154165_154613 = state_154101__$1;
(statearr_154165_154613[(1)] = (11));

} else {
var statearr_154166_154614 = state_154101__$1;
(statearr_154166_154614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (18))){
var inst_153891 = (state_154101[(25)]);
var inst_153901 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_153902 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_153903 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_153904 = cljs.core.cons.call(null,inst_153903,inst_153891);
var inst_153905 = cljs.core.List.EMPTY;
var inst_153906 = cljs.core._conj.call(null,inst_153905,inst_153904);
var inst_153907 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_153908 = cljs.core._conj.call(null,inst_153906,inst_153907);
var inst_153909 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_153902,inst_153908,null];
var inst_153910 = cljs.core.PersistentHashMap.fromArrays(inst_153901,inst_153909);
var inst_153911 = cljs.test.do_report.call(null,inst_153910);
var state_154101__$1 = state_154101;
var statearr_154167_154615 = state_154101__$1;
(statearr_154167_154615[(2)] = inst_153911);

(statearr_154167_154615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (42))){
var inst_154074 = (state_154101[(15)]);
var inst_154084 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154085 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154086 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154087 = cljs.core.cons.call(null,inst_154086,inst_154074);
var inst_154088 = cljs.core.List.EMPTY;
var inst_154089 = cljs.core._conj.call(null,inst_154088,inst_154087);
var inst_154090 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154091 = cljs.core._conj.call(null,inst_154089,inst_154090);
var inst_154092 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154085,inst_154091,null];
var inst_154093 = cljs.core.PersistentHashMap.fromArrays(inst_154084,inst_154092);
var inst_154094 = cljs.test.do_report.call(null,inst_154093);
var state_154101__$1 = state_154101;
var statearr_154168_154616 = state_154101__$1;
(statearr_154168_154616[(2)] = inst_154094);

(statearr_154168_154616[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (37))){
var inst_154030 = (state_154101[(24)]);
var inst_154051 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154169 = state_154101;
(statearr_154169[(33)] = inst_154051);

return statearr_154169;
})();
var statearr_154170_154617 = state_154101__$1;
(statearr_154170_154617[(2)] = inst_154030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154102 === (8))){
var inst_153871 = (state_154101[(2)]);
var state_154101__$1 = (function (){var statearr_154171 = state_154101;
(statearr_154171[(34)] = inst_153871);

return statearr_154171;
})();
var statearr_154172_154618 = state_154101__$1;
(statearr_154172_154618[(2)] = null);

(statearr_154172_154618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_154173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_154173[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_154173[(1)] = (1));

return statearr_154173;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_154101){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_154101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e154174){if((e154174 instanceof Object)){
var ex__13458__auto__ = e154174;
var statearr_154175_154619 = state_154101;
(statearr_154175_154619[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154620 = state_154101;
state_154101 = G__154620;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_154101){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_154101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_154176 = f__13545__auto__.call(null);
(statearr_154176[(6)] = c__13544__auto__);

return statearr_154176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.apply = (function (self__,args153783){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args153783)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval153780.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_154494){
var state_val_154495 = (state_154494[(1)]);
if((state_val_154495 === (7))){
var inst_154197 = (state_154494[(7)]);
var inst_154218 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154496 = state_154494;
(statearr_154496[(8)] = inst_154218);

return statearr_154496;
})();
var statearr_154497_154621 = state_154494__$1;
(statearr_154497_154621[(2)] = inst_154197);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (20))){
var inst_154355 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154498 = state_154494;
(statearr_154498[(9)] = inst_154355);

return statearr_154498;
})();
var statearr_154499_154622 = state_154494__$1;
(statearr_154499_154622[(2)] = null);

(statearr_154499_154622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (27))){
var inst_154356 = (state_154494[(2)]);
var inst_154357 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154358 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154359 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154358,inst_154356,null];
var inst_154360 = cljs.core.PersistentHashMap.fromArrays(inst_154357,inst_154359);
var inst_154361 = cljs.test.do_report.call(null,inst_154360);
var state_154494__$1 = state_154494;
var statearr_154500_154623 = state_154494__$1;
(statearr_154500_154623[(2)] = inst_154361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (1))){
var state_154494__$1 = state_154494;
var statearr_154501_154624 = state_154494__$1;
(statearr_154501_154624[(2)] = null);

(statearr_154501_154624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (24))){
var inst_154331 = (state_154494[(10)]);
var inst_154341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154342 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154343 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154344 = cljs.core.cons.call(null,inst_154343,inst_154331);
var inst_154345 = cljs.core.List.EMPTY;
var inst_154346 = cljs.core._conj.call(null,inst_154345,inst_154344);
var inst_154347 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154348 = cljs.core._conj.call(null,inst_154346,inst_154347);
var inst_154349 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154342,inst_154348,null];
var inst_154350 = cljs.core.PersistentHashMap.fromArrays(inst_154341,inst_154349);
var inst_154351 = cljs.test.do_report.call(null,inst_154350);
var state_154494__$1 = state_154494;
var statearr_154502_154625 = state_154494__$1;
(statearr_154502_154625[(2)] = inst_154351);

(statearr_154502_154625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (39))){
var inst_154447 = (state_154494[(2)]);
var inst_154448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154449 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154450 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154449,inst_154447,null];
var inst_154451 = cljs.core.PersistentHashMap.fromArrays(inst_154448,inst_154450);
var inst_154452 = cljs.test.do_report.call(null,inst_154451);
var state_154494__$1 = state_154494;
var statearr_154503_154626 = state_154494__$1;
(statearr_154503_154626[(2)] = inst_154452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (4))){
var inst_154197 = (state_154494[(7)]);
var inst_154196 = (state_154494[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_154186 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154187 = [true,null];
var inst_154188 = cljs.core.PersistentHashMap.fromArrays(inst_154186,inst_154187);
var inst_154189 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154190 = [true,(2)];
var inst_154191 = cljs.core.PersistentHashMap.fromArrays(inst_154189,inst_154190);
var inst_154192 = klipse.lang.clojure.result_as_str.call(null,inst_154188,inst_154191);
var inst_154193 = cljs.core.second.call(null,inst_154192);
var inst_154194 = cljs.core.List.EMPTY;
var inst_154195 = cljs.core._conj.call(null,inst_154194,"nil");
var inst_154196__$1 = cljs.core._conj.call(null,inst_154195,inst_154193);
var inst_154197__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154196__$1);
var state_154494__$1 = (function (){var statearr_154504 = state_154494;
(statearr_154504[(7)] = inst_154197__$1);

(statearr_154504[(11)] = inst_154196__$1);

return statearr_154504;
})();
if(cljs.core.truth_(inst_154197__$1)){
var statearr_154505_154627 = state_154494__$1;
(statearr_154505_154627[(1)] = (5));

} else {
var statearr_154506_154628 = state_154494__$1;
(statearr_154506_154628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (15))){
var inst_154265 = (state_154494[(2)]);
var inst_154266 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154267 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_154268 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154267,inst_154265,null];
var inst_154269 = cljs.core.PersistentHashMap.fromArrays(inst_154266,inst_154268);
var inst_154270 = cljs.test.do_report.call(null,inst_154269);
var state_154494__$1 = state_154494;
var statearr_154507_154629 = state_154494__$1;
(statearr_154507_154629[(2)] = inst_154270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (21))){
var inst_154309 = (state_154494[(2)]);
var inst_154310 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154311 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154312 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154311,inst_154309,null];
var inst_154313 = cljs.core.PersistentHashMap.fromArrays(inst_154310,inst_154312);
var inst_154314 = cljs.test.do_report.call(null,inst_154313);
var state_154494__$1 = state_154494;
var statearr_154508_154630 = state_154494__$1;
(statearr_154508_154630[(2)] = inst_154314);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (31))){
var inst_154379 = (state_154494[(12)]);
var inst_154400 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154509 = state_154494;
(statearr_154509[(13)] = inst_154400);

return statearr_154509;
})();
var statearr_154510_154631 = state_154494__$1;
(statearr_154510_154631[(2)] = inst_154379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (32))){
var inst_154446 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154511 = state_154494;
(statearr_154511[(14)] = inst_154446);

return statearr_154511;
})();
var statearr_154512_154632 = state_154494__$1;
(statearr_154512_154632[(2)] = null);

(statearr_154512_154632[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (40))){
var inst_154468 = (state_154494[(15)]);
var inst_154467 = (state_154494[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_154456 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154457 = cljs.core.range.call(null);
var inst_154458 = [true,inst_154457];
var inst_154459 = cljs.core.PersistentHashMap.fromArrays(inst_154456,inst_154458);
var inst_154460 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154461 = [true,(2)];
var inst_154462 = cljs.core.PersistentHashMap.fromArrays(inst_154460,inst_154461);
var inst_154463 = klipse.lang.clojure.result_as_str.call(null,inst_154459,inst_154462);
var inst_154464 = cljs.core.second.call(null,inst_154463);
var inst_154465 = cljs.core.List.EMPTY;
var inst_154466 = cljs.core._conj.call(null,inst_154465,"(0 1 ...)");
var inst_154467__$1 = cljs.core._conj.call(null,inst_154466,inst_154464);
var inst_154468__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154467__$1);
var state_154494__$1 = (function (){var statearr_154513 = state_154494;
(statearr_154513[(15)] = inst_154468__$1);

(statearr_154513[(16)] = inst_154467__$1);

return statearr_154513;
})();
if(cljs.core.truth_(inst_154468__$1)){
var statearr_154514_154633 = state_154494__$1;
(statearr_154514_154633[(1)] = (41));

} else {
var statearr_154515_154634 = state_154494__$1;
(statearr_154515_154634[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (33))){
var inst_154403 = (state_154494[(2)]);
var inst_154404 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154405 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154406 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154405,inst_154403,null];
var inst_154407 = cljs.core.PersistentHashMap.fromArrays(inst_154404,inst_154406);
var inst_154408 = cljs.test.do_report.call(null,inst_154407);
var state_154494__$1 = state_154494;
var statearr_154516_154635 = state_154494__$1;
(statearr_154516_154635[(2)] = inst_154408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (13))){
var inst_154241 = (state_154494[(17)]);
var inst_154262 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154517 = state_154494;
(statearr_154517[(18)] = inst_154262);

return statearr_154517;
})();
var statearr_154518_154636 = state_154494__$1;
(statearr_154518_154636[(2)] = inst_154241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (22))){
var inst_154332 = (state_154494[(19)]);
var inst_154331 = (state_154494[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_154318 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_154320 = [(1),(2)];
var inst_154321 = (new cljs.core.PersistentVector(null,2,(5),inst_154319,inst_154320,null));
var inst_154322 = [true,inst_154321];
var inst_154323 = cljs.core.PersistentHashMap.fromArrays(inst_154318,inst_154322);
var inst_154324 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154325 = [true,(2)];
var inst_154326 = cljs.core.PersistentHashMap.fromArrays(inst_154324,inst_154325);
var inst_154327 = klipse.lang.clojure.result_as_str.call(null,inst_154323,inst_154326);
var inst_154328 = cljs.core.second.call(null,inst_154327);
var inst_154329 = cljs.core.List.EMPTY;
var inst_154330 = cljs.core._conj.call(null,inst_154329,"[1 2]");
var inst_154331__$1 = cljs.core._conj.call(null,inst_154330,inst_154328);
var inst_154332__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154331__$1);
var state_154494__$1 = (function (){var statearr_154519 = state_154494;
(statearr_154519[(19)] = inst_154332__$1);

(statearr_154519[(10)] = inst_154331__$1);

return statearr_154519;
})();
if(cljs.core.truth_(inst_154332__$1)){
var statearr_154520_154637 = state_154494__$1;
(statearr_154520_154637[(1)] = (23));

} else {
var statearr_154521_154638 = state_154494__$1;
(statearr_154521_154638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (36))){
var inst_154422 = (state_154494[(20)]);
var inst_154432 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154433 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154434 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154435 = cljs.core.cons.call(null,inst_154434,inst_154422);
var inst_154436 = cljs.core.List.EMPTY;
var inst_154437 = cljs.core._conj.call(null,inst_154436,inst_154435);
var inst_154438 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154439 = cljs.core._conj.call(null,inst_154437,inst_154438);
var inst_154440 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154433,inst_154439,null];
var inst_154441 = cljs.core.PersistentHashMap.fromArrays(inst_154432,inst_154440);
var inst_154442 = cljs.test.do_report.call(null,inst_154441);
var state_154494__$1 = state_154494;
var statearr_154522_154639 = state_154494__$1;
(statearr_154522_154639[(2)] = inst_154442);

(statearr_154522_154639[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (41))){
var inst_154467 = (state_154494[(16)]);
var inst_154470 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154471 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154472 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154467);
var inst_154473 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154471,inst_154472,null];
var inst_154474 = cljs.core.PersistentHashMap.fromArrays(inst_154470,inst_154473);
var inst_154475 = cljs.test.do_report.call(null,inst_154474);
var state_154494__$1 = state_154494;
var statearr_154523_154640 = state_154494__$1;
(statearr_154523_154640[(2)] = inst_154475);

(statearr_154523_154640[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (43))){
var inst_154468 = (state_154494[(15)]);
var inst_154489 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154524 = state_154494;
(statearr_154524[(21)] = inst_154489);

return statearr_154524;
})();
var statearr_154525_154641 = state_154494__$1;
(statearr_154525_154641[(2)] = inst_154468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (29))){
var inst_154378 = (state_154494[(22)]);
var inst_154381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154382 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154383 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154378);
var inst_154384 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154382,inst_154383,null];
var inst_154385 = cljs.core.PersistentHashMap.fromArrays(inst_154381,inst_154384);
var inst_154386 = cljs.test.do_report.call(null,inst_154385);
var state_154494__$1 = state_154494;
var statearr_154526_154642 = state_154494__$1;
(statearr_154526_154642[(2)] = inst_154386);

(statearr_154526_154642[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (6))){
var inst_154196 = (state_154494[(11)]);
var inst_154206 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154207 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154208 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154209 = cljs.core.cons.call(null,inst_154208,inst_154196);
var inst_154210 = cljs.core.List.EMPTY;
var inst_154211 = cljs.core._conj.call(null,inst_154210,inst_154209);
var inst_154212 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154213 = cljs.core._conj.call(null,inst_154211,inst_154212);
var inst_154214 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154207,inst_154213,null];
var inst_154215 = cljs.core.PersistentHashMap.fromArrays(inst_154206,inst_154214);
var inst_154216 = cljs.test.do_report.call(null,inst_154215);
var state_154494__$1 = state_154494;
var statearr_154527_154643 = state_154494__$1;
(statearr_154527_154643[(2)] = inst_154216);

(statearr_154527_154643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (28))){
var inst_154378 = (state_154494[(22)]);
var inst_154379 = (state_154494[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_154365 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_154367 = [(1),(2),(3),(4),(5)];
var inst_154368 = (new cljs.core.PersistentVector(null,5,(5),inst_154366,inst_154367,null));
var inst_154369 = [true,inst_154368];
var inst_154370 = cljs.core.PersistentHashMap.fromArrays(inst_154365,inst_154369);
var inst_154371 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154372 = [true,(2)];
var inst_154373 = cljs.core.PersistentHashMap.fromArrays(inst_154371,inst_154372);
var inst_154374 = klipse.lang.clojure.result_as_str.call(null,inst_154370,inst_154373);
var inst_154375 = cljs.core.second.call(null,inst_154374);
var inst_154376 = cljs.core.List.EMPTY;
var inst_154377 = cljs.core._conj.call(null,inst_154376,"[1 2 ...]");
var inst_154378__$1 = cljs.core._conj.call(null,inst_154377,inst_154375);
var inst_154379__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154378__$1);
var state_154494__$1 = (function (){var statearr_154528 = state_154494;
(statearr_154528[(22)] = inst_154378__$1);

(statearr_154528[(12)] = inst_154379__$1);

return statearr_154528;
})();
if(cljs.core.truth_(inst_154379__$1)){
var statearr_154529_154644 = state_154494__$1;
(statearr_154529_154644[(1)] = (29));

} else {
var statearr_154530_154645 = state_154494__$1;
(statearr_154530_154645[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (25))){
var inst_154332 = (state_154494[(19)]);
var inst_154353 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154531 = state_154494;
(statearr_154531[(23)] = inst_154353);

return statearr_154531;
})();
var statearr_154532_154646 = state_154494__$1;
(statearr_154532_154646[(2)] = inst_154332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (34))){
var inst_154422 = (state_154494[(20)]);
var inst_154423 = (state_154494[(24)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_154412 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154413 = [true,"abcdef"];
var inst_154414 = cljs.core.PersistentHashMap.fromArrays(inst_154412,inst_154413);
var inst_154415 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154416 = [true,(2)];
var inst_154417 = cljs.core.PersistentHashMap.fromArrays(inst_154415,inst_154416);
var inst_154418 = klipse.lang.clojure.result_as_str.call(null,inst_154414,inst_154417);
var inst_154419 = cljs.core.second.call(null,inst_154418);
var inst_154420 = cljs.core.List.EMPTY;
var inst_154421 = cljs.core._conj.call(null,inst_154420,"abcdef");
var inst_154422__$1 = cljs.core._conj.call(null,inst_154421,inst_154419);
var inst_154423__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154422__$1);
var state_154494__$1 = (function (){var statearr_154533 = state_154494;
(statearr_154533[(20)] = inst_154422__$1);

(statearr_154533[(24)] = inst_154423__$1);

return statearr_154533;
})();
if(cljs.core.truth_(inst_154423__$1)){
var statearr_154534_154647 = state_154494__$1;
(statearr_154534_154647[(1)] = (35));

} else {
var statearr_154535_154648 = state_154494__$1;
(statearr_154535_154648[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (17))){
var inst_154284 = (state_154494[(25)]);
var inst_154287 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154288 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_154289 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154284);
var inst_154290 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154288,inst_154289,null];
var inst_154291 = cljs.core.PersistentHashMap.fromArrays(inst_154287,inst_154290);
var inst_154292 = cljs.test.do_report.call(null,inst_154291);
var state_154494__$1 = state_154494;
var statearr_154536_154649 = state_154494__$1;
(statearr_154536_154649[(2)] = inst_154292);

(statearr_154536_154649[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (3))){
var inst_154177 = (state_154494[(2)]);
var inst_154178 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154179 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154180 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154179,inst_154177,null];
var inst_154181 = cljs.core.PersistentHashMap.fromArrays(inst_154178,inst_154180);
var inst_154182 = cljs.test.do_report.call(null,inst_154181);
var state_154494__$1 = state_154494;
var statearr_154537_154650 = state_154494__$1;
(statearr_154537_154650[(2)] = inst_154182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (12))){
var inst_154240 = (state_154494[(26)]);
var inst_154250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154251 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_154252 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154253 = cljs.core.cons.call(null,inst_154252,inst_154240);
var inst_154254 = cljs.core.List.EMPTY;
var inst_154255 = cljs.core._conj.call(null,inst_154254,inst_154253);
var inst_154256 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154257 = cljs.core._conj.call(null,inst_154255,inst_154256);
var inst_154258 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154251,inst_154257,null];
var inst_154259 = cljs.core.PersistentHashMap.fromArrays(inst_154250,inst_154258);
var inst_154260 = cljs.test.do_report.call(null,inst_154259);
var state_154494__$1 = state_154494;
var statearr_154538_154651 = state_154494__$1;
(statearr_154538_154651[(2)] = inst_154260);

(statearr_154538_154651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (2))){
var inst_154220 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154539 = state_154494;
(statearr_154539[(27)] = inst_154220);

return statearr_154539;
})();
var statearr_154540_154652 = state_154494__$1;
(statearr_154540_154652[(2)] = null);

(statearr_154540_154652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (23))){
var inst_154331 = (state_154494[(10)]);
var inst_154334 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154335 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154336 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154331);
var inst_154337 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154335,inst_154336,null];
var inst_154338 = cljs.core.PersistentHashMap.fromArrays(inst_154334,inst_154337);
var inst_154339 = cljs.test.do_report.call(null,inst_154338);
var state_154494__$1 = state_154494;
var statearr_154541_154653 = state_154494__$1;
(statearr_154541_154653[(2)] = inst_154339);

(statearr_154541_154653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (35))){
var inst_154422 = (state_154494[(20)]);
var inst_154425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154426 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_154427 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154422);
var inst_154428 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154426,inst_154427,null];
var inst_154429 = cljs.core.PersistentHashMap.fromArrays(inst_154425,inst_154428);
var inst_154430 = cljs.test.do_report.call(null,inst_154429);
var state_154494__$1 = state_154494;
var statearr_154542_154654 = state_154494__$1;
(statearr_154542_154654[(2)] = inst_154430);

(statearr_154542_154654[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (19))){
var inst_154285 = (state_154494[(28)]);
var inst_154306 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154543 = state_154494;
(statearr_154543[(29)] = inst_154306);

return statearr_154543;
})();
var statearr_154544_154655 = state_154494__$1;
(statearr_154544_154655[(2)] = inst_154285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (11))){
var inst_154240 = (state_154494[(26)]);
var inst_154243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154244 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_154245 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154240);
var inst_154246 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154244,inst_154245,null];
var inst_154247 = cljs.core.PersistentHashMap.fromArrays(inst_154243,inst_154246);
var inst_154248 = cljs.test.do_report.call(null,inst_154247);
var state_154494__$1 = state_154494;
var statearr_154545_154656 = state_154494__$1;
(statearr_154545_154656[(2)] = inst_154248);

(statearr_154545_154656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (9))){
var inst_154221 = (state_154494[(2)]);
var inst_154222 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154223 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_154224 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154223,inst_154221,null];
var inst_154225 = cljs.core.PersistentHashMap.fromArrays(inst_154222,inst_154224);
var inst_154226 = cljs.test.do_report.call(null,inst_154225);
var state_154494__$1 = state_154494;
var statearr_154546_154657 = state_154494__$1;
(statearr_154546_154657[(2)] = inst_154226);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (5))){
var inst_154196 = (state_154494[(11)]);
var inst_154199 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154200 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154201 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154196);
var inst_154202 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154200,inst_154201,null];
var inst_154203 = cljs.core.PersistentHashMap.fromArrays(inst_154199,inst_154202);
var inst_154204 = cljs.test.do_report.call(null,inst_154203);
var state_154494__$1 = state_154494;
var statearr_154547_154658 = state_154494__$1;
(statearr_154547_154658[(2)] = inst_154204);

(statearr_154547_154658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (14))){
var inst_154308 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154548 = state_154494;
(statearr_154548[(30)] = inst_154308);

return statearr_154548;
})();
var statearr_154549_154659 = state_154494__$1;
(statearr_154549_154659[(2)] = null);

(statearr_154549_154659[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (26))){
var inst_154402 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154550 = state_154494;
(statearr_154550[(31)] = inst_154402);

return statearr_154550;
})();
var statearr_154551_154660 = state_154494__$1;
(statearr_154551_154660[(2)] = null);

(statearr_154551_154660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (16))){
var inst_154284 = (state_154494[(25)]);
var inst_154285 = (state_154494[(28)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_154274 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154275 = [true,"ab"];
var inst_154276 = cljs.core.PersistentHashMap.fromArrays(inst_154274,inst_154275);
var inst_154277 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154278 = [true,(2)];
var inst_154279 = cljs.core.PersistentHashMap.fromArrays(inst_154277,inst_154278);
var inst_154280 = klipse.lang.clojure.result_as_str.call(null,inst_154276,inst_154279);
var inst_154281 = cljs.core.second.call(null,inst_154280);
var inst_154282 = cljs.core.List.EMPTY;
var inst_154283 = cljs.core._conj.call(null,inst_154282,"ab");
var inst_154284__$1 = cljs.core._conj.call(null,inst_154283,inst_154281);
var inst_154285__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154284__$1);
var state_154494__$1 = (function (){var statearr_154552 = state_154494;
(statearr_154552[(25)] = inst_154284__$1);

(statearr_154552[(28)] = inst_154285__$1);

return statearr_154552;
})();
if(cljs.core.truth_(inst_154285__$1)){
var statearr_154553_154661 = state_154494__$1;
(statearr_154553_154661[(1)] = (17));

} else {
var statearr_154554_154662 = state_154494__$1;
(statearr_154554_154662[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (38))){
var inst_154491 = (state_154494[(2)]);
var inst_154492 = done.call(null);
var state_154494__$1 = (function (){var statearr_154555 = state_154494;
(statearr_154555[(32)] = inst_154491);

return statearr_154555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154494__$1,inst_154492);
} else {
if((state_val_154495 === (30))){
var inst_154378 = (state_154494[(22)]);
var inst_154388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154389 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154390 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154391 = cljs.core.cons.call(null,inst_154390,inst_154378);
var inst_154392 = cljs.core.List.EMPTY;
var inst_154393 = cljs.core._conj.call(null,inst_154392,inst_154391);
var inst_154394 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154395 = cljs.core._conj.call(null,inst_154393,inst_154394);
var inst_154396 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154389,inst_154395,null];
var inst_154397 = cljs.core.PersistentHashMap.fromArrays(inst_154388,inst_154396);
var inst_154398 = cljs.test.do_report.call(null,inst_154397);
var state_154494__$1 = state_154494;
var statearr_154556_154663 = state_154494__$1;
(statearr_154556_154663[(2)] = inst_154398);

(statearr_154556_154663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (10))){
var inst_154240 = (state_154494[(26)]);
var inst_154241 = (state_154494[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154494,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_154230 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154231 = [true,"\n1"];
var inst_154232 = cljs.core.PersistentHashMap.fromArrays(inst_154230,inst_154231);
var inst_154233 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154234 = [true,(2)];
var inst_154235 = cljs.core.PersistentHashMap.fromArrays(inst_154233,inst_154234);
var inst_154236 = klipse.lang.clojure.result_as_str.call(null,inst_154232,inst_154235);
var inst_154237 = cljs.core.second.call(null,inst_154236);
var inst_154238 = cljs.core.List.EMPTY;
var inst_154239 = cljs.core._conj.call(null,inst_154238,"\n1");
var inst_154240__$1 = cljs.core._conj.call(null,inst_154239,inst_154237);
var inst_154241__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154240__$1);
var state_154494__$1 = (function (){var statearr_154557 = state_154494;
(statearr_154557[(26)] = inst_154240__$1);

(statearr_154557[(17)] = inst_154241__$1);

return statearr_154557;
})();
if(cljs.core.truth_(inst_154241__$1)){
var statearr_154558_154664 = state_154494__$1;
(statearr_154558_154664[(1)] = (11));

} else {
var statearr_154559_154665 = state_154494__$1;
(statearr_154559_154665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (18))){
var inst_154284 = (state_154494[(25)]);
var inst_154294 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154295 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_154296 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154297 = cljs.core.cons.call(null,inst_154296,inst_154284);
var inst_154298 = cljs.core.List.EMPTY;
var inst_154299 = cljs.core._conj.call(null,inst_154298,inst_154297);
var inst_154300 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154301 = cljs.core._conj.call(null,inst_154299,inst_154300);
var inst_154302 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154295,inst_154301,null];
var inst_154303 = cljs.core.PersistentHashMap.fromArrays(inst_154294,inst_154302);
var inst_154304 = cljs.test.do_report.call(null,inst_154303);
var state_154494__$1 = state_154494;
var statearr_154560_154666 = state_154494__$1;
(statearr_154560_154666[(2)] = inst_154304);

(statearr_154560_154666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (42))){
var inst_154467 = (state_154494[(16)]);
var inst_154477 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154478 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154479 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154480 = cljs.core.cons.call(null,inst_154479,inst_154467);
var inst_154481 = cljs.core.List.EMPTY;
var inst_154482 = cljs.core._conj.call(null,inst_154481,inst_154480);
var inst_154483 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154484 = cljs.core._conj.call(null,inst_154482,inst_154483);
var inst_154485 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154478,inst_154484,null];
var inst_154486 = cljs.core.PersistentHashMap.fromArrays(inst_154477,inst_154485);
var inst_154487 = cljs.test.do_report.call(null,inst_154486);
var state_154494__$1 = state_154494;
var statearr_154561_154667 = state_154494__$1;
(statearr_154561_154667[(2)] = inst_154487);

(statearr_154561_154667[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (37))){
var inst_154423 = (state_154494[(24)]);
var inst_154444 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154562 = state_154494;
(statearr_154562[(33)] = inst_154444);

return statearr_154562;
})();
var statearr_154563_154668 = state_154494__$1;
(statearr_154563_154668[(2)] = inst_154423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154495 === (8))){
var inst_154264 = (state_154494[(2)]);
var state_154494__$1 = (function (){var statearr_154564 = state_154494;
(statearr_154564[(34)] = inst_154264);

return statearr_154564;
})();
var statearr_154565_154669 = state_154494__$1;
(statearr_154565_154669[(2)] = null);

(statearr_154565_154669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_154566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_154566[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_154566[(1)] = (1));

return statearr_154566;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_154494){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_154494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e154567){if((e154567 instanceof Object)){
var ex__13458__auto__ = e154567;
var statearr_154568_154670 = state_154494;
(statearr_154568_154670[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154671 = state_154494;
state_154494 = G__154671;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_154494){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_154494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_154569 = f__13545__auto__.call(null);
(statearr_154569[(6)] = c__13544__auto__);

return statearr_154569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval153780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta153781","meta153781",823577150,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval153780.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval153780.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval153780";

klipse.cards.test.eval.t_klipse$cards$test$eval153780.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval153780");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval153780 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval153780(meta153781){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval153780(meta153781));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval153780(null));
});

klipse.cards.test.eval.display_evaluation_and_beautify.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.display_evaluation_and_beautify;},new cljs.core.Symbol("klipse.cards.test.eval","display-evaluation-and-beautify","klipse.cards.test.eval/display-evaluation-and-beautify",-1042318113,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"display-evaluation-and-beautify","display-evaluation-and-beautify",-1975511930,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",41,1,130,130,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.display_evaluation_and_beautify)?klipse.cards.test.eval.display_evaluation_and_beautify.cljs$lang$test:null)]));

klipse.cards.test.eval.display_evaluation_and_crop = (function klipse$cards$test$eval$display_evaluation_and_crop(){
return cljs.test.test_var.call(null,klipse.cards.test.eval.display_evaluation_and_crop.cljs$lang$var);
});
klipse.cards.test.eval.display_evaluation_and_crop.cljs$lang$test = (function (){

if(typeof klipse.cards.test.eval.t_klipse$cards$test$eval154672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.eval.t_klipse$cards$test$eval154672 = (function (meta154673){
this.meta154673 = meta154673;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154674,meta154673__$1){
var self__ = this;
var _154674__$1 = this;
return (new klipse.cards.test.eval.t_klipse$cards$test$eval154672(meta154673__$1));
});


klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154674){
var self__ = this;
var _154674__$1 = this;
return self__.meta154673;
});


klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_154993){
var state_val_154994 = (state_154993[(1)]);
if((state_val_154994 === (7))){
var inst_154696 = (state_154993[(7)]);
var inst_154717 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_154995 = state_154993;
(statearr_154995[(8)] = inst_154717);

return statearr_154995;
})();
var statearr_154996_155462 = state_154993__$1;
(statearr_154996_155462[(2)] = inst_154696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (20))){
var inst_154854 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_154997 = state_154993;
(statearr_154997[(9)] = inst_154854);

return statearr_154997;
})();
var statearr_154998_155463 = state_154993__$1;
(statearr_154998_155463[(2)] = null);

(statearr_154998_155463[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (27))){
var inst_154855 = (state_154993[(2)]);
var inst_154856 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154857 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154858 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154857,inst_154855,null];
var inst_154859 = cljs.core.PersistentHashMap.fromArrays(inst_154856,inst_154858);
var inst_154860 = cljs.test.do_report.call(null,inst_154859);
var state_154993__$1 = state_154993;
var statearr_154999_155464 = state_154993__$1;
(statearr_154999_155464[(2)] = inst_154860);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (1))){
var state_154993__$1 = state_154993;
var statearr_155000_155465 = state_154993__$1;
(statearr_155000_155465[(2)] = null);

(statearr_155000_155465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (24))){
var inst_154830 = (state_154993[(10)]);
var inst_154840 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154841 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154842 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154843 = cljs.core.cons.call(null,inst_154842,inst_154830);
var inst_154844 = cljs.core.List.EMPTY;
var inst_154845 = cljs.core._conj.call(null,inst_154844,inst_154843);
var inst_154846 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154847 = cljs.core._conj.call(null,inst_154845,inst_154846);
var inst_154848 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154841,inst_154847,null];
var inst_154849 = cljs.core.PersistentHashMap.fromArrays(inst_154840,inst_154848);
var inst_154850 = cljs.test.do_report.call(null,inst_154849);
var state_154993__$1 = state_154993;
var statearr_155001_155466 = state_154993__$1;
(statearr_155001_155466[(2)] = inst_154850);

(statearr_155001_155466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (39))){
var inst_154946 = (state_154993[(2)]);
var inst_154947 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154948 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154949 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154948,inst_154946,null];
var inst_154950 = cljs.core.PersistentHashMap.fromArrays(inst_154947,inst_154949);
var inst_154951 = cljs.test.do_report.call(null,inst_154950);
var state_154993__$1 = state_154993;
var statearr_155002_155467 = state_154993__$1;
(statearr_155002_155467[(2)] = inst_154951);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (4))){
var inst_154695 = (state_154993[(11)]);
var inst_154696 = (state_154993[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_154685 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154686 = [true,null];
var inst_154687 = cljs.core.PersistentHashMap.fromArrays(inst_154685,inst_154686);
var inst_154688 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154689 = [(2)];
var inst_154690 = cljs.core.PersistentHashMap.fromArrays(inst_154688,inst_154689);
var inst_154691 = klipse.lang.clojure.result_as_str.call(null,inst_154687,inst_154690);
var inst_154692 = cljs.core.second.call(null,inst_154691);
var inst_154693 = cljs.core.List.EMPTY;
var inst_154694 = cljs.core._conj.call(null,inst_154693,"nil");
var inst_154695__$1 = cljs.core._conj.call(null,inst_154694,inst_154692);
var inst_154696__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154695__$1);
var state_154993__$1 = (function (){var statearr_155003 = state_154993;
(statearr_155003[(11)] = inst_154695__$1);

(statearr_155003[(7)] = inst_154696__$1);

return statearr_155003;
})();
if(cljs.core.truth_(inst_154696__$1)){
var statearr_155004_155468 = state_154993__$1;
(statearr_155004_155468[(1)] = (5));

} else {
var statearr_155005_155469 = state_154993__$1;
(statearr_155005_155469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (15))){
var inst_154764 = (state_154993[(2)]);
var inst_154765 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154766 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_154767 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154766,inst_154764,null];
var inst_154768 = cljs.core.PersistentHashMap.fromArrays(inst_154765,inst_154767);
var inst_154769 = cljs.test.do_report.call(null,inst_154768);
var state_154993__$1 = state_154993;
var statearr_155006_155470 = state_154993__$1;
(statearr_155006_155470[(2)] = inst_154769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (21))){
var inst_154808 = (state_154993[(2)]);
var inst_154809 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154810 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154811 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154810,inst_154808,null];
var inst_154812 = cljs.core.PersistentHashMap.fromArrays(inst_154809,inst_154811);
var inst_154813 = cljs.test.do_report.call(null,inst_154812);
var state_154993__$1 = state_154993;
var statearr_155007_155471 = state_154993__$1;
(statearr_155007_155471[(2)] = inst_154813);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (31))){
var inst_154878 = (state_154993[(12)]);
var inst_154899 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155008 = state_154993;
(statearr_155008[(13)] = inst_154899);

return statearr_155008;
})();
var statearr_155009_155472 = state_154993__$1;
(statearr_155009_155472[(2)] = inst_154878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (32))){
var inst_154945 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155010 = state_154993;
(statearr_155010[(14)] = inst_154945);

return statearr_155010;
})();
var statearr_155011_155473 = state_154993__$1;
(statearr_155011_155473[(2)] = null);

(statearr_155011_155473[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (40))){
var inst_154966 = (state_154993[(15)]);
var inst_154967 = (state_154993[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_154955 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154956 = cljs.core.range.call(null);
var inst_154957 = [true,inst_154956];
var inst_154958 = cljs.core.PersistentHashMap.fromArrays(inst_154955,inst_154957);
var inst_154959 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154960 = [(2)];
var inst_154961 = cljs.core.PersistentHashMap.fromArrays(inst_154959,inst_154960);
var inst_154962 = klipse.lang.clojure.result_as_str.call(null,inst_154958,inst_154961);
var inst_154963 = cljs.core.second.call(null,inst_154962);
var inst_154964 = cljs.core.List.EMPTY;
var inst_154965 = cljs.core._conj.call(null,inst_154964,"(0 1 ...)");
var inst_154966__$1 = cljs.core._conj.call(null,inst_154965,inst_154963);
var inst_154967__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154966__$1);
var state_154993__$1 = (function (){var statearr_155012 = state_154993;
(statearr_155012[(15)] = inst_154966__$1);

(statearr_155012[(16)] = inst_154967__$1);

return statearr_155012;
})();
if(cljs.core.truth_(inst_154967__$1)){
var statearr_155013_155474 = state_154993__$1;
(statearr_155013_155474[(1)] = (41));

} else {
var statearr_155014_155475 = state_154993__$1;
(statearr_155014_155475[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (33))){
var inst_154902 = (state_154993[(2)]);
var inst_154903 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154904 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_154905 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154904,inst_154902,null];
var inst_154906 = cljs.core.PersistentHashMap.fromArrays(inst_154903,inst_154905);
var inst_154907 = cljs.test.do_report.call(null,inst_154906);
var state_154993__$1 = state_154993;
var statearr_155015_155476 = state_154993__$1;
(statearr_155015_155476[(2)] = inst_154907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (13))){
var inst_154740 = (state_154993[(17)]);
var inst_154761 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155016 = state_154993;
(statearr_155016[(18)] = inst_154761);

return statearr_155016;
})();
var statearr_155017_155477 = state_154993__$1;
(statearr_155017_155477[(2)] = inst_154740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (22))){
var inst_154831 = (state_154993[(19)]);
var inst_154830 = (state_154993[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_154817 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_154819 = [(1),(2)];
var inst_154820 = (new cljs.core.PersistentVector(null,2,(5),inst_154818,inst_154819,null));
var inst_154821 = [true,inst_154820];
var inst_154822 = cljs.core.PersistentHashMap.fromArrays(inst_154817,inst_154821);
var inst_154823 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154824 = [(2)];
var inst_154825 = cljs.core.PersistentHashMap.fromArrays(inst_154823,inst_154824);
var inst_154826 = klipse.lang.clojure.result_as_str.call(null,inst_154822,inst_154825);
var inst_154827 = cljs.core.second.call(null,inst_154826);
var inst_154828 = cljs.core.List.EMPTY;
var inst_154829 = cljs.core._conj.call(null,inst_154828,"[1 2]");
var inst_154830__$1 = cljs.core._conj.call(null,inst_154829,inst_154827);
var inst_154831__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154830__$1);
var state_154993__$1 = (function (){var statearr_155018 = state_154993;
(statearr_155018[(19)] = inst_154831__$1);

(statearr_155018[(10)] = inst_154830__$1);

return statearr_155018;
})();
if(cljs.core.truth_(inst_154831__$1)){
var statearr_155019_155478 = state_154993__$1;
(statearr_155019_155478[(1)] = (23));

} else {
var statearr_155020_155479 = state_154993__$1;
(statearr_155020_155479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (36))){
var inst_154921 = (state_154993[(20)]);
var inst_154931 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154932 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_154933 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154934 = cljs.core.cons.call(null,inst_154933,inst_154921);
var inst_154935 = cljs.core.List.EMPTY;
var inst_154936 = cljs.core._conj.call(null,inst_154935,inst_154934);
var inst_154937 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154938 = cljs.core._conj.call(null,inst_154936,inst_154937);
var inst_154939 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154932,inst_154938,null];
var inst_154940 = cljs.core.PersistentHashMap.fromArrays(inst_154931,inst_154939);
var inst_154941 = cljs.test.do_report.call(null,inst_154940);
var state_154993__$1 = state_154993;
var statearr_155021_155480 = state_154993__$1;
(statearr_155021_155480[(2)] = inst_154941);

(statearr_155021_155480[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (41))){
var inst_154966 = (state_154993[(15)]);
var inst_154969 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154970 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154971 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154966);
var inst_154972 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154970,inst_154971,null];
var inst_154973 = cljs.core.PersistentHashMap.fromArrays(inst_154969,inst_154972);
var inst_154974 = cljs.test.do_report.call(null,inst_154973);
var state_154993__$1 = state_154993;
var statearr_155022_155481 = state_154993__$1;
(statearr_155022_155481[(2)] = inst_154974);

(statearr_155022_155481[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (43))){
var inst_154967 = (state_154993[(16)]);
var inst_154988 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155023 = state_154993;
(statearr_155023[(21)] = inst_154988);

return statearr_155023;
})();
var statearr_155024_155482 = state_154993__$1;
(statearr_155024_155482[(2)] = inst_154967);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (29))){
var inst_154877 = (state_154993[(22)]);
var inst_154880 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154881 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154882 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154877);
var inst_154883 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154881,inst_154882,null];
var inst_154884 = cljs.core.PersistentHashMap.fromArrays(inst_154880,inst_154883);
var inst_154885 = cljs.test.do_report.call(null,inst_154884);
var state_154993__$1 = state_154993;
var statearr_155025_155483 = state_154993__$1;
(statearr_155025_155483[(2)] = inst_154885);

(statearr_155025_155483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (6))){
var inst_154695 = (state_154993[(11)]);
var inst_154705 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154706 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154707 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154708 = cljs.core.cons.call(null,inst_154707,inst_154695);
var inst_154709 = cljs.core.List.EMPTY;
var inst_154710 = cljs.core._conj.call(null,inst_154709,inst_154708);
var inst_154711 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154712 = cljs.core._conj.call(null,inst_154710,inst_154711);
var inst_154713 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154706,inst_154712,null];
var inst_154714 = cljs.core.PersistentHashMap.fromArrays(inst_154705,inst_154713);
var inst_154715 = cljs.test.do_report.call(null,inst_154714);
var state_154993__$1 = state_154993;
var statearr_155026_155484 = state_154993__$1;
(statearr_155026_155484[(2)] = inst_154715);

(statearr_155026_155484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (28))){
var inst_154878 = (state_154993[(12)]);
var inst_154877 = (state_154993[(22)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_154864 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_154866 = [(1),(2),(3),(4),(5)];
var inst_154867 = (new cljs.core.PersistentVector(null,5,(5),inst_154865,inst_154866,null));
var inst_154868 = [true,inst_154867];
var inst_154869 = cljs.core.PersistentHashMap.fromArrays(inst_154864,inst_154868);
var inst_154870 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154871 = [(2)];
var inst_154872 = cljs.core.PersistentHashMap.fromArrays(inst_154870,inst_154871);
var inst_154873 = klipse.lang.clojure.result_as_str.call(null,inst_154869,inst_154872);
var inst_154874 = cljs.core.second.call(null,inst_154873);
var inst_154875 = cljs.core.List.EMPTY;
var inst_154876 = cljs.core._conj.call(null,inst_154875,"[1 2 ...]");
var inst_154877__$1 = cljs.core._conj.call(null,inst_154876,inst_154874);
var inst_154878__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154877__$1);
var state_154993__$1 = (function (){var statearr_155027 = state_154993;
(statearr_155027[(12)] = inst_154878__$1);

(statearr_155027[(22)] = inst_154877__$1);

return statearr_155027;
})();
if(cljs.core.truth_(inst_154878__$1)){
var statearr_155028_155485 = state_154993__$1;
(statearr_155028_155485[(1)] = (29));

} else {
var statearr_155029_155486 = state_154993__$1;
(statearr_155029_155486[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (25))){
var inst_154831 = (state_154993[(19)]);
var inst_154852 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155030 = state_154993;
(statearr_155030[(23)] = inst_154852);

return statearr_155030;
})();
var statearr_155031_155487 = state_154993__$1;
(statearr_155031_155487[(2)] = inst_154831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (34))){
var inst_154922 = (state_154993[(24)]);
var inst_154921 = (state_154993[(20)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_154911 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154912 = [true,"abcdef"];
var inst_154913 = cljs.core.PersistentHashMap.fromArrays(inst_154911,inst_154912);
var inst_154914 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154915 = [(2)];
var inst_154916 = cljs.core.PersistentHashMap.fromArrays(inst_154914,inst_154915);
var inst_154917 = klipse.lang.clojure.result_as_str.call(null,inst_154913,inst_154916);
var inst_154918 = cljs.core.second.call(null,inst_154917);
var inst_154919 = cljs.core.List.EMPTY;
var inst_154920 = cljs.core._conj.call(null,inst_154919,"\"abcdef\"");
var inst_154921__$1 = cljs.core._conj.call(null,inst_154920,inst_154918);
var inst_154922__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154921__$1);
var state_154993__$1 = (function (){var statearr_155032 = state_154993;
(statearr_155032[(24)] = inst_154922__$1);

(statearr_155032[(20)] = inst_154921__$1);

return statearr_155032;
})();
if(cljs.core.truth_(inst_154922__$1)){
var statearr_155033_155488 = state_154993__$1;
(statearr_155033_155488[(1)] = (35));

} else {
var statearr_155034_155489 = state_154993__$1;
(statearr_155034_155489[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (17))){
var inst_154783 = (state_154993[(25)]);
var inst_154786 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154787 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_154788 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154783);
var inst_154789 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154787,inst_154788,null];
var inst_154790 = cljs.core.PersistentHashMap.fromArrays(inst_154786,inst_154789);
var inst_154791 = cljs.test.do_report.call(null,inst_154790);
var state_154993__$1 = state_154993;
var statearr_155035_155490 = state_154993__$1;
(statearr_155035_155490[(2)] = inst_154791);

(statearr_155035_155490[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (3))){
var inst_154676 = (state_154993[(2)]);
var inst_154677 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154678 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154679 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154678,inst_154676,null];
var inst_154680 = cljs.core.PersistentHashMap.fromArrays(inst_154677,inst_154679);
var inst_154681 = cljs.test.do_report.call(null,inst_154680);
var state_154993__$1 = state_154993;
var statearr_155036_155491 = state_154993__$1;
(statearr_155036_155491[(2)] = inst_154681);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (12))){
var inst_154739 = (state_154993[(26)]);
var inst_154749 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154750 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_154751 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154752 = cljs.core.cons.call(null,inst_154751,inst_154739);
var inst_154753 = cljs.core.List.EMPTY;
var inst_154754 = cljs.core._conj.call(null,inst_154753,inst_154752);
var inst_154755 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154756 = cljs.core._conj.call(null,inst_154754,inst_154755);
var inst_154757 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154750,inst_154756,null];
var inst_154758 = cljs.core.PersistentHashMap.fromArrays(inst_154749,inst_154757);
var inst_154759 = cljs.test.do_report.call(null,inst_154758);
var state_154993__$1 = state_154993;
var statearr_155037_155492 = state_154993__$1;
(statearr_155037_155492[(2)] = inst_154759);

(statearr_155037_155492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (2))){
var inst_154719 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155038 = state_154993;
(statearr_155038[(27)] = inst_154719);

return statearr_155038;
})();
var statearr_155039_155493 = state_154993__$1;
(statearr_155039_155493[(2)] = null);

(statearr_155039_155493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (23))){
var inst_154830 = (state_154993[(10)]);
var inst_154833 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154834 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_154835 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154830);
var inst_154836 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154834,inst_154835,null];
var inst_154837 = cljs.core.PersistentHashMap.fromArrays(inst_154833,inst_154836);
var inst_154838 = cljs.test.do_report.call(null,inst_154837);
var state_154993__$1 = state_154993;
var statearr_155040_155494 = state_154993__$1;
(statearr_155040_155494[(2)] = inst_154838);

(statearr_155040_155494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (35))){
var inst_154921 = (state_154993[(20)]);
var inst_154924 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154925 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_154926 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154921);
var inst_154927 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154925,inst_154926,null];
var inst_154928 = cljs.core.PersistentHashMap.fromArrays(inst_154924,inst_154927);
var inst_154929 = cljs.test.do_report.call(null,inst_154928);
var state_154993__$1 = state_154993;
var statearr_155041_155495 = state_154993__$1;
(statearr_155041_155495[(2)] = inst_154929);

(statearr_155041_155495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (19))){
var inst_154784 = (state_154993[(28)]);
var inst_154805 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155042 = state_154993;
(statearr_155042[(29)] = inst_154805);

return statearr_155042;
})();
var statearr_155043_155496 = state_154993__$1;
(statearr_155043_155496[(2)] = inst_154784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (11))){
var inst_154739 = (state_154993[(26)]);
var inst_154742 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154743 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_154744 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154739);
var inst_154745 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154743,inst_154744,null];
var inst_154746 = cljs.core.PersistentHashMap.fromArrays(inst_154742,inst_154745);
var inst_154747 = cljs.test.do_report.call(null,inst_154746);
var state_154993__$1 = state_154993;
var statearr_155044_155497 = state_154993__$1;
(statearr_155044_155497[(2)] = inst_154747);

(statearr_155044_155497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (9))){
var inst_154720 = (state_154993[(2)]);
var inst_154721 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154722 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_154723 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_154722,inst_154720,null];
var inst_154724 = cljs.core.PersistentHashMap.fromArrays(inst_154721,inst_154723);
var inst_154725 = cljs.test.do_report.call(null,inst_154724);
var state_154993__$1 = state_154993;
var statearr_155045_155498 = state_154993__$1;
(statearr_155045_155498[(2)] = inst_154725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (5))){
var inst_154695 = (state_154993[(11)]);
var inst_154698 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154699 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_154700 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_154695);
var inst_154701 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_154699,inst_154700,null];
var inst_154702 = cljs.core.PersistentHashMap.fromArrays(inst_154698,inst_154701);
var inst_154703 = cljs.test.do_report.call(null,inst_154702);
var state_154993__$1 = state_154993;
var statearr_155046_155499 = state_154993__$1;
(statearr_155046_155499[(2)] = inst_154703);

(statearr_155046_155499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (14))){
var inst_154807 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155047 = state_154993;
(statearr_155047[(30)] = inst_154807);

return statearr_155047;
})();
var statearr_155048_155500 = state_154993__$1;
(statearr_155048_155500[(2)] = null);

(statearr_155048_155500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (26))){
var inst_154901 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155049 = state_154993;
(statearr_155049[(31)] = inst_154901);

return statearr_155049;
})();
var statearr_155050_155501 = state_154993__$1;
(statearr_155050_155501[(2)] = null);

(statearr_155050_155501[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (16))){
var inst_154783 = (state_154993[(25)]);
var inst_154784 = (state_154993[(28)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_154773 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154774 = [true,"ab"];
var inst_154775 = cljs.core.PersistentHashMap.fromArrays(inst_154773,inst_154774);
var inst_154776 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154777 = [(2)];
var inst_154778 = cljs.core.PersistentHashMap.fromArrays(inst_154776,inst_154777);
var inst_154779 = klipse.lang.clojure.result_as_str.call(null,inst_154775,inst_154778);
var inst_154780 = cljs.core.second.call(null,inst_154779);
var inst_154781 = cljs.core.List.EMPTY;
var inst_154782 = cljs.core._conj.call(null,inst_154781,"\"ab\"");
var inst_154783__$1 = cljs.core._conj.call(null,inst_154782,inst_154780);
var inst_154784__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154783__$1);
var state_154993__$1 = (function (){var statearr_155051 = state_154993;
(statearr_155051[(25)] = inst_154783__$1);

(statearr_155051[(28)] = inst_154784__$1);

return statearr_155051;
})();
if(cljs.core.truth_(inst_154784__$1)){
var statearr_155052_155502 = state_154993__$1;
(statearr_155052_155502[(1)] = (17));

} else {
var statearr_155053_155503 = state_154993__$1;
(statearr_155053_155503[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (38))){
var inst_154990 = (state_154993[(2)]);
var inst_154991 = done.call(null);
var state_154993__$1 = (function (){var statearr_155054 = state_154993;
(statearr_155054[(32)] = inst_154990);

return statearr_155054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154993__$1,inst_154991);
} else {
if((state_val_154994 === (30))){
var inst_154877 = (state_154993[(22)]);
var inst_154887 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154888 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_154889 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154890 = cljs.core.cons.call(null,inst_154889,inst_154877);
var inst_154891 = cljs.core.List.EMPTY;
var inst_154892 = cljs.core._conj.call(null,inst_154891,inst_154890);
var inst_154893 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154894 = cljs.core._conj.call(null,inst_154892,inst_154893);
var inst_154895 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154888,inst_154894,null];
var inst_154896 = cljs.core.PersistentHashMap.fromArrays(inst_154887,inst_154895);
var inst_154897 = cljs.test.do_report.call(null,inst_154896);
var state_154993__$1 = state_154993;
var statearr_155055_155504 = state_154993__$1;
(statearr_155055_155504[(2)] = inst_154897);

(statearr_155055_155504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (10))){
var inst_154740 = (state_154993[(17)]);
var inst_154739 = (state_154993[(26)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_154993,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_154729 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_154730 = [true,"\n1"];
var inst_154731 = cljs.core.PersistentHashMap.fromArrays(inst_154729,inst_154730);
var inst_154732 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_154733 = [(2)];
var inst_154734 = cljs.core.PersistentHashMap.fromArrays(inst_154732,inst_154733);
var inst_154735 = klipse.lang.clojure.result_as_str.call(null,inst_154731,inst_154734);
var inst_154736 = cljs.core.second.call(null,inst_154735);
var inst_154737 = cljs.core.List.EMPTY;
var inst_154738 = cljs.core._conj.call(null,inst_154737,"\"\\n1\"");
var inst_154739__$1 = cljs.core._conj.call(null,inst_154738,inst_154736);
var inst_154740__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_154739__$1);
var state_154993__$1 = (function (){var statearr_155056 = state_154993;
(statearr_155056[(17)] = inst_154740__$1);

(statearr_155056[(26)] = inst_154739__$1);

return statearr_155056;
})();
if(cljs.core.truth_(inst_154740__$1)){
var statearr_155057_155505 = state_154993__$1;
(statearr_155057_155505[(1)] = (11));

} else {
var statearr_155058_155506 = state_154993__$1;
(statearr_155058_155506[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (18))){
var inst_154783 = (state_154993[(25)]);
var inst_154793 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154794 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_154795 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154796 = cljs.core.cons.call(null,inst_154795,inst_154783);
var inst_154797 = cljs.core.List.EMPTY;
var inst_154798 = cljs.core._conj.call(null,inst_154797,inst_154796);
var inst_154799 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154800 = cljs.core._conj.call(null,inst_154798,inst_154799);
var inst_154801 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154794,inst_154800,null];
var inst_154802 = cljs.core.PersistentHashMap.fromArrays(inst_154793,inst_154801);
var inst_154803 = cljs.test.do_report.call(null,inst_154802);
var state_154993__$1 = state_154993;
var statearr_155059_155507 = state_154993__$1;
(statearr_155059_155507[(2)] = inst_154803);

(statearr_155059_155507[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (42))){
var inst_154966 = (state_154993[(15)]);
var inst_154976 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_154977 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_154978 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_154979 = cljs.core.cons.call(null,inst_154978,inst_154966);
var inst_154980 = cljs.core.List.EMPTY;
var inst_154981 = cljs.core._conj.call(null,inst_154980,inst_154979);
var inst_154982 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_154983 = cljs.core._conj.call(null,inst_154981,inst_154982);
var inst_154984 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_154977,inst_154983,null];
var inst_154985 = cljs.core.PersistentHashMap.fromArrays(inst_154976,inst_154984);
var inst_154986 = cljs.test.do_report.call(null,inst_154985);
var state_154993__$1 = state_154993;
var statearr_155060_155508 = state_154993__$1;
(statearr_155060_155508[(2)] = inst_154986);

(statearr_155060_155508[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (37))){
var inst_154922 = (state_154993[(24)]);
var inst_154943 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155061 = state_154993;
(statearr_155061[(33)] = inst_154943);

return statearr_155061;
})();
var statearr_155062_155509 = state_154993__$1;
(statearr_155062_155509[(2)] = inst_154922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154994 === (8))){
var inst_154763 = (state_154993[(2)]);
var state_154993__$1 = (function (){var statearr_155063 = state_154993;
(statearr_155063[(34)] = inst_154763);

return statearr_155063;
})();
var statearr_155064_155510 = state_154993__$1;
(statearr_155064_155510[(2)] = null);

(statearr_155064_155510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_155065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155065[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_155065[(1)] = (1));

return statearr_155065;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_154993){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_154993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155066){if((e155066 instanceof Object)){
var ex__13458__auto__ = e155066;
var statearr_155067_155511 = state_154993;
(statearr_155067_155511[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155512 = state_154993;
state_154993 = G__155512;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_154993){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_154993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_155068 = f__13545__auto__.call(null);
(statearr_155068[(6)] = c__13544__auto__);

return statearr_155068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.apply = (function (self__,args154675){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args154675)));
});

klipse.cards.test.eval.t_klipse$cards$test$eval154672.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_155386){
var state_val_155387 = (state_155386[(1)]);
if((state_val_155387 === (7))){
var inst_155089 = (state_155386[(7)]);
var inst_155110 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155388 = state_155386;
(statearr_155388[(8)] = inst_155110);

return statearr_155388;
})();
var statearr_155389_155513 = state_155386__$1;
(statearr_155389_155513[(2)] = inst_155089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (20))){
var inst_155247 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155390 = state_155386;
(statearr_155390[(9)] = inst_155247);

return statearr_155390;
})();
var statearr_155391_155514 = state_155386__$1;
(statearr_155391_155514[(2)] = null);

(statearr_155391_155514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (27))){
var inst_155248 = (state_155386[(2)]);
var inst_155249 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155250 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_155251 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155250,inst_155248,null];
var inst_155252 = cljs.core.PersistentHashMap.fromArrays(inst_155249,inst_155251);
var inst_155253 = cljs.test.do_report.call(null,inst_155252);
var state_155386__$1 = state_155386;
var statearr_155392_155515 = state_155386__$1;
(statearr_155392_155515[(2)] = inst_155253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (1))){
var state_155386__$1 = state_155386;
var statearr_155393_155516 = state_155386__$1;
(statearr_155393_155516[(2)] = null);

(statearr_155393_155516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (24))){
var inst_155223 = (state_155386[(10)]);
var inst_155233 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155234 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_155235 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155236 = cljs.core.cons.call(null,inst_155235,inst_155223);
var inst_155237 = cljs.core.List.EMPTY;
var inst_155238 = cljs.core._conj.call(null,inst_155237,inst_155236);
var inst_155239 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155240 = cljs.core._conj.call(null,inst_155238,inst_155239);
var inst_155241 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155234,inst_155240,null];
var inst_155242 = cljs.core.PersistentHashMap.fromArrays(inst_155233,inst_155241);
var inst_155243 = cljs.test.do_report.call(null,inst_155242);
var state_155386__$1 = state_155386;
var statearr_155394_155517 = state_155386__$1;
(statearr_155394_155517[(2)] = inst_155243);

(statearr_155394_155517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (39))){
var inst_155339 = (state_155386[(2)]);
var inst_155340 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155341 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_155342 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155341,inst_155339,null];
var inst_155343 = cljs.core.PersistentHashMap.fromArrays(inst_155340,inst_155342);
var inst_155344 = cljs.test.do_report.call(null,inst_155343);
var state_155386__$1 = state_155386;
var statearr_155395_155518 = state_155386__$1;
(statearr_155395_155518[(2)] = inst_155344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (4))){
var inst_155088 = (state_155386[(11)]);
var inst_155089 = (state_155386[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_155078 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155079 = [true,null];
var inst_155080 = cljs.core.PersistentHashMap.fromArrays(inst_155078,inst_155079);
var inst_155081 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155082 = [(2)];
var inst_155083 = cljs.core.PersistentHashMap.fromArrays(inst_155081,inst_155082);
var inst_155084 = klipse.lang.clojure.result_as_str.call(null,inst_155080,inst_155083);
var inst_155085 = cljs.core.second.call(null,inst_155084);
var inst_155086 = cljs.core.List.EMPTY;
var inst_155087 = cljs.core._conj.call(null,inst_155086,"nil");
var inst_155088__$1 = cljs.core._conj.call(null,inst_155087,inst_155085);
var inst_155089__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155088__$1);
var state_155386__$1 = (function (){var statearr_155396 = state_155386;
(statearr_155396[(11)] = inst_155088__$1);

(statearr_155396[(7)] = inst_155089__$1);

return statearr_155396;
})();
if(cljs.core.truth_(inst_155089__$1)){
var statearr_155397_155519 = state_155386__$1;
(statearr_155397_155519[(1)] = (5));

} else {
var statearr_155398_155520 = state_155386__$1;
(statearr_155398_155520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (15))){
var inst_155157 = (state_155386[(2)]);
var inst_155158 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155159 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_155160 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155159,inst_155157,null];
var inst_155161 = cljs.core.PersistentHashMap.fromArrays(inst_155158,inst_155160);
var inst_155162 = cljs.test.do_report.call(null,inst_155161);
var state_155386__$1 = state_155386;
var statearr_155399_155521 = state_155386__$1;
(statearr_155399_155521[(2)] = inst_155162);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (21))){
var inst_155201 = (state_155386[(2)]);
var inst_155202 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155203 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_155204 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155203,inst_155201,null];
var inst_155205 = cljs.core.PersistentHashMap.fromArrays(inst_155202,inst_155204);
var inst_155206 = cljs.test.do_report.call(null,inst_155205);
var state_155386__$1 = state_155386;
var statearr_155400_155522 = state_155386__$1;
(statearr_155400_155522[(2)] = inst_155206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (31))){
var inst_155271 = (state_155386[(12)]);
var inst_155292 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155401 = state_155386;
(statearr_155401[(13)] = inst_155292);

return statearr_155401;
})();
var statearr_155402_155523 = state_155386__$1;
(statearr_155402_155523[(2)] = inst_155271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (32))){
var inst_155338 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155403 = state_155386;
(statearr_155403[(14)] = inst_155338);

return statearr_155403;
})();
var statearr_155404_155524 = state_155386__$1;
(statearr_155404_155524[(2)] = null);

(statearr_155404_155524[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (40))){
var inst_155359 = (state_155386[(15)]);
var inst_155360 = (state_155386[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_155348 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155349 = cljs.core.range.call(null);
var inst_155350 = [true,inst_155349];
var inst_155351 = cljs.core.PersistentHashMap.fromArrays(inst_155348,inst_155350);
var inst_155352 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155353 = [(2)];
var inst_155354 = cljs.core.PersistentHashMap.fromArrays(inst_155352,inst_155353);
var inst_155355 = klipse.lang.clojure.result_as_str.call(null,inst_155351,inst_155354);
var inst_155356 = cljs.core.second.call(null,inst_155355);
var inst_155357 = cljs.core.List.EMPTY;
var inst_155358 = cljs.core._conj.call(null,inst_155357,"(0 1 ...)");
var inst_155359__$1 = cljs.core._conj.call(null,inst_155358,inst_155356);
var inst_155360__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155359__$1);
var state_155386__$1 = (function (){var statearr_155405 = state_155386;
(statearr_155405[(15)] = inst_155359__$1);

(statearr_155405[(16)] = inst_155360__$1);

return statearr_155405;
})();
if(cljs.core.truth_(inst_155360__$1)){
var statearr_155406_155525 = state_155386__$1;
(statearr_155406_155525[(1)] = (41));

} else {
var statearr_155407_155526 = state_155386__$1;
(statearr_155407_155526[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (33))){
var inst_155295 = (state_155386[(2)]);
var inst_155296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155297 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_155298 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155297,inst_155295,null];
var inst_155299 = cljs.core.PersistentHashMap.fromArrays(inst_155296,inst_155298);
var inst_155300 = cljs.test.do_report.call(null,inst_155299);
var state_155386__$1 = state_155386;
var statearr_155408_155527 = state_155386__$1;
(statearr_155408_155527[(2)] = inst_155300);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (13))){
var inst_155133 = (state_155386[(17)]);
var inst_155154 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155409 = state_155386;
(statearr_155409[(18)] = inst_155154);

return statearr_155409;
})();
var statearr_155410_155528 = state_155386__$1;
(statearr_155410_155528[(2)] = inst_155133);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (22))){
var inst_155223 = (state_155386[(10)]);
var inst_155224 = (state_155386[(19)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_155210 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_155212 = [(1),(2)];
var inst_155213 = (new cljs.core.PersistentVector(null,2,(5),inst_155211,inst_155212,null));
var inst_155214 = [true,inst_155213];
var inst_155215 = cljs.core.PersistentHashMap.fromArrays(inst_155210,inst_155214);
var inst_155216 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155217 = [(2)];
var inst_155218 = cljs.core.PersistentHashMap.fromArrays(inst_155216,inst_155217);
var inst_155219 = klipse.lang.clojure.result_as_str.call(null,inst_155215,inst_155218);
var inst_155220 = cljs.core.second.call(null,inst_155219);
var inst_155221 = cljs.core.List.EMPTY;
var inst_155222 = cljs.core._conj.call(null,inst_155221,"[1 2]");
var inst_155223__$1 = cljs.core._conj.call(null,inst_155222,inst_155220);
var inst_155224__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155223__$1);
var state_155386__$1 = (function (){var statearr_155411 = state_155386;
(statearr_155411[(10)] = inst_155223__$1);

(statearr_155411[(19)] = inst_155224__$1);

return statearr_155411;
})();
if(cljs.core.truth_(inst_155224__$1)){
var statearr_155412_155529 = state_155386__$1;
(statearr_155412_155529[(1)] = (23));

} else {
var statearr_155413_155530 = state_155386__$1;
(statearr_155413_155530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (36))){
var inst_155314 = (state_155386[(20)]);
var inst_155324 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155325 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_155326 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155327 = cljs.core.cons.call(null,inst_155326,inst_155314);
var inst_155328 = cljs.core.List.EMPTY;
var inst_155329 = cljs.core._conj.call(null,inst_155328,inst_155327);
var inst_155330 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155331 = cljs.core._conj.call(null,inst_155329,inst_155330);
var inst_155332 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155325,inst_155331,null];
var inst_155333 = cljs.core.PersistentHashMap.fromArrays(inst_155324,inst_155332);
var inst_155334 = cljs.test.do_report.call(null,inst_155333);
var state_155386__$1 = state_155386;
var statearr_155414_155531 = state_155386__$1;
(statearr_155414_155531[(2)] = inst_155334);

(statearr_155414_155531[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (41))){
var inst_155359 = (state_155386[(15)]);
var inst_155362 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155363 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_155364 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155359);
var inst_155365 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155363,inst_155364,null];
var inst_155366 = cljs.core.PersistentHashMap.fromArrays(inst_155362,inst_155365);
var inst_155367 = cljs.test.do_report.call(null,inst_155366);
var state_155386__$1 = state_155386;
var statearr_155415_155532 = state_155386__$1;
(statearr_155415_155532[(2)] = inst_155367);

(statearr_155415_155532[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (43))){
var inst_155360 = (state_155386[(16)]);
var inst_155381 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155416 = state_155386;
(statearr_155416[(21)] = inst_155381);

return statearr_155416;
})();
var statearr_155417_155533 = state_155386__$1;
(statearr_155417_155533[(2)] = inst_155360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (29))){
var inst_155270 = (state_155386[(22)]);
var inst_155273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155274 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_155275 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155270);
var inst_155276 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155274,inst_155275,null];
var inst_155277 = cljs.core.PersistentHashMap.fromArrays(inst_155273,inst_155276);
var inst_155278 = cljs.test.do_report.call(null,inst_155277);
var state_155386__$1 = state_155386;
var statearr_155418_155534 = state_155386__$1;
(statearr_155418_155534[(2)] = inst_155278);

(statearr_155418_155534[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (6))){
var inst_155088 = (state_155386[(11)]);
var inst_155098 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155099 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_155100 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155101 = cljs.core.cons.call(null,inst_155100,inst_155088);
var inst_155102 = cljs.core.List.EMPTY;
var inst_155103 = cljs.core._conj.call(null,inst_155102,inst_155101);
var inst_155104 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155105 = cljs.core._conj.call(null,inst_155103,inst_155104);
var inst_155106 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155099,inst_155105,null];
var inst_155107 = cljs.core.PersistentHashMap.fromArrays(inst_155098,inst_155106);
var inst_155108 = cljs.test.do_report.call(null,inst_155107);
var state_155386__$1 = state_155386;
var statearr_155419_155535 = state_155386__$1;
(statearr_155419_155535[(2)] = inst_155108);

(statearr_155419_155535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (28))){
var inst_155271 = (state_155386[(12)]);
var inst_155270 = (state_155386[(22)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_155257 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_155259 = [(1),(2),(3),(4),(5)];
var inst_155260 = (new cljs.core.PersistentVector(null,5,(5),inst_155258,inst_155259,null));
var inst_155261 = [true,inst_155260];
var inst_155262 = cljs.core.PersistentHashMap.fromArrays(inst_155257,inst_155261);
var inst_155263 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155264 = [(2)];
var inst_155265 = cljs.core.PersistentHashMap.fromArrays(inst_155263,inst_155264);
var inst_155266 = klipse.lang.clojure.result_as_str.call(null,inst_155262,inst_155265);
var inst_155267 = cljs.core.second.call(null,inst_155266);
var inst_155268 = cljs.core.List.EMPTY;
var inst_155269 = cljs.core._conj.call(null,inst_155268,"[1 2 ...]");
var inst_155270__$1 = cljs.core._conj.call(null,inst_155269,inst_155267);
var inst_155271__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155270__$1);
var state_155386__$1 = (function (){var statearr_155420 = state_155386;
(statearr_155420[(12)] = inst_155271__$1);

(statearr_155420[(22)] = inst_155270__$1);

return statearr_155420;
})();
if(cljs.core.truth_(inst_155271__$1)){
var statearr_155421_155536 = state_155386__$1;
(statearr_155421_155536[(1)] = (29));

} else {
var statearr_155422_155537 = state_155386__$1;
(statearr_155422_155537[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (25))){
var inst_155224 = (state_155386[(19)]);
var inst_155245 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155423 = state_155386;
(statearr_155423[(23)] = inst_155245);

return statearr_155423;
})();
var statearr_155424_155538 = state_155386__$1;
(statearr_155424_155538[(2)] = inst_155224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (34))){
var inst_155315 = (state_155386[(24)]);
var inst_155314 = (state_155386[(20)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_155304 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155305 = [true,"abcdef"];
var inst_155306 = cljs.core.PersistentHashMap.fromArrays(inst_155304,inst_155305);
var inst_155307 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155308 = [(2)];
var inst_155309 = cljs.core.PersistentHashMap.fromArrays(inst_155307,inst_155308);
var inst_155310 = klipse.lang.clojure.result_as_str.call(null,inst_155306,inst_155309);
var inst_155311 = cljs.core.second.call(null,inst_155310);
var inst_155312 = cljs.core.List.EMPTY;
var inst_155313 = cljs.core._conj.call(null,inst_155312,"\"abcdef\"");
var inst_155314__$1 = cljs.core._conj.call(null,inst_155313,inst_155311);
var inst_155315__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155314__$1);
var state_155386__$1 = (function (){var statearr_155425 = state_155386;
(statearr_155425[(24)] = inst_155315__$1);

(statearr_155425[(20)] = inst_155314__$1);

return statearr_155425;
})();
if(cljs.core.truth_(inst_155315__$1)){
var statearr_155426_155539 = state_155386__$1;
(statearr_155426_155539[(1)] = (35));

} else {
var statearr_155427_155540 = state_155386__$1;
(statearr_155427_155540[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (17))){
var inst_155176 = (state_155386[(25)]);
var inst_155179 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155180 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_155181 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155176);
var inst_155182 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155180,inst_155181,null];
var inst_155183 = cljs.core.PersistentHashMap.fromArrays(inst_155179,inst_155182);
var inst_155184 = cljs.test.do_report.call(null,inst_155183);
var state_155386__$1 = state_155386;
var statearr_155428_155541 = state_155386__$1;
(statearr_155428_155541[(2)] = inst_155184);

(statearr_155428_155541[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (3))){
var inst_155069 = (state_155386[(2)]);
var inst_155070 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155071 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_155072 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155071,inst_155069,null];
var inst_155073 = cljs.core.PersistentHashMap.fromArrays(inst_155070,inst_155072);
var inst_155074 = cljs.test.do_report.call(null,inst_155073);
var state_155386__$1 = state_155386;
var statearr_155429_155542 = state_155386__$1;
(statearr_155429_155542[(2)] = inst_155074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (12))){
var inst_155132 = (state_155386[(26)]);
var inst_155142 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155143 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_155144 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155145 = cljs.core.cons.call(null,inst_155144,inst_155132);
var inst_155146 = cljs.core.List.EMPTY;
var inst_155147 = cljs.core._conj.call(null,inst_155146,inst_155145);
var inst_155148 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155149 = cljs.core._conj.call(null,inst_155147,inst_155148);
var inst_155150 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155143,inst_155149,null];
var inst_155151 = cljs.core.PersistentHashMap.fromArrays(inst_155142,inst_155150);
var inst_155152 = cljs.test.do_report.call(null,inst_155151);
var state_155386__$1 = state_155386;
var statearr_155430_155543 = state_155386__$1;
(statearr_155430_155543[(2)] = inst_155152);

(statearr_155430_155543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (2))){
var inst_155112 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155431 = state_155386;
(statearr_155431[(27)] = inst_155112);

return statearr_155431;
})();
var statearr_155432_155544 = state_155386__$1;
(statearr_155432_155544[(2)] = null);

(statearr_155432_155544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (23))){
var inst_155223 = (state_155386[(10)]);
var inst_155226 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155227 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_155228 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155223);
var inst_155229 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155227,inst_155228,null];
var inst_155230 = cljs.core.PersistentHashMap.fromArrays(inst_155226,inst_155229);
var inst_155231 = cljs.test.do_report.call(null,inst_155230);
var state_155386__$1 = state_155386;
var statearr_155433_155545 = state_155386__$1;
(statearr_155433_155545[(2)] = inst_155231);

(statearr_155433_155545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (35))){
var inst_155314 = (state_155386[(20)]);
var inst_155317 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155318 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_155319 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155314);
var inst_155320 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155318,inst_155319,null];
var inst_155321 = cljs.core.PersistentHashMap.fromArrays(inst_155317,inst_155320);
var inst_155322 = cljs.test.do_report.call(null,inst_155321);
var state_155386__$1 = state_155386;
var statearr_155434_155546 = state_155386__$1;
(statearr_155434_155546[(2)] = inst_155322);

(statearr_155434_155546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (19))){
var inst_155177 = (state_155386[(28)]);
var inst_155198 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155435 = state_155386;
(statearr_155435[(29)] = inst_155198);

return statearr_155435;
})();
var statearr_155436_155547 = state_155386__$1;
(statearr_155436_155547[(2)] = inst_155177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (11))){
var inst_155132 = (state_155386[(26)]);
var inst_155135 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155136 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_155137 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155132);
var inst_155138 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155136,inst_155137,null];
var inst_155139 = cljs.core.PersistentHashMap.fromArrays(inst_155135,inst_155138);
var inst_155140 = cljs.test.do_report.call(null,inst_155139);
var state_155386__$1 = state_155386;
var statearr_155437_155548 = state_155386__$1;
(statearr_155437_155548[(2)] = inst_155140);

(statearr_155437_155548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (9))){
var inst_155113 = (state_155386[(2)]);
var inst_155114 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155115 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_155116 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155115,inst_155113,null];
var inst_155117 = cljs.core.PersistentHashMap.fromArrays(inst_155114,inst_155116);
var inst_155118 = cljs.test.do_report.call(null,inst_155117);
var state_155386__$1 = state_155386;
var statearr_155438_155549 = state_155386__$1;
(statearr_155438_155549[(2)] = inst_155118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (5))){
var inst_155088 = (state_155386[(11)]);
var inst_155091 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155092 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_155093 = cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,inst_155088);
var inst_155094 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155092,inst_155093,null];
var inst_155095 = cljs.core.PersistentHashMap.fromArrays(inst_155091,inst_155094);
var inst_155096 = cljs.test.do_report.call(null,inst_155095);
var state_155386__$1 = state_155386;
var statearr_155439_155550 = state_155386__$1;
(statearr_155439_155550[(2)] = inst_155096);

(statearr_155439_155550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (14))){
var inst_155200 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155440 = state_155386;
(statearr_155440[(30)] = inst_155200);

return statearr_155440;
})();
var statearr_155441_155551 = state_155386__$1;
(statearr_155441_155551[(2)] = null);

(statearr_155441_155551[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (26))){
var inst_155294 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155442 = state_155386;
(statearr_155442[(31)] = inst_155294);

return statearr_155442;
})();
var statearr_155443_155552 = state_155386__$1;
(statearr_155443_155552[(2)] = null);

(statearr_155443_155552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (16))){
var inst_155176 = (state_155386[(25)]);
var inst_155177 = (state_155386[(28)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_155166 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155167 = [true,"ab"];
var inst_155168 = cljs.core.PersistentHashMap.fromArrays(inst_155166,inst_155167);
var inst_155169 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155170 = [(2)];
var inst_155171 = cljs.core.PersistentHashMap.fromArrays(inst_155169,inst_155170);
var inst_155172 = klipse.lang.clojure.result_as_str.call(null,inst_155168,inst_155171);
var inst_155173 = cljs.core.second.call(null,inst_155172);
var inst_155174 = cljs.core.List.EMPTY;
var inst_155175 = cljs.core._conj.call(null,inst_155174,"\"ab\"");
var inst_155176__$1 = cljs.core._conj.call(null,inst_155175,inst_155173);
var inst_155177__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155176__$1);
var state_155386__$1 = (function (){var statearr_155444 = state_155386;
(statearr_155444[(25)] = inst_155176__$1);

(statearr_155444[(28)] = inst_155177__$1);

return statearr_155444;
})();
if(cljs.core.truth_(inst_155177__$1)){
var statearr_155445_155553 = state_155386__$1;
(statearr_155445_155553[(1)] = (17));

} else {
var statearr_155446_155554 = state_155386__$1;
(statearr_155446_155554[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (38))){
var inst_155383 = (state_155386[(2)]);
var inst_155384 = done.call(null);
var state_155386__$1 = (function (){var statearr_155447 = state_155386;
(statearr_155447[(32)] = inst_155383);

return statearr_155447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155386__$1,inst_155384);
} else {
if((state_val_155387 === (30))){
var inst_155270 = (state_155386[(22)]);
var inst_155280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155281 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_155282 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155283 = cljs.core.cons.call(null,inst_155282,inst_155270);
var inst_155284 = cljs.core.List.EMPTY;
var inst_155285 = cljs.core._conj.call(null,inst_155284,inst_155283);
var inst_155286 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155287 = cljs.core._conj.call(null,inst_155285,inst_155286);
var inst_155288 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155281,inst_155287,null];
var inst_155289 = cljs.core.PersistentHashMap.fromArrays(inst_155280,inst_155288);
var inst_155290 = cljs.test.do_report.call(null,inst_155289);
var state_155386__$1 = state_155386;
var statearr_155448_155555 = state_155386__$1;
(statearr_155448_155555[(2)] = inst_155290);

(statearr_155448_155555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (10))){
var inst_155132 = (state_155386[(26)]);
var inst_155133 = (state_155386[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155386,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_155122 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_155123 = [true,"\n1"];
var inst_155124 = cljs.core.PersistentHashMap.fromArrays(inst_155122,inst_155123);
var inst_155125 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_155126 = [(2)];
var inst_155127 = cljs.core.PersistentHashMap.fromArrays(inst_155125,inst_155126);
var inst_155128 = klipse.lang.clojure.result_as_str.call(null,inst_155124,inst_155127);
var inst_155129 = cljs.core.second.call(null,inst_155128);
var inst_155130 = cljs.core.List.EMPTY;
var inst_155131 = cljs.core._conj.call(null,inst_155130,"\"\\n1\"");
var inst_155132__$1 = cljs.core._conj.call(null,inst_155131,inst_155129);
var inst_155133__$1 = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,inst_155132__$1);
var state_155386__$1 = (function (){var statearr_155449 = state_155386;
(statearr_155449[(26)] = inst_155132__$1);

(statearr_155449[(17)] = inst_155133__$1);

return statearr_155449;
})();
if(cljs.core.truth_(inst_155133__$1)){
var statearr_155450_155556 = state_155386__$1;
(statearr_155450_155556[(1)] = (11));

} else {
var statearr_155451_155557 = state_155386__$1;
(statearr_155451_155557[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (18))){
var inst_155176 = (state_155386[(25)]);
var inst_155186 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155187 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_155188 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155189 = cljs.core.cons.call(null,inst_155188,inst_155176);
var inst_155190 = cljs.core.List.EMPTY;
var inst_155191 = cljs.core._conj.call(null,inst_155190,inst_155189);
var inst_155192 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155193 = cljs.core._conj.call(null,inst_155191,inst_155192);
var inst_155194 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155187,inst_155193,null];
var inst_155195 = cljs.core.PersistentHashMap.fromArrays(inst_155186,inst_155194);
var inst_155196 = cljs.test.do_report.call(null,inst_155195);
var state_155386__$1 = state_155386;
var statearr_155452_155558 = state_155386__$1;
(statearr_155452_155558[(2)] = inst_155196);

(statearr_155452_155558[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (42))){
var inst_155359 = (state_155386[(15)]);
var inst_155369 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155370 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_155371 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155372 = cljs.core.cons.call(null,inst_155371,inst_155359);
var inst_155373 = cljs.core.List.EMPTY;
var inst_155374 = cljs.core._conj.call(null,inst_155373,inst_155372);
var inst_155375 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155376 = cljs.core._conj.call(null,inst_155374,inst_155375);
var inst_155377 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155370,inst_155376,null];
var inst_155378 = cljs.core.PersistentHashMap.fromArrays(inst_155369,inst_155377);
var inst_155379 = cljs.test.do_report.call(null,inst_155378);
var state_155386__$1 = state_155386;
var statearr_155453_155559 = state_155386__$1;
(statearr_155453_155559[(2)] = inst_155379);

(statearr_155453_155559[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (37))){
var inst_155315 = (state_155386[(24)]);
var inst_155336 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155454 = state_155386;
(statearr_155454[(33)] = inst_155336);

return statearr_155454;
})();
var statearr_155455_155560 = state_155386__$1;
(statearr_155455_155560[(2)] = inst_155315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155387 === (8))){
var inst_155156 = (state_155386[(2)]);
var state_155386__$1 = (function (){var statearr_155456 = state_155386;
(statearr_155456[(34)] = inst_155156);

return statearr_155456;
})();
var statearr_155457_155561 = state_155386__$1;
(statearr_155457_155561[(2)] = null);

(statearr_155457_155561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$eval$state_machine__13455__auto__ = null;
var klipse$cards$test$eval$state_machine__13455__auto____0 = (function (){
var statearr_155458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155458[(0)] = klipse$cards$test$eval$state_machine__13455__auto__);

(statearr_155458[(1)] = (1));

return statearr_155458;
});
var klipse$cards$test$eval$state_machine__13455__auto____1 = (function (state_155386){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155459){if((e155459 instanceof Object)){
var ex__13458__auto__ = e155459;
var statearr_155460_155562 = state_155386;
(statearr_155460_155562[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155563 = state_155386;
state_155386 = G__155563;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$eval$state_machine__13455__auto__ = function(state_155386){
switch(arguments.length){
case 0:
return klipse$cards$test$eval$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$eval$state_machine__13455__auto____1.call(this,state_155386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$eval$state_machine__13455__auto____0;
klipse$cards$test$eval$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$eval$state_machine__13455__auto____1;
return klipse$cards$test$eval$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_155461 = f__13545__auto__.call(null);
(statearr_155461[(6)] = c__13544__auto__);

return statearr_155461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.eval.t_klipse$cards$test$eval154672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta154673","meta154673",-913559301,null)], null);
});

klipse.cards.test.eval.t_klipse$cards$test$eval154672.cljs$lang$type = true;

klipse.cards.test.eval.t_klipse$cards$test$eval154672.cljs$lang$ctorStr = "klipse.cards.test.eval/t_klipse$cards$test$eval154672";

klipse.cards.test.eval.t_klipse$cards$test$eval154672.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.eval/t_klipse$cards$test$eval154672");
});

klipse.cards.test.eval.__GT_t_klipse$cards$test$eval154672 = (function klipse$cards$test$eval$__GT_t_klipse$cards$test$eval154672(meta154673){
return (new klipse.cards.test.eval.t_klipse$cards$test$eval154672(meta154673));
});

}

return (new klipse.cards.test.eval.t_klipse$cards$test$eval154672(null));
});

klipse.cards.test.eval.display_evaluation_and_crop.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.display_evaluation_and_crop;},new cljs.core.Symbol("klipse.cards.test.eval","display-evaluation-and-crop","klipse.cards.test.eval/display-evaluation-and-crop",-1037845280,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"display-evaluation-and-crop","display-evaluation-and-crop",81339527,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/eval.cljs",37,1,144,144,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.display_evaluation_and_crop)?klipse.cards.test.eval.display_evaluation_and_crop.cljs$lang$test:null)]));

//# sourceMappingURL=eval.js.map
