// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.args_from_element');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('gadjett.collections');
klipse.args_from_element.read_string_or_val = (function klipse$args_from_element$read_string_or_val(value,not_found){
if(cljs.core.truth_(value)){
return cljs.reader.read_string.call(null,value);
} else {
return not_found;
}
});
klipse.args_from_element.string__GT_array = (function klipse$args_from_element$string__GT_array(s){
if(cljs.core.truth_(s)){
return cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,s,","));
} else {
return null;
}
});
klipse.args_from_element.comment_out = (function klipse$args_from_element$comment_out(src,comment_str){
if(typeof comment_str === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
} else {
return comment_str.call(null,src);
}
});
klipse.args_from_element.content_from_gist = (function klipse$args_from_element$content_from_gist(element,comment_str){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35555){
var state_val_35556 = (state_35555[(1)]);
if((state_val_35556 === (1))){
var inst_35538 = (state_35555[(7)]);
var inst_35537 = (element["dataset"]);
var inst_35538__$1 = (inst_35537["gistId"]);
var state_35555__$1 = (function (){var statearr_35557 = state_35555;
(statearr_35557[(7)] = inst_35538__$1);

return statearr_35557;
})();
if(cljs.core.truth_(inst_35538__$1)){
var statearr_35558_35571 = state_35555__$1;
(statearr_35558_35571[(1)] = (2));

} else {
var statearr_35559_35572 = state_35555__$1;
(statearr_35559_35572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35556 === (2))){
var inst_35538 = (state_35555[(7)]);
var state_35555__$1 = state_35555;
var statearr_35560_35573 = state_35555__$1;
(statearr_35560_35573[(2)] = inst_35538);

(statearr_35560_35573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35556 === (3))){
var state_35555__$1 = state_35555;
var statearr_35561_35574 = state_35555__$1;
(statearr_35561_35574[(2)] = null);

(statearr_35561_35574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35556 === (4))){
var inst_35542 = (state_35555[(8)]);
var inst_35542__$1 = (state_35555[(2)]);
var state_35555__$1 = (function (){var statearr_35562 = state_35555;
(statearr_35562[(8)] = inst_35542__$1);

return statearr_35562;
})();
if(cljs.core.truth_(inst_35542__$1)){
var statearr_35563_35575 = state_35555__$1;
(statearr_35563_35575[(1)] = (5));

} else {
var statearr_35564_35576 = state_35555__$1;
(statearr_35564_35576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35556 === (5))){
var inst_35542 = (state_35555[(8)]);
var inst_35544 = klipse.utils.read_input_from_gist.call(null,inst_35542);
var state_35555__$1 = state_35555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35555__$1,(8),inst_35544);
} else {
if((state_val_35556 === (6))){
var state_35555__$1 = state_35555;
var statearr_35565_35577 = state_35555__$1;
(statearr_35565_35577[(2)] = null);

(statearr_35565_35577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35556 === (7))){
var inst_35553 = (state_35555[(2)]);
var state_35555__$1 = state_35555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35555__$1,inst_35553);
} else {
if((state_val_35556 === (8))){
var inst_35542 = (state_35555[(8)]);
var inst_35546 = (state_35555[(2)]);
var inst_35547 = klipse.utils.gist_path_page.call(null,inst_35542);
var inst_35548 = ["loaded from gist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35547)].join('');
var inst_35549 = klipse.args_from_element.comment_out.call(null,inst_35548,comment_str);
var inst_35550 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35549),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35546)].join('');
var state_35555__$1 = state_35555;
var statearr_35566_35578 = state_35555__$1;
(statearr_35566_35578[(2)] = inst_35550);

(statearr_35566_35578[(1)] = (7));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____0 = (function (){
var statearr_35567 = [null,null,null,null,null,null,null,null,null];
(statearr_35567[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__);

(statearr_35567[(1)] = (1));

return statearr_35567;
});
var klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____1 = (function (state_35555){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35568){if((e35568 instanceof Object)){
var ex__13458__auto__ = e35568;
var statearr_35569_35579 = state_35555;
(statearr_35569_35579[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_35555;
state_35555 = G__35580;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__ = function(state_35555){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____1.call(this,state_35555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__13455__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35570 = f__13545__auto__.call(null);
(statearr_35570[(6)] = c__13544__auto__);

return statearr_35570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35590){
var state_val_35591 = (state_35590[(1)]);
if((state_val_35591 === (1))){
var inst_35581 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35590__$1,(2),inst_35581);
} else {
if((state_val_35591 === (2))){
var inst_35583 = (state_35590[(7)]);
var inst_35583__$1 = (state_35590[(2)]);
var state_35590__$1 = (function (){var statearr_35592 = state_35590;
(statearr_35592[(7)] = inst_35583__$1);

return statearr_35592;
})();
if(cljs.core.truth_(inst_35583__$1)){
var statearr_35593_35601 = state_35590__$1;
(statearr_35593_35601[(1)] = (3));

} else {
var statearr_35594_35602 = state_35590__$1;
(statearr_35594_35602[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (3))){
var inst_35583 = (state_35590[(7)]);
var state_35590__$1 = state_35590;
var statearr_35595_35603 = state_35590__$1;
(statearr_35595_35603[(2)] = inst_35583);

(statearr_35595_35603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (4))){
var inst_35586 = (element["textContent"]);
var state_35590__$1 = state_35590;
var statearr_35596_35604 = state_35590__$1;
(statearr_35596_35604[(2)] = inst_35586);

(statearr_35596_35604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (5))){
var inst_35588 = (state_35590[(2)]);
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35590__$1,inst_35588);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$args_from_element$content_$_state_machine__13455__auto__ = null;
var klipse$args_from_element$content_$_state_machine__13455__auto____0 = (function (){
var statearr_35597 = [null,null,null,null,null,null,null,null];
(statearr_35597[(0)] = klipse$args_from_element$content_$_state_machine__13455__auto__);

(statearr_35597[(1)] = (1));

return statearr_35597;
});
var klipse$args_from_element$content_$_state_machine__13455__auto____1 = (function (state_35590){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35598){if((e35598 instanceof Object)){
var ex__13458__auto__ = e35598;
var statearr_35599_35605 = state_35590;
(statearr_35599_35605[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35606 = state_35590;
state_35590 = G__35606;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__13455__auto__ = function(state_35590){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__13455__auto____1.call(this,state_35590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$args_from_element$content_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__13455__auto____0;
klipse$args_from_element$content_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__13455__auto____1;
return klipse$args_from_element$content_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35600 = f__13545__auto__.call(null);
(statearr_35600[(6)] = c__13544__auto__);

return statearr_35600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__35607){
var map__35608 = p__35607;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var print_length = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
var my_dataset = (element["dataset"]);
var static_fns = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["staticFns"]),false);
var async_code_QMARK_ = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["asyncCode"]),false);
var verbose = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["verbose"]),false);
var compile_display_guard = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["compileDisplayGuard"]),false);
var eval_context__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalContext"]),eval_context);
var max_eval_duration = (my_dataset["maxEvalDuration"]);
var print_length__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["printLength"]),print_length);
var beautify_strings__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["beautifyStrings"]),beautify_strings);
var external_libs = klipse.args_from_element.string__GT_array.call(null,(function (){var or__8363__auto__ = (my_dataset["externalLibs"]);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return null;
}
})());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010)],[external_libs,static_fns,beautify_strings__$1,async_code_QMARK_,verbose,compile_display_guard,print_length__$1,eval_context__$1,max_eval_duration]);
});
klipse.args_from_element.editor_args_from_element = (function klipse$args_from_element$editor_args_from_element(element){
var my_dataset = (element["dataset"]);
var editor_type = (my_dataset["editorType"]);
var loop_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["loopMsec"]),null);
var preamble = (function (){var or__8363__auto__ = (my_dataset["preamble"]);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "";
}
})();
var idle_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalIdleMsec"]),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),editor_type], null));
});

//# sourceMappingURL=args_from_element.js.map
