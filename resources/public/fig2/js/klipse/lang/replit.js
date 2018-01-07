// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.replit');
goog.require('cljs.core');
goog.require('cljs.core.async');
klipse.lang.replit.token = ({"msg_mac": "6GpVqi640U22dcEhfB5C58m0oqAWXuVZr+SQ4sBoTMQ=", "time_created": (1468951584000)});
klipse.lang.replit._STAR_init_repl_STAR_ = (function klipse$lang$replit$_STAR_init_repl_STAR_(language){
return (new ReplitClient("api.repl.it",(80),language,klipse.lang.replit.token));
});
klipse.lang.replit.init_repl = cljs.core.memoize.call(null,klipse.lang.replit._STAR_init_repl_STAR_);
klipse.lang.replit.evaluate = (function klipse$lang$replit$evaluate(repl,c,exp){
return (function (){var obj_SHARP_ = repl;
var fn_SHARP_ = (obj_SHARP_["evaluate"]);
return fn_SHARP_.call(obj_SHARP_,exp,({"stdout": ((function (obj_SHARP_,fn_SHARP_){
return (function (output){
return cljs.core.async.put_BANG_.call(null,c,output);
});})(obj_SHARP_,fn_SHARP_))
}));
})().then((function (result){
if(cljs.core.empty_QMARK_.call(null,(result["error"]))){
return cljs.core.async.put_BANG_.call(null,c,["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((result["data"])),"\n"].join(''));
} else {
return cljs.core.async.put_BANG_.call(null,c,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((result["error"])),"\n"].join(''));
}
}),(function (error){
return cljs.core.async.put_BANG_.call(null,c,error);
}));
});
klipse.lang.replit.connect_and_evaluate = (function klipse$lang$replit$connect_and_evaluate(language,exp){
var c = cljs.core.async.chan.call(null);
var repl = klipse.lang.replit.init_repl.call(null,language);
(function (){var obj_SHARP_ = repl;
var fn_SHARP_ = (obj_SHARP_["connect"]);
return fn_SHARP_.call(obj_SHARP_);
})().then(cljs.core.partial.call(null,klipse.lang.replit.evaluate,repl,c,exp));

return c;
});

//# sourceMappingURL=replit.js.map
