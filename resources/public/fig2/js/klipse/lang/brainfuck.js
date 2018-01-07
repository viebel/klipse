// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.brainfuck');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.common.registry');
klipse.lang.brainfuck.boldify_head = (function klipse$lang$brainfuck$boldify_head(data,head){
var head_value = ["<strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,data,head)),"</strong>"].join('');
return cljs.core.assoc.call(null,data,head,head_value);
});
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__35161){
var map__35162 = p__35161;
var map__35162__$1 = ((((!((map__35162 == null)))?((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var output = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",output)),"</td>\n         </tr>"].join(''):null)),"<tr>\n           <td>Data</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer))),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null)),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj_SHARP_ = window;
var fn_SHARP_ = (obj_SHARP_["brainfuck"]);
return fn_SHARP_.call(obj_SHARP_,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e35164){var o = e35164;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj_SHARP_ = brainfuck;
var fn_SHARP_ = (obj_SHARP_["text"]);
return fn_SHARP_.call(obj_SHARP_,x);
})()], null);
}catch (e35165){var o = e35165;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35173){
var state_val_35174 = (state_35173[(1)]);
if((state_val_35174 === (1))){
var inst_35169 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_35170 = cljs.core.nth.call(null,inst_35169,(0),null);
var inst_35171 = cljs.core.nth.call(null,inst_35169,(1),null);
var state_35173__$1 = (function (){var statearr_35175 = state_35173;
(statearr_35175[(7)] = inst_35170);

return statearr_35175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35173__$1,inst_35171);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____0 = (function (){
var statearr_35176 = [null,null,null,null,null,null,null,null];
(statearr_35176[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__);

(statearr_35176[(1)] = (1));

return statearr_35176;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____1 = (function (state_35173){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35177){if((e35177 instanceof Object)){
var ex__13458__auto__ = e35177;
var statearr_35178_35180 = state_35173;
(statearr_35178_35180[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_35173;
state_35173 = G__35181;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__ = function(state_35173){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____1.call(this,state_35173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35179 = f__13545__auto__.call(null);
(statearr_35179[(6)] = c__13544__auto__);

return statearr_35179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (1))){
var inst_35185 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_35186 = cljs.core.nth.call(null,inst_35185,(0),null);
var inst_35187 = cljs.core.nth.call(null,inst_35185,(1),null);
var state_35189__$1 = (function (){var statearr_35191 = state_35189;
(statearr_35191[(7)] = inst_35186);

return statearr_35191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35189__$1,inst_35187);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____0 = (function (){
var statearr_35192 = [null,null,null,null,null,null,null,null];
(statearr_35192[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__);

(statearr_35192[(1)] = (1));

return statearr_35192;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____1 = (function (state_35189){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35193){if((e35193 instanceof Object)){
var ex__13458__auto__ = e35193;
var statearr_35194_35196 = state_35189;
(statearr_35194_35196[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35197 = state_35189;
state_35189 = G__35197;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35195 = f__13545__auto__.call(null);
(statearr_35195[(6)] = c__13544__auto__);

return statearr_35195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.brainfuck.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.lang.brainfuck.eval_txt_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck_txt,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.common.registry.register_mode.call(null,"eval-brainfuck","selector_brainfuck",klipse.lang.brainfuck.eval_opts);
klipse.common.registry.register_mode.call(null,"eval-brainfuck-txt","selector_brainfuck_txt",klipse.lang.brainfuck.eval_txt_opts);

//# sourceMappingURL=brainfuck.js.map
