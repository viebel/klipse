goog.provide("re_frame.cofx");
(function (){
re_frame.cofx.kind = new cljs.core.Keyword(null,"cofx","cofx",(2013202907)); return (
new cljs.core.Var(function(){return re_frame.cofx.kind;},new cljs.core.Symbol("re-frame.cofx","kind","re-frame.cofx/kind",(1585385653),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.cofx","re-frame.cofx",(-172336677),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),"re_frame/cofx.cljc",(10),(1),(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.cofx.kind)?re_frame.cofx.kind.cljs$lang$test:null)])));})()
;
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.cofx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
(function (){
re_frame.cofx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.cofx.kind); return (
new cljs.core.Var(function(){return re_frame.cofx.register;},new cljs.core.Symbol("re-frame.cofx","register","re-frame.cofx/register",(2127897922),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.cofx","re-frame.cofx",(-172336677),null),new cljs.core.Symbol(null,"register","register",(-685913253),null),"re_frame/cofx.cljc",(14),(1),(13),(13),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.cofx.register)?re_frame.cofx.register.cljs$lang$test:null)])));})()
;
/**
 * Returns an interceptor which adds to a `context's` `:coeffects`.
 * 
 *   `coeffects` are the input resources required by an event handler
 * to perform its job. The two most obvious ones are `db` and `event`.
 * But sometimes a handler might need other resources.
 * 
 * Perhaps a handler needs a random number or a GUID or the current datetime.
 * Perhaps it needs access to the connection to a DataScript database.
 * 
 * If the handler directly access these resources, it stops being as
 * pure. It immedaitely becomes harder to test, etc.
 * 
 * So the necessary resources are "injected" into the `coeffect` (map)
 * given the handler.
 * 
 * Given an `id`, and an optional value, lookup the registered coeffect
 * handler (previously registered via `reg-cofx`) and it with two arguments:
 * the current value of `:coeffects` and, optionally, the value. The registered handler
 * is expected to return a modified coeffect.
 * 
 */
(function (){
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var args738 = [];
var len__25946__auto___741 = arguments.length;
var i__25947__auto___742 = (0);
while(true){
if((i__25947__auto___742 < len__25946__auto___741)){
args738.push((arguments[i__25947__auto___742]));

var G__743 = (i__25947__auto___742 + (1));
i__25947__auto___742 = G__743;
continue;
} else {
}
break;
}

var G__740 = args738.length;
switch (G__740) {
case (1):
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args738.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.cofx.inject_cofx;},new cljs.core.Symbol("re-frame.cofx","inject-cofx","re-frame.cofx/inject-cofx",(506211540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.cofx","re-frame.cofx",(-172336677),null),new cljs.core.Symbol(null,"inject-cofx","inject-cofx",(-1494968627),null),"re_frame/cofx.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns an interceptor which adds to a `context's` `:coeffects`.\n\n  `coeffects` are the input resources required by an event handler\n   to perform its job. The two most obvious ones are `db` and `event`.\n   But sometimes a handler might need other resources.\n\n   Perhaps a handler needs a random number or a GUID or the current datetime.\n   Perhaps it needs access to the connection to a DataScript database.\n\n   If the handler directly access these resources, it stops being as\n   pure. It immedaitely becomes harder to test, etc.\n\n   So the necessary resources are \"injected\" into the `coeffect` (map)\n   given the handler.\n\n   Given an `id`, and an optional value, lookup the registered coeffect\n   handler (previously registered via `reg-cofx`) and it with two arguments:\n   the current value of `:coeffects` and, optionally, the value. The registered handler\n   is expected to return a modified coeffect.\n   ",(cljs.core.truth_(re_frame.cofx.inject_cofx)?re_frame.cofx.inject_cofx.cljs$lang$test:null)])));})()
;

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id));
}));
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id),value);
}));
});

re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return re_frame.cofx.inject_cofx;},new cljs.core.Symbol("re-frame.cofx","inject-cofx","re-frame.cofx/inject-cofx",(506211540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.cofx","re-frame.cofx",(-172336677),null),new cljs.core.Symbol(null,"inject-cofx","inject-cofx",(-1494968627),null),"re_frame/cofx.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns an interceptor which adds to a `context's` `:coeffects`.\n\n  `coeffects` are the input resources required by an event handler\n   to perform its job. The two most obvious ones are `db` and `event`.\n   But sometimes a handler might need other resources.\n\n   Perhaps a handler needs a random number or a GUID or the current datetime.\n   Perhaps it needs access to the connection to a DataScript database.\n\n   If the handler directly access these resources, it stops being as\n   pure. It immedaitely becomes harder to test, etc.\n\n   So the necessary resources are \"injected\" into the `coeffect` (map)\n   given the handler.\n\n   Given an `id`, and an optional value, lookup the registered coeffect\n   handler (previously registered via `reg-cofx`) and it with two arguments:\n   the current value of `:coeffects` and, optionally, the value. The registered handler\n   is expected to return a modified coeffect.\n   ",(cljs.core.truth_(re_frame.cofx.inject_cofx)?re_frame.cofx.inject_cofx.cljs$lang$test:null)]));
re_frame.cofx.register.call(null,new cljs.core.Keyword(null,"db","db",(993250759)),(function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.call(null,coeffects,new cljs.core.Keyword(null,"db","db",(993250759)),cljs.core.deref.call(null,re_frame.db.app_db));
}));
(function (){
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.call(null,new cljs.core.Keyword(null,"db","db",(993250759))); return (
new cljs.core.Var(function(){return re_frame.cofx.inject_db;},new cljs.core.Symbol("re-frame.cofx","inject-db","re-frame.cofx/inject-db",(-2029912038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.cofx","re-frame.cofx",(-172336677),null),new cljs.core.Symbol(null,"inject-db","inject-db",(-666190317),null),"re_frame/cofx.cljc",(15),(1),(66),(66),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.cofx.inject_db)?re_frame.cofx.inject_db.cljs$lang$test:null)])));})()
;
