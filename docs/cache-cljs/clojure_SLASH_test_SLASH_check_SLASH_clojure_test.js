goog.provide("clojure.test.check.clojure_test");
(function (){
clojure.test.check.clojure_test.assert_check = (function clojure$test$check$clojure_test$assert_check(p__427){
var map__431 = p__427;
var map__431__$1 = ((((!((map__431 == null)))?((((map__431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__431):map__431);
var m = map__431__$1;
var result = cljs.core.get.call(null,map__431__$1,new cljs.core.Keyword(null,"result","result",(1415092211)));
cljs.core.prn.call(null,m);

if(cljs.core.truth_(clojure.test.check.impl.exception_like_QMARK_.call(null,result))){
throw result;
} else {
try{var value__39__auto__ = result;
if(cljs.core.truth_(value__39__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Symbol(null,"result","result",(-1239343558),null),new cljs.core.Keyword(null,"actual","actual",(107306363)),value__39__auto__,new cljs.core.Keyword(null,"message","message",(-406056002)),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Symbol(null,"result","result",(-1239343558),null),new cljs.core.Keyword(null,"actual","actual",(107306363)),value__39__auto__,new cljs.core.Keyword(null,"message","message",(-406056002)),null], null));
}

return value__39__auto__;
}catch (e433){var t__46__auto__ = e433;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Symbol(null,"result","result",(-1239343558),null),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__46__auto__,new cljs.core.Keyword(null,"message","message",(-406056002)),null], null));
}}
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.assert_check;},new cljs.core.Symbol("clojure.test.check.clojure-test","assert-check","clojure.test.check.clojure-test/assert-check",(-1286172103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"assert-check","assert-check",(-414389292),null),"clojure/test/check/clojure_test.cljc",(19),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",(-1239343558),null)], null)], null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.assert_check)?clojure.test.check.clojure_test.assert_check.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.clojure_test._STAR_default_test_count_STAR_ = (100); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test._STAR_default_test_count_STAR_;},new cljs.core.Symbol("clojure.test.check.clojure-test","*default-test-count*","clojure.test.check.clojure-test/*default-test-count*",(1440119710),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"*default-test-count*","*default-test-count*",(30658913),null),"clojure/test/check/clojure_test.cljc",(36),(1),true,(23),(23),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.clojure_test._STAR_default_test_count_STAR_)?clojure.test.check.clojure_test._STAR_default_test_count_STAR_.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.clojure_test.process_options = (function clojure$test$check$clojure_test$process_options(options){
if((options == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null);
} else {
if(typeof options === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),options], null);
} else {
if(cljs.core.map_QMARK_.call(null,options)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),clojure.test.check.clojure_test._STAR_default_test_count_STAR_);
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid defspec options: "),cljs.core.str(cljs.core.pr_str.call(null,options))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bad-options","bad-options",(-1002783472)),options], null));

}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.process_options;},new cljs.core.Symbol("clojure.test.check.clojure-test","process-options","clojure.test.check.clojure-test/process-options",(-1863241522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"process-options","process-options",(-855914053),null),"clojure/test/check/clojure_test.cljc",(22),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.process_options)?clojure.test.check.clojure_test.process_options.cljs$lang$test:null)])));})()
;
/**
 * Controls whether property trials should be reported via clojure.test/report.
 *   Valid values include:
 * 
 *   * false - no reporting of trials (default)
 *   * a function - will be passed a clojure.test/report-style map containing
 *   :clojure.test.check/property and :clojure.test.check/trial slots
 *   * true - provides quickcheck-style trial reporting (dots) via
 *   `trial-report-dots`
 * 
 *   (Note that all reporting requires running `quick-check` within the scope of a
 *   clojure.test run (via `test-ns`, `test-all-vars`, etc.)
 * 
 *   Reporting functions offered by clojure.test.check include `trial-report-dots` and
 *   `trial-report-periodic` (which prints more verbose trial progress information
 *   every `*trial-report-period*` milliseconds.
 */
(function (){
clojure.test.check.clojure_test._STAR_report_trials_STAR_ = false; return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test._STAR_report_trials_STAR_;},new cljs.core.Symbol("clojure.test.check.clojure-test","*report-trials*","clojure.test.check.clojure-test/*report-trials*",(676213732),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"*report-trials*","*report-trials*",(-1807111663),null),"clojure/test/check/clojure_test.cljc",(31),(1),true,(65),(65),cljs.core.List.EMPTY,"Controls whether property trials should be reported via clojure.test/report.\n  Valid values include:\n\n  * false - no reporting of trials (default)\n  * a function - will be passed a clojure.test/report-style map containing\n  :clojure.test.check/property and :clojure.test.check/trial slots\n  * true - provides quickcheck-style trial reporting (dots) via\n  `trial-report-dots`\n\n  (Note that all reporting requires running `quick-check` within the scope of a\n  clojure.test run (via `test-ns`, `test-all-vars`, etc.)\n\n  Reporting functions offered by clojure.test.check include `trial-report-dots` and\n  `trial-report-periodic` (which prints more verbose trial progress information\n  every `*trial-report-period*` milliseconds.",(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_trials_STAR_)?clojure.test.check.clojure_test._STAR_report_trials_STAR_.cljs$lang$test:null)])));})()
;
/**
 * If true, a verbose report of the property being tested, the
 *   failing return value, and the arguments provoking that failure is emitted
 *   prior to the start of the shrinking search.
 */
(function (){
clojure.test.check.clojure_test._STAR_report_shrinking_STAR_ = false; return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test._STAR_report_shrinking_STAR_;},new cljs.core.Symbol("clojure.test.check.clojure-test","*report-shrinking*","clojure.test.check.clojure-test/*report-shrinking*",(1697185391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"*report-shrinking*","*report-shrinking*",(-786038352),null),"clojure/test/check/clojure_test.cljc",(34),(1),true,(83),(83),cljs.core.List.EMPTY,"If true, a verbose report of the property being tested, the\n  failing return value, and the arguments provoking that failure is emitted\n  prior to the start of the shrinking search.",(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_)?clojure.test.check.clojure_test._STAR_report_shrinking_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Milliseconds between reports emitted by `trial-report-periodic`.
 */
(function (){
clojure.test.check.clojure_test._STAR_trial_report_period_STAR_ = (10000); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test._STAR_trial_report_period_STAR_;},new cljs.core.Symbol("clojure.test.check.clojure-test","*trial-report-period*","clojure.test.check.clojure-test/*trial-report-period*",(-1541173944),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"*trial-report-period*","*trial-report-period*",(1347949627),null),"clojure/test/check/clojure_test.cljc",(37),(1),true,(89),(89),cljs.core.List.EMPTY,"Milliseconds between reports emitted by `trial-report-periodic`.",(cljs.core.truth_(clojure.test.check.clojure_test._STAR_trial_report_period_STAR_)?clojure.test.check.clojure_test._STAR_trial_report_period_STAR_.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.clojure_test.last_trial_report = cljs.core.atom.call(null,(0)); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.last_trial_report;},new cljs.core.Symbol("clojure.test.check.clojure-test","last-trial-report","clojure.test.check.clojure-test/last-trial-report",(-1674889311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"last-trial-report","last-trial-report",(1238675196),null),"clojure/test/check/clojure_test.cljc",(33),(1),(93),(93),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.clojure_test.last_trial_report)?clojure.test.check.clojure_test.last_trial_report.cljs$lang$test:null)])));})()
;
var begin_test_var_method_434 = cljs.core.get_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",(-908571100))], null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword(null,"begin-test","begin-test",(1831272774))], null),((function (begin_test_var_method_434){
return (function (m){
cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,clojure.test.check.impl.get_current_time_millis.call(null));

if(cljs.core.truth_(begin_test_var_method_434)){
return begin_test_var_method_434.call(null,m);
} else {
return null;
}
});})(begin_test_var_method_434))
);
(function (){
clojure.test.check.clojure_test.get_property_name = (function clojure$test$check$clojure_test$get_property_name(p__435){
var map__438 = p__435;
var map__438__$1 = ((((!((map__438 == null)))?((((map__438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__438):map__438);
var report_map = map__438__$1;
var property_fun = cljs.core.get.call(null,map__438__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",(1356517781)));
var or__20817__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,property_fun));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.test.testing_vars_str.call(null,report_map);
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.get_property_name;},new cljs.core.Symbol("clojure.test.check.clojure-test","get-property-name","clojure.test.check.clojure-test/get-property-name",(562087279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"get-property-name","get-property-name",(-1651682406),null),"clojure/test/check/clojure_test.cljc",(25),(1),(102),(102),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"report-map","report-map",(816877897),null),new cljs.core.Symbol(null,"property-fun","property-fun",(-98712646),null),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",(1356517781))], null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.get_property_name)?clojure.test.check.clojure_test.get_property_name.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.clojure_test.with_test_out_STAR_ = (function clojure$test$check$clojure_test$with_test_out_STAR_(f){
return f.call(null);
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.with_test_out_STAR_;},new cljs.core.Symbol("clojure.test.check.clojure-test","with-test-out*","clojure.test.check.clojure-test/with-test-out*",(-1353853146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"with-test-out*","with-test-out*",(55078517),null),"clojure/test/check/clojure_test.cljc",(21),(1),(106),(106),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.with_test_out_STAR_)?clojure.test.check.clojure_test.with_test_out_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a verbose
 *   status every `*trial-report-period*` milliseconds, like this one:
 * 
 *   Passing trial 3286 / 5000 for (your-test-var-name-here) (:)
 */
(function (){
clojure.test.check.clojure_test.trial_report_periodic = (function clojure$test$check$clojure_test$trial_report_periodic(m){
var t = clojure.test.check.impl.get_current_time_millis.call(null);
if(((t - clojure.test.check.clojure_test._STAR_trial_report_period_STAR_) > cljs.core.deref.call(null,clojure.test.check.clojure_test.last_trial_report))){
clojure.test.check.clojure_test.with_test_out_STAR_.call(null,((function (t){
return (function (){
return cljs.core.println.call(null,"Passing trial",cljs.core.first.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060)).cljs$core$IFn$_invoke$arity$1(m)),"/",cljs.core.second.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060)).cljs$core$IFn$_invoke$arity$1(m)),"for",clojure.test.check.clojure_test.get_property_name.call(null,m));
});})(t))
);

return cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,t);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.trial_report_periodic;},new cljs.core.Symbol("clojure.test.check.clojure-test","trial-report-periodic","clojure.test.check.clojure-test/trial-report-periodic",(-101258165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"trial-report-periodic","trial-report-periodic",(1307800214),null),"clojure/test/check/clojure_test.cljc",(28),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Intended to be bound as the value of `*report-trials*`; will emit a verbose\n  status every `*trial-report-period*` milliseconds, like this one:\n\n  Passing trial 3286 / 5000 for (your-test-var-name-here) (:)",(cljs.core.truth_(clojure.test.check.clojure_test.trial_report_periodic)?clojure.test.check.clojure_test.trial_report_periodic.cljs$lang$test:null)])));})()
;
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a single
 *   dot every 1000 trials reported.
 */
(function (){
clojure.test.check.clojure_test.trial_report_dots = (function clojure$test$check$clojure_test$trial_report_dots(p__440){
var map__446 = p__440;
var map__446__$1 = ((((!((map__446 == null)))?((((map__446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__446):map__446);
var vec__447 = cljs.core.get.call(null,map__446__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060)));
var so_far = cljs.core.nth.call(null,vec__447,(0),null);
var total = cljs.core.nth.call(null,vec__447,(1),null);
if((so_far > (0))){
if((cljs.core.mod.call(null,so_far,(1000)) === (0))){
cljs.core.print.call(null,".");

cljs.core.flush.call(null);
} else {
}

if((so_far === total)){
return cljs.core.println.call(null);
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.trial_report_dots;},new cljs.core.Symbol("clojure.test.check.clojure-test","trial-report-dots","clojure.test.check.clojure-test/trial-report-dots",(121827622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"trial-report-dots","trial-report-dots",(1934387795),null),"clojure/test/check/clojure_test.cljc",(24),(1),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"so-far","so-far",(-333110714),null),new cljs.core.Symbol(null,"total","total",(-737625351),null)], null),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060))], true, false)], null)),"Intended to be bound as the value of `*report-trials*`; will emit a single\n  dot every 1000 trials reported.",(cljs.core.truth_(clojure.test.check.clojure_test.trial_report_dots)?clojure.test.check.clojure_test.trial_report_dots.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060))], null),(function (m){
var temp__19834__auto__ = (function (){var and__20770__auto__ = clojure.test.check.clojure_test._STAR_report_trials_STAR_;
if(cljs.core.truth_(and__20770__auto__)){
if(clojure.test.check.clojure_test._STAR_report_trials_STAR_ === true){
return clojure.test.check.clojure_test.trial_report_dots;
} else {
return clojure.test.check.clojure_test._STAR_report_trials_STAR_;
}
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(temp__19834__auto__)){
var trial_report_fn = temp__19834__auto__;
return trial_report_fn.call(null,m);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",(-1581405322)),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",(372289399))], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_)){
return clojure.test.check.clojure_test.with_test_out_STAR_.call(null,(function (){
return cljs.core.println.call(null,"Shrinking",clojure.test.check.clojure_test.get_property_name.call(null,m),"starting with parameters",cljs.core.pr_str.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",(1851720992)).cljs$core$IFn$_invoke$arity$1(m)));
}));
} else {
return null;
}
}));
(function (){
clojure.test.check.clojure_test.report_trial = (function clojure$test$check$clojure_test$report_trial(property_fun,so_far,num_tests){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [so_far,num_tests], null),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",(866433060)),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",(1356517781)),property_fun], null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.report_trial;},new cljs.core.Symbol("clojure.test.check.clojure-test","report-trial","clojure.test.check.clojure-test/report-trial",(1745454164),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"report-trial","report-trial",(-1005835007),null),"clojure/test/check/clojure_test.cljc",(19),(1),(149),(149),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"property-fun","property-fun",(-98712646),null),new cljs.core.Symbol(null,"so-far","so-far",(-333110714),null),new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.report_trial)?clojure.test.check.clojure_test.report_trial.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.clojure_test.report_failure = (function clojure$test$check$clojure_test$report_failure(property_fun,result,trial_number,failing_params){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",(1851720992)),cljs.core.vec.call(null,failing_params),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",(372289399)),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",(1356517781)),property_fun], null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.clojure_test.report_failure;},new cljs.core.Symbol("clojure.test.check.clojure-test","report-failure","clojure.test.check.clojure-test/report-failure",(-1947420800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",(-1989044715),null),new cljs.core.Symbol(null,"report-failure","report-failure",(1608720605),null),"clojure/test/check/clojure_test.cljc",(21),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"property-fun","property-fun",(-98712646),null),new cljs.core.Symbol(null,"result","result",(-1239343558),null),new cljs.core.Symbol(null,"trial-number","trial-number",(-892379080),null),new cljs.core.Symbol(null,"failing-params","failing-params",(-30182774),null)], null)),null,(cljs.core.truth_(clojure.test.check.clojure_test.report_failure)?clojure.test.check.clojure_test.report_failure.cljs$lang$test:null)])));})()
;
