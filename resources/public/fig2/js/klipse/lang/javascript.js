// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.javascript');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.javascript.known_external_libs = new cljs.core.PersistentArrayMap(null, 3, ["immutable","https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js","jQuery","https://code.jquery.com/jquery-2.2.4.js","underscore","http://underscorejs.org/underscore-min.js"], null);
klipse.lang.javascript.external_lib_path = (function klipse$lang$javascript$external_lib_path(lib_name_or_url){
return cljs.core.get.call(null,klipse.lang.javascript.known_external_libs,lib_name_or_url,lib_name_or_url);
});
klipse.lang.javascript.beautify = (function klipse$lang$javascript$beautify(js_exp){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prettyFormat(js_exp))].join('');
}catch (e33074){if((e33074 instanceof Object)){
var o = e33074;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp)].join('');
} else {
throw e33074;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__33075__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__33075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33076__i = 0, G__33076__a = new Array(arguments.length -  0);
while (G__33076__i < G__33076__a.length) {G__33076__a[G__33076__i] = arguments[G__33076__i + 0]; ++G__33076__i;}
  args = new cljs.core.IndexedSeq(G__33076__a,0,null);
} 
return G__33075__delegate.call(this,args);};
G__33075.cljs$lang$maxFixedArity = 0;
G__33075.cljs$lang$applyTo = (function (arglist__33077){
var args = cljs.core.seq(arglist__33077);
return G__33075__delegate(args);
});
G__33075.cljs$core$IFn$_invoke$arity$variadic = G__33075__delegate;
return G__33075;
})()
;
});
/**
 * Evals an expression where the window.console object is lexically bound to an object that puts the console output on a channel.
 *   Returns the empty string.
 *   It works fine also with asynchronous code.
 */
klipse.lang.javascript.eval_with_logger_BANG_ = (function klipse$lang$javascript$eval_with_logger_BANG_(c,exp){
var logger = klipse.lang.javascript.append_to_chan.call(null,c);
var wrapped_exp = ["(function(console) {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),"}(window.klipse_snippet_console))"].join('');
klipse_snippet_console = ({"log": logger});

klipse.utils.eval_in_global_scope.call(null,wrapped_exp);

return "";
});
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__33078){
var map__33079 = p__33078;
var map__33079__$1 = ((((!((map__33079 == null)))?((((map__33079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33079):map__33079);
var async_code_QMARK_ = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13544__auto___33163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id){
return (function (state_33134){
var state_val_33135 = (state_33134[(1)]);
if((state_val_33135 === (7))){
var inst_33093 = (state_33134[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33134,null,null,null,(6));
var inst_33098 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_33093);
var state_33134__$1 = state_33134;
if(inst_33098){
var statearr_33136_33164 = state_33134__$1;
(statearr_33136_33164[(1)] = (8));

} else {
var statearr_33137_33165 = state_33134__$1;
(statearr_33137_33165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (1))){
var inst_33081 = clojure.string.blank_QMARK_.call(null,exp);
var state_33134__$1 = state_33134;
if(inst_33081){
var statearr_33138_33166 = state_33134__$1;
(statearr_33138_33166[(1)] = (2));

} else {
var statearr_33139_33167 = state_33134__$1;
(statearr_33139_33167[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (4))){
var inst_33132 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33134__$1,inst_33132);
} else {
if((state_val_33135 === (15))){
var inst_33109 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_33110 = console.log = inst_33109;
var state_33134__$1 = (function (){var statearr_33140 = state_33134;
(statearr_33140[(8)] = inst_33110);

return statearr_33140;
})();
var statearr_33141_33168 = state_33134__$1;
(statearr_33141_33168[(2)] = null);

(statearr_33141_33168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33134,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_33134__$1 = state_33134;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_33142_33169 = state_33134__$1;
(statearr_33142_33169[(1)] = (14));

} else {
var statearr_33143_33170 = state_33134__$1;
(statearr_33143_33170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (6))){
var inst_33130 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
var statearr_33144_33171 = state_33134__$1;
(statearr_33144_33171[(2)] = inst_33130);

(statearr_33144_33171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (17))){
var inst_33119 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
var statearr_33145_33172 = state_33134__$1;
(statearr_33145_33172[(2)] = inst_33119);

(statearr_33145_33172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (3))){
var inst_33085 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_33089 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_33090 = klipse.utils.load_scripts.call(null,inst_33089,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_33134__$1 = (function (){var statearr_33146 = state_33134;
(statearr_33146[(9)] = inst_33085);

return statearr_33146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33134__$1,(5),inst_33090);
} else {
if((state_val_33135 === (12))){
var inst_33100 = (state_33134[(2)]);
var inst_33101 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33100)].join('');
var state_33134__$1 = state_33134;
var statearr_33147_33173 = state_33134__$1;
(statearr_33147_33173[(2)] = inst_33101);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (2))){
var inst_33083 = cljs.core.async.put_BANG_.call(null,c,"");
var state_33134__$1 = state_33134;
var statearr_33148_33174 = state_33134__$1;
(statearr_33148_33174[(2)] = inst_33083);

(statearr_33148_33174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33134,null,null,(18),(17));
var inst_33116 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_33117 = klipse.lang.javascript.beautify.call(null,inst_33116);
var state_33134__$1 = state_33134;
var statearr_33149_33175 = state_33134__$1;
(statearr_33149_33175[(2)] = inst_33117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (11))){
var inst_33123 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
var statearr_33150_33176 = state_33134__$1;
(statearr_33150_33176[(2)] = inst_33123);

(statearr_33150_33176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (9))){
var inst_33095 = (state_33134[(10)]);
var inst_33094 = (state_33134[(11)]);
var inst_33125 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33095),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33094)].join('');
var state_33134__$1 = state_33134;
var statearr_33151_33177 = state_33134__$1;
(statearr_33151_33177[(2)] = inst_33125);

(statearr_33151_33177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (5))){
var inst_33092 = (state_33134[(2)]);
var inst_33093 = cljs.core.nth.call(null,inst_33092,(0),null);
var inst_33094 = cljs.core.nth.call(null,inst_33092,(1),null);
var inst_33095 = cljs.core.nth.call(null,inst_33092,(2),null);
var state_33134__$1 = (function (){var statearr_33152 = state_33134;
(statearr_33152[(10)] = inst_33095);

(statearr_33152[(7)] = inst_33093);

(statearr_33152[(11)] = inst_33094);

return statearr_33152;
})();
var statearr_33153_33178 = state_33134__$1;
(statearr_33153_33178[(2)] = null);

(statearr_33153_33178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (14))){
var inst_33106 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_33134__$1 = state_33134;
var statearr_33154_33179 = state_33134__$1;
(statearr_33154_33179[(2)] = inst_33106);

(statearr_33154_33179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (16))){
var inst_33121 = (state_33134[(2)]);
var state_33134__$1 = state_33134;
var statearr_33155_33180 = state_33134__$1;
(statearr_33155_33180[(2)] = inst_33121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (10))){
var inst_33127 = (state_33134[(2)]);
var inst_33128 = cljs.core.async.put_BANG_.call(null,c,inst_33127);
var state_33134__$1 = state_33134;
var statearr_33156_33181 = state_33134__$1;
(statearr_33156_33181[(2)] = inst_33128);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (18))){
var inst_33111 = (state_33134[(2)]);
var inst_33112 = console.log = console.log;
var state_33134__$1 = (function (){var statearr_33157 = state_33134;
(statearr_33157[(12)] = inst_33112);

(statearr_33157[(13)] = inst_33111);

return statearr_33157;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33135 === (8))){
var state_33134__$1 = state_33134;
var statearr_33158_33182 = state_33134__$1;
(statearr_33158_33182[(2)] = null);

(statearr_33158_33182[(1)] = (13));


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
});})(c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id))
;
return ((function (switch__13454__auto__,c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id){
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____0 = (function (){
var statearr_33159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33159[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__);

(statearr_33159[(1)] = (1));

return statearr_33159;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____1 = (function (state_33134){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_33134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e33160){if((e33160 instanceof Object)){
var ex__13458__auto__ = e33160;
var statearr_33161_33183 = state_33134;
(statearr_33161_33183[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_33134;
state_33134 = G__33184;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__ = function(state_33134){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____1.call(this,state_33134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id))
})();
var state__13546__auto__ = (function (){var statearr_33162 = f__13545__auto__.call(null);
(statearr_33162[(6)] = c__13544__auto___33163);

return statearr_33162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___33163,c,map__33079,map__33079__$1,async_code_QMARK_,external_libs,container_id))
);


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj_SHARP_ = Babel;
var fn_SHARP_ = (obj_SHARP_["transform"]);
return fn_SHARP_.call(obj_SHARP_,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__33185){
var map__33186 = p__33185;
var map__33186__$1 = ((((!((map__33186 == null)))?((((map__33186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33186):map__33186);
var async_code_QMARK_ = cljs.core.get.call(null,map__33186__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__33186__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_33190 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_33190):(function (){var console_log33189 = console.log;
console.log = klipse.lang.javascript.append_to_chan.call(null,c);

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_33190));
}finally {console.log = console_log33189;
}})()));
}
}catch (e33188){var o_33191 = e33188;
cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_33191)].join(''));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map
