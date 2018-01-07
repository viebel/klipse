// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.klipse_editors');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('klipse.utils');
goog.require('klipse.dom_utils');
goog.require('cljs.core.async');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
klipse.klipse_editors.create_state = (function klipse$klipse_editors$create_state(var_args){
var args__9647__auto__ = [];
var len__9640__auto___35616 = arguments.length;
var i__9641__auto___35617 = (0);
while(true){
if((i__9641__auto___35617 < len__9640__auto___35616)){
args__9647__auto__.push((arguments[i__9641__auto___35617]));

var G__35618 = (i__9641__auto___35617 + (1));
i__9641__auto___35617 = G__35618;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__35613){
var map__35614 = p__35613;
var map__35614__$1 = ((((!((map__35614 == null)))?((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var result_element = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
});

klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0);

klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq35612){
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35612));
});

klipse.klipse_editors.klipse_result_attrs = (function klipse$klipse_editors$klipse_result_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-result",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
klipse.klipse_editors.klipse_container_attrs = (function klipse$klipse_editors$klipse_container_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-container",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
/**
 * 
 *   Evaluates the `value` - with `preamble` prepended to it.
 *   If `setter` is defined, call `setter` with the result of the evaluation.
 *   Block until the first evaluation.
 *   Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
 *   (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
 *   In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
 *   
 */
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__35619,state){
var map__35620 = p__35619;
var map__35620__$1 = ((((!((map__35620 == null)))?((((map__35620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var loop_msec = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("Evaluating: ",src_code);
} else {
}

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (state_35733){
var state_val_35734 = (state_35733[(1)]);
if((state_val_35734 === (7))){
var inst_35632 = (state_35733[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35733,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_35632__$1 = cljs.core.deref.call(null,state);
var inst_35634 = (inst_35632__$1 == null);
var inst_35635 = cljs.core.not.call(null,inst_35634);
var state_35733__$1 = (function (){var statearr_35735 = state_35733;
(statearr_35735[(7)] = inst_35632__$1);

return statearr_35735;
})();
if(inst_35635){
var statearr_35736_35797 = state_35733__$1;
(statearr_35736_35797[(1)] = (8));

} else {
var statearr_35737_35798 = state_35733__$1;
(statearr_35737_35798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (20))){
var inst_35625 = (state_35733[(8)]);
var inst_35670 = (state_35733[(9)]);
var inst_35670__$1 = (state_35733[(2)]);
var inst_35671 = inst_35625.call(null,inst_35670__$1);
var state_35733__$1 = (function (){var statearr_35738 = state_35733;
(statearr_35738[(10)] = inst_35671);

(statearr_35738[(9)] = inst_35670__$1);

return statearr_35738;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_35739_35799 = state_35733__$1;
(statearr_35739_35799[(1)] = (21));

} else {
var statearr_35740_35800 = state_35733__$1;
(statearr_35740_35800[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (1))){
var state_35733__$1 = state_35733;
if(cljs.core.truth_(unsafe_setter)){
var statearr_35741_35801 = state_35733__$1;
(statearr_35741_35801[(1)] = (2));

} else {
var statearr_35742_35802 = state_35733__$1;
(statearr_35742_35802[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (4))){
var inst_35625 = (state_35733[(2)]);
var state_35733__$1 = (function (){var statearr_35743 = state_35733;
(statearr_35743[(8)] = inst_35625);

return statearr_35743;
})();
var statearr_35744_35803 = state_35733__$1;
(statearr_35744_35803[(2)] = null);

(statearr_35744_35803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (15))){
var inst_35632 = (state_35733[(7)]);
var state_35733__$1 = state_35733;
var statearr_35745_35804 = state_35733__$1;
(statearr_35745_35804[(2)] = inst_35632);

(statearr_35745_35804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (21))){
var inst_35654 = (state_35733[(11)]);
var inst_35668 = (state_35733[(12)]);
var inst_35625 = (state_35733[(8)]);
var inst_35655 = (state_35733[(13)]);
var inst_35653 = (state_35733[(14)]);
var inst_35670 = (state_35733[(9)]);
var inst_35703 = cljs.core.async.chan.call(null,(1));
var inst_35704 = (function (){var setter = inst_35625;
var map__35631 = inst_35653;
var cmd_chan = inst_35654;
var eval_counter = inst_35655;
var evaluation_chan = inst_35668;
var first_result = inst_35670;
var c__13544__auto____$1 = inst_35703;
return ((function (setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (state_35701){
var state_val_35702 = (state_35701[(1)]);
if((state_val_35702 === (1))){
var state_35701__$1 = state_35701;
var statearr_35746_35805 = state_35701__$1;
(statearr_35746_35805[(2)] = null);

(statearr_35746_35805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (2))){
var inst_35677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35678 = cljs.core.async.timeout.call(null,loop_msec);
var inst_35679 = [cmd_chan,inst_35678];
var inst_35680 = (new cljs.core.PersistentVector(null,2,(5),inst_35677,inst_35679,null));
var state_35701__$1 = state_35701;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35701__$1,(4),inst_35680);
} else {
if((state_val_35702 === (3))){
var inst_35699 = (state_35701[(2)]);
var state_35701__$1 = state_35701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35701__$1,inst_35699);
} else {
if((state_val_35702 === (4))){
var inst_35682 = (state_35701[(2)]);
var inst_35683 = cljs.core.nth.call(null,inst_35682,(0),null);
var inst_35684 = cljs.core.nth.call(null,inst_35682,(1),null);
var inst_35685 = cljs.core._EQ_.call(null,inst_35684,cmd_chan);
var inst_35686 = cljs.core._EQ_.call(null,inst_35683,new cljs.core.Keyword(null,"reset","reset",-800929946));
var inst_35687 = (inst_35685) && (inst_35686);
var state_35701__$1 = state_35701;
if(cljs.core.truth_(inst_35687)){
var statearr_35747_35806 = state_35701__$1;
(statearr_35747_35806[(1)] = (5));

} else {
var statearr_35748_35807 = state_35701__$1;
(statearr_35748_35807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (5))){
var state_35701__$1 = state_35701;
var statearr_35749_35808 = state_35701__$1;
(statearr_35749_35808[(2)] = null);

(statearr_35749_35808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (6))){
var inst_35690 = cljs.core.deref.call(null,state);
var inst_35691 = eval_fn.call(null,src_code,inst_35690);
var state_35701__$1 = state_35701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35701__$1,(8),inst_35691);
} else {
if((state_val_35702 === (7))){
var inst_35697 = (state_35701[(2)]);
var state_35701__$1 = state_35701;
var statearr_35750_35809 = state_35701__$1;
(statearr_35750_35809[(2)] = inst_35697);

(statearr_35750_35809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (8))){
var inst_35693 = (state_35701[(2)]);
var inst_35694 = setter.call(null,inst_35693);
var state_35701__$1 = (function (){var statearr_35751 = state_35701;
(statearr_35751[(7)] = inst_35694);

return statearr_35751;
})();
var statearr_35752_35810 = state_35701__$1;
(statearr_35752_35810[(2)] = null);

(statearr_35752_35810[(1)] = (2));


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
});})(setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
;
return ((function (switch__13454__auto__,setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0 = (function (){
var statearr_35753 = [null,null,null,null,null,null,null,null];
(statearr_35753[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__);

(statearr_35753[(1)] = (1));

return statearr_35753;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1 = (function (state_35701){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35754){if((e35754 instanceof Object)){
var ex__13458__auto__ = e35754;
var statearr_35755_35811 = state_35701;
(statearr_35755_35811[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35812 = state_35701;
state_35701 = G__35812;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = function(state_35701){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1.call(this,state_35701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
})();
var state__13546__auto__ = (function (){var statearr_35756 = f__13545__auto__.call(null);
(statearr_35756[(6)] = c__13544__auto____$1);

return statearr_35756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});
;})(setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35703,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
})();
var inst_35705 = cljs.core.async.impl.dispatch.run.call(null,inst_35704);
var state_35733__$1 = (function (){var statearr_35757 = state_35733;
(statearr_35757[(15)] = inst_35705);

return statearr_35757;
})();
var statearr_35758_35813 = state_35733__$1;
(statearr_35758_35813[(2)] = inst_35703);

(statearr_35758_35813[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (13))){
var inst_35645 = (state_35733[(2)]);
var state_35733__$1 = state_35733;
var statearr_35759_35814 = state_35733__$1;
(statearr_35759_35814[(2)] = inst_35645);

(statearr_35759_35814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (22))){
var state_35733__$1 = state_35733;
var statearr_35760_35815 = state_35733__$1;
(statearr_35760_35815[(2)] = null);

(statearr_35760_35815[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (6))){
var inst_35625 = (state_35733[(8)]);
var inst_35626 = (state_35733[(2)]);
var inst_35627 = inst_35625.call(null,inst_35626);
var state_35733__$1 = state_35733;
var statearr_35761_35816 = state_35733__$1;
(statearr_35761_35816[(2)] = inst_35627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (17))){
var state_35733__$1 = state_35733;
var statearr_35762_35817 = state_35733__$1;
(statearr_35762_35817[(2)] = null);

(statearr_35762_35817[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (3))){
var state_35733__$1 = state_35733;
var statearr_35763_35818 = state_35733__$1;
(statearr_35763_35818[(2)] = cljs.core.any_QMARK_);

(statearr_35763_35818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (12))){
var state_35733__$1 = state_35733;
var statearr_35764_35819 = state_35733__$1;
(statearr_35764_35819[(2)] = false);

(statearr_35764_35819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (2))){
var state_35733__$1 = state_35733;
var statearr_35765_35820 = state_35733__$1;
(statearr_35765_35820[(2)] = unsafe_setter);

(statearr_35765_35820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (23))){
var inst_35654 = (state_35733[(11)]);
var inst_35668 = (state_35733[(12)]);
var inst_35625 = (state_35733[(8)]);
var inst_35655 = (state_35733[(13)]);
var inst_35653 = (state_35733[(14)]);
var inst_35670 = (state_35733[(9)]);
var inst_35708 = (state_35733[(2)]);
var inst_35727 = cljs.core.async.chan.call(null,(1));
var inst_35728 = (function (){var setter = inst_35625;
var map__35631 = inst_35653;
var cmd_chan = inst_35654;
var eval_counter = inst_35655;
var evaluation_chan = inst_35668;
var first_result = inst_35670;
var c__13544__auto____$1 = inst_35727;
return ((function (setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function (state_35725){
var state_val_35726 = (state_35725[(1)]);
if((state_val_35726 === (1))){
var inst_35709 = first_result;
var state_35725__$1 = (function (){var statearr_35766 = state_35725;
(statearr_35766[(7)] = inst_35709);

return statearr_35766;
})();
var statearr_35767_35821 = state_35725__$1;
(statearr_35767_35821[(2)] = null);

(statearr_35767_35821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (2))){
var state_35725__$1 = state_35725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35725__$1,(4),evaluation_chan);
} else {
if((state_val_35726 === (3))){
var inst_35723 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35725__$1,inst_35723);
} else {
if((state_val_35726 === (4))){
var inst_35709 = (state_35725[(7)]);
var inst_35712 = (state_35725[(2)]);
var inst_35713 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35709),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35712)].join('');
var inst_35714 = (inst_35712 == null);
var inst_35715 = cljs.core.not.call(null,inst_35714);
var state_35725__$1 = (function (){var statearr_35768 = state_35725;
(statearr_35768[(8)] = inst_35713);

return statearr_35768;
})();
if(inst_35715){
var statearr_35769_35822 = state_35725__$1;
(statearr_35769_35822[(1)] = (5));

} else {
var statearr_35770_35823 = state_35725__$1;
(statearr_35770_35823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (5))){
var inst_35713 = (state_35725[(8)]);
var inst_35717 = setter.call(null,inst_35713);
var inst_35709 = inst_35713;
var state_35725__$1 = (function (){var statearr_35771 = state_35725;
(statearr_35771[(9)] = inst_35717);

(statearr_35771[(7)] = inst_35709);

return statearr_35771;
})();
var statearr_35772_35824 = state_35725__$1;
(statearr_35772_35824[(2)] = null);

(statearr_35772_35824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (6))){
var state_35725__$1 = state_35725;
var statearr_35773_35825 = state_35725__$1;
(statearr_35773_35825[(2)] = null);

(statearr_35773_35825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (7))){
var inst_35721 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35774_35826 = state_35725__$1;
(statearr_35774_35826[(2)] = inst_35721);

(statearr_35774_35826[(1)] = (3));


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
});})(setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
;
return ((function (switch__13454__auto__,setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0 = (function (){
var statearr_35775 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35775[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__);

(statearr_35775[(1)] = (1));

return statearr_35775;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1 = (function (state_35725){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35776){if((e35776 instanceof Object)){
var ex__13458__auto__ = e35776;
var statearr_35777_35827 = state_35725;
(statearr_35777_35827[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35828 = state_35725;
state_35725 = G__35828;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = function(state_35725){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1.call(this,state_35725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
})();
var state__13546__auto__ = (function (){var statearr_35778 = f__13545__auto__.call(null);
(statearr_35778[(6)] = c__13544__auto____$1);

return statearr_35778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});
;})(setter,map__35631,cmd_chan,eval_counter,evaluation_chan,first_result,c__13544__auto____$1,inst_35654,inst_35668,inst_35625,inst_35655,inst_35653,inst_35670,inst_35708,inst_35727,state_val_35734,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
})();
var inst_35729 = cljs.core.async.impl.dispatch.run.call(null,inst_35728);
var state_35733__$1 = (function (){var statearr_35779 = state_35733;
(statearr_35779[(16)] = inst_35729);

(statearr_35779[(17)] = inst_35708);

return statearr_35779;
})();
var statearr_35780_35829 = state_35733__$1;
(statearr_35780_35829[(2)] = inst_35727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (19))){
var inst_35668 = (state_35733[(12)]);
var inst_35661 = (state_35733[(2)]);
var inst_35662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35663 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_35664 = (new cljs.core.PersistentVector(null,1,(5),inst_35662,inst_35663,null));
var inst_35665 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_35664,cljs.core.inc);
var inst_35666 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_35667 = cljs.core.deref.call(null,state);
var inst_35668__$1 = eval_fn.call(null,inst_35666,inst_35667);
var state_35733__$1 = (function (){var statearr_35781 = state_35733;
(statearr_35781[(12)] = inst_35668__$1);

(statearr_35781[(18)] = inst_35661);

(statearr_35781[(19)] = inst_35665);

return statearr_35781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35733__$1,(20),inst_35668__$1);
} else {
if((state_val_35734 === (11))){
var state_35733__$1 = state_35733;
var statearr_35782_35830 = state_35733__$1;
(statearr_35782_35830[(2)] = true);

(statearr_35782_35830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (9))){
var state_35733__$1 = state_35733;
var statearr_35783_35831 = state_35733__$1;
(statearr_35783_35831[(2)] = false);

(statearr_35783_35831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (5))){
var inst_35731 = (state_35733[(2)]);
var state_35733__$1 = state_35733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35733__$1,inst_35731);
} else {
if((state_val_35734 === (14))){
var inst_35632 = (state_35733[(7)]);
var inst_35650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35632);
var state_35733__$1 = state_35733;
var statearr_35784_35832 = state_35733__$1;
(statearr_35784_35832[(2)] = inst_35650);

(statearr_35784_35832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (16))){
var inst_35655 = (state_35733[(13)]);
var inst_35653 = (state_35733[(14)]);
var inst_35653__$1 = (state_35733[(2)]);
var inst_35654 = cljs.core.get.call(null,inst_35653__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_35655__$1 = cljs.core.get.call(null,inst_35653__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_35656 = (inst_35655__$1 === (0));
var state_35733__$1 = (function (){var statearr_35785 = state_35733;
(statearr_35785[(11)] = inst_35654);

(statearr_35785[(13)] = inst_35655__$1);

(statearr_35785[(14)] = inst_35653__$1);

return statearr_35785;
})();
if(cljs.core.truth_(inst_35656)){
var statearr_35786_35833 = state_35733__$1;
(statearr_35786_35833[(1)] = (17));

} else {
var statearr_35787_35834 = state_35733__$1;
(statearr_35787_35834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (10))){
var inst_35648 = (state_35733[(2)]);
var state_35733__$1 = state_35733;
if(cljs.core.truth_(inst_35648)){
var statearr_35788_35835 = state_35733__$1;
(statearr_35788_35835[(1)] = (14));

} else {
var statearr_35789_35836 = state_35733__$1;
(statearr_35789_35836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (18))){
var inst_35654 = (state_35733[(11)]);
var inst_35659 = cljs.core.async.put_BANG_.call(null,inst_35654,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_35733__$1 = state_35733;
var statearr_35790_35837 = state_35733__$1;
(statearr_35790_35837[(2)] = inst_35659);

(statearr_35790_35837[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (8))){
var inst_35632 = (state_35733[(7)]);
var inst_35637 = inst_35632.cljs$lang$protocol_mask$partition0$;
var inst_35638 = (inst_35637 & (64));
var inst_35639 = inst_35632.cljs$core$ISeq$;
var inst_35640 = (cljs.core.PROTOCOL_SENTINEL === inst_35639);
var inst_35641 = (inst_35638) || (inst_35640);
var state_35733__$1 = state_35733;
if(cljs.core.truth_(inst_35641)){
var statearr_35791_35838 = state_35733__$1;
(statearr_35791_35838[(1)] = (11));

} else {
var statearr_35792_35839 = state_35733__$1;
(statearr_35792_35839[(1)] = (12));

}

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
});})(c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble){
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0 = (function (){
var statearr_35793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35793[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__);

(statearr_35793[(1)] = (1));

return statearr_35793;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1 = (function (state_35733){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35794){if((e35794 instanceof Object)){
var ex__13458__auto__ = e35794;
var statearr_35795_35840 = state_35733;
(statearr_35795_35840[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_35733;
state_35733 = G__35841;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__ = function(state_35733){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1.call(this,state_35733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
})();
var state__13546__auto__ = (function (){var statearr_35796 = f__13545__auto__.call(null);
(statearr_35796[(6)] = c__13544__auto__);

return statearr_35796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__35620,map__35620__$1,loop_msec,preamble))
);

return c__13544__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?((function (editor_args){
return (function (p1__35842_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__35842_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
});})(editor_args))
:null),snippet_args,state);
});
klipse.klipse_editors.eval_in_dom_editor = (function klipse$klipse_editors$eval_in_dom_editor(eval_fn,result_element,source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,(function (){var or__8363__auto__ = klipse.dom_utils.value.call(null,source);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (source["textContent"]);
}
})(),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,goog.dom.setTextContent,result_element):null),snippet_args,state);
});
klipse.klipse_editors.wrap_result_in_html = (function klipse$klipse_editors$wrap_result_in_html(elem,res){
var wrapped_res = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,res),Error))?["<div class=\"klipse-error\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"</div>"].join(''):res);
var o_SHARP_ = elem;
(o_SHARP_["innerHTML"] = wrapped_res);

return o_SHARP_;
});
klipse.klipse_editors.eval_in_html_editor = (function klipse$klipse_editors$eval_in_html_editor(eval_fn,result_element,editor_source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,klipse.klipse_editors.wrap_result_in_html,result_element):null),snippet_args,state);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.klipse-editors","editor-options","klipse.klipse-editors/editor-options",1970701494,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword(null,"options-out","options-out",781271031)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
klipse.klipse_editors.default_editor_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true], null);
klipse.klipse_editors.editor_options = (function klipse$klipse_editors$editor_options(editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_in_mode),codemirror_options_in),cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_out_mode,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true),codemirror_options_out)], null);
});
if(typeof klipse.klipse_editors.create_editor !== 'undefined'){
} else {
klipse.klipse_editors.create_editor = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.klipse-editors","create-editor"),((function (method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__){
return (function (type,_){
return type;
});})(method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__35843){
var map__35844 = p__35843;
var map__35844__$1 = ((((!((map__35844 == null)))?((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var editor_args = map__35844__$1;
var eval_fn = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__35846 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__35846,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__35846,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__35846,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__35844,map__35844__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});})(vec__35846,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__35844,map__35844__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

return ((function (vec__35846,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__35844,map__35844__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
;})(vec__35846,in_editor_options,out_editor_options,container,result_element,in_editor,snippet_args,state,map__35844,map__35844__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor = (function klipse$klipse_editors$add_editor(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var o_SHARP_ = window;
(o_SHARP_["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return o_SHARP_;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__35849){
var map__35850 = p__35849;
var map__35850__$1 = ((((!((map__35850 == null)))?((((map__35850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35850):map__35850);
var editor_args = map__35850__$1;
var eval_fn = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var source_code = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__35852 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__35852,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__35852,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-result"));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),"klipse-snippet");
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function (vec__35852,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__35850,map__35850__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});})(vec__35852,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__35850,map__35850__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
], null));

klipse.klipse_editors.add_editor.call(null,in_editor,snippet_num);

return ((function (vec__35852,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__35850,map__35850__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode){
return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
;})(vec__35852,in_editor_options,out_editor_options,container,___$1,result_element,in_editor,snippet_args,state,map__35850,map__35850__$1,editor_args,eval_fn,no_result,codemirror_options_in,default_txt,indent_QMARK_,idle_msec,loop_msec,element,editor_out_mode,source_code,preamble,codemirror_options_out,snippet_num,editor_in_mode))
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__35855){
var map__35856 = p__35855;
var map__35856__$1 = ((((!((map__35856 == null)))?((((map__35856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35856):map__35856);
var editor_args = map__35856__$1;
var eval_fn = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var out_editor_options = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"out-editor-options","out-editor-options",-95308421));
var no_result = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_txt = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var idle_msec = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var source_code = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var in_editor_options = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"in-editor-options","in-editor-options",-1444530378));
var snippet_num = cljs.core.get.call(null,map__35856__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",((function (container,result_element,snippet_args,state,map__35856,map__35856__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});})(container,result_element,snippet_args,state,map__35856,map__35856__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
);

return ((function (container,result_element,snippet_args,state,map__35856,map__35856__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num){
return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
;})(container,result_element,snippet_args,state,map__35856,map__35856__$1,editor_args,eval_fn,out_editor_options,no_result,default_txt,idle_msec,loop_msec,element,source_code,preamble,in_editor_options,snippet_num))
}));

//# sourceMappingURL=klipse_editors.js.map
