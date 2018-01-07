// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__34950 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__34950__$1 = ((((!((map__34950 == null)))?((((map__34950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34950):map__34950);
var js_error_msg = cljs.core.get.call(null,map__34950__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__34950__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log34952_34957 = console.log;
console.log = ((function (console_log34952_34957,c){
return (function() { 
var G__34958__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__34958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34959__i = 0, G__34959__a = new Array(arguments.length -  0);
while (G__34959__i < G__34959__a.length) {G__34959__a[G__34959__i] = arguments[G__34959__i + 0]; ++G__34959__i;}
  args = new cljs.core.IndexedSeq(G__34959__a,0,null);
} 
return G__34958__delegate.call(this,args);};
G__34958.cljs$lang$maxFixedArity = 0;
G__34958.cljs$lang$applyTo = (function (arglist__34960){
var args = cljs.core.seq(arglist__34960);
return G__34958__delegate(args);
});
G__34958.cljs$core$IFn$_invoke$arity$variadic = G__34958__delegate;
return G__34958;
})()
;})(console_log34952_34957,c))
;

try{try{exports = ({});

var vec__34954_34961 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_34962 = cljs.core.nth.call(null,vec__34954_34961,(0),null);
var res_34963 = cljs.core.nth.call(null,vec__34954_34961,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_34962)){
cljs.core.async.put_BANG_.call(null,c,res_34963);
} else {
cljs.core.async.put_BANG_.call(null,c,prettyFormat(klipse.lang.ocaml.eval_in_global_scope.call(null,res_34963)));
}
}catch (e34953){var o_34964 = e34953;
[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_34964)].join('');
}}finally {console.log = console_log34952_34957;
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (1))){
var inst_34968 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_34969 = cljs.core.nth.call(null,inst_34968,(0),null);
var inst_34970 = cljs.core.nth.call(null,inst_34968,(1),null);
var state_34972__$1 = (function (){var statearr_34974 = state_34972;
(statearr_34974[(7)] = inst_34969);

return statearr_34974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34972__$1,inst_34970);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____0 = (function (){
var statearr_34975 = [null,null,null,null,null,null,null,null];
(statearr_34975[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__);

(statearr_34975[(1)] = (1));

return statearr_34975;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____1 = (function (state_34972){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34976){if((e34976 instanceof Object)){
var ex__13458__auto__ = e34976;
var statearr_34977_34979 = state_34972;
(statearr_34977_34979[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34980 = state_34972;
state_34972 = G__34980;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__ = function(state_34972){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____1.call(this,state_34972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34978 = f__13545__auto__.call(null);
(statearr_34978[(6)] = c__13544__auto__);

return statearr_34978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.ocaml.comment_out = (function klipse$lang$ocaml$comment_out(src){
return ["(* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," *)"].join('');
});
klipse.lang.ocaml.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.eval_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.lang.ocaml.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.transpile_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-ocaml","selector_eval_ocaml",klipse.lang.ocaml.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-ocaml","selector_transpile_ocaml",klipse.lang.ocaml.transpile_opts);

//# sourceMappingURL=ocaml.js.map
