// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if((((Sk["builtinFiles"]) == null)) || ((((function (){var temp__6751__auto__ = (Sk["builtinFiles"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__35518 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__35518["files"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__35519 = temp__6751__auto____$1;
return G__35519;
} else {
return null;
}
} else {
return null;
}
})()[x]) == null))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var temp__6751__auto__ = (Sk["builtinFiles"]);
if(cljs.core.truth_(temp__6751__auto__)){
var G__35520 = temp__6751__auto__;
var temp__6751__auto____$1 = (G__35520["files"]);
if(cljs.core.truth_(temp__6751__auto____$1)){
var G__35521 = temp__6751__auto____$1;
return G__35521;
} else {
return null;
}
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var o_SHARP_ = Sk;
(o_SHARP_["TurtleGraphics"] = ({}));

return o_SHARP_;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__35523){
var map__35524 = p__35523;
var map__35524__$1 = ((((!((map__35524 == null)))?((((map__35524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35524):map__35524);
var container_id = cljs.core.get.call(null,map__35524__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj_SHARP__35528 = Sk;
var fn_SHARP__35529 = (obj_SHARP__35528["configure"]);
fn_SHARP__35529.call(obj_SHARP__35528,({"output": ((function (obj_SHARP__35528,fn_SHARP__35529,c,map__35524,map__35524__$1,container_id){
return (function (p1__35522_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35522_SHARP_);
});})(obj_SHARP__35528,fn_SHARP__35529,c,map__35524,map__35524__$1,container_id))
, "read": klipse.lang.python.builtin_read}));

(function (){var obj_SHARP_ = (Sk["misceval"]);
var fn_SHARP_ = (obj_SHARP_["asyncToPromise"]);
return fn_SHARP_.call(obj_SHARP_,((function (obj_SHARP_,fn_SHARP_,c,map__35524,map__35524__$1,container_id){
return (function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var o_SHARP__35530 = Sk;
var temp__6751__auto___35531 = (o_SHARP__35530["TurtleGraphics"]);
if(cljs.core.truth_(temp__6751__auto___35531)){
var G__35526_35532 = temp__6751__auto___35531;
(G__35526_35532["target"] = container_id);
} else {
(o_SHARP__35530["TurtleGraphics"] = (function (){var G__35527 = {};
(G__35527["target"] = container_id);

return G__35527;
})());
}



var obj_SHARP___$1 = Sk;
var fn_SHARP___$1 = (obj_SHARP___$1["importMainWithBody"]);
return fn_SHARP___$1.call(obj_SHARP___$1,"<stdin>",false,exp,true);
});})(obj_SHARP_,fn_SHARP_,c,map__35524,map__35524__$1,container_id))
);
})().then(((function (c,map__35524,map__35524__$1,container_id){
return (function (mod){
var obj_SHARP_ = console;
var fn_SHARP_ = (obj_SHARP_["info"]);
return fn_SHARP_.call(obj_SHARP_,"success to eval skulpt: ");
});})(c,map__35524,map__35524__$1,container_id))
,((function (c,map__35524,map__35524__$1,container_id){
return (function (err){
return cljs.core.async.put_BANG_.call(null,c,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
});})(c,map__35524,map__35524__$1,container_id))
);

return c;
});
klipse.lang.python.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.python.str_eval_async,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),klipse.common.registry.scripts_src.call(null,"skulpt.min.js"),klipse.common.registry.scripts_src.call(null,"skulpt-stdlib.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-python-client","selector_eval_python_client",klipse.lang.python.opts);

//# sourceMappingURL=python.js.map
