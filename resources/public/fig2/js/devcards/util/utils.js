// Compiled by ClojureScript 1.9.908 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__6751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__6751__auto__)){
var doc = temp__6751__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__9488__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11826_11828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11827_11829 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11826_11828,_STAR_print_fn_STAR_11827_11829,sb__9488__auto__){
return (function (x__9489__auto__){
return sb__9488__auto__.append(x__9489__auto__);
});})(_STAR_print_newline_STAR_11826_11828,_STAR_print_fn_STAR_11827_11829,sb__9488__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11827_11829;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11826_11828;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9488__auto__)].join('');
}catch (e11824){if((e11824 instanceof Error)){
var e1 = e11824;
try{return obj.toString();
}catch (e11825){if((e11825 instanceof Error)){
var e2 = e11825;
return ["<<Un-printable Type>>"].join('');
} else {
throw e11825;

}
}} else {
throw e11824;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_11830 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_11830;
}});

//# sourceMappingURL=utils.js.map
