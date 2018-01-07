// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer_codemirror.example');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer_codemirror.editor');
goog.require('parinfer_codemirror.state');
goog.require('parinfer_codemirror.editor_support');
/**
 * Indent selection or insert two spaces when tab is pressed.
 *   from: https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785
 */
parinfer_codemirror.example.on_tab = (function parinfer_codemirror$example$on_tab(cm){
if(cljs.core.truth_(cm.somethingSelected())){
return cm.indentSelection();
} else {
var n = cm.getOption("indentUnit");
var spaces = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," "));
return cm.replaceSelection(spaces);
}
});
parinfer_codemirror.example.editor_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure-parinfer",new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Tab","Tab",-1823302454),parinfer_codemirror.example.on_tab,new cljs.core.Keyword(null,"Shift-Tab","Shift-Tab",2042089464),"indentLess"], null)], null);
/**
 * Create a non-parinfer editor.
 */
parinfer_codemirror.example.create_regular_editor_BANG_ = (function parinfer_codemirror$example$create_regular_editor_BANG_(var_args){
var G__23009 = arguments.length;
switch (G__23009) {
case 1:
return parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (element_id){
return parinfer_codemirror.example.create_regular_editor_BANG_.call(null,element_id,cljs.core.PersistentArrayMap.EMPTY);
});

parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,opts){
var element = document.getElementById(element_id);
if(cljs.core._EQ_.call(null,"none",element.style.display)){
return null;
} else {
var cm = CodeMirror.fromTextArea(element,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,parinfer_codemirror.example.editor_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null),opts)));
var wrapper = cm.getWrapperElement();
wrapper.id = ["cm-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_id)].join('');

return cm;
}
});

parinfer_codemirror.example.create_regular_editor_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Create a parinfer editor.
 */
parinfer_codemirror.example.create_editor_BANG_ = (function parinfer_codemirror$example$create_editor_BANG_(var_args){
var G__23012 = arguments.length;
switch (G__23012) {
case 2:
return parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,key_){
return parinfer_codemirror.example.create_editor_BANG_.call(null,element_id,key_,cljs.core.PersistentArrayMap.EMPTY);
});

parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,key_,opts){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
return null;
} else {
var element = document.getElementById(element_id);
var cm = CodeMirror.fromTextArea(element,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,parinfer_codemirror.example.editor_opts,opts)));
var wrapper = cm.getWrapperElement();
wrapper.id = ["cm-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_id)].join('');

parinfer_codemirror.editor.parinferize_BANG_.call(null,cm,key_,new cljs.core.Keyword(null,"parinfer-mode","parinfer-mode",-851652980).cljs$core$IFn$_invoke$arity$1(opts),"");

return cm;
}
});

parinfer_codemirror.example.create_editor_BANG_.cljs$lang$maxFixedArity = 3;

parinfer_codemirror.example.render_dev_BANG_ = (function parinfer_codemirror$example$render_dev_BANG_(){
parinfer_codemirror.example.create_editor_BANG_.call(null,"code-indent-mode",new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542));

parinfer_codemirror.example.create_editor_BANG_.call(null,"code-paren-mode",new cljs.core.Keyword(null,"paren-mode","paren-mode",-2068924645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parinfer-mode","parinfer-mode",-851652980),new cljs.core.Keyword(null,"paren-mode","paren-mode",-2068924645)], null));

return parinfer_codemirror.editor.start_editor_sync_BANG_.call(null);
});
parinfer_codemirror.example.render_dev_BANG_.call(null);

//# sourceMappingURL=example.js.map
