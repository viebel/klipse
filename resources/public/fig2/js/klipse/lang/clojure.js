// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.clojure');
goog.require('cljs.core');
goog.require('klipse.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('clojure.string');
goog.require('klipse.lang.clojure.include');
goog.require('klipse.lang.clojure.guard');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('cljs.reader');
goog.require('cljs.compiler');
goog.require('klipse.common.registry');
goog.require('klipse.lang.clojure.io');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
window.cljs.user = {};
if(typeof klipse.lang.clojure.current_ns !== 'undefined'){
} else {
klipse.lang.clojure.current_ns = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
klipse.lang.clojure.display = (function klipse$lang$clojure$display(value,p__151135){
var map__151136 = p__151135;
var map__151136__$1 = ((((!((map__151136 == null)))?((((map__151136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151136):map__151136);
var print_length = cljs.core.get.call(null,map__151136__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__151136__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_151138 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__9488__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_151139_151141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_151140_151142 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_151139_151141,_STAR_print_fn_STAR_151140_151142,sb__9488__auto__,_STAR_print_length_STAR_151138,map__151136,map__151136__$1,print_length,beautify_strings){
return (function (x__9489__auto__){
return sb__9488__auto__.append(x__9489__auto__);
});})(_STAR_print_newline_STAR_151139_151141,_STAR_print_fn_STAR_151140_151142,sb__9488__auto__,_STAR_print_length_STAR_151138,map__151136,map__151136__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__8351__auto__ = typeof value === 'string';
if(and__8351__auto__){
return beautify_strings;
} else {
return and__8351__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_151140_151142;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_151139_151141;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9488__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_151138;
}});
klipse.lang.clojure.update_current_ns = (function klipse$lang$clojure$update_current_ns(p__151143){
var map__151144 = p__151143;
var map__151144__$1 = ((((!((map__151144 == null)))?((((map__151144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151144):map__151144);
var ns = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__151144__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("update-current-ns:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,klipse.lang.clojure.current_ns,ns);
}
});
klipse.lang.clojure.result_as_str = (function klipse$lang$clojure$result_as_str(p__151146,opts){
var map__151147 = p__151146;
var map__151147__$1 = ((((!((map__151147 == null)))?((((map__151147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151147):map__151147);
var args = map__151147__$1;
var ns = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__151147__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
} else {
cljs.core.reset_BANG_.call(null,klipse.lang.clojure.current_ns,ns);
}

var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.read_result = (function klipse$lang$clojure$read_result(p__151149){
var map__151150 = p__151149;
var map__151150__$1 = ((((!((map__151150 == null)))?((((map__151150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151150):map__151150);
var form = cljs.core.get.call(null,map__151150__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__151150__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__151150__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__151150__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__151150__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.advanced_compile = (function klipse$lang$clojure$advanced_compile(code){
return code;
});
klipse.lang.clojure.convert_compile_res = (function klipse$lang$clojure$convert_compile_res(p__151152){
var map__151153 = p__151152;
var map__151153__$1 = ((((!((map__151153 == null)))?((((map__151153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151153):map__151153);
var foo = map__151153__$1;
var value = cljs.core.get.call(null,map__151153__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__151153__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.lang.clojure.my_eval = (function klipse$lang$clojure$my_eval(p__151155){
var map__151156 = p__151155;
var map__151156__$1 = ((((!((map__151156 == null)))?((((map__151156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151156):map__151156);
var args = map__151156__$1;
var file = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__151156__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse.lang.clojure.eval_for_compilation = (function klipse$lang$clojure$eval_for_compilation(p__151158){
var map__151159 = p__151158;
var map__151159__$1 = ((((!((map__151159 == null)))?((((map__151159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151159):map__151159);
var source = cljs.core.get.call(null,map__151159__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse.lang.clojure.original_emits = cljs.compiler.emits;
klipse.lang.clojure.core_compile_an_exp = (function klipse$lang$clojure$core_compile_an_exp(s,p__151161){
var map__151162 = p__151161;
var map__151162__$1 = ((((!((map__151162 == null)))?((((map__151162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151162):map__151162);
var static_fns = cljs.core.get.call(null,map__151162__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__151162__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__151162__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__151162__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__8715__auto__ = max_eval_duration;
var y__8716__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__8715__auto__ > y__8716__auto__) ? x__8715__auto__ : y__8716__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse.lang.clojure.original_emits);
var o_SHARP__151165 = window;
(o_SHARP__151165["COMPILED"] = true);


var emits151164_151166 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits151164_151166,c,max_eval_duration__$1,the_emits,map__151162,map__151162__$1,static_fns,external_libs,max_eval_duration,compile_display_guard){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits151164_151166,c,max_eval_duration__$1,the_emits,map__151162,map__151162__$1,static_fns,external_libs,max_eval_duration,compile_display_guard))
);
}finally {cljs.compiler.emits = emits151164_151166;
}
return c;
});
klipse.lang.clojure.core_eval_an_exp = (function klipse$lang$clojure$core_eval_an_exp(s,p__151167){
var map__151168 = p__151167;
var map__151168__$1 = ((((!((map__151168 == null)))?((((map__151168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151168):map__151168);
var static_fns = cljs.core.get.call(null,map__151168__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__151168__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__151168__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse.lang.clojure.guard.min_max_eval_duration);
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__8715__auto__ = max_eval_duration;
var y__8716__auto__ = klipse.lang.clojure.guard.min_max_eval_duration;
return ((x__8715__auto__ > y__8716__auto__) ? x__8715__auto__ : y__8716__auto__);
})();
var emits151170_151171 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{var o_SHARP__151172 = window;
(o_SHARP__151172["COMPILED"] = true);


cljs.js.eval_str.call(null,klipse.lang.clojure.include.create_state_eval.call(null),s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,klipse.lang.clojure.current_ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),klipse.utils.verbose_QMARK_.call(null),new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = klipse.lang.clojure.include.create_state_eval.call(null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse.lang.clojure.io.load_ns,external_libs)], null),((function (emits151170_151171,c,max_eval_duration__$1,map__151168,map__151168__$1,static_fns,external_libs,max_eval_duration){
return (function (res){
klipse.lang.clojure.update_current_ns.call(null,res);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits151170_151171,c,max_eval_duration__$1,map__151168,map__151168__$1,static_fns,external_libs,max_eval_duration))
);
}finally {cljs.compiler.emits = emits151170_151171;
}
return c;
});
klipse.lang.clojure.split_expressions = (function klipse$lang$clojure$split_expressions(s){
return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\s*/),cljs.core.map.call(null,rewrite_clj.node.string,rewrite_clj.node.children.call(null,rewrite_clj.parser.parse_string_all.call(null,s))));
});
klipse.lang.clojure.populate_err = (function klipse$lang$clojure$populate_err(res,p__151173){
var map__151174 = p__151173;
var map__151174__$1 = ((((!((map__151174 == null)))?((((map__151174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151174):map__151174);
var result_element = cljs.core.get.call(null,map__151174__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__151174__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__8351__auto__ = container;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__8351__auto__;
}
})())){
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))].join(''));
} else {
}

return res;
});
klipse.lang.clojure.core_eval = (function klipse$lang$clojure$core_eval(s,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151210){
var state_val_151211 = (state_151210[(1)]);
if((state_val_151211 === (7))){
var inst_151185 = (state_151210[(7)]);
var inst_151190 = cljs.core.first.call(null,inst_151185);
var inst_151191 = klipse.lang.clojure.core_eval_an_exp.call(null,inst_151190,opts);
var state_151210__$1 = state_151210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151210__$1,(10),inst_151191);
} else {
if((state_val_151211 === (1))){
var state_151210__$1 = state_151210;
var statearr_151212_151232 = state_151210__$1;
(statearr_151212_151232[(2)] = null);

(statearr_151212_151232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151210,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151184 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_151185 = inst_151184;
var inst_151186 = null;
var state_151210__$1 = (function (){var statearr_151213 = state_151210;
(statearr_151213[(7)] = inst_151185);

(statearr_151213[(8)] = inst_151186);

return statearr_151213;
})();
var statearr_151214_151233 = state_151210__$1;
(statearr_151214_151233[(2)] = null);

(statearr_151214_151233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (13))){
var inst_151201 = (state_151210[(2)]);
var state_151210__$1 = state_151210;
var statearr_151215_151234 = state_151210__$1;
(statearr_151215_151234[(2)] = inst_151201);

(statearr_151215_151234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (6))){
var inst_151206 = (state_151210[(2)]);
var state_151210__$1 = state_151210;
var statearr_151216_151235 = state_151210__$1;
(statearr_151216_151235[(2)] = inst_151206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (3))){
var inst_151176 = (state_151210[(2)]);
var inst_151177 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_151178 = [inst_151176];
var inst_151179 = cljs.core.PersistentHashMap.fromArrays(inst_151177,inst_151178);
var inst_151180 = klipse.lang.clojure.populate_err.call(null,inst_151179,opts);
var state_151210__$1 = state_151210;
var statearr_151217_151236 = state_151210__$1;
(statearr_151217_151236[(2)] = inst_151180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (12))){
var inst_151185 = (state_151210[(7)]);
var inst_151193 = (state_151210[(9)]);
var inst_151198 = cljs.core.rest.call(null,inst_151185);
var inst_151185__$1 = inst_151198;
var inst_151186 = inst_151193;
var state_151210__$1 = (function (){var statearr_151218 = state_151210;
(statearr_151218[(7)] = inst_151185__$1);

(statearr_151218[(8)] = inst_151186);

return statearr_151218;
})();
var statearr_151219_151237 = state_151210__$1;
(statearr_151219_151237[(2)] = null);

(statearr_151219_151237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (2))){
var inst_151208 = (state_151210[(2)]);
var state_151210__$1 = state_151210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151210__$1,inst_151208);
} else {
if((state_val_151211 === (11))){
var inst_151193 = (state_151210[(9)]);
var inst_151196 = klipse.lang.clojure.populate_err.call(null,inst_151193,opts);
var state_151210__$1 = state_151210;
var statearr_151220_151238 = state_151210__$1;
(statearr_151220_151238[(2)] = inst_151196);

(statearr_151220_151238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (9))){
var inst_151204 = (state_151210[(2)]);
var state_151210__$1 = state_151210;
var statearr_151221_151239 = state_151210__$1;
(statearr_151221_151239[(2)] = inst_151204);

(statearr_151221_151239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (5))){
var inst_151185 = (state_151210[(7)]);
var inst_151188 = cljs.core.seq.call(null,inst_151185);
var state_151210__$1 = state_151210;
if(inst_151188){
var statearr_151222_151240 = state_151210__$1;
(statearr_151222_151240[(1)] = (7));

} else {
var statearr_151223_151241 = state_151210__$1;
(statearr_151223_151241[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (10))){
var inst_151193 = (state_151210[(9)]);
var inst_151193__$1 = (state_151210[(2)]);
var inst_151194 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_151193__$1);
var state_151210__$1 = (function (){var statearr_151224 = state_151210;
(statearr_151224[(9)] = inst_151193__$1);

return statearr_151224;
})();
if(cljs.core.truth_(inst_151194)){
var statearr_151225_151242 = state_151210__$1;
(statearr_151225_151242[(1)] = (11));

} else {
var statearr_151226_151243 = state_151210__$1;
(statearr_151226_151243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151211 === (8))){
var inst_151186 = (state_151210[(8)]);
var state_151210__$1 = state_151210;
var statearr_151227_151244 = state_151210__$1;
(statearr_151227_151244[(2)] = inst_151186);

(statearr_151227_151244[(1)] = (9));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$core_eval_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$core_eval_$_state_machine__13455__auto____0 = (function (){
var statearr_151228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_151228[(0)] = klipse$lang$clojure$core_eval_$_state_machine__13455__auto__);

(statearr_151228[(1)] = (1));

return statearr_151228;
});
var klipse$lang$clojure$core_eval_$_state_machine__13455__auto____1 = (function (state_151210){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151229){if((e151229 instanceof Object)){
var ex__13458__auto__ = e151229;
var statearr_151230_151245 = state_151210;
(statearr_151230_151245[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151246 = state_151210;
state_151210 = G__151246;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$core_eval_$_state_machine__13455__auto__ = function(state_151210){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_eval_$_state_machine__13455__auto____1.call(this,state_151210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_eval_$_state_machine__13455__auto____0;
klipse$lang$clojure$core_eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_eval_$_state_machine__13455__auto____1;
return klipse$lang$clojure$core_eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151231 = f__13545__auto__.call(null);
(statearr_151231[(6)] = c__13544__auto__);

return statearr_151231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * receives a string.
 *   returns true if the expression is a string of an ns-form like (ns my.foo...) or (require 'my.foo).
 *   
 */
klipse.lang.clojure.ns_exp_QMARK_ = (function klipse$lang$clojure$ns_exp_QMARK_(exp){
var form = cljs.reader.read_string.call(null,exp);
var and__8351__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__8351__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"import","import",241030818,null),null,new cljs.core.Symbol(null,"use-macros","use-macros",734893134,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"use","use",-205850897,null),null,new cljs.core.Symbol(null,"require","require",1172530194,null),null,new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),null,new cljs.core.Symbol(null,"refer-clojure","refer-clojure",-1840651329,null),null], null), null).call(null,cljs.core.first.call(null,form));
} else {
return and__8351__auto__;
}
});
klipse.lang.clojure.core_compile = (function klipse$lang$clojure$core_compile(s,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151284){
var state_val_151285 = (state_151284[(1)]);
if((state_val_151285 === (7))){
var inst_151255 = (state_151284[(7)]);
var inst_151260 = cljs.core.first.call(null,inst_151255);
var inst_151261 = klipse.lang.clojure.core_compile_an_exp.call(null,inst_151260,opts);
var state_151284__$1 = state_151284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151284__$1,(10),inst_151261);
} else {
if((state_val_151285 === (1))){
var state_151284__$1 = state_151284;
var statearr_151286_151306 = state_151284__$1;
(statearr_151286_151306[(2)] = null);

(statearr_151286_151306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151284,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_151254 = klipse.lang.clojure.split_expressions.call(null,s);
var inst_151255 = inst_151254;
var inst_151256 = "";
var state_151284__$1 = (function (){var statearr_151287 = state_151284;
(statearr_151287[(7)] = inst_151255);

(statearr_151287[(8)] = inst_151256);

return statearr_151287;
})();
var statearr_151288_151307 = state_151284__$1;
(statearr_151288_151307[(2)] = null);

(statearr_151288_151307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (13))){
var inst_151272 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
var statearr_151289_151308 = state_151284__$1;
(statearr_151289_151308[(2)] = inst_151272);

(statearr_151289_151308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (6))){
var inst_151280 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
var statearr_151290_151309 = state_151284__$1;
(statearr_151290_151309[(2)] = inst_151280);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (3))){
var inst_151247 = (state_151284[(2)]);
var inst_151248 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_151249 = [inst_151247];
var inst_151250 = cljs.core.PersistentHashMap.fromArrays(inst_151248,inst_151249);
var state_151284__$1 = state_151284;
var statearr_151291_151310 = state_151284__$1;
(statearr_151291_151310[(2)] = inst_151250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (12))){
var inst_151255 = (state_151284[(7)]);
var inst_151256 = (state_151284[(8)]);
var inst_151263 = (state_151284[(9)]);
var inst_151267 = cljs.core.rest.call(null,inst_151255);
var inst_151268 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_151263);
var inst_151269 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_151256),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_151268)].join('');
var inst_151255__$1 = inst_151267;
var inst_151256__$1 = inst_151269;
var state_151284__$1 = (function (){var statearr_151292 = state_151284;
(statearr_151292[(7)] = inst_151255__$1);

(statearr_151292[(8)] = inst_151256__$1);

return statearr_151292;
})();
var statearr_151293_151311 = state_151284__$1;
(statearr_151293_151311[(2)] = null);

(statearr_151293_151311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (2))){
var inst_151282 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151284__$1,inst_151282);
} else {
if((state_val_151285 === (11))){
var inst_151263 = (state_151284[(9)]);
var state_151284__$1 = state_151284;
var statearr_151294_151312 = state_151284__$1;
(statearr_151294_151312[(2)] = inst_151263);

(statearr_151294_151312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (9))){
var inst_151278 = (state_151284[(2)]);
var state_151284__$1 = state_151284;
var statearr_151295_151313 = state_151284__$1;
(statearr_151295_151313[(2)] = inst_151278);

(statearr_151295_151313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (5))){
var inst_151255 = (state_151284[(7)]);
var inst_151258 = cljs.core.seq.call(null,inst_151255);
var state_151284__$1 = state_151284;
if(inst_151258){
var statearr_151296_151314 = state_151284__$1;
(statearr_151296_151314[(1)] = (7));

} else {
var statearr_151297_151315 = state_151284__$1;
(statearr_151297_151315[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (10))){
var inst_151263 = (state_151284[(9)]);
var inst_151263__$1 = (state_151284[(2)]);
var inst_151264 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_151263__$1);
var state_151284__$1 = (function (){var statearr_151298 = state_151284;
(statearr_151298[(9)] = inst_151263__$1);

return statearr_151298;
})();
if(cljs.core.truth_(inst_151264)){
var statearr_151299_151316 = state_151284__$1;
(statearr_151299_151316[(1)] = (11));

} else {
var statearr_151300_151317 = state_151284__$1;
(statearr_151300_151317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151285 === (8))){
var inst_151256 = (state_151284[(8)]);
var inst_151274 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_151275 = [inst_151256];
var inst_151276 = cljs.core.PersistentHashMap.fromArrays(inst_151274,inst_151275);
var state_151284__$1 = state_151284;
var statearr_151301_151318 = state_151284__$1;
(statearr_151301_151318[(2)] = inst_151276);

(statearr_151301_151318[(1)] = (9));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$core_compile_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$core_compile_$_state_machine__13455__auto____0 = (function (){
var statearr_151302 = [null,null,null,null,null,null,null,null,null,null];
(statearr_151302[(0)] = klipse$lang$clojure$core_compile_$_state_machine__13455__auto__);

(statearr_151302[(1)] = (1));

return statearr_151302;
});
var klipse$lang$clojure$core_compile_$_state_machine__13455__auto____1 = (function (state_151284){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151303){if((e151303 instanceof Object)){
var ex__13458__auto__ = e151303;
var statearr_151304_151319 = state_151284;
(statearr_151304_151319[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151320 = state_151284;
state_151284 = G__151320;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$core_compile_$_state_machine__13455__auto__ = function(state_151284){
switch(arguments.length){
case 0:
return klipse$lang$clojure$core_compile_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$core_compile_$_state_machine__13455__auto____1.call(this,state_151284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$core_compile_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$core_compile_$_state_machine__13455__auto____0;
klipse$lang$clojure$core_compile_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$core_compile_$_state_machine__13455__auto____1;
return klipse$lang$clojure$core_compile_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151305 = f__13545__auto__.call(null);
(statearr_151305[(6)] = c__13544__auto__);

return statearr_151305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.eval_async = (function klipse$lang$clojure$eval_async(s,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151326){
var state_val_151327 = (state_151326[(1)]);
if((state_val_151327 === (1))){
var inst_151321 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_151326__$1 = state_151326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151326__$1,(2),inst_151321);
} else {
if((state_val_151327 === (2))){
var inst_151323 = (state_151326[(2)]);
var inst_151324 = klipse.lang.clojure.result_as_str.call(null,inst_151323,opts);
var state_151326__$1 = state_151326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151326__$1,inst_151324);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_151328 = [null,null,null,null,null,null,null];
(statearr_151328[(0)] = klipse$lang$clojure$eval_async_$_state_machine__13455__auto__);

(statearr_151328[(1)] = (1));

return statearr_151328;
});
var klipse$lang$clojure$eval_async_$_state_machine__13455__auto____1 = (function (state_151326){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151329){if((e151329 instanceof Object)){
var ex__13458__auto__ = e151329;
var statearr_151330_151332 = state_151326;
(statearr_151330_151332[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151333 = state_151326;
state_151326 = G__151333;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$eval_async_$_state_machine__13455__auto__ = function(state_151326){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_async_$_state_machine__13455__auto____1.call(this,state_151326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_async_$_state_machine__13455__auto____0;
klipse$lang$clojure$eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_async_$_state_machine__13455__auto____1;
return klipse$lang$clojure$eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151331 = f__13545__auto__.call(null);
(statearr_151331[(6)] = c__13544__auto__);

return statearr_151331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * used for testing
 */
klipse.lang.clojure.eval = (function klipse$lang$clojure$eval(var_args){
var G__151335 = arguments.length;
switch (G__151335) {
case 1:
return klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse.lang.clojure.eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse.lang.clojure.eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151341){
var state_val_151342 = (state_151341[(1)]);
if((state_val_151342 === (1))){
var inst_151336 = klipse.lang.clojure.core_eval.call(null,s,opts);
var state_151341__$1 = state_151341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151341__$1,(2),inst_151336);
} else {
if((state_val_151342 === (2))){
var inst_151338 = (state_151341[(2)]);
var inst_151339 = klipse.lang.clojure.read_result.call(null,inst_151338);
var state_151341__$1 = state_151341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151341__$1,inst_151339);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$state_machine__13455__auto__ = null;
var klipse$lang$clojure$state_machine__13455__auto____0 = (function (){
var statearr_151343 = [null,null,null,null,null,null,null];
(statearr_151343[(0)] = klipse$lang$clojure$state_machine__13455__auto__);

(statearr_151343[(1)] = (1));

return statearr_151343;
});
var klipse$lang$clojure$state_machine__13455__auto____1 = (function (state_151341){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151344){if((e151344 instanceof Object)){
var ex__13458__auto__ = e151344;
var statearr_151345_151348 = state_151341;
(statearr_151345_151348[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151349 = state_151341;
state_151341 = G__151349;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__13455__auto__ = function(state_151341){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__13455__auto____1.call(this,state_151341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__13455__auto____0;
klipse$lang$clojure$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__13455__auto____1;
return klipse$lang$clojure$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151346 = f__13545__auto__.call(null);
(statearr_151346[(6)] = c__13544__auto__);

return statearr_151346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});

klipse.lang.clojure.eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javacript
 */
klipse.lang.clojure.eval_and_callback = (function klipse$lang$clojure$eval_and_callback(s,cb){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151356){
var state_val_151357 = (state_151356[(1)]);
if((state_val_151357 === (1))){
var inst_151350 = klipse.lang.clojure.eval.call(null,s);
var state_151356__$1 = state_151356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151356__$1,(2),inst_151350);
} else {
if((state_val_151357 === (2))){
var inst_151352 = (state_151356[(2)]);
var inst_151353 = cljs.core.clj__GT_js.call(null,inst_151352);
var inst_151354 = cb.call(null,inst_151353);
var state_151356__$1 = state_151356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151356__$1,inst_151354);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____0 = (function (){
var statearr_151358 = [null,null,null,null,null,null,null];
(statearr_151358[(0)] = klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__);

(statearr_151358[(1)] = (1));

return statearr_151358;
});
var klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____1 = (function (state_151356){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151359){if((e151359 instanceof Object)){
var ex__13458__auto__ = e151359;
var statearr_151360_151362 = state_151356;
(statearr_151360_151362[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151363 = state_151356;
state_151356 = G__151363;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__ = function(state_151356){
switch(arguments.length){
case 0:
return klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____1.call(this,state_151356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____0;
klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto____1;
return klipse$lang$clojure$eval_and_callback_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151361 = f__13545__auto__.call(null);
(statearr_151361[(6)] = c__13544__auto__);

return statearr_151361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * useful for testing and js export
 */
klipse.lang.clojure.str_compile = (function klipse$lang$clojure$str_compile(var_args){
var G__151365 = arguments.length;
switch (G__151365) {
case 1:
return klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
});

klipse.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151371){
var state_val_151372 = (state_151371[(1)]);
if((state_val_151372 === (1))){
var inst_151366 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_151371__$1 = state_151371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151371__$1,(2),inst_151366);
} else {
if((state_val_151372 === (2))){
var inst_151368 = (state_151371[(2)]);
var inst_151369 = klipse.lang.clojure.convert_compile_res.call(null,inst_151368);
var state_151371__$1 = state_151371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151371__$1,inst_151369);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$state_machine__13455__auto__ = null;
var klipse$lang$clojure$state_machine__13455__auto____0 = (function (){
var statearr_151373 = [null,null,null,null,null,null,null];
(statearr_151373[(0)] = klipse$lang$clojure$state_machine__13455__auto__);

(statearr_151373[(1)] = (1));

return statearr_151373;
});
var klipse$lang$clojure$state_machine__13455__auto____1 = (function (state_151371){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151374){if((e151374 instanceof Object)){
var ex__13458__auto__ = e151374;
var statearr_151375_151378 = state_151371;
(statearr_151375_151378[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151379 = state_151371;
state_151371 = G__151379;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$state_machine__13455__auto__ = function(state_151371){
switch(arguments.length){
case 0:
return klipse$lang$clojure$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$state_machine__13455__auto____1.call(this,state_151371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$state_machine__13455__auto____0;
klipse$lang$clojure$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$state_machine__13455__auto____1;
return klipse$lang$clojure$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151376 = f__13545__auto__.call(null);
(statearr_151376[(6)] = c__13544__auto__);

return statearr_151376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});

klipse.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse.lang.clojure.compile_async = (function klipse$lang$clojure$compile_async(exp,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151385){
var state_val_151386 = (state_151385[(1)]);
if((state_val_151386 === (1))){
var inst_151380 = klipse.lang.clojure.core_compile.call(null,exp,opts);
var state_151385__$1 = state_151385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151385__$1,(2),inst_151380);
} else {
if((state_val_151386 === (2))){
var inst_151382 = (state_151385[(2)]);
var inst_151383 = klipse.lang.clojure.convert_compile_res.call(null,inst_151382);
var state_151385__$1 = state_151385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151385__$1,inst_151383);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$compile_async_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$compile_async_$_state_machine__13455__auto____0 = (function (){
var statearr_151387 = [null,null,null,null,null,null,null];
(statearr_151387[(0)] = klipse$lang$clojure$compile_async_$_state_machine__13455__auto__);

(statearr_151387[(1)] = (1));

return statearr_151387;
});
var klipse$lang$clojure$compile_async_$_state_machine__13455__auto____1 = (function (state_151385){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151388){if((e151388 instanceof Object)){
var ex__13458__auto__ = e151388;
var statearr_151389_151391 = state_151385;
(statearr_151389_151391[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151392 = state_151385;
state_151385 = G__151392;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$compile_async_$_state_machine__13455__auto__ = function(state_151385){
switch(arguments.length){
case 0:
return klipse$lang$clojure$compile_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$compile_async_$_state_machine__13455__auto____1.call(this,state_151385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$compile_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$compile_async_$_state_machine__13455__auto____0;
klipse$lang$clojure$compile_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$compile_async_$_state_machine__13455__auto____1;
return klipse$lang$clojure$compile_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151390 = f__13545__auto__.call(null);
(statearr_151390[(6)] = c__13544__auto__);

return statearr_151390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.str_compile_async = (function klipse$lang$clojure$str_compile_async(exp,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151399){
var state_val_151400 = (state_151399[(1)]);
if((state_val_151400 === (1))){
var inst_151393 = klipse.lang.clojure.compile_async.call(null,exp,opts);
var state_151399__$1 = state_151399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151399__$1,(2),inst_151393);
} else {
if((state_val_151400 === (2))){
var inst_151395 = (state_151399[(2)]);
var inst_151396 = cljs.core.second.call(null,inst_151395);
var inst_151397 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_151396)].join('');
var state_151399__$1 = state_151399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151399__$1,inst_151397);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____0 = (function (){
var statearr_151401 = [null,null,null,null,null,null,null];
(statearr_151401[(0)] = klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__);

(statearr_151401[(1)] = (1));

return statearr_151401;
});
var klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____1 = (function (state_151399){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151402){if((e151402 instanceof Object)){
var ex__13458__auto__ = e151402;
var statearr_151403_151405 = state_151399;
(statearr_151403_151405[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151406 = state_151399;
state_151399 = G__151406;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__ = function(state_151399){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____1.call(this,state_151399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____0;
klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto____1;
return klipse$lang$clojure$str_compile_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151404 = f__13545__auto__.call(null);
(statearr_151404[(6)] = c__13544__auto__);

return statearr_151404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.str_eval_async = (function klipse$lang$clojure$str_eval_async(exp,p__151408){
var map__151409 = p__151408;
var map__151409__$1 = ((((!((map__151409 == null)))?((((map__151409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151409):map__151409);
var opts = map__151409__$1;
var container_id = cljs.core.get.call(null,map__151409__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13544__auto___151451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id){
return (function (state_151437){
var state_val_151438 = (state_151437[(1)]);
if((state_val_151438 === (1))){
var inst_151411 = clojure.string.blank_QMARK_.call(null,exp);
var state_151437__$1 = state_151437;
if(inst_151411){
var statearr_151439_151452 = state_151437__$1;
(statearr_151439_151452[(1)] = (2));

} else {
var statearr_151440_151453 = state_151437__$1;
(statearr_151440_151453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151438 === (2))){
var inst_151413 = cljs.core.async.put_BANG_.call(null,c,"");
var state_151437__$1 = state_151437;
var statearr_151441_151454 = state_151437__$1;
(statearr_151441_151454[(2)] = inst_151413);

(statearr_151441_151454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151438 === (3))){
var inst_151415 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_151418 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_151419 = (function (){var _STAR_print_newline_STAR_151416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_151417 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_151416,_STAR_print_fn_STAR_151417,inst_151415,inst_151418,state_val_151438,c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id){
return (function (p1__151407_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__151407_SHARP_);
});
;})(_STAR_print_newline_STAR_151416,_STAR_print_fn_STAR_151417,inst_151415,inst_151418,state_val_151438,c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id))
})();
var inst_151420 = cljs.core._STAR_print_fn_STAR_ = inst_151419;
var state_151437__$1 = (function (){var statearr_151442 = state_151437;
(statearr_151442[(7)] = inst_151415);

(statearr_151442[(8)] = inst_151418);

(statearr_151442[(9)] = inst_151420);

return statearr_151442;
})();
var statearr_151443_151455 = state_151437__$1;
(statearr_151443_151455[(2)] = null);

(statearr_151443_151455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151438 === (4))){
var inst_151435 = (state_151437[(2)]);
var state_151437__$1 = state_151437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151437__$1,inst_151435);
} else {
if((state_val_151438 === (5))){
var inst_151433 = (state_151437[(2)]);
var state_151437__$1 = state_151437;
var statearr_151444_151456 = state_151437__$1;
(statearr_151444_151456[(2)] = inst_151433);

(statearr_151444_151456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151438 === (6))){
var inst_151421 = (state_151437[(2)]);
var inst_151422 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_151423 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_151437__$1 = (function (){var statearr_151445 = state_151437;
(statearr_151445[(10)] = inst_151422);

(statearr_151445[(11)] = inst_151421);

(statearr_151445[(12)] = inst_151423);

return statearr_151445;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151438 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_151437,null,null,(6),(5));
var inst_151427 = klipse.lang.clojure.eval_async.call(null,exp,opts);
var state_151437__$1 = state_151437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151437__$1,(8),inst_151427);
} else {
if((state_val_151438 === (8))){
var inst_151429 = (state_151437[(2)]);
var inst_151430 = cljs.core.second.call(null,inst_151429);
var inst_151431 = cljs.core.async.put_BANG_.call(null,c,inst_151430);
var state_151437__$1 = state_151437;
var statearr_151446_151457 = state_151437__$1;
(statearr_151446_151457[(2)] = inst_151431);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151437__$1);

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
});})(c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id))
;
return ((function (switch__13454__auto__,c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id){
return (function() {
var klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_151447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_151447[(0)] = klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__);

(statearr_151447[(1)] = (1));

return statearr_151447;
});
var klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____1 = (function (state_151437){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151448){if((e151448 instanceof Object)){
var ex__13458__auto__ = e151448;
var statearr_151449_151458 = state_151437;
(statearr_151449_151458[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151459 = state_151437;
state_151437 = G__151459;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__ = function(state_151437){
switch(arguments.length){
case 0:
return klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____1.call(this,state_151437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____0;
klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto____1;
return klipse$lang$clojure$str_eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id))
})();
var state__13546__auto__ = (function (){var statearr_151450 = f__13545__auto__.call(null);
(statearr_151450[(6)] = c__13544__auto___151451);

return statearr_151450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___151451,c,map__151409,map__151409__$1,opts,container_id))
);


return c;
});
klipse.lang.clojure.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.clojure.compile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clojure.str_compile_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clojure","selector",klipse.lang.clojure.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-clojurescript","selector_js",klipse.lang.clojure.compile_opts);

//# sourceMappingURL=clojure.js.map
