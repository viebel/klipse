// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.google_charts');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
if(typeof klipse.lang.google_charts.google_charts_loaded !== 'undefined'){
} else {
klipse.lang.google_charts.google_charts_loaded = false;
}
klipse.lang.google_charts.ensure_google_charts_loaded_BANG_ = (function klipse$lang$google_charts$ensure_google_charts_loaded_BANG_(){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34803){
var state_val_34804 = (state_34803[(1)]);
if((state_val_34804 === (1))){
var state_34803__$1 = state_34803;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_34805_34815 = state_34803__$1;
(statearr_34805_34815[(1)] = (2));

} else {
var statearr_34806_34816 = state_34803__$1;
(statearr_34806_34816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (2))){
var state_34803__$1 = state_34803;
var statearr_34807_34817 = state_34803__$1;
(statearr_34807_34817[(2)] = null);

(statearr_34807_34817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (3))){
var inst_34779 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_34803__$1 = state_34803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34803__$1,(5),inst_34779);
} else {
if((state_val_34804 === (4))){
var inst_34801 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34803__$1,inst_34801);
} else {
if((state_val_34804 === (5))){
var inst_34781 = (state_34803[(2)]);
var inst_34782 = (google["charts"]);
var inst_34783 = (inst_34782["load"]);
var inst_34784 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_34785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34786 = ["corechart","table"];
var inst_34787 = (new cljs.core.PersistentVector(null,2,(5),inst_34785,inst_34786,null));
var inst_34788 = [inst_34787];
var inst_34789 = cljs.core.PersistentHashMap.fromArrays(inst_34784,inst_34788);
var inst_34790 = cljs.core.clj__GT_js.call(null,inst_34789);
var inst_34791 = inst_34783.call(inst_34782,"current",inst_34790);
var inst_34792 = cljs.core.async.chan.call(null);
var inst_34793 = (google["charts"]);
var inst_34794 = (inst_34793["setOnLoadCallback"]);
var inst_34795 = (function (){var c = inst_34792;
var obj_SHARP_ = inst_34793;
var fn_SHARP_ = inst_34794;
return ((function (c,obj_SHARP_,fn_SHARP_,inst_34781,inst_34782,inst_34783,inst_34784,inst_34785,inst_34786,inst_34787,inst_34788,inst_34789,inst_34790,inst_34791,inst_34792,inst_34793,inst_34794,state_val_34804,c__13544__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
;})(c,obj_SHARP_,fn_SHARP_,inst_34781,inst_34782,inst_34783,inst_34784,inst_34785,inst_34786,inst_34787,inst_34788,inst_34789,inst_34790,inst_34791,inst_34792,inst_34793,inst_34794,state_val_34804,c__13544__auto__))
})();
var inst_34796 = inst_34794.call(inst_34793,inst_34795);
var state_34803__$1 = (function (){var statearr_34808 = state_34803;
(statearr_34808[(7)] = inst_34796);

(statearr_34808[(8)] = inst_34781);

(statearr_34808[(9)] = inst_34791);

return statearr_34808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34803__$1,(6),inst_34792);
} else {
if((state_val_34804 === (6))){
var inst_34798 = (state_34803[(2)]);
var inst_34799 = klipse.lang.google_charts.google_charts_loaded = true;
var state_34803__$1 = (function (){var statearr_34809 = state_34803;
(statearr_34809[(10)] = inst_34798);

return statearr_34809;
})();
var statearr_34810_34818 = state_34803__$1;
(statearr_34810_34818[(2)] = inst_34799);

(statearr_34810_34818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__ = null;
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____0 = (function (){
var statearr_34811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34811[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__);

(statearr_34811[(1)] = (1));

return statearr_34811;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____1 = (function (state_34803){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34812){if((e34812 instanceof Object)){
var ex__13458__auto__ = e34812;
var statearr_34813_34819 = state_34803;
(statearr_34813_34819[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_34803;
state_34803 = G__34820;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__ = function(state_34803){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____1.call(this,state_34803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34814 = f__13545__auto__.call(null);
(statearr_34814[(6)] = c__13544__auto__);

return statearr_34814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var temp__6751__auto__ = (google["visualization"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34821 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34821["ChartWrapper"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34822 = temp__6751__auto____$1;
return G__34822;
} else {
return null;
}
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj_SHARP_ = chart_wrapper;
var fn_SHARP_ = (obj_SHARP_["draw"]);
return fn_SHARP_.call(obj_SHARP_);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e34823){var e = e34823;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__34824){
var map__34825 = p__34824;
var map__34825__$1 = ((((!((map__34825 == null)))?((((map__34825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34825):map__34825);
var opts = map__34825__$1;
var container_id = cljs.core.get.call(null,map__34825__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e34827){var e = e34827;
var container_34828 = document.getElementById(container_id);
goog.dom.setTextContent(container_34828,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__34829){
var map__34830 = p__34829;
var map__34830__$1 = ((((!((map__34830 == null)))?((((map__34830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34830):map__34830);
var opts = map__34830__$1;
var container_id = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__34830,map__34830__$1,opts,container_id){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__34830,map__34830__$1,opts,container_id){
return (function (state_34837){
var state_val_34838 = (state_34837[(1)]);
if((state_val_34838 === (1))){
var inst_34832 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34837__$1,(2),inst_34832);
} else {
if((state_val_34838 === (2))){
var inst_34834 = (state_34837[(2)]);
var inst_34835 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_34837__$1 = (function (){var statearr_34839 = state_34837;
(statearr_34839[(7)] = inst_34834);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34837__$1,inst_34835);
} else {
return null;
}
}
});})(c__13544__auto__,map__34830,map__34830__$1,opts,container_id))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__34830,map__34830__$1,opts,container_id){
return (function() {
var klipse$lang$google_charts$render_$_state_machine__13455__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__13455__auto____0 = (function (){
var statearr_34840 = [null,null,null,null,null,null,null,null];
(statearr_34840[(0)] = klipse$lang$google_charts$render_$_state_machine__13455__auto__);

(statearr_34840[(1)] = (1));

return statearr_34840;
});
var klipse$lang$google_charts$render_$_state_machine__13455__auto____1 = (function (state_34837){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34841){if((e34841 instanceof Object)){
var ex__13458__auto__ = e34841;
var statearr_34842_34844 = state_34837;
(statearr_34842_34844[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34845 = state_34837;
state_34837 = G__34845;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__13455__auto__ = function(state_34837){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__13455__auto____1.call(this,state_34837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$google_charts$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__13455__auto____0;
klipse$lang$google_charts$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__13455__auto____1;
return klipse$lang$google_charts$render_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__34830,map__34830__$1,opts,container_id))
})();
var state__13546__auto__ = (function (){var statearr_34843 = f__13545__auto__.call(null);
(statearr_34843[(6)] = c__13544__auto__);

return statearr_34843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__34830,map__34830__$1,opts,container_id))
);

return c__13544__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map
