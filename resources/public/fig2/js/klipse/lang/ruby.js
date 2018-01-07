// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj_SHARP_ = Opal;
var fn_SHARP_ = (obj_SHARP_["load"]);
return fn_SHARP_.call(obj_SHARP_,"opal-parser");
});
klipse.lang.ruby.load_opal_parser_once = klipse.utils.runonce.call(null,klipse.lang.ruby.load_opal_parser);
klipse.lang.ruby.str_eval_async = (function klipse$lang$ruby$str_eval_async(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35101){
var state_val_35102 = (state_35101[(1)]);
if((state_val_35102 === (1))){
var inst_35088 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_35101__$1 = (function (){var statearr_35103 = state_35101;
(statearr_35103[(7)] = inst_35088);

return statearr_35103;
})();
var statearr_35104_35111 = state_35101__$1;
(statearr_35104_35111[(2)] = null);

(statearr_35104_35111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (2))){
var inst_35099 = (state_35101[(2)]);
var state_35101__$1 = state_35101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35101__$1,inst_35099);
} else {
if((state_val_35102 === (3))){
var inst_35089 = (state_35101[(2)]);
var inst_35090 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35089)].join('');
var state_35101__$1 = state_35101;
var statearr_35105_35112 = state_35101__$1;
(statearr_35105_35112[(2)] = inst_35090);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35101,(3),Object,null,(2));
var inst_35094 = (Opal["eval"]);
var inst_35095 = inst_35094.call(Opal,exp);
var inst_35096 = (inst_35095["$inspect"]);
var inst_35097 = inst_35096.call(inst_35095);
var state_35101__$1 = state_35101;
var statearr_35106_35113 = state_35101__$1;
(statearr_35106_35113[(2)] = inst_35097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_35107 = [null,null,null,null,null,null,null,null];
(statearr_35107[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__);

(statearr_35107[(1)] = (1));

return statearr_35107;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____1 = (function (state_35101){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35108){if((e35108 instanceof Object)){
var ex__13458__auto__ = e35108;
var statearr_35109_35114 = state_35101;
(statearr_35109_35114[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35115 = state_35101;
state_35101 = G__35115;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__ = function(state_35101){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____1.call(this,state_35101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35110 = f__13545__auto__.call(null);
(statearr_35110[(6)] = c__13544__auto__);

return statearr_35110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map
