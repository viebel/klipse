// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.cards.special.eval');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.lang.clojure');
goog.require('devcards.core');
klipse.cards.special.eval.remove_chars = (function klipse$cards$special$eval$remove_chars(s){
return clojure.string.replace.call(null,s,/\n|\s/,"");
});
klipse.cards.special.eval.a_EQ_ = (function klipse$cards$special$eval$a_EQ_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___156334 = arguments.length;
var i__9641__auto___156335 = (0);
while(true){
if((i__9641__auto___156335 < len__9640__auto___156334)){
args__9647__auto__.push((arguments[i__9641__auto___156335]));

var G__156336 = (i__9641__auto___156335 + (1));
i__9641__auto___156335 = G__156336;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.special.eval.remove_chars,args));
});

klipse.cards.special.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.special.eval.a_EQ_.cljs$lang$applyTo = (function (seq156333){
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156333));
});

klipse.cards.special.eval.error__GT_clj = (function klipse$cards$special$eval$error__GT_clj(p__156337){
var vec__156338 = p__156337;
var status = cljs.core.nth.call(null,vec__156338,(0),null);
var error = cljs.core.nth.call(null,vec__156338,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});

klipse.cards.special.eval.static_fn_failure = (function klipse$cards$special$eval$static_fn_failure(){
return cljs.test.test_var.call(null,klipse.cards.special.eval.static_fn_failure.cljs$lang$var);
});
klipse.cards.special.eval.static_fn_failure.cljs$lang$test = (function (){

try{var values__16640__auto__ = (function (){var x__9317__auto__ = klipse.cards.special.eval.error__GT_clj.call(null,klipse.lang.clojure.eval.call(null,"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)));
return cljs.core._conj.call(null,(function (){var x__9317__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto____$1);
})(),x__9317__auto__);
})();
var result__16641__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto__);
if(cljs.core.truth_(result__16641__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16641__auto__;
}catch (e156341){var t__16685__auto__ = e156341;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.static_fn_failure.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.static_fn_failure;},new cljs.core.Symbol("klipse.cards.special.eval","static-fn-failure","klipse.cards.special.eval/static-fn-failure",-503512896,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"static-fn-failure","static-fn-failure",-535281680,null),"src/klipse/cards/special/eval.cljs",27,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.static_fn_failure)?klipse.cards.special.eval.static_fn_failure.cljs$lang$test:null)]));

klipse.cards.special.eval.test_eval_macros = (function klipse$cards$special$eval$test_eval_macros(){
return cljs.test.test_var.call(null,klipse.cards.special.eval.test_eval_macros.cljs$lang$var);
});
klipse.cards.special.eval.test_eval_macros.cljs$lang$test = (function (){

try{var values__16640__auto__ = (function (){var x__9317__auto__ = klipse.lang.clojure.eval.call(null,"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))");
return cljs.core._conj.call(null,(function (){var x__9317__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto____$1);
})(),x__9317__auto__);
})();
var result__16641__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto__);
if(cljs.core.truth_(result__16641__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16641__auto__;
}catch (e156342){var t__16685__auto__ = e156342;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_eval_macros;},new cljs.core.Symbol("klipse.cards.special.eval","test-eval-macros","klipse.cards.special.eval/test-eval-macros",-694697639,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"src/klipse/cards/special/eval.cljs",26,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_eval_macros)?klipse.cards.special.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_ok = (function klipse$cards$special$eval$test_str_compile_ok(){
return cljs.test.test_var.call(null,klipse.cards.special.eval.test_str_compile_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test = (function (){

try{var values__16640__auto___156345 = (function (){var x__9317__auto__ = klipse.lang.clojure.str_compile.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"((1) + (2));\n"),x__9317__auto__);
})();
var result__16641__auto___156346 = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto___156345);
if(cljs.core.truth_(result__16641__auto___156346)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto___156345),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto___156345);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e156343){var t__16685__auto___156347 = e156343;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto___156347,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16640__auto__ = (function (){var x__9317__auto__ = klipse.lang.clojure.str_compile.call(null,"(map inc [1 2 3])");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),x__9317__auto__);
})();
var result__16641__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto__);
if(cljs.core.truth_(result__16641__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16641__auto__;
}catch (e156344){var t__16685__auto__ = e156344;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_ok;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-ok","klipse.cards.special.eval/test-str-compile-ok",1962557257,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-ok","test-str-compile-ok",1947727033,null),"src/klipse/cards/special/eval.cljs",29,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_ok)?klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_error = (function klipse$cards$special$eval$test_str_compile_error(){
return cljs.test.test_var.call(null,klipse.cards.special.eval.test_str_compile_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_error.cljs$lang$test = (function (){

try{var values__16640__auto___156350 = (function (){var x__9317__auto__ = klipse.lang.clojure.str_compile.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),x__9317__auto__);
})();
var result__16641__auto___156351 = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto___156350);
if(cljs.core.truth_(result__16641__auto___156351)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto___156350),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto___156350);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e156348){var t__16685__auto___156352 = e156348;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto___156352,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__16640__auto__ = (function (){var x__9317__auto__ = klipse.lang.clojure.str_compile.call(null,"(map inc [1 2 3]");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),x__9317__auto__);
})();
var result__16641__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__16640__auto__);
if(cljs.core.truth_(result__16641__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__16640__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__16640__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__16641__auto__;
}catch (e156349){var t__16685__auto__ = e156349;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__16685__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_error;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-error","klipse.cards.special.eval/test-str-compile-error",-902258301,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-error","test-str-compile-error",-896273229,null),"src/klipse/cards/special/eval.cljs",32,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_error)?klipse.cards.special.eval.test_str_compile_error.cljs$lang$test:null)]));

//# sourceMappingURL=eval.js.map
