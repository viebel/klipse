// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
klipse.utils.current_url = (function klipse$utils$current_url(){
return cemerick.url.url.call(null,(location["href"]));
});
klipse.utils.url_parameters_STAR_ = (function klipse$utils$url_parameters_STAR_(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
klipse.utils.url_parameters = cljs.core.memoize.call(null,klipse.utils.url_parameters_STAR_);
/**
 * Returns the current url with an additional parameter.
 *   If the parameter already exists, it is overridden.
 */
klipse.utils.add_url_parameter = (function klipse$utils$add_url_parameter(base_url,key,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in.call(null,base_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.name.call(null,key)], null),value))].join('');
});
klipse.utils.create_url_with_input = (function klipse$utils$create_url_with_input(base_url,input){
return klipse.utils.add_url_parameter.call(null,(cljs.core.truth_(base_url)?cemerick.url.url.call(null,base_url):klipse.utils.current_url.call(null)),new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894),input);
});
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (counter){
return (function (){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,counter){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,counter){
return (function (state_25855){
var state_val_25856 = (state_25855[(1)]);
if((state_val_25856 === (1))){
var inst_25842 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_25843 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_25855__$1 = (function (){var statearr_25857 = state_25855;
(statearr_25857[(7)] = inst_25842);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25855__$1,(2),inst_25843);
} else {
if((state_val_25856 === (2))){
var inst_25845 = (state_25855[(2)]);
var inst_25846 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_25847 = cljs.core.deref.call(null,counter);
var inst_25848 = (inst_25847 === (0));
var state_25855__$1 = (function (){var statearr_25858 = state_25855;
(statearr_25858[(8)] = inst_25846);

(statearr_25858[(9)] = inst_25845);

return statearr_25858;
})();
if(cljs.core.truth_(inst_25848)){
var statearr_25859_25882 = state_25855__$1;
(statearr_25859_25882[(1)] = (3));

} else {
var statearr_25860_25883 = state_25855__$1;
(statearr_25860_25883[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25856 === (3))){
var inst_25850 = func.call(null);
var state_25855__$1 = state_25855;
var statearr_25861_25884 = state_25855__$1;
(statearr_25861_25884[(2)] = inst_25850);

(statearr_25861_25884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25856 === (4))){
var state_25855__$1 = state_25855;
var statearr_25862_25885 = state_25855__$1;
(statearr_25862_25885[(2)] = null);

(statearr_25862_25885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25856 === (5))){
var inst_25853 = (state_25855[(2)]);
var state_25855__$1 = state_25855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25855__$1,inst_25853);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__,counter))
;
return ((function (switch__13454__auto__,c__13544__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__13455__auto__ = null;
var klipse$utils$debounce_$_state_machine__13455__auto____0 = (function (){
var statearr_25863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25863[(0)] = klipse$utils$debounce_$_state_machine__13455__auto__);

(statearr_25863[(1)] = (1));

return statearr_25863;
});
var klipse$utils$debounce_$_state_machine__13455__auto____1 = (function (state_25855){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_25855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e25864){if((e25864 instanceof Object)){
var ex__13458__auto__ = e25864;
var statearr_25865_25886 = state_25855;
(statearr_25865_25886[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25887 = state_25855;
state_25855 = G__25887;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13455__auto__ = function(state_25855){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13455__auto____1.call(this,state_25855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13455__auto____0;
klipse$utils$debounce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13455__auto____1;
return klipse$utils$debounce_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,counter))
})();
var state__13546__auto__ = (function (){var statearr_25866 = f__13545__auto__.call(null);
(statearr_25866[(6)] = c__13544__auto__);

return statearr_25866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,counter))
);

return c__13544__auto__;
});})(counter))
,((function (counter){
return (function (){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,counter){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,counter){
return (function (state_25874){
var state_val_25875 = (state_25874[(1)]);
if((state_val_25875 === (1))){
var inst_25867 = func.call(null);
var inst_25868 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_25869 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_25874__$1 = (function (){var statearr_25876 = state_25874;
(statearr_25876[(7)] = inst_25868);

(statearr_25876[(8)] = inst_25867);

return statearr_25876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25874__$1,(2),inst_25869);
} else {
if((state_val_25875 === (2))){
var inst_25871 = (state_25874[(2)]);
var inst_25872 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_25874__$1 = (function (){var statearr_25877 = state_25874;
(statearr_25877[(9)] = inst_25871);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25874__$1,inst_25872);
} else {
return null;
}
}
});})(c__13544__auto__,counter))
;
return ((function (switch__13454__auto__,c__13544__auto__,counter){
return (function() {
var klipse$utils$debounce_$_state_machine__13455__auto__ = null;
var klipse$utils$debounce_$_state_machine__13455__auto____0 = (function (){
var statearr_25878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25878[(0)] = klipse$utils$debounce_$_state_machine__13455__auto__);

(statearr_25878[(1)] = (1));

return statearr_25878;
});
var klipse$utils$debounce_$_state_machine__13455__auto____1 = (function (state_25874){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_25874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e25879){if((e25879 instanceof Object)){
var ex__13458__auto__ = e25879;
var statearr_25880_25888 = state_25874;
(statearr_25880_25888[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25889 = state_25874;
state_25874 = G__25889;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13455__auto__ = function(state_25874){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13455__auto____1.call(this,state_25874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$debounce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13455__auto____0;
klipse$utils$debounce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13455__auto____1;
return klipse$utils$debounce_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,counter))
})();
var state__13546__auto__ = (function (){var statearr_25881 = f__13545__auto__.call(null);
(statearr_25881[(6)] = c__13544__auto__);

return statearr_25881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,counter))
);

return c__13544__auto__;
});})(counter))
], null);
});
klipse.utils.gist_path_raw = (function klipse$utils$gist_path_raw(gist_id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"/raw","?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
});
klipse.utils.gist_path_page = (function klipse$utils$gist_path_page(gist_id){
return ["https://gist.github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
});
klipse.utils.read_input_from_gist = (function klipse$utils$read_input_from_gist(gist_id){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_25933){
var state_val_25934 = (state_25933[(1)]);
if((state_val_25934 === (7))){
var state_25933__$1 = state_25933;
var statearr_25935_25962 = state_25933__$1;
(statearr_25935_25962[(2)] = false);

(statearr_25935_25962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (1))){
var state_25933__$1 = state_25933;
if(cljs.core.truth_(gist_id)){
var statearr_25936_25963 = state_25933__$1;
(statearr_25936_25963[(1)] = (2));

} else {
var statearr_25937_25964 = state_25933__$1;
(statearr_25937_25964[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (4))){
var inst_25931 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25933__$1,inst_25931);
} else {
if((state_val_25934 === (15))){
var inst_25920 = (state_25933[(7)]);
var inst_25892 = (state_25933[(8)]);
var inst_25925 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25892),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25920),"\""].join('');
var state_25933__$1 = state_25933;
var statearr_25938_25965 = state_25933__$1;
(statearr_25938_25965[(2)] = inst_25925);

(statearr_25938_25965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (13))){
var inst_25898 = (state_25933[(9)]);
var state_25933__$1 = state_25933;
var statearr_25939_25966 = state_25933__$1;
(statearr_25939_25966[(2)] = inst_25898);

(statearr_25939_25966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (6))){
var inst_25898 = (state_25933[(9)]);
var inst_25903 = inst_25898.cljs$lang$protocol_mask$partition0$;
var inst_25904 = (inst_25903 & (64));
var inst_25905 = inst_25898.cljs$core$ISeq$;
var inst_25906 = (cljs.core.PROTOCOL_SENTINEL === inst_25905);
var inst_25907 = (inst_25904) || (inst_25906);
var state_25933__$1 = state_25933;
if(cljs.core.truth_(inst_25907)){
var statearr_25940_25967 = state_25933__$1;
(statearr_25940_25967[(1)] = (9));

} else {
var statearr_25941_25968 = state_25933__$1;
(statearr_25941_25968[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (17))){
var inst_25928 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25942_25969 = state_25933__$1;
(statearr_25942_25969[(2)] = inst_25928);

(statearr_25942_25969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (3))){
var state_25933__$1 = state_25933;
var statearr_25943_25970 = state_25933__$1;
(statearr_25943_25970[(2)] = null);

(statearr_25943_25970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (12))){
var inst_25898 = (state_25933[(9)]);
var inst_25916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25898);
var state_25933__$1 = state_25933;
var statearr_25944_25971 = state_25933__$1;
(statearr_25944_25971[(2)] = inst_25916);

(statearr_25944_25971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (2))){
var inst_25892 = (state_25933[(8)]);
var inst_25892__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_25893 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25894 = [false];
var inst_25895 = cljs.core.PersistentHashMap.fromArrays(inst_25893,inst_25894);
var inst_25896 = cljs_http.client.get.call(null,inst_25892__$1,inst_25895);
var state_25933__$1 = (function (){var statearr_25945 = state_25933;
(statearr_25945[(8)] = inst_25892__$1);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25933__$1,(5),inst_25896);
} else {
if((state_val_25934 === (11))){
var inst_25911 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25946_25972 = state_25933__$1;
(statearr_25946_25972[(2)] = inst_25911);

(statearr_25946_25972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (9))){
var state_25933__$1 = state_25933;
var statearr_25947_25973 = state_25933__$1;
(statearr_25947_25973[(2)] = true);

(statearr_25947_25973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (5))){
var inst_25898 = (state_25933[(9)]);
var inst_25898__$1 = (state_25933[(2)]);
var inst_25900 = (inst_25898__$1 == null);
var inst_25901 = cljs.core.not.call(null,inst_25900);
var state_25933__$1 = (function (){var statearr_25948 = state_25933;
(statearr_25948[(9)] = inst_25898__$1);

return statearr_25948;
})();
if(inst_25901){
var statearr_25949_25974 = state_25933__$1;
(statearr_25949_25974[(1)] = (6));

} else {
var statearr_25950_25975 = state_25933__$1;
(statearr_25950_25975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (14))){
var inst_25920 = (state_25933[(7)]);
var inst_25919 = (state_25933[(2)]);
var inst_25920__$1 = cljs.core.get.call(null,inst_25919,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_25921 = cljs.core.get.call(null,inst_25919,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_25922 = cljs.core._EQ_.call(null,inst_25920__$1,(200));
var inst_25923 = !(inst_25922);
var state_25933__$1 = (function (){var statearr_25951 = state_25933;
(statearr_25951[(7)] = inst_25920__$1);

(statearr_25951[(10)] = inst_25921);

return statearr_25951;
})();
if(inst_25923){
var statearr_25952_25976 = state_25933__$1;
(statearr_25952_25976[(1)] = (15));

} else {
var statearr_25953_25977 = state_25933__$1;
(statearr_25953_25977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (16))){
var inst_25921 = (state_25933[(10)]);
var state_25933__$1 = state_25933;
var statearr_25954_25978 = state_25933__$1;
(statearr_25954_25978[(2)] = inst_25921);

(statearr_25954_25978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (10))){
var state_25933__$1 = state_25933;
var statearr_25955_25979 = state_25933__$1;
(statearr_25955_25979[(2)] = false);

(statearr_25955_25979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (8))){
var inst_25914 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
if(cljs.core.truth_(inst_25914)){
var statearr_25956_25980 = state_25933__$1;
(statearr_25956_25980[(1)] = (12));

} else {
var statearr_25957_25981 = state_25933__$1;
(statearr_25957_25981[(1)] = (13));

}

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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$utils$read_input_from_gist_$_state_machine__13455__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__13455__auto____0 = (function (){
var statearr_25958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25958[(0)] = klipse$utils$read_input_from_gist_$_state_machine__13455__auto__);

(statearr_25958[(1)] = (1));

return statearr_25958;
});
var klipse$utils$read_input_from_gist_$_state_machine__13455__auto____1 = (function (state_25933){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_25933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e25959){if((e25959 instanceof Object)){
var ex__13458__auto__ = e25959;
var statearr_25960_25982 = state_25933;
(statearr_25960_25982[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25983 = state_25933;
state_25933 = G__25983;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__13455__auto__ = function(state_25933){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__13455__auto____1.call(this,state_25933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$read_input_from_gist_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__13455__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__13455__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_25961 = f__13545__auto__.call(null);
(statearr_25961[(6)] = c__13544__auto__);

return statearr_25961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__25984__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__25984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25985__i = 0, G__25985__a = new Array(arguments.length -  0);
while (G__25985__i < G__25985__a.length) {G__25985__a[G__25985__i] = arguments[G__25985__i + 0]; ++G__25985__i;}
  args = new cljs.core.IndexedSeq(G__25985__a,0,null);
} 
return G__25984__delegate.call(this,args);};
G__25984.cljs$lang$maxFixedArity = 0;
G__25984.cljs$lang$applyTo = (function (arglist__25986){
var args = cljs.core.seq(arglist__25986);
return G__25984__delegate(args);
});
G__25984.cljs$core$IFn$_invoke$arity$variadic = G__25984__delegate;
return G__25984;
})()
;
;})(ran))
});
/**
 * Returns a function that will run `f` only once.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
 *   `f` must return a channel.
 */
klipse.utils.runonce_async = (function klipse$utils$runonce_async(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__26023__delegate = function (args){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,ran){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,ran){
return (function (state_26007){
var state_val_26008 = (state_26007[(1)]);
if((state_val_26008 === (1))){
var inst_25987 = cljs.core.deref.call(null,ran);
var inst_25988 = cljs.core.not.call(null,inst_25987);
var state_26007__$1 = state_26007;
if(inst_25988){
var statearr_26009_26024 = state_26007__$1;
(statearr_26009_26024[(1)] = (2));

} else {
var statearr_26010_26025 = state_26007__$1;
(statearr_26010_26025[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (2))){
var inst_25990 = cljs.core.apply.call(null,f,args);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26007__$1,(5),inst_25990);
} else {
if((state_val_26008 === (3))){
var inst_26001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26002 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_26003 = (new cljs.core.PersistentVector(null,1,(5),inst_26001,inst_26002,null));
var state_26007__$1 = state_26007;
var statearr_26011_26026 = state_26007__$1;
(statearr_26011_26026[(2)] = inst_26003);

(statearr_26011_26026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (4))){
var inst_26005 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26007__$1,inst_26005);
} else {
if((state_val_26008 === (5))){
var inst_25992 = (state_26007[(7)]);
var inst_25992__$1 = (state_26007[(2)]);
var inst_25993 = cljs.core.first.call(null,inst_25992__$1);
var inst_25994 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_25993);
var state_26007__$1 = (function (){var statearr_26012 = state_26007;
(statearr_26012[(7)] = inst_25992__$1);

return statearr_26012;
})();
if(inst_25994){
var statearr_26013_26027 = state_26007__$1;
(statearr_26013_26027[(1)] = (6));

} else {
var statearr_26014_26028 = state_26007__$1;
(statearr_26014_26028[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (6))){
var inst_25996 = cljs.core.reset_BANG_.call(null,ran,true);
var state_26007__$1 = state_26007;
var statearr_26015_26029 = state_26007__$1;
(statearr_26015_26029[(2)] = inst_25996);

(statearr_26015_26029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (7))){
var state_26007__$1 = state_26007;
var statearr_26016_26030 = state_26007__$1;
(statearr_26016_26030[(2)] = null);

(statearr_26016_26030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (8))){
var inst_25992 = (state_26007[(7)]);
var inst_25999 = (state_26007[(2)]);
var state_26007__$1 = (function (){var statearr_26017 = state_26007;
(statearr_26017[(8)] = inst_25999);

return statearr_26017;
})();
var statearr_26018_26031 = state_26007__$1;
(statearr_26018_26031[(2)] = inst_25992);

(statearr_26018_26031[(1)] = (4));


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
});})(c__13544__auto__,ran))
;
return ((function (switch__13454__auto__,c__13544__auto__,ran){
return (function() {
var klipse$utils$runonce_async_$_state_machine__13455__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__13455__auto____0 = (function (){
var statearr_26019 = [null,null,null,null,null,null,null,null,null];
(statearr_26019[(0)] = klipse$utils$runonce_async_$_state_machine__13455__auto__);

(statearr_26019[(1)] = (1));

return statearr_26019;
});
var klipse$utils$runonce_async_$_state_machine__13455__auto____1 = (function (state_26007){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_26007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e26020){if((e26020 instanceof Object)){
var ex__13458__auto__ = e26020;
var statearr_26021_26032 = state_26007;
(statearr_26021_26032[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26033 = state_26007;
state_26007 = G__26033;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__13455__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__13455__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$runonce_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__13455__auto____0;
klipse$utils$runonce_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__13455__auto____1;
return klipse$utils$runonce_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,ran))
})();
var state__13546__auto__ = (function (){var statearr_26022 = f__13545__auto__.call(null);
(statearr_26022[(6)] = c__13544__auto__);

return statearr_26022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,ran))
);

return c__13544__auto__;
};
var G__26023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26034__i = 0, G__26034__a = new Array(arguments.length -  0);
while (G__26034__i < G__26034__a.length) {G__26034__a[G__26034__i] = arguments[G__26034__i + 0]; ++G__26034__i;}
  args = new cljs.core.IndexedSeq(G__26034__a,0,null);
} 
return G__26023__delegate.call(this,args);};
G__26023.cljs$lang$maxFixedArity = 0;
G__26023.cljs$lang$applyTo = (function (arglist__26035){
var args = cljs.core.seq(arglist__26035);
return G__26023__delegate(args);
});
G__26023.cljs$core$IFn$_invoke$arity$variadic = G__26023__delegate;
return G__26023;
})()
;
;})(ran))
});
/**
 * Returns a memoized version of f.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
 *   `f` must return a channel.
 */
klipse.utils.memoize_async = (function klipse$utils$memoize_async(f){
var ran = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ran){
return (function() { 
var G__26072__delegate = function (args){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,ran){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,ran){
return (function (state_26056){
var state_val_26057 = (state_26056[(1)]);
if((state_val_26057 === (1))){
var inst_26036 = cljs.core.deref.call(null,ran);
var inst_26037 = cljs.core.contains_QMARK_.call(null,inst_26036,args);
var inst_26038 = !(inst_26037);
var state_26056__$1 = state_26056;
if(inst_26038){
var statearr_26058_26073 = state_26056__$1;
(statearr_26058_26073[(1)] = (2));

} else {
var statearr_26059_26074 = state_26056__$1;
(statearr_26059_26074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (2))){
var inst_26040 = cljs.core.apply.call(null,f,args);
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26056__$1,(5),inst_26040);
} else {
if((state_val_26057 === (3))){
var inst_26051 = cljs.core.deref.call(null,ran);
var inst_26052 = cljs.core.get.call(null,inst_26051,args);
var state_26056__$1 = state_26056;
var statearr_26060_26075 = state_26056__$1;
(statearr_26060_26075[(2)] = inst_26052);

(statearr_26060_26075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (4))){
var inst_26054 = (state_26056[(2)]);
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26056__$1,inst_26054);
} else {
if((state_val_26057 === (5))){
var inst_26042 = (state_26056[(7)]);
var inst_26042__$1 = (state_26056[(2)]);
var inst_26043 = cljs.core.first.call(null,inst_26042__$1);
var inst_26044 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_26043);
var state_26056__$1 = (function (){var statearr_26061 = state_26056;
(statearr_26061[(7)] = inst_26042__$1);

return statearr_26061;
})();
if(inst_26044){
var statearr_26062_26076 = state_26056__$1;
(statearr_26062_26076[(1)] = (6));

} else {
var statearr_26063_26077 = state_26056__$1;
(statearr_26063_26077[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (6))){
var inst_26042 = (state_26056[(7)]);
var inst_26046 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_26042);
var state_26056__$1 = state_26056;
var statearr_26064_26078 = state_26056__$1;
(statearr_26064_26078[(2)] = inst_26046);

(statearr_26064_26078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (7))){
var state_26056__$1 = state_26056;
var statearr_26065_26079 = state_26056__$1;
(statearr_26065_26079[(2)] = null);

(statearr_26065_26079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (8))){
var inst_26042 = (state_26056[(7)]);
var inst_26049 = (state_26056[(2)]);
var state_26056__$1 = (function (){var statearr_26066 = state_26056;
(statearr_26066[(8)] = inst_26049);

return statearr_26066;
})();
var statearr_26067_26080 = state_26056__$1;
(statearr_26067_26080[(2)] = inst_26042);

(statearr_26067_26080[(1)] = (4));


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
});})(c__13544__auto__,ran))
;
return ((function (switch__13454__auto__,c__13544__auto__,ran){
return (function() {
var klipse$utils$memoize_async_$_state_machine__13455__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__13455__auto____0 = (function (){
var statearr_26068 = [null,null,null,null,null,null,null,null,null];
(statearr_26068[(0)] = klipse$utils$memoize_async_$_state_machine__13455__auto__);

(statearr_26068[(1)] = (1));

return statearr_26068;
});
var klipse$utils$memoize_async_$_state_machine__13455__auto____1 = (function (state_26056){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_26056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e26069){if((e26069 instanceof Object)){
var ex__13458__auto__ = e26069;
var statearr_26070_26081 = state_26056;
(statearr_26070_26081[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26082 = state_26056;
state_26056 = G__26082;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__13455__auto__ = function(state_26056){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__13455__auto____1.call(this,state_26056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$memoize_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__13455__auto____0;
klipse$utils$memoize_async_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__13455__auto____1;
return klipse$utils$memoize_async_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,ran))
})();
var state__13546__auto__ = (function (){var statearr_26071 = f__13545__auto__.call(null);
(statearr_26071[(6)] = c__13544__auto__);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,ran))
);

return c__13544__auto__;
};
var G__26072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26083__i = 0, G__26083__a = new Array(arguments.length -  0);
while (G__26083__i < G__26083__a.length) {G__26083__a[G__26083__i] = arguments[G__26083__i + 0]; ++G__26083__i;}
  args = new cljs.core.IndexedSeq(G__26083__a,0,null);
} 
return G__26072__delegate.call(this,args);};
G__26072.cljs$lang$maxFixedArity = 0;
G__26072.cljs$lang$applyTo = (function (arglist__26084){
var args = cljs.core.seq(arglist__26084);
return G__26072__delegate(args);
});
G__26072.cljs$core$IFn$_invoke$arity$variadic = G__26072__delegate;
return G__26072;
})()
;
;})(ran))
});
klipse.utils.default_permitted_symbols = (function klipse$utils$default_permitted_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console","setTimeout","setInterval","Math","Date"], null);
});
klipse.utils.default_forbidden_symbols = (function klipse$utils$default_forbidden_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["document","XMLHttpRequest","eval","window","Function"], null);
});
klipse.utils.secured_eval = false;
klipse.utils.eval_in_global_scope = eval;
klipse.utils.securize_eval_BANG__STAR_ = (function klipse$utils$securize_eval_BANG__STAR_(the_forbidden_symbols){
klipse.utils.secured_eval = true;

var original_eval = eval;
var o_SHARP__26085 = window;
(o_SHARP__26085["eval"] = ((function (o_SHARP__26085,original_eval){
return (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
});})(o_SHARP__26085,original_eval))
);


klipse.utils.eval_in_global_scope = eval;

var o_SHARP__26086 = window;
(o_SHARP__26086["klipse_unsecured_eval"] = original_eval);


var o_SHARP_ = window;
(o_SHARP_["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return o_SHARP_;
});
klipse.utils.securize_eval_BANG_ = klipse.utils.runonce.call(null,klipse.utils.securize_eval_BANG__STAR_);
klipse.utils.setup_container_BANG_ = (function klipse$utils$setup_container_BANG_(container_id){
if(klipse.utils.secured_eval){
return null;
} else {
(window["klipse_container"] = document.getElementById(container_id));

return (window["klipse_container_id"] = container_id);
}
});
klipse.utils.unsecured_eval_in_global_scope = (function klipse$utils$unsecured_eval_in_global_scope(s){
return (function (){var or__8363__auto__ = (window["klipse_unsecured_eval"]);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26174 = arguments.length;
var i__9641__auto___26175 = (0);
while(true){
if((i__9641__auto___26175 < len__9640__auto___26174)){
args__9647__auto__.push((arguments[i__9641__auto___26175]));

var G__26176 = (i__9641__auto___26175 + (1));
i__9641__auto___26175 = G__26176;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__26089){
var map__26090 = p__26089;
var map__26090__$1 = ((((!((map__26090 == null)))?((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26090):map__26090);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__26090__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (7))){
var state_26143__$1 = state_26143;
var statearr_26145_26177 = state_26143__$1;
(statearr_26145_26177[(2)] = false);

(statearr_26145_26177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (1))){
var inst_26092 = console.info("loading:",script);
var inst_26094 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26095 = [false];
var inst_26096 = cljs.core.PersistentHashMap.fromArrays(inst_26094,inst_26095);
var inst_26097 = cljs_http.client.get.call(null,script,inst_26096);
var state_26143__$1 = (function (){var statearr_26146 = state_26143;
(statearr_26146[(7)] = inst_26092);

return statearr_26146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(2),inst_26097);
} else {
if((state_val_26144 === (4))){
var state_26143__$1 = state_26143;
var statearr_26147_26178 = state_26143__$1;
(statearr_26147_26178[(2)] = false);

(statearr_26147_26178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (15))){
var inst_26122 = (state_26143[(8)]);
var inst_26127 = klipse.utils.eval_in_global_scope.call(null,inst_26122);
var state_26143__$1 = state_26143;
var statearr_26148_26179 = state_26143__$1;
(statearr_26148_26179[(2)] = inst_26127);

(statearr_26148_26179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (13))){
var inst_26121 = (state_26143[(9)]);
var inst_26137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26138 = [inst_26121,script];
var inst_26139 = (new cljs.core.PersistentVector(null,2,(5),inst_26137,inst_26138,null));
var state_26143__$1 = state_26143;
var statearr_26149_26180 = state_26143__$1;
(statearr_26149_26180[(2)] = inst_26139);

(statearr_26149_26180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (6))){
var state_26143__$1 = state_26143;
var statearr_26150_26181 = state_26143__$1;
(statearr_26150_26181[(2)] = true);

(statearr_26150_26181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (17))){
var inst_26131 = (state_26143[(2)]);
var inst_26132 = console.info("evaluation done:",script);
var inst_26133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26134 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_26135 = (new cljs.core.PersistentVector(null,2,(5),inst_26133,inst_26134,null));
var state_26143__$1 = (function (){var statearr_26151 = state_26143;
(statearr_26151[(10)] = inst_26131);

(statearr_26151[(11)] = inst_26132);

return statearr_26151;
})();
var statearr_26152_26182 = state_26143__$1;
(statearr_26152_26182[(2)] = inst_26135);

(statearr_26152_26182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (3))){
var inst_26099 = (state_26143[(12)]);
var inst_26104 = inst_26099.cljs$lang$protocol_mask$partition0$;
var inst_26105 = (inst_26104 & (64));
var inst_26106 = inst_26099.cljs$core$ISeq$;
var inst_26107 = (cljs.core.PROTOCOL_SENTINEL === inst_26106);
var inst_26108 = (inst_26105) || (inst_26107);
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26108)){
var statearr_26153_26183 = state_26143__$1;
(statearr_26153_26183[(1)] = (6));

} else {
var statearr_26154_26184 = state_26143__$1;
(statearr_26154_26184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (12))){
var inst_26125 = console.info("evaluating:",script);
var state_26143__$1 = (function (){var statearr_26155 = state_26143;
(statearr_26155[(13)] = inst_26125);

return statearr_26155;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_26156_26185 = state_26143__$1;
(statearr_26156_26185[(1)] = (15));

} else {
var statearr_26157_26186 = state_26143__$1;
(statearr_26157_26186[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (2))){
var inst_26099 = (state_26143[(12)]);
var inst_26099__$1 = (state_26143[(2)]);
var inst_26101 = (inst_26099__$1 == null);
var inst_26102 = cljs.core.not.call(null,inst_26101);
var state_26143__$1 = (function (){var statearr_26158 = state_26143;
(statearr_26158[(12)] = inst_26099__$1);

return statearr_26158;
})();
if(inst_26102){
var statearr_26159_26187 = state_26143__$1;
(statearr_26159_26187[(1)] = (3));

} else {
var statearr_26160_26188 = state_26143__$1;
(statearr_26160_26188[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (11))){
var inst_26121 = (state_26143[(9)]);
var inst_26120 = (state_26143[(2)]);
var inst_26121__$1 = cljs.core.get.call(null,inst_26120,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26122 = cljs.core.get.call(null,inst_26120,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26123 = cljs.core._EQ_.call(null,(200),inst_26121__$1);
var state_26143__$1 = (function (){var statearr_26161 = state_26143;
(statearr_26161[(8)] = inst_26122);

(statearr_26161[(9)] = inst_26121__$1);

return statearr_26161;
})();
if(inst_26123){
var statearr_26162_26189 = state_26143__$1;
(statearr_26162_26189[(1)] = (12));

} else {
var statearr_26163_26190 = state_26143__$1;
(statearr_26163_26190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (9))){
var inst_26099 = (state_26143[(12)]);
var inst_26117 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26099);
var state_26143__$1 = state_26143;
var statearr_26164_26191 = state_26143__$1;
(statearr_26164_26191[(2)] = inst_26117);

(statearr_26164_26191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (5))){
var inst_26115 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26115)){
var statearr_26165_26192 = state_26143__$1;
(statearr_26165_26192[(1)] = (9));

} else {
var statearr_26166_26193 = state_26143__$1;
(statearr_26166_26193[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (14))){
var inst_26141 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (16))){
var inst_26122 = (state_26143[(8)]);
var inst_26129 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_26122);
var state_26143__$1 = state_26143;
var statearr_26167_26194 = state_26143__$1;
(statearr_26167_26194[(2)] = inst_26129);

(statearr_26167_26194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (10))){
var inst_26099 = (state_26143[(12)]);
var state_26143__$1 = state_26143;
var statearr_26168_26195 = state_26143__$1;
(statearr_26168_26195[(2)] = inst_26099);

(statearr_26168_26195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (8))){
var inst_26112 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26169_26196 = state_26143__$1;
(statearr_26169_26196[(2)] = inst_26112);

(statearr_26169_26196[(1)] = (5));


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
});})(c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__13455__auto__ = null;
var klipse$utils$state_machine__13455__auto____0 = (function (){
var statearr_26170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = klipse$utils$state_machine__13455__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var klipse$utils$state_machine__13455__auto____1 = (function (state_26143){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__13458__auto__ = e26171;
var statearr_26172_26197 = state_26143;
(statearr_26172_26197[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26198 = state_26143;
state_26143 = G__26198;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$state_machine__13455__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13455__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13455__auto____0;
klipse$utils$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13455__auto____1;
return klipse$utils$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_))
})();
var state__13546__auto__ = (function (){var statearr_26173 = f__13545__auto__.call(null);
(statearr_26173[(6)] = c__13544__auto__);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__26090,map__26090__$1,secured_eval_QMARK_))
);

return c__13544__auto__;
});

klipse.utils.load_script.cljs$lang$maxFixedArity = (1);

klipse.utils.load_script.cljs$lang$applyTo = (function (seq26087){
var G__26088 = cljs.core.first.call(null,seq26087);
var seq26087__$1 = cljs.core.next.call(null,seq26087);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic(G__26088,seq26087__$1);
});

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26257 = arguments.length;
var i__9641__auto___26258 = (0);
while(true){
if((i__9641__auto___26258 < len__9640__auto___26257)){
args__9647__auto__.push((arguments[i__9641__auto___26258]));

var G__26259 = (i__9641__auto___26258 + (1));
i__9641__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__26201){
var map__26202 = p__26201;
var map__26202__$1 = ((((!((map__26202 == null)))?((((map__26202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26202):map__26202);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_){
return (function (state_26237){
var state_val_26238 = (state_26237[(1)]);
if((state_val_26238 === (7))){
var inst_26216 = (state_26237[(7)]);
var inst_26215 = (state_26237[(2)]);
var inst_26216__$1 = cljs.core.nth.call(null,inst_26215,(0),null);
var inst_26217 = cljs.core.nth.call(null,inst_26215,(1),null);
var inst_26218 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_26216__$1);
var state_26237__$1 = (function (){var statearr_26239 = state_26237;
(statearr_26239[(7)] = inst_26216__$1);

(statearr_26239[(8)] = inst_26217);

return statearr_26239;
})();
if(inst_26218){
var statearr_26240_26260 = state_26237__$1;
(statearr_26240_26260[(1)] = (8));

} else {
var statearr_26241_26261 = state_26237__$1;
(statearr_26241_26261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (1))){
var inst_26204 = scripts;
var state_26237__$1 = (function (){var statearr_26242 = state_26237;
(statearr_26242[(9)] = inst_26204);

return statearr_26242;
})();
var statearr_26243_26262 = state_26237__$1;
(statearr_26243_26262[(2)] = null);

(statearr_26243_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (4))){
var inst_26204 = (state_26237[(9)]);
var inst_26211 = cljs.core.first.call(null,inst_26204);
var inst_26212 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26211)].join('');
var inst_26213 = klipse.utils.load_script_mem.call(null,inst_26212,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_26237__$1 = state_26237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26237__$1,(7),inst_26213);
} else {
if((state_val_26238 === (6))){
var inst_26233 = (state_26237[(2)]);
var state_26237__$1 = state_26237;
var statearr_26244_26263 = state_26237__$1;
(statearr_26244_26263[(2)] = inst_26233);

(statearr_26244_26263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (3))){
var inst_26235 = (state_26237[(2)]);
var state_26237__$1 = state_26237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26237__$1,inst_26235);
} else {
if((state_val_26238 === (2))){
var inst_26204 = (state_26237[(9)]);
var inst_26206 = cljs.core.seq.call(null,inst_26204);
var state_26237__$1 = state_26237;
if(inst_26206){
var statearr_26245_26264 = state_26237__$1;
(statearr_26245_26264[(1)] = (4));

} else {
var statearr_26246_26265 = state_26237__$1;
(statearr_26246_26265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (9))){
var state_26237__$1 = state_26237;
var statearr_26247_26266 = state_26237__$1;
(statearr_26247_26266[(2)] = null);

(statearr_26247_26266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (5))){
var inst_26229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26230 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_26231 = (new cljs.core.PersistentVector(null,1,(5),inst_26229,inst_26230,null));
var state_26237__$1 = state_26237;
var statearr_26248_26267 = state_26237__$1;
(statearr_26248_26267[(2)] = inst_26231);

(statearr_26248_26267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (10))){
var inst_26216 = (state_26237[(7)]);
var inst_26217 = (state_26237[(8)]);
var inst_26224 = (state_26237[(2)]);
var inst_26225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26226 = [inst_26216,inst_26217];
var inst_26227 = (new cljs.core.PersistentVector(null,2,(5),inst_26225,inst_26226,null));
var state_26237__$1 = (function (){var statearr_26249 = state_26237;
(statearr_26249[(10)] = inst_26224);

return statearr_26249;
})();
var statearr_26250_26268 = state_26237__$1;
(statearr_26250_26268[(2)] = inst_26227);

(statearr_26250_26268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (8))){
var inst_26204 = (state_26237[(9)]);
var inst_26220 = cljs.core.rest.call(null,inst_26204);
var inst_26204__$1 = inst_26220;
var state_26237__$1 = (function (){var statearr_26251 = state_26237;
(statearr_26251[(9)] = inst_26204__$1);

return statearr_26251;
})();
var statearr_26252_26269 = state_26237__$1;
(statearr_26252_26269[(2)] = null);

(statearr_26252_26269[(1)] = (2));


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
});})(c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_){
return (function() {
var klipse$utils$state_machine__13455__auto__ = null;
var klipse$utils$state_machine__13455__auto____0 = (function (){
var statearr_26253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26253[(0)] = klipse$utils$state_machine__13455__auto__);

(statearr_26253[(1)] = (1));

return statearr_26253;
});
var klipse$utils$state_machine__13455__auto____1 = (function (state_26237){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_26237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e26254){if((e26254 instanceof Object)){
var ex__13458__auto__ = e26254;
var statearr_26255_26270 = state_26237;
(statearr_26255_26270[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26271 = state_26237;
state_26237 = G__26271;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$utils$state_machine__13455__auto__ = function(state_26237){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13455__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13455__auto____1.call(this,state_26237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$utils$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13455__auto____0;
klipse$utils$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13455__auto____1;
return klipse$utils$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_))
})();
var state__13546__auto__ = (function (){var statearr_26256 = f__13545__auto__.call(null);
(statearr_26256[(6)] = c__13544__auto__);

return statearr_26256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__26202,map__26202__$1,secured_eval_QMARK_))
);

return c__13544__auto__;
});

klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1);

klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq26199){
var G__26200 = cljs.core.first.call(null,seq26199);
var seq26199__$1 = cljs.core.next.call(null,seq26199);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic(G__26200,seq26199__$1);
});

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()));
});
klipse.utils.klipse_settings_STAR_ = (function klipse$utils$klipse_settings_STAR_(){
return cljs.core.js__GT_clj.call(null,(window["klipse_settings"]),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
klipse.utils.klipse_settings = cljs.core.memoize.call(null,klipse.utils.klipse_settings_STAR_);
klipse.utils.add_script_tag_BANG_ = (function klipse$utils$add_script_tag_BANG_(url){
var c = cljs.core.async.chan.call(null);
var node = document.createElement("script");
var body = (document["body"]);
(node["src"] = url);

(node["onerror"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),url], null));
});})(node,body,c))
);

(node["onload"] = ((function (node,body,c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),url], null));
});})(node,body,c))
);

(node["type"] = "text/javascript");

var obj_SHARP__26272 = body;
var fn_SHARP__26273 = (obj_SHARP__26272["appendChild"]);
fn_SHARP__26273.call(obj_SHARP__26272,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map
