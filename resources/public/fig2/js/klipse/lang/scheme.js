// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.scheme');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.scheme.display = (function klipse$lang$scheme$display(result){
if(cljs.core.truth_((result["inspect"]))){
var obj_SHARP_ = result;
var fn_SHARP_ = (obj_SHARP_["inspect"]);
return fn_SHARP_.call(obj_SHARP_);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join('');
}
});
klipse.lang.scheme.create_interpreter = (function klipse$lang$scheme$create_interpreter(on_error){
var klass = (BiwaScheme["Interpreter"]);
return (new klass(on_error));
});
klipse.lang.scheme.str_eval_async = (function klipse$lang$scheme$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var interpreter = klipse.lang.scheme.create_interpreter.call(null,((function (c){
return (function (err){
return cljs.core.async.put_BANG_.call(null,c,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
});})(c))
);
window.exp = exp;

cljs.core.async.put_BANG_.call(null,c,klipse.lang.scheme.display.call(null,(function (){var obj_SHARP_ = interpreter;
var fn_SHARP_ = (obj_SHARP_["evaluate"]);
return fn_SHARP_.call(obj_SHARP_,exp);
})()));

return c;
});
klipse.lang.scheme.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"scheme",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"scheme",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.scheme.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"scheme"),klipse.common.registry.scripts_src.call(null,"biwascheme-0.6.6-min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-scheme","selector_eval_scheme",klipse.lang.scheme.opts);

//# sourceMappingURL=scheme.js.map
