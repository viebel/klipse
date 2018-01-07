// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('klipse.args_from_element');
goog.require('klipse.klipse_editors');
goog.require('klipse.utils');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('gadjett.collections');
klipse.plugin.out_placeholder = "the evaluation will appear here (soon)...";
klipse.plugin.snippet_counter = cljs.core.atom.call(null,(0));
klipse.plugin.snippet_num_BANG_ = (function klipse$plugin$snippet_num_BANG_(){
var res = cljs.core.deref.call(null,klipse.plugin.snippet_counter);
cljs.core.swap_BANG_.call(null,klipse.plugin.snippet_counter,cljs.core.inc);

return res;
});
klipse.plugin.calc_editor_args_from_element = (function klipse$plugin$calc_editor_args_from_element(element,global_idle_msec,min_idle_msec,global_editor_type){
var map__35860 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__35860__$1 = ((((!((map__35860 == null)))?((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35860):map__35860);
var idle_msec = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__8715__auto__ = min_idle_msec;
var y__8716__auto__ = idle_msec;
return ((x__8715__auto__ > y__8716__auto__) ? x__8715__auto__ : y__8716__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__35862 = the_type;
switch (G__35862) {
case "code-mirror":
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

break;
case "dom":
return new cljs.core.Keyword(null,"dom","dom",-1236537922);

break;
case "html":
return new cljs.core.Keyword(null,"html","html",-998796897);

break;
default:
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

}
}
});
klipse.plugin.load_external_scripts = (function klipse$plugin$load_external_scripts(scripts,no_dynamic_scritps_QMARK_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (1))){
var state_35893__$1 = state_35893;
if(cljs.core.truth_(no_dynamic_scritps_QMARK_)){
var statearr_35895_35908 = state_35893__$1;
(statearr_35895_35908[(1)] = (2));

} else {
var statearr_35896_35909 = state_35893__$1;
(statearr_35896_35909[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (2))){
var inst_35865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35866 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_35867 = (new cljs.core.PersistentVector(null,2,(5),inst_35865,inst_35866,null));
var state_35893__$1 = state_35893;
var statearr_35897_35910 = state_35893__$1;
(statearr_35897_35910[(2)] = inst_35867);

(statearr_35897_35910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (3))){
var inst_35872 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35893__$1,(5),inst_35872);
} else {
if((state_val_35894 === (4))){
var inst_35891 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35893__$1,inst_35891);
} else {
if((state_val_35894 === (5))){
var inst_35874 = (state_35893[(2)]);
var inst_35875 = cljs.core.nth.call(null,inst_35874,(0),null);
var inst_35876 = cljs.core.nth.call(null,inst_35874,(1),null);
var inst_35877 = cljs.core.nth.call(null,inst_35874,(2),null);
var inst_35878 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_35875);
var state_35893__$1 = (function (){var statearr_35898 = state_35893;
(statearr_35898[(7)] = inst_35876);

(statearr_35898[(8)] = inst_35877);

return statearr_35898;
})();
if(inst_35878){
var statearr_35899_35911 = state_35893__$1;
(statearr_35899_35911[(1)] = (6));

} else {
var statearr_35900_35912 = state_35893__$1;
(statearr_35900_35912[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (6))){
var inst_35880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35881 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_35882 = (new cljs.core.PersistentVector(null,2,(5),inst_35880,inst_35881,null));
var state_35893__$1 = state_35893;
var statearr_35901_35913 = state_35893__$1;
(statearr_35901_35913[(2)] = inst_35882);

(statearr_35901_35913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (7))){
var inst_35876 = (state_35893[(7)]);
var inst_35877 = (state_35893[(8)]);
var inst_35884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35885 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35877),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35876)].join('');
var inst_35886 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_35885];
var inst_35887 = (new cljs.core.PersistentVector(null,2,(5),inst_35884,inst_35886,null));
var state_35893__$1 = state_35893;
var statearr_35902_35914 = state_35893__$1;
(statearr_35902_35914[(2)] = inst_35887);

(statearr_35902_35914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (8))){
var inst_35889 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35903_35915 = state_35893__$1;
(statearr_35903_35915[(2)] = inst_35889);

(statearr_35903_35915[(1)] = (4));


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
var klipse$plugin$load_external_scripts_$_state_machine__13455__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__13455__auto____0 = (function (){
var statearr_35904 = [null,null,null,null,null,null,null,null,null];
(statearr_35904[(0)] = klipse$plugin$load_external_scripts_$_state_machine__13455__auto__);

(statearr_35904[(1)] = (1));

return statearr_35904;
});
var klipse$plugin$load_external_scripts_$_state_machine__13455__auto____1 = (function (state_35893){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35905){if((e35905 instanceof Object)){
var ex__13458__auto__ = e35905;
var statearr_35906_35916 = state_35893;
(statearr_35906_35916[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35917 = state_35893;
state_35893 = G__35917;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__13455__auto__ = function(state_35893){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__13455__auto____1.call(this,state_35893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$load_external_scripts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__13455__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__13455__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35907 = f__13545__auto__.call(null);
(statearr_35907[(6)] = c__13544__auto__);

return statearr_35907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__35920,p__35921){
var map__35922 = p__35920;
var map__35922__$1 = ((((!((map__35922 == null)))?((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35922):map__35922);
var no_dynamic_scripts = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var eval_idle_msec = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var minimalistic_ui = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var editor_type = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var print_length = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var beautify_strings = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var codemirror_options_in = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var codemirror_options_out = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var map__35923 = p__35921;
var map__35923__$1 = ((((!((map__35923 == null)))?((((map__35923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35923):map__35923);
var lang_opts = map__35923__$1;
var eval_fn = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__35923__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (state_36007){
var state_val_36008 = (state_36007[(1)]);
if((state_val_36008 === (7))){
var state_36007__$1 = state_36007;
var statearr_36009_36057 = state_36007__$1;
(statearr_36009_36057[(2)] = false);

(statearr_36009_36057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (20))){
var inst_35976 = (state_36007[(7)]);
var state_36007__$1 = state_36007;
var statearr_36010_36058 = state_36007__$1;
(statearr_36010_36058[(2)] = inst_35976);

(statearr_36010_36058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (27))){
var inst_35975 = (state_36007[(8)]);
var inst_35994 = (state_36007[(2)]);
var inst_35995 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_35975);
var state_36007__$1 = (function (){var statearr_36011 = state_36007;
(statearr_36011[(9)] = inst_35994);

return statearr_36011;
})();
if(inst_35995){
var statearr_36012_36059 = state_36007__$1;
(statearr_36012_36059[(1)] = (28));

} else {
var statearr_36013_36060 = state_36007__$1;
(statearr_36013_36060[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (1))){
var state_36007__$1 = state_36007;
if(cljs.core.truth_(element)){
var statearr_36014_36061 = state_36007__$1;
(statearr_36014_36061[(1)] = (2));

} else {
var statearr_36015_36062 = state_36007__$1;
(statearr_36015_36062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (24))){
var inst_35975 = (state_36007[(8)]);
var inst_35987 = (state_36007[(2)]);
var inst_35988 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_35989 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_35975);
var state_36007__$1 = (function (){var statearr_36016 = state_36007;
(statearr_36016[(10)] = inst_35987);

(statearr_36016[(11)] = inst_35988);

return statearr_36016;
})();
if(inst_35989){
var statearr_36017_36063 = state_36007__$1;
(statearr_36017_36063[(1)] = (25));

} else {
var statearr_36018_36064 = state_36007__$1;
(statearr_36018_36064[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (4))){
var inst_36005 = (state_36007[(2)]);
var state_36007__$1 = state_36007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36007__$1,inst_36005);
} else {
if((state_val_36008 === (15))){
var inst_35962 = (state_36007[(12)]);
var state_36007__$1 = state_36007;
var statearr_36019_36065 = state_36007__$1;
(statearr_36019_36065[(2)] = inst_35962);

(statearr_36019_36065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (21))){
var inst_35975 = (state_36007[(8)]);
var inst_35982 = (state_36007[(2)]);
var inst_35983 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_35975);
var state_36007__$1 = (function (){var statearr_36020 = state_36007;
(statearr_36020[(13)] = inst_35982);

return statearr_36020;
})();
if(inst_35983){
var statearr_36021_36066 = state_36007__$1;
(statearr_36021_36066[(1)] = (22));

} else {
var statearr_36022_36067 = state_36007__$1;
(statearr_36022_36067[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (13))){
var inst_35939 = (state_36007[(14)]);
var state_36007__$1 = state_36007;
var statearr_36023_36068 = state_36007__$1;
(statearr_36023_36068[(2)] = inst_35939);

(statearr_36023_36068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (22))){
var state_36007__$1 = state_36007;
var statearr_36024_36069 = state_36007__$1;
(statearr_36024_36069[(2)] = beautify_QMARK_);

(statearr_36024_36069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (29))){
var state_36007__$1 = state_36007;
var statearr_36025_36070 = state_36007__$1;
(statearr_36025_36070[(2)] = false);

(statearr_36025_36070[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (6))){
var inst_35939 = (state_36007[(14)]);
var inst_35944 = inst_35939.cljs$lang$protocol_mask$partition0$;
var inst_35945 = (inst_35944 & (64));
var inst_35946 = inst_35939.cljs$core$ISeq$;
var inst_35947 = (cljs.core.PROTOCOL_SENTINEL === inst_35946);
var inst_35948 = (inst_35945) || (inst_35947);
var state_36007__$1 = state_36007;
if(cljs.core.truth_(inst_35948)){
var statearr_36026_36071 = state_36007__$1;
(statearr_36026_36071[(1)] = (9));

} else {
var statearr_36027_36072 = state_36007__$1;
(statearr_36027_36072[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (28))){
var state_36007__$1 = state_36007;
var statearr_36028_36073 = state_36007__$1;
(statearr_36028_36073[(2)] = beautify_output_QMARK_);

(statearr_36028_36073[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (25))){
var inst_35935 = (state_36007[(15)]);
var state_36007__$1 = state_36007;
var statearr_36029_36074 = state_36007__$1;
(statearr_36029_36074[(2)] = inst_35935);

(statearr_36029_36074[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (17))){
var inst_35969 = (state_36007[(2)]);
var inst_35970 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_35969);
var inst_35971 = gadjett.collections.collify.call(null,external_scripts);
var inst_35972 = klipse.plugin.load_external_scripts.call(null,inst_35971,no_dynamic_scripts);
var state_36007__$1 = (function (){var statearr_36030 = state_36007;
(statearr_36030[(16)] = inst_35970);

return statearr_36030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36007__$1,(18),inst_35972);
} else {
if((state_val_36008 === (3))){
var state_36007__$1 = state_36007;
var statearr_36031_36075 = state_36007__$1;
(statearr_36031_36075[(2)] = null);

(statearr_36031_36075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (12))){
var inst_35939 = (state_36007[(14)]);
var inst_35957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35939);
var state_36007__$1 = state_36007;
var statearr_36032_36076 = state_36007__$1;
(statearr_36032_36076[(2)] = inst_35957);

(statearr_36032_36076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (2))){
var inst_35934 = (state_36007[(17)]);
var inst_35931 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_35932 = [eval_context,print_length,beautify_strings];
var inst_35933 = cljs.core.PersistentHashMap.fromArrays(inst_35931,inst_35932);
var inst_35934__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_35933);
var inst_35935 = (function (){var eval_args = inst_35934__$1;
return ((function (eval_args,inst_35934,inst_35931,inst_35932,inst_35933,inst_35934__$1,state_val_36008,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (p1__35918_SHARP_,p2__35919_SHARP_){
return eval_fn.call(null,p1__35918_SHARP_,cljs.core.merge.call(null,eval_args,p2__35919_SHARP_));
});
;})(eval_args,inst_35934,inst_35931,inst_35932,inst_35933,inst_35934__$1,state_val_36008,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var inst_35936 = klipse.args_from_element.content.call(null,element,comment_str);
var state_36007__$1 = (function (){var statearr_36033 = state_36007;
(statearr_36033[(17)] = inst_35934__$1);

(statearr_36033[(15)] = inst_35935);

return statearr_36033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36007__$1,(5),inst_35936);
} else {
if((state_val_36008 === (23))){
var state_36007__$1 = state_36007;
var statearr_36034_36077 = state_36007__$1;
(statearr_36034_36077[(2)] = false);

(statearr_36034_36077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (19))){
var state_36007__$1 = state_36007;
var statearr_36035_36078 = state_36007__$1;
(statearr_36035_36078[(2)] = klipse.plugin.out_placeholder);

(statearr_36035_36078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (11))){
var inst_35952 = (state_36007[(2)]);
var state_36007__$1 = state_36007;
var statearr_36036_36079 = state_36007__$1;
(statearr_36036_36079[(2)] = inst_35952);

(statearr_36036_36079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (9))){
var state_36007__$1 = state_36007;
var statearr_36037_36080 = state_36007__$1;
(statearr_36037_36080[(2)] = true);

(statearr_36037_36080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (5))){
var inst_35939 = (state_36007[(14)]);
var inst_35938 = (state_36007[(2)]);
var inst_35939__$1 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_35941 = (inst_35939__$1 == null);
var inst_35942 = cljs.core.not.call(null,inst_35941);
var state_36007__$1 = (function (){var statearr_36038 = state_36007;
(statearr_36038[(18)] = inst_35938);

(statearr_36038[(14)] = inst_35939__$1);

return statearr_36038;
})();
if(inst_35942){
var statearr_36039_36081 = state_36007__$1;
(statearr_36039_36081[(1)] = (6));

} else {
var statearr_36040_36082 = state_36007__$1;
(statearr_36040_36082[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (14))){
var inst_35960 = (state_36007[(19)]);
var inst_35962 = (state_36007[(12)]);
var inst_35960__$1 = (state_36007[(2)]);
var inst_35961 = cljs.core.get.call(null,inst_35960__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_35962__$1 = cljs.core.get.call(null,inst_35960__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_35963 = cljs.core.get.call(null,inst_35960__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_35964 = cljs.core.get.call(null,inst_35960__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_35965 = cljs.core.get.call(null,inst_35960__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_36007__$1 = (function (){var statearr_36041 = state_36007;
(statearr_36041[(20)] = inst_35961);

(statearr_36041[(21)] = inst_35964);

(statearr_36041[(22)] = inst_35963);

(statearr_36041[(23)] = inst_35965);

(statearr_36041[(19)] = inst_35960__$1);

(statearr_36041[(12)] = inst_35962__$1);

return statearr_36041;
})();
if(cljs.core.truth_(inst_35962__$1)){
var statearr_36042_36083 = state_36007__$1;
(statearr_36042_36083[(1)] = (15));

} else {
var statearr_36043_36084 = state_36007__$1;
(statearr_36043_36084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (26))){
var inst_35975 = (state_36007[(8)]);
var inst_35961 = (state_36007[(20)]);
var inst_35964 = (state_36007[(21)]);
var inst_35963 = (state_36007[(22)]);
var inst_35976 = (state_36007[(7)]);
var inst_35938 = (state_36007[(18)]);
var inst_35934 = (state_36007[(17)]);
var inst_35965 = (state_36007[(23)]);
var inst_35960 = (state_36007[(19)]);
var inst_35974 = (state_36007[(24)]);
var inst_35935 = (state_36007[(15)]);
var inst_35970 = (state_36007[(16)]);
var inst_35992 = (function (){var the_editor_type = inst_35970;
var vec__35928 = inst_35974;
var eval_fn_with_args = inst_35935;
var idle_msec = inst_35961;
var loop_msec = inst_35963;
var load_error = inst_35976;
var async_code_QMARK_ = inst_35964;
var load_status = inst_35975;
var eval_args = inst_35934;
var source_code = inst_35938;
var preamble = inst_35965;
var map__35927 = inst_35960;
return ((function (the_editor_type,vec__35928,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,map__35927,inst_35975,inst_35961,inst_35964,inst_35963,inst_35976,inst_35938,inst_35934,inst_35965,inst_35960,inst_35974,inst_35935,inst_35970,state_val_36008,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function (){
return cljs.core.async.chan.call(null);
});
;})(the_editor_type,vec__35928,eval_fn_with_args,idle_msec,loop_msec,load_error,async_code_QMARK_,load_status,eval_args,source_code,preamble,map__35927,inst_35975,inst_35961,inst_35964,inst_35963,inst_35976,inst_35938,inst_35934,inst_35965,inst_35960,inst_35974,inst_35935,inst_35970,state_val_36008,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state_36007__$1 = state_36007;
var statearr_36044_36085 = state_36007__$1;
(statearr_36044_36085[(2)] = inst_35992);

(statearr_36044_36085[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (16))){
var state_36007__$1 = state_36007;
var statearr_36045_36086 = state_36007__$1;
(statearr_36045_36086[(2)] = default_editor);

(statearr_36045_36086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (30))){
var inst_35961 = (state_36007[(20)]);
var inst_35964 = (state_36007[(21)]);
var inst_35963 = (state_36007[(22)]);
var inst_35994 = (state_36007[(9)]);
var inst_35938 = (state_36007[(18)]);
var inst_35965 = (state_36007[(23)]);
var inst_35987 = (state_36007[(10)]);
var inst_35982 = (state_36007[(13)]);
var inst_35988 = (state_36007[(11)]);
var inst_35970 = (state_36007[(16)]);
var inst_35977 = (state_36007[(25)]);
var inst_35999 = (state_36007[(2)]);
var inst_36000 = [inst_35982,inst_35987,inst_35961,inst_35963,element,editor_out_mode,inst_35964,inst_35938,inst_35965,codemirror_options_out,editor_in_mode,inst_35988,inst_35994,no_result,codemirror_options_in,inst_35999];
var inst_36001 = cljs.core.PersistentHashMap.fromArrays(inst_35977,inst_36000);
var inst_36002 = klipse.klipse_editors.create_editor.call(null,inst_35970,inst_36001);
var state_36007__$1 = state_36007;
var statearr_36046_36087 = state_36007__$1;
(statearr_36046_36087[(2)] = inst_36002);

(statearr_36046_36087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (10))){
var state_36007__$1 = state_36007;
var statearr_36047_36088 = state_36007__$1;
(statearr_36047_36088[(2)] = false);

(statearr_36047_36088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (18))){
var inst_35975 = (state_36007[(8)]);
var inst_35974 = (state_36007[(24)]);
var inst_35974__$1 = (state_36007[(2)]);
var inst_35975__$1 = cljs.core.nth.call(null,inst_35974__$1,(0),null);
var inst_35976 = cljs.core.nth.call(null,inst_35974__$1,(1),null);
var inst_35977 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_35978 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_35975__$1);
var state_36007__$1 = (function (){var statearr_36048 = state_36007;
(statearr_36048[(8)] = inst_35975__$1);

(statearr_36048[(7)] = inst_35976);

(statearr_36048[(24)] = inst_35974__$1);

(statearr_36048[(25)] = inst_35977);

return statearr_36048;
})();
if(inst_35978){
var statearr_36049_36089 = state_36007__$1;
(statearr_36049_36089[(1)] = (19));

} else {
var statearr_36050_36090 = state_36007__$1;
(statearr_36050_36090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36008 === (8))){
var inst_35955 = (state_36007[(2)]);
var state_36007__$1 = state_36007;
if(cljs.core.truth_(inst_35955)){
var statearr_36051_36091 = state_36007__$1;
(statearr_36051_36091[(1)] = (12));

} else {
var statearr_36052_36092 = state_36007__$1;
(statearr_36052_36092[(1)] = (13));

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
}
}
}
}
}
}
}
});})(c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts){
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____0 = (function (){
var statearr_36053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36053[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__);

(statearr_36053[(1)] = (1));

return statearr_36053;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____1 = (function (state_36007){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36054){if((e36054 instanceof Object)){
var ex__13458__auto__ = e36054;
var statearr_36055_36093 = state_36007;
(statearr_36055_36093[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36094 = state_36007;
state_36007 = G__36094;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__ = function(state_36007){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____1.call(this,state_36007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
})();
var state__13546__auto__ = (function (){var statearr_36056 = f__13545__auto__.call(null);
(statearr_36056[(6)] = c__13544__auto__);

return statearr_36056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__35922,map__35922__$1,no_dynamic_scripts,eval_idle_msec,minimalistic_ui,editor_type,print_length,beautify_strings,eval_context,codemirror_options_in,codemirror_options_out,map__35923,map__35923__$1,lang_opts,eval_fn,beautify_output_QMARK_,no_result,default_editor,editor_out_mode,beautify_QMARK_,min_eval_idle_msec,comment_str,editor_in_mode,external_scripts))
);

return c__13544__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__36095_SHARP_){
return (cljs.core._EQ_.call(null,p1__36095_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__36095_SHARP_,false));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36096){
return cljs.core.map_QMARK_.call(null,G__36096);
}),(function (G__36096){
return cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__36096){
return cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__36096){
return cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__36096){
return cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__36096){
return (cljs.core.map_QMARK_.call(null,G__36096)) && (cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__36096,new cljs.core.Keyword(null,"comment-str","comment-str",130143853)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36097){
return cljs.core.map_QMARK_.call(null,G__36097);
})], null),(function (G__36097){
return cljs.core.map_QMARK_.call(null,G__36097);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.plugin","klipsify-with-opts","klipse.plugin/klipsify-with-opts",331340081,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * To be called from outside.
 *   Klipsifies a snippet.
 *   Returns a channel that will be ready when the snippet is evaluated.
 */
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,general_settings,mode){
var temp__6751__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__6751__auto__)){
var opts = temp__6751__auto__;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,opts,temp__6751__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,opts,temp__6751__auto__){
return (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (1))){
var inst_36098 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(3),inst_36098);
} else {
if((state_val_36106 === (2))){
var inst_36103 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (3))){
var inst_36100 = (state_36105[(2)]);
var inst_36101 = inst_36100.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(2),inst_36101);
} else {
return null;
}
}
}
});})(c__13544__auto__,opts,temp__6751__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,opts,temp__6751__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13455__auto____0 = (function (){
var statearr_36107 = [null,null,null,null,null,null,null];
(statearr_36107[(0)] = klipse$plugin$klipsify_$_state_machine__13455__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var klipse$plugin$klipsify_$_state_machine__13455__auto____1 = (function (state_36105){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36108){if((e36108 instanceof Object)){
var ex__13458__auto__ = e36108;
var statearr_36109_36121 = state_36105;
(statearr_36109_36121[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36122 = state_36105;
state_36105 = G__36122;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13455__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13455__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,opts,temp__6751__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36110 = f__13545__auto__.call(null);
(statearr_36110[(6)] = c__13544__auto__);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,opts,temp__6751__auto__))
);

return c__13544__auto__;
} else {
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,temp__6751__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,temp__6751__auto__){
return (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (1))){
var inst_36111 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_36112 = cljs.core.keys.call(null,inst_36111);
var inst_36113 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_36112);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36115__$1,inst_36113);
} else {
return null;
}
});})(c__13544__auto__,temp__6751__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,temp__6751__auto__){
return (function() {
var klipse$plugin$klipsify_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13455__auto____0 = (function (){
var statearr_36117 = [null,null,null,null,null,null,null];
(statearr_36117[(0)] = klipse$plugin$klipsify_$_state_machine__13455__auto__);

(statearr_36117[(1)] = (1));

return statearr_36117;
});
var klipse$plugin$klipsify_$_state_machine__13455__auto____1 = (function (state_36115){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36118){if((e36118 instanceof Object)){
var ex__13458__auto__ = e36118;
var statearr_36119_36123 = state_36115;
(statearr_36119_36123[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36124 = state_36115;
state_36115 = G__36124;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13455__auto__ = function(state_36115){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13455__auto____1.call(this,state_36115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,temp__6751__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36120 = f__13545__auto__.call(null);
(statearr_36120[(6)] = c__13544__auto__);

return statearr_36120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,temp__6751__auto__))
);

return c__13544__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__6751__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__6751__auto__)){
var opts = temp__6751__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts);
} else {
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,temp__6751__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,temp__6751__auto__){
return (function (state_36127){
var state_val_36128 = (state_36127[(1)]);
if((state_val_36128 === (1))){
var inst_36125 = (function (){return ((function (state_val_36128,c__13544__auto__,temp__6751__auto__){
return (function (){
var c__13544__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__){
return (function (state_36133){
var state_val_36134 = (state_36133[(1)]);
if((state_val_36134 === (1))){
var inst_36129 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_36130 = cljs.core.keys.call(null,inst_36129);
var inst_36131 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_36130);
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36133__$1,inst_36131);
} else {
return null;
}
});})(c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0 = (function (){
var statearr_36135 = [null,null,null,null,null,null,null];
(statearr_36135[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__);

(statearr_36135[(1)] = (1));

return statearr_36135;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1 = (function (state_36133){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36136){if((e36136 instanceof Object)){
var ex__13458__auto__ = e36136;
var statearr_36137_36143 = state_36133;
(statearr_36137_36143[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36144 = state_36133;
state_36133 = G__36144;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__ = function(state_36133){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1.call(this,state_36133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36138 = f__13545__auto__.call(null);
(statearr_36138[(6)] = c__13544__auto____$1);

return statearr_36138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto____$1,state_val_36128,c__13544__auto__,temp__6751__auto__))
);

return c__13544__auto____$1;
});
;})(state_val_36128,c__13544__auto__,temp__6751__auto__))
})();
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36127__$1,inst_36125);
} else {
return null;
}
});})(c__13544__auto__,temp__6751__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,temp__6751__auto__){
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0 = (function (){
var statearr_36139 = [null,null,null,null,null,null,null];
(statearr_36139[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__);

(statearr_36139[(1)] = (1));

return statearr_36139;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1 = (function (state_36127){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36140){if((e36140 instanceof Object)){
var ex__13458__auto__ = e36140;
var statearr_36141_36145 = state_36127;
(statearr_36141_36145[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36146 = state_36127;
state_36127 = G__36146;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__ = function(state_36127){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1.call(this,state_36127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,temp__6751__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36142 = f__13545__auto__.call(null);
(statearr_36142[(6)] = c__13544__auto__);

return statearr_36142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,temp__6751__auto__))
);

return c__13544__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_36173){
var state_val_36174 = (state_36173[(1)]);
if((state_val_36174 === (7))){
var inst_36153 = (state_36173[(7)]);
var inst_36154 = (state_36173[(8)]);
var inst_36156 = klipse.plugin.klipsify_no_eval.call(null,inst_36153,general_settings,inst_36154);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36173__$1,(10),inst_36156);
} else {
if((state_val_36174 === (1))){
var inst_36147 = cljs.core.PersistentVector.EMPTY;
var inst_36148 = elements;
var inst_36149 = inst_36147;
var state_36173__$1 = (function (){var statearr_36175 = state_36173;
(statearr_36175[(9)] = inst_36148);

(statearr_36175[(10)] = inst_36149);

return statearr_36175;
})();
var statearr_36176_36194 = state_36173__$1;
(statearr_36176_36194[(2)] = null);

(statearr_36176_36194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (4))){
var inst_36148 = (state_36173[(9)]);
var inst_36153 = (state_36173[(7)]);
var inst_36154 = (state_36173[(8)]);
var inst_36153__$1 = cljs.core.first.call(null,inst_36148);
var inst_36154__$1 = modes.call(null,inst_36153__$1);
var state_36173__$1 = (function (){var statearr_36177 = state_36173;
(statearr_36177[(7)] = inst_36153__$1);

(statearr_36177[(8)] = inst_36154__$1);

return statearr_36177;
})();
if(cljs.core.truth_(inst_36154__$1)){
var statearr_36178_36195 = state_36173__$1;
(statearr_36178_36195[(1)] = (7));

} else {
var statearr_36179_36196 = state_36173__$1;
(statearr_36179_36196[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (6))){
var inst_36169 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36180_36197 = state_36173__$1;
(statearr_36180_36197[(2)] = inst_36169);

(statearr_36180_36197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (3))){
var inst_36171 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36173__$1,inst_36171);
} else {
if((state_val_36174 === (2))){
var inst_36148 = (state_36173[(9)]);
var inst_36151 = cljs.core.seq.call(null,inst_36148);
var state_36173__$1 = state_36173;
if(inst_36151){
var statearr_36181_36198 = state_36173__$1;
(statearr_36181_36198[(1)] = (4));

} else {
var statearr_36182_36199 = state_36173__$1;
(statearr_36182_36199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (9))){
var inst_36166 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36183_36200 = state_36173__$1;
(statearr_36183_36200[(2)] = inst_36166);

(statearr_36183_36200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (5))){
var inst_36149 = (state_36173[(10)]);
var state_36173__$1 = state_36173;
var statearr_36185_36201 = state_36173__$1;
(statearr_36185_36201[(2)] = inst_36149);

(statearr_36185_36201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (10))){
var inst_36148 = (state_36173[(9)]);
var inst_36149 = (state_36173[(10)]);
var inst_36158 = (state_36173[(2)]);
var inst_36159 = cljs.core.rest.call(null,inst_36148);
var inst_36160 = cljs.core.conj.call(null,inst_36149,inst_36158);
var inst_36148__$1 = inst_36159;
var inst_36149__$1 = inst_36160;
var state_36173__$1 = (function (){var statearr_36186 = state_36173;
(statearr_36186[(9)] = inst_36148__$1);

(statearr_36186[(10)] = inst_36149__$1);

return statearr_36186;
})();
var statearr_36187_36202 = state_36173__$1;
(statearr_36187_36202[(2)] = null);

(statearr_36187_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (8))){
var inst_36148 = (state_36173[(9)]);
var inst_36149 = (state_36173[(10)]);
var inst_36163 = cljs.core.rest.call(null,inst_36148);
var tmp36184 = inst_36149;
var inst_36148__$1 = inst_36163;
var inst_36149__$1 = tmp36184;
var state_36173__$1 = (function (){var statearr_36188 = state_36173;
(statearr_36188[(9)] = inst_36148__$1);

(statearr_36188[(10)] = inst_36149__$1);

return statearr_36188;
})();
var statearr_36189_36203 = state_36173__$1;
(statearr_36189_36203[(2)] = null);

(statearr_36189_36203[(1)] = (2));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$plugin$edit_elements_$_state_machine__13455__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__13455__auto____0 = (function (){
var statearr_36190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36190[(0)] = klipse$plugin$edit_elements_$_state_machine__13455__auto__);

(statearr_36190[(1)] = (1));

return statearr_36190;
});
var klipse$plugin$edit_elements_$_state_machine__13455__auto____1 = (function (state_36173){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36191){if((e36191 instanceof Object)){
var ex__13458__auto__ = e36191;
var statearr_36192_36204 = state_36173;
(statearr_36192_36204[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36205 = state_36173;
state_36173 = G__36205;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__13455__auto__ = function(state_36173){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__13455__auto____1.call(this,state_36173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$edit_elements_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__13455__auto____0;
klipse$plugin$edit_elements_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__13455__auto____1;
return klipse$plugin$edit_elements_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36193 = f__13545__auto__.call(null);
(statearr_36193[(6)] = c__13544__auto__);

return statearr_36193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_36254){
var state_val_36255 = (state_36254[(1)]);
if((state_val_36255 === (7))){
var inst_36250 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
var statearr_36256_36282 = state_36254__$1;
(statearr_36256_36282[(2)] = inst_36250);

(statearr_36256_36282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (1))){
var inst_36206 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36254__$1,(2),inst_36206);
} else {
if((state_val_36255 === (4))){
var inst_36252 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36254__$1,inst_36252);
} else {
if((state_val_36255 === (15))){
var inst_36229 = (state_36254[(7)]);
var inst_36241 = (state_36254[(2)]);
var inst_36242 = cljs.core.next.call(null,inst_36229);
var inst_36214 = inst_36242;
var inst_36215 = null;
var inst_36216 = (0);
var inst_36217 = (0);
var state_36254__$1 = (function (){var statearr_36257 = state_36254;
(statearr_36257[(8)] = inst_36215);

(statearr_36257[(9)] = inst_36216);

(statearr_36257[(10)] = inst_36217);

(statearr_36257[(11)] = inst_36241);

(statearr_36257[(12)] = inst_36214);

return statearr_36257;
})();
var statearr_36258_36283 = state_36254__$1;
(statearr_36258_36283[(2)] = null);

(statearr_36258_36283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (13))){
var inst_36229 = (state_36254[(7)]);
var inst_36238 = cljs.core.first.call(null,inst_36229);
var inst_36239 = inst_36238.call(null);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36254__$1,(15),inst_36239);
} else {
if((state_val_36255 === (6))){
var inst_36229 = (state_36254[(7)]);
var inst_36214 = (state_36254[(12)]);
var inst_36229__$1 = cljs.core.seq.call(null,inst_36214);
var state_36254__$1 = (function (){var statearr_36259 = state_36254;
(statearr_36259[(7)] = inst_36229__$1);

return statearr_36259;
})();
if(inst_36229__$1){
var statearr_36260_36284 = state_36254__$1;
(statearr_36260_36284[(1)] = (9));

} else {
var statearr_36261_36285 = state_36254__$1;
(statearr_36261_36285[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (3))){
var inst_36216 = (state_36254[(9)]);
var inst_36217 = (state_36254[(10)]);
var inst_36219 = (inst_36217 < inst_36216);
var inst_36220 = inst_36219;
var state_36254__$1 = state_36254;
if(cljs.core.truth_(inst_36220)){
var statearr_36262_36286 = state_36254__$1;
(statearr_36262_36286[(1)] = (5));

} else {
var statearr_36263_36287 = state_36254__$1;
(statearr_36263_36287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (12))){
var inst_36229 = (state_36254[(7)]);
var inst_36233 = cljs.core.chunk_first.call(null,inst_36229);
var inst_36234 = cljs.core.chunk_rest.call(null,inst_36229);
var inst_36235 = cljs.core.count.call(null,inst_36233);
var inst_36214 = inst_36234;
var inst_36215 = inst_36233;
var inst_36216 = inst_36235;
var inst_36217 = (0);
var state_36254__$1 = (function (){var statearr_36264 = state_36254;
(statearr_36264[(8)] = inst_36215);

(statearr_36264[(9)] = inst_36216);

(statearr_36264[(10)] = inst_36217);

(statearr_36264[(12)] = inst_36214);

return statearr_36264;
})();
var statearr_36265_36288 = state_36254__$1;
(statearr_36265_36288[(2)] = null);

(statearr_36265_36288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (2))){
var inst_36208 = (state_36254[(2)]);
var inst_36213 = cljs.core.seq.call(null,inst_36208);
var inst_36214 = inst_36213;
var inst_36215 = null;
var inst_36216 = (0);
var inst_36217 = (0);
var state_36254__$1 = (function (){var statearr_36266 = state_36254;
(statearr_36266[(8)] = inst_36215);

(statearr_36266[(9)] = inst_36216);

(statearr_36266[(10)] = inst_36217);

(statearr_36266[(12)] = inst_36214);

return statearr_36266;
})();
var statearr_36267_36289 = state_36254__$1;
(statearr_36267_36289[(2)] = null);

(statearr_36267_36289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (11))){
var inst_36248 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
var statearr_36268_36290 = state_36254__$1;
(statearr_36268_36290[(2)] = inst_36248);

(statearr_36268_36290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (9))){
var inst_36229 = (state_36254[(7)]);
var inst_36231 = cljs.core.chunked_seq_QMARK_.call(null,inst_36229);
var state_36254__$1 = state_36254;
if(inst_36231){
var statearr_36269_36291 = state_36254__$1;
(statearr_36269_36291[(1)] = (12));

} else {
var statearr_36270_36292 = state_36254__$1;
(statearr_36270_36292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (5))){
var inst_36215 = (state_36254[(8)]);
var inst_36217 = (state_36254[(10)]);
var inst_36222 = cljs.core._nth.call(null,inst_36215,inst_36217);
var inst_36223 = inst_36222.call(null);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36254__$1,(8),inst_36223);
} else {
if((state_val_36255 === (14))){
var inst_36245 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
var statearr_36274_36293 = state_36254__$1;
(statearr_36274_36293[(2)] = inst_36245);

(statearr_36274_36293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (10))){
var state_36254__$1 = state_36254;
var statearr_36275_36294 = state_36254__$1;
(statearr_36275_36294[(2)] = null);

(statearr_36275_36294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (8))){
var inst_36215 = (state_36254[(8)]);
var inst_36216 = (state_36254[(9)]);
var inst_36217 = (state_36254[(10)]);
var inst_36214 = (state_36254[(12)]);
var inst_36225 = (state_36254[(2)]);
var inst_36226 = (inst_36217 + (1));
var tmp36271 = inst_36215;
var tmp36272 = inst_36216;
var tmp36273 = inst_36214;
var inst_36214__$1 = tmp36273;
var inst_36215__$1 = tmp36271;
var inst_36216__$1 = tmp36272;
var inst_36217__$1 = inst_36226;
var state_36254__$1 = (function (){var statearr_36276 = state_36254;
(statearr_36276[(8)] = inst_36215__$1);

(statearr_36276[(9)] = inst_36216__$1);

(statearr_36276[(10)] = inst_36217__$1);

(statearr_36276[(12)] = inst_36214__$1);

(statearr_36276[(13)] = inst_36225);

return statearr_36276;
})();
var statearr_36277_36295 = state_36254__$1;
(statearr_36277_36295[(2)] = null);

(statearr_36277_36295[(1)] = (3));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$plugin$klipsify_elements_$_state_machine__13455__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__13455__auto____0 = (function (){
var statearr_36278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36278[(0)] = klipse$plugin$klipsify_elements_$_state_machine__13455__auto__);

(statearr_36278[(1)] = (1));

return statearr_36278;
});
var klipse$plugin$klipsify_elements_$_state_machine__13455__auto____1 = (function (state_36254){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36279){if((e36279 instanceof Object)){
var ex__13458__auto__ = e36279;
var statearr_36280_36296 = state_36254;
(statearr_36280_36296[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36297 = state_36254;
state_36254 = G__36297;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__13455__auto__ = function(state_36254){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__13455__auto____1.call(this,state_36254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$plugin$klipsify_elements_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__13455__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__13455__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36281 = f__13545__auto__.call(null);
(statearr_36281[(6)] = c__13544__auto__);

return statearr_36281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9245__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__36298(s__36299){
return (new cljs.core.LazySeq(null,(function (){
var s__36299__$1 = s__36299;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__36299__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var selector_name = cljs.core.first.call(null,xs__7309__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__9241__auto__ = ((function (s__36299__$1,selector,selector_name,xs__7309__auto__,temp__6753__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__36298_$_iter__36300(s__36301){
return (new cljs.core.LazySeq(null,((function (s__36299__$1,selector,selector_name,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__36301__$1 = s__36301;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__36301__$1);
if(temp__6753__auto____$1){
var s__36301__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36301__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__36301__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__36303 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__36302 = (0);
while(true){
if((i__36302 < size__9244__auto__)){
var element = cljs.core._nth.call(null,c__9243__auto__,i__36302);
cljs.core.chunk_append.call(null,b__36303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__36304 = (i__36302 + (1));
i__36302 = G__36304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36303),klipse$plugin$elements__GT_mode_$_iter__36298_$_iter__36300.call(null,cljs.core.chunk_rest.call(null,s__36301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36303),null);
}
} else {
var element = cljs.core.first.call(null,s__36301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__36298_$_iter__36300.call(null,cljs.core.rest.call(null,s__36301__$2)));
}
} else {
return null;
}
break;
}
});})(s__36299__$1,selector,selector_name,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__36299__$1,selector,selector_name,xs__7309__auto__,temp__6753__auto__))
;
var fs__9242__auto__ = cljs.core.seq.call(null,iterys__9241__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__9242__auto__){
return cljs.core.concat.call(null,fs__9242__auto__,klipse$plugin$elements__GT_mode_$_iter__36298.call(null,cljs.core.rest.call(null,s__36299__$1)));
} else {
var G__36305 = cljs.core.rest.call(null,s__36299__$1);
s__36299__$1 = G__36305;
continue;
}
} else {
var G__36306 = cljs.core.rest.call(null,s__36299__$1);
s__36299__$1 = G__36306;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode)));
})());
});
klipse.plugin.init_clj = (function klipse$plugin$init_clj(settings){
var map__36307 = clojure.walk.keywordize_keys.call(null,settings);
var map__36307__$1 = ((((!((map__36307 == null)))?((((map__36307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36307):map__36307);
var keywordized_settings = map__36307__$1;
var secured_eval = cljs.core.get.call(null,map__36307__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__36307__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
var modes = klipse.plugin.elements__GT_mode.call(null,settings);
var elements = klipse.plugin.seq_from_selector.call(null,klipse.plugin.snippets_selector.call(null,settings,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode))));
if(cljs.core.truth_(secured_eval)){
klipse.utils.securize_eval_BANG_.call(null,security_forbidden_symbols);
} else {
}

return klipse.plugin.klipsify_elements.call(null,elements,keywordized_settings,modes);
});
goog.exportSymbol('klipse.plugin.init_clj', klipse.plugin.init_clj);
klipse.plugin.init = (function klipse$plugin$init(js_settings){
return klipse.plugin.init_clj.call(null,cljs.core.js__GT_clj.call(null,js_settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false));
});
goog.exportSymbol('klipse.plugin.init', klipse.plugin.init);

//# sourceMappingURL=plugin.js.map
