// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_36338){
var state_val_36339 = (state_36338[(1)]);
if((state_val_36339 === (1))){
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36338__$1,exp);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$html$my_eval_$_state_machine__13455__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__13455__auto____0 = (function (){
var statearr_36340 = [null,null,null,null,null,null,null];
(statearr_36340[(0)] = klipse$lang$html$my_eval_$_state_machine__13455__auto__);

(statearr_36340[(1)] = (1));

return statearr_36340;
});
var klipse$lang$html$my_eval_$_state_machine__13455__auto____1 = (function (state_36338){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36341){if((e36341 instanceof Object)){
var ex__13458__auto__ = e36341;
var statearr_36342_36344 = state_36338;
(statearr_36342_36344[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36345 = state_36338;
state_36338 = G__36345;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__13455__auto__ = function(state_36338){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__13455__auto____1.call(this,state_36338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$html$my_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__13455__auto____0;
klipse$lang$html$my_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__13455__auto____1;
return klipse$lang$html$my_eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36343 = f__13545__auto__.call(null);
(statearr_36343[(6)] = c__13544__auto__);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map
