// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.cards.test.compile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('klipse.lang.clojure');
goog.require('devcards.core');
klipse.cards.test.compile.remove_chars = (function klipse$cards$test$compile$remove_chars(s){
return clojure.string.replace.call(null,s,/\n|\s/,"");
});
klipse.cards.test.compile.a_EQ_ = (function klipse$cards$test$compile$a_EQ_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___155814 = arguments.length;
var i__9641__auto___155815 = (0);
while(true){
if((i__9641__auto___155815 < len__9640__auto___155814)){
args__9647__auto__.push((arguments[i__9641__auto___155815]));

var G__155816 = (i__9641__auto___155815 + (1));
i__9641__auto___155815 = G__155816;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.test.compile.remove_chars,args));
});

klipse.cards.test.compile.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.compile.a_EQ_.cljs$lang$applyTo = (function (seq155813){
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155813));
});

klipse.cards.test.compile.error__GT_clj = (function klipse$cards$test$compile$error__GT_clj(p__155817){
var vec__155818 = p__155817;
var status = cljs.core.nth.call(null,vec__155818,(0),null);
var error = cljs.core.nth.call(null,vec__155818,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});

klipse.cards.test.compile.success = (function klipse$cards$test$compile$success(){
return cljs.test.test_var.call(null,klipse.cards.test.compile.success.cljs$lang$var);
});
klipse.cards.test.compile.success.cljs$lang$test = (function (){

if(typeof klipse.cards.test.compile.t_klipse$cards$test$compile155821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.compile.t_klipse$cards$test$compile155821 = (function (meta155822){
this.meta155822 = meta155822;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_155823,meta155822__$1){
var self__ = this;
var _155823__$1 = this;
return (new klipse.cards.test.compile.t_klipse$cards$test$compile155821(meta155822__$1));
});


klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_155823){
var self__ = this;
var _155823__$1 = this;
return self__.meta155822;
});


klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_155947){
var state_val_155948 = (state_155947[(1)]);
if((state_val_155948 === (7))){
var inst_155840 = (state_155947[(7)]);
var inst_155850 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155851 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155852 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155853 = cljs.core.cons.call(null,inst_155852,inst_155840);
var inst_155854 = cljs.core.List.EMPTY;
var inst_155855 = cljs.core._conj.call(null,inst_155854,inst_155853);
var inst_155856 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155857 = cljs.core._conj.call(null,inst_155855,inst_155856);
var inst_155858 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155851,inst_155857,null];
var inst_155859 = cljs.core.PersistentHashMap.fromArrays(inst_155850,inst_155858);
var inst_155860 = cljs.test.do_report.call(null,inst_155859);
var state_155947__$1 = state_155947;
var statearr_155949_156141 = state_155947__$1;
(statearr_155949_156141[(2)] = inst_155860);

(statearr_155949_156141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (20))){
var inst_155920 = (state_155947[(8)]);
var inst_155923 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155924 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_155925 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_155920);
var inst_155926 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155924,inst_155925,null];
var inst_155927 = cljs.core.PersistentHashMap.fromArrays(inst_155923,inst_155926);
var inst_155928 = cljs.test.do_report.call(null,inst_155927);
var state_155947__$1 = state_155947;
var statearr_155950_156142 = state_155947__$1;
(statearr_155950_156142[(2)] = inst_155928);

(statearr_155950_156142[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (1))){
var state_155947__$1 = state_155947;
var statearr_155951_156143 = state_155947__$1;
(statearr_155951_156143[(2)] = null);

(statearr_155951_156143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155947,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_155834 = klipse.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_155947__$1 = state_155947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155947__$1,(5),inst_155834);
} else {
if((state_val_155948 === (15))){
var inst_155881 = (state_155947[(9)]);
var inst_155902 = (state_155947[(2)]);
var state_155947__$1 = (function (){var statearr_155952 = state_155947;
(statearr_155952[(10)] = inst_155902);

return statearr_155952;
})();
var statearr_155953_156144 = state_155947__$1;
(statearr_155953_156144[(2)] = inst_155881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (21))){
var inst_155920 = (state_155947[(8)]);
var inst_155930 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155931 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_155932 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155933 = cljs.core.cons.call(null,inst_155932,inst_155920);
var inst_155934 = cljs.core.List.EMPTY;
var inst_155935 = cljs.core._conj.call(null,inst_155934,inst_155933);
var inst_155936 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155937 = cljs.core._conj.call(null,inst_155935,inst_155936);
var inst_155938 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155931,inst_155937,null];
var inst_155939 = cljs.core.PersistentHashMap.fromArrays(inst_155930,inst_155938);
var inst_155940 = cljs.test.do_report.call(null,inst_155939);
var state_155947__$1 = state_155947;
var statearr_155954_156145 = state_155947__$1;
(statearr_155954_156145[(2)] = inst_155940);

(statearr_155954_156145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (13))){
var inst_155880 = (state_155947[(11)]);
var inst_155883 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155884 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_155885 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_155880);
var inst_155886 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155884,inst_155885,null];
var inst_155887 = cljs.core.PersistentHashMap.fromArrays(inst_155883,inst_155886);
var inst_155888 = cljs.test.do_report.call(null,inst_155887);
var state_155947__$1 = state_155947;
var statearr_155955_156146 = state_155947__$1;
(statearr_155955_156146[(2)] = inst_155888);

(statearr_155955_156146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (22))){
var inst_155921 = (state_155947[(12)]);
var inst_155942 = (state_155947[(2)]);
var state_155947__$1 = (function (){var statearr_155956 = state_155947;
(statearr_155956[(13)] = inst_155942);

return statearr_155956;
})();
var statearr_155957_156147 = state_155947__$1;
(statearr_155957_156147[(2)] = inst_155921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (6))){
var inst_155840 = (state_155947[(7)]);
var inst_155843 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155844 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155845 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_155840);
var inst_155846 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_155844,inst_155845,null];
var inst_155847 = cljs.core.PersistentHashMap.fromArrays(inst_155843,inst_155846);
var inst_155848 = cljs.test.do_report.call(null,inst_155847);
var state_155947__$1 = state_155947;
var statearr_155958_156148 = state_155947__$1;
(statearr_155958_156148[(2)] = inst_155848);

(statearr_155958_156148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (17))){
var inst_155905 = (state_155947[(2)]);
var inst_155906 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155907 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_155908 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155907,inst_155905,null];
var inst_155909 = cljs.core.PersistentHashMap.fromArrays(inst_155906,inst_155908);
var inst_155910 = cljs.test.do_report.call(null,inst_155909);
var state_155947__$1 = state_155947;
var statearr_155959_156149 = state_155947__$1;
(statearr_155959_156149[(2)] = inst_155910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (3))){
var inst_155825 = (state_155947[(2)]);
var inst_155826 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155827 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155828 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155827,inst_155825,null];
var inst_155829 = cljs.core.PersistentHashMap.fromArrays(inst_155826,inst_155828);
var inst_155830 = cljs.test.do_report.call(null,inst_155829);
var state_155947__$1 = state_155947;
var statearr_155960_156150 = state_155947__$1;
(statearr_155960_156150[(2)] = inst_155830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (12))){
var inst_155881 = (state_155947[(9)]);
var inst_155880 = (state_155947[(11)]);
var inst_155876 = (state_155947[(2)]);
var inst_155877 = cljs.core.second.call(null,inst_155876);
var inst_155878 = cljs.core.List.EMPTY;
var inst_155879 = cljs.core._conj.call(null,inst_155878,"my_project.my_ns.x= (3);");
var inst_155880__$1 = cljs.core._conj.call(null,inst_155879,inst_155877);
var inst_155881__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_155880__$1);
var state_155947__$1 = (function (){var statearr_155961 = state_155947;
(statearr_155961[(9)] = inst_155881__$1);

(statearr_155961[(11)] = inst_155880__$1);

return statearr_155961;
})();
if(cljs.core.truth_(inst_155881__$1)){
var statearr_155962_156151 = state_155947__$1;
(statearr_155962_156151[(1)] = (13));

} else {
var statearr_155963_156152 = state_155947__$1;
(statearr_155963_156152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (2))){
var inst_155864 = (state_155947[(2)]);
var state_155947__$1 = (function (){var statearr_155964 = state_155947;
(statearr_155964[(14)] = inst_155864);

return statearr_155964;
})();
var statearr_155965_156153 = state_155947__$1;
(statearr_155965_156153[(2)] = null);

(statearr_155965_156153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (19))){
var inst_155921 = (state_155947[(12)]);
var inst_155920 = (state_155947[(8)]);
var inst_155916 = (state_155947[(2)]);
var inst_155917 = cljs.core.second.call(null,inst_155916);
var inst_155918 = cljs.core.List.EMPTY;
var inst_155919 = cljs.core._conj.call(null,inst_155918,"cljs.core._EQ_.call(null,(1),(2));");
var inst_155920__$1 = cljs.core._conj.call(null,inst_155919,inst_155917);
var inst_155921__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_155920__$1);
var state_155947__$1 = (function (){var statearr_155966 = state_155947;
(statearr_155966[(12)] = inst_155921__$1);

(statearr_155966[(8)] = inst_155920__$1);

return statearr_155966;
})();
if(cljs.core.truth_(inst_155921__$1)){
var statearr_155967_156154 = state_155947__$1;
(statearr_155967_156154[(1)] = (20));

} else {
var statearr_155968_156155 = state_155947__$1;
(statearr_155968_156155[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155947,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_155874 = klipse.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_155947__$1 = state_155947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155947__$1,(12),inst_155874);
} else {
if((state_val_155948 === (9))){
var inst_155904 = (state_155947[(2)]);
var state_155947__$1 = (function (){var statearr_155969 = state_155947;
(statearr_155969[(15)] = inst_155904);

return statearr_155969;
})();
var statearr_155970_156156 = state_155947__$1;
(statearr_155970_156156[(2)] = null);

(statearr_155970_156156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (5))){
var inst_155840 = (state_155947[(7)]);
var inst_155841 = (state_155947[(16)]);
var inst_155836 = (state_155947[(2)]);
var inst_155837 = cljs.core.second.call(null,inst_155836);
var inst_155838 = cljs.core.List.EMPTY;
var inst_155839 = cljs.core._conj.call(null,inst_155838,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155840__$1 = cljs.core._conj.call(null,inst_155839,inst_155837);
var inst_155841__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_155840__$1);
var state_155947__$1 = (function (){var statearr_155971 = state_155947;
(statearr_155971[(7)] = inst_155840__$1);

(statearr_155971[(16)] = inst_155841__$1);

return statearr_155971;
})();
if(cljs.core.truth_(inst_155841__$1)){
var statearr_155972_156157 = state_155947__$1;
(statearr_155972_156157[(1)] = (6));

} else {
var statearr_155973_156158 = state_155947__$1;
(statearr_155973_156158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (14))){
var inst_155880 = (state_155947[(11)]);
var inst_155890 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155891 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_155892 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_155893 = cljs.core.cons.call(null,inst_155892,inst_155880);
var inst_155894 = cljs.core.List.EMPTY;
var inst_155895 = cljs.core._conj.call(null,inst_155894,inst_155893);
var inst_155896 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_155897 = cljs.core._conj.call(null,inst_155895,inst_155896);
var inst_155898 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_155891,inst_155897,null];
var inst_155899 = cljs.core.PersistentHashMap.fromArrays(inst_155890,inst_155898);
var inst_155900 = cljs.test.do_report.call(null,inst_155899);
var state_155947__$1 = state_155947;
var statearr_155974_156159 = state_155947__$1;
(statearr_155974_156159[(2)] = inst_155900);

(statearr_155974_156159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (16))){
var inst_155944 = (state_155947[(2)]);
var inst_155945 = done.call(null);
var state_155947__$1 = (function (){var statearr_155975 = state_155947;
(statearr_155975[(17)] = inst_155944);

return statearr_155975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155947__$1,inst_155945);
} else {
if((state_val_155948 === (10))){
var inst_155865 = (state_155947[(2)]);
var inst_155866 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155867 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_155868 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155867,inst_155865,null];
var inst_155869 = cljs.core.PersistentHashMap.fromArrays(inst_155866,inst_155868);
var inst_155870 = cljs.test.do_report.call(null,inst_155869);
var state_155947__$1 = state_155947;
var statearr_155976_156160 = state_155947__$1;
(statearr_155976_156160[(2)] = inst_155870);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155948 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155947,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_155914 = klipse.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_155947__$1 = state_155947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155947__$1,(19),inst_155914);
} else {
if((state_val_155948 === (8))){
var inst_155841 = (state_155947[(16)]);
var inst_155862 = (state_155947[(2)]);
var state_155947__$1 = (function (){var statearr_155977 = state_155947;
(statearr_155977[(18)] = inst_155862);

return statearr_155977;
})();
var statearr_155978_156161 = state_155947__$1;
(statearr_155978_156161[(2)] = inst_155841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$compile$state_machine__13455__auto__ = null;
var klipse$cards$test$compile$state_machine__13455__auto____0 = (function (){
var statearr_155979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155979[(0)] = klipse$cards$test$compile$state_machine__13455__auto__);

(statearr_155979[(1)] = (1));

return statearr_155979;
});
var klipse$cards$test$compile$state_machine__13455__auto____1 = (function (state_155947){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_155947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e155980){if((e155980 instanceof Object)){
var ex__13458__auto__ = e155980;
var statearr_155981_156162 = state_155947;
(statearr_155981_156162[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156163 = state_155947;
state_155947 = G__156163;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$compile$state_machine__13455__auto__ = function(state_155947){
switch(arguments.length){
case 0:
return klipse$cards$test$compile$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$compile$state_machine__13455__auto____1.call(this,state_155947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$compile$state_machine__13455__auto____0;
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$compile$state_machine__13455__auto____1;
return klipse$cards$test$compile$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_155982 = f__13545__auto__.call(null);
(statearr_155982[(6)] = c__13544__auto__);

return statearr_155982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.apply = (function (self__,args155824){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args155824)));
});

klipse.cards.test.compile.t_klipse$cards$test$compile155821.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_156105){
var state_val_156106 = (state_156105[(1)]);
if((state_val_156106 === (7))){
var inst_155998 = (state_156105[(7)]);
var inst_156008 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156009 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_156010 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_156011 = cljs.core.cons.call(null,inst_156010,inst_155998);
var inst_156012 = cljs.core.List.EMPTY;
var inst_156013 = cljs.core._conj.call(null,inst_156012,inst_156011);
var inst_156014 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_156015 = cljs.core._conj.call(null,inst_156013,inst_156014);
var inst_156016 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_156009,inst_156015,null];
var inst_156017 = cljs.core.PersistentHashMap.fromArrays(inst_156008,inst_156016);
var inst_156018 = cljs.test.do_report.call(null,inst_156017);
var state_156105__$1 = state_156105;
var statearr_156107_156164 = state_156105__$1;
(statearr_156107_156164[(2)] = inst_156018);

(statearr_156107_156164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (20))){
var inst_156078 = (state_156105[(8)]);
var inst_156081 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156082 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_156083 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_156078);
var inst_156084 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_156082,inst_156083,null];
var inst_156085 = cljs.core.PersistentHashMap.fromArrays(inst_156081,inst_156084);
var inst_156086 = cljs.test.do_report.call(null,inst_156085);
var state_156105__$1 = state_156105;
var statearr_156108_156165 = state_156105__$1;
(statearr_156108_156165[(2)] = inst_156086);

(statearr_156108_156165[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (1))){
var state_156105__$1 = state_156105;
var statearr_156109_156166 = state_156105__$1;
(statearr_156109_156166[(2)] = null);

(statearr_156109_156166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_156105,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_155992 = klipse.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_156105__$1 = state_156105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156105__$1,(5),inst_155992);
} else {
if((state_val_156106 === (15))){
var inst_156039 = (state_156105[(9)]);
var inst_156060 = (state_156105[(2)]);
var state_156105__$1 = (function (){var statearr_156110 = state_156105;
(statearr_156110[(10)] = inst_156060);

return statearr_156110;
})();
var statearr_156111_156167 = state_156105__$1;
(statearr_156111_156167[(2)] = inst_156039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (21))){
var inst_156078 = (state_156105[(8)]);
var inst_156088 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156089 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_156090 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_156091 = cljs.core.cons.call(null,inst_156090,inst_156078);
var inst_156092 = cljs.core.List.EMPTY;
var inst_156093 = cljs.core._conj.call(null,inst_156092,inst_156091);
var inst_156094 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_156095 = cljs.core._conj.call(null,inst_156093,inst_156094);
var inst_156096 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_156089,inst_156095,null];
var inst_156097 = cljs.core.PersistentHashMap.fromArrays(inst_156088,inst_156096);
var inst_156098 = cljs.test.do_report.call(null,inst_156097);
var state_156105__$1 = state_156105;
var statearr_156112_156168 = state_156105__$1;
(statearr_156112_156168[(2)] = inst_156098);

(statearr_156112_156168[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (13))){
var inst_156038 = (state_156105[(11)]);
var inst_156041 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156042 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_156043 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_156038);
var inst_156044 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_156042,inst_156043,null];
var inst_156045 = cljs.core.PersistentHashMap.fromArrays(inst_156041,inst_156044);
var inst_156046 = cljs.test.do_report.call(null,inst_156045);
var state_156105__$1 = state_156105;
var statearr_156113_156169 = state_156105__$1;
(statearr_156113_156169[(2)] = inst_156046);

(statearr_156113_156169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (22))){
var inst_156079 = (state_156105[(12)]);
var inst_156100 = (state_156105[(2)]);
var state_156105__$1 = (function (){var statearr_156114 = state_156105;
(statearr_156114[(13)] = inst_156100);

return statearr_156114;
})();
var statearr_156115_156170 = state_156105__$1;
(statearr_156115_156170[(2)] = inst_156079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (6))){
var inst_155998 = (state_156105[(7)]);
var inst_156001 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156002 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_156003 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_155998);
var inst_156004 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_156002,inst_156003,null];
var inst_156005 = cljs.core.PersistentHashMap.fromArrays(inst_156001,inst_156004);
var inst_156006 = cljs.test.do_report.call(null,inst_156005);
var state_156105__$1 = state_156105;
var statearr_156116_156171 = state_156105__$1;
(statearr_156116_156171[(2)] = inst_156006);

(statearr_156116_156171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (17))){
var inst_156063 = (state_156105[(2)]);
var inst_156064 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156065 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_156066 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_156065,inst_156063,null];
var inst_156067 = cljs.core.PersistentHashMap.fromArrays(inst_156064,inst_156066);
var inst_156068 = cljs.test.do_report.call(null,inst_156067);
var state_156105__$1 = state_156105;
var statearr_156117_156172 = state_156105__$1;
(statearr_156117_156172[(2)] = inst_156068);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (3))){
var inst_155983 = (state_156105[(2)]);
var inst_155984 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_155985 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155986 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_155985,inst_155983,null];
var inst_155987 = cljs.core.PersistentHashMap.fromArrays(inst_155984,inst_155986);
var inst_155988 = cljs.test.do_report.call(null,inst_155987);
var state_156105__$1 = state_156105;
var statearr_156118_156173 = state_156105__$1;
(statearr_156118_156173[(2)] = inst_155988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (12))){
var inst_156039 = (state_156105[(9)]);
var inst_156038 = (state_156105[(11)]);
var inst_156034 = (state_156105[(2)]);
var inst_156035 = cljs.core.second.call(null,inst_156034);
var inst_156036 = cljs.core.List.EMPTY;
var inst_156037 = cljs.core._conj.call(null,inst_156036,"my_project.my_ns.x= (3);");
var inst_156038__$1 = cljs.core._conj.call(null,inst_156037,inst_156035);
var inst_156039__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_156038__$1);
var state_156105__$1 = (function (){var statearr_156119 = state_156105;
(statearr_156119[(9)] = inst_156039__$1);

(statearr_156119[(11)] = inst_156038__$1);

return statearr_156119;
})();
if(cljs.core.truth_(inst_156039__$1)){
var statearr_156120_156174 = state_156105__$1;
(statearr_156120_156174[(1)] = (13));

} else {
var statearr_156121_156175 = state_156105__$1;
(statearr_156121_156175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (2))){
var inst_156022 = (state_156105[(2)]);
var state_156105__$1 = (function (){var statearr_156122 = state_156105;
(statearr_156122[(14)] = inst_156022);

return statearr_156122;
})();
var statearr_156123_156176 = state_156105__$1;
(statearr_156123_156176[(2)] = null);

(statearr_156123_156176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (19))){
var inst_156079 = (state_156105[(12)]);
var inst_156078 = (state_156105[(8)]);
var inst_156074 = (state_156105[(2)]);
var inst_156075 = cljs.core.second.call(null,inst_156074);
var inst_156076 = cljs.core.List.EMPTY;
var inst_156077 = cljs.core._conj.call(null,inst_156076,"cljs.core._EQ_.call(null,(1),(2));");
var inst_156078__$1 = cljs.core._conj.call(null,inst_156077,inst_156075);
var inst_156079__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_156078__$1);
var state_156105__$1 = (function (){var statearr_156124 = state_156105;
(statearr_156124[(12)] = inst_156079__$1);

(statearr_156124[(8)] = inst_156078__$1);

return statearr_156124;
})();
if(cljs.core.truth_(inst_156079__$1)){
var statearr_156125_156177 = state_156105__$1;
(statearr_156125_156177[(1)] = (20));

} else {
var statearr_156126_156178 = state_156105__$1;
(statearr_156126_156178[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_156105,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_156032 = klipse.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_156105__$1 = state_156105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156105__$1,(12),inst_156032);
} else {
if((state_val_156106 === (9))){
var inst_156062 = (state_156105[(2)]);
var state_156105__$1 = (function (){var statearr_156127 = state_156105;
(statearr_156127[(15)] = inst_156062);

return statearr_156127;
})();
var statearr_156128_156179 = state_156105__$1;
(statearr_156128_156179[(2)] = null);

(statearr_156128_156179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (5))){
var inst_155999 = (state_156105[(16)]);
var inst_155998 = (state_156105[(7)]);
var inst_155994 = (state_156105[(2)]);
var inst_155995 = cljs.core.second.call(null,inst_155994);
var inst_155996 = cljs.core.List.EMPTY;
var inst_155997 = cljs.core._conj.call(null,inst_155996,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_155998__$1 = cljs.core._conj.call(null,inst_155997,inst_155995);
var inst_155999__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_155998__$1);
var state_156105__$1 = (function (){var statearr_156129 = state_156105;
(statearr_156129[(16)] = inst_155999__$1);

(statearr_156129[(7)] = inst_155998__$1);

return statearr_156129;
})();
if(cljs.core.truth_(inst_155999__$1)){
var statearr_156130_156180 = state_156105__$1;
(statearr_156130_156180[(1)] = (6));

} else {
var statearr_156131_156181 = state_156105__$1;
(statearr_156131_156181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (14))){
var inst_156038 = (state_156105[(11)]);
var inst_156048 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156049 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_156050 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_156051 = cljs.core.cons.call(null,inst_156050,inst_156038);
var inst_156052 = cljs.core.List.EMPTY;
var inst_156053 = cljs.core._conj.call(null,inst_156052,inst_156051);
var inst_156054 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_156055 = cljs.core._conj.call(null,inst_156053,inst_156054);
var inst_156056 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_156049,inst_156055,null];
var inst_156057 = cljs.core.PersistentHashMap.fromArrays(inst_156048,inst_156056);
var inst_156058 = cljs.test.do_report.call(null,inst_156057);
var state_156105__$1 = state_156105;
var statearr_156132_156182 = state_156105__$1;
(statearr_156132_156182[(2)] = inst_156058);

(statearr_156132_156182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (16))){
var inst_156102 = (state_156105[(2)]);
var inst_156103 = done.call(null);
var state_156105__$1 = (function (){var statearr_156133 = state_156105;
(statearr_156133[(17)] = inst_156102);

return statearr_156133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156105__$1,inst_156103);
} else {
if((state_val_156106 === (10))){
var inst_156023 = (state_156105[(2)]);
var inst_156024 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156025 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_156026 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_156025,inst_156023,null];
var inst_156027 = cljs.core.PersistentHashMap.fromArrays(inst_156024,inst_156026);
var inst_156028 = cljs.test.do_report.call(null,inst_156027);
var state_156105__$1 = state_156105;
var statearr_156134_156183 = state_156105__$1;
(statearr_156134_156183[(2)] = inst_156028);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156106 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_156105,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_156072 = klipse.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_156105__$1 = state_156105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156105__$1,(19),inst_156072);
} else {
if((state_val_156106 === (8))){
var inst_155999 = (state_156105[(16)]);
var inst_156020 = (state_156105[(2)]);
var state_156105__$1 = (function (){var statearr_156135 = state_156105;
(statearr_156135[(18)] = inst_156020);

return statearr_156135;
})();
var statearr_156136_156184 = state_156105__$1;
(statearr_156136_156184[(2)] = inst_155999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$compile$state_machine__13455__auto__ = null;
var klipse$cards$test$compile$state_machine__13455__auto____0 = (function (){
var statearr_156137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_156137[(0)] = klipse$cards$test$compile$state_machine__13455__auto__);

(statearr_156137[(1)] = (1));

return statearr_156137;
});
var klipse$cards$test$compile$state_machine__13455__auto____1 = (function (state_156105){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_156105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e156138){if((e156138 instanceof Object)){
var ex__13458__auto__ = e156138;
var statearr_156139_156185 = state_156105;
(statearr_156139_156185[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156186 = state_156105;
state_156105 = G__156186;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$compile$state_machine__13455__auto__ = function(state_156105){
switch(arguments.length){
case 0:
return klipse$cards$test$compile$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$compile$state_machine__13455__auto____1.call(this,state_156105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$compile$state_machine__13455__auto____0;
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$compile$state_machine__13455__auto____1;
return klipse$cards$test$compile$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_156140 = f__13545__auto__.call(null);
(statearr_156140[(6)] = c__13544__auto__);

return statearr_156140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.compile.t_klipse$cards$test$compile155821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta155822","meta155822",1248562623,null)], null);
});

klipse.cards.test.compile.t_klipse$cards$test$compile155821.cljs$lang$type = true;

klipse.cards.test.compile.t_klipse$cards$test$compile155821.cljs$lang$ctorStr = "klipse.cards.test.compile/t_klipse$cards$test$compile155821";

klipse.cards.test.compile.t_klipse$cards$test$compile155821.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.compile/t_klipse$cards$test$compile155821");
});

klipse.cards.test.compile.__GT_t_klipse$cards$test$compile155821 = (function klipse$cards$test$compile$__GT_t_klipse$cards$test$compile155821(meta155822){
return (new klipse.cards.test.compile.t_klipse$cards$test$compile155821(meta155822));
});

}

return (new klipse.cards.test.compile.t_klipse$cards$test$compile155821(null));
});

klipse.cards.test.compile.success.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.success;},new cljs.core.Symbol("klipse.cards.test.compile","success","klipse.cards.test.compile/success",734952039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"success","success",-763789863,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/compile.cljs",17,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.success)?klipse.cards.test.compile.success.cljs$lang$test:null)]));

klipse.cards.test.compile.static_fn = (function klipse$cards$test$compile$static_fn(){
return cljs.test.test_var.call(null,klipse.cards.test.compile.static_fn.cljs$lang$var);
});
klipse.cards.test.compile.static_fn.cljs$lang$test = (function (){

if(typeof klipse.cards.test.compile.t_klipse$cards$test$compile156187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.test.compile.t_klipse$cards$test$compile156187 = (function (meta156188){
this.meta156188 = meta156188;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156189,meta156188__$1){
var self__ = this;
var _156189__$1 = this;
return (new klipse.cards.test.compile.t_klipse$cards$test$compile156187(meta156188__$1));
});


klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156189){
var self__ = this;
var _156189__$1 = this;
return self__.meta156188;
});


klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___16715__auto__ = self____$1;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__,self____$1){
return (function (state_156236){
var state_val_156237 = (state_156236[(1)]);
if((state_val_156237 === (1))){
var state_156236__$1 = state_156236;
var statearr_156238_156313 = state_156236__$1;
(statearr_156238_156313[(2)] = null);

(statearr_156238_156313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156237 === (2))){
var inst_156233 = (state_156236[(2)]);
var inst_156234 = done.call(null);
var state_156236__$1 = (function (){var statearr_156239 = state_156236;
(statearr_156239[(7)] = inst_156233);

return statearr_156239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156236__$1,inst_156234);
} else {
if((state_val_156237 === (3))){
var inst_156191 = (state_156236[(2)]);
var inst_156192 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156193 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156194 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_156193,inst_156191,null];
var inst_156195 = cljs.core.PersistentHashMap.fromArrays(inst_156192,inst_156194);
var inst_156196 = cljs.test.do_report.call(null,inst_156195);
var state_156236__$1 = state_156236;
var statearr_156240_156314 = state_156236__$1;
(statearr_156240_156314[(2)] = inst_156196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156236__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156237 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_156236,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_156200 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_156201 = [true];
var inst_156202 = cljs.core.PersistentHashMap.fromArrays(inst_156200,inst_156201);
var inst_156203 = klipse.lang.clojure.str_compile.call(null,"(= 1 2)",inst_156202);
var state_156236__$1 = state_156236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156236__$1,(5),inst_156203);
} else {
if((state_val_156237 === (5))){
var inst_156209 = (state_156236[(8)]);
var inst_156210 = (state_156236[(9)]);
var inst_156205 = (state_156236[(2)]);
var inst_156206 = cljs.core.second.call(null,inst_156205);
var inst_156207 = cljs.core.List.EMPTY;
var inst_156208 = cljs.core._conj.call(null,inst_156207,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156209__$1 = cljs.core._conj.call(null,inst_156208,inst_156206);
var inst_156210__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_156209__$1);
var state_156236__$1 = (function (){var statearr_156241 = state_156236;
(statearr_156241[(8)] = inst_156209__$1);

(statearr_156241[(9)] = inst_156210__$1);

return statearr_156241;
})();
if(cljs.core.truth_(inst_156210__$1)){
var statearr_156242_156315 = state_156236__$1;
(statearr_156242_156315[(1)] = (6));

} else {
var statearr_156243_156316 = state_156236__$1;
(statearr_156243_156316[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156237 === (6))){
var inst_156209 = (state_156236[(8)]);
var inst_156212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156213 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156214 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_156209);
var inst_156215 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_156213,inst_156214,null];
var inst_156216 = cljs.core.PersistentHashMap.fromArrays(inst_156212,inst_156215);
var inst_156217 = cljs.test.do_report.call(null,inst_156216);
var state_156236__$1 = state_156236;
var statearr_156244_156317 = state_156236__$1;
(statearr_156244_156317[(2)] = inst_156217);

(statearr_156244_156317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156237 === (7))){
var inst_156209 = (state_156236[(8)]);
var inst_156219 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156220 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156221 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_156222 = cljs.core.cons.call(null,inst_156221,inst_156209);
var inst_156223 = cljs.core.List.EMPTY;
var inst_156224 = cljs.core._conj.call(null,inst_156223,inst_156222);
var inst_156225 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_156226 = cljs.core._conj.call(null,inst_156224,inst_156225);
var inst_156227 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_156220,inst_156226,null];
var inst_156228 = cljs.core.PersistentHashMap.fromArrays(inst_156219,inst_156227);
var inst_156229 = cljs.test.do_report.call(null,inst_156228);
var state_156236__$1 = state_156236;
var statearr_156245_156318 = state_156236__$1;
(statearr_156245_156318[(2)] = inst_156229);

(statearr_156245_156318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156237 === (8))){
var inst_156210 = (state_156236[(9)]);
var inst_156231 = (state_156236[(2)]);
var state_156236__$1 = (function (){var statearr_156246 = state_156236;
(statearr_156246[(10)] = inst_156231);

return statearr_156246;
})();
var statearr_156247_156319 = state_156236__$1;
(statearr_156247_156319[(2)] = inst_156210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156236__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__,self____$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1){
return (function() {
var klipse$cards$test$compile$state_machine__13455__auto__ = null;
var klipse$cards$test$compile$state_machine__13455__auto____0 = (function (){
var statearr_156248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_156248[(0)] = klipse$cards$test$compile$state_machine__13455__auto__);

(statearr_156248[(1)] = (1));

return statearr_156248;
});
var klipse$cards$test$compile$state_machine__13455__auto____1 = (function (state_156236){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_156236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e156249){if((e156249 instanceof Object)){
var ex__13458__auto__ = e156249;
var statearr_156250_156320 = state_156236;
(statearr_156250_156320[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156321 = state_156236;
state_156236 = G__156321;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$compile$state_machine__13455__auto__ = function(state_156236){
switch(arguments.length){
case 0:
return klipse$cards$test$compile$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$compile$state_machine__13455__auto____1.call(this,state_156236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$compile$state_machine__13455__auto____0;
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$compile$state_machine__13455__auto____1;
return klipse$cards$test$compile$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__,self____$1))
})();
var state__13546__auto__ = (function (){var statearr_156251 = f__13545__auto__.call(null);
(statearr_156251[(6)] = c__13544__auto__);

return statearr_156251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__,self____$1))
);

return c__13544__auto__;
});

klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.apply = (function (self__,args156190){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args156190)));
});

klipse.cards.test.compile.t_klipse$cards$test$compile156187.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___16715__auto__ = this;
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,___16715__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,___16715__auto__){
return (function (state_156297){
var state_val_156298 = (state_156297[(1)]);
if((state_val_156298 === (1))){
var state_156297__$1 = state_156297;
var statearr_156299_156322 = state_156297__$1;
(statearr_156299_156322[(2)] = null);

(statearr_156299_156322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156298 === (2))){
var inst_156294 = (state_156297[(2)]);
var inst_156295 = done.call(null);
var state_156297__$1 = (function (){var statearr_156300 = state_156297;
(statearr_156300[(7)] = inst_156294);

return statearr_156300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156297__$1,inst_156295);
} else {
if((state_val_156298 === (3))){
var inst_156252 = (state_156297[(2)]);
var inst_156253 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156254 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156255 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_156254,inst_156252,null];
var inst_156256 = cljs.core.PersistentHashMap.fromArrays(inst_156253,inst_156255);
var inst_156257 = cljs.test.do_report.call(null,inst_156256);
var state_156297__$1 = state_156297;
var statearr_156301_156323 = state_156297__$1;
(statearr_156301_156323[(2)] = inst_156257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156298 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_156297,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_156261 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_156262 = [true];
var inst_156263 = cljs.core.PersistentHashMap.fromArrays(inst_156261,inst_156262);
var inst_156264 = klipse.lang.clojure.str_compile.call(null,"(= 1 2)",inst_156263);
var state_156297__$1 = state_156297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156297__$1,(5),inst_156264);
} else {
if((state_val_156298 === (5))){
var inst_156270 = (state_156297[(8)]);
var inst_156271 = (state_156297[(9)]);
var inst_156266 = (state_156297[(2)]);
var inst_156267 = cljs.core.second.call(null,inst_156266);
var inst_156268 = cljs.core.List.EMPTY;
var inst_156269 = cljs.core._conj.call(null,inst_156268,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156270__$1 = cljs.core._conj.call(null,inst_156269,inst_156267);
var inst_156271__$1 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,inst_156270__$1);
var state_156297__$1 = (function (){var statearr_156302 = state_156297;
(statearr_156302[(8)] = inst_156270__$1);

(statearr_156302[(9)] = inst_156271__$1);

return statearr_156302;
})();
if(cljs.core.truth_(inst_156271__$1)){
var statearr_156303_156324 = state_156297__$1;
(statearr_156303_156324[(1)] = (6));

} else {
var statearr_156304_156325 = state_156297__$1;
(statearr_156304_156325[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156298 === (6))){
var inst_156270 = (state_156297[(8)]);
var inst_156273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156274 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156275 = cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,inst_156270);
var inst_156276 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_156274,inst_156275,null];
var inst_156277 = cljs.core.PersistentHashMap.fromArrays(inst_156273,inst_156276);
var inst_156278 = cljs.test.do_report.call(null,inst_156277);
var state_156297__$1 = state_156297;
var statearr_156305_156326 = state_156297__$1;
(statearr_156305_156326[(2)] = inst_156278);

(statearr_156305_156326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156298 === (7))){
var inst_156270 = (state_156297[(8)]);
var inst_156280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_156281 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_156282 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_156283 = cljs.core.cons.call(null,inst_156282,inst_156270);
var inst_156284 = cljs.core.List.EMPTY;
var inst_156285 = cljs.core._conj.call(null,inst_156284,inst_156283);
var inst_156286 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_156287 = cljs.core._conj.call(null,inst_156285,inst_156286);
var inst_156288 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_156281,inst_156287,null];
var inst_156289 = cljs.core.PersistentHashMap.fromArrays(inst_156280,inst_156288);
var inst_156290 = cljs.test.do_report.call(null,inst_156289);
var state_156297__$1 = state_156297;
var statearr_156306_156327 = state_156297__$1;
(statearr_156306_156327[(2)] = inst_156290);

(statearr_156306_156327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156298 === (8))){
var inst_156271 = (state_156297[(9)]);
var inst_156292 = (state_156297[(2)]);
var state_156297__$1 = (function (){var statearr_156307 = state_156297;
(statearr_156307[(10)] = inst_156292);

return statearr_156307;
})();
var statearr_156308_156328 = state_156297__$1;
(statearr_156308_156328[(2)] = inst_156271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__13544__auto__,___16715__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__,___16715__auto__){
return (function() {
var klipse$cards$test$compile$state_machine__13455__auto__ = null;
var klipse$cards$test$compile$state_machine__13455__auto____0 = (function (){
var statearr_156309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_156309[(0)] = klipse$cards$test$compile$state_machine__13455__auto__);

(statearr_156309[(1)] = (1));

return statearr_156309;
});
var klipse$cards$test$compile$state_machine__13455__auto____1 = (function (state_156297){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_156297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e156310){if((e156310 instanceof Object)){
var ex__13458__auto__ = e156310;
var statearr_156311_156329 = state_156297;
(statearr_156311_156329[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156330 = state_156297;
state_156297 = G__156330;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$cards$test$compile$state_machine__13455__auto__ = function(state_156297){
switch(arguments.length){
case 0:
return klipse$cards$test$compile$state_machine__13455__auto____0.call(this);
case 1:
return klipse$cards$test$compile$state_machine__13455__auto____1.call(this,state_156297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$cards$test$compile$state_machine__13455__auto____0;
klipse$cards$test$compile$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$cards$test$compile$state_machine__13455__auto____1;
return klipse$cards$test$compile$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,___16715__auto__))
})();
var state__13546__auto__ = (function (){var statearr_156312 = f__13545__auto__.call(null);
(statearr_156312[(6)] = c__13544__auto__);

return statearr_156312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,___16715__auto__))
);

return c__13544__auto__;
});

klipse.cards.test.compile.t_klipse$cards$test$compile156187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta156188","meta156188",-1238867511,null)], null);
});

klipse.cards.test.compile.t_klipse$cards$test$compile156187.cljs$lang$type = true;

klipse.cards.test.compile.t_klipse$cards$test$compile156187.cljs$lang$ctorStr = "klipse.cards.test.compile/t_klipse$cards$test$compile156187";

klipse.cards.test.compile.t_klipse$cards$test$compile156187.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"klipse.cards.test.compile/t_klipse$cards$test$compile156187");
});

klipse.cards.test.compile.__GT_t_klipse$cards$test$compile156187 = (function klipse$cards$test$compile$__GT_t_klipse$cards$test$compile156187(meta156188){
return (new klipse.cards.test.compile.t_klipse$cards$test$compile156187(meta156188));
});

}

return (new klipse.cards.test.compile.t_klipse$cards$test$compile156187(null));
});

klipse.cards.test.compile.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.static_fn;},new cljs.core.Symbol("klipse.cards.test.compile","static-fn","klipse.cards.test.compile/static-fn",75860280,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"static-fn","static-fn",-1353545006,null),"/Users/viebel/prj/klipse/src/klipse/cards/test/compile.cljs",19,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.static_fn)?klipse.cards.test.compile.static_fn.cljs$lang$test:null)]));

//# sourceMappingURL=compile.js.map
