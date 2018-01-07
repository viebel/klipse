goog.provide("cljs.spec.test.alpha");
(function (){
cljs.spec.test.alpha.distinct_by = (function cljs$spec$test$alpha$distinct_by(f,coll){
var step = (function cljs$spec$test$alpha$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__3398 = (function (p__3399,seen__$1){
while(true){
var vec__3400 = p__3399;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3400,(0),null);
var xs__$1 = vec__3400;
var temp__21177__auto__ = cljs.core.seq(xs__$1);
if(temp__21177__auto__){
var s = temp__21177__auto__;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f(x));
if(cljs.core.contains_QMARK_(seen__$1,v)){
var G__3403 = cljs.core.rest(s);
var G__3404 = seen__$1;
p__3399 = G__3403;
seen__$1 = G__3404;
continue;
} else {
return cljs.core.cons(x,cljs$spec$test$alpha$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v)));
}
} else {
return null;
}
break;
}
});
return fexpr__3398(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.distinct_by;},new cljs.core.Symbol("cljs.spec.test.alpha","distinct-by","cljs.spec.test.alpha/distinct-by",(-1374292576),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"distinct-by","distinct-by",(1138136071),null),"cljs/spec/test/alpha.cljs",(18),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.distinct_by)?cljs.spec.test.alpha.distinct_by.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.__GT_sym = (function cljs$spec$test$alpha$__GT_sym(x){
var fexpr__3405 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.__GT_sym;},new cljs.core.Symbol("cljs.spec.alpha","->sym","cljs.spec.alpha/->sym",(-2031271081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",(505122844),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"/private/tmp/lumo-20170817-25861-sueu9w/lumo-1.7.0/.boot/cache/tmp/private/tmp/lumo-20170817-25861-sueu9w/lumo-1.7.0/jyn/-nbzai3/main.out/cljs/spec/alpha.cljs",(13),(1),(308),(308),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha.__GT_sym)?cljs.spec.alpha.__GT_sym.cljs$lang$test:null)])));
return (fexpr__3405.cljs$core$IFn$_invoke$arity$1 ? fexpr__3405.cljs$core$IFn$_invoke$arity$1(x) : fexpr__3405(x));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.__GT_sym;},new cljs.core.Symbol("cljs.spec.test.alpha","->sym","cljs.spec.test.alpha/->sym",(-540835227),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"cljs/spec/test/alpha.cljs",(12),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.__GT_sym)?cljs.spec.test.alpha.__GT_sym.cljs$lang$test:null)])));})()
;
/**
 * if false, instrumented fns call straight through
 */
(function (){
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true; return (
new cljs.core.Var(function(){return cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",(-856303648),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"*instrument-enabled*","*instrument-enabled*",(1714892871),null),"cljs/spec/test/alpha.cljs",(46),(1),true,(41),(41),cljs.core.List.EMPTY,"if false, instrumented fns call straight through",((cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)?cljs.spec.test.alpha._STAR_instrument_enabled_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.get_host_port = (function cljs$spec$test$alpha$get_host_port(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",(-1558485167)),window.location.host,new cljs.core.Keyword(null,"port","port",(1534937262)),window.location.port], null);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.get_host_port;},new cljs.core.Symbol("cljs.spec.test.alpha","get-host-port","cljs.spec.test.alpha/get-host-port",(-1780892203),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"get-host-port","get-host-port",(1746820170),null),"cljs/spec/test/alpha.cljs",(20),(1),(45),(45),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.alpha.get_host_port)?cljs.spec.test.alpha.get_host_port.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.get_ua_product = (function cljs$spec$test$alpha$get_ua_product(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",(497115653));
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",(1718738387));
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",(1283768880));
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",(2038473780));
} else {
return null;
}
}
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.get_ua_product;},new cljs.core.Symbol("cljs.spec.test.alpha","get-ua-product","cljs.spec.test.alpha/get-ua-product",(278543339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"get-ua-product","get-ua-product",(-1436771700),null),"cljs/spec/test/alpha.cljs",(21),(1),(51),(51),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.alpha.get_ua_product)?cljs.spec.test.alpha.get_ua_product.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.get_env = (function cljs$spec$test$alpha$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",(938384227)),cljs.spec.test.alpha.get_ua_product()], null);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.get_env;},new cljs.core.Symbol("cljs.spec.test.alpha","get-env","cljs.spec.test.alpha/get-env",(-980458133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"get-env","get-env",(-1412954942),null),"cljs/spec/test/alpha.cljs",(14),(1),(60),(60),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.alpha.get_env)?cljs.spec.test.alpha.get_env.cljs$lang$test:null)])));})()
;
/**
 * Fn-spec must include at least :args or :ret specs.
 */
(function (){
cljs.spec.test.alpha.fn_spec_QMARK_ = (function cljs$spec$test$alpha$fn_spec_QMARK_(m){
var or__21686__auto__ = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(m);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.fn_spec_QMARK_;},new cljs.core.Symbol("cljs.spec.test.alpha","fn-spec?","cljs.spec.test.alpha/fn-spec?",(-1551716180),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"fn-spec?","fn-spec?",(138154325),null),"cljs/spec/test/alpha.cljs",(16),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Fn-spec must include at least :args or :ret specs.",(cljs.core.truth_(cljs.spec.test.alpha.fn_spec_QMARK_)?cljs.spec.test.alpha.fn_spec_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.explain_data_STAR_ = (function cljs$spec$test$alpha$explain_data_STAR_(spec,v){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))){
return null;
} else {
return cljs.spec.alpha.explain_data(spec,v);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.explain_data_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","explain-data*","cljs.spec.test.alpha/explain-data*",(-1057315297),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"explain-data*","explain-data*",(-1439103580),null),"cljs/spec/test/alpha.cljs",(21),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.explain_data_STAR_)?cljs.spec.test.alpha.explain_data_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.find_caller = (function cljs$spec$test$alpha$find_caller(st){
var search_spec_fn = (function cljs$spec$test$alpha$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",(-2127255473)).cljs$core$IFn$_invoke$arity$1(frame);
var and__21660__auto__ = typeof s === 'string';
if(and__21660__auto__){
var and__21660__auto____$1 = !(clojure.string.blank_QMARK_(s));
if(and__21660__auto____$1){
return cljs.core.re_find(/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__21660__auto____$1;
}
} else {
return and__21660__auto__;
}
} else {
return null;
}
});
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(search_spec_fn,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__251_SHARP_){
return cljs.core.not(search_spec_fn(p1__251_SHARP_));
}),st)));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.find_caller;},new cljs.core.Symbol("cljs.spec.test.alpha","find-caller","cljs.spec.test.alpha/find-caller",(-502167751),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"find-caller","find-caller",(139207056),null),"cljs/spec/test/alpha.cljs",(19),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"st","st",(-1199179941),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.find_caller)?cljs.spec.test.alpha.find_caller.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.spec_checking_fn = (function cljs$spec$test$alpha$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = (function (){var fexpr__3406 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},new cljs.core.Symbol("cljs.spec.alpha","maybe-spec","cljs.spec.alpha/maybe-spec",(1954004993),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",(505122844),null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",(-741366888),null),"/private/tmp/lumo-20170817-25861-sueu9w/lumo-1.7.0/.boot/cache/tmp/private/tmp/lumo-20170817-25861-sueu9w/lumo-1.7.0/jyn/-nbzai3/main.out/cljs/spec/alpha.cljs",(18),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",(1986391440),null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)])));
return (fexpr__3406.cljs$core$IFn$_invoke$arity$1 ? fexpr__3406.cljs$core$IFn$_invoke$arity$1(fn_spec) : fexpr__3406(fn_spec));
})();
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.alpha.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",(-1220295119)),conformed)){
var caller = cljs.spec.test.alpha.find_caller((function (){var G__3407 = cljs.spec.test.alpha.get_host_port();
var G__3408 = (new Error()).stack;
var G__3409 = cljs.spec.test.alpha.get_env();
var G__3410 = null;
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__3407,G__3408,G__3409,G__3410) : cljs.stacktrace.parse_stacktrace(G__3407,G__3408,G__3409,G__3410));
})());
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",(1870769783)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592)),new cljs.core.Keyword(null,"instrument","instrument",(-960698844))], 0)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",(-398302390)),caller], null):null)], 0));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__23047__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_3411_3416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_3412_3417 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_3411_3416,_STAR_print_fn_STAR_3412_3417,sb__23047__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__23048__auto__){
return sb__23047__auto__.append(x__23048__auto__);
});})(_STAR_print_newline_STAR_3411_3416,_STAR_print_fn_STAR_3412_3417,sb__23047__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_3412_3417;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_3411_3416;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__23047__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__3413 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__3418__delegate = function (args){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var _STAR_instrument_enabled_STAR_3414 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_(v,new cljs.core.Keyword(null,"args","args",(1315556576)),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_3415 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_3415;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_3414;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__3418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3419__i = 0, G__3419__a = new Array(arguments.length -  0);
while (G__3419__i < G__3419__a.length) {G__3419__a[G__3419__i] = arguments[G__3419__i + 0]; ++G__3419__i;}
  args = new cljs.core.IndexedSeq(G__3419__a,0,null);
} 
return G__3418__delegate.call(this,args);};
G__3418.cljs$lang$maxFixedArity = 0;
G__3418.cljs$lang$applyTo = (function (arglist__3420){
var args = cljs.core.seq(arglist__3420);
return G__3418__delegate(args);
});
G__3418.cljs$core$IFn$_invoke$arity$variadic = G__3418__delegate;
return G__3418;
})()
;})(fn_spec__$1,conform_BANG_))
;
goog.object.extend(G__3413,f);

return G__3413;
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.spec_checking_fn;},new cljs.core.Symbol("cljs.spec.test.alpha","spec-checking-fn","cljs.spec.test.alpha/spec-checking-fn",(-1019674720),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"spec-checking-fn","spec-checking-fn",(2105350411),null),"cljs/spec/test/alpha.cljs",(24),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"fn-spec","fn-spec",(-1940449061),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.spec_checking_fn)?cljs.spec.test.alpha.spec_checking_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.no_fspec = (function cljs$spec$test$alpha$no_fspec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Fn at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," is not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",(-769682797)),v,new cljs.core.Keyword(null,"spec","spec",(347520401)),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592)),new cljs.core.Keyword(null,"no-fspec","no-fspec",(-1763393966))], null));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.no_fspec;},new cljs.core.Symbol("cljs.spec.test.alpha","no-fspec","cljs.spec.test.alpha/no-fspec",(-1896880672),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"no-fspec","no-fspec",(-122862439),null),"cljs/spec/test/alpha.cljs",(16),(1),(118),(118),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.no_fspec)?cljs.spec.test.alpha.no_fspec.cljs$lang$test:null)])));})()
;
if(typeof cljs.spec.test.alpha.instrumented_vars !== 'undefined'){
} else {
(function (){
cljs.spec.test.alpha.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.instrumented_vars;},new cljs.core.Symbol("cljs.spec.test.alpha","instrumented-vars","cljs.spec.test.alpha/instrumented-vars",(-674725860),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrumented-vars","instrumented-vars",(1838047655),null),"cljs/spec/test/alpha.cljs",(37),(1),(123),(123),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.test.alpha.instrumented_vars)?cljs.spec.test.alpha.instrumented_vars.cljs$lang$test:null)])));})()
;
}
/**
 * Helper for instrument.
 */
(function (){
cljs.spec.test.alpha.instrument_choose_fn = (function cljs$spec$test$alpha$instrument_choose_fn(f,spec,sym,p__3421){
var map__3422 = p__3421;
var map__3422__$1 = ((((!((map__3422 == null)))?((((map__3422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3422):map__3422);
var over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3422__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var stub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3422__$1,new cljs.core.Keyword(null,"stub","stub",(1339145807)));
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3422__$1,new cljs.core.Keyword(null,"replace","replace",(-786587770)));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,over));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replace,sym,f);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_choose_fn;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-choose-fn","cljs.spec.test.alpha/instrument-choose-fn",(-1526370280),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrument-choose-fn","instrument-choose-fn",(-213772669),null),"cljs/spec/test/alpha.cljs",(28),(1),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"over","over",(1833084578),null),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stub","stub",(-1315289962),null),new cljs.core.Symbol(null,"replace","replace",(853943757),null)], null)], null)], null)),"Helper for instrument.",(cljs.core.truth_(cljs.spec.test.alpha.instrument_choose_fn)?cljs.spec.test.alpha.instrument_choose_fn.cljs$lang$test:null)])));})()
;
/**
 * Helper for instrument
 */
(function (){
cljs.spec.test.alpha.instrument_choose_spec = (function cljs$spec$test$alpha$instrument_choose_spec(spec,sym,p__3424){
var map__3425 = p__3424;
var map__3425__$1 = ((((!((map__3425 == null)))?((((map__3425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3425):map__3425);
var overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3425__$1,new cljs.core.Keyword(null,"spec","spec",(347520401)));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(overrides,sym,spec);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_choose_spec;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-choose-spec","cljs.spec.test.alpha/instrument-choose-spec",(1609689625),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrument-choose-spec","instrument-choose-spec",(674449776),null),"cljs/spec/test/alpha.cljs",(30),(1),(132),(132),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"overrides","overrides",(-915806902),null),new cljs.core.Keyword(null,"spec","spec",(347520401))], null)], null)),"Helper for instrument",(cljs.core.truth_(cljs.spec.test.alpha.instrument_choose_spec)?cljs.spec.test.alpha.instrument_choose_spec.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.instrument_1_STAR_ = (function cljs$spec$test$alpha$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec(v);
var map__3427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
var map__3427__$1 = ((((!((map__3427 == null)))?((((map__3427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3427):map__3427);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3427__$1,new cljs.core.Keyword(null,"raw","raw",(1604651272)));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3427__$1,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)));
var current = cljs.core.deref(v);
var to_wrap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current))?raw:current);
var ospec = (function (){var or__21686__auto__ = cljs.spec.test.alpha.instrument_choose_spec(spec,s,opts);
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
throw cljs.spec.test.alpha.no_fspec(v,spec);
}
})();
var ofn = cljs.spec.test.alpha.instrument_choose_fn(to_wrap,ospec,s,opts);
var checked = cljs.spec.test.alpha.spec_checking_fn(v,ofn,ospec);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.test.alpha.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",(1604651272)),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),checked], null));

return checked;
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",(756550473),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",(2069539054),null),"cljs/spec/test/alpha.cljs",(21),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.unstrument_1_STAR_ = (function cljs$spec$test$alpha$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
if(cljs.core.truth_(temp__21177__auto__)){
var map__3429 = temp__21177__auto__;
var map__3429__$1 = ((((!((map__3429 == null)))?((((map__3429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3429):map__3429);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3429__$1,new cljs.core.Keyword(null,"raw","raw",(1604651272)));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3429__$1,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref(v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.unstrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha","unstrument-1*","cljs.spec.test.alpha/unstrument-1*",(1286793190),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"unstrument-1*","unstrument-1*",(-1571862375),null),"cljs/spec/test/alpha.cljs",(21),(1),(150),(150),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.unstrument_1_STAR_)?cljs.spec.test.alpha.unstrument_1_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.fn_spec_name_QMARK_;},new cljs.core.Symbol("cljs.spec.test.alpha","fn-spec-name?","cljs.spec.test.alpha/fn-spec-name?",(-1964234377),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"fn-spec-name?","fn-spec-name?",(883935438),null),"cljs/spec/test/alpha.cljs",(21),(1),(159),(159),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.fn_spec_name_QMARK_)?cljs.spec.test.alpha.fn_spec_name_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.collectionize = (function cljs$spec$test$alpha$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__22880__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.collectionize;},new cljs.core.Symbol("cljs.spec.test.alpha","collectionize","cljs.spec.test.alpha/collectionize",(595318908),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"collectionize","collectionize",(2042394887),null),"cljs/spec/test/alpha.cljs",(21),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.collectionize)?cljs.spec.test.alpha.collectionize.cljs$lang$test:null)])));})()
;
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
(function (){
cljs.spec.test.alpha.instrumentable_syms = (function cljs$spec$test$alpha$instrumentable_syms(var_args){
var G__3432 = arguments.length;
switch (G__3432) {
case (0):
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.instrumentable_syms;},new cljs.core.Symbol("cljs.spec.test.alpha","instrumentable-syms","cljs.spec.test.alpha/instrumentable-syms",(1088645904),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrumentable-syms","instrumentable-syms",(891325833),null),"cljs/spec/test/alpha.cljs",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(169),(169),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per instrument, returns the set of syms\nthat can be instrumented.",(cljs.core.truth_(cljs.spec.test.alpha.instrumentable_syms)?cljs.spec.test.alpha.instrumentable_syms.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error(["Assert failed: ","instrument :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha.fn_spec_name_QMARK_,cljs.core.keys(cljs.spec.alpha.registry())),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",(1339145807)).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys(new cljs.core.Keyword(null,"replace","replace",(-786587770)).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.alpha.instrumentable_syms.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.spec.test.alpha.instrumentable_syms;},new cljs.core.Symbol("cljs.spec.test.alpha","instrumentable-syms","cljs.spec.test.alpha/instrumentable-syms",(1088645904),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"instrumentable-syms","instrumentable-syms",(891325833),null),"cljs/spec/test/alpha.cljs",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(169),(169),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per instrument, returns the set of syms\nthat can be instrumented.",(cljs.core.truth_(cljs.spec.test.alpha.instrumentable_syms)?cljs.spec.test.alpha.instrumentable_syms.cljs$lang$test:null)]));
(function (){
cljs.spec.test.alpha.explain_check = (function cljs$spec$test$alpha$explain_check(args,spec,v,role){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Specification-based check failed",(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",(78409593)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.test.alpha","val","cljs.spec.test.alpha/val",(1634694485)),v,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592)),new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547))], 0))));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.explain_check;},new cljs.core.Symbol("cljs.spec.test.alpha","explain-check","cljs.spec.test.alpha/explain-check",(151060445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"explain-check","explain-check",(-1497031322),null),"cljs/spec/test/alpha.cljs",(21),(1),(182),(182),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"role","role",(903840455),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.explain_check)?cljs.spec.test.alpha.explain_check.cljs$lang$test:null)])));})()
;
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
(function (){
cljs.spec.test.alpha.check_call = (function cljs$spec$test$alpha$check_call(f,specs,args){
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",(-1220295119)))){
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),args,new cljs.core.Keyword(null,"args","args",(1315556576)));
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cret,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",(-1220295119)))){
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs),ret,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
} else {
if(cljs.core.truth_((function (){var and__21660__auto__ = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__21660__auto__)){
var and__21660__auto____$1 = new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__21660__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__21660__auto____$1;
}
} else {
return and__21660__auto__;
}
})())){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null)))){
return true;
} else {
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null),new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
}
} else {
return true;
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.check_call;},new cljs.core.Symbol("cljs.spec.test.alpha","check-call","cljs.spec.test.alpha/check-call",(-1705052406),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"check-call","check-call",(1880297649),null),"cljs/spec/test/alpha.cljs",(18),(1),(192),(192),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Returns true if call passes specs, otherwise *returns* an exception\nwith explain-data + ::s/failure.",(cljs.core.truth_(cljs.spec.test.alpha.check_call)?cljs.spec.test.alpha.check_call.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.quick_check = (function cljs$spec$test$alpha$quick_check(f,specs,p__3434){
var map__3435 = p__3434;
var map__3435__$1 = ((((!((map__3435 == null)))?((((map__3435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3435):map__3435);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3435__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3435__$1,new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",(-1773872533)));
var map__3437 = opts;
var map__3437__$1 = ((((!((map__3437 == null)))?((((map__3437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3437):map__3437);
var num_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3437__$1,new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),(1000));
var g = (function (){try{return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e3439){if((e3439 instanceof Error)){
var t = e3439;
return t;
} else {
throw e3439;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",(1415092211)),g], null);
} else {
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__3437,map__3437__$1,num_tests,g,map__3435,map__3435__$1,gen,opts){
return (function (p1__252_SHARP_){
return cljs.spec.test.alpha.check_call(f,specs,p1__252_SHARP_);
});})(map__3437,map__3437__$1,num_tests,g,map__3435,map__3435__$1,gen,opts))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.spec.gen.alpha.quick_check,num_tests,prop,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",(101067110),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"quick-check","quick-check",(1555674831),null),"cljs/spec/test/alpha.cljs",(19),(1),(209),(209),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",(-1773872533))], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)])));})()
;
/**
 * Builds spec result map.
 */
(function (){
cljs.spec.test.alpha.make_check_result = (function cljs$spec$test$alpha$make_check_result(check_sym,spec,test_check_ret){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",(347520401)),spec,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960)),test_check_ret], null),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)),check_sym], null):null),(function (){var temp__21177__auto__ = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__21177__auto__)){
var result = temp__21177__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",(720415879)),result], null);
}
} else {
return null;
}
})(),(function (){var temp__21177__auto__ = new cljs.core.Keyword(null,"shrunk","shrunk",(-2041664412)).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__21177__auto__)){
var shrunk = temp__21177__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",(720415879)),new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})()], 0));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",(-410209472),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"make-check-result","make-check-result",(1237455097),null),"cljs/spec/test/alpha.cljs",(25),(1),(218),(218),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",(-1945701567),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",(-1478657888),null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.validate_check_opts = (function cljs$spec$test$alpha$validate_check_opts(opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error(["Assert failed: ","check :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.validate_check_opts;},new cljs.core.Symbol("cljs.spec.test.alpha","validate-check-opts","cljs.spec.test.alpha/validate-check-opts",(524905204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"validate-check-opts","validate-check-opts",(-1525970849),null),"cljs/spec/test/alpha.cljs",(27),(1),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.validate_check_opts)?cljs.spec.test.alpha.validate_check_opts.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.failure_type = (function cljs$spec$test$alpha$failure_type(x){
return new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592)).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.failure_type;},new cljs.core.Symbol("cljs.spec.test.alpha","failure-type","cljs.spec.test.alpha/failure-type",(1015560847),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"failure-type","failure-type",(-682927264),null),"cljs/spec/test/alpha.cljs",(20),(1),(236),(236),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.failure_type)?cljs.spec.test.alpha.failure_type.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha.unwrap_failure = (function cljs$spec$test$alpha$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(x))){
return cljs.core.ex_data(x);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.unwrap_failure;},new cljs.core.Symbol("cljs.spec.test.alpha","unwrap-failure","cljs.spec.test.alpha/unwrap-failure",(-1251197046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"unwrap-failure","unwrap-failure",(1269733677),null),"cljs/spec/test/alpha.cljs",(22),(1),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.unwrap_failure)?cljs.spec.test.alpha.unwrap_failure.cljs$lang$test:null)])));})()
;
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
(function (){
cljs.spec.test.alpha.result_type = (function cljs$spec$test$alpha$result_type(ret){
var failure = new cljs.core.Keyword(null,"failure","failure",(720415879)).cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return new cljs.core.Keyword(null,"check-passed","check-passed",(1505510820));
} else {
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(failure))){
return cljs.spec.test.alpha.failure_type(failure);
} else {
return new cljs.core.Keyword(null,"check-threw","check-threw",(-1050428963));

}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.result_type;},new cljs.core.Symbol("cljs.spec.test.alpha","result-type","cljs.spec.test.alpha/result-type",(1292800251),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"result-type","result-type",(658518300),null),"cljs/spec/test/alpha.cljs",(19),(1),(246),(246),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null)], null)),"Returns the type of the check result. This can be any of the\n::s/failure keywords documented in 'check', or:\n\n  :check-passed   all checked fn returns conformed\n  :check-threw    checked fn threw an exception",(cljs.core.truth_(cljs.spec.test.alpha.result_type)?cljs.spec.test.alpha.result_type.cljs$lang$test:null)])));})()
;
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
(function (){
cljs.spec.test.alpha.abbrev_result = (function cljs$spec$test$alpha$abbrev_result(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"failure","failure",(720415879)).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960))),new cljs.core.Keyword(null,"spec","spec",(347520401)),cljs.spec.alpha.describe),new cljs.core.Keyword(null,"failure","failure",(720415879)),cljs.spec.test.alpha.unwrap_failure);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"spec","spec",(347520401)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960))], 0));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.abbrev_result;},new cljs.core.Symbol("cljs.spec.test.alpha","abbrev-result","cljs.spec.test.alpha/abbrev-result",(2032331604),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"abbrev-result","abbrev-result",(-1562376129),null),"cljs/spec/test/alpha.cljs",(20),(1),(259),(259),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Given a check result, returns an abbreviated version\nsuitable for summary use.",(cljs.core.truth_(cljs.spec.test.alpha.abbrev_result)?cljs.spec.test.alpha.abbrev_result.cljs$lang$test:null)])));})()
;
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
(function (){
cljs.spec.test.alpha.summarize_results = (function cljs$spec$test$alpha$summarize_results(var_args){
var G__3441 = arguments.length;
switch (G__3441) {
case (1):
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha.summarize_results;},new cljs.core.Symbol("cljs.spec.test.alpha","summarize-results","cljs.spec.test.alpha/summarize-results",(367661425),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"summarize-results","summarize-results",(-1087802648),null),"cljs/spec/test/alpha.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(269),(269),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),"Given a collection of check-results, e.g. from 'check', pretty\nprints the summary-result (default abbrev-result) of each.\n\nReturns a map with :total, the total number of results, plus a\nkey with a count for each different :type of result.",(cljs.core.truth_(cljs.spec.test.alpha.summarize_results)?cljs.spec.test.alpha.summarize_results.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2(check_results,cljs.spec.test.alpha.abbrev_result);
});

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (summary,result){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((summary_result.cljs$core$IFn$_invoke$arity$1 ? summary_result.cljs$core$IFn$_invoke$arity$1(result) : summary_result(result)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"total","total",(1916810418)),cljs.core.inc),cljs.spec.test.alpha.result_type(result),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",(1916810418)),(0)], null),check_results);
});

cljs.spec.test.alpha.summarize_results.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.spec.test.alpha.summarize_results;},new cljs.core.Symbol("cljs.spec.test.alpha","summarize-results","cljs.spec.test.alpha/summarize-results",(367661425),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",(-1221684901),null),new cljs.core.Symbol(null,"summarize-results","summarize-results",(-1087802648),null),"cljs/spec/test/alpha.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(269),(269),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),"Given a collection of check-results, e.g. from 'check', pretty\nprints the summary-result (default abbrev-result) of each.\n\nReturns a map with :total, the total number of results, plus a\nkey with a count for each different :type of result.",(cljs.core.truth_(cljs.spec.test.alpha.summarize_results)?cljs.spec.test.alpha.summarize_results.cljs$lang$test:null)]));
