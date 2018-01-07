// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.reason');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.reason.eval_in_global_scope = eval;
klipse.lang.reason.ocaml__GT_js = (function klipse$lang$reason$ocaml__GT_js(src){
var map__34848 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__34848__$1 = ((((!((map__34848 == null)))?((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var js_error_msg = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__34850 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__34850,(0),null);
var res = cljs.core.nth.call(null,vec__34850,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e34853){var e = e34853;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34854 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34854["startLine"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34855 = temp__6751__auto____$1;
return G__34855;
} else {
return null;
}
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34856 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34856["startLineStartChar"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34857 = temp__6751__auto____$1;
return G__34857;
} else {
return null;
}
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34858 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34858["endLineEndChar"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34859 = temp__6751__auto____$1;
return G__34859;
} else {
return null;
}
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(e["message"]),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e34860){var e = e34860;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34861 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34861["startLine"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34862 = temp__6751__auto____$1;
return G__34862;
} else {
return null;
}
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34863 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34863["startLineStartChar"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34864 = temp__6751__auto____$1;
return G__34864;
} else {
return null;
}
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = (e["location"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__34865 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__34865["endLineEndChar"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__34866 = temp__6751__auto____$1;
return G__34866;
} else {
return null;
}
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(e["message"]),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__34867 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__34867,(0),null);
var res = cljs.core.nth.call(null,vec__34867,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__34870 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__34870,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__34870,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res__$1], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.eval_reason = (function klipse$lang$reason$eval_reason(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_log34873_34878 = console.log;
console.log = ((function (console_log34873_34878,c){
return (function() { 
var G__34879__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__34879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34880__i = 0, G__34880__a = new Array(arguments.length -  0);
while (G__34880__i < G__34880__a.length) {G__34880__a[G__34880__i] = arguments[G__34880__i + 0]; ++G__34880__i;}
  args = new cljs.core.IndexedSeq(G__34880__a,0,null);
} 
return G__34879__delegate.call(this,args);};
G__34879.cljs$lang$maxFixedArity = 0;
G__34879.cljs$lang$applyTo = (function (arglist__34881){
var args = cljs.core.seq(arglist__34881);
return G__34879__delegate(args);
});
G__34879.cljs$core$IFn$_invoke$arity$variadic = G__34879__delegate;
return G__34879;
})()
;})(console_log34873_34878,c))
;

try{try{exports = ({});

var vec__34875_34882 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_34883 = cljs.core.nth.call(null,vec__34875_34882,(0),null);
var res_34884 = cljs.core.nth.call(null,vec__34875_34882,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_34883)){
cljs.core.async.put_BANG_.call(null,c,res_34884);
} else {
cljs.core.async.put_BANG_.call(null,c,prettyFormat(klipse.lang.reason.eval_in_global_scope.call(null,res_34884)));
}
}catch (e34874){var o_34885 = e34874;
[cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_34885)].join('');
}}finally {console.log = console_log34873_34878;
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34893){
var state_val_34894 = (state_34893[(1)]);
if((state_val_34894 === (1))){
var inst_34889 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_34890 = cljs.core.nth.call(null,inst_34889,(0),null);
var inst_34891 = cljs.core.nth.call(null,inst_34889,(1),null);
var state_34893__$1 = (function (){var statearr_34895 = state_34893;
(statearr_34895[(7)] = inst_34890);

return statearr_34895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34893__$1,inst_34891);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____0 = (function (){
var statearr_34896 = [null,null,null,null,null,null,null,null];
(statearr_34896[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__);

(statearr_34896[(1)] = (1));

return statearr_34896;
});
var klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____1 = (function (state_34893){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34897){if((e34897 instanceof Object)){
var ex__13458__auto__ = e34897;
var statearr_34898_34900 = state_34893;
(statearr_34898_34900[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34901 = state_34893;
state_34893 = G__34901;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__ = function(state_34893){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____1.call(this,state_34893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__13455__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34899 = f__13545__auto__.call(null);
(statearr_34899[(6)] = c__13544__auto__);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34909){
var state_val_34910 = (state_34909[(1)]);
if((state_val_34910 === (1))){
var inst_34905 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_34906 = cljs.core.nth.call(null,inst_34905,(0),null);
var inst_34907 = cljs.core.nth.call(null,inst_34905,(1),null);
var state_34909__$1 = (function (){var statearr_34911 = state_34909;
(statearr_34911[(7)] = inst_34906);

return statearr_34911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34909__$1,inst_34907);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____0 = (function (){
var statearr_34912 = [null,null,null,null,null,null,null,null];
(statearr_34912[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__);

(statearr_34912[(1)] = (1));

return statearr_34912;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____1 = (function (state_34909){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34913){if((e34913 instanceof Object)){
var ex__13458__auto__ = e34913;
var statearr_34914_34916 = state_34909;
(statearr_34914_34916[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34917 = state_34909;
state_34909 = G__34917;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__ = function(state_34909){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____1.call(this,state_34909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34915 = f__13545__auto__.call(null);
(statearr_34915[(6)] = c__13544__auto__);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34931){
var state_val_34932 = (state_34931[(1)]);
if((state_val_34932 === (1))){
var inst_34921 = cljs.core._EQ_.call(null,version,(2));
var state_34931__$1 = state_34931;
if(inst_34921){
var statearr_34933_34942 = state_34931__$1;
(statearr_34933_34942[(1)] = (2));

} else {
var statearr_34934_34943 = state_34931__$1;
(statearr_34934_34943[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34932 === (2))){
var inst_34923 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_34931__$1 = state_34931;
var statearr_34935_34944 = state_34931__$1;
(statearr_34935_34944[(2)] = inst_34923);

(statearr_34935_34944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34932 === (3))){
var inst_34925 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_34931__$1 = state_34931;
var statearr_34936_34945 = state_34931__$1;
(statearr_34936_34945[(2)] = inst_34925);

(statearr_34936_34945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34932 === (4))){
var inst_34927 = (state_34931[(2)]);
var inst_34928 = cljs.core.nth.call(null,inst_34927,(0),null);
var inst_34929 = cljs.core.nth.call(null,inst_34927,(1),null);
var state_34931__$1 = (function (){var statearr_34937 = state_34931;
(statearr_34937[(7)] = inst_34928);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34931__$1,inst_34929);
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
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__ = null;
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____0 = (function (){
var statearr_34938 = [null,null,null,null,null,null,null,null];
(statearr_34938[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__);

(statearr_34938[(1)] = (1));

return statearr_34938;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____1 = (function (state_34931){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34939){if((e34939 instanceof Object)){
var ex__13458__auto__ = e34939;
var statearr_34940_34946 = state_34931;
(statearr_34940_34946[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34947 = state_34931;
state_34931 = G__34947;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__ = function(state_34931){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____1.call(this,state_34931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34941 = f__13545__auto__.call(null);
(statearr_34941[(6)] = c__13544__auto__);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.reason.comment_out = (function klipse$lang$reason$comment_out(src){
return ["/* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," */"].join('');
});
klipse.lang.reason.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason","selector_eval_reason",klipse.lang.reason.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason","selector_transpile_reason",klipse.lang.reason.transpile_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason->ocaml","selector_transpile_reason_to_ocaml",klipse.lang.reason.transpile__GT_ocaml_opts);
klipse.lang.reason.eval_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.ocaml__GT_reason_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.reason.transpile_ocaml__GT_reason,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason-3","selector_eval_reason_3",klipse.lang.reason.eval_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3","selector_transpile_reason_3",klipse.lang.reason.transpile_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3->ocaml","selector_transpile_reason_3_to_ocaml",klipse.lang.reason.transpile_3__GT_ocaml_opts);
klipse.common.registry.register_mode.call(null,"ocaml->reason","selector_ocaml_to_reason",klipse.lang.reason.ocaml__GT_reason_opts);

//# sourceMappingURL=reason.js.map
