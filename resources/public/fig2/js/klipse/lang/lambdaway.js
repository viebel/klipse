// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_36315){
var state_val_36316 = (state_36315[(1)]);
if((state_val_36316 === (1))){
var inst_36311 = (LAMBDATALK["evaluate"]);
var inst_36312 = inst_36311.call(LAMBDATALK,exp);
var inst_36313 = (inst_36312["val"]);
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36315__$1,inst_36313);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__ = null;
var klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____0 = (function (){
var statearr_36317 = [null,null,null,null,null,null,null];
(statearr_36317[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__);

(statearr_36317[(1)] = (1));

return statearr_36317;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____1 = (function (state_36315){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36318){if((e36318 instanceof Object)){
var ex__13458__auto__ = e36318;
var statearr_36319_36321 = state_36315;
(statearr_36319_36321[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36322 = state_36315;
state_36315 = G__36322;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__ = function(state_36315){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____1.call(this,state_36315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_36320 = f__13545__auto__.call(null);
(statearr_36320[(6)] = c__13544__auto__);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map
