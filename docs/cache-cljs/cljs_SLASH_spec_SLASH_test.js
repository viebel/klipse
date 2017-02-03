goog.provide("cljs.spec.test");
(function (){
cljs.spec.test.distinct_by = (function cljs$spec$test$distinct_by(f,coll){
var step = (function cljs$spec$test$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__340,seen__$1){
while(true){
var vec__341 = p__340;
var x = cljs.core.nth.call(null,vec__341,(0),null);
var xs__$1 = vec__341;
var temp__22186__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__22186__auto__){
var s = temp__22186__auto__;
var v = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v)){
var G__344 = cljs.core.rest.call(null,s);
var G__345 = seen__$1;
p__340 = G__344;
seen__$1 = G__345;
continue;
} else {
return cljs.core.cons.call(null,x,cljs$spec$test$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.distinct_by;},new cljs.core.Symbol("cljs.spec.test","distinct-by","cljs.spec.test/distinct-by",(-887586672),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"distinct-by","distinct-by",(1138136071),null),"cljs/spec/test.cljs",(18),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),null,(cljs.core.truth_(cljs.spec.test.distinct_by)?cljs.spec.test.distinct_by.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.__GT_sym = (function cljs$spec$test$__GT_sym(x){
return cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.__GT_sym;},new cljs.core.Symbol("cljs.spec","->sym","cljs.spec/->sym",(-246461561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec","cljs.spec",(-1965249603),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/spec.cljs",(13),(1),(305),(305),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.__GT_sym)?cljs.spec.__GT_sym.cljs$lang$test:null)]))).call(null,x);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.__GT_sym;},new cljs.core.Symbol("cljs.spec.test","->sym","cljs.spec.test/->sym",(-1594395307),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"cljs/spec/test.cljs",(12),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.__GT_sym)?cljs.spec.test.__GT_sym.cljs$lang$test:null)])));})()
;
/**
 * if false, instrumented fns call straight through
 */
(function (){
cljs.spec.test._STAR_instrument_enabled_STAR_ = true; return (
new cljs.core.Var(function(){return cljs.spec.test._STAR_instrument_enabled_STAR_;},new cljs.core.Symbol("cljs.spec.test","*instrument-enabled*","cljs.spec.test/*instrument-enabled*",(-507441968),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"*instrument-enabled*","*instrument-enabled*",(1714892871),null),"cljs/spec/test.cljs",(46),(1),true,(41),(41),cljs.core.List.EMPTY,"if false, instrumented fns call straight through",((cljs.spec.test._STAR_instrument_enabled_STAR_)?cljs.spec.test._STAR_instrument_enabled_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.get_host_port = (function cljs$spec$test$get_host_port(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",(-1558485167)),window.location.host,new cljs.core.Keyword(null,"port","port",(1534937262)),window.location.port], null);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.get_host_port;},new cljs.core.Symbol("cljs.spec.test","get-host-port","cljs.spec.test/get-host-port",(-257136411),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"get-host-port","get-host-port",(1746820170),null),"cljs/spec/test.cljs",(20),(1),(45),(45),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.get_host_port)?cljs.spec.test.get_host_port.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.get_ua_product = (function cljs$spec$test$get_ua_product(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_);
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
new cljs.core.Var(function(){return cljs.spec.test.get_ua_product;},new cljs.core.Symbol("cljs.spec.test","get-ua-product","cljs.spec.test/get-ua-product",(766414619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"get-ua-product","get-ua-product",(-1436771700),null),"cljs/spec/test.cljs",(21),(1),(51),(51),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.get_ua_product)?cljs.spec.test.get_ua_product.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.get_env = (function cljs$spec$test$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",(938384227)),cljs.spec.test.get_ua_product.call(null)], null);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.get_env;},new cljs.core.Symbol("cljs.spec.test","get-env","cljs.spec.test/get-env",(580532667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"get-env","get-env",(-1412954942),null),"cljs/spec/test.cljs",(14),(1),(60),(60),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.test.get_env)?cljs.spec.test.get_env.cljs$lang$test:null)])));})()
;
/**
 * Fn-spec must include at least :args or :ret specs.
 */
(function (){
cljs.spec.test.fn_spec_QMARK_ = (function cljs$spec$test$fn_spec_QMARK_(m){
var or__23109__auto__ = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(m);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.fn_spec_QMARK_;},new cljs.core.Symbol("cljs.spec.test","fn-spec?","cljs.spec.test/fn-spec?",(-2138151428),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"fn-spec?","fn-spec?",(138154325),null),"cljs/spec/test.cljs",(16),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Fn-spec must include at least :args or :ret specs.",(cljs.core.truth_(cljs.spec.test.fn_spec_QMARK_)?cljs.spec.test.fn_spec_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.explain_data_STAR_ = (function cljs$spec$test$explain_data_STAR_(spec,v){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,v,null))){
return null;
} else {
return cljs.spec.explain_data.call(null,spec,v);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.explain_data_STAR_;},new cljs.core.Symbol("cljs.spec.test","explain-data*","cljs.spec.test/explain-data*",(596080975),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"explain-data*","explain-data*",(-1439103580),null),"cljs/spec/test.cljs",(21),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.spec.test.explain_data_STAR_)?cljs.spec.test.explain_data_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.find_caller = (function cljs$spec$test$find_caller(st){
var search_spec_fn = (function cljs$spec$test$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",(-2127255473)).cljs$core$IFn$_invoke$arity$1(frame);
var and__23067__auto__ = typeof s === 'string';
if(and__23067__auto__){
var and__23067__auto____$1 = !(clojure.string.blank_QMARK_.call(null,s));
if(and__23067__auto____$1){
return cljs.core.re_find.call(null,/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__23067__auto____$1;
}
} else {
return and__23067__auto__;
}
} else {
return null;
}
});
return cljs.core.first.call(null,cljs.core.drop_while.call(null,search_spec_fn,cljs.core.drop_while.call(null,(function (p1__36_SHARP_){
return cljs.core.not.call(null,search_spec_fn.call(null,p1__36_SHARP_));
}),st)));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.find_caller;},new cljs.core.Symbol("cljs.spec.test","find-caller","cljs.spec.test/find-caller",(-2128727543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"find-caller","find-caller",(139207056),null),"cljs/spec/test.cljs",(19),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"st","st",(-1199179941),null)], null)),null,(cljs.core.truth_(cljs.spec.test.find_caller)?cljs.spec.test.find_caller.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.spec_checking_fn = (function cljs$spec$test$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.maybe_spec;},new cljs.core.Symbol("cljs.spec","maybe-spec","cljs.spec/maybe-spec",(-1978544303),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec","cljs.spec",(-1965249603),null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",(-741366888),null),"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/spec.cljs",(18),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",(1986391440),null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.maybe_spec)?cljs.spec.maybe_spec.cljs$lang$test:null)]))).call(null,fn_spec);
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537)),conformed)){
var caller = cljs.spec.test.find_caller.call(null,cljs.stacktrace.parse_stacktrace.call(null,cljs.spec.test.get_host_port.call(null),(new Error()).stack,cljs.spec.test.get_env.call(null),null));
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",(-367019609)),args,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592)),new cljs.core.Keyword(null,"instrument","instrument",(-960698844))),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.test","caller","cljs.spec.test/caller",(189634138)),caller], null):null));
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__25829__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_351_356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_352_357 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_351_356,_STAR_print_fn_STAR_352_357,sb__25829__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__25830__auto__){
return sb__25829__auto__.append(x__25830__auto__);
});})(_STAR_print_newline_STAR_351_356,_STAR_print_fn_STAR_352_357,sb__25829__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_352_357;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_351_356;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__25829__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__353 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__358__delegate = function (args){
if(cljs.spec.test._STAR_instrument_enabled_STAR_){
var _STAR_instrument_enabled_STAR_354 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",(1315556576)),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_355 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_355;
}}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_354;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359__i = 0, G__359__a = new Array(arguments.length -  0);
while (G__359__i < G__359__a.length) {G__359__a[G__359__i] = arguments[G__359__i + 0]; ++G__359__i;}
  args = new cljs.core.IndexedSeq(G__359__a,0);
} 
return G__358__delegate.call(this,args);};
G__358.cljs$lang$maxFixedArity = 0;
G__358.cljs$lang$applyTo = (function (arglist__360){
var args = cljs.core.seq(arglist__360);
return G__358__delegate(args);
});
G__358.cljs$core$IFn$_invoke$arity$variadic = G__358__delegate;
return G__358;
})()
;})(fn_spec__$1,conform_BANG_))
;
goog.object.extend(G__353,f);

return G__353;
}); return (
new cljs.core.Var(function(){return cljs.spec.test.spec_checking_fn;},new cljs.core.Symbol("cljs.spec.test","spec-checking-fn","cljs.spec.test/spec-checking-fn",(-466418448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"spec-checking-fn","spec-checking-fn",(2105350411),null),"cljs/spec/test.cljs",(24),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"fn-spec","fn-spec",(-1940449061),null)], null)),null,(cljs.core.truth_(cljs.spec.test.spec_checking_fn)?cljs.spec.test.spec_checking_fn.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.no_fspec = (function cljs$spec$test$no_fspec(v,spec){
return cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fn at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",(-769682797)),v,new cljs.core.Keyword(null,"spec","spec",(347520401)),spec,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592)),new cljs.core.Keyword(null,"no-fspec","no-fspec",(-1763393966))], null));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.no_fspec;},new cljs.core.Symbol("cljs.spec.test","no-fspec","cljs.spec.test/no-fspec",(1911732528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"no-fspec","no-fspec",(-122862439),null),"cljs/spec/test.cljs",(16),(1),(118),(118),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null)),null,(cljs.core.truth_(cljs.spec.test.no_fspec)?cljs.spec.test.no_fspec.cljs$lang$test:null)])));})()
;
if(typeof cljs.spec.test.instrumented_vars !== 'undefined'){
} else {
(function (){
cljs.spec.test.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.test.instrumented_vars;},new cljs.core.Symbol("cljs.spec.test","instrumented-vars","cljs.spec.test/instrumented-vars",(-354656948),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrumented-vars","instrumented-vars",(1838047655),null),"cljs/spec/test.cljs",(37),(1),(123),(123),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.test.instrumented_vars)?cljs.spec.test.instrumented_vars.cljs$lang$test:null)])));})()
;
}
/**
 * Helper for instrument.
 */
(function (){
cljs.spec.test.instrument_choose_fn = (function cljs$spec$test$instrument_choose_fn(f,spec,sym,p__361){
var map__364 = p__361;
var map__364__$1 = ((((!((map__364 == null)))?((((map__364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__364):map__364);
var over = cljs.core.get.call(null,map__364__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var stub = cljs.core.get.call(null,map__364__$1,new cljs.core.Keyword(null,"stub","stub",(1339145807)));
var replace = cljs.core.get.call(null,map__364__$1,new cljs.core.Keyword(null,"replace","replace",(-786587770)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([sym], true),stub))){
return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,spec,over));
} else {
return cljs.core.get.call(null,replace,sym,f);
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.instrument_choose_fn;},new cljs.core.Symbol("cljs.spec.test","instrument-choose-fn","cljs.spec.test/instrument-choose-fn",(2047875880),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrument-choose-fn","instrument-choose-fn",(-213772669),null),"cljs/spec/test.cljs",(28),(1),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"over","over",(1833084578),null),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stub","stub",(-1315289962),null),new cljs.core.Symbol(null,"replace","replace",(853943757),null)], null)], null)], null)),"Helper for instrument.",(cljs.core.truth_(cljs.spec.test.instrument_choose_fn)?cljs.spec.test.instrument_choose_fn.cljs$lang$test:null)])));})()
;
/**
 * Helper for instrument
 */
(function (){
cljs.spec.test.instrument_choose_spec = (function cljs$spec$test$instrument_choose_spec(spec,sym,p__366){
var map__369 = p__366;
var map__369__$1 = ((((!((map__369 == null)))?((((map__369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__369):map__369);
var overrides = cljs.core.get.call(null,map__369__$1,new cljs.core.Keyword(null,"spec","spec",(347520401)));
return cljs.core.get.call(null,overrides,sym,spec);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.instrument_choose_spec;},new cljs.core.Symbol("cljs.spec.test","instrument-choose-spec","cljs.spec.test/instrument-choose-spec",(-1326627095),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrument-choose-spec","instrument-choose-spec",(674449776),null),"cljs/spec/test.cljs",(30),(1),(132),(132),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"overrides","overrides",(-915806902),null),new cljs.core.Keyword(null,"spec","spec",(347520401))], null)], null)),"Helper for instrument",(cljs.core.truth_(cljs.spec.test.instrument_choose_spec)?cljs.spec.test.instrument_choose_spec.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.instrument_1_STAR_ = (function cljs$spec$test$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.get_spec.call(null,v);
var map__373 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.instrumented_vars),v);
var map__373__$1 = ((((!((map__373 == null)))?((((map__373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__373):map__373);
var raw = cljs.core.get.call(null,map__373__$1,new cljs.core.Keyword(null,"raw","raw",(1604651272)));
var wrapped = cljs.core.get.call(null,map__373__$1,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)));
var current = cljs.core.deref.call(null,v);
var to_wrap = ((cljs.core._EQ_.call(null,wrapped,current))?raw:current);
var ospec = (function (){var or__23109__auto__ = cljs.spec.test.instrument_choose_spec.call(null,spec,s,opts);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
throw cljs.spec.test.no_fspec.call(null,v,spec);
}
})();
var ofn = cljs.spec.test.instrument_choose_fn.call(null,to_wrap,ospec,s,opts);
var checked = cljs.spec.test.spec_checking_fn.call(null,v,ofn,ospec);
cljs.core.swap_BANG_.call(null,cljs.spec.test.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",(1604651272)),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),checked], null));

return checked;
}); return (
new cljs.core.Var(function(){return cljs.spec.test.instrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test","instrument-1*","cljs.spec.test/instrument-1*",(1399929),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrument-1*","instrument-1*",(2069539054),null),"cljs/spec/test.cljs",(21),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.instrument_1_STAR_)?cljs.spec.test.instrument_1_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.unstrument_1_STAR_ = (function cljs$spec$test$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__22186__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.instrumented_vars),v);
if(cljs.core.truth_(temp__22186__auto__)){
var map__377 = temp__22186__auto__;
var map__377__$1 = ((((!((map__377 == null)))?((((map__377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377):map__377);
var raw = cljs.core.get.call(null,map__377__$1,new cljs.core.Keyword(null,"raw","raw",(1604651272)));
var wrapped = cljs.core.get.call(null,map__377__$1,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)));
cljs.core.swap_BANG_.call(null,cljs.spec.test.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
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
new cljs.core.Var(function(){return cljs.spec.test.unstrument_1_STAR_;},new cljs.core.Symbol("cljs.spec.test","unstrument-1*","cljs.spec.test/unstrument-1*",(700275510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"unstrument-1*","unstrument-1*",(-1571862375),null),"cljs/spec/test.cljs",(21),(1),(150),(150),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.spec.test.unstrument_1_STAR_)?cljs.spec.test.unstrument_1_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.fn_spec_name_QMARK_ = (function cljs$spec$test$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.fn_spec_name_QMARK_;},new cljs.core.Symbol("cljs.spec.test","fn-spec-name?","cljs.spec.test/fn-spec-name?",(-1344668249),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"fn-spec-name?","fn-spec-name?",(883935438),null),"cljs/spec/test.cljs",(21),(1),(159),(159),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.spec.test.fn_spec_name_QMARK_)?cljs.spec.test.fn_spec_name_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.collectionize = (function cljs$spec$test$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__25689__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.collectionize;},new cljs.core.Symbol("cljs.spec.test","collectionize","cljs.spec.test/collectionize",(-28412500),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"collectionize","collectionize",(2042394887),null),"cljs/spec/test.cljs",(21),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.collectionize)?cljs.spec.test.collectionize.cljs$lang$test:null)])));})()
;
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
(function (){
cljs.spec.test.instrumentable_syms = (function cljs$spec$test$instrumentable_syms(var_args){
var args379 = [];
var len__25946__auto___382 = arguments.length;
var i__25947__auto___383 = (0);
while(true){
if((i__25947__auto___383 < len__25946__auto___382)){
args379.push((arguments[i__25947__auto___383]));

var G__384 = (i__25947__auto___383 + (1));
i__25947__auto___383 = G__384;
continue;
} else {
}
break;
}

var G__381 = args379.length;
switch (G__381) {
case (0):
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args379.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.instrumentable_syms;},new cljs.core.Symbol("cljs.spec.test","instrumentable-syms","cljs.spec.test/instrumentable-syms",(-1114210272),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrumentable-syms","instrumentable-syms",(891325833),null),"cljs/spec/test.cljs",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(169),(169),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per instrument, returns the set of syms\nthat can be instrumented.",(cljs.core.truth_(cljs.spec.test.instrumentable_syms)?cljs.spec.test.instrumentable_syms.cljs$lang$test:null)])));})()
;

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.instrumentable_syms.call(null,null);
});

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("instrument :gen expects ident keys"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? ident? (keys (:gen opts)))")].join('')));
}

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,cljs.spec.test.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.spec.registry.call(null))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",(1339145807)).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys.call(null,new cljs.core.Keyword(null,"replace","replace",(-786587770)).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.instrumentable_syms.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.spec.test.instrumentable_syms;},new cljs.core.Symbol("cljs.spec.test","instrumentable-syms","cljs.spec.test/instrumentable-syms",(-1114210272),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"instrumentable-syms","instrumentable-syms",(891325833),null),"cljs/spec/test.cljs",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(169),(169),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per instrument, returns the set of syms\nthat can be instrumented.",(cljs.core.truth_(cljs.spec.test.instrumentable_syms)?cljs.spec.test.instrumentable_syms.cljs$lang$test:null)]));
(function (){
cljs.spec.test.explain_check = (function cljs$spec$test$explain_check(args,spec,v,role){
return cljs.core.ex_info.call(null,"Specification-based check failed",(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,v,null))?null:cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),new cljs.core.Keyword("cljs.spec.test","args","cljs.spec.test/args",(-644372375)),args,new cljs.core.Keyword("cljs.spec.test","val","cljs.spec.test/val",(2121386021)),v,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592)),new cljs.core.Keyword(null,"check-failed","check-failed",(-1316157547)))));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.explain_check;},new cljs.core.Symbol("cljs.spec.test","explain-check","cljs.spec.test/explain-check",(773263373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"explain-check","explain-check",(-1497031322),null),"cljs/spec/test.cljs",(21),(1),(182),(182),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"role","role",(903840455),null)], null)),null,(cljs.core.truth_(cljs.spec.test.explain_check)?cljs.spec.test.explain_check.cljs$lang$test:null)])));})()
;
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
(function (){
cljs.spec.test.check_call = (function cljs$spec$test$check_call(f,specs,args){
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537)))){
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),args,new cljs.core.Keyword(null,"args","args",(1315556576)));
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",(551677537)))){
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs),ret,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
} else {
if(cljs.core.truth_((function (){var and__23067__auto__ = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__23067__auto__)){
var and__23067__auto____$1 = new cljs.core.Keyword(null,"ret","ret",(-468222814)).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__23067__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__23067__auto____$1;
}
} else {
return and__23067__auto__;
}
})())){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null)))){
return true;
} else {
return cljs.spec.test.explain_check.call(null,args,new cljs.core.Keyword(null,"fn","fn",(-1175266204)).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",(1315556576)),cargs,new cljs.core.Keyword(null,"ret","ret",(-468222814)),cret], null),new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
}
} else {
return true;
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.check_call;},new cljs.core.Symbol("cljs.spec.test","check-call","cljs.spec.test/check-call",(-12510118),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"check-call","check-call",(1880297649),null),"cljs/spec/test.cljs",(18),(1),(192),(192),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Returns true if call passes specs, otherwise *returns* an exception\nwith explain-data + ::s/failure.",(cljs.core.truth_(cljs.spec.test.check_call)?cljs.spec.test.check_call.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.quick_check = (function cljs$spec$test$quick_check(f,specs,p__386){
var map__392 = p__386;
var map__392__$1 = ((((!((map__392 == null)))?((((map__392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__392):map__392);
var gen = cljs.core.get.call(null,map__392__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var opts = cljs.core.get.call(null,map__392__$1,new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",(-1773872533)));
var map__394 = opts;
var map__394__$1 = ((((!((map__394 == null)))?((((map__394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__394):map__394);
var num_tests = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),(1000));
var g = (function (){try{return cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e396){if((e396 instanceof Error)){
var t = e396;
return t;
} else {
throw e396;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",(1415092211)),g], null);
} else {
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__394,map__394__$1,num_tests,g,map__392,map__392__$1,gen,opts){
return (function (p1__37_SHARP_){
return cljs.spec.test.check_call.call(null,f,specs,p1__37_SHARP_);
});})(map__394,map__394__$1,num_tests,g,map__392,map__392__$1,gen,opts))
);
return cljs.core.apply.call(null,cljs.spec.impl.gen.quick_check,num_tests,prop,cljs.core.mapcat.call(null,cljs.core.identity,opts));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.quick_check;},new cljs.core.Symbol("cljs.spec.test","quick-check","cljs.spec.test/quick-check",(621512118),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"quick-check","quick-check",(1555674831),null),"cljs/spec/test.cljs",(19),(1),(209),(209),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",(-1773872533))], null)], null)),null,(cljs.core.truth_(cljs.spec.test.quick_check)?cljs.spec.test.quick_check.cljs$lang$test:null)])));})()
;
/**
 * Builds spec result map.
 */
(function (){
cljs.spec.test.make_check_result = (function cljs$spec$test$make_check_result(check_sym,spec,test_check_ret){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",(347520401)),spec,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960)),test_check_ret], null),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)),check_sym], null):null),(function (){var temp__22186__auto__ = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__22186__auto__)){
var result = temp__22186__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",(720415879)),result], null);
}
} else {
return null;
}
})(),(function (){var temp__22186__auto__ = new cljs.core.Keyword(null,"shrunk","shrunk",(-2041664412)).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__22186__auto__)){
var shrunk = temp__22186__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",(720415879)),new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})());
}); return (
new cljs.core.Var(function(){return cljs.spec.test.make_check_result;},new cljs.core.Symbol("cljs.spec.test","make-check-result","cljs.spec.test/make-check-result",(-1032843376),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"make-check-result","make-check-result",(1237455097),null),"cljs/spec/test.cljs",(25),(1),(218),(218),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",(-1945701567),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",(-1478657888),null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.make_check_result)?cljs.spec.test.make_check_result.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.validate_check_opts = (function cljs$spec$test$validate_check_opts(opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("check :gen expects ident keys"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? ident? (keys (:gen opts)))")].join('')));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.validate_check_opts;},new cljs.core.Symbol("cljs.spec.test","validate-check-opts","cljs.spec.test/validate-check-opts",(1019059492),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"validate-check-opts","validate-check-opts",(-1525970849),null),"cljs/spec/test.cljs",(27),(1),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.validate_check_opts)?cljs.spec.test.validate_check_opts.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.failure_type = (function cljs$spec$test$failure_type(x){
return new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592)).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.failure_type;},new cljs.core.Symbol("cljs.spec.test","failure-type","cljs.spec.test/failure-type",(1604143071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"failure-type","failure-type",(-682927264),null),"cljs/spec/test.cljs",(20),(1),(236),(236),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.failure_type)?cljs.spec.test.failure_type.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.unwrap_failure = (function cljs$spec$test$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.failure_type.call(null,x))){
return cljs.core.ex_data.call(null,x);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.unwrap_failure;},new cljs.core.Symbol("cljs.spec.test","unwrap-failure","cljs.spec.test/unwrap-failure",(-798976838),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"unwrap-failure","unwrap-failure",(1269733677),null),"cljs/spec/test.cljs",(22),(1),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.unwrap_failure)?cljs.spec.test.unwrap_failure.cljs$lang$test:null)])));})()
;
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
(function (){
cljs.spec.test.result_type = (function cljs$spec$test$result_type(ret){
var failure = new cljs.core.Keyword(null,"failure","failure",(720415879)).cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return new cljs.core.Keyword(null,"check-passed","check-passed",(1505510820));
} else {
if(cljs.core.truth_(cljs.spec.test.failure_type.call(null,failure))){
return cljs.spec.test.failure_type.call(null,failure);
} else {
return new cljs.core.Keyword(null,"check-threw","check-threw",(-1050428963));

}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.result_type;},new cljs.core.Symbol("cljs.spec.test","result-type","cljs.spec.test/result-type",(-1374532181),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"result-type","result-type",(658518300),null),"cljs/spec/test.cljs",(19),(1),(246),(246),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null)], null)),"Returns the type of the check result. This can be any of the\n::s/failure keywords documented in 'check', or:\n\n  :check-passed   all checked fn returns conformed\n  :check-threw    checked fn threw an exception",(cljs.core.truth_(cljs.spec.test.result_type)?cljs.spec.test.result_type.cljs$lang$test:null)])));})()
;
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
(function (){
cljs.spec.test.abbrev_result = (function cljs$spec$test$abbrev_result(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"failure","failure",(720415879)).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,x,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960))),new cljs.core.Keyword(null,"spec","spec",(347520401)),cljs.spec.describe),new cljs.core.Keyword(null,"failure","failure",(720415879)),cljs.spec.test.unwrap_failure);
} else {
return cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"spec","spec",(347520401)),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",(1393978960)));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.abbrev_result;},new cljs.core.Symbol("cljs.spec.test","abbrev-result","cljs.spec.test/abbrev-result",(439229572),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"abbrev-result","abbrev-result",(-1562376129),null),"cljs/spec/test.cljs",(20),(1),(259),(259),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Given a check result, returns an abbreviated version\nsuitable for summary use.",(cljs.core.truth_(cljs.spec.test.abbrev_result)?cljs.spec.test.abbrev_result.cljs$lang$test:null)])));})()
;
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
(function (){
cljs.spec.test.summarize_results = (function cljs$spec$test$summarize_results(var_args){
var args397 = [];
var len__25946__auto___400 = arguments.length;
var i__25947__auto___401 = (0);
while(true){
if((i__25947__auto___401 < len__25946__auto___400)){
args397.push((arguments[i__25947__auto___401]));

var G__402 = (i__25947__auto___401 + (1));
i__25947__auto___401 = G__402;
continue;
} else {
}
break;
}

var G__399 = args397.length;
switch (G__399) {
case (1):
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args397.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.summarize_results;},new cljs.core.Symbol("cljs.spec.test","summarize-results","cljs.spec.test/summarize-results",(815744513),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"summarize-results","summarize-results",(-1087802648),null),"cljs/spec/test.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(269),(269),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),"Given a collection of check-results, e.g. from 'check', pretty\nprints the summary-result (default abbrev-result) of each.\n\nReturns a map with :total, the total number of results, plus a\nkey with a count for each different :type of result.",(cljs.core.truth_(cljs.spec.test.summarize_results)?cljs.spec.test.summarize_results.cljs$lang$test:null)])));})()
;

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.summarize_results.call(null,check_results,cljs.spec.test.abbrev_result);
});

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.call(null,(function (summary,result){
cljs.pprint.pprint.call(null,summary_result.call(null,result));

return cljs.core.update.call(null,cljs.core.update.call(null,summary,new cljs.core.Keyword(null,"total","total",(1916810418)),cljs.core.inc),cljs.spec.test.result_type.call(null,result),cljs.core.fnil.call(null,cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",(1916810418)),(0)], null),check_results);
});

cljs.spec.test.summarize_results.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.spec.test.summarize_results;},new cljs.core.Symbol("cljs.spec.test","summarize-results","cljs.spec.test/summarize-results",(815744513),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test","cljs.spec.test",(723719092),null),new cljs.core.Symbol(null,"summarize-results","summarize-results",(-1087802648),null),"cljs/spec/test.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(269),(269),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-results","check-results",(-1169977722),null),new cljs.core.Symbol(null,"summary-result","summary-result",(-138012451),null)], null)),"Given a collection of check-results, e.g. from 'check', pretty\nprints the summary-result (default abbrev-result) of each.\n\nReturns a map with :total, the total number of results, plus a\nkey with a count for each different :type of result.",(cljs.core.truth_(cljs.spec.test.summarize_results)?cljs.spec.test.summarize_results.cljs$lang$test:null)]));
