// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj_SHARP_ = uniter;
var fn_SHARP_ = (obj_SHARP_["createEngine"]);
return fn_SHARP_.call(obj_SHARP_,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj_SHARP_ = engine;
var fn_SHARP_ = (obj_SHARP_["execute"]);
return fn_SHARP_.call(obj_SHARP_,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__13544__auto___35222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___35222,c,php_exp){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___35222,c,php_exp){
return (function (state_35215){
var state_val_35216 = (state_35215[(1)]);
if((state_val_35216 === (1))){
var inst_35202 = klipse.lang.php.load_php_engine.call(null);
var inst_35203 = (inst_35202["getStderr"]);
var inst_35204 = inst_35203.call(inst_35202);
var inst_35205 = (inst_35204["on"]);
var inst_35206 = (function (){var php_engine = inst_35202;
var $ = inst_35204;
var obj_SHARP_ = inst_35204;
var fn_SHARP_ = inst_35205;
return ((function (php_engine,$,obj_SHARP_,fn_SHARP_,inst_35202,inst_35203,inst_35204,inst_35205,state_val_35216,c__13544__auto___35222,c,php_exp){
return (function (p1__35200_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35200_SHARP_)].join(''));
});
;})(php_engine,$,obj_SHARP_,fn_SHARP_,inst_35202,inst_35203,inst_35204,inst_35205,state_val_35216,c__13544__auto___35222,c,php_exp))
})();
var inst_35207 = inst_35205.call(inst_35204,"data",inst_35206);
var inst_35208 = (inst_35202["getStdout"]);
var inst_35209 = inst_35208.call(inst_35202);
var inst_35210 = (inst_35209["on"]);
var inst_35211 = (function (){var php_engine = inst_35202;
var $ = inst_35209;
var obj_SHARP_ = inst_35209;
var fn_SHARP_ = inst_35210;
return ((function (php_engine,$,obj_SHARP_,fn_SHARP_,inst_35202,inst_35203,inst_35204,inst_35205,inst_35206,inst_35207,inst_35208,inst_35209,inst_35210,state_val_35216,c__13544__auto___35222,c,php_exp){
return (function (p1__35201_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35201_SHARP_)].join(''));
});
;})(php_engine,$,obj_SHARP_,fn_SHARP_,inst_35202,inst_35203,inst_35204,inst_35205,inst_35206,inst_35207,inst_35208,inst_35209,inst_35210,state_val_35216,c__13544__auto___35222,c,php_exp))
})();
var inst_35212 = inst_35210.call(inst_35209,"data",inst_35211);
var inst_35213 = klipse.lang.php.execute.call(null,inst_35202,php_exp);
var state_35215__$1 = (function (){var statearr_35217 = state_35215;
(statearr_35217[(7)] = inst_35212);

(statearr_35217[(8)] = inst_35207);

return statearr_35217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35215__$1,inst_35213);
} else {
return null;
}
});})(c__13544__auto___35222,c,php_exp))
;
return ((function (switch__13454__auto__,c__13544__auto___35222,c,php_exp){
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_35218 = [null,null,null,null,null,null,null,null,null];
(statearr_35218[(0)] = klipse$lang$php$str_eval_async_$_state_machine__13455__auto__);

(statearr_35218[(1)] = (1));

return statearr_35218;
});
var klipse$lang$php$str_eval_async_$_state_machine__13455__auto____1 = (function (state_35215){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35219){if((e35219 instanceof Object)){
var ex__13458__auto__ = e35219;
var statearr_35220_35223 = state_35215;
(statearr_35220_35223[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35224 = state_35215;
state_35215 = G__35224;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__13455__auto__ = function(state_35215){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__13455__auto____1.call(this,state_35215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$php$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__13455__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__13455__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___35222,c,php_exp))
})();
var state__13546__auto__ = (function (){var statearr_35221 = f__13545__auto__.call(null);
(statearr_35221[(6)] = c__13544__auto___35222);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___35222,c,php_exp))
);


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map
