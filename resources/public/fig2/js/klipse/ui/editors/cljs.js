// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.editors.cljs');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('parinfer_codemirror.editor');
goog.require('klipse.common.registry');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.ui.editors.common');
goog.require('klipse.utils');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.editors.cljs.config_editor = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.ui.editors.cljs.placeholder_editor = [";; Write your clojurescript expression \n",";; and press Ctrl-Enter or wait for 3 sec to experience the magic..."].join('');
klipse.ui.editors.cljs.save_input = (function klipse$ui$editors$cljs$save_input(component,s){
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("input","save","input/save",-905763806,null)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__9317__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))),new cljs.core.Keyword(null,"input","input",556931961)], null));
}
});
klipse.ui.editors.cljs.process_input = (function klipse$ui$editors$cljs$process_input(component,s){
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clj","eval-and-compile","clj/eval-and-compile",44829747,null)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__9317__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))),new cljs.core.Keyword(null,"input","input",556931961)], null));
}
});
klipse.ui.editors.cljs.handle_cm_events = (function klipse$ui$editors$cljs$handle_cm_events(component,editor){
CCC = editor;

return klipse.ui.editors.common.handle_events.call(null,editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(3000),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return klipse.ui.editors.cljs.save_input.call(null,component,klipse.ui.editors.editor.get_value.call(null,editor));
}),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),(function (){
return klipse.ui.editors.cljs.process_input.call(null,component,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor));
})], null));
});
if(typeof klipse.ui.editors.cljs.use_editor_mode_BANG_ !== 'undefined'){
} else {
klipse.ui.editors.cljs.use_editor_mode_BANG_ = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.cljs","use-editor-mode!"),((function (method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__){
return (function (mode,_){
return mode;
});})(method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
klipse.ui.editors.cljs.replace_editor_BANG_ = (function klipse$ui$editors$cljs$replace_editor_BANG_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___34613 = arguments.length;
var i__9641__auto___34614 = (0);
while(true){
if((i__9641__auto___34614 < len__9640__auto___34613)){
args__9647__auto__.push((arguments[i__9641__auto___34614]));

var G__34615 = (i__9641__auto___34614 + (1));
i__9641__auto___34614 = G__34615;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return klipse.ui.editors.cljs.replace_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

klipse.ui.editors.cljs.replace_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__34609){
var vec__34610 = p__34609;
var cm_options = cljs.core.nth.call(null,vec__34610,(0),null);
var editor = om.next.get_state.call(null,component,new cljs.core.Keyword(null,"editor","editor",-989377770));
var editor_wrapper = editor.getWrapperElement();
var value = klipse.ui.editors.editor.get_value.call(null,editor);
var new_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,editor_wrapper,value,cljs.core.merge.call(null,klipse.ui.editors.cljs.config_editor,cm_options));
om.next.update_state_BANG_.call(null,component,cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),new_editor);

return klipse.ui.editors.cljs.handle_cm_events.call(null,component,new_editor);
});

klipse.ui.editors.cljs.replace_editor_BANG_.cljs$lang$maxFixedArity = (1);

klipse.ui.editors.cljs.replace_editor_BANG_.cljs$lang$applyTo = (function (seq34607){
var G__34608 = cljs.core.first.call(null,seq34607);
var seq34607__$1 = cljs.core.next.call(null,seq34607);
return klipse.ui.editors.cljs.replace_editor_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34608,seq34607__$1);
});

klipse.ui.editors.cljs.load_external_scripts = (function klipse$ui$editors$cljs$load_external_scripts(scripts){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34638){
var state_val_34639 = (state_34638[(1)]);
if((state_val_34639 === (1))){
var inst_34619 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_34638__$1 = state_34638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34638__$1,(2),inst_34619);
} else {
if((state_val_34639 === (2))){
var inst_34621 = (state_34638[(2)]);
var inst_34622 = cljs.core.nth.call(null,inst_34621,(0),null);
var inst_34623 = cljs.core.nth.call(null,inst_34621,(1),null);
var inst_34624 = cljs.core.nth.call(null,inst_34621,(2),null);
var inst_34625 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_34622);
var state_34638__$1 = (function (){var statearr_34640 = state_34638;
(statearr_34640[(7)] = inst_34624);

(statearr_34640[(8)] = inst_34623);

return statearr_34640;
})();
if(inst_34625){
var statearr_34641_34649 = state_34638__$1;
(statearr_34641_34649[(1)] = (3));

} else {
var statearr_34642_34650 = state_34638__$1;
(statearr_34642_34650[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34639 === (3))){
var inst_34627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34628 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_34629 = (new cljs.core.PersistentVector(null,2,(5),inst_34627,inst_34628,null));
var state_34638__$1 = state_34638;
var statearr_34643_34651 = state_34638__$1;
(statearr_34643_34651[(2)] = inst_34629);

(statearr_34643_34651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34639 === (4))){
var inst_34624 = (state_34638[(7)]);
var inst_34623 = (state_34638[(8)]);
var inst_34631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34632 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34624),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34623)].join('');
var inst_34633 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_34632];
var inst_34634 = (new cljs.core.PersistentVector(null,2,(5),inst_34631,inst_34633,null));
var state_34638__$1 = state_34638;
var statearr_34644_34652 = state_34638__$1;
(statearr_34644_34652[(2)] = inst_34634);

(statearr_34644_34652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34639 === (5))){
var inst_34636 = (state_34638[(2)]);
var state_34638__$1 = state_34638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34638__$1,inst_34636);
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
var klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__ = null;
var klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____0 = (function (){
var statearr_34645 = [null,null,null,null,null,null,null,null,null];
(statearr_34645[(0)] = klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__);

(statearr_34645[(1)] = (1));

return statearr_34645;
});
var klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____1 = (function (state_34638){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34646){if((e34646 instanceof Object)){
var ex__13458__auto__ = e34646;
var statearr_34647_34653 = state_34638;
(statearr_34647_34653[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34654 = state_34638;
state_34638 = G__34654;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__ = function(state_34638){
switch(arguments.length){
case 0:
return klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____1.call(this,state_34638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____0;
klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto____1;
return klipse$ui$editors$cljs$load_external_scripts_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34648 = f__13545__auto__.call(null);
(statearr_34648[(6)] = c__13544__auto__);

return statearr_34648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.ui.editors.cljs.parinfer_count = cljs.core.atom.call(null,(0));
klipse.ui.editors.cljs.parinferize_editor_BANG_ = (function klipse$ui$editors$cljs$parinferize_editor_BANG_(editor,indent_or_paren){
var key_ = cljs.core.swap_BANG_.call(null,klipse.ui.editors.cljs.parinfer_count,cljs.core.inc);
var wrapper = editor.getWrapperElement();
var parinfer_mode = (function (){var G__34655 = indent_or_paren;
var G__34655__$1 = (((G__34655 instanceof cljs.core.Keyword))?G__34655.fqn:null);
switch (G__34655__$1) {
case "indent":
return new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542);

break;
case "paren":
return new cljs.core.Keyword(null,"paren-mode","paren-mode",-2068924645);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34655__$1)].join('')));

}
})();
wrapper.id = ["cm-","element-id"].join('');

return parinfer_codemirror.editor.parinferize_and_sync_BANG_.call(null,editor,key_,parinfer_mode,klipse.ui.editors.editor.get_value.call(null,editor));
});
klipse.ui.editors.cljs.use_parinfer_BANG_ = (function klipse$ui$editors$cljs$use_parinfer_BANG_(component,indent_or_paren){
klipse.ui.editors.cljs.parinferize_editor_BANG_.call(null,klipse.ui.editors.cljs.replace_editor_BANG_.call(null,component),indent_or_paren);

var mode = (function (){var G__34657 = indent_or_paren;
var G__34657__$1 = (((G__34657 instanceof cljs.core.Keyword))?G__34657.fqn:null);
switch (G__34657__$1) {
case "indent":
return new cljs.core.Keyword(null,"parinfer-indent","parinfer-indent",-1564399074);

break;
case "paren":
return new cljs.core.Keyword(null,"parinfer-paren","parinfer-paren",1095749834);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34657__$1)].join('')));

}
})();
return om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("editor","consume-mode","editor/consume-mode",-457655084,null)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__9317__auto__ = mode;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))),new cljs.core.Keyword(null,"input","input",556931961)], null));
});
cljs.core._add_method.call(null,klipse.ui.editors.cljs.use_editor_mode_BANG_,new cljs.core.Keyword(null,"parinfer-indent","parinfer-indent",-1564399074),(function (_,component){
return klipse.ui.editors.cljs.use_parinfer_BANG_.call(null,component,new cljs.core.Keyword(null,"indent","indent",-148200125));
}));
cljs.core._add_method.call(null,klipse.ui.editors.cljs.use_editor_mode_BANG_,new cljs.core.Keyword(null,"parinfer-paren","parinfer-paren",1095749834),(function (_,component){
return klipse.ui.editors.cljs.use_parinfer_BANG_.call(null,component,new cljs.core.Keyword(null,"paren","paren",-294107600));
}));
cljs.core._add_method.call(null,klipse.ui.editors.cljs.use_editor_mode_BANG_,new cljs.core.Keyword(null,"paredit","paredit",-1195358877),(function (_,component){
om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("editor","consume-mode","editor/consume-mode",-457655084,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"loading","loading",-737050189)], null)),new cljs.core.Keyword(null,"input","input",556931961)], null));

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_34694){
var state_val_34695 = (state_34694[(1)]);
if((state_val_34695 === (1))){
var inst_34662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34663 = klipse.common.registry.codemirror_keymap_src.call(null,"emacs");
var inst_34664 = klipse.common.registry.scripts_src.call(null,"subpar.js");
var inst_34665 = klipse.common.registry.scripts_src.call(null,"subpar.core.js");
var inst_34666 = [inst_34663,inst_34664,inst_34665];
var inst_34667 = (new cljs.core.PersistentVector(null,3,(5),inst_34662,inst_34666,null));
var inst_34668 = klipse.ui.editors.cljs.load_external_scripts.call(null,inst_34667);
var state_34694__$1 = state_34694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34694__$1,(2),inst_34668);
} else {
if((state_val_34695 === (2))){
var inst_34670 = (state_34694[(2)]);
var inst_34671 = cljs.core.nth.call(null,inst_34670,(0),null);
var inst_34672 = cljs.core.nth.call(null,inst_34670,(1),null);
var inst_34673 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_34671);
var state_34694__$1 = (function (){var statearr_34696 = state_34694;
(statearr_34696[(7)] = inst_34672);

return statearr_34696;
})();
if(inst_34673){
var statearr_34697_34707 = state_34694__$1;
(statearr_34697_34707[(1)] = (3));

} else {
var statearr_34698_34708 = state_34694__$1;
(statearr_34698_34708[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34695 === (3))){
var inst_34675 = [new cljs.core.Keyword(null,"keyMap","keyMap",945500512)];
var inst_34676 = ["subpar"];
var inst_34677 = cljs.core.PersistentHashMap.fromArrays(inst_34675,inst_34676);
var inst_34678 = klipse.ui.editors.cljs.replace_editor_BANG_.call(null,component,inst_34677);
var inst_34679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34680 = cljs.core.list(new cljs.core.Symbol("editor","set-mode","editor/set-mode",-494931626,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"paredit","paredit",-1195358877)], null));
var inst_34681 = [inst_34680,new cljs.core.Keyword(null,"input","input",556931961)];
var inst_34682 = (new cljs.core.PersistentVector(null,2,(5),inst_34679,inst_34681,null));
var inst_34683 = om.next.transact_BANG_.call(null,component,inst_34682);
var state_34694__$1 = (function (){var statearr_34699 = state_34694;
(statearr_34699[(8)] = inst_34678);

return statearr_34699;
})();
var statearr_34700_34709 = state_34694__$1;
(statearr_34700_34709[(2)] = inst_34683);

(statearr_34700_34709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34695 === (4))){
var inst_34672 = (state_34694[(7)]);
var inst_34685 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34686 = cljs.core.list(new cljs.core.Symbol("editor","set-mode","editor/set-mode",-494931626,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"error","error",-978969032)], null));
var inst_34687 = [inst_34686,new cljs.core.Keyword(null,"input","input",556931961)];
var inst_34688 = (new cljs.core.PersistentVector(null,2,(5),inst_34685,inst_34687,null));
var inst_34689 = om.next.transact_BANG_.call(null,component,inst_34688);
var inst_34690 = console.error("cannot load paredit scripts:",inst_34672);
var state_34694__$1 = (function (){var statearr_34701 = state_34694;
(statearr_34701[(9)] = inst_34689);

return statearr_34701;
})();
var statearr_34702_34710 = state_34694__$1;
(statearr_34702_34710[(2)] = inst_34690);

(statearr_34702_34710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34695 === (5))){
var inst_34692 = (state_34694[(2)]);
var state_34694__$1 = state_34694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34694__$1,inst_34692);
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
var klipse$ui$editors$cljs$state_machine__13455__auto__ = null;
var klipse$ui$editors$cljs$state_machine__13455__auto____0 = (function (){
var statearr_34703 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34703[(0)] = klipse$ui$editors$cljs$state_machine__13455__auto__);

(statearr_34703[(1)] = (1));

return statearr_34703;
});
var klipse$ui$editors$cljs$state_machine__13455__auto____1 = (function (state_34694){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_34694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object)){
var ex__13458__auto__ = e34704;
var statearr_34705_34711 = state_34694;
(statearr_34705_34711[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34712 = state_34694;
state_34694 = G__34712;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$ui$editors$cljs$state_machine__13455__auto__ = function(state_34694){
switch(arguments.length){
case 0:
return klipse$ui$editors$cljs$state_machine__13455__auto____0.call(this);
case 1:
return klipse$ui$editors$cljs$state_machine__13455__auto____1.call(this,state_34694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$ui$editors$cljs$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$ui$editors$cljs$state_machine__13455__auto____0;
klipse$ui$editors$cljs$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$ui$editors$cljs$state_machine__13455__auto____1;
return klipse$ui$editors$cljs$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_34706 = f__13545__auto__.call(null);
(statearr_34706[(6)] = c__13544__auto__);

return statearr_34706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
}));
cljs.core._add_method.call(null,klipse.ui.editors.cljs.use_editor_mode_BANG_,new cljs.core.Keyword(null,"regular","regular",-1153375582),(function (_,component){
var editor = klipse.ui.editors.cljs.replace_editor_BANG_.call(null,component);
om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("editor","consume-mode","editor/consume-mode",-457655084,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"regular","regular",-1153375582)], null)),new cljs.core.Keyword(null,"input","input",556931961)], null));

return editor;
}));
klipse.ui.editors.cljs.switch_editor_mode = (function klipse$ui$editors$cljs$switch_editor_mode(component){
var editor_modes = cljs.core.get_in.call(null,om.next.props.call(null,component),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"editor-modes","editor-modes",-599444568)], null));
return klipse.ui.editors.cljs.use_editor_mode_BANG_.call(null,cljs.core.first.call(null,editor_modes),component);
});
klipse.ui.editors.cljs.init_editor = (function klipse$ui$editors$cljs$init_editor(component){
return klipse.ui.editors.editor.replace_id_by_editor.call(null,"code-cljs",klipse.ui.editors.cljs.config_editor);
});
/**
 * @constructor
 */
klipse.ui.editors.cljs.Cljs_editor = (function klipse$ui$editors$cljs$Cljs_editor(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.editors.cljs.Cljs_editor.prototype = goog.object.clone(React.Component.prototype);

var x34715_34728 = klipse.ui.editors.cljs.Cljs_editor.prototype;
x34715_34728.componentWillUpdate = ((function (x34715_34728){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___34729 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___34730 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___34729,next_ident__19924__auto___34730)){
var idxr__19925__auto___34731 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___34731 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___34731),((function (idxr__19925__auto___34731,ident__19923__auto___34729,next_ident__19924__auto___34730,this__19919__auto__,x34715_34728){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___34729], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___34730], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___34731,ident__19923__auto___34729,next_ident__19924__auto___34730,this__19919__auto__,x34715_34728))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x34715_34728))
;

x34715_34728.shouldComponentUpdate = ((function (x34715_34728){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__34717 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__34717);
} else {
return G__34717;
}
})();
var or__8363__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19919__auto__),next_props__19920__auto____$2);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = (function (){var and__8351__auto__ = this__19919__auto__.state;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19919__auto__.state,"omcljs$state"),goog.object.get(next_state__19921__auto__,"omcljs$state"));
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__19919__auto__.props.children,next_children__19922__auto__);
}
}
});})(x34715_34728))
;

x34715_34728.componentWillUnmount = ((function (x34715_34728){
return (function (){
var this__19919__auto__ = this;
var r__19930__auto__ = om.next.get_reconciler.call(null,this__19919__auto__);
var cfg__19931__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19930__auto__);
var st__19932__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
var indexer__19929__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
if(cljs.core.truth_((function (){var and__8351__auto__ = !((st__19932__auto__ == null));
if(and__8351__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__19932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__19919__auto__], null));
} else {
return and__8351__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__19932__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19919__auto__);
} else {
}

if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x34715_34728))
;

x34715_34728.componentDidUpdate = ((function (x34715_34728){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x34715_34728))
;

x34715_34728.isMounted = ((function (x34715_34728){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34715_34728))
;

x34715_34728.componentWillMount = ((function (x34715_34728){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x34715_34728))
;

x34715_34728.componentDidMount = ((function (x34715_34728){
return (function (){
var this$ = this;
om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),klipse.ui.editors.cljs.init_editor.call(null,this$)], null));

var new_editor = klipse.ui.editors.cljs.switch_editor_mode.call(null,this$);
return klipse.ui.editors.cljs.process_input.call(null,this$,klipse.ui.editors.editor.get_value.call(null,new_editor));
});})(x34715_34728))
;

x34715_34728.render = ((function (x34715_34728){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_34718 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34719 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34720 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34721 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34722 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{var map__34723 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var map__34723__$1 = ((((!((map__34723 == null)))?((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34723):map__34723);
var input = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"input","input",556931961),"");
var editor_mode = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"editor-mode","editor-mode",607583711));
var editor_class = (function (){var G__34725 = editor_mode;
var G__34725__$1 = (((G__34725 instanceof cljs.core.Keyword))?G__34725.fqn:null);
switch (G__34725__$1) {
case "loading":
return "mode-loading";

break;
case "error":
return "mode-error";

break;
case "regular":
return "mode-regular";

break;
case "paredit":
return "mode-paredit";

break;
case "parinfer-paren":
return "mode-parinfer-paren";

break;
case "parinfer-indent":
return "mode-parinfer-indent";

break;
default:
return "mode-regular";

}
})();
return om.dom.section.call(null,({"className": "cljs-editor"}),om.dom.div.call(null,({"autoFocus": true, "id": "code-cljs", "placeholder": klipse.ui.editors.cljs.placeholder_editor}),input),om.dom.div.call(null,({"onClick": cljs.core.partial.call(null,klipse.ui.editors.cljs.switch_editor_mode,this$), "className": ["editor-logo"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(editor_class)].join('')})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34722;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34721;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34720;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34719;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34718;
}});})(x34715_34728))
;


klipse.ui.editors.cljs.Cljs_editor.prototype.constructor = klipse.ui.editors.cljs.Cljs_editor;

klipse.ui.editors.cljs.Cljs_editor.prototype.constructor.displayName = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.prototype.om$isComponent = true;

var x34726_34733 = klipse.ui.editors.cljs.Cljs_editor;
/** @nocollapse */
x34726_34733.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x34726_34733.om$next$IQuery$query$arity$1 = ((function (x34726_34733){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null);
});})(x34726_34733))
;


var x34727_34734 = klipse.ui.editors.cljs.Cljs_editor.prototype;

x34727_34734.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x34727_34734.om$next$IQuery$query$arity$1 = ((function (x34727_34734){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null);
});})(x34727_34734))
;


klipse.ui.editors.cljs.Cljs_editor.cljs$lang$type = true;

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorStr = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.editors.cljs/Cljs-editor");
});
klipse.ui.editors.cljs.cljs_editor = om.next.factory.call(null,klipse.ui.editors.cljs.Cljs_editor);

//# sourceMappingURL=cljs.js.map
