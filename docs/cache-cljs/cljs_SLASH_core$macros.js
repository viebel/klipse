// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants false, :target :nodejs}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21597 = arguments.length;
var i__8980__auto___21598 = (0);
while(true){
if((i__8980__auto___21598 < len__8979__auto___21597)){
args__8986__auto__.push((arguments[i__8980__auto___21598]));

var G__21599 = (i__8980__auto___21598 + (1));
i__8980__auto___21598 = G__21599;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__8692__auto__ = form;
return cljs.core._conj((function (){var x__8692__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})());
var G__21600 = threaded;
var G__21601 = cljs.core.next(forms__$1);
x__$1 = G__21600;
forms__$1 = G__21601;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq21589){
var G__21590 = cljs.core.first(seq21589);
var seq21589__$1 = cljs.core.next(seq21589);
var G__21591 = cljs.core.first(seq21589__$1);
var seq21589__$2 = cljs.core.next(seq21589__$1);
var G__21592 = cljs.core.first(seq21589__$2);
var seq21589__$3 = cljs.core.next(seq21589__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21590,G__21591,G__21592,seq21589__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21611 = arguments.length;
var i__8980__auto___21612 = (0);
while(true){
if((i__8980__auto___21612 < len__8979__auto___21611)){
args__8986__auto__.push((arguments[i__8980__auto___21612]));

var G__21613 = (i__8980__auto___21612 + (1));
i__8980__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.next(form),cljs.core.array_seq([(function (){var x__8692__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__8692__auto__ = form;
return cljs.core._conj((function (){var x__8692__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})());
var G__21616 = threaded;
var G__21617 = cljs.core.next(forms__$1);
x__$1 = G__21616;
forms__$1 = G__21617;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq21602){
var G__21603 = cljs.core.first(seq21602);
var seq21602__$1 = cljs.core.next(seq21602);
var G__21604 = cljs.core.first(seq21602__$1);
var seq21602__$2 = cljs.core.next(seq21602__$1);
var G__21605 = cljs.core.first(seq21602__$2);
var seq21602__$3 = cljs.core.next(seq21602__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21603,G__21604,G__21605,seq21602__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
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
var args21621 = [];
var len__8979__auto___21635 = arguments.length;
var i__8980__auto___21636 = (0);
while(true){
if((i__8980__auto___21636 < len__8979__auto___21635)){
args21621.push((arguments[i__8980__auto___21636]));

var G__21638 = (i__8980__auto___21636 + (1));
i__8980__auto___21636 = G__21638;
continue;
} else {
}
break;
}

var G__21630 = args21621.length;
switch (G__21630) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21621.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq21622){
var G__21623 = cljs.core.first(seq21622);
var seq21622__$1 = cljs.core.next(seq21622);
var G__21624 = cljs.core.first(seq21622__$1);
var seq21622__$2 = cljs.core.next(seq21622__$1);
var G__21625 = cljs.core.first(seq21622__$2);
var seq21622__$3 = cljs.core.next(seq21622__$2);
var G__21626 = cljs.core.first(seq21622__$3);
var seq21622__$4 = cljs.core.next(seq21622__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__21623,G__21624,G__21625,G__21626,seq21622__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21653 = arguments.length;
var i__8980__auto___21654 = (0);
while(true){
if((i__8980__auto___21654 < len__8979__auto___21653)){
args__8986__auto__.push((arguments[i__8980__auto___21654]));

var G__21658 = (i__8980__auto___21654 + (1));
i__8980__auto___21654 = G__21658;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq21644){
var G__21645 = cljs.core.first(seq21644);
var seq21644__$1 = cljs.core.next(seq21644);
var G__21646 = cljs.core.first(seq21644__$1);
var seq21644__$2 = cljs.core.next(seq21644__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__21645,G__21646,seq21644__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21676 = arguments.length;
var i__8980__auto___21677 = (0);
while(true){
if((i__8980__auto___21677 < len__8979__auto___21676)){
args__8986__auto__.push((arguments[i__8980__auto___21677]));

var G__21678 = (i__8980__auto___21677 + (1));
i__8980__auto___21677 = G__21678;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__8692__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__8692__auto____$2 = cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq21661){
var G__21662 = cljs.core.first(seq21661);
var seq21661__$1 = cljs.core.next(seq21661);
var G__21663 = cljs.core.first(seq21661__$1);
var seq21661__$2 = cljs.core.next(seq21661__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__21662,G__21663,seq21661__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21702 = arguments.length;
var i__8980__auto___21703 = (0);
while(true){
if((i__8980__auto___21703 < len__8979__auto___21702)){
args__8986__auto__.push((arguments[i__8980__auto___21703]));

var G__21704 = (i__8980__auto___21703 + (1));
i__8980__auto___21703 = G__21704;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21685_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__21685_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq21686){
var G__21687 = cljs.core.first(seq21686);
var seq21686__$1 = cljs.core.next(seq21686);
var G__21688 = cljs.core.first(seq21686__$1);
var seq21686__$2 = cljs.core.next(seq21686__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__21687,G__21688,seq21686__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21710 = arguments.length;
var i__8980__auto___21711 = (0);
while(true){
if((i__8980__auto___21711 < len__8979__auto___21710)){
args__8986__auto__.push((arguments[i__8980__auto___21711]));

var G__21713 = (i__8980__auto___21711 + (1));
i__8980__auto___21711 = G__21713;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq21705){
var G__21706 = cljs.core.first(seq21705);
var seq21705__$1 = cljs.core.next(seq21705);
var G__21707 = cljs.core.first(seq21705__$1);
var seq21705__$2 = cljs.core.next(seq21705__$1);
var G__21708 = cljs.core.first(seq21705__$2);
var seq21705__$3 = cljs.core.next(seq21705__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__21706,G__21707,G__21708,seq21705__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__21733 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__21734 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__21733;
s = G__21734;
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
return (function (p__21760){
var vec__21762 = p__21760;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21762,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21762,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
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
var args__8986__auto__ = [];
var len__8979__auto___21783 = arguments.length;
var i__8980__auto___21784 = (0);
while(true){
if((i__8980__auto___21784 < len__8979__auto___21783)){
args__8986__auto__.push((arguments[i__8980__auto___21784]));

var G__21785 = (i__8980__auto___21784 + (1));
i__8980__auto___21784 = G__21785;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq21773){
var G__21774 = cljs.core.first(seq21773);
var seq21773__$1 = cljs.core.next(seq21773);
var G__21775 = cljs.core.first(seq21773__$1);
var seq21773__$2 = cljs.core.next(seq21773__$1);
var G__21776 = cljs.core.first(seq21773__$2);
var seq21773__$3 = cljs.core.next(seq21773__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__21774,G__21775,G__21776,seq21773__$3);
});


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
var G__21786 = cljs.core.next(params__$1);
var G__21787 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__21788 = lets;
params__$1 = G__21786;
new_params = G__21787;
lets = G__21788;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__21789 = cljs.core.next(params__$1);
var G__21790 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__21791 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__21789;
new_params = G__21790;
lets = G__21791;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21829 = arguments.length;
var i__8980__auto___21830 = (0);
while(true){
if((i__8980__auto___21830 < len__8979__auto___21829)){
args__8986__auto__.push((arguments[i__8980__auto___21830]));

var G__21831 = (i__8980__auto___21830 + (1));
i__8980__auto___21830 = G__21831;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__8692__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__21807 = sig;
var seq__21808 = cljs.core.seq(vec__21807);
var first__21809 = cljs.core.first(seq__21808);
var seq__21808__$1 = cljs.core.next(seq__21808);
var params = first__21809;
var body = seq__21808__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__7758__auto__ = conds;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__8692__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21807,seq__21808,first__21809,seq__21808__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(vec__21807,seq__21808,first__21809,seq__21808__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21807,seq__21808,first__21809,seq__21808__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(vec__21807,seq__21808,first__21809,seq__21808__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq21793){
var G__21794 = cljs.core.first(seq21793);
var seq21793__$1 = cljs.core.next(seq21793);
var G__21795 = cljs.core.first(seq21793__$1);
var seq21793__$2 = cljs.core.next(seq21793__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__21794,G__21795,seq21793__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21861 = arguments.length;
var i__8980__auto___21862 = (0);
while(true){
if((i__8980__auto___21862 < len__8979__auto___21861)){
args__8986__auto__.push((arguments[i__8980__auto___21862]));

var G__21863 = (i__8980__auto___21862 + (1));
i__8980__auto___21862 = G__21863;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq21853){
var G__21854 = cljs.core.first(seq21853);
var seq21853__$1 = cljs.core.next(seq21853);
var G__21855 = cljs.core.first(seq21853__$1);
var seq21853__$2 = cljs.core.next(seq21853__$1);
var G__21856 = cljs.core.first(seq21853__$2);
var seq21853__$3 = cljs.core.next(seq21853__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__21854,G__21855,G__21856,seq21853__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args21874 = [];
var len__8979__auto___21914 = arguments.length;
var i__8980__auto___21915 = (0);
while(true){
if((i__8980__auto___21915 < len__8979__auto___21914)){
args21874.push((arguments[i__8980__auto___21915]));

var G__21917 = (i__8980__auto___21915 + (1));
i__8980__auto___21915 = G__21917;
continue;
} else {
}
break;
}

var G__21894 = args21874.length;
switch (G__21894) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21874.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21873__auto__","temp__21873__auto__",-1757744265,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21873__auto__","temp__21873__auto__",-1757744265,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21873__auto__","temp__21873__auto__",-1757744265,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq21875){
var G__21876 = cljs.core.first(seq21875);
var seq21875__$1 = cljs.core.next(seq21875);
var G__21877 = cljs.core.first(seq21875__$1);
var seq21875__$2 = cljs.core.next(seq21875__$1);
var G__21878 = cljs.core.first(seq21875__$2);
var seq21875__$3 = cljs.core.next(seq21875__$2);
var G__21879 = cljs.core.first(seq21875__$3);
var seq21875__$4 = cljs.core.next(seq21875__$3);
var G__21880 = cljs.core.first(seq21875__$4);
var seq21875__$5 = cljs.core.next(seq21875__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__21876,G__21877,G__21878,G__21879,G__21880,seq21875__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args21943 = [];
var len__8979__auto___21980 = arguments.length;
var i__8980__auto___21981 = (0);
while(true){
if((i__8980__auto___21981 < len__8979__auto___21980)){
args21943.push((arguments[i__8980__auto___21981]));

var G__21982 = (i__8980__auto___21981 + (1));
i__8980__auto___21981 = G__21982;
continue;
} else {
}
break;
}

var G__21945 = args21943.length;
switch (G__21945) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args21943.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22009 = arguments.length;
var i__8980__auto___22010 = (0);
while(true){
if((i__8980__auto___22010 < len__8979__auto___22009)){
args__8986__auto__.push((arguments[i__8980__auto___22010]));

var G__22013 = (i__8980__auto___22010 + (1));
i__8980__auto___22010 = G__22013;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21992_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__21992_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq21993){
var G__21994 = cljs.core.first(seq21993);
var seq21993__$1 = cljs.core.next(seq21993);
var G__21995 = cljs.core.first(seq21993__$1);
var seq21993__$2 = cljs.core.next(seq21993__$1);
var G__21996 = cljs.core.first(seq21993__$2);
var seq21993__$3 = cljs.core.next(seq21993__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__21994,G__21995,G__21996,seq21993__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22071 = arguments.length;
var i__8980__auto___22072 = (0);
while(true){
if((i__8980__auto___22072 < len__8979__auto___22071)){
args__8986__auto__.push((arguments[i__8980__auto___22072]));

var G__22074 = (i__8980__auto___22072 + (1));
i__8980__auto___22072 = G__22074;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq22025){
var G__22026 = cljs.core.first(seq22025);
var seq22025__$1 = cljs.core.next(seq22025);
var G__22027 = cljs.core.first(seq22025__$1);
var seq22025__$2 = cljs.core.next(seq22025__$1);
var G__22028 = cljs.core.first(seq22025__$2);
var seq22025__$3 = cljs.core.next(seq22025__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__22026,G__22027,G__22028,seq22025__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22118 = arguments.length;
var i__8980__auto___22119 = (0);
while(true){
if((i__8980__auto___22119 < len__8979__auto___22118)){
args__8986__auto__.push((arguments[i__8980__auto___22119]));

var G__22120 = (i__8980__auto___22119 + (1));
i__8980__auto___22119 = G__22120;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq22109){
var G__22110 = cljs.core.first(seq22109);
var seq22109__$1 = cljs.core.next(seq22109);
var G__22111 = cljs.core.first(seq22109__$1);
var seq22109__$2 = cljs.core.next(seq22109__$1);
var G__22112 = cljs.core.first(seq22109__$2);
var seq22109__$3 = cljs.core.next(seq22109__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__22110,G__22111,G__22112,seq22109__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22149 = arguments.length;
var i__8980__auto___22150 = (0);
while(true){
if((i__8980__auto___22150 < len__8979__auto___22149)){
args__8986__auto__.push((arguments[i__8980__auto___22150]));

var G__22151 = (i__8980__auto___22150 + (1));
i__8980__auto___22150 = G__22151;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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


var vec__22130 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22121__auto__","xs__22121__auto__",1572754047,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22121__auto__","xs__22121__auto__",1572754047,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq22122){
var G__22123 = cljs.core.first(seq22122);
var seq22122__$1 = cljs.core.next(seq22122);
var G__22124 = cljs.core.first(seq22122__$1);
var seq22122__$2 = cljs.core.next(seq22122__$1);
var G__22125 = cljs.core.first(seq22122__$2);
var seq22122__$3 = cljs.core.next(seq22122__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__22123,G__22124,G__22125,seq22122__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22283 = arguments.length;
var i__8980__auto___22284 = (0);
while(true){
if((i__8980__auto___22284 < len__8979__auto___22283)){
args__8986__auto__.push((arguments[i__8980__auto___22284]));

var G__22286 = (i__8980__auto___22284 + (1));
i__8980__auto___22284 = G__22286;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22186__auto__","temp__22186__auto__",2000286506,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22186__auto__","temp__22186__auto__",2000286506,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22186__auto__","temp__22186__auto__",2000286506,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq22197){
var G__22198 = cljs.core.first(seq22197);
var seq22197__$1 = cljs.core.next(seq22197);
var G__22199 = cljs.core.first(seq22197__$1);
var seq22197__$2 = cljs.core.next(seq22197__$1);
var G__22200 = cljs.core.first(seq22197__$2);
var seq22197__$3 = cljs.core.next(seq22197__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__22198,G__22199,G__22200,seq22197__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22300 = arguments.length;
var i__8980__auto___22301 = (0);
while(true){
if((i__8980__auto___22301 < len__8979__auto___22300)){
args__8986__auto__.push((arguments[i__8980__auto___22301]));

var G__22302 = (i__8980__auto___22301 + (1));
i__8980__auto___22301 = G__22302;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),null),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq22293){
var G__22294 = cljs.core.first(seq22293);
var seq22293__$1 = cljs.core.next(seq22293);
var G__22295 = cljs.core.first(seq22293__$1);
var seq22293__$2 = cljs.core.next(seq22293__$1);
var G__22296 = cljs.core.first(seq22293__$2);
var seq22293__$3 = cljs.core.next(seq22293__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__22294,G__22295,G__22296,seq22293__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22316 = arguments.length;
var i__8980__auto___22317 = (0);
while(true){
if((i__8980__auto___22317 < len__8979__auto___22316)){
args__8986__auto__.push((arguments[i__8980__auto___22317]));

var G__22318 = (i__8980__auto___22317 + (1));
i__8980__auto___22317 = G__22318;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq22303){
var G__22304 = cljs.core.first(seq22303);
var seq22303__$1 = cljs.core.next(seq22303);
var G__22305 = cljs.core.first(seq22303__$1);
var seq22303__$2 = cljs.core.next(seq22303__$1);
var G__22306 = cljs.core.first(seq22303__$2);
var seq22303__$3 = cljs.core.next(seq22303__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__22304,G__22305,G__22306,seq22303__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22366 = arguments.length;
var i__8980__auto___22367 = (0);
while(true){
if((i__8980__auto___22367 < len__8979__auto___22366)){
args__8986__auto__.push((arguments[i__8980__auto___22367]));

var G__22369 = (i__8980__auto___22367 + (1));
i__8980__auto___22367 = G__22369;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__22330){
var vec__22331 = p__22330;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22331,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22331,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq22323){
var G__22324 = cljs.core.first(seq22323);
var seq22323__$1 = cljs.core.next(seq22323);
var G__22325 = cljs.core.first(seq22323__$1);
var seq22323__$2 = cljs.core.next(seq22323__$1);
var G__22326 = cljs.core.first(seq22323__$2);
var seq22323__$3 = cljs.core.next(seq22323__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22324,G__22325,G__22326,seq22323__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22427 = arguments.length;
var i__8980__auto___22428 = (0);
while(true){
if((i__8980__auto___22428 < len__8979__auto___22427)){
args__8986__auto__.push((arguments[i__8980__auto___22428]));

var G__22430 = (i__8980__auto___22428 + (1));
i__8980__auto___22428 = G__22430;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__22392){
var vec__22393 = p__22392;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22393,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22393,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq22382){
var G__22384 = cljs.core.first(seq22382);
var seq22382__$1 = cljs.core.next(seq22382);
var G__22385 = cljs.core.first(seq22382__$1);
var seq22382__$2 = cljs.core.next(seq22382__$1);
var G__22386 = cljs.core.first(seq22382__$2);
var seq22382__$3 = cljs.core.next(seq22382__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22384,G__22385,G__22386,seq22382__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22475 = arguments.length;
var i__8980__auto___22476 = (0);
while(true){
if((i__8980__auto___22476 < len__8979__auto___22475)){
args__8986__auto__.push((arguments[i__8980__auto___22476]));

var G__22478 = (i__8980__auto___22476 + (1));
i__8980__auto___22476 = G__22478;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq22456){
var G__22457 = cljs.core.first(seq22456);
var seq22456__$1 = cljs.core.next(seq22456);
var G__22458 = cljs.core.first(seq22456__$1);
var seq22456__$2 = cljs.core.next(seq22456__$1);
var G__22459 = cljs.core.first(seq22456__$2);
var seq22456__$3 = cljs.core.next(seq22456__$2);
var G__22460 = cljs.core.first(seq22456__$3);
var seq22456__$4 = cljs.core.next(seq22456__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22457,G__22458,G__22459,G__22460,seq22456__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22530 = arguments.length;
var i__8980__auto___22531 = (0);
while(true){
if((i__8980__auto___22531 < len__8979__auto___22530)){
args__8986__auto__.push((arguments[i__8980__auto___22531]));

var G__22533 = (i__8980__auto___22531 + (1));
i__8980__auto___22531 = G__22533;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq22479){
var G__22480 = cljs.core.first(seq22479);
var seq22479__$1 = cljs.core.next(seq22479);
var G__22481 = cljs.core.first(seq22479__$1);
var seq22479__$2 = cljs.core.next(seq22479__$1);
var G__22482 = cljs.core.first(seq22479__$2);
var seq22479__$3 = cljs.core.next(seq22479__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22480,G__22481,G__22482,seq22479__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22585 = arguments.length;
var i__8980__auto___22586 = (0);
while(true){
if((i__8980__auto___22586 < len__8979__auto___22585)){
args__8986__auto__.push((arguments[i__8980__auto___22586]));

var G__22587 = (i__8980__auto___22586 + (1));
i__8980__auto___22586 = G__22587;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq22566){
var G__22568 = cljs.core.first(seq22566);
var seq22566__$1 = cljs.core.next(seq22566);
var G__22569 = cljs.core.first(seq22566__$1);
var seq22566__$2 = cljs.core.next(seq22566__$1);
var G__22570 = cljs.core.first(seq22566__$2);
var seq22566__$3 = cljs.core.next(seq22566__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22568,G__22569,G__22570,seq22566__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args22609 = [];
var len__8979__auto___22660 = arguments.length;
var i__8980__auto___22661 = (0);
while(true){
if((i__8980__auto___22661 < len__8979__auto___22660)){
args22609.push((arguments[i__8980__auto___22661]));

var G__22662 = (i__8980__auto___22661 + (1));
i__8980__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var G__22617 = args22609.length;
switch (G__22617) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args22609.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22606__auto__","temp__22606__auto__",-1441262570,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22606__auto__","temp__22606__auto__",-1441262570,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22606__auto__","temp__22606__auto__",-1441262570,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq22610){
var G__22611 = cljs.core.first(seq22610);
var seq22610__$1 = cljs.core.next(seq22610);
var G__22612 = cljs.core.first(seq22610__$1);
var seq22610__$2 = cljs.core.next(seq22610__$1);
var G__22613 = cljs.core.first(seq22610__$2);
var seq22610__$3 = cljs.core.next(seq22610__$2);
var G__22614 = cljs.core.first(seq22610__$3);
var seq22610__$4 = cljs.core.next(seq22610__$3);
var G__22615 = cljs.core.first(seq22610__$4);
var seq22610__$5 = cljs.core.next(seq22610__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__22611,G__22612,G__22613,G__22614,G__22615,seq22610__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22757 = arguments.length;
var i__8980__auto___22758 = (0);
while(true){
if((i__8980__auto___22758 < len__8979__auto___22757)){
args__8986__auto__.push((arguments[i__8980__auto___22758]));

var G__22760 = (i__8980__auto___22758 + (1));
i__8980__auto___22758 = G__22760;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22718__auto__","temp__22718__auto__",837166445,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22718__auto__","temp__22718__auto__",837166445,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22718__auto__","temp__22718__auto__",837166445,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq22719){
var G__22720 = cljs.core.first(seq22719);
var seq22719__$1 = cljs.core.next(seq22719);
var G__22721 = cljs.core.first(seq22719__$1);
var seq22719__$2 = cljs.core.next(seq22719__$1);
var G__22722 = cljs.core.first(seq22719__$2);
var seq22719__$3 = cljs.core.next(seq22719__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__22720,G__22721,G__22722,seq22719__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22791_SHARP_){
if(cljs.core.seq_QMARK_(p1__22791_SHARP_)){
return cljs.core.first(p1__22791_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22791_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22791_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__22792_SHARP_){
return cljs.core.vector_QMARK_(p1__22792_SHARP_);
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
var G__22796 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__22797 = cljs.core.next(fdecls);
ret = G__22796;
fdecls = G__22797;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__8692__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.array_seq([cljs.core._conj((function (){var x__8692__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
var G__22877 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__22878 = n;
var G__22879 = cljs.core.nnext(bs);
var G__22880 = true;
ret = G__22877;
n = G__22878;
bs = G__22879;
seen_rest_QMARK_ = G__22880;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__22892 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.array_seq([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8692__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__8692__auto__ = gvec;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__22893 = (n + (1));
var G__22894 = cljs.core.next(bs);
var G__22895 = seen_rest_QMARK_;
ret = G__22892;
n = G__22893;
bs = G__22894;
seen_rest_QMARK_ = G__22895;
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
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22810_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__7758__auto__ = mkns;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.namespace(p1__22810_SHARP_);
}
})(),cljs.core.name(p1__22810_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22811_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__7758__auto__ = mkns;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.namespace(p1__22811_SHARP_);
}
})(),cljs.core.name(p1__22811_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return (function (p1__22812_SHARP_,p2__22813_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22812_SHARP_,p2__22813_SHARP_,cljs.core.val(entry).call(null,p2__22813_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__8692__auto__ = gmap;
return cljs.core._conj((function (){var x__8692__auto____$1 = bk;
return cljs.core._conj((function (){var x__8692__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj((function (){var x__8692__auto__ = gmap;
return cljs.core._conj((function (){var x__8692__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__22912 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.array_seq([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__22913 = cljs.core.next(bes);
ret = G__22912;
bes = G__22913;
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
var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__22814_SHARP_){
return (cljs.core.first(p1__22814_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__6751__auto__){
var kwbs = temp__6751__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__8692__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__8986__auto__ = [];
var len__8979__auto___22970 = arguments.length;
var i__8980__auto___22971 = (0);
while(true){
if((i__8980__auto___22971 < len__8979__auto___22970)){
args__8986__auto__.push((arguments[i__8980__auto___22971]));

var G__22974 = (i__8980__auto___22971 + (1));
i__8980__auto___22971 = G__22974;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__8692__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq22964){
var G__22965 = cljs.core.first(seq22964);
var seq22964__$1 = cljs.core.next(seq22964);
var G__22966 = cljs.core.first(seq22964__$1);
var seq22964__$2 = cljs.core.next(seq22964__$1);
var G__22967 = cljs.core.first(seq22964__$2);
var seq22964__$3 = cljs.core.next(seq22964__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__22965,G__22966,G__22967,seq22964__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23007 = arguments.length;
var i__8980__auto___23008 = (0);
while(true){
if((i__8980__auto___23008 < len__8979__auto___23007)){
args__8986__auto__.push((arguments[i__8980__auto___23008]));

var G__23009 = (i__8980__auto___23008 + (1));
i__8980__auto___23008 = G__23009;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return (function (ret,p__22992){
var vec__22993 = p__22992;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22993,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq22983){
var G__22984 = cljs.core.first(seq22983);
var seq22983__$1 = cljs.core.next(seq22983);
var G__22985 = cljs.core.first(seq22983__$1);
var seq22983__$2 = cljs.core.next(seq22983__$1);
var G__22986 = cljs.core.first(seq22983__$2);
var seq22983__$3 = cljs.core.next(seq22983__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__22984,G__22985,G__22986,seq22983__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23027_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23027_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate((function (p__23030){
var vec__23031 = p__23030;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23031,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23031,(1),null);
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
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23045 = arguments.length;
var i__8980__auto___23046 = (0);
while(true){
if((i__8980__auto___23046 < len__8979__auto___23045)){
args__8986__auto__.push((arguments[i__8980__auto___23046]));

var G__23051 = (i__8980__auto___23046 + (1));
i__8980__auto___23046 = G__23051;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq23042){
var G__23043 = cljs.core.first(seq23042);
var seq23042__$1 = cljs.core.next(seq23042);
var G__23044 = cljs.core.first(seq23042__$1);
var seq23042__$2 = cljs.core.next(seq23042__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__23043,G__23044,seq23042__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__7746__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__7746__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__7746__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args23069 = [];
var len__8979__auto___23093 = arguments.length;
var i__8980__auto___23094 = (0);
while(true){
if((i__8980__auto___23094 < len__8979__auto___23093)){
args23069.push((arguments[i__8980__auto___23094]));

var G__23095 = (i__8980__auto___23094 + (1));
i__8980__auto___23094 = G__23095;
continue;
} else {
}
break;
}

var G__23076 = args23069.length;
switch (G__23076) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23069.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

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
return (function (p1__23065_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__23065_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__23066_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__23066_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__23067__auto__","and__23067__auto__",-1056147185,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__23067__auto__","and__23067__auto__",-1056147185,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__23067__auto__","and__23067__auto__",-1056147185,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq23070){
var G__23071 = cljs.core.first(seq23070);
var seq23070__$1 = cljs.core.next(seq23070);
var G__23072 = cljs.core.first(seq23070__$1);
var seq23070__$2 = cljs.core.next(seq23070__$1);
var G__23073 = cljs.core.first(seq23070__$2);
var seq23070__$3 = cljs.core.next(seq23070__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__23071,G__23072,G__23073,seq23070__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args23110 = [];
var len__8979__auto___23121 = arguments.length;
var i__8980__auto___23122 = (0);
while(true){
if((i__8980__auto___23122 < len__8979__auto___23121)){
args23110.push((arguments[i__8980__auto___23122]));

var G__23123 = (i__8980__auto___23122 + (1));
i__8980__auto___23122 = G__23123;
continue;
} else {
}
break;
}

var G__23117 = args23110.length;
switch (G__23117) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23110.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

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
return (function (p1__23107_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__23107_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__23108_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__23108_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__23109__auto__","or__23109__auto__",-730792092,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__23109__auto__","or__23109__auto__",-730792092,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__23109__auto__","or__23109__auto__",-730792092,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq23111){
var G__23112 = cljs.core.first(seq23111);
var seq23111__$1 = cljs.core.next(seq23111);
var G__23113 = cljs.core.first(seq23111__$1);
var seq23111__$2 = cljs.core.next(seq23111__$1);
var G__23114 = cljs.core.first(seq23111__$2);
var seq23111__$3 = cljs.core.next(seq23111__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__23112,G__23113,G__23114,seq23111__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.some_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = obj;
return cljs.core._conj((function (){var x__8692__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = key;
return cljs.core._conj((function (){var x__8692__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__8692__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__23248 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__23249 = cljs.core.seq(vec__23248);
var first__23250 = cljs.core.first(seq__23249);
var seq__23249__$1 = cljs.core.next(seq__23249);
var x = first__23250;
var ys = seq__23249__$1;
return cljs.core._conj((function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23248,seq__23249,first__23250,seq__23249__$1,x,ys){
return (function (p1__23237_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__23237_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__23248,seq__23249,first__23250,seq__23249__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj((function (){var x__8692__auto__ = cast_expr;
return cljs.core._conj((function (){var x__8692__auto____$1 = x;
return cljs.core._conj((function (){var x__8692__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__23279__auto__","c__23279__auto__",1228166040,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23280__auto__","x__23280__auto__",-868395193,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23280__auto__","x__23280__auto__",-868395193,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__23279__auto__","c__23279__auto__",1228166040,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args23366 = [];
var len__8979__auto___23390 = arguments.length;
var i__8980__auto___23391 = (0);
while(true){
if((i__8980__auto___23391 < len__8979__auto___23390)){
args23366.push((arguments[i__8980__auto___23391]));

var G__23392 = (i__8980__auto___23391 + (1));
i__8980__auto___23391 = G__23392;
continue;
} else {
}
break;
}

var G__23376 = args23366.length;
switch (G__23376) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23366.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq23367){
var G__23368 = cljs.core.first(seq23367);
var seq23367__$1 = cljs.core.next(seq23367);
var G__23369 = cljs.core.first(seq23367__$1);
var seq23367__$2 = cljs.core.next(seq23367__$1);
var G__23370 = cljs.core.first(seq23367__$2);
var seq23367__$3 = cljs.core.next(seq23367__$2);
var G__23371 = cljs.core.first(seq23367__$3);
var seq23367__$4 = cljs.core.next(seq23367__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__23368,G__23369,G__23370,G__23371,seq23367__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args23403 = [];
var len__8979__auto___23435 = arguments.length;
var i__8980__auto___23436 = (0);
while(true){
if((i__8980__auto___23436 < len__8979__auto___23435)){
args23403.push((arguments[i__8980__auto___23436]));

var G__23437 = (i__8980__auto___23436 + (1));
i__8980__auto___23436 = G__23437;
continue;
} else {
}
break;
}

var G__23411 = args23403.length;
switch (G__23411) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23403.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = i;
return cljs.core._conj((function (){var x__8692__auto____$2 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq23404){
var G__23405 = cljs.core.first(seq23404);
var seq23404__$1 = cljs.core.next(seq23404);
var G__23406 = cljs.core.first(seq23404__$1);
var seq23404__$2 = cljs.core.next(seq23404__$1);
var G__23407 = cljs.core.first(seq23404__$2);
var seq23404__$3 = cljs.core.next(seq23404__$2);
var G__23408 = cljs.core.first(seq23404__$3);
var seq23404__$4 = cljs.core.next(seq23404__$3);
var G__23409 = cljs.core.first(seq23404__$4);
var seq23404__$5 = cljs.core.next(seq23404__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__23405,G__23406,G__23407,G__23408,G__23409,seq23404__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args23477 = [];
var len__8979__auto___23488 = arguments.length;
var i__8980__auto___23489 = (0);
while(true){
if((i__8980__auto___23489 < len__8979__auto___23488)){
args23477.push((arguments[i__8980__auto___23489]));

var G__23490 = (i__8980__auto___23489 + (1));
i__8980__auto___23489 = G__23490;
continue;
} else {
}
break;
}

var G__23487 = args23477.length;
switch (G__23487) {
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
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23477.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq23478){
var G__23479 = cljs.core.first(seq23478);
var seq23478__$1 = cljs.core.next(seq23478);
var G__23480 = cljs.core.first(seq23478__$1);
var seq23478__$2 = cljs.core.next(seq23478__$1);
var G__23481 = cljs.core.first(seq23478__$2);
var seq23478__$3 = cljs.core.next(seq23478__$2);
var G__23482 = cljs.core.first(seq23478__$3);
var seq23478__$4 = cljs.core.next(seq23478__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__23479,G__23480,G__23481,G__23482,seq23478__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23510 = arguments.length;
var i__8980__auto___23511 = (0);
while(true){
if((i__8980__auto___23511 < len__8979__auto___23510)){
args__8986__auto__.push((arguments[i__8980__auto___23511]));

var G__23512 = (i__8980__auto___23511 + (1));
i__8980__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq23507){
var G__23508 = cljs.core.first(seq23507);
var seq23507__$1 = cljs.core.next(seq23507);
var G__23509 = cljs.core.first(seq23507__$1);
var seq23507__$2 = cljs.core.next(seq23507__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__23508,G__23509,seq23507__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23521 = arguments.length;
var i__8980__auto___23522 = (0);
while(true){
if((i__8980__auto___23522 < len__8979__auto___23521)){
args__8986__auto__.push((arguments[i__8980__auto___23522]));

var G__23535 = (i__8980__auto___23522 + (1));
i__8980__auto___23522 = G__23535;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq23517){
var G__23518 = cljs.core.first(seq23517);
var seq23517__$1 = cljs.core.next(seq23517);
var G__23519 = cljs.core.first(seq23517__$1);
var seq23517__$2 = cljs.core.next(seq23517__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__23518,G__23519,seq23517__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23556 = arguments.length;
var i__8980__auto___23557 = (0);
while(true){
if((i__8980__auto___23557 < len__8979__auto___23556)){
args__8986__auto__.push((arguments[i__8980__auto___23557]));

var G__23558 = (i__8980__auto___23557 + (1));
i__8980__auto___23557 = G__23558;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq23541){
var G__23542 = cljs.core.first(seq23541);
var seq23541__$1 = cljs.core.next(seq23541);
var G__23543 = cljs.core.first(seq23541__$1);
var seq23541__$2 = cljs.core.next(seq23541__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__23542,G__23543,seq23541__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23567 = arguments.length;
var i__8980__auto___23568 = (0);
while(true){
if((i__8980__auto___23568 < len__8979__auto___23567)){
args__8986__auto__.push((arguments[i__8980__auto___23568]));

var G__23569 = (i__8980__auto___23568 + (1));
i__8980__auto___23568 = G__23569;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq23564){
var G__23565 = cljs.core.first(seq23564);
var seq23564__$1 = cljs.core.next(seq23564);
var G__23566 = cljs.core.first(seq23564__$1);
var seq23564__$2 = cljs.core.next(seq23564__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__23565,G__23566,seq23564__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23589 = arguments.length;
var i__8980__auto___23590 = (0);
while(true){
if((i__8980__auto___23590 < len__8979__auto___23589)){
args__8986__auto__.push((arguments[i__8980__auto___23590]));

var G__23591 = (i__8980__auto___23590 + (1));
i__8980__auto___23590 = G__23591;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq23570){
var G__23571 = cljs.core.first(seq23570);
var seq23570__$1 = cljs.core.next(seq23570);
var G__23572 = cljs.core.first(seq23570__$1);
var seq23570__$2 = cljs.core.next(seq23570__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__23571,G__23572,seq23570__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23639 = arguments.length;
var i__8980__auto___23640 = (0);
while(true){
if((i__8980__auto___23640 < len__8979__auto___23639)){
args__8986__auto__.push((arguments[i__8980__auto___23640]));

var G__23646 = (i__8980__auto___23640 + (1));
i__8980__auto___23640 = G__23646;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq23636){
var G__23637 = cljs.core.first(seq23636);
var seq23636__$1 = cljs.core.next(seq23636);
var G__23638 = cljs.core.first(seq23636__$1);
var seq23636__$2 = cljs.core.next(seq23636__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__23637,G__23638,seq23636__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___23657 = arguments.length;
var i__8980__auto___23658 = (0);
while(true){
if((i__8980__auto___23658 < len__8979__auto___23657)){
args__8986__auto__.push((arguments[i__8980__auto___23658]));

var G__23665 = (i__8980__auto___23658 + (1));
i__8980__auto___23658 = G__23665;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq23647){
var G__23648 = cljs.core.first(seq23647);
var seq23647__$1 = cljs.core.next(seq23647);
var G__23649 = cljs.core.first(seq23647__$1);
var seq23647__$2 = cljs.core.next(seq23647__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__23648,G__23649,seq23647__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args23666 = [];
var len__8979__auto___23692 = arguments.length;
var i__8980__auto___23693 = (0);
while(true){
if((i__8980__auto___23693 < len__8979__auto___23692)){
args23666.push((arguments[i__8980__auto___23693]));

var G__23694 = (i__8980__auto___23693 + (1));
i__8980__auto___23693 = G__23694;
continue;
} else {
}
break;
}

var G__23673 = args23666.length;
switch (G__23673) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23666.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq23667){
var G__23668 = cljs.core.first(seq23667);
var seq23667__$1 = cljs.core.next(seq23667);
var G__23669 = cljs.core.first(seq23667__$1);
var seq23667__$2 = cljs.core.next(seq23667__$1);
var G__23670 = cljs.core.first(seq23667__$2);
var seq23667__$3 = cljs.core.next(seq23667__$2);
var G__23671 = cljs.core.first(seq23667__$3);
var seq23667__$4 = cljs.core.next(seq23667__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__23668,G__23669,G__23670,G__23671,seq23667__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args23696 = [];
var len__8979__auto___23707 = arguments.length;
var i__8980__auto___23708 = (0);
while(true){
if((i__8980__auto___23708 < len__8979__auto___23707)){
args23696.push((arguments[i__8980__auto___23708]));

var G__23709 = (i__8980__auto___23708 + (1));
i__8980__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var G__23703 = args23696.length;
switch (G__23703) {
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
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23696.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq23697){
var G__23698 = cljs.core.first(seq23697);
var seq23697__$1 = cljs.core.next(seq23697);
var G__23699 = cljs.core.first(seq23697__$1);
var seq23697__$2 = cljs.core.next(seq23697__$1);
var G__23700 = cljs.core.first(seq23697__$2);
var seq23697__$3 = cljs.core.next(seq23697__$2);
var G__23701 = cljs.core.first(seq23697__$3);
var seq23697__$4 = cljs.core.next(seq23697__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23698,G__23699,G__23700,G__23701,seq23697__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args23720 = [];
var len__8979__auto___23734 = arguments.length;
var i__8980__auto___23735 = (0);
while(true){
if((i__8980__auto___23735 < len__8979__auto___23734)){
args23720.push((arguments[i__8980__auto___23735]));

var G__23736 = (i__8980__auto___23735 + (1));
i__8980__auto___23735 = G__23736;
continue;
} else {
}
break;
}

var G__23727 = args23720.length;
switch (G__23727) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23720.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq23721){
var G__23722 = cljs.core.first(seq23721);
var seq23721__$1 = cljs.core.next(seq23721);
var G__23723 = cljs.core.first(seq23721__$1);
var seq23721__$2 = cljs.core.next(seq23721__$1);
var G__23724 = cljs.core.first(seq23721__$2);
var seq23721__$3 = cljs.core.next(seq23721__$2);
var G__23725 = cljs.core.first(seq23721__$3);
var seq23721__$4 = cljs.core.next(seq23721__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__23722,G__23723,G__23724,G__23725,seq23721__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args23750 = [];
var len__8979__auto___23758 = arguments.length;
var i__8980__auto___23759 = (0);
while(true){
if((i__8980__auto___23759 < len__8979__auto___23758)){
args23750.push((arguments[i__8980__auto___23759]));

var G__23760 = (i__8980__auto___23759 + (1));
i__8980__auto___23759 = G__23760;
continue;
} else {
}
break;
}

var G__23757 = args23750.length;
switch (G__23757) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23750.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq23751){
var G__23752 = cljs.core.first(seq23751);
var seq23751__$1 = cljs.core.next(seq23751);
var G__23753 = cljs.core.first(seq23751__$1);
var seq23751__$2 = cljs.core.next(seq23751__$1);
var G__23754 = cljs.core.first(seq23751__$2);
var seq23751__$3 = cljs.core.next(seq23751__$2);
var G__23755 = cljs.core.first(seq23751__$3);
var seq23751__$4 = cljs.core.next(seq23751__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__23752,G__23753,G__23754,G__23755,seq23751__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args23771 = [];
var len__8979__auto___23785 = arguments.length;
var i__8980__auto___23786 = (0);
while(true){
if((i__8980__auto___23786 < len__8979__auto___23785)){
args23771.push((arguments[i__8980__auto___23786]));

var G__23787 = (i__8980__auto___23786 + (1));
i__8980__auto___23786 = G__23787;
continue;
} else {
}
break;
}

var G__23784 = args23771.length;
switch (G__23784) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23771.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq23772){
var G__23773 = cljs.core.first(seq23772);
var seq23772__$1 = cljs.core.next(seq23772);
var G__23774 = cljs.core.first(seq23772__$1);
var seq23772__$2 = cljs.core.next(seq23772__$1);
var G__23775 = cljs.core.first(seq23772__$2);
var seq23772__$3 = cljs.core.next(seq23772__$2);
var G__23776 = cljs.core.first(seq23772__$3);
var seq23772__$4 = cljs.core.next(seq23772__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__23773,G__23774,G__23775,G__23776,seq23772__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args23794 = [];
var len__8979__auto___23805 = arguments.length;
var i__8980__auto___23806 = (0);
while(true){
if((i__8980__auto___23806 < len__8979__auto___23805)){
args23794.push((arguments[i__8980__auto___23806]));

var G__23807 = (i__8980__auto___23806 + (1));
i__8980__auto___23806 = G__23807;
continue;
} else {
}
break;
}

var G__23801 = args23794.length;
switch (G__23801) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23794.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq23795){
var G__23796 = cljs.core.first(seq23795);
var seq23795__$1 = cljs.core.next(seq23795);
var G__23797 = cljs.core.first(seq23795__$1);
var seq23795__$2 = cljs.core.next(seq23795__$1);
var G__23798 = cljs.core.first(seq23795__$2);
var seq23795__$3 = cljs.core.next(seq23795__$2);
var G__23799 = cljs.core.first(seq23795__$3);
var seq23795__$4 = cljs.core.next(seq23795__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__23796,G__23797,G__23798,G__23799,seq23795__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args23815 = [];
var len__8979__auto___23832 = arguments.length;
var i__8980__auto___23833 = (0);
while(true){
if((i__8980__auto___23833 < len__8979__auto___23832)){
args23815.push((arguments[i__8980__auto___23833]));

var G__23834 = (i__8980__auto___23833 + (1));
i__8980__auto___23833 = G__23834;
continue;
} else {
}
break;
}

var G__23822 = args23815.length;
switch (G__23822) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23815.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq23816){
var G__23817 = cljs.core.first(seq23816);
var seq23816__$1 = cljs.core.next(seq23816);
var G__23818 = cljs.core.first(seq23816__$1);
var seq23816__$2 = cljs.core.next(seq23816__$1);
var G__23819 = cljs.core.first(seq23816__$2);
var seq23816__$3 = cljs.core.next(seq23816__$2);
var G__23820 = cljs.core.first(seq23816__$3);
var seq23816__$4 = cljs.core.next(seq23816__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__23817,G__23818,G__23819,G__23820,seq23816__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args23838 = [];
var len__8979__auto___23857 = arguments.length;
var i__8980__auto___23858 = (0);
while(true){
if((i__8980__auto___23858 < len__8979__auto___23857)){
args23838.push((arguments[i__8980__auto___23858]));

var G__23859 = (i__8980__auto___23858 + (1));
i__8980__auto___23858 = G__23859;
continue;
} else {
}
break;
}

var G__23848 = args23838.length;
switch (G__23848) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23838.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq23839){
var G__23840 = cljs.core.first(seq23839);
var seq23839__$1 = cljs.core.next(seq23839);
var G__23841 = cljs.core.first(seq23839__$1);
var seq23839__$2 = cljs.core.next(seq23839__$1);
var G__23842 = cljs.core.first(seq23839__$2);
var seq23839__$3 = cljs.core.next(seq23839__$2);
var G__23843 = cljs.core.first(seq23839__$3);
var seq23839__$4 = cljs.core.next(seq23839__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__23840,G__23841,G__23842,G__23843,seq23839__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args23874 = [];
var len__8979__auto___23895 = arguments.length;
var i__8980__auto___23896 = (0);
while(true){
if((i__8980__auto___23896 < len__8979__auto___23895)){
args23874.push((arguments[i__8980__auto___23896]));

var G__23897 = (i__8980__auto___23896 + (1));
i__8980__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var G__23893 = args23874.length;
switch (G__23893) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23874.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq23875){
var G__23876 = cljs.core.first(seq23875);
var seq23875__$1 = cljs.core.next(seq23875);
var G__23877 = cljs.core.first(seq23875__$1);
var seq23875__$2 = cljs.core.next(seq23875__$1);
var G__23878 = cljs.core.first(seq23875__$2);
var seq23875__$3 = cljs.core.next(seq23875__$2);
var G__23879 = cljs.core.first(seq23875__$3);
var seq23875__$4 = cljs.core.next(seq23875__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__23876,G__23877,G__23878,G__23879,seq23875__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args23921 = [];
var len__8979__auto___23941 = arguments.length;
var i__8980__auto___23942 = (0);
while(true){
if((i__8980__auto___23942 < len__8979__auto___23941)){
args23921.push((arguments[i__8980__auto___23942]));

var G__23943 = (i__8980__auto___23942 + (1));
i__8980__auto___23942 = G__23943;
continue;
} else {
}
break;
}

var G__23928 = args23921.length;
switch (G__23928) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23921.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23919__auto__","x__23919__auto__",1862736304,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23920__auto__","y__23920__auto__",38527883,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23919__auto__","x__23919__auto__",1862736304,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23920__auto__","y__23920__auto__",38527883,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23919__auto__","x__23919__auto__",1862736304,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23920__auto__","y__23920__auto__",38527883,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq23922){
var G__23923 = cljs.core.first(seq23922);
var seq23922__$1 = cljs.core.next(seq23922);
var G__23924 = cljs.core.first(seq23922__$1);
var seq23922__$2 = cljs.core.next(seq23922__$1);
var G__23925 = cljs.core.first(seq23922__$2);
var seq23922__$3 = cljs.core.next(seq23922__$2);
var G__23926 = cljs.core.first(seq23922__$3);
var seq23922__$4 = cljs.core.next(seq23922__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__23923,G__23924,G__23925,G__23926,seq23922__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args23947 = [];
var len__8979__auto___23969 = arguments.length;
var i__8980__auto___23970 = (0);
while(true){
if((i__8980__auto___23970 < len__8979__auto___23969)){
args23947.push((arguments[i__8980__auto___23970]));

var G__23971 = (i__8980__auto___23970 + (1));
i__8980__auto___23970 = G__23971;
continue;
} else {
}
break;
}

var G__23954 = args23947.length;
switch (G__23954) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23947.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23945__auto__","x__23945__auto__",-1606110569,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23946__auto__","y__23946__auto__",-55842300,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23945__auto__","x__23945__auto__",-1606110569,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23946__auto__","y__23946__auto__",-55842300,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23945__auto__","x__23945__auto__",-1606110569,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__23946__auto__","y__23946__auto__",-55842300,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq23948){
var G__23949 = cljs.core.first(seq23948);
var seq23948__$1 = cljs.core.next(seq23948);
var G__23950 = cljs.core.first(seq23948__$1);
var seq23948__$2 = cljs.core.next(seq23948__$1);
var G__23951 = cljs.core.first(seq23948__$2);
var seq23948__$3 = cljs.core.next(seq23948__$2);
var G__23952 = cljs.core.first(seq23948__$3);
var seq23948__$4 = cljs.core.next(seq23948__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__23949,G__23950,G__23951,G__23952,seq23948__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = num;
return cljs.core._conj((function (){var x__8692__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args23987 = [];
var len__8979__auto___24001 = arguments.length;
var i__8980__auto___24002 = (0);
while(true){
if((i__8980__auto___24002 < len__8979__auto___24001)){
args23987.push((arguments[i__8980__auto___24002]));

var G__24003 = (i__8980__auto___24002 + (1));
i__8980__auto___24002 = G__24003;
continue;
} else {
}
break;
}

var G__23994 = args23987.length;
switch (G__23994) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args23987.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq23988){
var G__23989 = cljs.core.first(seq23988);
var seq23988__$1 = cljs.core.next(seq23988);
var G__23990 = cljs.core.first(seq23988__$1);
var seq23988__$2 = cljs.core.next(seq23988__$1);
var G__23991 = cljs.core.first(seq23988__$2);
var seq23988__$3 = cljs.core.next(seq23988__$2);
var G__23992 = cljs.core.first(seq23988__$3);
var seq23988__$4 = cljs.core.next(seq23988__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__23989,G__23990,G__23991,G__23992,seq23988__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args24005 = [];
var len__8979__auto___24014 = arguments.length;
var i__8980__auto___24016 = (0);
while(true){
if((i__8980__auto___24016 < len__8979__auto___24014)){
args24005.push((arguments[i__8980__auto___24016]));

var G__24017 = (i__8980__auto___24016 + (1));
i__8980__auto___24016 = G__24017;
continue;
} else {
}
break;
}

var G__24012 = args24005.length;
switch (G__24012) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args24005.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq24006){
var G__24007 = cljs.core.first(seq24006);
var seq24006__$1 = cljs.core.next(seq24006);
var G__24008 = cljs.core.first(seq24006__$1);
var seq24006__$2 = cljs.core.next(seq24006__$1);
var G__24009 = cljs.core.first(seq24006__$2);
var seq24006__$3 = cljs.core.next(seq24006__$2);
var G__24010 = cljs.core.first(seq24006__$3);
var seq24006__$4 = cljs.core.next(seq24006__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__24007,G__24008,G__24009,G__24010,seq24006__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args24023 = [];
var len__8979__auto___24037 = arguments.length;
var i__8980__auto___24038 = (0);
while(true){
if((i__8980__auto___24038 < len__8979__auto___24037)){
args24023.push((arguments[i__8980__auto___24038]));

var G__24039 = (i__8980__auto___24038 + (1));
i__8980__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var G__24031 = args24023.length;
switch (G__24031) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args24023.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq24024){
var G__24025 = cljs.core.first(seq24024);
var seq24024__$1 = cljs.core.next(seq24024);
var G__24026 = cljs.core.first(seq24024__$1);
var seq24024__$2 = cljs.core.next(seq24024__$1);
var G__24027 = cljs.core.first(seq24024__$2);
var seq24024__$3 = cljs.core.next(seq24024__$2);
var G__24028 = cljs.core.first(seq24024__$3);
var seq24024__$4 = cljs.core.next(seq24024__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__24025,G__24026,G__24027,G__24028,seq24024__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args24058 = [];
var len__8979__auto___24068 = arguments.length;
var i__8980__auto___24069 = (0);
while(true){
if((i__8980__auto___24069 < len__8979__auto___24068)){
args24058.push((arguments[i__8980__auto___24069]));

var G__24070 = (i__8980__auto___24069 + (1));
i__8980__auto___24069 = G__24070;
continue;
} else {
}
break;
}

var G__24065 = args24058.length;
switch (G__24065) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args24058.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq24059){
var G__24060 = cljs.core.first(seq24059);
var seq24059__$1 = cljs.core.next(seq24059);
var G__24061 = cljs.core.first(seq24059__$1);
var seq24059__$2 = cljs.core.next(seq24059__$1);
var G__24062 = cljs.core.first(seq24059__$2);
var seq24059__$3 = cljs.core.next(seq24059__$2);
var G__24063 = cljs.core.first(seq24059__$3);
var seq24059__$4 = cljs.core.next(seq24059__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__24060,G__24061,G__24062,G__24063,seq24059__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args24114 = [];
var len__8979__auto___24122 = arguments.length;
var i__8980__auto___24123 = (0);
while(true){
if((i__8980__auto___24123 < len__8979__auto___24122)){
args24114.push((arguments[i__8980__auto___24123]));

var G__24124 = (i__8980__auto___24123 + (1));
i__8980__auto___24123 = G__24124;
continue;
} else {
}
break;
}

var G__24121 = args24114.length;
switch (G__24121) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args24114.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq24115){
var G__24116 = cljs.core.first(seq24115);
var seq24115__$1 = cljs.core.next(seq24115);
var G__24117 = cljs.core.first(seq24115__$1);
var seq24115__$2 = cljs.core.next(seq24115__$1);
var G__24118 = cljs.core.first(seq24115__$2);
var seq24115__$3 = cljs.core.next(seq24115__$2);
var G__24119 = cljs.core.first(seq24115__$3);
var seq24115__$4 = cljs.core.next(seq24115__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__24116,G__24117,G__24118,G__24119,seq24115__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = hash;
return cljs.core._conj((function (){var x__8692__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__8692__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null)),(function (){var x__8692__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__24144__auto__","h__24144__auto__",-583366488,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__24166__auto__","x__24166__auto__",872327419,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__24166__auto__","x__24166__auto__",872327419,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__8986__auto__ = [];
var len__8979__auto___24220 = arguments.length;
var i__8980__auto___24221 = (0);
while(true){
if((i__8980__auto___24221 < len__8979__auto___24220)){
args__8986__auto__.push((arguments[i__8980__auto___24221]));

var G__24226 = (i__8980__auto___24221 + (1));
i__8980__auto___24221 = G__24226;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((6) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8987__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq24200){
var G__24201 = cljs.core.first(seq24200);
var seq24200__$1 = cljs.core.next(seq24200);
var G__24202 = cljs.core.first(seq24200__$1);
var seq24200__$2 = cljs.core.next(seq24200__$1);
var G__24203 = cljs.core.first(seq24200__$2);
var seq24200__$3 = cljs.core.next(seq24200__$2);
var G__24204 = cljs.core.first(seq24200__$3);
var seq24200__$4 = cljs.core.next(seq24200__$3);
var G__24205 = cljs.core.first(seq24200__$4);
var seq24200__$5 = cljs.core.next(seq24200__$4);
var G__24206 = cljs.core.first(seq24200__$5);
var seq24200__$6 = cljs.core.next(seq24200__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__24201,G__24202,G__24203,G__24204,G__24205,G__24206,seq24200__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = clojure.walk.postwalk((function (p1__24253_SHARP_){
if(cljs.core.sequential_QMARK_(p1__24253_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__24253_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),p1__24253_SHARP_));
} else {
return p1__24253_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__24267,fkv){
var vec__24271 = p__24267;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
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
var args__8986__auto__ = [];
var len__8979__auto___24331 = arguments.length;
var i__8980__auto___24332 = (0);
while(true){
if((i__8980__auto___24332 < len__8979__auto___24331)){
args__8986__auto__.push((arguments[i__8980__auto___24332]));

var G__24333 = (i__8980__auto___24332 + (1));
i__8980__auto___24332 = G__24333;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__8692__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq24286){
var G__24287 = cljs.core.first(seq24286);
var seq24286__$1 = cljs.core.next(seq24286);
var G__24288 = cljs.core.first(seq24286__$1);
var seq24286__$2 = cljs.core.next(seq24286__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__24287,G__24288,seq24286__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___24354 = arguments.length;
var i__8980__auto___24355 = (0);
while(true){
if((i__8980__auto___24355 < len__8979__auto___24354)){
args__8986__auto__.push((arguments[i__8980__auto___24355]));

var G__24357 = (i__8980__auto___24355 + (1));
i__8980__auto___24355 = G__24357;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq24349){
var G__24350 = cljs.core.first(seq24349);
var seq24349__$1 = cljs.core.next(seq24349);
var G__24351 = cljs.core.first(seq24349__$1);
var seq24349__$2 = cljs.core.next(seq24349__$1);
var G__24352 = cljs.core.first(seq24349__$2);
var seq24349__$3 = cljs.core.next(seq24349__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24350,G__24351,G__24352,seq24349__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__8986__auto__ = [];
var len__8979__auto___24374 = arguments.length;
var i__8980__auto___24375 = (0);
while(true){
if((i__8980__auto___24375 < len__8979__auto___24374)){
args__8986__auto__.push((arguments[i__8980__auto___24375]));

var G__24376 = (i__8980__auto___24375 + (1));
i__8980__auto___24375 = G__24376;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq24364){
var G__24365 = cljs.core.first(seq24364);
var seq24364__$1 = cljs.core.next(seq24364);
var G__24366 = cljs.core.first(seq24364__$1);
var seq24364__$2 = cljs.core.next(seq24364__$1);
var G__24367 = cljs.core.first(seq24364__$2);
var seq24364__$3 = cljs.core.next(seq24364__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__24365,G__24366,G__24367,seq24364__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__8986__auto__ = [];
var len__8979__auto___24399 = arguments.length;
var i__8980__auto___24400 = (0);
while(true){
if((i__8980__auto___24400 < len__8979__auto___24399)){
args__8986__auto__.push((arguments[i__8980__auto___24400]));

var G__24401 = (i__8980__auto___24400 + (1));
i__8980__auto___24400 = G__24401;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq24389){
var G__24390 = cljs.core.first(seq24389);
var seq24389__$1 = cljs.core.next(seq24389);
var G__24391 = cljs.core.first(seq24389__$1);
var seq24389__$2 = cljs.core.next(seq24389__$1);
var G__24392 = cljs.core.first(seq24389__$2);
var seq24389__$3 = cljs.core.next(seq24389__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__24390,G__24391,G__24392,seq24389__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__6751__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__6751__auto__)){
var var$ = temp__6751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__7746__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7746__auto__)){
var and__7746__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__7746__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__7746__auto____$1;
}
} else {
return and__7746__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__6751__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__6751__auto__))
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
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
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
var G__24423 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__24424 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__24423;
s = G__24424;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__24425){
var vec__24436 = p__24425;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__24436,p,sigs){
return (function (p__24439){
var vec__24440 = p__24439;
var seq__24441 = cljs.core.seq(vec__24440);
var first__24442 = cljs.core.first(seq__24441);
var seq__24441__$1 = cljs.core.next(seq__24441);
var f = first__24442;
var meths = seq__24441__$1;
var form = vec__24440;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__24436,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__8789__auto__ = (function (){var G__24453 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24453) : cljs.core.atom.call(null,G__24453));
})();
var prefer_table__8790__auto__ = (function (){var G__24454 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24454) : cljs.core.atom.call(null,G__24454));
})();
var method_cache__8791__auto__ = (function (){var G__24455 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24455) : cljs.core.atom.call(null,G__24455));
})();
var cached_hierarchy__8792__auto__ = (function (){var G__24456 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24456) : cljs.core.atom.call(null,G__24456));
})();
var hierarchy__8793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__,hierarchy__8793__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__,hierarchy__8793__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8793__auto__,method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__8692__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__24466){
var vec__24473 = p__24466;
var seq__24474 = cljs.core.seq(vec__24473);
var first__24475 = cljs.core.first(seq__24474);
var seq__24474__$1 = cljs.core.next(seq__24474);
var vec__24476 = first__24475;
var seq__24477 = cljs.core.seq(vec__24476);
var first__24478 = cljs.core.first(seq__24477);
var seq__24477__$1 = cljs.core.next(seq__24477);
var this$ = first__24478;
var args = seq__24477__$1;
var sig = vec__24476;
var body = seq__24474__$1;
var x__8692__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__24479){
var vec__24502 = p__24479;
var seq__24503 = cljs.core.seq(vec__24502);
var first__24504 = cljs.core.first(seq__24503);
var seq__24503__$1 = cljs.core.next(seq__24503);
var vec__24505 = first__24504;
var seq__24506 = cljs.core.seq(vec__24505);
var first__24507 = cljs.core.first(seq__24506);
var seq__24506__$1 = cljs.core.next(seq__24506);
var this$ = first__24507;
var args = seq__24506__$1;
var sig = vec__24505;
var body = seq__24503__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__24530){
var vec__24541 = p__24530;
var seq__24542 = cljs.core.seq(vec__24541);
var first__24543 = cljs.core.first(seq__24542);
var seq__24542__$1 = cljs.core.next(seq__24542);
var vec__24544 = first__24543;
var seq__24545 = cljs.core.seq(vec__24544);
var first__24546 = cljs.core.first(seq__24545);
var seq__24545__$1 = cljs.core.next(seq__24545);
var this$ = first__24546;
var args = seq__24545__$1;
var sig = vec__24544;
var body = seq__24542__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__24559){
var vec__24567 = p__24559;
var seq__24568 = cljs.core.seq(vec__24567);
var first__24569 = cljs.core.first(seq__24568);
var seq__24568__$1 = cljs.core.next(seq__24568);
var vec__24570 = first__24569;
var seq__24571 = cljs.core.seq(vec__24570);
var first__24572 = cljs.core.first(seq__24571);
var seq__24571__$1 = cljs.core.next(seq__24571);
var this$ = first__24572;
var args = seq__24571__$1;
var sig = vec__24570;
var body = seq__24568__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24589){
var vec__24591 = p__24589;
var seq__24592 = cljs.core.seq(vec__24591);
var first__24593 = cljs.core.first(seq__24592);
var seq__24592__$1 = cljs.core.next(seq__24592);
var f = first__24593;
var meths = seq__24592__$1;
var form = vec__24591;
var vec__24594 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24594,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24594,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24594,f__$1,meths__$1,vec__24591,seq__24592,first__24593,seq__24592__$1,f,meths,form){
return (function (p1__24579_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__24579_SHARP_);
});})(vec__24594,f__$1,meths__$1,vec__24591,seq__24592,first__24593,seq__24592__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__24621){
var vec__24631 = p__24621;
var seq__24632 = cljs.core.seq(vec__24631);
var first__24633 = cljs.core.first(seq__24632);
var seq__24632__$1 = cljs.core.next(seq__24632);
var f = first__24633;
var meths = seq__24632__$1;
var form = vec__24631;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24631,seq__24632,first__24633,seq__24632__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__24636 = type_sym;
var G__24637 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24636,G__24637) : cljs.core$macros.extend_prefix.call(null,G__24636,G__24637));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(vec__24631,seq__24632,first__24633,seq__24632__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24631,seq__24632,first__24633,seq__24632__$1,f,meths,form){
return (function (p1__24620_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__24620_SHARP_);
});})(vec__24631,seq__24632,first__24633,seq__24632__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__24654){
var vec__24752 = p__24654;
var seq__24753 = cljs.core.seq(vec__24752);
var first__24754 = cljs.core.first(seq__24753);
var seq__24753__$1 = cljs.core.next(seq__24753);
var f = first__24754;
var meths = seq__24753__$1;
var form = vec__24752;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24752,seq__24753,first__24754,seq__24753__$1,f,meths,form){
return (function (p1__24646_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__24646_SHARP_);
});})(vec__24752,seq__24753,first__24754,seq__24753__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__24757 = type_sym;
var G__24758 = new cljs.core.Symbol(null,"call","call",1120531661,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24757,G__24758) : cljs.core$macros.extend_prefix.call(null,G__24757,G__24758));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__24763 = type_sym;
var G__24764 = new cljs.core.Symbol(null,"apply","apply",-1334050276,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24763,G__24764) : cljs.core$macros.extend_prefix.call(null,G__24763,G__24764));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__8692__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__24836){
var vec__24854 = p__24836;
var seq__24855 = cljs.core.seq(vec__24854);
var first__24856 = cljs.core.first(seq__24855);
var seq__24855__$1 = cljs.core.next(seq__24855);
var f = first__24856;
var meths = seq__24855__$1;
var form = vec__24854;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__24859 = type_sym;
var G__24860 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24859,G__24860) : cljs.core$macros.extend_prefix.call(null,G__24859,G__24860));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__24854,seq__24855,first__24856,seq__24855__$1,f,meths,form){
return (function (p__24861){
var vec__24862 = p__24861;
var seq__24863 = cljs.core.seq(vec__24862);
var first__24864 = cljs.core.first(seq__24863);
var seq__24863__$1 = cljs.core.next(seq__24863);
var sig = first__24864;
var body = seq__24863__$1;
var meth = vec__24862;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__24867 = type_sym;
var G__24868 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24867,G__24868) : cljs.core$macros.extend_prefix.call(null,G__24867,G__24868));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(pf,vec__24854,seq__24855,first__24856,seq__24855__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__24873){
var vec__24881 = p__24873;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__24881,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__24881,p,sigs))
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
var vec__24916 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24916,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24916,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_24920 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_24920))){
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

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__24921 = cljs.core.next(sigs__$1);
var G__24922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__24921;
seen = G__24922;
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

var seen_24941 = cljs.core.PersistentHashSet.EMPTY;
var methods_24942__$1 = methods$;
while(true){
if(cljs.core.seq(methods_24942__$1)){
var vec__24938_24943 = cljs.core.first(methods_24942__$1);
var fname_24944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24938_24943,(0),null);
var method_24945 = vec__24938_24943;
if(cljs.core.contains_QMARK_(seen_24941,fname_24944)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_24944], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_24945);

var G__24946 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_24941,fname_24944);
var G__24947 = cljs.core.next(methods_24942__$1);
seen_24941 = G__24946;
methods_24942__$1 = G__24947;
continue;
} else {
}
break;
}

var G__24948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__24949 = impls__$2;
protos = G__24948;
impls__$1 = G__24949;
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
var args__8986__auto__ = [];
var len__8979__auto___24958 = arguments.length;
var i__8980__auto___24959 = (0);
while(true){
if((i__8980__auto___24959 < len__8979__auto___24958)){
args__8986__auto__.push((arguments[i__8980__auto___24959]));

var G__24960 = (i__8980__auto___24959 + (1));
i__8980__auto___24959 = G__24960;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__24955 = (function (){var temp__6751__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__6751__auto__)){
var type = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24955,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24955,(1),null);
if(cljs.core.truth_((function (){var and__7746__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7746__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__7746__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__24955,type,assign_impls){
return (function (p1__24950_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__24950_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__24950_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__24955,type,assign_impls))
,cljs.core.array_seq([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq24951){
var G__24952 = cljs.core.first(seq24951);
var seq24951__$1 = cljs.core.next(seq24951);
var G__24953 = cljs.core.first(seq24951__$1);
var seq24951__$2 = cljs.core.next(seq24951__$1);
var G__24954 = cljs.core.first(seq24951__$2);
var seq24951__$3 = cljs.core.next(seq24951__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__24952,G__24953,G__24954,seq24951__$3);
});


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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__24962){
var vec__24966 = p__24962;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24966,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24966,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24966,f,sigs){
return (function (p1__24961_SHARP_){
return cljs.core.cons(cljs.core.second(p1__24961_SHARP_),cljs.core.nnext(p1__24961_SHARP_));
});})(vec__24966,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args24969 = [];
var len__8979__auto___24972 = arguments.length;
var i__8980__auto___24973 = (0);
while(true){
if((i__8980__auto___24973 < len__8979__auto___24972)){
args24969.push((arguments[i__8980__auto___24973]));

var G__24974 = (i__8980__auto___24973 + (1));
i__8980__auto___24973 = G__24974;
continue;
} else {
}
break;
}

var G__24971 = args24969.length;
switch (G__24971) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24969.length)].join('')));

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
var G__24976 = ret__$1;
var G__24977 = specs__$2;
ret = G__24976;
specs__$1 = G__24977;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24978_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__24978_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", no fields vector given.")].join('')));
}
});
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
var args__8986__auto__ = [];
var len__8979__auto___25009 = arguments.length;
var i__8980__auto___25011 = (0);
while(true){
if((i__8980__auto___25011 < len__8979__auto___25009)){
args__8986__auto__.push((arguments[i__8980__auto___25011]));

var G__25012 = (i__8980__auto___25011 + (1));
i__8980__auto___25011 = G__25012;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__24987 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24987,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24987,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__24979__auto__","this__24979__auto__",-2007286355,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__24980__auto__","writer__24980__auto__",997972773,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__24981__auto__","opt__24981__auto__",1066021064,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__24980__auto__","writer__24980__auto__",997972773,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq24982){
var G__24983 = cljs.core.first(seq24982);
var seq24982__$1 = cljs.core.next(seq24982);
var G__24984 = cljs.core.first(seq24982__$1);
var seq24982__$2 = cljs.core.next(seq24982__$1);
var G__24985 = cljs.core.first(seq24982__$2);
var seq24982__$3 = cljs.core.next(seq24982__$2);
var G__24986 = cljs.core.first(seq24982__$3);
var seq24982__$4 = cljs.core.next(seq24982__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__24983,G__24984,G__24985,G__24986,seq24982__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__25052_SHARP_){
return cljs.core.with_meta(p1__25052_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.array_seq([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25053__auto__","this__25053__auto__",951562537,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25054__auto__","this__25054__auto__",-32700009,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25054__auto__","this__25054__auto__",-32700009,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25057__auto__","this__25057__auto__",1129826017,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25058__auto__","other__25058__auto__",1664745760,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25058__auto__","other__25058__auto__",1664745760,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25057__auto__","this__25057__auto__",1129826017,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25058__auto__","other__25058__auto__",1664745760,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25057__auto__","this__25057__auto__",1129826017,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__25058__auto__","other__25058__auto__",1664745760,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25059__auto__","this__25059__auto__",67359869,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25060__auto__","this__25060__auto__",21107401,null)),(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25061__auto__","this__25061__auto__",1812894081,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25062__auto__","k__25062__auto__",1012843941,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25061__auto__","this__25061__auto__",1812894081,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25062__auto__","k__25062__auto__",1012843941,null)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25063__auto__","this__25063__auto__",-1847674645,null)),(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__25064__auto__","else__25064__auto__",-718376839,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__25064__auto__","else__25064__auto__",-718376839,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25065__auto__","this__25065__auto__",-445286170,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25066__auto__","this__25066__auto__",2116766497,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25067__auto__","entry__25067__auto__",-662320482,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25067__auto__","entry__25067__auto__",-662320482,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25066__auto__","this__25066__auto__",2116766497,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25067__auto__","entry__25067__auto__",-662320482,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25067__auto__","entry__25067__auto__",-662320482,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25066__auto__","this__25066__auto__",2116766497,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__25067__auto__","entry__25067__auto__",-662320482,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25068__auto__","this__25068__auto__",9371163,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25069__auto__","k__25069__auto__",1092359962,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25069__auto__","k__25069__auto__",1092359962,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25069__auto__","k__25069__auto__",1092359962,null)),(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25070__auto__","this__25070__auto__",-1976274413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25071__auto__","k__25071__auto__",1201254399,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25071__auto__","k__25071__auto__",1201254399,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25070__auto__","this__25070__auto__",-1976274413,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25071__auto__","k__25071__auto__",1201254399,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__25071__auto__","k__25071__auto__",1201254399,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25073__auto__","this__25073__auto__",865799497,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25072_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25072_SHARP_);
return cljs.core._conj((function (){var x__8692__auto____$1 = p1__25072_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25080__auto__","this__25080__auto__",-135764979,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25081__auto__","writer__25081__auto__",-433518319,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25082__auto__","opts__25082__auto__",532776894,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__25083__auto__","pr-pair__25083__auto__",377698861,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__25084__auto__","keyval__25084__auto__",-1072126878,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25081__auto__","writer__25081__auto__",-433518319,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25082__auto__","opts__25082__auto__",532776894,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__25084__auto__","keyval__25084__auto__",-1072126878,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25081__auto__","writer__25081__auto__",-433518319,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__25083__auto__","pr-pair__25083__auto__",377698861,null)),(function (){var x__8692__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__25082__auto__","opts__25082__auto__",532776894,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25079_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25079_SHARP_);
return cljs.core._conj((function (){var x__8692__auto____$1 = p1__25079_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null));
var vec__25304 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25304,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25304,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__8692__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
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
var args__8986__auto__ = [];
var len__8979__auto___25343 = arguments.length;
var i__8980__auto___25344 = (0);
while(true){
if((i__8980__auto___25344 < len__8979__auto___25343)){
args__8986__auto__.push((arguments[i__8980__auto___25344]));

var G__25345 = (i__8980__auto___25344 + (1));
i__8980__auto___25344 = G__25345;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25336__auto__","this__25336__auto__",722591647,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25336__auto__","this__25336__auto__",722591647,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25337__auto__","writer__25337__auto__",-654319788,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__25337__auto__","writer__25337__auto__",-654319788,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq25338){
var G__25339 = cljs.core.first(seq25338);
var seq25338__$1 = cljs.core.next(seq25338);
var G__25340 = cljs.core.first(seq25338__$1);
var seq25338__$2 = cljs.core.next(seq25338__$1);
var G__25341 = cljs.core.first(seq25338__$2);
var seq25338__$3 = cljs.core.next(seq25338__$2);
var G__25342 = cljs.core.first(seq25338__$3);
var seq25338__$4 = cljs.core.next(seq25338__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__25339,G__25340,G__25341,G__25342,seq25338__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25375 = arguments.length;
var i__8980__auto___25376 = (0);
while(true){
if((i__8980__auto___25376 < len__8979__auto___25375)){
args__8986__auto__.push((arguments[i__8980__auto___25376]));

var G__25377 = (i__8980__auto___25376 + (1));
i__8980__auto___25376 = G__25377;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__25352 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25352,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__25352,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__25352,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__25355 = cljs.core.seq(methods$);
var chunk__25356 = null;
var count__25357 = (0);
var i__25358 = (0);
while(true){
if((i__25358 < count__25357)){
var vec__25359 = chunk__25356.cljs$core$IIndexed$_nth$arity$2(null,i__25358);
var seq__25360 = cljs.core.seq(vec__25359);
var first__25361 = cljs.core.first(seq__25360);
var seq__25360__$1 = cljs.core.next(seq__25360);
var mname = first__25361;
var arities = seq__25360__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25378 = seq__25355;
var G__25379 = chunk__25356;
var G__25380 = count__25357;
var G__25381 = (i__25358 + (1));
seq__25355 = G__25378;
chunk__25356 = G__25379;
count__25357 = G__25380;
i__25358 = G__25381;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25355);
if(temp__6753__auto__){
var seq__25355__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25355__$1)){
var c__8669__auto__ = cljs.core.chunk_first(seq__25355__$1);
var G__25382 = cljs.core.chunk_rest(seq__25355__$1);
var G__25383 = c__8669__auto__;
var G__25384 = cljs.core.count(c__8669__auto__);
var G__25385 = (0);
seq__25355 = G__25382;
chunk__25356 = G__25383;
count__25357 = G__25384;
i__25358 = G__25385;
continue;
} else {
var vec__25362 = cljs.core.first(seq__25355__$1);
var seq__25363 = cljs.core.seq(vec__25362);
var first__25364 = cljs.core.first(seq__25363);
var seq__25363__$1 = cljs.core.next(seq__25363);
var mname = first__25364;
var arities = seq__25363__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25386 = cljs.core.next(seq__25355__$1);
var G__25387 = null;
var G__25388 = (0);
var G__25389 = (0);
seq__25355 = G__25386;
chunk__25356 = G__25387;
count__25357 = G__25388;
i__25358 = G__25389;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25346__auto__","x__25346__auto__",-1404045070,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25346__auto__","x__25346__auto__",-1404045070,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__25347__auto__","m__25347__auto__",1357337364,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__25367){
var vec__25368 = p__25367;
var seq__25369 = cljs.core.seq(vec__25368);
var first__25370 = cljs.core.first(seq__25369);
var seq__25369__$1 = cljs.core.next(seq__25369);
var fname = first__25370;
var sigs = seq__25369__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__25371){
var vec__25372 = p__25371;
var seq__25373 = cljs.core.seq(vec__25372);
var first__25374 = cljs.core.first(seq__25373);
var seq__25373__$1 = cljs.core.next(seq__25373);
var fname = first__25374;
var sigs = seq__25373__$1;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__25372,seq__25373,first__25374,seq__25373__$1,fname,sigs,p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__25372,seq__25373,first__25374,seq__25373__$1,fname,sigs,p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__25352,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq25348){
var G__25349 = cljs.core.first(seq25348);
var seq25348__$1 = cljs.core.next(seq25348);
var G__25350 = cljs.core.first(seq25348__$1);
var seq25348__$2 = cljs.core.next(seq25348__$1);
var G__25351 = cljs.core.first(seq25348__$2);
var seq25348__$3 = cljs.core.next(seq25348__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__25349,G__25350,G__25351,seq25348__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25393 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25393,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25393,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25399 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25405 = arguments.length;
var i__8980__auto___25406 = (0);
while(true){
if((i__8980__auto___25406 < len__8979__auto___25405)){
args__8986__auto__.push((arguments[i__8980__auto___25406]));

var G__25407 = (i__8980__auto___25406 + (1));
i__8980__auto___25406 = G__25407;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq25402){
var G__25403 = cljs.core.first(seq25402);
var seq25402__$1 = cljs.core.next(seq25402);
var G__25404 = cljs.core.first(seq25402__$1);
var seq25402__$2 = cljs.core.next(seq25402__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__25403,G__25404,seq25402__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25411 = arguments.length;
var i__8980__auto___25412 = (0);
while(true){
if((i__8980__auto___25412 < len__8979__auto___25411)){
args__8986__auto__.push((arguments[i__8980__auto___25412]));

var G__25413 = (i__8980__auto___25412 + (1));
i__8980__auto___25412 = G__25413;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq25408){
var G__25409 = cljs.core.first(seq25408);
var seq25408__$1 = cljs.core.next(seq25408);
var G__25410 = cljs.core.first(seq25408__$1);
var seq25408__$2 = cljs.core.next(seq25408__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__25409,G__25410,seq25408__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25422 = arguments.length;
var i__8980__auto___25423 = (0);
while(true){
if((i__8980__auto___25423 < len__8979__auto___25422)){
args__8986__auto__.push((arguments[i__8980__auto___25423]));

var G__25424 = (i__8980__auto___25423 + (1));
i__8980__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__25418){
var vec__25419 = p__25418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25419,(1),null);
return cljs.core._conj((function (){var x__8692__auto__ = k;
return cljs.core._conj((function (){var x__8692__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq25414){
var G__25415 = cljs.core.first(seq25414);
var seq25414__$1 = cljs.core.next(seq25414);
var G__25416 = cljs.core.first(seq25414__$1);
var seq25414__$2 = cljs.core.next(seq25414__$1);
var G__25417 = cljs.core.first(seq25414__$2);
var seq25414__$3 = cljs.core.next(seq25414__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__25415,G__25416,G__25417,seq25414__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25429 = arguments.length;
var i__8980__auto___25430 = (0);
while(true){
if((i__8980__auto___25430 < len__8979__auto___25429)){
args__8986__auto__.push((arguments[i__8980__auto___25430]));

var G__25431 = (i__8980__auto___25430 + (1));
i__8980__auto___25430 = G__25431;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq25425){
var G__25426 = cljs.core.first(seq25425);
var seq25425__$1 = cljs.core.next(seq25425);
var G__25427 = cljs.core.first(seq25425__$1);
var seq25425__$2 = cljs.core.next(seq25425__$1);
var G__25428 = cljs.core.first(seq25425__$2);
var seq25425__$3 = cljs.core.next(seq25425__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__25426,G__25427,G__25428,seq25425__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25450 = arguments.length;
var i__8980__auto___25451 = (0);
while(true){
if((i__8980__auto___25451 < len__8979__auto___25450)){
args__8986__auto__.push((arguments[i__8980__auto___25451]));

var G__25452 = (i__8980__auto___25451 + (1));
i__8980__auto___25451 = G__25452;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__25444 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__25447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25444,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,(2),null);
var clause = vec__25447;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25444,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__25432__auto__","p__25432__auto__",341158537,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__25432__auto__","p__25432__auto__",341158537,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq25433){
var G__25434 = cljs.core.first(seq25433);
var seq25433__$1 = cljs.core.next(seq25433);
var G__25435 = cljs.core.first(seq25433__$1);
var seq25433__$2 = cljs.core.next(seq25433__$1);
var G__25436 = cljs.core.first(seq25433__$2);
var seq25433__$3 = cljs.core.next(seq25433__$2);
var G__25437 = cljs.core.first(seq25433__$3);
var seq25433__$4 = cljs.core.next(seq25433__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__25434,G__25435,G__25436,G__25437,seq25433__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicate case test constant '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__7746__auto__ = cljs.core.list_QMARK_(x);
if(and__7746__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__7746__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
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
var args__8986__auto__ = [];
var len__8979__auto___25473 = arguments.length;
var i__8980__auto___25474 = (0);
while(true){
if((i__8980__auto___25474 < len__8979__auto___25473)){
args__8986__auto__.push((arguments[i__8980__auto___25474]));

var G__25475 = (i__8980__auto___25474 + (1));
i__8980__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__25461){
var vec__25462 = p__25461;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25462,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25462,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__25462,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__8692__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__25462,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
return (function (p1__25453_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__25453_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__25454_SHARP_){
if(cljs.core.seq_QMARK_(p1__25454_SHARP_)){
return cljs.core.vec(p1__25454_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25454_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25456_SHARP_){
if(cljs.core.seq_QMARK_(p1__25456_SHARP_)){
return cljs.core.vec(p1__25456_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25456_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25455_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25455_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__25469){
var vec__25470 = p__25469;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8692__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq25457){
var G__25458 = cljs.core.first(seq25457);
var seq25457__$1 = cljs.core.next(seq25457);
var G__25459 = cljs.core.first(seq25457__$1);
var seq25457__$2 = cljs.core.next(seq25457__$1);
var G__25460 = cljs.core.first(seq25457__$2);
var seq25457__$3 = cljs.core.next(seq25457__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__25458,G__25459,G__25460,seq25457__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args25476 = [];
var len__8979__auto___25479 = arguments.length;
var i__8980__auto___25480 = (0);
while(true){
if((i__8980__auto___25480 < len__8979__auto___25479)){
args25476.push((arguments[i__8980__auto___25480]));

var G__25481 = (i__8980__auto___25480 + (1));
i__8980__auto___25480 = G__25481;
continue;
} else {
}
break;
}

var G__25478 = args25476.length;
switch (G__25478) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args25476.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([(function (){var x__8692__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__8692__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__25569){
var vec__25570 = p__25569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__25650__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25650 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25651__i = 0, G__25651__a = new Array(arguments.length -  0);
while (G__25651__i < G__25651__a.length) {G__25651__a[G__25651__i] = arguments[G__25651__i + 0]; ++G__25651__i;}
  msg = new cljs.core.IndexedSeq(G__25651__a,0);
} 
return G__25650__delegate.call(this,msg);};
G__25650.cljs$lang$maxFixedArity = 0;
G__25650.cljs$lang$applyTo = (function (arglist__25652){
var msg = cljs.core.seq(arglist__25652);
return G__25650__delegate(msg);
});
G__25650.cljs$core$IFn$_invoke$arity$variadic = G__25650__delegate;
return G__25650;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__25573){
var vec__25612 = p__25573;
var seq__25613 = cljs.core.seq(vec__25612);
var first__25614 = cljs.core.first(seq__25613);
var seq__25613__$1 = cljs.core.next(seq__25613);
var vec__25615 = first__25614;
var seq__25616 = cljs.core.seq(vec__25615);
var first__25617 = cljs.core.first(seq__25616);
var seq__25616__$1 = cljs.core.next(seq__25616);
var bind = first__25617;
var first__25617__$1 = cljs.core.first(seq__25616__$1);
var seq__25616__$2 = cljs.core.next(seq__25616__$1);
var expr = first__25617__$1;
var mod_pairs = seq__25616__$2;
var vec__25618 = seq__25613__$1;
var vec__25621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25618,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25621,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25621,(1),null);
var next_groups = vec__25618;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__25624){
var vec__25631 = p__25624;
var seq__25632 = cljs.core.seq(vec__25631);
var first__25633 = cljs.core.first(seq__25632);
var seq__25632__$1 = cljs.core.next(seq__25632);
var vec__25634 = first__25633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25634,(1),null);
var pair = vec__25634;
var etc = seq__25632__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__25483__auto__","iterys__25483__auto__",855084704,null)),(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25484__auto__","fs__25484__auto__",1203506126,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__25483__auto__","iterys__25483__auto__",855084704,null)),(function (){var x__8692__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25484__auto__","fs__25484__auto__",1203506126,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__25484__auto__","fs__25484__auto__",1203506126,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__8692__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__25637){
var vec__25644 = p__25637;
var seq__25645 = cljs.core.seq(vec__25644);
var first__25646 = cljs.core.first(seq__25645);
var seq__25645__$1 = cljs.core.next(seq__25645);
var vec__25647 = first__25646;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25647,(1),null);
var pair = vec__25647;
var etc = seq__25645__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25485__auto__","c__25485__auto__",-550944007,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null))], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25486__auto__","size__25486__auto__",-838265628,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25485__auto__","c__25485__auto__",-550944007,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25486__auto__","size__25486__auto__",-838265628,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__25486__auto__","size__25486__auto__",-838265628,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25485__auto__","c__25485__auto__",-550944007,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__25487__auto__","iter__25487__auto__",1728508795,null)),(function (){var x__8692__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__25487__auto__","iter__25487__auto__",1728508795,null)),(function (){var x__8692__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25662 = arguments.length;
var i__8980__auto___25663 = (0);
while(true){
if((i__8980__auto___25663 < len__8979__auto___25662)){
args__8986__auto__.push((arguments[i__8980__auto___25663]));

var G__25664 = (i__8980__auto___25663 + (1));
i__8980__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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
var G__25665__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25665 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25666__i = 0, G__25666__a = new Array(arguments.length -  0);
while (G__25666__i < G__25666__a.length) {G__25666__a[G__25666__i] = arguments[G__25666__i + 0]; ++G__25666__i;}
  msg = new cljs.core.IndexedSeq(G__25666__a,0);
} 
return G__25665__delegate.call(this,msg);};
G__25665.cljs$lang$maxFixedArity = 0;
G__25665.cljs$lang$applyTo = (function (arglist__25667){
var msg = cljs.core.seq(arglist__25667);
return G__25665__delegate(msg);
});
G__25665.cljs$core$IFn$_invoke$arity$variadic = G__25665__delegate;
return G__25665;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq25654){
var G__25655 = cljs.core.first(seq25654);
var seq25654__$1 = cljs.core.next(seq25654);
var G__25656 = cljs.core.first(seq25654__$1);
var seq25654__$2 = cljs.core.next(seq25654__$1);
var G__25657 = cljs.core.first(seq25654__$2);
var seq25654__$3 = cljs.core.next(seq25654__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__25655,G__25656,G__25657,seq25654__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25671 = arguments.length;
var i__8980__auto___25672 = (0);
while(true){
if((i__8980__auto___25672 < len__8979__auto___25671)){
args__8986__auto__.push((arguments[i__8980__auto___25672]));

var G__25673 = (i__8980__auto___25672 + (1));
i__8980__auto___25672 = G__25673;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq25668){
var G__25669 = cljs.core.first(seq25668);
var seq25668__$1 = cljs.core.next(seq25668);
var G__25670 = cljs.core.first(seq25668__$1);
var seq25668__$2 = cljs.core.next(seq25668__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__25669,G__25670,seq25668__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args25677 = [];
var len__8979__auto___25685 = arguments.length;
var i__8980__auto___25686 = (0);
while(true){
if((i__8980__auto___25686 < len__8979__auto___25685)){
args25677.push((arguments[i__8980__auto___25686]));

var G__25687 = (i__8980__auto___25686 + (1));
i__8980__auto___25686 = G__25687;
continue;
} else {
}
break;
}

var G__25684 = args25677.length;
switch (G__25684) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25677.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__25674__auto__","dims__25674__auto__",1768772252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25676__auto__","i__25676__auto__",1068719620,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25676__auto__","i__25676__auto__",1068719620,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__25674__auto__","dims__25674__auto__",1768772252,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq25678){
var G__25679 = cljs.core.first(seq25678);
var seq25678__$1 = cljs.core.next(seq25678);
var G__25680 = cljs.core.first(seq25678__$1);
var seq25678__$2 = cljs.core.next(seq25678__$1);
var G__25681 = cljs.core.first(seq25678__$2);
var seq25678__$3 = cljs.core.next(seq25678__$2);
var G__25682 = cljs.core.first(seq25678__$3);
var seq25678__$4 = cljs.core.next(seq25678__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__25679,G__25680,G__25681,G__25682,seq25678__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args25690 = [];
var len__8979__auto___25697 = arguments.length;
var i__8980__auto___25698 = (0);
while(true){
if((i__8980__auto___25698 < len__8979__auto___25697)){
args25690.push((arguments[i__8980__auto___25698]));

var G__25699 = (i__8980__auto___25698 + (1));
i__8980__auto___25698 = G__25699;
continue;
} else {
}
break;
}

var G__25696 = args25690.length;
switch (G__25696) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25690.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25689__auto__","x__25689__auto__",-1608466421,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25689__auto__","x__25689__auto__",-1608466421,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq25691){
var G__25692 = cljs.core.first(seq25691);
var seq25691__$1 = cljs.core.next(seq25691);
var G__25693 = cljs.core.first(seq25691__$1);
var seq25691__$2 = cljs.core.next(seq25691__$1);
var G__25694 = cljs.core.first(seq25691__$2);
var seq25691__$3 = cljs.core.next(seq25691__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__25692,G__25693,G__25694,seq25691__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args25701 = [];
var len__8979__auto___25707 = arguments.length;
var i__8980__auto___25708 = (0);
while(true){
if((i__8980__auto___25708 < len__8979__auto___25707)){
args25701.push((arguments[i__8980__auto___25708]));

var G__25709 = (i__8980__auto___25708 + (1));
i__8980__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25706 = args25701.length;
switch (G__25706) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25701.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq25702){
var G__25703 = cljs.core.first(seq25702);
var seq25702__$1 = cljs.core.next(seq25702);
var G__25704 = cljs.core.first(seq25702__$1);
var seq25702__$2 = cljs.core.next(seq25702__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__25703,G__25704,seq25702__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args25713 = [];
var len__8979__auto___25719 = arguments.length;
var i__8980__auto___25720 = (0);
while(true){
if((i__8980__auto___25720 < len__8979__auto___25719)){
args25713.push((arguments[i__8980__auto___25720]));

var G__25721 = (i__8980__auto___25720 + (1));
i__8980__auto___25720 = G__25721;
continue;
} else {
}
break;
}

var G__25718 = args25713.length;
switch (G__25718) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25713.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__25711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25711_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__25712_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25712_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq25714){
var G__25715 = cljs.core.first(seq25714);
var seq25714__$1 = cljs.core.next(seq25714);
var G__25716 = cljs.core.first(seq25714__$1);
var seq25714__$2 = cljs.core.next(seq25714__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__25715,G__25716,seq25714__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args25723 = [];
var len__8979__auto___25729 = arguments.length;
var i__8980__auto___25730 = (0);
while(true){
if((i__8980__auto___25730 < len__8979__auto___25729)){
args25723.push((arguments[i__8980__auto___25730]));

var G__25731 = (i__8980__auto___25730 + (1));
i__8980__auto___25730 = G__25731;
continue;
} else {
}
break;
}

var G__25728 = args25723.length;
switch (G__25728) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25723.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq25724){
var G__25725 = cljs.core.first(seq25724);
var seq25724__$1 = cljs.core.next(seq25724);
var G__25726 = cljs.core.first(seq25724__$1);
var seq25724__$2 = cljs.core.next(seq25724__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__25725,G__25726,seq25724__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args25735 = [];
var len__8979__auto___25741 = arguments.length;
var i__8980__auto___25742 = (0);
while(true){
if((i__8980__auto___25742 < len__8979__auto___25741)){
args25735.push((arguments[i__8980__auto___25742]));

var G__25743 = (i__8980__auto___25742 + (1));
i__8980__auto___25742 = G__25743;
continue;
} else {
}
break;
}

var G__25740 = args25735.length;
switch (G__25740) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25735.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__25733_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25733_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25734_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25734_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq25736){
var G__25737 = cljs.core.first(seq25736);
var seq25736__$1 = cljs.core.next(seq25736);
var G__25738 = cljs.core.first(seq25736__$1);
var seq25736__$2 = cljs.core.next(seq25736__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__25737,G__25738,seq25736__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25760 = arguments.length;
var i__8980__auto___25761 = (0);
while(true){
if((i__8980__auto___25761 < len__8979__auto___25760)){
args__8986__auto__.push((arguments[i__8980__auto___25761]));

var G__25762 = (i__8980__auto___25761 + (1));
i__8980__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__25748){
var vec__25749 = p__25748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(1),null);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25752){
var vec__25753 = p__25752;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25756){
var vec__25757 = p__25756;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25757,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq25745){
var G__25746 = cljs.core.first(seq25745);
var seq25745__$1 = cljs.core.next(seq25745);
var G__25747 = cljs.core.first(seq25745__$1);
var seq25745__$2 = cljs.core.next(seq25745__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__25746,G__25747,seq25745__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25764__auto__","a__25764__auto__",-1162136707,null)),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25764__auto__","a__25764__auto__",-1162136707,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25770 = arguments.length;
var i__8980__auto___25771 = (0);
while(true){
if((i__8980__auto___25771 < len__8979__auto___25770)){
args__8986__auto__.push((arguments[i__8980__auto___25771]));

var G__25772 = (i__8980__auto___25771 + (1));
i__8980__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__25765__auto__","n__25765__auto__",693167718,null)),(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__25765__auto__","n__25765__auto__",693167718,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq25766){
var G__25767 = cljs.core.first(seq25766);
var seq25766__$1 = cljs.core.next(seq25766);
var G__25768 = cljs.core.first(seq25766__$1);
var seq25766__$2 = cljs.core.next(seq25766__$1);
var G__25769 = cljs.core.first(seq25766__$2);
var seq25766__$3 = cljs.core.next(seq25766__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__25767,G__25768,G__25769,seq25766__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25776 = arguments.length;
var i__8980__auto___25777 = (0);
while(true){
if((i__8980__auto___25777 < len__8979__auto___25776)){
args__8986__auto__.push((arguments[i__8980__auto___25777]));

var G__25778 = (i__8980__auto___25777 + (1));
i__8980__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((1) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8987__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25773_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25773_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first(seq25774);
var seq25774__$1 = cljs.core.next(seq25774);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
});

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
var args__8986__auto__ = [];
var len__8979__auto___25788 = arguments.length;
var i__8980__auto___25789 = (0);
while(true){
if((i__8980__auto___25789 < len__8979__auto___25788)){
args__8986__auto__.push((arguments[i__8980__auto___25789]));

var G__25790 = (i__8980__auto___25789 + (1));
i__8980__auto___25789 = G__25790;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
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

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__25779__auto__","method-table__25779__auto__",956904721,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__25780__auto__","prefer-table__25780__auto__",-777606025,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__25781__auto__","method-cache__25781__auto__",-289150051,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__25782__auto__","cached-hierarchy__25782__auto__",1155329583,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__25783__auto__","hierarchy__25783__auto__",-876608853,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__8692__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8692__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__25783__auto__","hierarchy__25783__auto__",-876608853,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__25779__auto__","method-table__25779__auto__",956904721,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__25780__auto__","prefer-table__25780__auto__",-777606025,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__25781__auto__","method-cache__25781__auto__",-289150051,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__25782__auto__","cached-hierarchy__25782__auto__",1155329583,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq25784){
var G__25785 = cljs.core.first(seq25784);
var seq25784__$1 = cljs.core.next(seq25784);
var G__25786 = cljs.core.first(seq25784__$1);
var seq25784__$2 = cljs.core.next(seq25784__$1);
var G__25787 = cljs.core.first(seq25784__$2);
var seq25784__$3 = cljs.core.next(seq25784__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__25785,G__25786,G__25787,seq25784__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25796 = arguments.length;
var i__8980__auto___25797 = (0);
while(true){
if((i__8980__auto___25797 < len__8979__auto___25796)){
args__8986__auto__.push((arguments[i__8980__auto___25797]));

var G__25798 = (i__8980__auto___25797 + (1));
i__8980__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq25791){
var G__25792 = cljs.core.first(seq25791);
var seq25791__$1 = cljs.core.next(seq25791);
var G__25793 = cljs.core.first(seq25791__$1);
var seq25791__$2 = cljs.core.next(seq25791__$1);
var G__25794 = cljs.core.first(seq25791__$2);
var seq25791__$3 = cljs.core.next(seq25791__$2);
var G__25795 = cljs.core.first(seq25791__$3);
var seq25791__$4 = cljs.core.next(seq25791__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__25792,G__25793,G__25794,G__25795,seq25791__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25799__auto__","start__25799__auto__",727656988,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25800__auto__","ret__25800__auto__",1160172940,null)),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25799__auto__","start__25799__auto__",727656988,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25800__auto__","ret__25800__auto__",1160172940,null))], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25815 = arguments.length;
var i__8980__auto___25816 = (0);
while(true){
if((i__8980__auto___25816 < len__8979__auto___25815)){
args__8986__auto__.push((arguments[i__8980__auto___25816]));

var G__25817 = (i__8980__auto___25816 + (1));
i__8980__auto___25816 = G__25817;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((5) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8987__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__25812){
var map__25813 = p__25812;
var map__25813__$1 = ((((!((map__25813 == null)))?((((map__25813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25813):map__25813);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25813__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25801__auto__","start__25801__auto__",659317489,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25802__auto__","ret__25802__auto__",1402926191,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___25803__auto__","___25803__auto__",-606784877,null)),(function (){var x__8692__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__25804__auto__","end__25804__auto__",-800172095,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__25805__auto__","elapsed__25805__auto__",-1362273821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__25804__auto__","end__25804__auto__",-800172095,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25801__auto__","start__25801__auto__",659317489,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__8692__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__8692__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__8692__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__25805__auto__","elapsed__25805__auto__",-1362273821,null)),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq25806){
var G__25807 = cljs.core.first(seq25806);
var seq25806__$1 = cljs.core.next(seq25806);
var G__25808 = cljs.core.first(seq25806__$1);
var seq25806__$2 = cljs.core.next(seq25806__$1);
var G__25809 = cljs.core.first(seq25806__$2);
var seq25806__$3 = cljs.core.next(seq25806__$2);
var G__25810 = cljs.core.first(seq25806__$3);
var seq25806__$4 = cljs.core.next(seq25806__$3);
var G__25811 = cljs.core.first(seq25806__$4);
var seq25806__$5 = cljs.core.next(seq25806__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__25807,G__25808,G__25809,G__25810,G__25811,seq25806__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args25818 = [];
var len__8979__auto___25825 = arguments.length;
var i__8980__auto___25826 = (0);
while(true){
if((i__8980__auto___25826 < len__8979__auto___25825)){
args25818.push((arguments[i__8980__auto___25826]));

var G__25827 = (i__8980__auto___25826 + (1));
i__8980__auto___25826 = G__25827;
continue;
} else {
}
break;
}

var G__25820 = args25818.length;
switch (G__25820) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25818.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = (function (){var G__25824 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__25824) : cljs.core$macros.cs.call(null,G__25824));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25834 = arguments.length;
var i__8980__auto___25835 = (0);
while(true){
if((i__8980__auto___25835 < len__8979__auto___25834)){
args__8986__auto__.push((arguments[i__8980__auto___25835]));

var G__25836 = (i__8980__auto___25835 + (1));
i__8980__auto___25835 = G__25836;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25830__auto__","x__25830__auto__",250863942,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25830__auto__","x__25830__auto__",250863942,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq25831){
var G__25832 = cljs.core.first(seq25831);
var seq25831__$1 = cljs.core.next(seq25831);
var G__25833 = cljs.core.first(seq25831__$1);
var seq25831__$2 = cljs.core.next(seq25831__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__25832,G__25833,seq25831__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25841 = arguments.length;
var i__8980__auto___25842 = (0);
while(true){
if((i__8980__auto___25842 < len__8979__auto___25841)){
args__8986__auto__.push((arguments[i__8980__auto___25842]));

var G__25843 = (i__8980__auto___25842 + (1));
i__8980__auto___25842 = G__25843;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25837_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = p1__25837_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq25838){
var G__25839 = cljs.core.first(seq25838);
var seq25838__$1 = cljs.core.next(seq25838);
var G__25840 = cljs.core.first(seq25838__$1);
var seq25838__$2 = cljs.core.next(seq25838__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__25839,G__25840,seq25838__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__8692__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25844__auto__","this__25844__auto__",361524767,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25844__auto__","this__25844__auto__",361524767,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__25845){
var vec__25857 = p__25845;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to ns-interns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25857,quote,ns){
return (function (p__25864){
var vec__25865 = p__25864;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8692__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
});})(vec__25857,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__25868,p__25869){
var vec__25876 = p__25868;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25876,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25876,(1),null);
var vec__25879 = p__25869;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25879,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25879,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to ns-unmap must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__8692__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25887 = arguments.length;
var i__8980__auto___25888 = (0);
while(true){
if((i__8980__auto___25888 < len__8979__auto___25887)){
args__8986__auto__.push((arguments[i__8980__auto___25888]));

var G__25889 = (i__8980__auto___25888 + (1));
i__8980__auto___25888 = G__25889;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__8692__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__8692__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq25882){
var G__25883 = cljs.core.first(seq25882);
var seq25882__$1 = cljs.core.next(seq25882);
var G__25884 = cljs.core.first(seq25882__$1);
var seq25882__$2 = cljs.core.next(seq25882__$1);
var G__25885 = cljs.core.first(seq25882__$2);
var seq25882__$3 = cljs.core.next(seq25882__$2);
var G__25886 = cljs.core.first(seq25882__$3);
var seq25882__$4 = cljs.core.next(seq25882__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25883,G__25884,G__25885,G__25886,seq25882__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25894 = arguments.length;
var i__8980__auto___25895 = (0);
while(true){
if((i__8980__auto___25895 < len__8979__auto___25894)){
args__8986__auto__.push((arguments[i__8980__auto___25895]));

var G__25896 = (i__8980__auto___25895 + (1));
i__8980__auto___25895 = G__25896;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq25890){
var G__25891 = cljs.core.first(seq25890);
var seq25890__$1 = cljs.core.next(seq25890);
var G__25892 = cljs.core.first(seq25890__$1);
var seq25890__$2 = cljs.core.next(seq25890__$1);
var G__25893 = cljs.core.first(seq25890__$2);
var seq25890__$3 = cljs.core.next(seq25890__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__25891,G__25892,G__25893,seq25890__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25900 = arguments.length;
var i__8980__auto___25901 = (0);
while(true){
if((i__8980__auto___25901 < len__8979__auto___25900)){
args__8986__auto__.push((arguments[i__8980__auto___25901]));

var G__25902 = (i__8980__auto___25901 + (1));
i__8980__auto___25901 = G__25902;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq25897){
var G__25898 = cljs.core.first(seq25897);
var seq25897__$1 = cljs.core.next(seq25897);
var G__25899 = cljs.core.first(seq25897__$1);
var seq25897__$2 = cljs.core.next(seq25897__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__25898,G__25899,seq25897__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25906 = arguments.length;
var i__8980__auto___25907 = (0);
while(true){
if((i__8980__auto___25907 < len__8979__auto___25906)){
args__8986__auto__.push((arguments[i__8980__auto___25907]));

var G__25908 = (i__8980__auto___25907 + (1));
i__8980__auto___25907 = G__25908;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq25903){
var G__25904 = cljs.core.first(seq25903);
var seq25903__$1 = cljs.core.next(seq25903);
var G__25905 = cljs.core.first(seq25903__$1);
var seq25903__$2 = cljs.core.next(seq25903__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__25904,G__25905,seq25903__$2);
});


cljs.core$macros.require_macros.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25912 = arguments.length;
var i__8980__auto___25913 = (0);
while(true){
if((i__8980__auto___25913 < len__8979__auto___25912)){
args__8986__auto__.push((arguments[i__8980__auto___25913]));

var G__25914 = (i__8980__auto___25913 + (1));
i__8980__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq25909){
var G__25910 = cljs.core.first(seq25909);
var seq25909__$1 = cljs.core.next(seq25909);
var G__25911 = cljs.core.first(seq25909__$1);
var seq25909__$2 = cljs.core.next(seq25909__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__25910,G__25911,seq25909__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25918 = arguments.length;
var i__8980__auto___25919 = (0);
while(true){
if((i__8980__auto___25919 < len__8979__auto___25918)){
args__8986__auto__.push((arguments[i__8980__auto___25919]));

var G__25920 = (i__8980__auto___25919 + (1));
i__8980__auto___25919 = G__25920;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq25915){
var G__25916 = cljs.core.first(seq25915);
var seq25915__$1 = cljs.core.next(seq25915);
var G__25917 = cljs.core.first(seq25915__$1);
var seq25915__$2 = cljs.core.next(seq25915__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__25916,G__25917,seq25915__$2);
});


cljs.core$macros.use_macros.cljs$lang$macro = true;
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25924 = arguments.length;
var i__8980__auto___25925 = (0);
while(true){
if((i__8980__auto___25925 < len__8979__auto___25924)){
args__8986__auto__.push((arguments[i__8980__auto___25925]));

var G__25926 = (i__8980__auto___25925 + (1));
i__8980__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq25921){
var G__25922 = cljs.core.first(seq25921);
var seq25921__$1 = cljs.core.next(seq25921);
var G__25923 = cljs.core.first(seq25921__$1);
var seq25921__$2 = cljs.core.next(seq25921__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__25922,G__25923,seq25921__$2);
});


cljs.core$macros.import$.cljs$lang$macro = true;
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
var args__8986__auto__ = [];
var len__8979__auto___25930 = arguments.length;
var i__8980__auto___25931 = (0);
while(true){
if((i__8980__auto___25931 < len__8979__auto___25930)){
args__8986__auto__.push((arguments[i__8980__auto___25931]));

var G__25932 = (i__8980__auto___25931 + (1));
i__8980__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq25927){
var G__25928 = cljs.core.first(seq25927);
var seq25927__$1 = cljs.core.next(seq25927);
var G__25929 = cljs.core.first(seq25927__$1);
var seq25927__$2 = cljs.core.next(seq25927__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__25928,G__25929,seq25927__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
return form;
}
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
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
var G__25933 = form_SINGLEQUOTE_;
var G__25934 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__25933;
form_SINGLEQUOTE_ = G__25934;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
var and__7746__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__7746__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__7746__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args25935 = [];
var len__8979__auto___25942 = arguments.length;
var i__8980__auto___25943 = (0);
while(true){
if((i__8980__auto___25943 < len__8979__auto___25942)){
args25935.push((arguments[i__8980__auto___25943]));

var G__25944 = (i__8980__auto___25943 + (1));
i__8980__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var G__25937 = args25935.length;
switch (G__25937) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25935.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__25938,solo){
var vec__25939 = p__25938;
var seq__25940 = cljs.core.seq(vec__25939);
var first__25941 = cljs.core.first(seq__25940);
var seq__25940__$1 = cljs.core.next(seq__25940);
var arglist = first__25941;
var body = seq__25940__$1;
var method = vec__25939;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),params,cljs.core.array_seq([(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))):null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__25946__auto__","len__25946__auto__",-1709952332,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__25946__auto__","len__25946__auto__",-1709952332,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__8692__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__25950,emit_var_QMARK_){
var vec__25957 = p__25950;
var vec__25960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25957,(0),null);
var seq__25961 = cljs.core.seq(vec__25960);
var first__25962 = cljs.core.first(seq__25961);
var seq__25961__$1 = cljs.core.next(seq__25961);
var arglist = first__25962;
var body = seq__25961__$1;
var method = vec__25960;
var fdecl = vec__25957;
var dest_args = ((function (vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__8692__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25949__auto__","argseq__25949__auto__",-1813730050,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25949__auto__","argseq__25949__auto__",-1813730050,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__25987){
var vec__25991 = p__25987;
var seq__25992 = cljs.core.seq(vec__25991);
var first__25993 = cljs.core.first(seq__25992);
var seq__25992__$1 = cljs.core.next(seq__25992);
var sig = first__25993;
var body = seq__25992__$1;
var method = vec__25991;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__25963_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__25963_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__25964_SHARP_){
return fixed_arity(rname,p1__25964_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),(function (){var x__8692__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25965__auto__","argseq__25965__auto__",417829714,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/.boot/cache/tmp/private/tmp/lumo-20170129-64918-1uyzvjr/lumo-1.1.0/1e3k/e34q9c/main.out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25965__auto__","argseq__25965__auto__",417829714,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__8692__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj((function (){var x__8692__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__25994__i = 0, G__25994__a = new Array(arguments.length -  3);
while (G__25994__i < G__25994__a.length) {G__25994__a[G__25994__i] = arguments[G__25994__i + 3]; ++G__25994__i;}
  fdecl = new cljs.core.IndexedSeq(G__25994__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__25995){
var _AMPERSAND_form = cljs.core.first(arglist__25995);
arglist__25995 = cljs.core.next(arglist__25995);
var _AMPERSAND_env = cljs.core.first(arglist__25995);
arglist__25995 = cljs.core.next(arglist__25995);
var name = cljs.core.first(arglist__25995);
var fdecl = cljs.core.rest(arglist__25995);
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
var args__8986__auto__ = [];
var len__8979__auto___26000 = arguments.length;
var i__8980__auto___26001 = (0);
while(true){
if((i__8980__auto___26001 < len__8979__auto___26000)){
args__8986__auto__.push((arguments[i__8980__auto___26001]));

var G__26002 = (i__8980__auto___26001 + (1));
i__8980__auto___26001 = G__26002;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__26003 = cljs.core.cons(f,p);
var G__26004 = cljs.core.next(args__$1);
p = G__26003;
args__$1 = G__26004;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__26005 = cljs.core.cons(f,p);
var G__26006 = cljs.core.next(args__$1);
p = G__26005;
args__$1 = G__26006;
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
var G__26007 = cljs.core.next(fd);
fd = G__26007;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__26008 = cljs.core.next(fd);
fd = G__26008;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__8692__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
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
var G__26009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__26010 = cljs.core.next(ds);
acc = G__26009;
ds = G__26010;
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
var G__26011 = cljs.core.next(p);
var G__26012 = cljs.core.cons(cljs.core.first(p),d);
p = G__26011;
d = G__26012;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto____$1 = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null))], 0))));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__8692__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq25996){
var G__25997 = cljs.core.first(seq25996);
var seq25996__$1 = cljs.core.next(seq25996);
var G__25998 = cljs.core.first(seq25996__$1);
var seq25996__$2 = cljs.core.next(seq25996__$1);
var G__25999 = cljs.core.first(seq25996__$2);
var seq25996__$3 = cljs.core.next(seq25996__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__25997,G__25998,G__25999,seq25996__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
