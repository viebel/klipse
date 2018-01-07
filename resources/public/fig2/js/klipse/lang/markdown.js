// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.markdown');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.markdown.str_eval_async = (function klipse$lang$markdown$str_eval_async(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_36327){
var state_val_36328 = (state_36327[(1)]);
if((state_val_36328 === (1))){
var inst_36325 = markdown.toHTML(exp);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36327__$1,inst_36325);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_36329 = [null,null,null,null,null,null,null];
(statearr_36329[(0)] = klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__);

(statearr_36329[(1)] = (1));

return statearr_36329;
});
var klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____1 = (function (state_36327){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36330){if((e36330 instanceof Object)){
var ex__13458__auto__ = e36330;
var statearr_36331_36333 = state_36327;
(statearr_36331_36333[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36334 = state_36327;
state_36327 = G__36334;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__ = function(state_36327){
switch(arguments.length){
case 0:
return klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____1.call(this,state_36327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____0;
klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto____1;
return klipse$lang$markdown$str_eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36332 = f__13545__auto__.call(null);
(statearr_36332[(6)] = c__13544__auto__);

return statearr_36332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.markdown.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"markdown",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"markdown.min.js?"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.markdown.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-markdown","selector_eval_markdown",klipse.lang.markdown.opts);

//# sourceMappingURL=markdown.js.map
