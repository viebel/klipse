// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.control.parser');
goog.require('cljs.core');
goog.require('gadjett.core_fn');
goog.require('cljs.reader');
goog.require('klipse.utils');
goog.require('klipse.lang.clojure');
goog.require('om.next');
klipse.control.parser.static_fns_QMARK_ = (function klipse$control$parser$static_fns_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()));
});
klipse.control.parser.compile_display_guard_QMARK_ = (function klipse$control$parser$compile_display_guard_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()));
});
klipse.control.parser.beautify_strings_QMARK_ = (function klipse$control$parser$beautify_strings_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()));
});
klipse.control.parser.eval_context_QMARK_ = (function klipse$control$parser$eval_context_QMARK_(){
return cljs.core.keyword.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"eval-context","eval-context",536255614).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "nil";
}
})()));
});
klipse.control.parser.external_libs = (function klipse$control$parser$external_libs(){
return cljs.core.map.call(null,cljs.core.str,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"external-libs","external-libs",1628481346).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "[]";
}
})()));
});
klipse.control.parser.max_eval_duration = (function klipse$control$parser$max_eval_duration(){
return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010).cljs$core$IFn$_invoke$arity$2(klipse.utils.url_parameters.call(null),"nil"));
});
klipse.control.parser.print_length = (function klipse$control$parser$print_length(){
return cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "1000";
}
})());
});
klipse.control.parser.eval_clj = (function klipse$control$parser$eval_clj(var_args){
var args__9647__auto__ = [];
var len__9640__auto___155598 = arguments.length;
var i__9641__auto___155599 = (0);
while(true){
if((i__9641__auto___155599 < len__9640__auto___155598)){
args__9647__auto__.push((arguments[i__9641__auto___155599]));

var G__155600 = (i__9641__auto___155599 + (1));
i__9641__auto___155599 = G__155600;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic = (function (args__26566__auto__){
if(cljs.core.truth_(gadjett.core_fn.record_function_call.call(null,"klipse.control.parser/eval-clj",args__26566__auto__))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.function_call_err_msg.call(null,"klipse.control.parser/eval-clj",args__26566__auto__)),"\n","(gadjett.core-fn/record-function-call \"klipse.control.parser/eval-clj\" args__26566__auto__)"].join('')));
}

var vec__155567 = args__26566__auto__;
var s = cljs.core.nth.call(null,vec__155567,(0),null);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,vec__155567,s){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,vec__155567,s){
return (function (state_155592){
var state_val_155593 = (state_155592[(1)]);
if((state_val_155593 === (1))){
var inst_155573 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"context","context",-830191113)];
var inst_155574 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_155575 = klipse.utils.verbose_QMARK_.call(null);
var inst_155576 = klipse.control.parser.beautify_strings_QMARK_.call(null);
var inst_155577 = klipse.control.parser.external_libs.call(null);
var inst_155578 = klipse.control.parser.max_eval_duration.call(null);
var inst_155579 = klipse.control.parser.print_length.call(null);
var inst_155580 = klipse.control.parser.eval_context_QMARK_.call(null);
var inst_155581 = [inst_155574,inst_155575,inst_155576,inst_155577,inst_155578,inst_155579,inst_155580];
var inst_155582 = cljs.core.PersistentHashMap.fromArrays(inst_155573,inst_155581);
var inst_155583 = klipse.lang.clojure.eval_async.call(null,s,inst_155582);
var state_155592__$1 = state_155592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155592__$1,(2),inst_155583);
} else {
if((state_val_155593 === (2))){
var inst_155585 = (state_155592[(2)]);
var inst_155586 = cljs.core.nth.call(null,inst_155585,(0),null);
var inst_155587 = cljs.core.nth.call(null,inst_155585,(1),null);
var inst_155588 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_155589 = [inst_155586,inst_155587];
var inst_155590 = (new cljs.core.PersistentVector(null,2,(5),inst_155588,inst_155589,null));
var state_155592__$1 = state_155592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155592__$1,inst_155590);
} else {
return null;
}
}
});})(c__13544__auto__,vec__155567,s))
;
return ((function (switch__13454__auto__,c__13544__auto__,vec__155567,s){
return (function() {
var klipse$control$parser$state_machine__13455__auto__ = null;
var klipse$control$parser$state_machine__13455__auto____0 = (function (){
var statearr_155594 = [null,null,null,null,null,null,null];
(statearr_155594[(0)] = klipse$control$parser$state_machine__13455__auto__);

(statearr_155594[(1)] = (1));

return statearr_155594;
});
var klipse$control$parser$state_machine__13455__auto____1 = (function (state_155592){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155595){if((e155595 instanceof Object)){
var ex__13458__auto__ = e155595;
var statearr_155596_155601 = state_155592;
(statearr_155596_155601[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155602 = state_155592;
state_155592 = G__155602;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13455__auto__ = function(state_155592){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13455__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13455__auto____1.call(this,state_155592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$control$parser$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13455__auto____0;
klipse$control$parser$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13455__auto____1;
return klipse$control$parser$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,vec__155567,s))
})();
var state__13546__auto__ = (function (){var statearr_155597 = f__13545__auto__.call(null);
(statearr_155597[(6)] = c__13544__auto__);

return statearr_155597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,vec__155567,s))
);

return c__13544__auto__;
});

klipse.control.parser.eval_clj.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_clj.cljs$lang$applyTo = (function (seq155566){
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155566));
});

klipse.control.parser.read = (function klipse$control$parser$read(p__155603,key,params){
var map__155604 = p__155603;
var map__155604__$1 = ((((!((map__155604 == null)))?((((map__155604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155604):map__155604);
var state = cljs.core.get.call(null,map__155604__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,"")], null);
});
if(typeof klipse.control.parser.mutate !== 'undefined'){
} else {
klipse.control.parser.mutate = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.control.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("input","save","input/save",-905763806,null),(function (p__155606,_,p__155607){
var map__155608 = p__155606;
var map__155608__$1 = ((((!((map__155608 == null)))?((((map__155608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155608):map__155608);
var state = cljs.core.get.call(null,map__155608__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__155609 = p__155607;
var map__155609__$1 = ((((!((map__155609 == null)))?((((map__155609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155609):map__155609);
var value = cljs.core.get.call(null,map__155609__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__155608,map__155608__$1,state,map__155609,map__155609__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961)], null),value);
});})(map__155608,map__155608__$1,state,map__155609,map__155609__$1,value))
], null);
}));
klipse.control.parser.clean_print_box = (function klipse$control$parser$clean_print_box(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),"");
});
klipse.control.parser.append_print_box = (function klipse$control$parser$append_print_box(var_args){
var args__9647__auto__ = [];
var len__9640__auto___155615 = arguments.length;
var i__9641__auto___155616 = (0);
while(true){
if((i__9641__auto___155616 < len__9640__auto___155615)){
args__9647__auto__.push((arguments[i__9641__auto___155616]));

var G__155617 = (i__9641__auto___155616 + (1));
i__9641__auto___155616 = G__155617;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return klipse.control.parser.append_print_box.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

klipse.control.parser.append_print_box.cljs$core$IFn$_invoke$arity$variadic = (function (state,args){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),(function (p1__155612_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__155612_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,args))].join('');
}));
});

klipse.control.parser.append_print_box.cljs$lang$maxFixedArity = (1);

klipse.control.parser.append_print_box.cljs$lang$applyTo = (function (seq155613){
var G__155614 = cljs.core.first.call(null,seq155613);
var seq155613__$1 = cljs.core.next.call(null,seq155613);
return klipse.control.parser.append_print_box.cljs$core$IFn$_invoke$arity$variadic(G__155614,seq155613__$1);
});

cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("editor","consume-mode","editor/consume-mode",-457655084,null),(function (p__155618,_,p__155619){
var map__155620 = p__155618;
var map__155620__$1 = ((((!((map__155620 == null)))?((((map__155620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155620):map__155620);
var state = cljs.core.get.call(null,map__155620__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__155621 = p__155619;
var map__155621__$1 = ((((!((map__155621 == null)))?((((map__155621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155621):map__155621);
var value = cljs.core.get.call(null,map__155621__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__155620,map__155620__$1,state,map__155621,map__155621__$1,value){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"editor-modes","editor-modes",-599444568)], null),cljs.core.rest);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"editor-mode","editor-mode",607583711)], null),value);
});})(map__155620,map__155620__$1,state,map__155621,map__155621__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("editor","set-mode","editor/set-mode",-494931626,null),(function (p__155624,_,p__155625){
var map__155626 = p__155624;
var map__155626__$1 = ((((!((map__155626 == null)))?((((map__155626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155626):map__155626);
var state = cljs.core.get.call(null,map__155626__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__155627 = p__155625;
var map__155627__$1 = ((((!((map__155627 == null)))?((((map__155627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155627):map__155627);
var value = cljs.core.get.call(null,map__155627__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__155626,map__155626__$1,state,map__155627,map__155627__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"editor-mode","editor-mode",607583711)], null),value);
});})(map__155626,map__155626__$1,state,map__155627,map__155627__$1,value))
], null);
}));
cljs.core._add_method.call(null,klipse.control.parser.mutate,new cljs.core.Symbol("clj","eval-and-compile","clj/eval-and-compile",44829747,null),(function (p__155630,_,p__155631){
var map__155632 = p__155630;
var map__155632__$1 = ((((!((map__155632 == null)))?((((map__155632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155632):map__155632);
var state = cljs.core.get.call(null,map__155632__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__155633 = p__155631;
var map__155633__$1 = ((((!((map__155633 == null)))?((((map__155633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155633):map__155633);
var value = cljs.core.get.call(null,map__155633__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__155632,map__155632__$1,state,map__155633,map__155633__$1,value){
return (function (){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value){
return (function (state_155667){
var state_val_155668 = (state_155667[(1)]);
if((state_val_155668 === (1))){
var inst_155636 = klipse.control.parser.clean_print_box.call(null,state);
var inst_155639 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_155640 = cljs.core.partial.call(null,klipse.control.parser.append_print_box,state);
var inst_155641 = cljs.core._STAR_print_fn_STAR_ = inst_155640;
var state_155667__$1 = (function (){var statearr_155669 = state_155667;
(statearr_155669[(7)] = inst_155639);

(statearr_155669[(8)] = inst_155641);

(statearr_155669[(9)] = inst_155636);

return statearr_155669;
})();
var statearr_155670_155678 = state_155667__$1;
(statearr_155670_155678[(2)] = null);

(statearr_155670_155678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155668 === (2))){
var inst_155665 = (state_155667[(2)]);
var state_155667__$1 = state_155667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155667__$1,inst_155665);
} else {
if((state_val_155668 === (3))){
var inst_155642 = (state_155667[(2)]);
var inst_155643 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_155644 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_155667__$1 = (function (){var statearr_155671 = state_155667;
(statearr_155671[(10)] = inst_155642);

(statearr_155671[(11)] = inst_155644);

(statearr_155671[(12)] = inst_155643);

return statearr_155671;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155667__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155668 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155667,null,null,(3),(2));
var inst_155648 = klipse.control.parser.eval_clj.call(null,value);
var state_155667__$1 = state_155667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155667__$1,(5),inst_155648);
} else {
if((state_val_155668 === (5))){
var inst_155650 = (state_155667[(2)]);
var inst_155651 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),new cljs.core.Keyword(null,"context","context",-830191113)];
var inst_155652 = klipse.control.parser.static_fns_QMARK_.call(null);
var inst_155653 = klipse.utils.verbose_QMARK_.call(null);
var inst_155654 = klipse.control.parser.external_libs.call(null);
var inst_155655 = klipse.control.parser.compile_display_guard_QMARK_.call(null);
var inst_155656 = klipse.control.parser.max_eval_duration.call(null);
var inst_155657 = klipse.control.parser.eval_context_QMARK_.call(null);
var inst_155658 = [inst_155652,inst_155653,inst_155654,inst_155655,inst_155656,inst_155657];
var inst_155659 = cljs.core.PersistentHashMap.fromArrays(inst_155651,inst_155658);
var inst_155660 = klipse.lang.clojure.compile_async.call(null,value,inst_155659);
var state_155667__$1 = (function (){var statearr_155672 = state_155667;
(statearr_155672[(13)] = inst_155650);

return statearr_155672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155667__$1,(6),inst_155660);
} else {
if((state_val_155668 === (6))){
var inst_155650 = (state_155667[(13)]);
var inst_155662 = (state_155667[(2)]);
var inst_155663 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),inst_155650,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),inst_155662);
var state_155667__$1 = state_155667;
var statearr_155673_155679 = state_155667__$1;
(statearr_155673_155679[(2)] = inst_155663);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155667__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value){
return (function() {
var klipse$control$parser$state_machine__13455__auto__ = null;
var klipse$control$parser$state_machine__13455__auto____0 = (function (){
var statearr_155674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155674[(0)] = klipse$control$parser$state_machine__13455__auto__);

(statearr_155674[(1)] = (1));

return statearr_155674;
});
var klipse$control$parser$state_machine__13455__auto____1 = (function (state_155667){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155675){if((e155675 instanceof Object)){
var ex__13458__auto__ = e155675;
var statearr_155676_155680 = state_155667;
(statearr_155676_155680[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155681 = state_155667;
state_155667 = G__155681;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13455__auto__ = function(state_155667){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13455__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13455__auto____1.call(this,state_155667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$control$parser$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13455__auto____0;
klipse$control$parser$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13455__auto____1;
return klipse$control$parser$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value))
})();
var state__13546__auto__ = (function (){var statearr_155677 = f__13545__auto__.call(null);
(statearr_155677[(6)] = c__13544__auto__);

return statearr_155677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__155632,map__155632__$1,state,map__155633,map__155633__$1,value))
);

return c__13544__auto__;
});})(map__155632,map__155632__$1,state,map__155633,map__155633__$1,value))
], null);
}));

//# sourceMappingURL=parser.js.map
