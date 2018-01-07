// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.clojure.guard');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.analyzer');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
/**
 * each time the watchdog has a chance to run, this var is set with the current time
 */
klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = (0);
klipse.lang.clojure.guard.min_max_eval_duration = (3000);
/**
 * The number of msec for the watchdog period.
 *          This value has to be much lower than min-max-eval-duration.
 */
klipse.lang.clojure.guard.watchdog_period = (klipse.lang.clojure.guard.min_max_eval_duration / (10));
klipse.lang.clojure.guard.tick = (function klipse$lang$clojure$guard$tick(){
return klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse.lang.clojure.guard.run_watchdog_STAR_ = (function klipse$lang$clojure$guard$run_watchdog_STAR_(){
klipse.lang.clojure.guard.tick.call(null);

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_26595){
var state_val_26596 = (state_26595[(1)]);
if((state_val_26596 === (1))){
var state_26595__$1 = state_26595;
var statearr_26597_26604 = state_26595__$1;
(statearr_26597_26604[(2)] = null);

(statearr_26597_26604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26596 === (2))){
var inst_26587 = cljs.core.async.timeout.call(null,klipse.lang.clojure.guard.watchdog_period);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26595__$1,(4),inst_26587);
} else {
if((state_val_26596 === (3))){
var inst_26593 = (state_26595[(2)]);
var state_26595__$1 = state_26595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26595__$1,inst_26593);
} else {
if((state_val_26596 === (4))){
var inst_26589 = (state_26595[(2)]);
var inst_26590 = klipse.lang.clojure.guard.tick.call(null);
var state_26595__$1 = (function (){var statearr_26598 = state_26595;
(statearr_26598[(7)] = inst_26589);

(statearr_26598[(8)] = inst_26590);

return statearr_26598;
})();
var statearr_26599_26605 = state_26595__$1;
(statearr_26599_26605[(2)] = null);

(statearr_26599_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_26600 = [null,null,null,null,null,null,null,null,null];
(statearr_26600[(0)] = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__);

(statearr_26600[(1)] = (1));

return statearr_26600;
});
var klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____1 = (function (state_26595){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_26595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e26601){if((e26601 instanceof Object)){
var ex__13458__auto__ = e26601;
var statearr_26602_26606 = state_26595;
(statearr_26602_26606[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26607 = state_26595;
state_26595 = G__26607;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__ = function(state_26595){
switch(arguments.length){
case 0:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____1.call(this,state_26595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____0;
klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto____1;
return klipse$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_26603 = f__13545__auto__.call(null);
(statearr_26603[(6)] = c__13544__auto__);

return statearr_26603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.guard.run_watchdog_once = klipse.utils.runonce.call(null,klipse.lang.clojure.guard.run_watchdog_STAR_);
klipse.lang.clojure.guard.watchdog = (function klipse$lang$clojure$guard$watchdog(){
klipse.lang.clojure.guard.tick.call(null);

return klipse.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse.lang.clojure.guard.guard = (function klipse$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw ["Infinite Loop"].join('');
} else {
}

return klipse.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
} else {
return null;
}
});
goog.exportSymbol('klipse.lang.clojure.guard.guard', klipse.lang.clojure.guard.guard);
/**
 * same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.
 * 
 *   Limitations:
 *   1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
 *   
 */
klipse.lang.clojure.guard.my_emits = (function klipse$lang$clojure$guard$my_emits(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26615 = arguments.length;
var i__9641__auto___26616 = (0);
while(true){
if((i__9641__auto___26616 < len__9640__auto___26615)){
args__9647__auto__.push((arguments[i__9641__auto___26616]));

var G__26617 = (i__9641__auto___26616 + (1));
i__9641__auto___26616 = G__26617;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__8351__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__8351__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__8351__auto__;
}
})())){
cljs.core.print.call(null,["klipse.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__26611_26618 = cljs.core.seq.call(null,xs);
var chunk__26612_26619 = null;
var count__26613_26620 = (0);
var i__26614_26621 = (0);
while(true){
if((i__26614_26621 < count__26613_26620)){
var x_26622 = cljs.core._nth.call(null,chunk__26612_26619,i__26614_26621);
if((x_26622 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26622)){
cljs.compiler.emit.call(null,x_26622);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26622)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_26622);
} else {
if(goog.isFunction(x_26622)){
x_26622.call(null);
} else {
var s_26623 = cljs.core.print_str.call(null,x_26622);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26611_26618,chunk__26612_26619,count__26613_26620,i__26614_26621,s_26623,x_26622){
return (function (p1__26608_SHARP_){
return (p1__26608_SHARP_ + cljs.core.count.call(null,s_26623));
});})(seq__26611_26618,chunk__26612_26619,count__26613_26620,i__26614_26621,s_26623,x_26622))
);
}

cljs.core.print.call(null,s_26623);

}
}
}
}

var G__26624 = seq__26611_26618;
var G__26625 = chunk__26612_26619;
var G__26626 = count__26613_26620;
var G__26627 = (i__26614_26621 + (1));
seq__26611_26618 = G__26624;
chunk__26612_26619 = G__26625;
count__26613_26620 = G__26626;
i__26614_26621 = G__26627;
continue;
} else {
var temp__6753__auto___26628 = cljs.core.seq.call(null,seq__26611_26618);
if(temp__6753__auto___26628){
var seq__26611_26629__$1 = temp__6753__auto___26628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26611_26629__$1)){
var c__9294__auto___26630 = cljs.core.chunk_first.call(null,seq__26611_26629__$1);
var G__26631 = cljs.core.chunk_rest.call(null,seq__26611_26629__$1);
var G__26632 = c__9294__auto___26630;
var G__26633 = cljs.core.count.call(null,c__9294__auto___26630);
var G__26634 = (0);
seq__26611_26618 = G__26631;
chunk__26612_26619 = G__26632;
count__26613_26620 = G__26633;
i__26614_26621 = G__26634;
continue;
} else {
var x_26635 = cljs.core.first.call(null,seq__26611_26629__$1);
if((x_26635 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26635)){
cljs.compiler.emit.call(null,x_26635);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26635)){
cljs.core.apply.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration,x_26635);
} else {
if(goog.isFunction(x_26635)){
x_26635.call(null);
} else {
var s_26636 = cljs.core.print_str.call(null,x_26635);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26611_26618,chunk__26612_26619,count__26613_26620,i__26614_26621,s_26636,x_26635,seq__26611_26629__$1,temp__6753__auto___26628){
return (function (p1__26608_SHARP_){
return (p1__26608_SHARP_ + cljs.core.count.call(null,s_26636));
});})(seq__26611_26618,chunk__26612_26619,count__26613_26620,i__26614_26621,s_26636,x_26635,seq__26611_26629__$1,temp__6753__auto___26628))
);
}

cljs.core.print.call(null,s_26636);

}
}
}
}

var G__26637 = cljs.core.next.call(null,seq__26611_26629__$1);
var G__26638 = null;
var G__26639 = (0);
var G__26640 = (0);
seq__26611_26618 = G__26637;
chunk__26612_26619 = G__26638;
count__26613_26620 = G__26639;
i__26614_26621 = G__26640;
continue;
}
} else {
}
}
break;
}

return null;
});

klipse.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1);

klipse.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq26609){
var G__26610 = cljs.core.first.call(null,seq26609);
var seq26609__$1 = cljs.core.next.call(null,seq26609);
return klipse.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic(G__26610,seq26609__$1);
});


//# sourceMappingURL=guard.js.map
