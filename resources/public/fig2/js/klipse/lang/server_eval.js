// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
if(cljs.core.truth_((window["ReplitClient"]))){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__35120_35128 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__35121_35129 = null;
var count__35122_35130 = (0);
var i__35123_35131 = (0);
while(true){
if((i__35123_35131 < count__35122_35130)){
var map__35124_35132 = cljs.core._nth.call(null,chunk__35121_35129,i__35123_35131);
var map__35124_35133__$1 = ((((!((map__35124_35132 == null)))?((((map__35124_35132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35124_35132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124_35132):map__35124_35132);
var selector_35134 = cljs.core.get.call(null,map__35124_35133__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_35135 = cljs.core.get.call(null,map__35124_35133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_35136 = cljs.core.get.call(null,map__35124_35133__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_35137 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_35136,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_35136))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_35135,selector_35134,enriched_opts_35137);

var G__35138 = seq__35120_35128;
var G__35139 = chunk__35121_35129;
var G__35140 = count__35122_35130;
var G__35141 = (i__35123_35131 + (1));
seq__35120_35128 = G__35138;
chunk__35121_35129 = G__35139;
count__35122_35130 = G__35140;
i__35123_35131 = G__35141;
continue;
} else {
var temp__6753__auto___35142 = cljs.core.seq.call(null,seq__35120_35128);
if(temp__6753__auto___35142){
var seq__35120_35143__$1 = temp__6753__auto___35142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35120_35143__$1)){
var c__9294__auto___35144 = cljs.core.chunk_first.call(null,seq__35120_35143__$1);
var G__35145 = cljs.core.chunk_rest.call(null,seq__35120_35143__$1);
var G__35146 = c__9294__auto___35144;
var G__35147 = cljs.core.count.call(null,c__9294__auto___35144);
var G__35148 = (0);
seq__35120_35128 = G__35145;
chunk__35121_35129 = G__35146;
count__35122_35130 = G__35147;
i__35123_35131 = G__35148;
continue;
} else {
var map__35126_35149 = cljs.core.first.call(null,seq__35120_35143__$1);
var map__35126_35150__$1 = ((((!((map__35126_35149 == null)))?((((map__35126_35149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35126_35149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35126_35149):map__35126_35149);
var selector_35151 = cljs.core.get.call(null,map__35126_35150__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_35152 = cljs.core.get.call(null,map__35126_35150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_35153 = cljs.core.get.call(null,map__35126_35150__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_35154 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_35153,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_35153))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_35152,selector_35151,enriched_opts_35154);

var G__35155 = cljs.core.next.call(null,seq__35120_35143__$1);
var G__35156 = null;
var G__35157 = (0);
var G__35158 = (0);
seq__35120_35128 = G__35155;
chunk__35121_35129 = G__35156;
count__35122_35130 = G__35157;
i__35123_35131 = G__35158;
continue;
}
} else {
}
}
break;
}
} else {
}

//# sourceMappingURL=server_eval.js.map
