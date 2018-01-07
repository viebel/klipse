// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.app');
goog.require('cljs.core');
goog.require('om.next');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.mode.javascript');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('cljsjs.codemirror.addon.display.placeholder');
goog.require('cljsjs.codemirror.addon.scroll.simplescrollbars');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.ui.layout');
goog.require('klipse.control.control');
klipse.app.read_input_from_url = (function klipse$app$read_input_from_url(){
return new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
});
klipse.app.gist_content = (function klipse$app$gist_content(gist_id){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_155735){
var state_val_155736 = (state_155735[(1)]);
if((state_val_155736 === (1))){
var inst_155728 = klipse.utils.gist_path_page.call(null,gist_id);
var inst_155729 = ["loaded from gist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_155728)].join('');
var inst_155730 = klipse.utils.read_input_from_gist.call(null,gist_id);
var state_155735__$1 = (function (){var statearr_155737 = state_155735;
(statearr_155737[(7)] = inst_155729);

return statearr_155737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155735__$1,(2),inst_155730);
} else {
if((state_val_155736 === (2))){
var inst_155729 = (state_155735[(7)]);
var inst_155732 = (state_155735[(2)]);
var inst_155733 = [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_155729),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_155732)].join('');
var state_155735__$1 = state_155735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155735__$1,inst_155733);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$app$gist_content_$_state_machine__13455__auto__ = null;
var klipse$app$gist_content_$_state_machine__13455__auto____0 = (function (){
var statearr_155738 = [null,null,null,null,null,null,null,null];
(statearr_155738[(0)] = klipse$app$gist_content_$_state_machine__13455__auto__);

(statearr_155738[(1)] = (1));

return statearr_155738;
});
var klipse$app$gist_content_$_state_machine__13455__auto____1 = (function (state_155735){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155739){if((e155739 instanceof Object)){
var ex__13458__auto__ = e155739;
var statearr_155740_155742 = state_155735;
(statearr_155740_155742[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155743 = state_155735;
state_155735 = G__155743;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$app$gist_content_$_state_machine__13455__auto__ = function(state_155735){
switch(arguments.length){
case 0:
return klipse$app$gist_content_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$app$gist_content_$_state_machine__13455__auto____1.call(this,state_155735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$app$gist_content_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$gist_content_$_state_machine__13455__auto____0;
klipse$app$gist_content_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$gist_content_$_state_machine__13455__auto____1;
return klipse$app$gist_content_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_155741 = f__13545__auto__.call(null);
(statearr_155741[(6)] = c__13544__auto__);

return statearr_155741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.app.read_src_input = (function klipse$app$read_src_input(){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_155759){
var state_val_155760 = (state_155759[(1)]);
if((state_val_155760 === (1))){
var inst_155744 = (state_155759[(7)]);
var inst_155744__$1 = klipse.app.read_input_from_url.call(null);
var state_155759__$1 = (function (){var statearr_155761 = state_155759;
(statearr_155761[(7)] = inst_155744__$1);

return statearr_155761;
})();
if(cljs.core.truth_(inst_155744__$1)){
var statearr_155762_155775 = state_155759__$1;
(statearr_155762_155775[(1)] = (2));

} else {
var statearr_155763_155776 = state_155759__$1;
(statearr_155763_155776[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155760 === (2))){
var inst_155744 = (state_155759[(7)]);
var state_155759__$1 = state_155759;
var statearr_155764_155777 = state_155759__$1;
(statearr_155764_155777[(2)] = inst_155744);

(statearr_155764_155777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155760 === (3))){
var inst_155748 = (state_155759[(8)]);
var inst_155747 = klipse.utils.url_parameters.call(null);
var inst_155748__$1 = new cljs.core.Keyword(null,"cljs_in.gist","cljs_in.gist",-859916365).cljs$core$IFn$_invoke$arity$1(inst_155747);
var state_155759__$1 = (function (){var statearr_155765 = state_155759;
(statearr_155765[(8)] = inst_155748__$1);

return statearr_155765;
})();
if(cljs.core.truth_(inst_155748__$1)){
var statearr_155766_155778 = state_155759__$1;
(statearr_155766_155778[(1)] = (5));

} else {
var statearr_155767_155779 = state_155759__$1;
(statearr_155767_155779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155760 === (4))){
var inst_155757 = (state_155759[(2)]);
var state_155759__$1 = state_155759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155759__$1,inst_155757);
} else {
if((state_val_155760 === (5))){
var inst_155748 = (state_155759[(8)]);
var inst_155750 = klipse.app.gist_content.call(null,inst_155748);
var state_155759__$1 = state_155759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155759__$1,(8),inst_155750);
} else {
if((state_val_155760 === (6))){
var state_155759__$1 = state_155759;
var statearr_155768_155780 = state_155759__$1;
(statearr_155768_155780[(2)] = null);

(statearr_155768_155780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155760 === (7))){
var inst_155755 = (state_155759[(2)]);
var state_155759__$1 = state_155759;
var statearr_155769_155781 = state_155759__$1;
(statearr_155769_155781[(2)] = inst_155755);

(statearr_155769_155781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155760 === (8))){
var inst_155752 = (state_155759[(2)]);
var state_155759__$1 = state_155759;
var statearr_155770_155782 = state_155759__$1;
(statearr_155770_155782[(2)] = inst_155752);

(statearr_155770_155782[(1)] = (7));


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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$app$read_src_input_$_state_machine__13455__auto__ = null;
var klipse$app$read_src_input_$_state_machine__13455__auto____0 = (function (){
var statearr_155771 = [null,null,null,null,null,null,null,null,null];
(statearr_155771[(0)] = klipse$app$read_src_input_$_state_machine__13455__auto__);

(statearr_155771[(1)] = (1));

return statearr_155771;
});
var klipse$app$read_src_input_$_state_machine__13455__auto____1 = (function (state_155759){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155772){if((e155772 instanceof Object)){
var ex__13458__auto__ = e155772;
var statearr_155773_155783 = state_155759;
(statearr_155773_155783[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155784 = state_155759;
state_155759 = G__155784;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$app$read_src_input_$_state_machine__13455__auto__ = function(state_155759){
switch(arguments.length){
case 0:
return klipse$app$read_src_input_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$app$read_src_input_$_state_machine__13455__auto____1.call(this,state_155759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$app$read_src_input_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$read_src_input_$_state_machine__13455__auto____0;
klipse$app$read_src_input_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$read_src_input_$_state_machine__13455__auto____1;
return klipse$app$read_src_input_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_155774 = f__13545__auto__.call(null);
(statearr_155774[(6)] = c__13544__auto__);

return statearr_155774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
if(typeof klipse.app.init !== 'undefined'){
} else {
klipse.app.init = klipse.utils.runonce.call(null,(function (element){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_155791){
var state_val_155792 = (state_155791[(1)]);
if((state_val_155792 === (1))){
var inst_155785 = klipse.app.read_src_input.call(null);
var state_155791__$1 = state_155791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155791__$1,(2),inst_155785);
} else {
if((state_val_155792 === (2))){
var inst_155787 = (state_155791[(2)]);
var inst_155788 = klipse.control.control.reconciler.call(null,inst_155787);
var inst_155789 = om.next.add_root_BANG_.call(null,inst_155788,klipse.ui.layout.Layout,element);
var state_155791__$1 = state_155791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155791__$1,inst_155789);
} else {
return null;
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$app$state_machine__13455__auto__ = null;
var klipse$app$state_machine__13455__auto____0 = (function (){
var statearr_155793 = [null,null,null,null,null,null,null];
(statearr_155793[(0)] = klipse$app$state_machine__13455__auto__);

(statearr_155793[(1)] = (1));

return statearr_155793;
});
var klipse$app$state_machine__13455__auto____1 = (function (state_155791){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155794){if((e155794 instanceof Object)){
var ex__13458__auto__ = e155794;
var statearr_155795_155797 = state_155791;
(statearr_155795_155797[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155798 = state_155791;
state_155791 = G__155798;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$app$state_machine__13455__auto__ = function(state_155791){
switch(arguments.length){
case 0:
return klipse$app$state_machine__13455__auto____0.call(this);
case 1:
return klipse$app$state_machine__13455__auto____1.call(this,state_155791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$app$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$app$state_machine__13455__auto____0;
klipse$app$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$app$state_machine__13455__auto____1;
return klipse$app$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_155796 = f__13545__auto__.call(null);
(statearr_155796[(6)] = c__13544__auto__);

return statearr_155796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
}));
}

//# sourceMappingURL=app.js.map
