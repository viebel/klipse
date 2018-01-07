// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__36348 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__36348__$1 = ((((!((map__36348 == null)))?((((map__36348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348):map__36348);
var compiledCode = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__13544__auto___36367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___36367,c){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___36367,c){
return (function (state_36359){
var state_val_36360 = (state_36359[(1)]);
if((state_val_36360 === (1))){
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36359__$1,(2),c,"//compiling...\n");
} else {
if((state_val_36360 === (2))){
var inst_36351 = (state_36359[(2)]);
var inst_36352 = cljs.core.async.timeout.call(null,(0));
var state_36359__$1 = (function (){var statearr_36361 = state_36359;
(statearr_36361[(7)] = inst_36351);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36359__$1,(3),inst_36352);
} else {
if((state_val_36360 === (3))){
var inst_36354 = (state_36359[(2)]);
var inst_36355 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_36359__$1 = (function (){var statearr_36362 = state_36359;
(statearr_36362[(8)] = inst_36354);

return statearr_36362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36359__$1,(4),c,inst_36355);
} else {
if((state_val_36360 === (4))){
var inst_36357 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36359__$1,inst_36357);
} else {
return null;
}
}
}
}
});})(c__13544__auto___36367,c))
;
return ((function (switch__13454__auto__,c__13544__auto___36367,c){
return (function() {
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__ = null;
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____0 = (function (){
var statearr_36363 = [null,null,null,null,null,null,null,null,null];
(statearr_36363[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__);

(statearr_36363[(1)] = (1));

return statearr_36363;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____1 = (function (state_36359){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_36359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e36364){if((e36364 instanceof Object)){
var ex__13458__auto__ = e36364;
var statearr_36365_36368 = state_36359;
(statearr_36365_36368[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36369 = state_36359;
state_36359 = G__36369;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__ = function(state_36359){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____1.call(this,state_36359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___36367,c))
})();
var state__13546__auto__ = (function (){var statearr_36366 = f__13545__auto__.call(null);
(statearr_36366[(6)] = c__13544__auto___36367);

return statearr_36366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___36367,c))
);


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map
