// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.dom_utils');
goog.require('gadjett.collections');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('clojure.string');
klipse.ui.editors.editor.code_mirror = CodeMirror;
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
return CodeMirror.fromTextArea(document.getElementById(dom_id),cljs.core.clj__GT_js.call(null,config));
});
klipse.ui.editors.editor.get_value = (function klipse$ui$editors$editor$get_value(editor){
return editor.getValue();
});
klipse.ui.editors.editor.get_selection = (function klipse$ui$editors$editor$get_selection(editor){
return editor.getSelection();
});
klipse.ui.editors.editor.get_selection_or_nil = (function klipse$ui$editors$editor$get_selection_or_nil(editor){
var s = klipse.ui.editors.editor.get_selection.call(null,editor);
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
klipse.ui.editors.editor.get_selection_when_selected = (function klipse$ui$editors$editor$get_selection_when_selected(editor){
var or__8363__auto__ = klipse.ui.editors.editor.get_selection_or_nil.call(null,editor);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return klipse.ui.editors.editor.get_value.call(null,editor);
}
});
klipse.ui.editors.editor.set_value = (function klipse$ui$editors$editor$set_value(editor,value){
editor.setValue(value);

return editor;
});
klipse.ui.editors.editor.on_change = (function klipse$ui$editors$editor$on_change(editor,f){
editor.on("change",f);

return editor;
});
klipse.ui.editors.editor.set_option = (function klipse$ui$editors$editor$set_option(editor,option,value){
editor.setOption(option,value);

return editor;
});
klipse.ui.editors.editor.fix_blank_lines = (function klipse$ui$editors$editor$fix_blank_lines(editor){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.fix_blank_lines.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
});
if(typeof klipse.ui.editors.editor.beautify_language !== 'undefined'){
} else {
klipse.ui.editors.editor.beautify_language = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.editor","beautify-language"),((function (method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__){
return (function (editor,mode){
return mode;
});})(method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,new cljs.core.Keyword(null,"default","default",-1987822328),(function (editor,_){
return editor;
}));
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,"text/x-sql",(function (editor,_){
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj_SHARP_ = sqlFormatter;
var fn_SHARP_ = (obj_SHARP_["format"]);
return fn_SHARP_.call(obj_SHARP_,klipse.ui.editors.editor.get_value.call(null,editor));
})());
}));
klipse.ui.editors.editor.fix_comments_lines = (function klipse$ui$editors$editor$fix_comments_lines(editor,mode){
if(cljs.core._EQ_.call(null,"clojure",mode)){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.remove_ending_comments.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
} else {
return editor;
}
});
klipse.ui.editors.editor.do_indent = (function klipse$ui$editors$editor$do_indent(editor){
var obj_SHARP__33220 = editor;
var fn_SHARP__33221 = (obj_SHARP__33220["operation"]);
fn_SHARP__33221.call(obj_SHARP__33220,((function (obj_SHARP__33220,fn_SHARP__33221){
return (function (){
var n__9406__auto__ = (function (){var obj_SHARP___$1 = editor;
var fn_SHARP___$1 = (obj_SHARP___$1["lineCount"]);
return fn_SHARP___$1.call(obj_SHARP___$1);
})();
var line = (0);
while(true){
if((line < n__9406__auto__)){
var obj_SHARP__33222__$1 = editor;
var fn_SHARP__33223__$1 = (obj_SHARP__33222__$1["indentLine"]);
fn_SHARP__33223__$1.call(obj_SHARP__33222__$1,line,"smart");

var G__33224 = (line + (1));
line = G__33224;
continue;
} else {
return null;
}
break;
}
});})(obj_SHARP__33220,fn_SHARP__33221))
);

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__33225){
var map__33226 = p__33225;
var map__33226__$1 = ((((!((map__33226 == null)))?((((map__33226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33226):map__33226);
var indent_QMARK_ = cljs.core.get.call(null,map__33226__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33226__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
var $ = editor;
var $__$1 = (cljs.core.truth_(indent_QMARK_)?klipse.ui.editors.editor.do_indent.call(null,$):$);
var $__$2 = klipse.ui.editors.editor.fix_blank_lines.call(null,$__$1);
var $__$3 = (cljs.core.truth_(remove_ending_comments_QMARK_)?klipse.ui.editors.editor.fix_comments_lines.call(null,$__$2,mode):$__$2);
return klipse.ui.editors.editor.beautify_language.call(null,$__$3,mode);
});
klipse.ui.editors.editor.set_value_and_beautify = (function klipse$ui$editors$editor$set_value_and_beautify(editor,mode,value,opts){
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,opts);
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(var_args){
var args__9647__auto__ = [];
var len__9640__auto___33238 = arguments.length;
var i__9641__auto___33239 = (0);
while(true){
if((i__9641__auto___33239 < len__9640__auto___33238)){
args__9647__auto__.push((arguments[i__9641__auto___33239]));

var G__33240 = (i__9641__auto___33239 + (1));
i__9641__auto___33239 = G__33240;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((3) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9648__auto__);
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__33232,p__33233){
var map__33234 = p__33232;
var map__33234__$1 = ((((!((map__33234 == null)))?((((map__33234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33234):map__33234);
var opts = map__33234__$1;
var mode = cljs.core.get.call(null,map__33234__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__33235 = p__33233;
var map__33235__$1 = ((((!((map__33235 == null)))?((((map__33235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33235):map__33235);
var klass = cljs.core.get.call(null,map__33235__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__33235__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33235__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror(((function (map__33234,map__33234__$1,opts,mode,map__33235,map__33235__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_){
return (function (elt){
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

if(cljs.core.truth_(klass)){
return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
} else {
return null;
}
});})(map__33234,map__33234__$1,opts,mode,map__33235,map__33235__$1,klass,indent_QMARK_,remove_ending_comments_QMARK_))
,cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
});

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq33228){
var G__33229 = cljs.core.first.call(null,seq33228);
var seq33228__$1 = cljs.core.next.call(null,seq33228);
var G__33230 = cljs.core.first.call(null,seq33228__$1);
var seq33228__$2 = cljs.core.next.call(null,seq33228__$1);
var G__33231 = cljs.core.first.call(null,seq33228__$2);
var seq33228__$3 = cljs.core.next.call(null,seq33228__$2);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__33229,G__33230,G__33231,seq33228__$3);
});

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__9647__auto__ = [];
var len__9640__auto___33244 = arguments.length;
var i__9641__auto___33245 = (0);
while(true){
if((i__9641__auto___33245 < len__9640__auto___33244)){
args__9647__auto__.push((arguments[i__9641__auto___33245]));

var G__33246 = (i__9641__auto___33245 + (1));
i__9641__auto___33245 = G__33246;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((2) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((2)),(0),null)):null);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9648__auto__);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (id,cm_opts,more_opts){
var element = goog.dom.getElement(id);
var value = (element["textContent"]);
return cljs.core.apply.call(null,klipse.ui.editors.editor.replace_element_by_editor,element,value,cm_opts,more_opts);
});

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$maxFixedArity = (2);

klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq33241){
var G__33242 = cljs.core.first.call(null,seq33241);
var seq33241__$1 = cljs.core.next.call(null,seq33241);
var G__33243 = cljs.core.first.call(null,seq33241__$1);
var seq33241__$2 = cljs.core.next.call(null,seq33241__$1);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic(G__33242,G__33243,seq33241__$2);
});

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__9647__auto__ = [];
var len__9640__auto___33254 = arguments.length;
var i__9641__auto___33255 = (0);
while(true){
if((i__9641__auto___33255 < len__9640__auto___33254)){
args__9647__auto__.push((arguments[i__9641__auto___33255]));

var G__33256 = (i__9641__auto___33255 + (1));
i__9641__auto___33255 = G__33256;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((3) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9648__auto__);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__33251){
var map__33252 = p__33251;
var map__33252__$1 = ((((!((map__33252 == null)))?((((map__33252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33252):map__33252);
var klass = cljs.core.get.call(null,map__33252__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__33252__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__33252__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
});

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3);

klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq33247){
var G__33248 = cljs.core.first.call(null,seq33247);
var seq33247__$1 = cljs.core.next.call(null,seq33247);
var G__33249 = cljs.core.first.call(null,seq33247__$1);
var seq33247__$2 = cljs.core.next.call(null,seq33247__$1);
var G__33250 = cljs.core.first.call(null,seq33247__$2);
var seq33247__$3 = cljs.core.next.call(null,seq33247__$2);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic(G__33248,G__33249,G__33250,seq33247__$3);
});


//# sourceMappingURL=editor.js.map
