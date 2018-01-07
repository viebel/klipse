// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.lua');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
if(typeof klipse.lang.lua._STAR_loaded_STAR_ !== 'undefined'){
} else {
klipse.lang.lua._STAR_loaded_STAR_ = false;
}
klipse.lang.lua.create_module_BANG_ = (function klipse$lang$lua$create_module_BANG_(ready_chan){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postRun","postRun",1423872796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.log("Lua Module loaded");
} else {
}

cljs.core.async.put_BANG_.call(null,ready_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));

var o_SHARP_ = window;
(o_SHARP_["evalLua"] = (function (){var obj_SHARP_ = Module;
var fn_SHARP_ = (obj_SHARP_["cwrap"]);
return fn_SHARP_.call(obj_SHARP_,"run_lua","number",["string"]);
})());

return o_SHARP_;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj_SHARP__35407 = xhr;
var fn_SHARP__35408 = (obj_SHARP__35407["open"]);
fn_SHARP__35408.call(obj_SHARP__35407,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var o_SHARP__35409 = xhr;
(o_SHARP__35409["responseType"] = "arraybuffer");


var obj_SHARP__35410 = xhr;
var fn_SHARP__35411 = (obj_SHARP__35410["overrideMimeType"]);
fn_SHARP__35411.call(obj_SHARP__35410,"application/javascript");

var o_SHARP__35412 = xhr;
(o_SHARP__35412["onload"] = ((function (o_SHARP__35412,xhr){
return (function (){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
var obj_SHARP__35413 = console;
var fn_SHARP__35414 = (obj_SHARP__35413["log"]);
fn_SHARP__35414.call(obj_SHARP__35413,"wasm loaded:");
} else {
}

var o_SHARP__35415__$1 = window;
var temp__6751__auto___35416 = (o_SHARP__35415__$1["Module"]);
if(cljs.core.truth_(temp__6751__auto___35416)){
var G__35405_35417 = temp__6751__auto___35416;
(G__35405_35417["wasmBinary"] = (xhr["response"]));
} else {
(o_SHARP__35415__$1["Module"] = (function (){var G__35406 = {};
(G__35406["wasmBinary"] = (xhr["response"]));

return G__35406;
})());
}



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
});})(o_SHARP__35412,xhr))
);


var obj_SHARP_ = xhr;
var fn_SHARP_ = (obj_SHARP_["send"]);
return fn_SHARP_.call(obj_SHARP_,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (1))){
var state_35431__$1 = state_35431;
if(klipse.lang.lua._STAR_loaded_STAR_){
var statearr_35433_35443 = state_35431__$1;
(statearr_35433_35443[(1)] = (2));

} else {
var statearr_35434_35444 = state_35431__$1;
(statearr_35434_35444[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (2))){
var state_35431__$1 = state_35431;
var statearr_35435_35445 = state_35431__$1;
(statearr_35435_35445[(2)] = null);

(statearr_35435_35445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35420 = cljs.core.async.chan.call(null);
var inst_35421 = klipse.lang.lua.create_module_BANG_.call(null,inst_35420);
var inst_35422 = cljs.core.clj__GT_js.call(null,inst_35421);
var inst_35423 = (window["Module"] = inst_35422);
var inst_35424 = klipse.lang.lua.load_module_BANG_.call(null);
var state_35431__$1 = (function (){var statearr_35436 = state_35431;
(statearr_35436[(7)] = inst_35423);

(statearr_35436[(8)] = inst_35424);

return statearr_35436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(5),inst_35420);
} else {
if((state_val_35432 === (4))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (5))){
var inst_35426 = (state_35431[(2)]);
var inst_35427 = klipse.lang.lua._STAR_loaded_STAR_ = true;
var state_35431__$1 = (function (){var statearr_35437 = state_35431;
(statearr_35437[(9)] = inst_35426);

return statearr_35437;
})();
var statearr_35438_35446 = state_35431__$1;
(statearr_35438_35446[(2)] = inst_35427);

(statearr_35438_35446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__ = null;
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____0 = (function (){
var statearr_35439 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35439[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__);

(statearr_35439[(1)] = (1));

return statearr_35439;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____1 = (function (state_35431){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35440){if((e35440 instanceof Object)){
var ex__13458__auto__ = e35440;
var statearr_35441_35447 = state_35431;
(statearr_35441_35447[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_35431;
state_35431 = G__35448;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35442 = f__13545__auto__.call(null);
(statearr_35442[(6)] = c__13544__auto__);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var o_SHARP__35452 = window;
var temp__6751__auto___35453 = (o_SHARP__35452["Module"]);
if(cljs.core.truth_(temp__6751__auto___35453)){
var G__35450_35454 = temp__6751__auto___35453;
(G__35450_35454["print"] = ((function (G__35450_35454,temp__6751__auto___35453,o_SHARP__35452,c){
return (function (txt){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
var obj_SHARP__35455 = console;
var fn_SHARP__35456 = (obj_SHARP__35455["log"]);
fn_SHARP__35456.call(obj_SHARP__35455,"lua res:",txt);
} else {
}

if(cljs.core._EQ_.call(null,txt,"emsc")){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,c,txt);
}
});})(G__35450_35454,temp__6751__auto___35453,o_SHARP__35452,c))
);
} else {
(o_SHARP__35452["Module"] = (function (){var G__35451 = {};
(G__35451["print"] = ((function (G__35451,temp__6751__auto___35453,o_SHARP__35452,c){
return (function (txt){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
var obj_SHARP__35457 = console;
var fn_SHARP__35458 = (obj_SHARP__35457["log"]);
fn_SHARP__35458.call(obj_SHARP__35457,"lua res:",txt);
} else {
}

if(cljs.core._EQ_.call(null,txt,"emsc")){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,c,txt);
}
});})(G__35451,temp__6751__auto___35453,o_SHARP__35452,c))
);

return G__35451;
})());
}



var obj_SHARP__35459 = window;
var fn_SHARP__35460 = (obj_SHARP__35459["evalLua"]);
fn_SHARP__35460.call(obj_SHARP__35459,src,opts);

return c;
}catch (e35449){var e = e35449;
return cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}});
klipse.lang.lua.eval = (function klipse$lang$lua$eval(src,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (1))){
var inst_35461 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(2),inst_35461);
} else {
if((state_val_35469 === (2))){
var inst_35463 = (state_35468[(2)]);
var inst_35464 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_35468__$1 = (function (){var statearr_35470 = state_35468;
(statearr_35470[(7)] = inst_35463);

return statearr_35470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(3),inst_35464);
} else {
if((state_val_35469 === (3))){
var inst_35466 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35468__$1,inst_35466);
} else {
return null;
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$lua$eval_$_state_machine__13455__auto__ = null;
var klipse$lang$lua$eval_$_state_machine__13455__auto____0 = (function (){
var statearr_35471 = [null,null,null,null,null,null,null,null];
(statearr_35471[(0)] = klipse$lang$lua$eval_$_state_machine__13455__auto__);

(statearr_35471[(1)] = (1));

return statearr_35471;
});
var klipse$lang$lua$eval_$_state_machine__13455__auto____1 = (function (state_35468){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35472){if((e35472 instanceof Object)){
var ex__13458__auto__ = e35472;
var statearr_35473_35475 = state_35468;
(statearr_35473_35475[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35476 = state_35468;
state_35468 = G__35476;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$lua$eval_$_state_machine__13455__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return klipse$lang$lua$eval_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$lua$eval_$_state_machine__13455__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$lua$eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$eval_$_state_machine__13455__auto____0;
klipse$lang$lua$eval_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$eval_$_state_machine__13455__auto____1;
return klipse$lang$lua$eval_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35474 = f__13545__auto__.call(null);
(statearr_35474[(6)] = c__13544__auto__);

return statearr_35474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map
