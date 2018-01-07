// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__35479){
var map__35480 = p__35479;
var map__35480__$1 = ((((!((map__35480 == null)))?((((map__35480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35480):map__35480);
var opts = map__35480__$1;
var container = cljs.core.get.call(null,map__35480__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__35483 = (function (){var obj_SHARP_ = Oblivion;
var fn_SHARP_ = (obj_SHARP_["Compile"]);
return fn_SHARP_.call(obj_SHARP_,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__35483,(0),null);
var svgout = cljs.core.nth.call(null,vec__35483,(1),null);
if(typeof stdout === 'string'){
var o_SHARP__35486 = container;
(o_SHARP__35486["innerHTML"] = svgout);


return stdout;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout)].join('');
}
}catch (e35482){var e = e35482;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_35489){
var state_val_35490 = (state_35489[(1)]);
if((state_val_35490 === (1))){
var inst_35487 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35489__$1,inst_35487);
} else {
return null;
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$oblivion$render_$_state_machine__13455__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__13455__auto____0 = (function (){
var statearr_35491 = [null,null,null,null,null,null,null];
(statearr_35491[(0)] = klipse$lang$oblivion$render_$_state_machine__13455__auto__);

(statearr_35491[(1)] = (1));

return statearr_35491;
});
var klipse$lang$oblivion$render_$_state_machine__13455__auto____1 = (function (state_35489){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_35489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35492){if((e35492 instanceof Object)){
var ex__13458__auto__ = e35492;
var statearr_35493_35495 = state_35489;
(statearr_35493_35495[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_35489;
state_35489 = G__35496;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__13455__auto__ = function(state_35489){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__13455__auto____1.call(this,state_35489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$oblivion$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__13455__auto____0;
klipse$lang$oblivion$render_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__13455__auto____1;
return klipse$lang$oblivion$render_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35494 = f__13545__auto__.call(null);
(statearr_35494[(6)] = c__13544__auto__);

return statearr_35494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map
