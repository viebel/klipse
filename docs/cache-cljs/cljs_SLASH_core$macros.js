// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__10705__auto___23586 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23587 = arguments.length;
var i__10661__auto___23588 = (0);
while(true){
if((i__10661__auto___23588 < len__10660__auto___23587)){
args__10667__auto__.push((arguments[i__10661__auto___23588]));

var G__23589 = (i__10661__auto___23588 + (1));
i__10661__auto___23588 = G__23589;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__10373__auto__ = form;
return cljs.core._conj((function (){var x__10373__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})());
var G__23590 = threaded;
var G__23591 = cljs.core.next(forms__$1);
x__$1 = G__23590;
forms__$1 = G__23591;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq23578){
var G__23579 = cljs.core.first(seq23578);
var seq23578__$1 = cljs.core.next(seq23578);
var G__23580 = cljs.core.first(seq23578__$1);
var seq23578__$2 = cljs.core.next(seq23578__$1);
var G__23581 = cljs.core.first(seq23578__$2);
var seq23578__$3 = cljs.core.next(seq23578__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23579,G__23580,G__23581,seq23578__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__10705__auto___23598 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23599 = arguments.length;
var i__10661__auto___23600 = (0);
while(true){
if((i__10661__auto___23600 < len__10660__auto___23599)){
args__10667__auto__.push((arguments[i__10661__auto___23600]));

var G__23601 = (i__10661__auto___23600 + (1));
i__10661__auto___23600 = G__23601;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.next(form),cljs.core.array_seq([(function (){var x__10373__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__10373__auto__ = form;
return cljs.core._conj((function (){var x__10373__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})());
var G__23607 = threaded;
var G__23608 = cljs.core.next(forms__$1);
x__$1 = G__23607;
forms__$1 = G__23608;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq23594){
var G__23595 = cljs.core.first(seq23594);
var seq23594__$1 = cljs.core.next(seq23594);
var G__23596 = cljs.core.first(seq23594__$1);
var seq23594__$2 = cljs.core.next(seq23594__$1);
var G__23597 = cljs.core.first(seq23594__$2);
var seq23594__$3 = cljs.core.next(seq23594__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23595,G__23596,G__23597,seq23594__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__10705__auto___23626 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args23610 = [];
var len__10660__auto___23627 = arguments.length;
var i__10661__auto___23628 = (0);
while(true){
if((i__10661__auto___23628 < len__10660__auto___23627)){
args23610.push((arguments[i__10661__auto___23628]));

var G__23629 = (i__10661__auto___23628 + (1));
i__10661__auto___23628 = G__23629;
continue;
} else {
}
break;
}

var G__23620 = args23610.length;
switch (G__23620) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args23610.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq23611){
var G__23612 = cljs.core.first(seq23611);
var seq23611__$1 = cljs.core.next(seq23611);
var G__23613 = cljs.core.first(seq23611__$1);
var seq23611__$2 = cljs.core.next(seq23611__$1);
var G__23614 = cljs.core.first(seq23611__$2);
var seq23611__$3 = cljs.core.next(seq23611__$2);
var G__23615 = cljs.core.first(seq23611__$3);
var seq23611__$4 = cljs.core.next(seq23611__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__23612,G__23613,G__23614,G__23615,seq23611__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__10705__auto___23647 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23648 = arguments.length;
var i__10661__auto___23649 = (0);
while(true){
if((i__10661__auto___23649 < len__10660__auto___23648)){
args__10667__auto__.push((arguments[i__10661__auto___23649]));

var G__23650 = (i__10661__auto___23649 + (1));
i__10661__auto___23649 = G__23650;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq23641){
var G__23642 = cljs.core.first(seq23641);
var seq23641__$1 = cljs.core.next(seq23641);
var G__23643 = cljs.core.first(seq23641__$1);
var seq23641__$2 = cljs.core.next(seq23641__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__23642,G__23643,seq23641__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__10705__auto___23658 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23663 = arguments.length;
var i__10661__auto___23664 = (0);
while(true){
if((i__10661__auto___23664 < len__10660__auto___23663)){
args__10667__auto__.push((arguments[i__10661__auto___23664]));

var G__23665 = (i__10661__auto___23664 + (1));
i__10661__auto___23664 = G__23665;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__10373__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__10373__auto____$2 = cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$2);
})(),x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq23651){
var G__23652 = cljs.core.first(seq23651);
var seq23651__$1 = cljs.core.next(seq23651);
var G__23653 = cljs.core.first(seq23651__$1);
var seq23651__$2 = cljs.core.next(seq23651__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__23652,G__23653,seq23651__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__10705__auto___23683 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23684 = arguments.length;
var i__10661__auto___23685 = (0);
while(true){
if((i__10661__auto___23685 < len__10660__auto___23684)){
args__10667__auto__.push((arguments[i__10661__auto___23685]));

var G__23686 = (i__10661__auto___23685 + (1));
i__10661__auto___23685 = G__23686;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23675_SHARP_){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__23675_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq23680){
var G__23681 = cljs.core.first(seq23680);
var seq23680__$1 = cljs.core.next(seq23680);
var G__23682 = cljs.core.first(seq23680__$1);
var seq23680__$2 = cljs.core.next(seq23680__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__23681,G__23682,seq23680__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__10705__auto___23694 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23695 = arguments.length;
var i__10661__auto___23696 = (0);
while(true){
if((i__10661__auto___23696 < len__10660__auto___23695)){
args__10667__auto__.push((arguments[i__10661__auto___23696]));

var G__23697 = (i__10661__auto___23696 + (1));
i__10661__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__10373__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq23687){
var G__23688 = cljs.core.first(seq23687);
var seq23687__$1 = cljs.core.next(seq23687);
var G__23689 = cljs.core.first(seq23687__$1);
var seq23687__$2 = cljs.core.next(seq23687__$1);
var G__23690 = cljs.core.first(seq23687__$2);
var seq23687__$3 = cljs.core.next(seq23687__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__23688,G__23689,G__23690,seq23687__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__23729 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__23730 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__23729;
s = G__23730;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__23735){
var vec__23736 = p__23735;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23736,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23736,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
var ret__10705__auto___23745 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23746 = arguments.length;
var i__10661__auto___23747 = (0);
while(true){
if((i__10661__auto___23747 < len__10660__auto___23746)){
args__10667__auto__.push((arguments[i__10661__auto___23747]));

var G__23748 = (i__10661__auto___23747 + (1));
i__10661__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq23741){
var G__23742 = cljs.core.first(seq23741);
var seq23741__$1 = cljs.core.next(seq23741);
var G__23743 = cljs.core.first(seq23741__$1);
var seq23741__$2 = cljs.core.next(seq23741__$1);
var G__23744 = cljs.core.first(seq23741__$2);
var seq23741__$3 = cljs.core.next(seq23741__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__23742,G__23743,G__23744,seq23741__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__23749 = cljs.core.next(params__$1);
var G__23750 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__23751 = lets;
params__$1 = G__23749;
new_params = G__23750;
lets = G__23751;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__23752 = cljs.core.next(params__$1);
var G__23753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__23754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__23752;
new_params = G__23753;
lets = G__23754;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
}
break;
}
}
});
var ret__10705__auto___23773 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23774 = arguments.length;
var i__10661__auto___23775 = (0);
while(true){
if((i__10661__auto___23775 < len__10660__auto___23774)){
args__10667__auto__.push((arguments[i__10661__auto___23775]));

var G__23776 = (i__10661__auto___23775 + (1));
i__10661__auto___23775 = G__23776;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__10373__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__23766 = sig;
var seq__23767 = cljs.core.seq(vec__23766);
var first__23768 = cljs.core.first(seq__23767);
var seq__23767__$1 = cljs.core.next(seq__23767);
var params = first__23768;
var body = seq__23767__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__9439__auto__ = conds;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__10373__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23766,seq__23767,first__23768,seq__23767__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__10373__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(vec__23766,seq__23767,first__23768,seq__23767__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23766,seq__23767,first__23768,seq__23767__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__10373__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(vec__23766,seq__23767,first__23768,seq__23767__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq23755){
var G__23756 = cljs.core.first(seq23755);
var seq23755__$1 = cljs.core.next(seq23755);
var G__23757 = cljs.core.first(seq23755__$1);
var seq23755__$2 = cljs.core.next(seq23755__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__23756,G__23757,seq23755__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__10705__auto___23792 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23795 = arguments.length;
var i__10661__auto___23796 = (0);
while(true){
if((i__10661__auto___23796 < len__10660__auto___23795)){
args__10667__auto__.push((arguments[i__10661__auto___23796]));

var G__23797 = (i__10661__auto___23796 + (1));
i__10661__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq23786){
var G__23787 = cljs.core.first(seq23786);
var seq23786__$1 = cljs.core.next(seq23786);
var G__23788 = cljs.core.first(seq23786__$1);
var seq23786__$2 = cljs.core.next(seq23786__$1);
var G__23789 = cljs.core.first(seq23786__$2);
var seq23786__$3 = cljs.core.next(seq23786__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__23787,G__23788,G__23789,seq23786__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__10705__auto___23832 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args23821 = [];
var len__10660__auto___23833 = arguments.length;
var i__10661__auto___23834 = (0);
while(true){
if((i__10661__auto___23834 < len__10660__auto___23833)){
args23821.push((arguments[i__10661__auto___23834]));

var G__23835 = (i__10661__auto___23834 + (1));
i__10661__auto___23834 = G__23835;
continue;
} else {
}
break;
}

var G__23831 = args23821.length;
switch (G__23831) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args23821.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10683__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__10373__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23820__auto__","temp__23820__auto__",-701962314,null)),(function (){var x__10373__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23820__auto__","temp__23820__auto__",-701962314,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23820__auto__","temp__23820__auto__",-701962314,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq23822){
var G__23823 = cljs.core.first(seq23822);
var seq23822__$1 = cljs.core.next(seq23822);
var G__23824 = cljs.core.first(seq23822__$1);
var seq23822__$2 = cljs.core.next(seq23822__$1);
var G__23825 = cljs.core.first(seq23822__$2);
var seq23822__$3 = cljs.core.next(seq23822__$2);
var G__23826 = cljs.core.first(seq23822__$3);
var seq23822__$4 = cljs.core.next(seq23822__$3);
var G__23827 = cljs.core.first(seq23822__$4);
var seq23822__$5 = cljs.core.next(seq23822__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__23823,G__23824,G__23825,G__23826,G__23827,seq23822__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__10705__auto___23866 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args23853 = [];
var len__10660__auto___23867 = arguments.length;
var i__10661__auto___23868 = (0);
while(true){
if((i__10661__auto___23868 < len__10660__auto___23867)){
args23853.push((arguments[i__10661__auto___23868]));

var G__23869 = (i__10661__auto___23868 + (1));
i__10661__auto___23868 = G__23869;
continue;
} else {
}
break;
}

var G__23855 = args23853.length;
switch (G__23855) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args23853.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__10705__auto___23893 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23894 = arguments.length;
var i__10661__auto___23895 = (0);
while(true){
if((i__10661__auto___23895 < len__10660__auto___23894)){
args__10667__auto__.push((arguments[i__10661__auto___23895]));

var G__23896 = (i__10661__auto___23895 + (1));
i__10661__auto___23895 = G__23896;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23878_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__23878_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq23880){
var G__23881 = cljs.core.first(seq23880);
var seq23880__$1 = cljs.core.next(seq23880);
var G__23882 = cljs.core.first(seq23880__$1);
var seq23880__$2 = cljs.core.next(seq23880__$1);
var G__23883 = cljs.core.first(seq23880__$2);
var seq23880__$3 = cljs.core.next(seq23880__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__23881,G__23882,G__23883,seq23880__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__10705__auto___23909 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23912 = arguments.length;
var i__10661__auto___23913 = (0);
while(true){
if((i__10661__auto___23913 < len__10660__auto___23912)){
args__10667__auto__.push((arguments[i__10661__auto___23913]));

var G__23914 = (i__10661__auto___23913 + (1));
i__10661__auto___23913 = G__23914;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq23897){
var G__23898 = cljs.core.first(seq23897);
var seq23897__$1 = cljs.core.next(seq23897);
var G__23899 = cljs.core.first(seq23897__$1);
var seq23897__$2 = cljs.core.next(seq23897__$1);
var G__23900 = cljs.core.first(seq23897__$2);
var seq23897__$3 = cljs.core.next(seq23897__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__23898,G__23899,G__23900,seq23897__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__10705__auto___23944 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23947 = arguments.length;
var i__10661__auto___23948 = (0);
while(true){
if((i__10661__auto___23948 < len__10660__auto___23947)){
args__10667__auto__.push((arguments[i__10661__auto___23948]));

var G__23950 = (i__10661__auto___23948 + (1));
i__10661__auto___23948 = G__23950;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__10373__auto__ = test;
return cljs.core._conj((function (){var x__10373__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq23934){
var G__23935 = cljs.core.first(seq23934);
var seq23934__$1 = cljs.core.next(seq23934);
var G__23936 = cljs.core.first(seq23934__$1);
var seq23934__$2 = cljs.core.next(seq23934__$1);
var G__23937 = cljs.core.first(seq23934__$2);
var seq23934__$3 = cljs.core.next(seq23934__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__23935,G__23936,G__23937,seq23934__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__10705__auto___23980 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10667__auto__ = [];
var len__10660__auto___23981 = arguments.length;
var i__10661__auto___23982 = (0);
while(true){
if((i__10661__auto___23982 < len__10660__auto___23981)){
args__10667__auto__.push((arguments[i__10661__auto___23982]));

var G__23983 = (i__10661__auto___23982 + (1));
i__10661__auto___23982 = G__23983;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__23972 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23972,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23972,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__23961__auto__","xs__23961__auto__",206345036,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__23961__auto__","xs__23961__auto__",206345036,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq23963){
var G__23964 = cljs.core.first(seq23963);
var seq23963__$1 = cljs.core.next(seq23963);
var G__23965 = cljs.core.first(seq23963__$1);
var seq23963__$2 = cljs.core.next(seq23963__$1);
var G__23966 = cljs.core.first(seq23963__$2);
var seq23963__$3 = cljs.core.next(seq23963__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__23964,G__23965,G__23966,seq23963__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__10705__auto___23992 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24003 = arguments.length;
var i__10661__auto___24004 = (0);
while(true){
if((i__10661__auto___24004 < len__10660__auto___24003)){
args__10667__auto__.push((arguments[i__10661__auto___24004]));

var G__24005 = (i__10661__auto___24004 + (1));
i__10661__auto___24004 = G__24005;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23984__auto__","temp__23984__auto__",882321676,null)),(function (){var x__10373__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23984__auto__","temp__23984__auto__",882321676,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__23984__auto__","temp__23984__auto__",882321676,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq23985){
var G__23986 = cljs.core.first(seq23985);
var seq23985__$1 = cljs.core.next(seq23985);
var G__23987 = cljs.core.first(seq23985__$1);
var seq23985__$2 = cljs.core.next(seq23985__$1);
var G__23988 = cljs.core.first(seq23985__$2);
var seq23985__$3 = cljs.core.next(seq23985__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__23986,G__23987,G__23988,seq23985__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__10705__auto___24062 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24063 = arguments.length;
var i__10661__auto___24064 = (0);
while(true){
if((i__10661__auto___24064 < len__10660__auto___24063)){
args__10667__auto__.push((arguments[i__10661__auto___24064]));

var G__24066 = (i__10661__auto___24064 + (1));
i__10661__auto___24064 = G__24066;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),null),x__10373__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq24042){
var G__24043 = cljs.core.first(seq24042);
var seq24042__$1 = cljs.core.next(seq24042);
var G__24044 = cljs.core.first(seq24042__$1);
var seq24042__$2 = cljs.core.next(seq24042__$1);
var G__24045 = cljs.core.first(seq24042__$2);
var seq24042__$3 = cljs.core.next(seq24042__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__24043,G__24044,G__24045,seq24042__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__10705__auto___24071 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24072 = arguments.length;
var i__10661__auto___24073 = (0);
while(true){
if((i__10661__auto___24073 < len__10660__auto___24072)){
args__10667__auto__.push((arguments[i__10661__auto___24073]));

var G__24074 = (i__10661__auto___24073 + (1));
i__10661__auto___24073 = G__24074;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body,(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq24067){
var G__24068 = cljs.core.first(seq24067);
var seq24067__$1 = cljs.core.next(seq24067);
var G__24069 = cljs.core.first(seq24067__$1);
var seq24067__$2 = cljs.core.next(seq24067__$1);
var G__24070 = cljs.core.first(seq24067__$2);
var seq24067__$3 = cljs.core.next(seq24067__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__24068,G__24069,G__24070,seq24067__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__10705__auto___24102 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24103 = arguments.length;
var i__10661__auto___24104 = (0);
while(true){
if((i__10661__auto___24104 < len__10660__auto___24103)){
args__10667__auto__.push((arguments[i__10661__auto___24104]));

var G__24105 = (i__10661__auto___24104 + (1));
i__10661__auto___24104 = G__24105;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__24088){
var vec__24089 = p__24088;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq24082){
var G__24083 = cljs.core.first(seq24082);
var seq24082__$1 = cljs.core.next(seq24082);
var G__24084 = cljs.core.first(seq24082__$1);
var seq24082__$2 = cljs.core.next(seq24082__$1);
var G__24085 = cljs.core.first(seq24082__$2);
var seq24082__$3 = cljs.core.next(seq24082__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24083,G__24084,G__24085,seq24082__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__10705__auto___24136 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24139 = arguments.length;
var i__10661__auto___24140 = (0);
while(true){
if((i__10661__auto___24140 < len__10660__auto___24139)){
args__10667__auto__.push((arguments[i__10661__auto___24140]));

var G__24141 = (i__10661__auto___24140 + (1));
i__10661__auto___24140 = G__24141;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__24132){
var vec__24133 = p__24132;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24133,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24133,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq24128){
var G__24129 = cljs.core.first(seq24128);
var seq24128__$1 = cljs.core.next(seq24128);
var G__24130 = cljs.core.first(seq24128__$1);
var seq24128__$2 = cljs.core.next(seq24128__$1);
var G__24131 = cljs.core.first(seq24128__$2);
var seq24128__$3 = cljs.core.next(seq24128__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24129,G__24130,G__24131,seq24128__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__10705__auto___24166 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24167 = arguments.length;
var i__10661__auto___24168 = (0);
while(true){
if((i__10661__auto___24168 < len__10660__auto___24167)){
args__10667__auto__.push((arguments[i__10661__auto___24168]));

var G__24170 = (i__10661__auto___24168 + (1));
i__10661__auto___24168 = G__24170;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq24149){
var G__24150 = cljs.core.first(seq24149);
var seq24149__$1 = cljs.core.next(seq24149);
var G__24151 = cljs.core.first(seq24149__$1);
var seq24149__$2 = cljs.core.next(seq24149__$1);
var G__24152 = cljs.core.first(seq24149__$2);
var seq24149__$3 = cljs.core.next(seq24149__$2);
var G__24153 = cljs.core.first(seq24149__$3);
var seq24149__$4 = cljs.core.next(seq24149__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24150,G__24151,G__24152,G__24153,seq24149__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__10705__auto___24211 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24214 = arguments.length;
var i__10661__auto___24215 = (0);
while(true){
if((i__10661__auto___24215 < len__10660__auto___24214)){
args__10667__auto__.push((arguments[i__10661__auto___24215]));

var G__24216 = (i__10661__auto___24215 + (1));
i__10661__auto___24215 = G__24216;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq24187){
var G__24188 = cljs.core.first(seq24187);
var seq24187__$1 = cljs.core.next(seq24187);
var G__24189 = cljs.core.first(seq24187__$1);
var seq24187__$2 = cljs.core.next(seq24187__$1);
var G__24190 = cljs.core.first(seq24187__$2);
var seq24187__$3 = cljs.core.next(seq24187__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24188,G__24189,G__24190,seq24187__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__10705__auto___24240 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24241 = arguments.length;
var i__10661__auto___24242 = (0);
while(true){
if((i__10661__auto___24242 < len__10660__auto___24241)){
args__10667__auto__.push((arguments[i__10661__auto___24242]));

var G__24243 = (i__10661__auto___24242 + (1));
i__10661__auto___24242 = G__24243;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq24234){
var G__24235 = cljs.core.first(seq24234);
var seq24234__$1 = cljs.core.next(seq24234);
var G__24236 = cljs.core.first(seq24234__$1);
var seq24234__$2 = cljs.core.next(seq24234__$1);
var G__24237 = cljs.core.first(seq24234__$2);
var seq24234__$3 = cljs.core.next(seq24234__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24235,G__24236,G__24237,seq24234__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__10705__auto___24281 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args24249 = [];
var len__10660__auto___24284 = arguments.length;
var i__10661__auto___24285 = (0);
while(true){
if((i__10661__auto___24285 < len__10660__auto___24284)){
args24249.push((arguments[i__10661__auto___24285]));

var G__24286 = (i__10661__auto___24285 + (1));
i__10661__auto___24285 = G__24286;
continue;
} else {
}
break;
}

var G__24260 = args24249.length;
switch (G__24260) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24249.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10683__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__10373__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24248__auto__","temp__24248__auto__",-1039469603,null)),(function (){var x__10373__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24248__auto__","temp__24248__auto__",-1039469603,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24248__auto__","temp__24248__auto__",-1039469603,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq24250){
var G__24251 = cljs.core.first(seq24250);
var seq24250__$1 = cljs.core.next(seq24250);
var G__24252 = cljs.core.first(seq24250__$1);
var seq24250__$2 = cljs.core.next(seq24250__$1);
var G__24253 = cljs.core.first(seq24250__$2);
var seq24250__$3 = cljs.core.next(seq24250__$2);
var G__24254 = cljs.core.first(seq24250__$3);
var seq24250__$4 = cljs.core.next(seq24250__$3);
var G__24255 = cljs.core.first(seq24250__$4);
var seq24250__$5 = cljs.core.next(seq24250__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__24251,G__24252,G__24253,G__24254,G__24255,seq24250__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__10705__auto___24352 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24353 = arguments.length;
var i__10661__auto___24354 = (0);
while(true){
if((i__10661__auto___24354 < len__10660__auto___24353)){
args__10667__auto__.push((arguments[i__10661__auto___24354]));

var G__24355 = (i__10661__auto___24354 + (1));
i__10661__auto___24354 = G__24355;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24339__auto__","temp__24339__auto__",-850355048,null)),(function (){var x__10373__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24339__auto__","temp__24339__auto__",-850355048,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__24339__auto__","temp__24339__auto__",-850355048,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq24340){
var G__24341 = cljs.core.first(seq24340);
var seq24340__$1 = cljs.core.next(seq24340);
var G__24342 = cljs.core.first(seq24340__$1);
var seq24340__$2 = cljs.core.next(seq24340__$1);
var G__24343 = cljs.core.first(seq24340__$2);
var seq24340__$3 = cljs.core.next(seq24340__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__24341,G__24342,G__24343,seq24340__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24360_SHARP_){
if(cljs.core.seq_QMARK_(p1__24360_SHARP_)){
return cljs.core.first(p1__24360_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24360_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24360_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__24361_SHARP_){
return cljs.core.vector_QMARK_(p1__24361_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__24365 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__24366 = cljs.core.next(fdecls);
ret = G__24365;
fdecls = G__24366;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__10373__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
}
});
var ret__10705__auto___24372 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.array_seq([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.array_seq([cljs.core._conj((function (){var x__10373__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__24412 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__24413 = n;
var G__24414 = cljs.core.nnext(bs);
var G__24415 = true;
ret = G__24412;
n = G__24413;
bs = G__24414;
seen_rest_QMARK_ = G__24415;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__24420 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.array_seq([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10373__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__10373__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__10373__auto__ = gvec;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__24421 = (n + (1));
var G__24422 = cljs.core.next(bs);
var G__24423 = seen_rest_QMARK_;
ret = G__24420;
n = G__24421;
bs = G__24422;
seen_rest_QMARK_ = G__24423;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24373_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__9439__auto__ = mkns;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.namespace(p1__24373_SHARP_);
}
})(),cljs.core.name(p1__24373_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24374_SHARP_){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__9439__auto__ = mkns;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.namespace(p1__24374_SHARP_);
}
})(),cljs.core.name(p1__24374_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__24375_SHARP_,p2__24376_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24375_SHARP_,p2__24376_SHARP_,cljs.core.val(entry).call(null,p2__24376_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.array_seq([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__10373__auto__ = gmap;
return cljs.core._conj((function (){var x__10373__auto____$1 = bk;
return cljs.core._conj((function (){var x__10373__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$2);
})(),x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj((function (){var x__10373__auto__ = gmap;
return cljs.core._conj((function (){var x__10373__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__24464 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.array_seq([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__24465 = cljs.core.next(bes);
ret = G__24464;
bes = G__24465;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding form: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__6736__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__24377_SHARP_){
return (cljs.core.first(p1__24377_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__6736__auto__){
var kwbs = temp__6736__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__10705__auto___24502 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__10373__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__10705__auto___24514 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24515 = arguments.length;
var i__10661__auto___24516 = (0);
while(true){
if((i__10661__auto___24516 < len__10660__auto___24515)){
args__10667__auto__.push((arguments[i__10661__auto___24516]));

var G__24517 = (i__10661__auto___24516 + (1));
i__10661__auto___24516 = G__24517;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__10373__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq24510){
var G__24511 = cljs.core.first(seq24510);
var seq24510__$1 = cljs.core.next(seq24510);
var G__24512 = cljs.core.first(seq24510__$1);
var seq24510__$2 = cljs.core.next(seq24510__$1);
var G__24513 = cljs.core.first(seq24510__$2);
var seq24510__$3 = cljs.core.next(seq24510__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__24511,G__24512,G__24513,seq24510__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__10705__auto___24538 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24539 = arguments.length;
var i__10661__auto___24540 = (0);
while(true){
if((i__10661__auto___24540 < len__10660__auto___24539)){
args__10667__auto__.push((arguments[i__10661__auto___24540]));

var G__24541 = (i__10661__auto___24540 + (1));
i__10661__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__10373__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__24524){
var vec__24525 = p__24524;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24525,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24525,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq24519){
var G__24520 = cljs.core.first(seq24519);
var seq24519__$1 = cljs.core.next(seq24519);
var G__24521 = cljs.core.first(seq24519__$1);
var seq24519__$2 = cljs.core.next(seq24519__$1);
var G__24522 = cljs.core.first(seq24519__$2);
var seq24519__$3 = cljs.core.next(seq24519__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__24520,G__24521,G__24522,seq24519__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24544_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24544_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate((function (p__24546){
var vec__24548 = p__24546;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24548,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24548,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
var ret__10705__auto___24567 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24569 = arguments.length;
var i__10661__auto___24570 = (0);
while(true){
if((i__10661__auto___24570 < len__10660__auto___24569)){
args__10667__auto__.push((arguments[i__10661__auto___24570]));

var G__24571 = (i__10661__auto___24570 + (1));
i__10661__auto___24570 = G__24571;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq24562){
var G__24563 = cljs.core.first(seq24562);
var seq24562__$1 = cljs.core.next(seq24562);
var G__24564 = cljs.core.first(seq24562__$1);
var seq24562__$2 = cljs.core.next(seq24562__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__24563,G__24564,seq24562__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__9427__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__9427__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__9427__auto__;
}
});
var ret__10705__auto___24603 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args24583 = [];
var len__10660__auto___24604 = arguments.length;
var i__10661__auto___24605 = (0);
while(true){
if((i__10661__auto___24605 < len__10660__auto___24604)){
args24583.push((arguments[i__10661__auto___24605]));

var G__24606 = (i__10661__auto___24605 + (1));
i__10661__auto___24605 = G__24606;
continue;
} else {
}
break;
}

var G__24591 = args24583.length;
switch (G__24591) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24583.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10683__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24578_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24578_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24579_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24579_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10373__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__24581__auto__","and__24581__auto__",-2047865157,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__24581__auto__","and__24581__auto__",-2047865157,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__24581__auto__","and__24581__auto__",-2047865157,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq24584){
var G__24585 = cljs.core.first(seq24584);
var seq24584__$1 = cljs.core.next(seq24584);
var G__24586 = cljs.core.first(seq24584__$1);
var seq24584__$2 = cljs.core.next(seq24584__$1);
var G__24587 = cljs.core.first(seq24584__$2);
var seq24584__$3 = cljs.core.next(seq24584__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__24585,G__24586,G__24587,seq24584__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__10705__auto___24635 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args24620 = [];
var len__10660__auto___24636 = arguments.length;
var i__10661__auto___24637 = (0);
while(true){
if((i__10661__auto___24637 < len__10660__auto___24636)){
args24620.push((arguments[i__10661__auto___24637]));

var G__24638 = (i__10661__auto___24637 + (1));
i__10661__auto___24637 = G__24638;
continue;
} else {
}
break;
}

var G__24627 = args24620.length;
switch (G__24627) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24620.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10683__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24617_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24617_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24618_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24618_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10373__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__24619__auto__","or__24619__auto__",583099150,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__24619__auto__","or__24619__auto__",583099150,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__24619__auto__","or__24619__auto__",583099150,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq24621){
var G__24622 = cljs.core.first(seq24621);
var seq24621__$1 = cljs.core.next(seq24621);
var G__24623 = cljs.core.first(seq24621__$1);
var seq24621__$2 = cljs.core.next(seq24621__$1);
var G__24624 = cljs.core.first(seq24621__$2);
var seq24621__$3 = cljs.core.next(seq24621__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__24622,G__24623,G__24624,seq24621__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__10705__auto___24653 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24656 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24660 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__10705__auto___24669 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__10705__auto___24670 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__10705__auto___24679 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__10705__auto___24682 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__10705__auto___24683 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__10705__auto___24685 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = obj;
return cljs.core._conj((function (){var x__10373__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__10705__auto___24689 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = key;
return cljs.core._conj((function (){var x__10373__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__10705__auto___24690 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__10373__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__10705__auto___24700 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__24695 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__24696 = cljs.core.seq(vec__24695);
var first__24697 = cljs.core.first(seq__24696);
var seq__24696__$1 = cljs.core.next(seq__24696);
var x = first__24697;
var ys = seq__24696__$1;
return cljs.core._conj((function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24695,seq__24696,first__24697,seq__24696__$1,x,ys){
return (function (p1__24691_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__24691_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__24695,seq__24696,first__24697,seq__24696__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__10705__auto___24703 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj((function (){var x__10373__auto__ = cast_expr;
return cljs.core._conj((function (){var x__10373__auto____$1 = x;
return cljs.core._conj((function (){var x__10373__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$2);
})(),x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__10705__auto___24706 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__10705__auto___24707 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24708 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24709 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24712 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24719 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24724 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = a;
return cljs.core._conj((function (){var x__10373__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24731 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__24725__auto__","c__24725__auto__",-2003036657,null)),(function (){var x__10373__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__24726__auto__","x__24726__auto__",678240805,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__24726__auto__","x__24726__auto__",678240805,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__24725__auto__","c__24725__auto__",-2003036657,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24733 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24736 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24739 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___24753 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args24740 = [];
var len__10660__auto___24755 = arguments.length;
var i__10661__auto___24756 = (0);
while(true){
if((i__10661__auto___24756 < len__10660__auto___24755)){
args24740.push((arguments[i__10661__auto___24756]));

var G__24757 = (i__10661__auto___24756 + (1));
i__10661__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var G__24747 = args24740.length;
switch (G__24747) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24740.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = a;
return cljs.core._conj((function (){var x__10373__auto____$1 = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq24741){
var G__24742 = cljs.core.first(seq24741);
var seq24741__$1 = cljs.core.next(seq24741);
var G__24743 = cljs.core.first(seq24741__$1);
var seq24741__$2 = cljs.core.next(seq24741__$1);
var G__24744 = cljs.core.first(seq24741__$2);
var seq24741__$3 = cljs.core.next(seq24741__$2);
var G__24745 = cljs.core.first(seq24741__$3);
var seq24741__$4 = cljs.core.next(seq24741__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__24742,G__24743,G__24744,G__24745,seq24741__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__10705__auto___24776 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args24763 = [];
var len__10660__auto___24781 = arguments.length;
var i__10661__auto___24782 = (0);
while(true){
if((i__10661__auto___24782 < len__10660__auto___24781)){
args24763.push((arguments[i__10661__auto___24782]));

var G__24783 = (i__10661__auto___24782 + (1));
i__10661__auto___24782 = G__24783;
continue;
} else {
}
break;
}

var G__24771 = args24763.length;
switch (G__24771) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24763.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10683__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = a;
return cljs.core._conj((function (){var x__10373__auto____$1 = i;
return cljs.core._conj((function (){var x__10373__auto____$2 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$2);
})(),x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq24764){
var G__24765 = cljs.core.first(seq24764);
var seq24764__$1 = cljs.core.next(seq24764);
var G__24766 = cljs.core.first(seq24764__$1);
var seq24764__$2 = cljs.core.next(seq24764__$1);
var G__24767 = cljs.core.first(seq24764__$2);
var seq24764__$3 = cljs.core.next(seq24764__$2);
var G__24768 = cljs.core.first(seq24764__$3);
var seq24764__$4 = cljs.core.next(seq24764__$3);
var G__24769 = cljs.core.first(seq24764__$4);
var seq24764__$5 = cljs.core.next(seq24764__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__24765,G__24766,G__24767,G__24768,G__24769,seq24764__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__10705__auto___24815 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args24799 = [];
var len__10660__auto___24816 = arguments.length;
var i__10661__auto___24817 = (0);
while(true){
if((i__10661__auto___24817 < len__10660__auto___24816)){
args24799.push((arguments[i__10661__auto___24817]));

var G__24822 = (i__10661__auto___24817 + (1));
i__10661__auto___24817 = G__24822;
continue;
} else {
}
break;
}

var G__24806 = args24799.length;
switch (G__24806) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args24799.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq24800){
var G__24801 = cljs.core.first(seq24800);
var seq24800__$1 = cljs.core.next(seq24800);
var G__24802 = cljs.core.first(seq24800__$1);
var seq24800__$2 = cljs.core.next(seq24800__$1);
var G__24803 = cljs.core.first(seq24800__$2);
var seq24800__$3 = cljs.core.next(seq24800__$2);
var G__24804 = cljs.core.first(seq24800__$3);
var seq24800__$4 = cljs.core.next(seq24800__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__24801,G__24802,G__24803,G__24804,seq24800__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__10705__auto___24856 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__10705__auto___24857 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__10705__auto___24859 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__10705__auto___24860 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__10705__auto___24861 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__10705__auto___24864 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__10705__auto___24878 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__10705__auto___24880 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__10705__auto___24882 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__10705__auto___24898 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24899 = arguments.length;
var i__10661__auto___24900 = (0);
while(true){
if((i__10661__auto___24900 < len__10660__auto___24899)){
args__10667__auto__.push((arguments[i__10661__auto___24900]));

var G__24901 = (i__10661__auto___24900 + (1));
i__10661__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq24885){
var G__24889 = cljs.core.first(seq24885);
var seq24885__$1 = cljs.core.next(seq24885);
var G__24890 = cljs.core.first(seq24885__$1);
var seq24885__$2 = cljs.core.next(seq24885__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__24889,G__24890,seq24885__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__10705__auto___24912 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24913 = arguments.length;
var i__10661__auto___24914 = (0);
while(true){
if((i__10661__auto___24914 < len__10660__auto___24913)){
args__10667__auto__.push((arguments[i__10661__auto___24914]));

var G__24915 = (i__10661__auto___24914 + (1));
i__10661__auto___24914 = G__24915;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq24909){
var G__24910 = cljs.core.first(seq24909);
var seq24909__$1 = cljs.core.next(seq24909);
var G__24911 = cljs.core.first(seq24909__$1);
var seq24909__$2 = cljs.core.next(seq24909__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__24910,G__24911,seq24909__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__10705__auto___24916 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__10705__auto___24917 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__10705__auto___24921 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24922 = arguments.length;
var i__10661__auto___24923 = (0);
while(true){
if((i__10661__auto___24923 < len__10660__auto___24922)){
args__10667__auto__.push((arguments[i__10661__auto___24923]));

var G__24924 = (i__10661__auto___24923 + (1));
i__10661__auto___24923 = G__24924;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq24918){
var G__24919 = cljs.core.first(seq24918);
var seq24918__$1 = cljs.core.next(seq24918);
var G__24920 = cljs.core.first(seq24918__$1);
var seq24918__$2 = cljs.core.next(seq24918__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__24919,G__24920,seq24918__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__10705__auto___24925 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__10705__auto___24931 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__10705__auto___24940 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24941 = arguments.length;
var i__10661__auto___24942 = (0);
while(true){
if((i__10661__auto___24942 < len__10660__auto___24941)){
args__10667__auto__.push((arguments[i__10661__auto___24942]));

var G__24943 = (i__10661__auto___24942 + (1));
i__10661__auto___24942 = G__24943;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq24937){
var G__24938 = cljs.core.first(seq24937);
var seq24937__$1 = cljs.core.next(seq24937);
var G__24939 = cljs.core.first(seq24937__$1);
var seq24937__$2 = cljs.core.next(seq24937__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__24938,G__24939,seq24937__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__10705__auto___24950 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24953 = arguments.length;
var i__10661__auto___24954 = (0);
while(true){
if((i__10661__auto___24954 < len__10660__auto___24953)){
args__10667__auto__.push((arguments[i__10661__auto___24954]));

var G__24957 = (i__10661__auto___24954 + (1));
i__10661__auto___24954 = G__24957;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq24944){
var G__24945 = cljs.core.first(seq24944);
var seq24944__$1 = cljs.core.next(seq24944);
var G__24946 = cljs.core.first(seq24944__$1);
var seq24944__$2 = cljs.core.next(seq24944__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__24945,G__24946,seq24944__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__10705__auto___24967 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__10705__auto___24968 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__10705__auto___24969 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__10705__auto___24976 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10667__auto__ = [];
var len__10660__auto___24977 = arguments.length;
var i__10661__auto___24978 = (0);
while(true){
if((i__10661__auto___24978 < len__10660__auto___24977)){
args__10667__auto__.push((arguments[i__10661__auto___24978]));

var G__24980 = (i__10661__auto___24978 + (1));
i__10661__auto___24978 = G__24980;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq24973){
var G__24974 = cljs.core.first(seq24973);
var seq24973__$1 = cljs.core.next(seq24973);
var G__24975 = cljs.core.first(seq24973__$1);
var seq24973__$2 = cljs.core.next(seq24973__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__24974,G__24975,seq24973__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__10705__auto___25004 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25005 = arguments.length;
var i__10661__auto___25006 = (0);
while(true){
if((i__10661__auto___25006 < len__10660__auto___25005)){
args__10667__auto__.push((arguments[i__10661__auto___25006]));

var G__25007 = (i__10661__auto___25006 + (1));
i__10661__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq24991){
var G__24992 = cljs.core.first(seq24991);
var seq24991__$1 = cljs.core.next(seq24991);
var G__24993 = cljs.core.first(seq24991__$1);
var seq24991__$2 = cljs.core.next(seq24991__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__24992,G__24993,seq24991__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__10705__auto___25032 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args25008 = [];
var len__10660__auto___25037 = arguments.length;
var i__10661__auto___25038 = (0);
while(true){
if((i__10661__auto___25038 < len__10660__auto___25037)){
args25008.push((arguments[i__10661__auto___25038]));

var G__25039 = (i__10661__auto___25038 + (1));
i__10661__auto___25038 = G__25039;
continue;
} else {
}
break;
}

var G__25015 = args25008.length;
switch (G__25015) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25008.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq25009){
var G__25010 = cljs.core.first(seq25009);
var seq25009__$1 = cljs.core.next(seq25009);
var G__25011 = cljs.core.first(seq25009__$1);
var seq25009__$2 = cljs.core.next(seq25009__$1);
var G__25012 = cljs.core.first(seq25009__$2);
var seq25009__$3 = cljs.core.next(seq25009__$2);
var G__25013 = cljs.core.first(seq25009__$3);
var seq25009__$4 = cljs.core.next(seq25009__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__25010,G__25011,G__25012,G__25013,seq25009__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__10705__auto___25064 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args25048 = [];
var len__10660__auto___25065 = arguments.length;
var i__10661__auto___25066 = (0);
while(true){
if((i__10661__auto___25066 < len__10660__auto___25065)){
args25048.push((arguments[i__10661__auto___25066]));

var G__25067 = (i__10661__auto___25066 + (1));
i__10661__auto___25066 = G__25067;
continue;
} else {
}
break;
}

var G__25063 = args25048.length;
switch (G__25063) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25048.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq25049){
var G__25050 = cljs.core.first(seq25049);
var seq25049__$1 = cljs.core.next(seq25049);
var G__25051 = cljs.core.first(seq25049__$1);
var seq25049__$2 = cljs.core.next(seq25049__$1);
var G__25052 = cljs.core.first(seq25049__$2);
var seq25049__$3 = cljs.core.next(seq25049__$2);
var G__25053 = cljs.core.first(seq25049__$3);
var seq25049__$4 = cljs.core.next(seq25049__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25050,G__25051,G__25052,G__25053,seq25049__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__10705__auto___25102 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args25088 = [];
var len__10660__auto___25103 = arguments.length;
var i__10661__auto___25104 = (0);
while(true){
if((i__10661__auto___25104 < len__10660__auto___25103)){
args25088.push((arguments[i__10661__auto___25104]));

var G__25105 = (i__10661__auto___25104 + (1));
i__10661__auto___25104 = G__25105;
continue;
} else {
}
break;
}

var G__25101 = args25088.length;
switch (G__25101) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25088.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq25089){
var G__25090 = cljs.core.first(seq25089);
var seq25089__$1 = cljs.core.next(seq25089);
var G__25091 = cljs.core.first(seq25089__$1);
var seq25089__$2 = cljs.core.next(seq25089__$1);
var G__25092 = cljs.core.first(seq25089__$2);
var seq25089__$3 = cljs.core.next(seq25089__$2);
var G__25093 = cljs.core.first(seq25089__$3);
var seq25089__$4 = cljs.core.next(seq25089__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__25090,G__25091,G__25092,G__25093,seq25089__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__10705__auto___25117 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args25109 = [];
var len__10660__auto___25118 = arguments.length;
var i__10661__auto___25119 = (0);
while(true){
if((i__10661__auto___25119 < len__10660__auto___25118)){
args25109.push((arguments[i__10661__auto___25119]));

var G__25120 = (i__10661__auto___25119 + (1));
i__10661__auto___25119 = G__25120;
continue;
} else {
}
break;
}

var G__25116 = args25109.length;
switch (G__25116) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25109.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq25110){
var G__25111 = cljs.core.first(seq25110);
var seq25110__$1 = cljs.core.next(seq25110);
var G__25112 = cljs.core.first(seq25110__$1);
var seq25110__$2 = cljs.core.next(seq25110__$1);
var G__25113 = cljs.core.first(seq25110__$2);
var seq25110__$3 = cljs.core.next(seq25110__$2);
var G__25114 = cljs.core.first(seq25110__$3);
var seq25110__$4 = cljs.core.next(seq25110__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__25111,G__25112,G__25113,G__25114,seq25110__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__10705__auto___25167 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args25132 = [];
var len__10660__auto___25175 = arguments.length;
var i__10661__auto___25176 = (0);
while(true){
if((i__10661__auto___25176 < len__10660__auto___25175)){
args25132.push((arguments[i__10661__auto___25176]));

var G__25182 = (i__10661__auto___25176 + (1));
i__10661__auto___25176 = G__25182;
continue;
} else {
}
break;
}

var G__25142 = args25132.length;
switch (G__25142) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25132.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq25133){
var G__25134 = cljs.core.first(seq25133);
var seq25133__$1 = cljs.core.next(seq25133);
var G__25135 = cljs.core.first(seq25133__$1);
var seq25133__$2 = cljs.core.next(seq25133__$1);
var G__25136 = cljs.core.first(seq25133__$2);
var seq25133__$3 = cljs.core.next(seq25133__$2);
var G__25137 = cljs.core.first(seq25133__$3);
var seq25133__$4 = cljs.core.next(seq25133__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__25134,G__25135,G__25136,G__25137,seq25133__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__10705__auto___25199 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args25187 = [];
var len__10660__auto___25209 = arguments.length;
var i__10661__auto___25210 = (0);
while(true){
if((i__10661__auto___25210 < len__10660__auto___25209)){
args25187.push((arguments[i__10661__auto___25210]));

var G__25211 = (i__10661__auto___25210 + (1));
i__10661__auto___25210 = G__25211;
continue;
} else {
}
break;
}

var G__25194 = args25187.length;
switch (G__25194) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25187.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq25188){
var G__25189 = cljs.core.first(seq25188);
var seq25188__$1 = cljs.core.next(seq25188);
var G__25190 = cljs.core.first(seq25188__$1);
var seq25188__$2 = cljs.core.next(seq25188__$1);
var G__25191 = cljs.core.first(seq25188__$2);
var seq25188__$3 = cljs.core.next(seq25188__$2);
var G__25192 = cljs.core.first(seq25188__$3);
var seq25188__$4 = cljs.core.next(seq25188__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25189,G__25190,G__25191,G__25192,seq25188__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__10705__auto___25254 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args25235 = [];
var len__10660__auto___25255 = arguments.length;
var i__10661__auto___25256 = (0);
while(true){
if((i__10661__auto___25256 < len__10660__auto___25255)){
args25235.push((arguments[i__10661__auto___25256]));

var G__25257 = (i__10661__auto___25256 + (1));
i__10661__auto___25256 = G__25257;
continue;
} else {
}
break;
}

var G__25242 = args25235.length;
switch (G__25242) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25235.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq25236){
var G__25237 = cljs.core.first(seq25236);
var seq25236__$1 = cljs.core.next(seq25236);
var G__25238 = cljs.core.first(seq25236__$1);
var seq25236__$2 = cljs.core.next(seq25236__$1);
var G__25239 = cljs.core.first(seq25236__$2);
var seq25236__$3 = cljs.core.next(seq25236__$2);
var G__25240 = cljs.core.first(seq25236__$3);
var seq25236__$4 = cljs.core.next(seq25236__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__25237,G__25238,G__25239,G__25240,seq25236__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__10705__auto___25279 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args25267 = [];
var len__10660__auto___25280 = arguments.length;
var i__10661__auto___25281 = (0);
while(true){
if((i__10661__auto___25281 < len__10660__auto___25280)){
args25267.push((arguments[i__10661__auto___25281]));

var G__25282 = (i__10661__auto___25281 + (1));
i__10661__auto___25281 = G__25282;
continue;
} else {
}
break;
}

var G__25276 = args25267.length;
switch (G__25276) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25267.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq25268){
var G__25269 = cljs.core.first(seq25268);
var seq25268__$1 = cljs.core.next(seq25268);
var G__25270 = cljs.core.first(seq25268__$1);
var seq25268__$2 = cljs.core.next(seq25268__$1);
var G__25271 = cljs.core.first(seq25268__$2);
var seq25268__$3 = cljs.core.next(seq25268__$2);
var G__25272 = cljs.core.first(seq25268__$3);
var seq25268__$4 = cljs.core.next(seq25268__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25269,G__25270,G__25271,G__25272,seq25268__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__10705__auto___25308 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args25298 = [];
var len__10660__auto___25309 = arguments.length;
var i__10661__auto___25310 = (0);
while(true){
if((i__10661__auto___25310 < len__10660__auto___25309)){
args25298.push((arguments[i__10661__auto___25310]));

var G__25311 = (i__10661__auto___25310 + (1));
i__10661__auto___25310 = G__25311;
continue;
} else {
}
break;
}

var G__25307 = args25298.length;
switch (G__25307) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25298.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq25299){
var G__25300 = cljs.core.first(seq25299);
var seq25299__$1 = cljs.core.next(seq25299);
var G__25301 = cljs.core.first(seq25299__$1);
var seq25299__$2 = cljs.core.next(seq25299__$1);
var G__25302 = cljs.core.first(seq25299__$2);
var seq25299__$3 = cljs.core.next(seq25299__$2);
var G__25303 = cljs.core.first(seq25299__$3);
var seq25299__$4 = cljs.core.next(seq25299__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25300,G__25301,G__25302,G__25303,seq25299__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__10705__auto___25315 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__10705__auto___25316 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__10705__auto___25319 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___25320 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___25321 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___25336 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args25324 = [];
var len__10660__auto___25337 = arguments.length;
var i__10661__auto___25338 = (0);
while(true){
if((i__10661__auto___25338 < len__10660__auto___25337)){
args25324.push((arguments[i__10661__auto___25338]));

var G__25339 = (i__10661__auto___25338 + (1));
i__10661__auto___25338 = G__25339;
continue;
} else {
}
break;
}

var G__25331 = args25324.length;
switch (G__25331) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25324.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25322__auto__","x__25322__auto__",1395041740,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25323__auto__","y__25323__auto__",-772044156,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25322__auto__","x__25322__auto__",1395041740,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25323__auto__","y__25323__auto__",-772044156,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25322__auto__","x__25322__auto__",1395041740,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25323__auto__","y__25323__auto__",-772044156,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq25325){
var G__25326 = cljs.core.first(seq25325);
var seq25325__$1 = cljs.core.next(seq25325);
var G__25327 = cljs.core.first(seq25325__$1);
var seq25325__$2 = cljs.core.next(seq25325__$1);
var G__25328 = cljs.core.first(seq25325__$2);
var seq25325__$3 = cljs.core.next(seq25325__$2);
var G__25329 = cljs.core.first(seq25325__$3);
var seq25325__$4 = cljs.core.next(seq25325__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__25326,G__25327,G__25328,G__25329,seq25325__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__10705__auto___25365 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args25357 = [];
var len__10660__auto___25366 = arguments.length;
var i__10661__auto___25367 = (0);
while(true){
if((i__10661__auto___25367 < len__10660__auto___25366)){
args25357.push((arguments[i__10661__auto___25367]));

var G__25368 = (i__10661__auto___25367 + (1));
i__10661__auto___25367 = G__25368;
continue;
} else {
}
break;
}

var G__25364 = args25357.length;
switch (G__25364) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25357.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25355__auto__","x__25355__auto__",-1642339414,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25356__auto__","y__25356__auto__",-139648573,null)),(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25355__auto__","x__25355__auto__",-1642339414,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25356__auto__","y__25356__auto__",-139648573,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25355__auto__","x__25355__auto__",-1642339414,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__25356__auto__","y__25356__auto__",-139648573,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq25358){
var G__25359 = cljs.core.first(seq25358);
var seq25358__$1 = cljs.core.next(seq25358);
var G__25360 = cljs.core.first(seq25358__$1);
var seq25358__$2 = cljs.core.next(seq25358__$1);
var G__25361 = cljs.core.first(seq25358__$2);
var seq25358__$3 = cljs.core.next(seq25358__$2);
var G__25362 = cljs.core.first(seq25358__$3);
var seq25358__$4 = cljs.core.next(seq25358__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__25359,G__25360,G__25361,G__25362,seq25358__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__10705__auto___25370 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = num;
return cljs.core._conj((function (){var x__10373__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__10705__auto___25371 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__10705__auto___25380 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args25372 = [];
var len__10660__auto___25381 = arguments.length;
var i__10661__auto___25382 = (0);
while(true){
if((i__10661__auto___25382 < len__10660__auto___25381)){
args25372.push((arguments[i__10661__auto___25382]));

var G__25383 = (i__10661__auto___25382 + (1));
i__10661__auto___25382 = G__25383;
continue;
} else {
}
break;
}

var G__25379 = args25372.length;
switch (G__25379) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25372.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq25373){
var G__25374 = cljs.core.first(seq25373);
var seq25373__$1 = cljs.core.next(seq25373);
var G__25375 = cljs.core.first(seq25373__$1);
var seq25373__$2 = cljs.core.next(seq25373__$1);
var G__25376 = cljs.core.first(seq25373__$2);
var seq25373__$3 = cljs.core.next(seq25373__$2);
var G__25377 = cljs.core.first(seq25373__$3);
var seq25373__$4 = cljs.core.next(seq25373__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__25374,G__25375,G__25376,G__25377,seq25373__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__10705__auto___25395 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args25387 = [];
var len__10660__auto___25396 = arguments.length;
var i__10661__auto___25397 = (0);
while(true){
if((i__10661__auto___25397 < len__10660__auto___25396)){
args25387.push((arguments[i__10661__auto___25397]));

var G__25398 = (i__10661__auto___25397 + (1));
i__10661__auto___25397 = G__25398;
continue;
} else {
}
break;
}

var G__25394 = args25387.length;
switch (G__25394) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25387.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq25388){
var G__25389 = cljs.core.first(seq25388);
var seq25388__$1 = cljs.core.next(seq25388);
var G__25390 = cljs.core.first(seq25388__$1);
var seq25388__$2 = cljs.core.next(seq25388__$1);
var G__25391 = cljs.core.first(seq25388__$2);
var seq25388__$3 = cljs.core.next(seq25388__$2);
var G__25392 = cljs.core.first(seq25388__$3);
var seq25388__$4 = cljs.core.next(seq25388__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__25389,G__25390,G__25391,G__25392,seq25388__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__10705__auto___25408 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args25400 = [];
var len__10660__auto___25409 = arguments.length;
var i__10661__auto___25410 = (0);
while(true){
if((i__10661__auto___25410 < len__10660__auto___25409)){
args25400.push((arguments[i__10661__auto___25410]));

var G__25411 = (i__10661__auto___25410 + (1));
i__10661__auto___25410 = G__25411;
continue;
} else {
}
break;
}

var G__25407 = args25400.length;
switch (G__25407) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25400.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq25401){
var G__25402 = cljs.core.first(seq25401);
var seq25401__$1 = cljs.core.next(seq25401);
var G__25403 = cljs.core.first(seq25401__$1);
var seq25401__$2 = cljs.core.next(seq25401__$1);
var G__25404 = cljs.core.first(seq25401__$2);
var seq25401__$3 = cljs.core.next(seq25401__$2);
var G__25405 = cljs.core.first(seq25401__$3);
var seq25401__$4 = cljs.core.next(seq25401__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__25402,G__25403,G__25404,G__25405,seq25401__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__10705__auto___25413 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__10705__auto___25422 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args25414 = [];
var len__10660__auto___25423 = arguments.length;
var i__10661__auto___25424 = (0);
while(true){
if((i__10661__auto___25424 < len__10660__auto___25423)){
args25414.push((arguments[i__10661__auto___25424]));

var G__25425 = (i__10661__auto___25424 + (1));
i__10661__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var G__25421 = args25414.length;
switch (G__25421) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25414.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq25415){
var G__25416 = cljs.core.first(seq25415);
var seq25415__$1 = cljs.core.next(seq25415);
var G__25417 = cljs.core.first(seq25415__$1);
var seq25415__$2 = cljs.core.next(seq25415__$1);
var G__25418 = cljs.core.first(seq25415__$2);
var seq25415__$3 = cljs.core.next(seq25415__$2);
var G__25419 = cljs.core.first(seq25415__$3);
var seq25415__$4 = cljs.core.next(seq25415__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__25416,G__25417,G__25418,G__25419,seq25415__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__10705__auto___25435 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args25427 = [];
var len__10660__auto___25436 = arguments.length;
var i__10661__auto___25437 = (0);
while(true){
if((i__10661__auto___25437 < len__10660__auto___25436)){
args25427.push((arguments[i__10661__auto___25437]));

var G__25438 = (i__10661__auto___25437 + (1));
i__10661__auto___25437 = G__25438;
continue;
} else {
}
break;
}

var G__25434 = args25427.length;
switch (G__25434) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args25427.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq25428){
var G__25429 = cljs.core.first(seq25428);
var seq25428__$1 = cljs.core.next(seq25428);
var G__25430 = cljs.core.first(seq25428__$1);
var seq25428__$2 = cljs.core.next(seq25428__$1);
var G__25431 = cljs.core.first(seq25428__$2);
var seq25428__$3 = cljs.core.next(seq25428__$2);
var G__25432 = cljs.core.first(seq25428__$3);
var seq25428__$4 = cljs.core.next(seq25428__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__25429,G__25430,G__25431,G__25432,seq25428__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__10705__auto___25440 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__10705__auto___25441 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__10705__auto___25442 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__10705__auto___25443 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__10705__auto___25444 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__10705__auto___25445 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__10705__auto___25446 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__10705__auto___25447 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = x;
return cljs.core._conj((function (){var x__10373__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__10705__auto___25448 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = hash;
return cljs.core._conj((function (){var x__10373__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__10705__auto___25449 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__10373__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__10705__auto___25451 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null)),(function (){var x__10373__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__25450__auto__","h__25450__auto__",-1537872201,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25452__auto__","x__25452__auto__",-914707644,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25452__auto__","x__25452__auto__",-914707644,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
var ret__10705__auto___25460 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25461 = arguments.length;
var i__10661__auto___25462 = (0);
while(true){
if((i__10661__auto___25462 < len__10660__auto___25461)){
args__10667__auto__.push((arguments[i__10661__auto___25462]));

var G__25463 = (i__10661__auto___25462 + (1));
i__10661__auto___25462 = G__25463;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((6) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10668__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq25453){
var G__25454 = cljs.core.first(seq25453);
var seq25453__$1 = cljs.core.next(seq25453);
var G__25455 = cljs.core.first(seq25453__$1);
var seq25453__$2 = cljs.core.next(seq25453__$1);
var G__25456 = cljs.core.first(seq25453__$2);
var seq25453__$3 = cljs.core.next(seq25453__$2);
var G__25457 = cljs.core.first(seq25453__$3);
var seq25453__$4 = cljs.core.next(seq25453__$3);
var G__25458 = cljs.core.first(seq25453__$4);
var seq25453__$5 = cljs.core.next(seq25453__$4);
var G__25459 = cljs.core.first(seq25453__$5);
var seq25453__$6 = cljs.core.next(seq25453__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__25454,G__25455,G__25456,G__25457,G__25458,G__25459,seq25453__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = clojure.walk.postwalk((function (p1__25464_SHARP_){
if(cljs.core.sequential_QMARK_(p1__25464_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__25464_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__25464_SHARP_));
} else {
return p1__25464_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
var ret__10705__auto___25472 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__25465,fkv){
var vec__25469 = p__25465;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25469,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25469,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__10705__auto___25476 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25477 = arguments.length;
var i__10661__auto___25478 = (0);
while(true){
if((i__10661__auto___25478 < len__10660__auto___25477)){
args__10667__auto__.push((arguments[i__10661__auto___25478]));

var G__25479 = (i__10661__auto___25478 + (1));
i__10661__auto___25478 = G__25479;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__10373__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__10373__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__10373__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq25473){
var G__25474 = cljs.core.first(seq25473);
var seq25473__$1 = cljs.core.next(seq25473);
var G__25475 = cljs.core.first(seq25473__$1);
var seq25473__$2 = cljs.core.next(seq25473__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__25474,G__25475,seq25473__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__10705__auto___25484 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25485 = arguments.length;
var i__10661__auto___25486 = (0);
while(true){
if((i__10661__auto___25486 < len__10660__auto___25485)){
args__10667__auto__.push((arguments[i__10661__auto___25486]));

var G__25487 = (i__10661__auto___25486 + (1));
i__10661__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq25480){
var G__25481 = cljs.core.first(seq25480);
var seq25480__$1 = cljs.core.next(seq25480);
var G__25482 = cljs.core.first(seq25480__$1);
var seq25480__$2 = cljs.core.next(seq25480__$1);
var G__25483 = cljs.core.first(seq25480__$2);
var seq25480__$3 = cljs.core.next(seq25480__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25481,G__25482,G__25483,seq25480__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__10705__auto___25492 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25493 = arguments.length;
var i__10661__auto___25494 = (0);
while(true){
if((i__10661__auto___25494 < len__10660__auto___25493)){
args__10667__auto__.push((arguments[i__10661__auto___25494]));

var G__25495 = (i__10661__auto___25494 + (1));
i__10661__auto___25494 = G__25495;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq25488){
var G__25489 = cljs.core.first(seq25488);
var seq25488__$1 = cljs.core.next(seq25488);
var G__25490 = cljs.core.first(seq25488__$1);
var seq25488__$2 = cljs.core.next(seq25488__$1);
var G__25491 = cljs.core.first(seq25488__$2);
var seq25488__$3 = cljs.core.next(seq25488__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__25489,G__25490,G__25491,seq25488__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__10705__auto___25496 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__10705__auto___25501 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25502 = arguments.length;
var i__10661__auto___25503 = (0);
while(true){
if((i__10661__auto___25503 < len__10660__auto___25502)){
args__10667__auto__.push((arguments[i__10661__auto___25503]));

var G__25504 = (i__10661__auto___25503 + (1));
i__10661__auto___25503 = G__25504;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq25497){
var G__25498 = cljs.core.first(seq25497);
var seq25497__$1 = cljs.core.next(seq25497);
var G__25499 = cljs.core.first(seq25497__$1);
var seq25497__$2 = cljs.core.next(seq25497__$1);
var G__25500 = cljs.core.first(seq25497__$2);
var seq25497__$3 = cljs.core.next(seq25497__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__25498,G__25499,G__25500,seq25497__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__6736__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__6736__auto__)){
var var$ = temp__6736__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__9427__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__9427__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__6736__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__6736__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__25505 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__25506 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__25505;
s = G__25506;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__25507){
var vec__25515 = p__25507;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25515,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25515,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__25515,p,sigs){
return (function (p__25518){
var vec__25519 = p__25518;
var seq__25520 = cljs.core.seq(vec__25519);
var first__25521 = cljs.core.first(seq__25520);
var seq__25520__$1 = cljs.core.next(seq__25520);
var f = first__25521;
var meths = seq__25520__$1;
var form = vec__25519;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__25515,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__10470__auto__ = (function (){var G__25522 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25522) : cljs.core.atom.call(null,G__25522));
})();
var prefer_table__10471__auto__ = (function (){var G__25523 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25523) : cljs.core.atom.call(null,G__25523));
})();
var method_cache__10472__auto__ = (function (){var G__25524 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25524) : cljs.core.atom.call(null,G__25524));
})();
var cached_hierarchy__10473__auto__ = (function (){var G__25525 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25525) : cljs.core.atom.call(null,G__25525));
})();
var hierarchy__10474__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__,hierarchy__10474__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__,hierarchy__10474__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10474__auto__,method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10373__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10373__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__10373__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__25526){
var vec__25533 = p__25526;
var seq__25534 = cljs.core.seq(vec__25533);
var first__25535 = cljs.core.first(seq__25534);
var seq__25534__$1 = cljs.core.next(seq__25534);
var vec__25536 = first__25535;
var seq__25537 = cljs.core.seq(vec__25536);
var first__25538 = cljs.core.first(seq__25537);
var seq__25537__$1 = cljs.core.next(seq__25537);
var this$ = first__25538;
var args = seq__25537__$1;
var sig = vec__25536;
var body = seq__25534__$1;
var x__10373__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__10373__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__25539){
var vec__25546 = p__25539;
var seq__25547 = cljs.core.seq(vec__25546);
var first__25548 = cljs.core.first(seq__25547);
var seq__25547__$1 = cljs.core.next(seq__25547);
var vec__25549 = first__25548;
var seq__25550 = cljs.core.seq(vec__25549);
var first__25551 = cljs.core.first(seq__25550);
var seq__25550__$1 = cljs.core.next(seq__25550);
var this$ = first__25551;
var args = seq__25550__$1;
var sig = vec__25549;
var body = seq__25547__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10373__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__25552){
var vec__25559 = p__25552;
var seq__25560 = cljs.core.seq(vec__25559);
var first__25561 = cljs.core.first(seq__25560);
var seq__25560__$1 = cljs.core.next(seq__25560);
var vec__25562 = first__25561;
var seq__25563 = cljs.core.seq(vec__25562);
var first__25564 = cljs.core.first(seq__25563);
var seq__25563__$1 = cljs.core.next(seq__25563);
var this$ = first__25564;
var args = seq__25563__$1;
var sig = vec__25562;
var body = seq__25560__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10373__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__25565){
var vec__25572 = p__25565;
var seq__25573 = cljs.core.seq(vec__25572);
var first__25574 = cljs.core.first(seq__25573);
var seq__25573__$1 = cljs.core.next(seq__25573);
var vec__25575 = first__25574;
var seq__25576 = cljs.core.seq(vec__25575);
var first__25577 = cljs.core.first(seq__25576);
var seq__25576__$1 = cljs.core.next(seq__25576);
var this$ = first__25577;
var args = seq__25576__$1;
var sig = vec__25575;
var body = seq__25573__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10373__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25586){
var vec__25587 = p__25586;
var seq__25588 = cljs.core.seq(vec__25587);
var first__25589 = cljs.core.first(seq__25588);
var seq__25588__$1 = cljs.core.next(seq__25588);
var f = first__25589;
var meths = seq__25588__$1;
var form = vec__25587;
var vec__25590 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25590,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25590,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25590,f__$1,meths__$1,vec__25587,seq__25588,first__25589,seq__25588__$1,f,meths,form){
return (function (p1__25578_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__25578_SHARP_);
});})(vec__25590,f__$1,meths__$1,vec__25587,seq__25588,first__25589,seq__25588__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__25594){
var vec__25602 = p__25594;
var seq__25603 = cljs.core.seq(vec__25602);
var first__25604 = cljs.core.first(seq__25603);
var seq__25603__$1 = cljs.core.next(seq__25603);
var f = first__25604;
var meths = seq__25603__$1;
var form = vec__25602;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25602,seq__25603,first__25604,seq__25603__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (function (){var G__25607 = type_sym;
var G__25608 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25607,G__25608) : cljs.core$macros.extend_prefix.call(null,G__25607,G__25608));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(vec__25602,seq__25603,first__25604,seq__25603__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25602,seq__25603,first__25604,seq__25603__$1,f,meths,form){
return (function (p1__25593_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__25593_SHARP_);
});})(vec__25602,seq__25603,first__25604,seq__25603__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__25610){
var vec__25622 = p__25610;
var seq__25623 = cljs.core.seq(vec__25622);
var first__25624 = cljs.core.first(seq__25623);
var seq__25623__$1 = cljs.core.next(seq__25623);
var f = first__25624;
var meths = seq__25623__$1;
var form = vec__25622;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25622,seq__25623,first__25624,seq__25623__$1,f,meths,form){
return (function (p1__25609_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__25609_SHARP_);
});})(vec__25622,seq__25623,first__25624,seq__25623__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (function (){var G__25627 = type_sym;
var G__25628 = new cljs.core.Symbol(null,"call","call",1120531661,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25627,G__25628) : cljs.core$macros.extend_prefix.call(null,G__25627,G__25628));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (function (){var G__25631 = type_sym;
var G__25632 = new cljs.core.Symbol(null,"apply","apply",-1334050276,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25631,G__25632) : cljs.core$macros.extend_prefix.call(null,G__25631,G__25632));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__10373__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__10373__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__25633){
var vec__25649 = p__25633;
var seq__25650 = cljs.core.seq(vec__25649);
var first__25651 = cljs.core.first(seq__25650);
var seq__25650__$1 = cljs.core.next(seq__25650);
var f = first__25651;
var meths = seq__25650__$1;
var form = vec__25649;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (function (){var G__25654 = type_sym;
var G__25655 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25654,G__25655) : cljs.core$macros.extend_prefix.call(null,G__25654,G__25655));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__25649,seq__25650,first__25651,seq__25650__$1,f,meths,form){
return (function (p__25656){
var vec__25657 = p__25656;
var seq__25658 = cljs.core.seq(vec__25657);
var first__25659 = cljs.core.first(seq__25658);
var seq__25658__$1 = cljs.core.next(seq__25658);
var sig = first__25659;
var body = seq__25658__$1;
var meth = vec__25657;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (function (){var G__25662 = type_sym;
var G__25663 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25662,G__25663) : cljs.core$macros.extend_prefix.call(null,G__25662,G__25663));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(pf,vec__25649,seq__25650,first__25651,seq__25650__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__25664){
var vec__25668 = p__25664;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25668,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25668,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__25668,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__25668,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__25674 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25674,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25674,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_25677 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_25677))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__25678 = cljs.core.next(sigs__$1);
var G__25679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__25678;
seen = G__25679;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_25686 = cljs.core.PersistentHashSet.EMPTY;
var methods_25687__$1 = methods$;
while(true){
if(cljs.core.seq(methods_25687__$1)){
var vec__25683_25688 = cljs.core.first(methods_25687__$1);
var fname_25689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25683_25688,(0),null);
var method_25690 = vec__25683_25688;
if(cljs.core.contains_QMARK_(seen_25686,fname_25689)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_25689], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_25690);

var G__25691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_25686,fname_25689);
var G__25692 = cljs.core.next(methods_25687__$1);
seen_25686 = G__25691;
methods_25687__$1 = G__25692;
continue;
} else {
}
break;
}

var G__25693 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__25694 = impls__$2;
protos = G__25693;
impls__$1 = G__25694;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__10705__auto___25703 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25704 = arguments.length;
var i__10661__auto___25705 = (0);
while(true){
if((i__10661__auto___25705 < len__10660__auto___25704)){
args__10667__auto__.push((arguments[i__10661__auto___25705]));

var G__25706 = (i__10661__auto___25705 + (1));
i__10661__auto___25705 = G__25706;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__25700 = (function (){var temp__6736__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__6736__auto__)){
var type = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25700,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25700,(1),null);
if(cljs.core.truth_((function (){var and__9427__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__9427__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__9427__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__25700,type,assign_impls){
return (function (p1__25695_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__25695_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__25695_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__25700,type,assign_impls))
,cljs.core.array_seq([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq25696){
var G__25697 = cljs.core.first(seq25696);
var seq25696__$1 = cljs.core.next(seq25696);
var G__25698 = cljs.core.first(seq25696__$1);
var seq25696__$2 = cljs.core.next(seq25696__$1);
var G__25699 = cljs.core.first(seq25696__$2);
var seq25696__$3 = cljs.core.next(seq25696__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__25697,G__25698,G__25699,seq25696__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__25708){
var vec__25712 = p__25708;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25712,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25712,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25712,f,sigs){
return (function (p1__25707_SHARP_){
return cljs.core.cons(cljs.core.second(p1__25707_SHARP_),cljs.core.nnext(p1__25707_SHARP_));
});})(vec__25712,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args25715 = [];
var len__10660__auto___25718 = arguments.length;
var i__10661__auto___25719 = (0);
while(true){
if((i__10661__auto___25719 < len__10660__auto___25718)){
args25715.push((arguments[i__10661__auto___25719]));

var G__25720 = (i__10661__auto___25719 + (1));
i__10661__auto___25719 = G__25720;
continue;
} else {
}
break;
}

var G__25717 = args25715.length;
switch (G__25717) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25715.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__25722 = ret__$1;
var G__25723 = specs__$2;
ret = G__25722;
specs__$1 = G__25723;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25724_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__25724_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10373__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", no fields vector given.")].join('')));
}
});
var ret__10705__auto___25736 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25737 = arguments.length;
var i__10661__auto___25738 = (0);
while(true){
if((i__10661__auto___25738 < len__10660__auto___25737)){
args__10667__auto__.push((arguments[i__10661__auto___25738]));

var G__25739 = (i__10661__auto___25738 + (1));
i__10661__auto___25738 = G__25739;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__25733 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25733,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25733,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25725__auto__","this__25725__auto__",-988462049,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25726__auto__","writer__25726__auto__",1909775635,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__25727__auto__","opt__25727__auto__",-1611177316,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25726__auto__","writer__25726__auto__",1909775635,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq25728){
var G__25729 = cljs.core.first(seq25728);
var seq25728__$1 = cljs.core.next(seq25728);
var G__25730 = cljs.core.first(seq25728__$1);
var seq25728__$2 = cljs.core.next(seq25728__$1);
var G__25731 = cljs.core.first(seq25728__$2);
var seq25728__$3 = cljs.core.next(seq25728__$2);
var G__25732 = cljs.core.first(seq25728__$3);
var seq25728__$4 = cljs.core.next(seq25728__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__25729,G__25730,G__25731,G__25732,seq25728__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__25740_SHARP_){
return cljs.core.with_meta(p1__25740_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.array_seq([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25741__auto__","this__25741__auto__",1914480714,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25742__auto__","this__25742__auto__",425366945,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25742__auto__","this__25742__auto__",425366945,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25743__auto__","this__25743__auto__",-538121972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25744__auto__","other__25744__auto__",1765205260,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25744__auto__","other__25744__auto__",1765205260,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25743__auto__","this__25743__auto__",-538121972,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25744__auto__","other__25744__auto__",1765205260,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25743__auto__","this__25743__auto__",-538121972,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25744__auto__","other__25744__auto__",1765205260,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25745__auto__","this__25745__auto__",-1572730858,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25746__auto__","this__25746__auto__",559382428,null)),(function (){var x__10373__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25747__auto__","this__25747__auto__",1299789541,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25748__auto__","k__25748__auto__",816614398,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25747__auto__","this__25747__auto__",1299789541,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25748__auto__","k__25748__auto__",816614398,null)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25749__auto__","this__25749__auto__",-71364103,null)),(function (){var x__10373__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__25750__auto__","else__25750__auto__",1151458479,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__10373__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__25750__auto__","else__25750__auto__",1151458479,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25751__auto__","this__25751__auto__",-1569161172,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10373__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25752__auto__","this__25752__auto__",-938500792,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25753__auto__","entry__25753__auto__",-1693378944,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25753__auto__","entry__25753__auto__",-1693378944,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25752__auto__","this__25752__auto__",-938500792,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25753__auto__","entry__25753__auto__",-1693378944,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25753__auto__","entry__25753__auto__",-1693378944,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25752__auto__","this__25752__auto__",-938500792,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25753__auto__","entry__25753__auto__",-1693378944,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25754__auto__","this__25754__auto__",1328663436,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25755__auto__","k__25755__auto__",-1173352018,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25755__auto__","k__25755__auto__",-1173352018,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25755__auto__","k__25755__auto__",-1173352018,null)),(function (){var x__10373__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25756__auto__","this__25756__auto__",-899155340,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25757__auto__","k__25757__auto__",2093462739,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25757__auto__","k__25757__auto__",2093462739,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25756__auto__","this__25756__auto__",-899155340,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25757__auto__","k__25757__auto__",2093462739,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25757__auto__","k__25757__auto__",2093462739,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25759__auto__","this__25759__auto__",1917726800,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25758_SHARP_){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25758_SHARP_);
return cljs.core._conj((function (){var x__10373__auto____$1 = p1__25758_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__10373__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25761__auto__","this__25761__auto__",-1539271384,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25762__auto__","writer__25762__auto__",-774203966,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25763__auto__","opts__25763__auto__",-1414057468,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__25764__auto__","pr-pair__25764__auto__",-1859337627,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__25765__auto__","keyval__25765__auto__",-1437588806,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25762__auto__","writer__25762__auto__",-774203966,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25763__auto__","opts__25763__auto__",-1414057468,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__25765__auto__","keyval__25765__auto__",-1437588806,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25762__auto__","writer__25762__auto__",-774203966,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__25764__auto__","pr-pair__25764__auto__",-1859337627,null)),(function (){var x__10373__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25763__auto__","opts__25763__auto__",-1414057468,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25760_SHARP_){
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25760_SHARP_);
return cljs.core._conj((function (){var x__10373__auto____$1 = p1__25760_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null));
var vec__25769 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__10373__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10373__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10373__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__10373__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
var ret__10705__auto___25779 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25780 = arguments.length;
var i__10661__auto___25781 = (0);
while(true){
if((i__10661__auto___25781 < len__10660__auto___25780)){
args__10667__auto__.push((arguments[i__10661__auto___25781]));

var G__25782 = (i__10661__auto___25781 + (1));
i__10661__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__10373__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__10373__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__10373__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25772__auto__","this__25772__auto__",338566602,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__10373__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25772__auto__","this__25772__auto__",338566602,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25773__auto__","writer__25773__auto__",1371710949,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25773__auto__","writer__25773__auto__",1371710949,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first(seq25774);
var seq25774__$1 = cljs.core.next(seq25774);
var G__25776 = cljs.core.first(seq25774__$1);
var seq25774__$2 = cljs.core.next(seq25774__$1);
var G__25777 = cljs.core.first(seq25774__$2);
var seq25774__$3 = cljs.core.next(seq25774__$2);
var G__25778 = cljs.core.first(seq25774__$3);
var seq25774__$4 = cljs.core.next(seq25774__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__25775,G__25776,G__25777,G__25778,seq25774__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__10705__auto___25810 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25811 = arguments.length;
var i__10661__auto___25812 = (0);
while(true){
if((i__10661__auto___25812 < len__10660__auto___25811)){
args__10667__auto__.push((arguments[i__10661__auto___25812]));

var G__25813 = (i__10661__auto___25812 + (1));
i__10661__auto___25812 = G__25813;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__25789 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25789,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25789,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__25789,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__25789,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__25792 = cljs.core.seq(methods$);
var chunk__25793 = null;
var count__25794 = (0);
var i__25795 = (0);
while(true){
if((i__25795 < count__25794)){
var vec__25796 = chunk__25793.cljs$core$IIndexed$_nth$arity$2(null,i__25795);
var seq__25797 = cljs.core.seq(vec__25796);
var first__25798 = cljs.core.first(seq__25797);
var seq__25797__$1 = cljs.core.next(seq__25797);
var mname = first__25798;
var arities = seq__25797__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25814 = seq__25792;
var G__25815 = chunk__25793;
var G__25816 = count__25794;
var G__25817 = (i__25795 + (1));
seq__25792 = G__25814;
chunk__25793 = G__25815;
count__25794 = G__25816;
i__25795 = G__25817;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__25792);
if(temp__6738__auto__){
var seq__25792__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25792__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__25792__$1);
var G__25818 = cljs.core.chunk_rest(seq__25792__$1);
var G__25819 = c__10350__auto__;
var G__25820 = cljs.core.count(c__10350__auto__);
var G__25821 = (0);
seq__25792 = G__25818;
chunk__25793 = G__25819;
count__25794 = G__25820;
i__25795 = G__25821;
continue;
} else {
var vec__25799 = cljs.core.first(seq__25792__$1);
var seq__25800 = cljs.core.seq(vec__25799);
var first__25801 = cljs.core.first(seq__25800);
var seq__25800__$1 = cljs.core.next(seq__25800);
var mname = first__25801;
var arities = seq__25800__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25822 = cljs.core.next(seq__25792__$1);
var G__25823 = null;
var G__25824 = (0);
var G__25825 = (0);
seq__25792 = G__25822;
chunk__25793 = G__25823;
count__25794 = G__25824;
i__25795 = G__25825;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25783__auto__","x__25783__auto__",-1065493594,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10373__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25783__auto__","x__25783__auto__",-1065493594,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10373__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25784__auto__","m__25784__auto__",192300994,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__25802){
var vec__25803 = p__25802;
var seq__25804 = cljs.core.seq(vec__25803);
var first__25805 = cljs.core.first(seq__25804);
var seq__25804__$1 = cljs.core.next(seq__25804);
var fname = first__25805;
var sigs = seq__25804__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__25806){
var vec__25807 = p__25806;
var seq__25808 = cljs.core.seq(vec__25807);
var first__25809 = cljs.core.first(seq__25808);
var seq__25808__$1 = cljs.core.next(seq__25808);
var fname = first__25809;
var sigs = seq__25808__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10373__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__25807,seq__25808,first__25809,seq__25808__$1,fname,sigs,p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__25807,seq__25808,first__25809,seq__25808__$1,fname,sigs,p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__25789,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10373__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq25785){
var G__25786 = cljs.core.first(seq25785);
var seq25785__$1 = cljs.core.next(seq25785);
var G__25787 = cljs.core.first(seq25785__$1);
var seq25785__$2 = cljs.core.next(seq25785__$1);
var G__25788 = cljs.core.first(seq25785__$2);
var seq25785__$3 = cljs.core.next(seq25785__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__25786,G__25787,G__25788,seq25785__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__10705__auto___25832 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25829 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25829,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25829,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10373__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10373__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___25839 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25836 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25836,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25836,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10373__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10373__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10373__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10373__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10373__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10373__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__10705__auto___25843 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25844 = arguments.length;
var i__10661__auto___25845 = (0);
while(true){
if((i__10661__auto___25845 < len__10660__auto___25844)){
args__10667__auto__.push((arguments[i__10661__auto___25845]));

var G__25846 = (i__10661__auto___25845 + (1));
i__10661__auto___25845 = G__25846;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq25840){
var G__25841 = cljs.core.first(seq25840);
var seq25840__$1 = cljs.core.next(seq25840);
var G__25842 = cljs.core.first(seq25840__$1);
var seq25840__$2 = cljs.core.next(seq25840__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__25841,G__25842,seq25840__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__10705__auto___25850 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25851 = arguments.length;
var i__10661__auto___25852 = (0);
while(true){
if((i__10661__auto___25852 < len__10660__auto___25851)){
args__10667__auto__.push((arguments[i__10661__auto___25852]));

var G__25853 = (i__10661__auto___25852 + (1));
i__10661__auto___25852 = G__25853;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq25847){
var G__25848 = cljs.core.first(seq25847);
var seq25847__$1 = cljs.core.next(seq25847);
var G__25849 = cljs.core.first(seq25847__$1);
var seq25847__$2 = cljs.core.next(seq25847__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__25848,G__25849,seq25847__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__10705__auto___25862 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25863 = arguments.length;
var i__10661__auto___25864 = (0);
while(true){
if((i__10661__auto___25864 < len__10660__auto___25863)){
args__10667__auto__.push((arguments[i__10661__auto___25864]));

var G__25865 = (i__10661__auto___25864 + (1));
i__10661__auto___25864 = G__25865;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__25858){
var vec__25859 = p__25858;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(1),null);
return cljs.core._conj((function (){var x__10373__auto__ = k;
return cljs.core._conj((function (){var x__10373__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq25854){
var G__25855 = cljs.core.first(seq25854);
var seq25854__$1 = cljs.core.next(seq25854);
var G__25856 = cljs.core.first(seq25854__$1);
var seq25854__$2 = cljs.core.next(seq25854__$1);
var G__25857 = cljs.core.first(seq25854__$2);
var seq25854__$3 = cljs.core.next(seq25854__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__25855,G__25856,G__25857,seq25854__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__10705__auto___25870 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25871 = arguments.length;
var i__10661__auto___25872 = (0);
while(true){
if((i__10661__auto___25872 < len__10660__auto___25871)){
args__10667__auto__.push((arguments[i__10661__auto___25872]));

var G__25873 = (i__10661__auto___25872 + (1));
i__10661__auto___25872 = G__25873;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__10373__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq25866){
var G__25867 = cljs.core.first(seq25866);
var seq25866__$1 = cljs.core.next(seq25866);
var G__25868 = cljs.core.first(seq25866__$1);
var seq25866__$2 = cljs.core.next(seq25866__$1);
var G__25869 = cljs.core.first(seq25866__$2);
var seq25866__$3 = cljs.core.next(seq25866__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__25867,G__25868,G__25869,seq25866__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__10705__auto___25892 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25893 = arguments.length;
var i__10661__auto___25894 = (0);
while(true){
if((i__10661__auto___25894 < len__10660__auto___25893)){
args__10667__auto__.push((arguments[i__10661__auto___25894]));

var G__25895 = (i__10661__auto___25894 + (1));
i__10661__auto___25894 = G__25895;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__25886 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__25889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25886,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25889,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25889,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25889,(2),null);
var clause = vec__25889;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25886,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__10373__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__25874__auto__","p__25874__auto__",882355,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__25874__auto__","p__25874__auto__",882355,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq25875){
var G__25876 = cljs.core.first(seq25875);
var seq25875__$1 = cljs.core.next(seq25875);
var G__25877 = cljs.core.first(seq25875__$1);
var seq25875__$2 = cljs.core.next(seq25875__$1);
var G__25878 = cljs.core.first(seq25875__$2);
var seq25875__$3 = cljs.core.next(seq25875__$2);
var G__25879 = cljs.core.first(seq25875__$3);
var seq25875__$4 = cljs.core.next(seq25875__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__25876,G__25877,G__25878,G__25879,seq25875__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicate case test constant '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__9427__auto__ = cljs.core.list_QMARK_(x);
if(and__9427__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__9427__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__10705__auto___25916 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__10667__auto__ = [];
var len__10660__auto___25917 = arguments.length;
var i__10661__auto___25918 = (0);
while(true){
if((i__10661__auto___25918 < len__10660__auto___25917)){
args__10667__auto__.push((arguments[i__10661__auto___25918]));

var G__25919 = (i__10661__auto___25918 + (1));
i__10661__auto___25918 = G__25919;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__10373__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__25904){
var vec__25905 = p__25904;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__25905,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__10373__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__25905,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__10373__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__25896_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__25896_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__25897_SHARP_){
if(cljs.core.seq_QMARK_(p1__25897_SHARP_)){
return cljs.core.vec(p1__25897_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25897_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25899_SHARP_){
if(cljs.core.seq_QMARK_(p1__25899_SHARP_)){
return cljs.core.vec(p1__25899_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25899_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25898_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25898_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__25912){
var vec__25913 = p__25912;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25913,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25913,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10373__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__10373__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq25900){
var G__25901 = cljs.core.first(seq25900);
var seq25900__$1 = cljs.core.next(seq25900);
var G__25902 = cljs.core.first(seq25900__$1);
var seq25900__$2 = cljs.core.next(seq25900__$1);
var G__25903 = cljs.core.first(seq25900__$2);
var seq25900__$3 = cljs.core.next(seq25900__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__25901,G__25902,G__25903,seq25900__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__10705__auto___25923 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args25920 = [];
var len__10660__auto___25924 = arguments.length;
var i__10661__auto___25925 = (0);
while(true){
if((i__10661__auto___25925 < len__10660__auto___25924)){
args25920.push((arguments[i__10661__auto___25925]));

var G__25926 = (i__10661__auto___25925 + (1));
i__10661__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var G__25922 = args25920.length;
switch (G__25922) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args25920.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([(function (){var x__10373__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__10373__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__10705__auto___26095 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__26014){
var vec__26015 = p__26014;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__26096__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__26096 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__26097__i = 0, G__26097__a = new Array(arguments.length -  0);
while (G__26097__i < G__26097__a.length) {G__26097__a[G__26097__i] = arguments[G__26097__i + 0]; ++G__26097__i;}
  msg = new cljs.core.IndexedSeq(G__26097__a,0,null);
} 
return G__26096__delegate.call(this,msg);};
G__26096.cljs$lang$maxFixedArity = 0;
G__26096.cljs$lang$applyTo = (function (arglist__26098){
var msg = cljs.core.seq(arglist__26098);
return G__26096__delegate(msg);
});
G__26096.cljs$core$IFn$_invoke$arity$variadic = G__26096__delegate;
return G__26096;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__26018){
var vec__26057 = p__26018;
var seq__26058 = cljs.core.seq(vec__26057);
var first__26059 = cljs.core.first(seq__26058);
var seq__26058__$1 = cljs.core.next(seq__26058);
var vec__26060 = first__26059;
var seq__26061 = cljs.core.seq(vec__26060);
var first__26062 = cljs.core.first(seq__26061);
var seq__26061__$1 = cljs.core.next(seq__26061);
var bind = first__26062;
var first__26062__$1 = cljs.core.first(seq__26061__$1);
var seq__26061__$2 = cljs.core.next(seq__26061__$1);
var expr = first__26062__$1;
var mod_pairs = seq__26061__$2;
var vec__26063 = seq__26058__$1;
var vec__26066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26063,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(1),null);
var next_groups = vec__26063;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__26057,seq__26058,first__26059,seq__26058__$1,vec__26060,seq__26061,first__26062,seq__26061__$1,bind,first__26062__$1,seq__26061__$2,expr,mod_pairs,vec__26063,vec__26066,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__26069){
var vec__26076 = p__26069;
var seq__26077 = cljs.core.seq(vec__26076);
var first__26078 = cljs.core.first(seq__26077);
var seq__26077__$1 = cljs.core.next(seq__26077);
var vec__26079 = first__26078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(1),null);
var pair = vec__26079;
var etc = seq__26077__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__25928__auto__","iterys__25928__auto__",-733998214,null)),(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25929__auto__","fs__25929__auto__",-364839828,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__25928__auto__","iterys__25928__auto__",-733998214,null)),(function (){var x__10373__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25929__auto__","fs__25929__auto__",-364839828,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25929__auto__","fs__25929__auto__",-364839828,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__10373__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__26057,seq__26058,first__26059,seq__26058__$1,vec__26060,seq__26061,first__26062,seq__26061__$1,bind,first__26062__$1,seq__26061__$2,expr,mod_pairs,vec__26063,vec__26066,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__26057,seq__26058,first__26059,seq__26058__$1,vec__26060,seq__26061,first__26062,seq__26061__$1,bind,first__26062__$1,seq__26061__$2,expr,mod_pairs,vec__26063,vec__26066,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__26082){
var vec__26089 = p__26082;
var seq__26090 = cljs.core.seq(vec__26089);
var first__26091 = cljs.core.first(seq__26090);
var seq__26090__$1 = cljs.core.next(seq__26090);
var vec__26092 = first__26091;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26092,(1),null);
var pair = vec__26092;
var etc = seq__26090__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10373__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__10373__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10373__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__26057,seq__26058,first__26059,seq__26058__$1,vec__26060,seq__26061,first__26062,seq__26061__$1,bind,first__26062__$1,seq__26061__$2,expr,mod_pairs,vec__26063,vec__26066,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25930__auto__","c__25930__auto__",180868353,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/distiller/.boot/cache/tmp/Users/distiller/lumo/sj/-9rktdk/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2325),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2325),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null))], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25931__auto__","size__25931__auto__",165036706,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25930__auto__","c__25930__auto__",180868353,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25931__auto__","size__25931__auto__",165036706,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25931__auto__","size__25931__auto__",165036706,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25930__auto__","c__25930__auto__",180868353,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__10373__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__10373__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10373__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__25932__auto__","iter__25932__auto__",26114622,null)),(function (){var x__10373__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__25932__auto__","iter__25932__auto__",26114622,null)),(function (){var x__10373__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__10705__auto___26108 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26109 = arguments.length;
var i__10661__auto___26110 = (0);
while(true){
if((i__10661__auto___26110 < len__10660__auto___26109)){
args__10667__auto__.push((arguments[i__10661__auto___26110]));

var G__26111 = (i__10661__auto___26110 + (1));
i__10661__auto___26110 = G__26111;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__26112__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__26112 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__26113__i = 0, G__26113__a = new Array(arguments.length -  0);
while (G__26113__i < G__26113__a.length) {G__26113__a[G__26113__i] = arguments[G__26113__i + 0]; ++G__26113__i;}
  msg = new cljs.core.IndexedSeq(G__26113__a,0,null);
} 
return G__26112__delegate.call(this,msg);};
G__26112.cljs$lang$maxFixedArity = 0;
G__26112.cljs$lang$applyTo = (function (arglist__26114){
var msg = cljs.core.seq(arglist__26114);
return G__26112__delegate(msg);
});
G__26112.cljs$core$IFn$_invoke$arity$variadic = G__26112__delegate;
return G__26112;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10373__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__10373__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__10373__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__10373__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__26099__auto__","c__26099__auto__",-1185137619,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__26099__auto__","c__26099__auto__",-1185137619,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__26099__auto__","c__26099__auto__",-1185137619,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10373__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq26100){
var G__26101 = cljs.core.first(seq26100);
var seq26100__$1 = cljs.core.next(seq26100);
var G__26102 = cljs.core.first(seq26100__$1);
var seq26100__$2 = cljs.core.next(seq26100__$1);
var G__26103 = cljs.core.first(seq26100__$2);
var seq26100__$3 = cljs.core.next(seq26100__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__26101,G__26102,G__26103,seq26100__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__10705__auto___26118 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26119 = arguments.length;
var i__10661__auto___26120 = (0);
while(true){
if((i__10661__auto___26120 < len__10660__auto___26119)){
args__10667__auto__.push((arguments[i__10661__auto___26120]));

var G__26121 = (i__10661__auto___26120 + (1));
i__10661__auto___26120 = G__26121;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq26115){
var G__26116 = cljs.core.first(seq26115);
var seq26115__$1 = cljs.core.next(seq26115);
var G__26117 = cljs.core.first(seq26115__$1);
var seq26115__$2 = cljs.core.next(seq26115__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__26116,G__26117,seq26115__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__10705__auto___26133 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args26125 = [];
var len__10660__auto___26134 = arguments.length;
var i__10661__auto___26135 = (0);
while(true){
if((i__10661__auto___26135 < len__10660__auto___26134)){
args26125.push((arguments[i__10661__auto___26135]));

var G__26136 = (i__10661__auto___26135 + (1));
i__10661__auto___26135 = G__26136;
continue;
} else {
}
break;
}

var G__26132 = args26125.length;
switch (G__26132) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26125.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__10373__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__10373__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__26122__auto__","dims__26122__auto__",1059143025,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__26123__auto__","dimarray__26123__auto__",-90203665,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__10373__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26124__auto__","i__26124__auto__",689622806,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__26123__auto__","dimarray__26123__auto__",-90203665,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__26123__auto__","dimarray__26123__auto__",-90203665,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26124__auto__","i__26124__auto__",689622806,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__26122__auto__","dims__26122__auto__",1059143025,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__26123__auto__","dimarray__26123__auto__",-90203665,null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq26126){
var G__26127 = cljs.core.first(seq26126);
var seq26126__$1 = cljs.core.next(seq26126);
var G__26128 = cljs.core.first(seq26126__$1);
var seq26126__$2 = cljs.core.next(seq26126__$1);
var G__26129 = cljs.core.first(seq26126__$2);
var seq26126__$3 = cljs.core.next(seq26126__$2);
var G__26130 = cljs.core.first(seq26126__$3);
var seq26126__$4 = cljs.core.next(seq26126__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__26127,G__26128,G__26129,G__26130,seq26126__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__10705__auto___26146 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args26139 = [];
var len__10660__auto___26147 = arguments.length;
var i__10661__auto___26148 = (0);
while(true){
if((i__10661__auto___26148 < len__10660__auto___26147)){
args26139.push((arguments[i__10661__auto___26148]));

var G__26149 = (i__10661__auto___26148 + (1));
i__10661__auto___26148 = G__26149;
continue;
} else {
}
break;
}

var G__26145 = args26139.length;
switch (G__26145) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26139.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10683__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__26138__auto__","x__26138__auto__",1961046886,null)),(function (){var x__10373__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__26138__auto__","x__26138__auto__",1961046886,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq26140){
var G__26141 = cljs.core.first(seq26140);
var seq26140__$1 = cljs.core.next(seq26140);
var G__26142 = cljs.core.first(seq26140__$1);
var seq26140__$2 = cljs.core.next(seq26140__$1);
var G__26143 = cljs.core.first(seq26140__$2);
var seq26140__$3 = cljs.core.next(seq26140__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__26141,G__26142,G__26143,seq26140__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__10705__auto___26157 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args26151 = [];
var len__10660__auto___26158 = arguments.length;
var i__10661__auto___26159 = (0);
while(true){
if((i__10661__auto___26159 < len__10660__auto___26158)){
args26151.push((arguments[i__10661__auto___26159]));

var G__26160 = (i__10661__auto___26159 + (1));
i__10661__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var G__26156 = args26151.length;
switch (G__26156) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26151.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10683__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__10373__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq26152){
var G__26153 = cljs.core.first(seq26152);
var seq26152__$1 = cljs.core.next(seq26152);
var G__26154 = cljs.core.first(seq26152__$1);
var seq26152__$2 = cljs.core.next(seq26152__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__26153,G__26154,seq26152__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__10705__auto___26170 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args26164 = [];
var len__10660__auto___26171 = arguments.length;
var i__10661__auto___26172 = (0);
while(true){
if((i__10661__auto___26172 < len__10660__auto___26171)){
args26164.push((arguments[i__10661__auto___26172]));

var G__26173 = (i__10661__auto___26172 + (1));
i__10661__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var G__26169 = args26164.length;
switch (G__26169) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26164.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10683__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__26162_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26162_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__26163_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__26163_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__10373__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq26165){
var G__26166 = cljs.core.first(seq26165);
var seq26165__$1 = cljs.core.next(seq26165);
var G__26167 = cljs.core.first(seq26165__$1);
var seq26165__$2 = cljs.core.next(seq26165__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__26166,G__26167,seq26165__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__10705__auto___26181 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args26175 = [];
var len__10660__auto___26182 = arguments.length;
var i__10661__auto___26183 = (0);
while(true){
if((i__10661__auto___26183 < len__10660__auto___26182)){
args26175.push((arguments[i__10661__auto___26183]));

var G__26184 = (i__10661__auto___26183 + (1));
i__10661__auto___26183 = G__26184;
continue;
} else {
}
break;
}

var G__26180 = args26175.length;
switch (G__26180) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26175.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10683__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq26176){
var G__26177 = cljs.core.first(seq26176);
var seq26176__$1 = cljs.core.next(seq26176);
var G__26178 = cljs.core.first(seq26176__$1);
var seq26176__$2 = cljs.core.next(seq26176__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__26177,G__26178,seq26176__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__10705__auto___26194 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args26188 = [];
var len__10660__auto___26195 = arguments.length;
var i__10661__auto___26196 = (0);
while(true){
if((i__10661__auto___26196 < len__10660__auto___26195)){
args26188.push((arguments[i__10661__auto___26196]));

var G__26197 = (i__10661__auto___26196 + (1));
i__10661__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var G__26193 = args26188.length;
switch (G__26193) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args26188.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10683__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__26186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26186_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26187_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__26187_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq26189){
var G__26190 = cljs.core.first(seq26189);
var seq26189__$1 = cljs.core.next(seq26189);
var G__26191 = cljs.core.first(seq26189__$1);
var seq26189__$2 = cljs.core.next(seq26189__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__26190,G__26191,seq26189__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__10705__auto___26214 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26215 = arguments.length;
var i__10661__auto___26216 = (0);
while(true){
if((i__10661__auto___26216 < len__10660__auto___26215)){
args__10667__auto__.push((arguments[i__10661__auto___26216]));

var G__26217 = (i__10661__auto___26216 + (1));
i__10661__auto___26216 = G__26217;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__26202){
var vec__26203 = p__26202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26203,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26203,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__10373__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__26206){
var vec__26207 = p__26206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__26210){
var vec__26211 = p__26210;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__10373__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq26199){
var G__26200 = cljs.core.first(seq26199);
var seq26199__$1 = cljs.core.next(seq26199);
var G__26201 = cljs.core.first(seq26199__$1);
var seq26199__$2 = cljs.core.next(seq26199__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__26200,G__26201,seq26199__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__10705__auto___26218 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__10705__auto___26220 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__26219__auto__","a__26219__auto__",-2137364334,null)),(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__26219__auto__","a__26219__auto__",-2137364334,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__26219__auto__","a__26219__auto__",-2137364334,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__10705__auto___26222 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__26221__auto__","a__26221__auto__",-374094538,null)),(function (){var x__10373__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__10373__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__26221__auto__","a__26221__auto__",-374094538,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10373__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__10705__auto___26228 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26229 = arguments.length;
var i__10661__auto___26230 = (0);
while(true){
if((i__10661__auto___26230 < len__10660__auto___26229)){
args__10667__auto__.push((arguments[i__10661__auto___26230]));

var G__26231 = (i__10661__auto___26230 + (1));
i__10661__auto___26230 = G__26231;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__26223__auto__","n__26223__auto__",40775111,null)),(function (){var x__10373__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__26223__auto__","n__26223__auto__",40775111,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body,(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10373__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq26224){
var G__26225 = cljs.core.first(seq26224);
var seq26224__$1 = cljs.core.next(seq26224);
var G__26226 = cljs.core.first(seq26224__$1);
var seq26224__$2 = cljs.core.next(seq26224__$1);
var G__26227 = cljs.core.first(seq26224__$2);
var seq26224__$3 = cljs.core.next(seq26224__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__26225,G__26226,G__26227,seq26224__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26235 = arguments.length;
var i__10661__auto___26236 = (0);
while(true){
if((i__10661__auto___26236 < len__10660__auto___26235)){
args__10667__auto__.push((arguments[i__10661__auto___26236]));

var G__26237 = (i__10661__auto___26236 + (1));
i__10661__auto___26236 = G__26237;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((1) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10668__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26232_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26232_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq26233){
var G__26234 = cljs.core.first(seq26233);
var seq26233__$1 = cljs.core.next(seq26233);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__26234,seq26233__$1);
});

var ret__10705__auto___26247 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26248 = arguments.length;
var i__10661__auto___26249 = (0);
while(true){
if((i__10661__auto___26249 < len__10660__auto___26248)){
args__10667__auto__.push((arguments[i__10661__auto___26249]));

var G__26250 = (i__10661__auto___26249 + (1));
i__10661__auto___26249 = G__26250;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__26238__auto__","method-table__26238__auto__",-1615107102,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__26239__auto__","prefer-table__26239__auto__",1396470123,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__26240__auto__","method-cache__26240__auto__",-486143695,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__26241__auto__","cached-hierarchy__26241__auto__",-1568421333,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__26242__auto__","hierarchy__26242__auto__",-863450160,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__10373__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__10373__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__26242__auto__","hierarchy__26242__auto__",-863450160,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__26238__auto__","method-table__26238__auto__",-1615107102,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__26239__auto__","prefer-table__26239__auto__",1396470123,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__26240__auto__","method-cache__26240__auto__",-486143695,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__26241__auto__","cached-hierarchy__26241__auto__",-1568421333,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq26243){
var G__26244 = cljs.core.first(seq26243);
var seq26243__$1 = cljs.core.next(seq26243);
var G__26245 = cljs.core.first(seq26243__$1);
var seq26243__$2 = cljs.core.next(seq26243__$1);
var G__26246 = cljs.core.first(seq26243__$2);
var seq26243__$3 = cljs.core.next(seq26243__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__26244,G__26245,G__26246,seq26243__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__10705__auto___26256 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26257 = arguments.length;
var i__10661__auto___26258 = (0);
while(true){
if((i__10661__auto___26258 < len__10660__auto___26257)){
args__10667__auto__.push((arguments[i__10661__auto___26258]));

var G__26259 = (i__10661__auto___26258 + (1));
i__10661__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq26251){
var G__26252 = cljs.core.first(seq26251);
var seq26251__$1 = cljs.core.next(seq26251);
var G__26253 = cljs.core.first(seq26251__$1);
var seq26251__$2 = cljs.core.next(seq26251__$1);
var G__26254 = cljs.core.first(seq26251__$2);
var seq26251__$3 = cljs.core.next(seq26251__$2);
var G__26255 = cljs.core.first(seq26251__$3);
var seq26251__$4 = cljs.core.next(seq26251__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__26252,G__26253,G__26254,G__26255,seq26251__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__10705__auto___26262 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__26260__auto__","start__26260__auto__",-1527714769,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__26261__auto__","ret__26261__auto__",-2095367140,null)),(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__26260__auto__","start__26260__auto__",-1527714769,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__26261__auto__","ret__26261__auto__",-2095367140,null))], 0))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__10705__auto___26277 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26278 = arguments.length;
var i__10661__auto___26279 = (0);
while(true){
if((i__10661__auto___26279 < len__10660__auto___26278)){
args__10667__auto__.push((arguments[i__10661__auto___26279]));

var G__26280 = (i__10661__auto___26279 + (1));
i__10661__auto___26279 = G__26280;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((5) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10668__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__26274){
var map__26275 = p__26274;
var map__26275__$1 = ((((!((map__26275 == null)))?((((map__26275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26275):map__26275);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26275__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__26263__auto__","start__26263__auto__",1622423614,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__26264__auto__","ret__26264__auto__",-1423164704,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___26265__auto__","___26265__auto__",-1110728616,null)),(function (){var x__10373__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__26266__auto__","end__26266__auto__",-480710114,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__26267__auto__","elapsed__26267__auto__",1610791794,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__26266__auto__","end__26266__auto__",-480710114,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__26263__auto__","start__26263__auto__",1622423614,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__10373__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__10373__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__10373__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__26267__auto__","elapsed__26267__auto__",1610791794,null)),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq26268){
var G__26269 = cljs.core.first(seq26268);
var seq26268__$1 = cljs.core.next(seq26268);
var G__26270 = cljs.core.first(seq26268__$1);
var seq26268__$2 = cljs.core.next(seq26268__$1);
var G__26271 = cljs.core.first(seq26268__$2);
var seq26268__$3 = cljs.core.next(seq26268__$2);
var G__26272 = cljs.core.first(seq26268__$3);
var seq26268__$4 = cljs.core.next(seq26268__$3);
var G__26273 = cljs.core.first(seq26268__$4);
var seq26268__$5 = cljs.core.next(seq26268__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__26269,G__26270,G__26271,G__26272,G__26273,seq26268__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args26281 = [];
var len__10660__auto___26288 = arguments.length;
var i__10661__auto___26289 = (0);
while(true){
if((i__10661__auto___26289 < len__10660__auto___26288)){
args26281.push((arguments[i__10661__auto___26289]));

var G__26290 = (i__10661__auto___26289 + (1));
i__10661__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26283 = args26281.length;
switch (G__26283) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26281.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = (function (){var G__26287 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__26287) : cljs.core$macros.cs.call(null,G__26287));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__10705__auto___26292 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

var ret__10705__auto___26298 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26299 = arguments.length;
var i__10661__auto___26300 = (0);
while(true){
if((i__10661__auto___26300 < len__10660__auto___26299)){
args__10667__auto__.push((arguments[i__10661__auto___26300]));

var G__26301 = (i__10661__auto___26300 + (1));
i__10661__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__26293__auto__","sb__26293__auto__",-1933149927,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__26294__auto__","x__26294__auto__",-937612091,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__26293__auto__","sb__26293__auto__",-1933149927,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__26294__auto__","x__26294__auto__",-937612091,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__26293__auto__","sb__26293__auto__",-1933149927,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq26295){
var G__26296 = cljs.core.first(seq26295);
var seq26295__$1 = cljs.core.next(seq26295);
var G__26297 = cljs.core.first(seq26295__$1);
var seq26295__$2 = cljs.core.next(seq26295__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__26296,G__26297,seq26295__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__10705__auto___26306 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26307 = arguments.length;
var i__10661__auto___26308 = (0);
while(true){
if((i__10661__auto___26308 < len__10660__auto___26307)){
args__10667__auto__.push((arguments[i__10661__auto___26308]));

var G__26309 = (i__10661__auto___26308 + (1));
i__10661__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26302_SHARP_){
return cljs.core._conj((function (){var x__10373__auto__ = p1__26302_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq26303){
var G__26304 = cljs.core.first(seq26303);
var seq26303__$1 = cljs.core.next(seq26303);
var G__26305 = cljs.core.first(seq26303__$1);
var seq26303__$2 = cljs.core.next(seq26303__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__26304,G__26305,seq26303__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__10705__auto___26310 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__10373__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__10705__auto___26312 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__10373__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__26311__auto__","this__26311__auto__",-1322954161,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__26311__auto__","this__26311__auto__",-1322954161,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__10705__auto___26336 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__26313){
var vec__26325 = p__26313;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26325,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26325,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to ns-interns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__10373__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26325,quote,ns){
return (function (p__26332){
var vec__26333 = p__26332;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__10373__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
});})(vec__26325,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__10705__auto___26351 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__26337,p__26338){
var vec__26345 = p__26337;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26345,(1),null);
var vec__26348 = p__26338;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to ns-unmap must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__10373__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__10705__auto___26357 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26358 = arguments.length;
var i__10661__auto___26359 = (0);
while(true){
if((i__10661__auto___26359 < len__10660__auto___26358)){
args__10667__auto__.push((arguments[i__10661__auto___26359]));

var G__26360 = (i__10661__auto___26359 + (1));
i__10661__auto___26359 = G__26360;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((4) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10668__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__10373__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__10373__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq26352){
var G__26353 = cljs.core.first(seq26352);
var seq26352__$1 = cljs.core.next(seq26352);
var G__26354 = cljs.core.first(seq26352__$1);
var seq26352__$2 = cljs.core.next(seq26352__$1);
var G__26355 = cljs.core.first(seq26352__$2);
var seq26352__$3 = cljs.core.next(seq26352__$2);
var G__26356 = cljs.core.first(seq26352__$3);
var seq26352__$4 = cljs.core.next(seq26352__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26353,G__26354,G__26355,G__26356,seq26352__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__10705__auto___26365 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26366 = arguments.length;
var i__10661__auto___26367 = (0);
while(true){
if((i__10661__auto___26367 < len__10660__auto___26366)){
args__10667__auto__.push((arguments[i__10661__auto___26367]));

var G__26368 = (i__10661__auto___26367 + (1));
i__10661__auto___26367 = G__26368;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq26361){
var G__26362 = cljs.core.first(seq26361);
var seq26361__$1 = cljs.core.next(seq26361);
var G__26363 = cljs.core.first(seq26361__$1);
var seq26361__$2 = cljs.core.next(seq26361__$1);
var G__26364 = cljs.core.first(seq26361__$2);
var seq26361__$3 = cljs.core.next(seq26361__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__26362,G__26363,G__26364,seq26361__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__10705__auto___26372 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace..
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure/string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26373 = arguments.length;
var i__10661__auto___26374 = (0);
while(true){
if((i__10661__auto___26374 < len__10660__auto___26373)){
args__10667__auto__.push((arguments[i__10661__auto___26374]));

var G__26375 = (i__10661__auto___26374 + (1));
i__10661__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq26369){
var G__26370 = cljs.core.first(seq26369);
var seq26369__$1 = cljs.core.next(seq26369);
var G__26371 = cljs.core.first(seq26369__$1);
var seq26369__$2 = cljs.core.next(seq26369__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__26370,G__26371,seq26369__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__10705__auto___26379 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26380 = arguments.length;
var i__10661__auto___26381 = (0);
while(true){
if((i__10661__auto___26381 < len__10660__auto___26380)){
args__10667__auto__.push((arguments[i__10661__auto___26381]));

var G__26382 = (i__10661__auto___26381 + (1));
i__10661__auto___26381 = G__26382;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq26376){
var G__26377 = cljs.core.first(seq26376);
var seq26376__$1 = cljs.core.next(seq26376);
var G__26378 = cljs.core.first(seq26376__$1);
var seq26376__$2 = cljs.core.next(seq26376__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__26377,G__26378,seq26376__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__10705__auto___26386 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26387 = arguments.length;
var i__10661__auto___26388 = (0);
while(true){
if((i__10661__auto___26388 < len__10660__auto___26387)){
args__10667__auto__.push((arguments[i__10661__auto___26388]));

var G__26389 = (i__10661__auto___26388 + (1));
i__10661__auto___26388 = G__26389;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq26383){
var G__26384 = cljs.core.first(seq26383);
var seq26383__$1 = cljs.core.next(seq26383);
var G__26385 = cljs.core.first(seq26383__$1);
var seq26383__$2 = cljs.core.next(seq26383__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__26384,G__26385,seq26383__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__10705__auto___26393 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26394 = arguments.length;
var i__10661__auto___26395 = (0);
while(true){
if((i__10661__auto___26395 < len__10660__auto___26394)){
args__10667__auto__.push((arguments[i__10661__auto___26395]));

var G__26396 = (i__10661__auto___26395 + (1));
i__10661__auto___26395 = G__26396;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq26390){
var G__26391 = cljs.core.first(seq26390);
var seq26390__$1 = cljs.core.next(seq26390);
var G__26392 = cljs.core.first(seq26390__$1);
var seq26390__$2 = cljs.core.next(seq26390__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__26391,G__26392,seq26390__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__10705__auto___26400 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26401 = arguments.length;
var i__10661__auto___26402 = (0);
while(true){
if((i__10661__auto___26402 < len__10660__auto___26401)){
args__10667__auto__.push((arguments[i__10661__auto___26402]));

var G__26403 = (i__10661__auto___26402 + (1));
i__10661__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq26397){
var G__26398 = cljs.core.first(seq26397);
var seq26397__$1 = cljs.core.next(seq26397);
var G__26399 = cljs.core.first(seq26397__$1);
var seq26397__$2 = cljs.core.next(seq26397__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__26398,G__26399,seq26397__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__10705__auto___26407 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26408 = arguments.length;
var i__10661__auto___26409 = (0);
while(true){
if((i__10661__auto___26409 < len__10660__auto___26408)){
args__10667__auto__.push((arguments[i__10661__auto___26409]));

var G__26410 = (i__10661__auto___26409 + (1));
i__10661__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((2) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10668__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq26404){
var G__26405 = cljs.core.first(seq26404);
var seq26404__$1 = cljs.core.next(seq26404);
var G__26406 = cljs.core.first(seq26404__$1);
var seq26404__$2 = cljs.core.next(seq26404__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__26405,G__26406,seq26404__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__10705__auto___26411 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__10373__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__10705__auto___26412 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand-1 must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10373__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__10705__auto___26413 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__26414 = form_SINGLEQUOTE_;
var G__26415 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__26414;
form_SINGLEQUOTE_ = G__26415;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10373__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__9427__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__9427__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__9427__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args26416 = [];
var len__10660__auto___26423 = arguments.length;
var i__10661__auto___26424 = (0);
while(true){
if((i__10661__auto___26424 < len__10660__auto___26423)){
args26416.push((arguments[i__10661__auto___26424]));

var G__26425 = (i__10661__auto___26424 + (1));
i__10661__auto___26424 = G__26425;
continue;
} else {
}
break;
}

var G__26418 = args26416.length;
switch (G__26418) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26416.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__26419,solo){
var vec__26420 = p__26419;
var seq__26421 = cljs.core.seq(vec__26420);
var first__26422 = cljs.core.first(seq__26421);
var seq__26421__$1 = cljs.core.next(seq__26421);
var arglist = first__26422;
var body = seq__26421__$1;
var method = vec__26420;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/distiller/.boot/cache/tmp/Users/distiller/lumo/sj/-9rktdk/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2879),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2879),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/distiller/.boot/cache/tmp/Users/distiller/lumo/sj/-9rktdk/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2880),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2880),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))));
});})(sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__10373__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),params,cljs.core.array_seq([(function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10373__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
}
});})(sig,restarg,vec__26420,seq__26421,first__26422,seq__26421__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())))):null),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__10705__auto___26429 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__26427__auto__","len__26427__auto__",-798779001,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26428__auto__","i__26428__auto__",1721261421,null)),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26428__auto__","i__26428__auto__",1721261421,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__26427__auto__","len__26427__auto__",-798779001,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__10373__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26428__auto__","i__26428__auto__",1721261421,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__26428__auto__","i__26428__auto__",1721261421,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__26432,emit_var_QMARK_){
var vec__26439 = p__26432;
var vec__26442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26439,(0),null);
var seq__26443 = cljs.core.seq(vec__26442);
var first__26444 = cljs.core.first(seq__26443);
var seq__26443__$1 = cljs.core.next(seq__26443);
var arglist = first__26444;
var body = seq__26443__$1;
var method = vec__26442;
var fdecl = vec__26439;
var dest_args = ((function (vec__26439,vec__26442,seq__26443,first__26444,seq__26443__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26439,vec__26442,seq__26443,first__26444,seq__26443__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(vec__26439,vec__26442,seq__26443,first__26444,seq__26443__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__26439,vec__26442,seq__26443,first__26444,seq__26443__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__10373__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__26430__auto__","args__26430__auto__",-268988809,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__26430__auto__","args__26430__auto__",-268988809,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__26431__auto__","argseq__26431__auto__",-555067928,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10373__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__26430__auto__","args__26430__auto__",-268988809,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/distiller/.boot/cache/tmp/Users/distiller/lumo/sj/-9rktdk/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2927),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2927),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__26430__auto__","args__26430__auto__",-268988809,null)),cljs.core.array_seq([(function (){var x__10373__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__26431__auto__","argseq__26431__auto__",-555067928,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__26469){
var vec__26473 = p__26469;
var seq__26474 = cljs.core.seq(vec__26473);
var first__26475 = cljs.core.first(seq__26474);
var seq__26474__$1 = cljs.core.next(seq__26474);
var sig = first__26475;
var body = seq__26474__$1;
var method = vec__26473;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__26445_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__26445_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__26446_SHARP_){
return fixed_arity(rname,p1__26446_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),(function (){var x__10373__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__26447__auto__","argseq__26447__auto__",2119280877,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10373__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/distiller/.boot/cache/tmp/Users/distiller/lumo/sj/-9rktdk/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2985),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2985),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__26447__auto__","argseq__26447__auto__",2119280877,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10373__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__10373__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj((function (){var x__10373__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__10373__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__10373__auto____$1 = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__26476__i = 0, G__26476__a = new Array(arguments.length -  3);
while (G__26476__i < G__26476__a.length) {G__26476__a[G__26476__i] = arguments[G__26476__i + 3]; ++G__26476__i;}
  fdecl = new cljs.core.IndexedSeq(G__26476__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__26477){
var _AMPERSAND_form = cljs.core.first(arglist__26477);
arglist__26477 = cljs.core.next(arglist__26477);
var _AMPERSAND_env = cljs.core.first(arglist__26477);
arglist__26477 = cljs.core.next(arglist__26477);
var name = cljs.core.first(arglist__26477);
var fdecl = cljs.core.rest(arglist__26477);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__10667__auto__ = [];
var len__10660__auto___26483 = arguments.length;
var i__10661__auto___26484 = (0);
while(true){
if((i__10661__auto___26484 < len__10660__auto___26483)){
args__10667__auto__.push((arguments[i__10661__auto___26484]));

var G__26485 = (i__10661__auto___26484 + (1));
i__10661__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((3) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10668__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__10373__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__26486 = cljs.core.cons(f,p);
var G__26487 = cljs.core.next(args__$1);
p = G__26486;
args__$1 = G__26487;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__26488 = cljs.core.cons(f,p);
var G__26489 = cljs.core.next(args__$1);
p = G__26488;
args__$1 = G__26489;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__26490 = cljs.core.next(fd);
fd = G__26490;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__26491 = cljs.core.next(fd);
fd = G__26491;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__10373__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__26492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__26493 = cljs.core.next(ds);
acc = G__26492;
ds = G__26493;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__26494 = cljs.core.next(p);
var G__26495 = cljs.core.cons(cljs.core.first(p),d);
p = G__26494;
d = G__26495;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10373__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__26478__auto__","ret__26478__auto__",249738887,null)),(function (){var x__10373__auto__ = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10373__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__26478__auto__","ret__26478__auto__",249738887,null))], 0))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq26479){
var G__26480 = cljs.core.first(seq26479);
var seq26479__$1 = cljs.core.next(seq26479);
var G__26481 = cljs.core.first(seq26479__$1);
var seq26479__$2 = cljs.core.next(seq26479__$1);
var G__26482 = cljs.core.first(seq26479__$2);
var seq26479__$3 = cljs.core.next(seq26479__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__26480,G__26481,G__26482,seq26479__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
