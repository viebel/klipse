// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (SQL["Database"]);
return klipse.lang.sql.db = (new klass());
});
klipse.lang.sql.create_db = klipse.utils.runonce.call(null,klipse.lang.sql.create_db_STAR_);
klipse.lang.sql.str_eval_async = (function klipse$lang$sql$str_eval_async(query,_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34993){
var state_val_34994 = (state_34993[(1)]);
if((state_val_34994 === (1))){
var state_34993__$1 = state_34993;
var statearr_34995_35003 = state_34993__$1;
(statearr_34995_35003[(2)] = null);

(statearr_34995_35003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (2))){
var inst_34991 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34993__$1,inst_34991);
} else {
if((state_val_34994 === (3))){
var inst_34983 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_34996_35004 = state_34993__$1;
(statearr_34996_35004[(2)] = inst_34983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34993,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_34987 = klipse.lang.sql.create_db.call(null);
var inst_34988 = (SQL["runQuery"]);
var inst_34989 = inst_34988.call(SQL,klipse.lang.sql.db,query);
var state_34993__$1 = (function (){var statearr_34997 = state_34993;
(statearr_34997[(7)] = inst_34987);

return statearr_34997;
})();
var statearr_34998_35005 = state_34993__$1;
(statearr_34998_35005[(2)] = inst_34989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34993__$1);

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
var klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__ = null;
var klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____0 = (function (){
var statearr_34999 = [null,null,null,null,null,null,null,null];
(statearr_34999[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__);

(statearr_34999[(1)] = (1));

return statearr_34999;
});
var klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____1 = (function (state_34993){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object)){
var ex__13458__auto__ = e35000;
var statearr_35001_35006 = state_34993;
(statearr_35001_35006[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35007 = state_34993;
state_34993 = G__35007;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__ = function(state_34993){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____1.call(this,state_34993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__13455__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_35002 = f__13545__auto__.call(null);
(statearr_35002[(6)] = c__13544__auto__);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map
