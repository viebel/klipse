// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.function_plot');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.function_plot.draw_chart = (function klipse$lang$function_plot$draw_chart(data_js,container_id){
var chart_constructor = (function (){var temp__6751__auto__ = (google["visualization"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__33194 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__33194["ChartWrapper"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__33195 = temp__6751__auto____$1;
return G__33195;
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
klipse.lang.function_plot.parse_js_object = (function klipse$lang$function_plot$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e33196){var e = e33196;
throw "Invalid JSON";
}});
klipse.lang.function_plot.render_STAR_ = (function klipse$lang$function_plot$render_STAR_(src,p__33197){
var map__33198 = p__33197;
var map__33198__$1 = ((((!((map__33198 == null)))?((((map__33198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33198):map__33198);
var opts = map__33198__$1;
var container = cljs.core.get.call(null,map__33198__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var container_id = cljs.core.get.call(null,map__33198__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var data = klipse.lang.function_plot.parse_js_object.call(null,src);
(data["target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)].join(''));

var obj_SHARP_ = window;
var fn_SHARP_ = (obj_SHARP_["functionPlot"]);
return fn_SHARP_.call(obj_SHARP_,data);
}catch (e33200){var e = e33200;
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.function_plot.render = (function klipse$lang$function_plot$render(src,p__33201){
var map__33202 = p__33201;
var map__33202__$1 = ((((!((map__33202 == null)))?((((map__33202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202):map__33202);
var opts = map__33202__$1;
var container = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__33202,map__33202__$1,opts,container){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__33202,map__33202__$1,opts,container){
return (function (state_33207){
var state_val_33208 = (state_33207[(1)]);
if((state_val_33208 === (1))){
var inst_33204 = goog.dom.setTextContent(container,"");
var inst_33205 = klipse.lang.function_plot.render_STAR_.call(null,src,opts);
var state_33207__$1 = (function (){var statearr_33209 = state_33207;
(statearr_33209[(7)] = inst_33204);

return statearr_33209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33207__$1,inst_33205);
} else {
return null;
}
});})(c__13544__auto__,map__33202,map__33202__$1,opts,container))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__33202,map__33202__$1,opts,container){
return (function() {
var klipse$lang$function_plot$render_$_state_machine__13455__auto__ = null;
var klipse$lang$function_plot$render_$_state_machine__13455__auto____0 = (function (){
var statearr_33210 = [null,null,null,null,null,null,null,null];
(statearr_33210[(0)] = klipse$lang$function_plot$render_$_state_machine__13455__auto__);

(statearr_33210[(1)] = (1));

return statearr_33210;
});
var klipse$lang$function_plot$render_$_state_machine__13455__auto____1 = (function (state_33207){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_33207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e33211){if((e33211 instanceof Object)){
var ex__13458__auto__ = e33211;
var statearr_33212_33214 = state_33207;
(statearr_33212_33214[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33215 = state_33207;
state_33207 = G__33215;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$function_plot$render_$_state_machine__13455__auto__ = function(state_33207){
switch(arguments.length){
case 0:
return klipse$lang$function_plot$render_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$function_plot$render_$_state_machine__13455__auto____1.call(this,state_33207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$function_plot$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$function_plot$render_$_state_machine__13455__auto____0;
klipse$lang$function_plot$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$function_plot$render_$_state_machine__13455__auto____1;
return klipse$lang$function_plot$render_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__33202,map__33202__$1,opts,container))
})();
var state__13546__auto__ = (function (){var statearr_33213 = f__13545__auto__.call(null);
(statearr_33213[(6)] = c__13544__auto__);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__33202,map__33202__$1,opts,container))
);

return c__13544__auto__;
});
klipse.lang.function_plot.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.function_plot.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(400),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"function-plot-with-d3.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"function-plot","selector_plot",klipse.lang.function_plot.opts);

//# sourceMappingURL=function_plot.js.map
