// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj_SHARP_ = Babel;
var fn_SHARP_ = (obj_SHARP_["transform"]);
return fn_SHARP_.call(obj_SHARP_,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35020){
var state_val_35021 = (state_35020[(1)]);
if((state_val_35021 === (1))){
var state_35020__$1 = state_35020;
var statearr_35022_35030 = state_35020__$1;
(statearr_35022_35030[(2)] = null);

(statearr_35022_35030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (2))){
var inst_35018 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35020__$1,inst_35018);
} else {
if((state_val_35021 === (3))){
var inst_35010 = (state_35020[(2)]);
var inst_35011 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35010)].join('');
var state_35020__$1 = state_35020;
var statearr_35023_35031 = state_35020__$1;
(statearr_35023_35031[(2)] = inst_35011);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35020,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_35015 = klipse.lang.jsx.babel.call(null,exp);
var inst_35016 = klipse.utils.eval_in_global_scope.call(null,inst_35015);
var state_35020__$1 = (function (){var statearr_35024 = state_35020;
(statearr_35024[(7)] = inst_35016);

return statearr_35024;
})();
var statearr_35025_35032 = state_35020__$1;
(statearr_35025_35032[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35020__$1);

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
var klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____0 = (function (){
var statearr_35026 = [null,null,null,null,null,null,null,null];
(statearr_35026[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__);

(statearr_35026[(1)] = (1));

return statearr_35026;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____1 = (function (state_35020){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35027){if((e35027 instanceof Object)){
var ex__13458__auto__ = e35027;
var statearr_35028_35033 = state_35020;
(statearr_35028_35033[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_35020;
state_35020 = G__35034;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__ = function(state_35020){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____1.call(this,state_35020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35029 = f__13545__auto__.call(null);
(statearr_35029[(6)] = c__13544__auto__);

return statearr_35029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__35035){
var map__35036 = p__35035;
var map__35036__$1 = ((((!((map__35036 == null)))?((((map__35036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35036):map__35036);
var container_id = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e35038){var e = e35038;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (1))){
var inst_35039 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35041__$1,inst_35039);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____0 = (function (){
var statearr_35043 = [null,null,null,null,null,null,null];
(statearr_35043[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__);

(statearr_35043[(1)] = (1));

return statearr_35043;
});
var klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____1 = (function (state_35041){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35044){if((e35044 instanceof Object)){
var ex__13458__auto__ = e35044;
var statearr_35045_35047 = state_35041;
(statearr_35045_35047[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35048 = state_35041;
state_35041 = G__35048;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__13455__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35046 = f__13545__auto__.call(null);
(statearr_35046[(6)] = c__13544__auto__);

return statearr_35046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__35049){
var map__35050 = p__35049;
var map__35050__$1 = ((((!((map__35050 == null)))?((((map__35050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35050):map__35050);
var container_id = cljs.core.get.call(null,map__35050__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e35052){var e = e35052;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35055){
var state_val_35056 = (state_35055[(1)]);
if((state_val_35056 === (1))){
var inst_35053 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35055__$1,inst_35053);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__13455__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__13455__auto____0 = (function (){
var statearr_35057 = [null,null,null,null,null,null,null];
(statearr_35057[(0)] = klipse$lang$jsx$render_react_$_state_machine__13455__auto__);

(statearr_35057[(1)] = (1));

return statearr_35057;
});
var klipse$lang$jsx$render_react_$_state_machine__13455__auto____1 = (function (state_35055){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35058){if((e35058 instanceof Object)){
var ex__13458__auto__ = e35058;
var statearr_35059_35061 = state_35055;
(statearr_35059_35061[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35062 = state_35055;
state_35055 = G__35062;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__13455__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__13455__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$render_react_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__13455__auto____0;
klipse$lang$jsx$render_react_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__13455__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35060 = f__13545__auto__.call(null);
(statearr_35060[(6)] = c__13544__auto__);

return statearr_35060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35072){
var state_val_35073 = (state_35072[(1)]);
if((state_val_35073 === (1))){
var state_35072__$1 = state_35072;
var statearr_35074_35081 = state_35072__$1;
(statearr_35074_35081[(2)] = null);

(statearr_35074_35081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (2))){
var inst_35070 = (state_35072[(2)]);
var state_35072__$1 = state_35072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35072__$1,inst_35070);
} else {
if((state_val_35073 === (3))){
var inst_35063 = (state_35072[(2)]);
var inst_35064 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35063)].join('');
var state_35072__$1 = state_35072;
var statearr_35075_35082 = state_35072__$1;
(statearr_35075_35082[(2)] = inst_35064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35072__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35073 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35072,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_35068 = klipse.lang.jsx.babel.call(null,exp);
var state_35072__$1 = state_35072;
var statearr_35076_35083 = state_35072__$1;
(statearr_35076_35083[(2)] = inst_35068);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35072__$1);

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
var klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____0 = (function (){
var statearr_35077 = [null,null,null,null,null,null,null];
(statearr_35077[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__);

(statearr_35077[(1)] = (1));

return statearr_35077;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____1 = (function (state_35072){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35078){if((e35078 instanceof Object)){
var ex__13458__auto__ = e35078;
var statearr_35079_35084 = state_35072;
(statearr_35079_35084[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35085 = state_35072;
state_35072 = G__35085;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__ = function(state_35072){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____1.call(this,state_35072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35080 = f__13545__auto__.call(null);
(statearr_35080[(6)] = c__13544__auto__);

return statearr_35080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.jsx.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.eval_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.transpile_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_jsx,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_react_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_react,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-jsx","selector_jsx",klipse.lang.jsx.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-jsx","selector_transpile_jsx",klipse.lang.jsx.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-jsx","selector_render_jsx",klipse.lang.jsx.render_opts);
klipse.common.registry.register_mode.call(null,"render-react","selector_react",klipse.lang.jsx.render_react_opts);

//# sourceMappingURL=jsx.js.map
