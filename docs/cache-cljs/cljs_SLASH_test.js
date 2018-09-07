goog.provide("cljs.test");
/**
 * Generates a testing environment with a reporter.
 * (empty-env) - uses the :cljs.test/default reporter.
 * (empty-env :cljs.test/pprint) - pretty prints all data structures. 
 * (empty-env reporter) - uses a reporter of your choosing.
 * 
 * To create your own reporter see cljs.test/report
 */
cljs.test.empty_env = (function cljs$test$empty_env(var_args){
var G__3209 = arguments.length;
switch (G__3209) {
case (0):
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)));
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1 = (function (reporter){
var G__3210 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0)], null),new cljs.core.Keyword(null,"testing-vars","testing-vars",(-2114769150)),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523)),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"formatter","formatter",(-483008823)),cljs.core.pr_str,new cljs.core.Keyword(null,"reporter","reporter",(-805360621)),reporter], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.test","pprint","cljs.test/pprint",(1627393641)),reporter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__3210,new cljs.core.Keyword(null,"reporter","reporter",(-805360621)),new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formatter","formatter",(-483008823)),cljs.pprint.pprint], 0));
} else {
return G__3210;
}
});

cljs.test.empty_env.cljs$lang$maxFixedArity = (1);

cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function cljs$test$get_current_env(){
var or__22217__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
}
});
cljs.test.update_current_env_BANG_ = (function cljs$test$update_current_env_BANG_(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3215 = arguments.length;
var i__23327__auto___3216 = (0);
while(true){
if((i__23327__auto___3216 < len__23326__auto___3215)){
args__23329__auto__.push((arguments[i__23327__auto___3216]));

var G__3217 = (i__23327__auto___3216 + (1));
i__23327__auto___3216 = G__3217;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,cljs.test.get_current_env(),ks,f,args);
});

cljs.test.update_current_env_BANG_.cljs$lang$maxFixedArity = (2);

cljs.test.update_current_env_BANG_.cljs$lang$applyTo = (function (seq3212){
var G__3213 = cljs.core.first(seq3212);
var seq3212__$1 = cljs.core.next(seq3212);
var G__3214 = cljs.core.first(seq3212__$1);
var seq3212__$2 = cljs.core.next(seq3212__$1);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3213,G__3214,seq3212__$2);
});

cljs.test.set_env_BANG_ = (function cljs$test$set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function cljs$test$clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
cljs.test.get_and_clear_env_BANG_ = (function cljs$test$get_and_clear_env_BANG_(){

var env = cljs.test.get_current_env();
cljs.test.clear_env_BANG_();

return env;
});
/**
 * Returns a string representation of the current test.  Renders names
 *   in *testing-vars* as a list, then the source file and line of
 *   current assertion.
 */
cljs.test.testing_vars_str = (function cljs$test$testing_vars_str(m){
var map__3218 = m;
var map__3218__$1 = ((((!((map__3218 == null)))?((((map__3218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3218):map__3218);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3218__$1,new cljs.core.Keyword(null,"file","file",(-1269645878)));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3218__$1,new cljs.core.Keyword(null,"line","line",(212345235)));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3218__$1,new cljs.core.Keyword(null,"column","column",(2078222095)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__3218,map__3218__$1,file,line,column){
return (function (p1__185_SHARP_){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__185_SHARP_));
});})(map__3218,map__3218__$1,file,line,column))
,new cljs.core.Keyword(null,"testing-vars","testing-vars",(-2114769150)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null)),")"].join('');
});
/**
 * Returns a string representation of the current test context. Joins
 *   strings in *testing-contexts* with spaces.
 */
cljs.test.testing_contexts_str = (function cljs$test$testing_contexts_str(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))));
});
/**
 * Increments the named counter in *report-counters*, a ref to a map.
 *   Does nothing if *report-counters* is nil.
 */
cljs.test.inc_report_counter_BANG_ = (function cljs$test$inc_report_counter_BANG_(name){
if(cljs.core.truth_(new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)),name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return null;
}
});
if(typeof cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.
 */
cljs.test.report = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test","report"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reporter","reporter",(-805360621)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"pass","pass",(1574159993))], null),(function (m){
return cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",(1574159993)));
}));
cljs.test.print_comparison = (function cljs$test$print_comparison(m){
var formatter_fn = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"formatter","formatter",(-483008823)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expected:",(function (){var G__3220 = new cljs.core.Keyword(null,"expected","expected",(1583670997)).cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__3220) : formatter_fn(G__3220));
})()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  actual:",(function (){var G__3221 = new cljs.core.Keyword(null,"actual","actual",(107306363)).cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__3221) : formatter_fn(G__3221));
})()], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"fail","fail",(1706214930))], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",(1706214930)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__22039__auto___3222 = new cljs.core.Keyword(null,"message","message",(-406056002)).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__22039__auto___3222)){
var message_3223 = temp__22039__auto___3222;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_3223], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"error","error",(-978969032))], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",(-978969032)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__22039__auto___3224 = new cljs.core.Keyword(null,"message","message",(-406056002)).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__22039__auto___3224)){
var message_3225 = temp__22039__auto___3224;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_3225], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null),(function (m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nRan",new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",(1574159993)).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",(1706214930)).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fail","fail",(1706214930)).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033))], null),(function (m){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nTesting",cljs.core.name(new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(m))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645))], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",(-908571100))], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"end-test-var","end-test-var",(984198545))], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",(548827253))], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"end-test-vars","end-test-vars",(-1394419713))], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function cljs$test$js_line_and_column(stack_element){

var parts = stack_element.split(":");
var cnt = cljs.core.count(parts);
if((cnt > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__3226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (2)));
var G__3227 = (10);
return parseInt(G__3226,G__3227);
})(),(function (){var G__3228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (1)));
var G__3229 = (10);
return parseInt(G__3228,G__3229);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NaN,NaN], null);
}
});
cljs.test.js_filename = (function cljs$test$js_filename(stack_element){
var output_dir = "out";
var output_dir__$1 = (function (){var G__3230 = output_dir;
if(!(clojure.string.ends_with_QMARK_(output_dir,"/"))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3230),"/"].join('');
} else {
return G__3230;
}
})();
return cljs.core.first(cljs.core.last(stack_element.split(output_dir__$1)).split(":"));
});
cljs.test.mapped_line_and_column = (function cljs$test$mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__21984__auto__ = new cljs.core.Keyword(null,"source-map","source-map",(1706252311)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(temp__21984__auto__)){
var source_map = temp__21984__auto__;
var temp__21984__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__21984__auto____$1)){
var columns = temp__21984__auto____$1;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first((function (){var temp__21984__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,(column - (1)));
if(cljs.core.truth_(temp__21984__auto____$2)){
var mapping = temp__21984__auto____$2;
return mapping;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",(-433931539)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"col","col",(-1959363084))], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function cljs$test$file_and_line(exception,depth){
var temp__21984__auto__ = (function (){var and__22202__auto__ = typeof exception.stack === 'string';
if(and__22202__auto__){
var G__3232 = exception.stack;
var G__3232__$1 = (((G__3232 == null))?null:clojure.string.split_lines(G__3232));
var G__3232__$2 = (((G__3232__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__3232__$1,depth));
if((G__3232__$2 == null)){
return null;
} else {
return clojure.string.trim(G__3232__$2);
}
} else {
return and__22202__auto__;
}
})();
if(cljs.core.truth_(temp__21984__auto__)){
var stack_element = temp__21984__auto__;
var fname = cljs.test.js_filename(stack_element);
var vec__3233 = cljs.test.js_line_and_column(stack_element);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3233,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3233,(1),null);
var vec__3236 = cljs.test.mapped_line_and_column(fname,line,column);
var fname__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3236,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3236,(1),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3236,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",(-1269645878)),fname__$1,new cljs.core.Keyword(null,"line","line",(212345235)),line__$1,new cljs.core.Keyword(null,"column","column",(2078222095)),column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",(-1269645878)),exception.fileName,new cljs.core.Keyword(null,"line","line",(212345235)),exception.lineNumber], null);
}
});
cljs.test.do_report = (function cljs$test$do_report(m){
var m__$1 = (function (){var G__3239 = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(m);
var G__3239__$1 = (((G__3239 instanceof cljs.core.Keyword))?G__3239.fqn:null);
switch (G__3239__$1) {
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.file_and_line((new Error()),(4)),m], 0));

break;
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.file_and_line(new cljs.core.Keyword(null,"actual","actual",(107306363)).cljs$core$IFn$_invoke$arity$1(m),(0)),m], 0));

break;
default:
return m;

}
})();
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs.test.report(m__$1));
});

/**
 * Marker protocol denoting CPS function to begin asynchronous
 *   testing.
 * @interface
 */
cljs.test.IAsyncTest = function(){};

/**
 * Returns whether x implements IAsyncTest.
 */
cljs.test.async_QMARK_ = (function cljs$test$async_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$test$IAsyncTest$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
}
});
/**
 * Invoke all functions in fns with no arguments. A fn can optionally
 *   return
 * 
 *   an async test - is invoked with a continuation running left fns
 * 
 *   a seq of fns tagged per block - are invoked immediately after fn
 */
cljs.test.run_block = (function cljs$test$run_block(fns){
while(true){
var temp__22039__auto__ = cljs.core.seq(fns);
if(temp__22039__auto__){
var xs__22027__auto__ = temp__22039__auto__;
var f = cljs.core.first(xs__22027__auto__);
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f());
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
var G__3242 = (function (){var d = (new cljs.core.Delay(((function (fns,obj,f,xs__22027__auto__,temp__22039__auto__){
return (function (){
var G__3243 = cljs.core.rest(fns);
return (cljs.test.run_block.cljs$core$IFn$_invoke$arity$1 ? cljs.test.run_block.cljs$core$IFn$_invoke$arity$1(G__3243) : cljs.test.run_block(G__3243));
});})(fns,obj,f,xs__22027__auto__,temp__22039__auto__))
,null));
return ((function (fns,d,obj,f,xs__22027__auto__,temp__22039__auto__){
return (function (){
if(cljs.core.realized_QMARK_(d)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Async test called done more than one time."], 0));
} else {
return cljs.core.deref(d);
}
});
;})(fns,d,obj,f,xs__22027__auto__,temp__22039__auto__))
})();
return (obj.cljs$core$IFn$_invoke$arity$1 ? obj.cljs$core$IFn$_invoke$arity$1(G__3242) : obj(G__3242));
} else {
var G__3245 = (function (){var G__3244 = cljs.core.rest(fns);
if(cljs.core.truth_(new cljs.core.Keyword("cljs.test","block?","cljs.test/block?",(686379965)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(obj,G__3244);
} else {
return G__3244;
}
})();
fns = G__3245;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Tag a seq of fns to be picked up by run-block as injected
 *   continuation.  See run-block.
 */
cljs.test.block = (function cljs$test$block(fns){
var G__3246 = fns;
if((G__3246 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__3246,cljs.core.assoc,new cljs.core.Keyword("cljs.test","block?","cljs.test/block?",(686379965)),true);
}
});
cljs.test.test_var_block_STAR_ = (function cljs$test$test_var_block_STAR_(v,t){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error("Assert failed: (instance? Var v)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",(-2114769150))], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)),new cljs.core.Keyword(null,"test","test",(577538877))], null),cljs.core.inc);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",(-908571100)),new cljs.core.Keyword(null,"var","var",(-769682797)),v], null));

try{return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t());
}catch (e3247){var e = e3247;
var G__3248 = e;
var G__3248__$1 = (((G__3248 instanceof cljs.core.Keyword))?G__3248.fqn:null);
switch (G__3248__$1) {
case "cljs.test/async-disabled":
throw "Async tests require fixtures to be specified as maps.  Testing aborted.";

break;
default:
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",(1583670997)),null,new cljs.core.Keyword(null,"actual","actual",(107306363)),e], null));

}
}}),(function (){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-var","end-test-var",(984198545)),new cljs.core.Keyword(null,"var","var",(-769682797)),v], null));

return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",(-2114769150))], null),cljs.core.rest);
})], null);
});
/**
 * Like test-var, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_var_block = (function cljs$test$test_var_block(v){
var temp__21984__auto__ = new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__21984__auto__)){
var t = temp__21984__auto__;
return cljs.test.test_var_block_STAR_(v,t);
} else {
return null;
}
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   add v to :testing-vars property of env.
 */
cljs.test.test_var = (function cljs$test$test_var(v){
return cljs.test.run_block(cljs.test.test_var_block(v));
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.default_fixture = (function cljs$test$default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f());
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.compose_fixtures = (function cljs$test$compose_fixtures(f1,f2){
return (function (g){
var G__3250 = (function (){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2(g));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__3250) : f1(G__3250));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.join_fixtures = (function cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
 * Wraps block in map-fixtures.
 */
cljs.test.wrap_map_fixtures = (function cljs$test$wrap_map_fixtures(map_fixtures,block){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"before","before",(-1633692388)),map_fixtures),block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"after","after",(594996914)),map_fixtures))], 0));
});
cljs.test.execution_strategy = (function cljs$test$execution_strategy(once,each){
var fixtures_type = (function cljs$test$execution_strategy_$_fixtures_type(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.Keyword(null,"none","none",(1333468478));
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,coll)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.every_QMARK_(cljs.core.fn_QMARK_,coll)){
return new cljs.core.Keyword(null,"fn","fn",(-1175266204));
} else {
return null;
}
}
}
});
var fixtures_types = (function cljs$test$execution_strategy_$_fixtures_types(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"none","none",(1333468478)),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fixtures_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [once,each], null))));
});
var vec__3251 = fixtures_types();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3251,(0),null);
var types = vec__3251;
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,types)){
} else {
throw (new Error(["Assert failed: ","Fixtures may not be of mixed types","\n","(not-any? nil? types)"].join('')));
}

if(((2) > cljs.core.count(types))){
} else {
throw (new Error(["Assert failed: ","fixtures specified in :once and :each must be of the same type","\n","(> 2 (count types))"].join('')));
}

var G__3255 = type;
var G__3256 = new cljs.core.Keyword(null,"async","async",(1050769601));
var fexpr__3254 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",(1371690461)),new cljs.core.Keyword(null,"async","async",(1050769601)),new cljs.core.Keyword(null,"fn","fn",(-1175266204)),new cljs.core.Keyword(null,"sync","sync",(-624148946))], null);
return (fexpr__3254.cljs$core$IFn$_invoke$arity$2 ? fexpr__3254.cljs$core$IFn$_invoke$arity$2(G__3255,G__3256) : fexpr__3254(G__3255,G__3256));
});
cljs.test.disable_async = (function cljs$test$disable_async(f){
return (function (){
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f());
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
throw new cljs.core.Keyword("cljs.test","async-disabled","cljs.test/async-disabled",(-772095377));
} else {
}

return obj;
});
});
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_vars_block = (function cljs$test$test_vars_block(vars){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3257){
var vec__3258 = p__3257;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3258,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3258,(1),null);
return ((function (vec__3258,ns,vars__$1){
return (function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167)),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",(802243977)),ns], null));
var G__3261 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__3261__$1 = (((G__3261 instanceof cljs.core.Keyword))?G__3261.fqn:null);
switch (G__3261__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",(577538877)),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1){
return (function (){
var G__3263 = ((function (each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1){
return (function (){
var seq__3264 = cljs.core.seq(vars__$1);
var chunk__3265 = null;
var count__3266 = (0);
var i__3267 = (0);
while(true){
if((i__3267 < count__3266)){
var v = chunk__3265.cljs$core$IIndexed$_nth$arity$2(null,i__3267);
var temp__22039__auto___3271 = new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__22039__auto___3271)){
var t_3272 = temp__22039__auto___3271;
var G__3268_3273 = ((function (seq__3264,chunk__3265,count__3266,i__3267,t_3272,temp__22039__auto___3271,v,each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_3272)));
});})(seq__3264,chunk__3265,count__3266,i__3267,t_3272,temp__22039__auto___3271,v,each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__3268_3273) : each_fixture_fn(G__3268_3273));
} else {
}

var G__3274 = seq__3264;
var G__3275 = chunk__3265;
var G__3276 = count__3266;
var G__3277 = (i__3267 + (1));
seq__3264 = G__3274;
chunk__3265 = G__3275;
count__3266 = G__3276;
i__3267 = G__3277;
continue;
} else {
var temp__22039__auto__ = cljs.core.seq(seq__3264);
if(temp__22039__auto__){
var seq__3264__$1 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3264__$1)){
var c__22996__auto__ = cljs.core.chunk_first(seq__3264__$1);
var G__3278 = cljs.core.chunk_rest(seq__3264__$1);
var G__3279 = c__22996__auto__;
var G__3280 = cljs.core.count(c__22996__auto__);
var G__3281 = (0);
seq__3264 = G__3278;
chunk__3265 = G__3279;
count__3266 = G__3280;
i__3267 = G__3281;
continue;
} else {
var v = cljs.core.first(seq__3264__$1);
var temp__22039__auto___3282__$1 = new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__22039__auto___3282__$1)){
var t_3283 = temp__22039__auto___3282__$1;
var G__3269_3284 = ((function (seq__3264,chunk__3265,count__3266,i__3267,t_3283,temp__22039__auto___3282__$1,v,seq__3264__$1,temp__22039__auto__,each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_3283)));
});})(seq__3264,chunk__3265,count__3266,i__3267,t_3283,temp__22039__auto___3282__$1,v,seq__3264__$1,temp__22039__auto__,each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__3269_3284) : each_fixture_fn(G__3269_3284));
} else {
}

var G__3285 = cljs.core.next(seq__3264__$1);
var G__3286 = null;
var G__3287 = (0);
var G__3288 = (0);
seq__3264 = G__3285;
chunk__3265 = G__3286;
count__3266 = G__3287;
i__3267 = G__3288;
continue;
}
} else {
return null;
}
}
break;
}
});})(each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1))
;
var fexpr__3262 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__3262.cljs$core$IFn$_invoke$arity$1 ? fexpr__3262.cljs$core$IFn$_invoke$arity$1(G__3263) : fexpr__3262(G__3263));
});})(each_fixture_fn,G__3261,G__3261__$1,env,once_fixtures,each_fixtures,vec__3258,ns,vars__$1))
], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3261__$1)].join('')));

}
})());
});
;})(vec__3258,ns,vars__$1))
}),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",(441598760)),cljs.core.meta),vars));
});
/**
 * Groups vars by their namespace and runs test-vars on them with
 *   appropriate fixtures assuming they are present in the current
 *   testing environment.
 */
cljs.test.test_vars = (function cljs$test$test_vars(vars){
return cljs.test.run_block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.test.test_vars_block(vars),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__3289 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-vars","end-test-vars",(-1394419713)),new cljs.core.Keyword(null,"vars","vars",(-2046957217)),vars], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__3289) : cljs.test.report(G__3289));
})], null)));
});
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cljs.test.successful_QMARK_ = (function cljs$test$successful_QMARK_(summary){
return ((new cljs.core.Keyword(null,"fail","fail",(1706214930)).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});
