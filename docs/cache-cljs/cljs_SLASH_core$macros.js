// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__10133__auto___21888 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21889 = arguments.length;
var i__10088__auto___21890 = (0);
while(true){
if((i__10088__auto___21890 < len__10087__auto___21889)){
args__10094__auto__.push((arguments[i__10088__auto___21890]));

var G__21891 = (i__10088__auto___21890 + (1));
i__10088__auto___21890 = G__21891;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__9762__auto__ = form;
return cljs.core._conj((function (){var x__9762__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})());
var G__21892 = threaded;
var G__21893 = cljs.core.next(forms__$1);
x__$1 = G__21892;
forms__$1 = G__21893;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq21884){
var G__21885 = cljs.core.first(seq21884);
var seq21884__$1 = cljs.core.next(seq21884);
var G__21886 = cljs.core.first(seq21884__$1);
var seq21884__$2 = cljs.core.next(seq21884__$1);
var G__21887 = cljs.core.first(seq21884__$2);
var seq21884__$3 = cljs.core.next(seq21884__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21885,G__21886,G__21887,seq21884__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__10133__auto___21898 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21899 = arguments.length;
var i__10088__auto___21900 = (0);
while(true){
if((i__10088__auto___21900 < len__10087__auto___21899)){
args__10094__auto__.push((arguments[i__10088__auto___21900]));

var G__21901 = (i__10088__auto___21900 + (1));
i__10088__auto___21900 = G__21901;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__9762__auto__ = form;
return cljs.core._conj((function (){var x__9762__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})());
var G__21902 = threaded;
var G__21903 = cljs.core.next(forms__$1);
x__$1 = G__21902;
forms__$1 = G__21903;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq21894){
var G__21895 = cljs.core.first(seq21894);
var seq21894__$1 = cljs.core.next(seq21894);
var G__21896 = cljs.core.first(seq21894__$1);
var seq21894__$2 = cljs.core.next(seq21894__$1);
var G__21897 = cljs.core.first(seq21894__$2);
var seq21894__$3 = cljs.core.next(seq21894__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21895,G__21896,G__21897,seq21894__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___21911 = (function (){
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
var G__21910 = arguments.length;
switch (G__21910) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___21913 = arguments.length;
var i__10088__auto___21914 = (0);
while(true){
if((i__10088__auto___21914 < len__10087__auto___21913)){
args_arr__10110__auto__.push((arguments[i__10088__auto___21914]));

var G__21915 = (i__10088__auto___21914 + (1));
i__10088__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq21905){
var G__21906 = cljs.core.first(seq21905);
var seq21905__$1 = cljs.core.next(seq21905);
var G__21907 = cljs.core.first(seq21905__$1);
var seq21905__$2 = cljs.core.next(seq21905__$1);
var G__21908 = cljs.core.first(seq21905__$2);
var seq21905__$3 = cljs.core.next(seq21905__$2);
var G__21909 = cljs.core.first(seq21905__$3);
var seq21905__$4 = cljs.core.next(seq21905__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__21906,G__21907,G__21908,G__21909,seq21905__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__10133__auto___21919 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21920 = arguments.length;
var i__10088__auto___21921 = (0);
while(true){
if((i__10088__auto___21921 < len__10087__auto___21920)){
args__10094__auto__.push((arguments[i__10088__auto___21921]));

var G__21922 = (i__10088__auto___21921 + (1));
i__10088__auto___21921 = G__21922;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq21916){
var G__21917 = cljs.core.first(seq21916);
var seq21916__$1 = cljs.core.next(seq21916);
var G__21918 = cljs.core.first(seq21916__$1);
var seq21916__$2 = cljs.core.next(seq21916__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__21917,G__21918,seq21916__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__10133__auto___21926 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21927 = arguments.length;
var i__10088__auto___21928 = (0);
while(true){
if((i__10088__auto___21928 < len__10087__auto___21927)){
args__10094__auto__.push((arguments[i__10088__auto___21928]));

var G__21929 = (i__10088__auto___21928 + (1));
i__10088__auto___21928 = G__21929;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__9762__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__9762__auto____$2 = cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq21923){
var G__21924 = cljs.core.first(seq21923);
var seq21923__$1 = cljs.core.next(seq21923);
var G__21925 = cljs.core.first(seq21923__$1);
var seq21923__$2 = cljs.core.next(seq21923__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__21924,G__21925,seq21923__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__10133__auto___21934 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21935 = arguments.length;
var i__10088__auto___21936 = (0);
while(true){
if((i__10088__auto___21936 < len__10087__auto___21935)){
args__10094__auto__.push((arguments[i__10088__auto___21936]));

var G__21937 = (i__10088__auto___21936 + (1));
i__10088__auto___21936 = G__21937;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21930_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__21930_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq21931){
var G__21932 = cljs.core.first(seq21931);
var seq21931__$1 = cljs.core.next(seq21931);
var G__21933 = cljs.core.first(seq21931__$1);
var seq21931__$2 = cljs.core.next(seq21931__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__21932,G__21933,seq21931__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__10133__auto___21942 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21943 = arguments.length;
var i__10088__auto___21944 = (0);
while(true){
if((i__10088__auto___21944 < len__10087__auto___21943)){
args__10094__auto__.push((arguments[i__10088__auto___21944]));

var G__21945 = (i__10088__auto___21944 + (1));
i__10088__auto___21944 = G__21945;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq21938){
var G__21939 = cljs.core.first(seq21938);
var seq21938__$1 = cljs.core.next(seq21938);
var G__21940 = cljs.core.first(seq21938__$1);
var seq21938__$2 = cljs.core.next(seq21938__$1);
var G__21941 = cljs.core.first(seq21938__$2);
var seq21938__$3 = cljs.core.next(seq21938__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__21939,G__21940,G__21941,seq21938__$3);
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
var G__21946 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__21947 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__21946;
s = G__21947;
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
return (function (p__21948){
var vec__21949 = p__21948;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
var ret__10133__auto___21956 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___21957 = arguments.length;
var i__10088__auto___21958 = (0);
while(true){
if((i__10088__auto___21958 < len__10087__auto___21957)){
args__10094__auto__.push((arguments[i__10088__auto___21958]));

var G__21959 = (i__10088__auto___21958 + (1));
i__10088__auto___21958 = G__21959;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq21952){
var G__21953 = cljs.core.first(seq21952);
var seq21952__$1 = cljs.core.next(seq21952);
var G__21954 = cljs.core.first(seq21952__$1);
var seq21952__$2 = cljs.core.next(seq21952__$1);
var G__21955 = cljs.core.first(seq21952__$2);
var seq21952__$3 = cljs.core.next(seq21952__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__21953,G__21954,G__21955,seq21952__$3);
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
var G__21960 = cljs.core.next(params__$1);
var G__21961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__21962 = lets;
params__$1 = G__21960;
new_params = G__21961;
lets = G__21962;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__21963 = cljs.core.next(params__$1);
var G__21964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__21965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__21963;
new_params = G__21964;
lets = G__21965;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
break;
}
}
});
var ret__10133__auto___21972 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21973 = arguments.length;
var i__10088__auto___21974 = (0);
while(true){
if((i__10088__auto___21974 < len__10087__auto___21973)){
args__10094__auto__.push((arguments[i__10088__auto___21974]));

var G__21975 = (i__10088__auto___21974 + (1));
i__10088__auto___21974 = G__21975;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__9762__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__21969 = sig;
var seq__21970 = cljs.core.seq(vec__21969);
var first__21971 = cljs.core.first(seq__21970);
var seq__21970__$1 = cljs.core.next(seq__21970);
var params = first__21971;
var body = seq__21970__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__8808__auto__ = conds;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9762__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21969,seq__21970,first__21971,seq__21970__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(vec__21969,seq__21970,first__21971,seq__21970__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21969,seq__21970,first__21971,seq__21970__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(vec__21969,seq__21970,first__21971,seq__21970__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq21966){
var G__21967 = cljs.core.first(seq21966);
var seq21966__$1 = cljs.core.next(seq21966);
var G__21968 = cljs.core.first(seq21966__$1);
var seq21966__$2 = cljs.core.next(seq21966__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__21967,G__21968,seq21966__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__10133__auto___21980 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___21981 = arguments.length;
var i__10088__auto___21982 = (0);
while(true){
if((i__10088__auto___21982 < len__10087__auto___21981)){
args__10094__auto__.push((arguments[i__10088__auto___21982]));

var G__21983 = (i__10088__auto___21982 + (1));
i__10088__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq21976){
var G__21977 = cljs.core.first(seq21976);
var seq21976__$1 = cljs.core.next(seq21976);
var G__21978 = cljs.core.first(seq21976__$1);
var seq21976__$2 = cljs.core.next(seq21976__$1);
var G__21979 = cljs.core.first(seq21976__$2);
var seq21976__$3 = cljs.core.next(seq21976__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__21977,G__21978,G__21979,seq21976__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__10133__auto___21993 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__21992 = arguments.length;
switch (G__21992) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___21995 = arguments.length;
var i__10088__auto___21996 = (0);
while(true){
if((i__10088__auto___21996 < len__10087__auto___21995)){
args_arr__10110__auto__.push((arguments[i__10088__auto___21996]));

var G__21997 = (i__10088__auto___21996 + (1));
i__10088__auto___21996 = G__21997;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings((0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings((1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21984__auto__","temp__21984__auto__",1944888127,null)),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21984__auto__","temp__21984__auto__",1944888127,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21984__auto__","temp__21984__auto__",1944888127,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq21986){
var G__21987 = cljs.core.first(seq21986);
var seq21986__$1 = cljs.core.next(seq21986);
var G__21988 = cljs.core.first(seq21986__$1);
var seq21986__$2 = cljs.core.next(seq21986__$1);
var G__21989 = cljs.core.first(seq21986__$2);
var seq21986__$3 = cljs.core.next(seq21986__$2);
var G__21990 = cljs.core.first(seq21986__$3);
var seq21986__$4 = cljs.core.next(seq21986__$3);
var G__21991 = cljs.core.first(seq21986__$4);
var seq21986__$5 = cljs.core.next(seq21986__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__21987,G__21988,G__21989,G__21990,G__21991,seq21986__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__10133__auto___22000 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__21999 = arguments.length;
switch (G__21999) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__10133__auto___22007 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22008 = arguments.length;
var i__10088__auto___22009 = (0);
while(true){
if((i__10088__auto___22009 < len__10087__auto___22008)){
args__10094__auto__.push((arguments[i__10088__auto___22009]));

var G__22010 = (i__10088__auto___22009 + (1));
i__10088__auto___22009 = G__22010;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22002_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__22002_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq22003){
var G__22004 = cljs.core.first(seq22003);
var seq22003__$1 = cljs.core.next(seq22003);
var G__22005 = cljs.core.first(seq22003__$1);
var seq22003__$2 = cljs.core.next(seq22003__$1);
var G__22006 = cljs.core.first(seq22003__$2);
var seq22003__$3 = cljs.core.next(seq22003__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__22004,G__22005,G__22006,seq22003__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__10133__auto___22015 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22016 = arguments.length;
var i__10088__auto___22017 = (0);
while(true){
if((i__10088__auto___22017 < len__10087__auto___22016)){
args__10094__auto__.push((arguments[i__10088__auto___22017]));

var G__22018 = (i__10088__auto___22017 + (1));
i__10088__auto___22017 = G__22018;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq22011){
var G__22012 = cljs.core.first(seq22011);
var seq22011__$1 = cljs.core.next(seq22011);
var G__22013 = cljs.core.first(seq22011__$1);
var seq22011__$2 = cljs.core.next(seq22011__$1);
var G__22014 = cljs.core.first(seq22011__$2);
var seq22011__$3 = cljs.core.next(seq22011__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__22012,G__22013,G__22014,seq22011__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__10133__auto___22023 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22024 = arguments.length;
var i__10088__auto___22025 = (0);
while(true){
if((i__10088__auto___22025 < len__10087__auto___22024)){
args__10094__auto__.push((arguments[i__10088__auto___22025]));

var G__22026 = (i__10088__auto___22025 + (1));
i__10088__auto___22025 = G__22026;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq22019){
var G__22020 = cljs.core.first(seq22019);
var seq22019__$1 = cljs.core.next(seq22019);
var G__22021 = cljs.core.first(seq22019__$1);
var seq22019__$2 = cljs.core.next(seq22019__$1);
var G__22022 = cljs.core.first(seq22019__$2);
var seq22019__$3 = cljs.core.next(seq22019__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__22020,G__22021,G__22022,seq22019__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__10133__auto___22035 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22036 = arguments.length;
var i__10088__auto___22037 = (0);
while(true){
if((i__10088__auto___22037 < len__10087__auto___22036)){
args__10094__auto__.push((arguments[i__10088__auto___22037]));

var G__22038 = (i__10088__auto___22037 + (1));
i__10088__auto___22037 = G__22038;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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


var vec__22032 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22027__auto__","xs__22027__auto__",-481883075,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22027__auto__","xs__22027__auto__",-481883075,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq22028){
var G__22029 = cljs.core.first(seq22028);
var seq22028__$1 = cljs.core.next(seq22028);
var G__22030 = cljs.core.first(seq22028__$1);
var seq22028__$2 = cljs.core.next(seq22028__$1);
var G__22031 = cljs.core.first(seq22028__$2);
var seq22028__$3 = cljs.core.next(seq22028__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__22029,G__22030,G__22031,seq22028__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__10133__auto___22044 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22045 = arguments.length;
var i__10088__auto___22046 = (0);
while(true){
if((i__10088__auto___22046 < len__10087__auto___22045)){
args__10094__auto__.push((arguments[i__10088__auto___22046]));

var G__22047 = (i__10088__auto___22046 + (1));
i__10088__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings((0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings((1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22039__auto__","temp__22039__auto__",-666733400,null)),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22039__auto__","temp__22039__auto__",-666733400,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22039__auto__","temp__22039__auto__",-666733400,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq22040){
var G__22041 = cljs.core.first(seq22040);
var seq22040__$1 = cljs.core.next(seq22040);
var G__22042 = cljs.core.first(seq22040__$1);
var seq22040__$2 = cljs.core.next(seq22040__$1);
var G__22043 = cljs.core.first(seq22040__$2);
var seq22040__$3 = cljs.core.next(seq22040__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__22041,G__22042,G__22043,seq22040__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__10133__auto___22052 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22053 = arguments.length;
var i__10088__auto___22054 = (0);
while(true){
if((i__10088__auto___22054 < len__10087__auto___22053)){
args__10094__auto__.push((arguments[i__10088__auto___22054]));

var G__22055 = (i__10088__auto___22054 + (1));
i__10088__auto___22054 = G__22055;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),null),x__9762__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq22048){
var G__22049 = cljs.core.first(seq22048);
var seq22048__$1 = cljs.core.next(seq22048);
var G__22050 = cljs.core.first(seq22048__$1);
var seq22048__$2 = cljs.core.next(seq22048__$1);
var G__22051 = cljs.core.first(seq22048__$2);
var seq22048__$3 = cljs.core.next(seq22048__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__22049,G__22050,G__22051,seq22048__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__10133__auto___22060 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22061 = arguments.length;
var i__10088__auto___22062 = (0);
while(true){
if((i__10088__auto___22062 < len__10087__auto___22061)){
args__10094__auto__.push((arguments[i__10088__auto___22062]));

var G__22063 = (i__10088__auto___22062 + (1));
i__10088__auto___22062 = G__22063;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq22056){
var G__22057 = cljs.core.first(seq22056);
var seq22056__$1 = cljs.core.next(seq22056);
var G__22058 = cljs.core.first(seq22056__$1);
var seq22056__$2 = cljs.core.next(seq22056__$1);
var G__22059 = cljs.core.first(seq22056__$2);
var seq22056__$3 = cljs.core.next(seq22056__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__22057,G__22058,G__22059,seq22056__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__10133__auto___22072 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22073 = arguments.length;
var i__10088__auto___22074 = (0);
while(true){
if((i__10088__auto___22074 < len__10087__auto___22073)){
args__10094__auto__.push((arguments[i__10088__auto___22074]));

var G__22075 = (i__10088__auto___22074 + (1));
i__10088__auto___22074 = G__22075;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__22068){
var vec__22069 = p__22068;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq22064){
var G__22065 = cljs.core.first(seq22064);
var seq22064__$1 = cljs.core.next(seq22064);
var G__22066 = cljs.core.first(seq22064__$1);
var seq22064__$2 = cljs.core.next(seq22064__$1);
var G__22067 = cljs.core.first(seq22064__$2);
var seq22064__$3 = cljs.core.next(seq22064__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22065,G__22066,G__22067,seq22064__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__10133__auto___22084 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22085 = arguments.length;
var i__10088__auto___22086 = (0);
while(true){
if((i__10088__auto___22086 < len__10087__auto___22085)){
args__10094__auto__.push((arguments[i__10088__auto___22086]));

var G__22087 = (i__10088__auto___22086 + (1));
i__10088__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__22080){
var vec__22081 = p__22080;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22081,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22081,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq22076){
var G__22077 = cljs.core.first(seq22076);
var seq22076__$1 = cljs.core.next(seq22076);
var G__22078 = cljs.core.first(seq22076__$1);
var seq22076__$2 = cljs.core.next(seq22076__$1);
var G__22079 = cljs.core.first(seq22076__$2);
var seq22076__$3 = cljs.core.next(seq22076__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22077,G__22078,G__22079,seq22076__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___22093 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22094 = arguments.length;
var i__10088__auto___22095 = (0);
while(true){
if((i__10088__auto___22095 < len__10087__auto___22094)){
args__10094__auto__.push((arguments[i__10088__auto___22095]));

var G__22096 = (i__10088__auto___22095 + (1));
i__10088__auto___22095 = G__22096;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq22088){
var G__22089 = cljs.core.first(seq22088);
var seq22088__$1 = cljs.core.next(seq22088);
var G__22090 = cljs.core.first(seq22088__$1);
var seq22088__$2 = cljs.core.next(seq22088__$1);
var G__22091 = cljs.core.first(seq22088__$2);
var seq22088__$3 = cljs.core.next(seq22088__$2);
var G__22092 = cljs.core.first(seq22088__$3);
var seq22088__$4 = cljs.core.next(seq22088__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22089,G__22090,G__22091,G__22092,seq22088__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__10133__auto___22101 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22102 = arguments.length;
var i__10088__auto___22103 = (0);
while(true){
if((i__10088__auto___22103 < len__10087__auto___22102)){
args__10094__auto__.push((arguments[i__10088__auto___22103]));

var G__22104 = (i__10088__auto___22103 + (1));
i__10088__auto___22103 = G__22104;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq22097){
var G__22098 = cljs.core.first(seq22097);
var seq22097__$1 = cljs.core.next(seq22097);
var G__22099 = cljs.core.first(seq22097__$1);
var seq22097__$2 = cljs.core.next(seq22097__$1);
var G__22100 = cljs.core.first(seq22097__$2);
var seq22097__$3 = cljs.core.next(seq22097__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22098,G__22099,G__22100,seq22097__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__10133__auto___22109 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22110 = arguments.length;
var i__10088__auto___22111 = (0);
while(true){
if((i__10088__auto___22111 < len__10087__auto___22110)){
args__10094__auto__.push((arguments[i__10088__auto___22111]));

var G__22112 = (i__10088__auto___22111 + (1));
i__10088__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq22105){
var G__22106 = cljs.core.first(seq22105);
var seq22105__$1 = cljs.core.next(seq22105);
var G__22107 = cljs.core.first(seq22105__$1);
var seq22105__$2 = cljs.core.next(seq22105__$1);
var G__22108 = cljs.core.first(seq22105__$2);
var seq22105__$3 = cljs.core.next(seq22105__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22106,G__22107,G__22108,seq22105__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___22122 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__22121 = arguments.length;
switch (G__22121) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22124 = arguments.length;
var i__10088__auto___22125 = (0);
while(true){
if((i__10088__auto___22125 < len__10087__auto___22124)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22125]));

var G__22126 = (i__10088__auto___22125 + (1));
i__10088__auto___22125 = G__22126;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings((0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings((1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22113__auto__","temp__22113__auto__",-958925147,null)),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22113__auto__","temp__22113__auto__",-958925147,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22113__auto__","temp__22113__auto__",-958925147,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq22115){
var G__22116 = cljs.core.first(seq22115);
var seq22115__$1 = cljs.core.next(seq22115);
var G__22117 = cljs.core.first(seq22115__$1);
var seq22115__$2 = cljs.core.next(seq22115__$1);
var G__22118 = cljs.core.first(seq22115__$2);
var seq22115__$3 = cljs.core.next(seq22115__$2);
var G__22119 = cljs.core.first(seq22115__$3);
var seq22115__$4 = cljs.core.next(seq22115__$3);
var G__22120 = cljs.core.first(seq22115__$4);
var seq22115__$5 = cljs.core.next(seq22115__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__22116,G__22117,G__22118,G__22119,G__22120,seq22115__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__10133__auto___22132 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22133 = arguments.length;
var i__10088__auto___22134 = (0);
while(true){
if((i__10088__auto___22134 < len__10087__auto___22133)){
args__10094__auto__.push((arguments[i__10088__auto___22134]));

var G__22135 = (i__10088__auto___22134 + (1));
i__10088__auto___22134 = G__22135;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings((0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings((1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22127__auto__","temp__22127__auto__",-2039972217,null)),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22127__auto__","temp__22127__auto__",-2039972217,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22127__auto__","temp__22127__auto__",-2039972217,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq22128){
var G__22129 = cljs.core.first(seq22128);
var seq22128__$1 = cljs.core.next(seq22128);
var G__22130 = cljs.core.first(seq22128__$1);
var seq22128__$2 = cljs.core.next(seq22128__$1);
var G__22131 = cljs.core.first(seq22128__$2);
var seq22128__$3 = cljs.core.next(seq22128__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__22129,G__22130,G__22131,seq22128__$3);
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

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22136_SHARP_){
if(cljs.core.seq_QMARK_(p1__22136_SHARP_)){
return cljs.core.first(p1__22136_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22136_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22136_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__22137_SHARP_){
return cljs.core.vector_QMARK_(p1__22137_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl(fdecl));

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
var G__22138 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__22139 = cljs.core.next(fdecls);
ret = G__22138;
fdecls = G__22139;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__9762__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
}
});
var ret__10133__auto___22140 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj((function (){var x__9762__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
var G__22151 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__22152 = n;
var G__22153 = cljs.core.nnext(bs);
var G__22154 = true;
ret = G__22151;
n = G__22152;
bs = G__22153;
seen_rest_QMARK_ = G__22154;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__22155 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9762__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9762__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__9762__auto__ = gvec;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__22156 = (n + (1));
var G__22157 = cljs.core.next(bs);
var G__22158 = seen_rest_QMARK_;
ret = G__22155;
n = G__22156;
bs = G__22157;
seen_rest_QMARK_ = G__22158;
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
var ret = (function (){var G__22147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
var fexpr__22146 = ((function (G__22147,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__22147,gmap,defaults,pvec,bents))
;
return fexpr__22146(G__22147);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22141_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = mkns;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.namespace(p1__22141_SHARP_);
}
})(),cljs.core.name(p1__22141_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22142_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = mkns;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.namespace(p1__22142_SHARP_);
}
})(),cljs.core.name(p1__22142_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
return (function (p1__22143_SHARP_,p2__22144_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22143_SHARP_,p2__22144_SHARP_,(function (){var fexpr__22148 = cljs.core.val(entry);
return (fexpr__22148.cljs$core$IFn$_invoke$arity$1 ? fexpr__22148.cljs$core$IFn$_invoke$arity$1(p2__22144_SHARP_) : fexpr__22148(p2__22144_SHARP_));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__22149 = cljs.core.key(entry);
return (fexpr__22149.cljs$core$IFn$_invoke$arity$1 ? fexpr__22149.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__22149(bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__9762__auto__ = gmap;
return cljs.core._conj((function (){var x__9762__auto____$1 = bk;
return cljs.core._conj((function (){var x__9762__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults(local));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj((function (){var x__9762__auto__ = gmap;
return cljs.core._conj((function (){var x__9762__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__22159 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__22160 = cljs.core.next(bes);
ret = G__22159;
bes = G__22160;
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
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

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
var temp__5455__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__22145_SHARP_){
return (cljs.core.first(p1__22145_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5455__auto__){
var kwbs = temp__5455__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__10133__auto___22161 = /**
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


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9762__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9762__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__10133__auto___22166 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22167 = arguments.length;
var i__10088__auto___22168 = (0);
while(true){
if((i__10088__auto___22168 < len__10087__auto___22167)){
args__10094__auto__.push((arguments[i__10088__auto___22168]));

var G__22169 = (i__10088__auto___22168 + (1));
i__10088__auto___22168 = G__22169;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9762__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq22162){
var G__22163 = cljs.core.first(seq22162);
var seq22162__$1 = cljs.core.next(seq22162);
var G__22164 = cljs.core.first(seq22162__$1);
var seq22162__$2 = cljs.core.next(seq22162__$1);
var G__22165 = cljs.core.first(seq22162__$2);
var seq22162__$3 = cljs.core.next(seq22162__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__22163,G__22164,G__22165,seq22162__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__10133__auto___22178 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22179 = arguments.length;
var i__10088__auto___22180 = (0);
while(true){
if((i__10088__auto___22180 < len__10087__auto___22179)){
args__10094__auto__.push((arguments[i__10088__auto___22180]));

var G__22181 = (i__10088__auto___22180 + (1));
i__10088__auto___22180 = G__22181;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
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
return (function (ret,p__22174){
var vec__22175 = p__22174;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq22170){
var G__22171 = cljs.core.first(seq22170);
var seq22170__$1 = cljs.core.next(seq22170);
var G__22172 = cljs.core.first(seq22170__$1);
var seq22170__$2 = cljs.core.next(seq22170__$1);
var G__22173 = cljs.core.first(seq22170__$2);
var seq22170__$3 = cljs.core.next(seq22170__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__22171,G__22172,G__22173,seq22170__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22182_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22182_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate((function (p__22183){
var vec__22184 = p__22183;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(1),null);
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
var ret__10133__auto___22190 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22191 = arguments.length;
var i__10088__auto___22192 = (0);
while(true){
if((i__10088__auto___22192 < len__10087__auto___22191)){
args__10094__auto__.push((arguments[i__10088__auto___22192]));

var G__22193 = (i__10088__auto___22192 + (1));
i__10088__auto___22192 = G__22193;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,xs)));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq22187){
var G__22188 = cljs.core.first(seq22187);
var seq22187__$1 = cljs.core.next(seq22187);
var G__22189 = cljs.core.first(seq22187__$1);
var seq22187__$2 = cljs.core.next(seq22187__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__22188,G__22189,seq22187__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8796__auto__ = (function (){var G__22197 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__22196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null);
return (fexpr__22196.cljs$core$IFn$_invoke$arity$1 ? fexpr__22196.cljs$core$IFn$_invoke$arity$1(G__22197) : fexpr__22196(G__22197));
})();
if(cljs.core.truth_(and__8796__auto__)){
var G__22199 = cljs.analyzer.infer_tag(env,ast);
var fexpr__22198 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__22198.cljs$core$IFn$_invoke$arity$1 ? fexpr__22198.cljs$core$IFn$_invoke$arity$1(G__22199) : fexpr__22198(G__22199));
} else {
return and__8796__auto__;
}
});
var ret__10133__auto___22210 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__22208 = arguments.length;
switch (G__22208) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22212 = arguments.length;
var i__10088__auto___22213 = (0);
while(true){
if((i__10088__auto___22213 < len__10087__auto___22212)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22213]));

var G__22214 = (i__10088__auto___22213 + (1));
i__10088__auto___22213 = G__22214;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

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
return (function (p1__22200_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__22200_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__22201_SHARP_){
var _STAR_cljs_warnings_STAR_22209 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__22201_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_22209;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9762__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22202__auto__","and__22202__auto__",-1575270126,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22202__auto__","and__22202__auto__",-1575270126,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22202__auto__","and__22202__auto__",-1575270126,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq22204){
var G__22205 = cljs.core.first(seq22204);
var seq22204__$1 = cljs.core.next(seq22204);
var G__22206 = cljs.core.first(seq22204__$1);
var seq22204__$2 = cljs.core.next(seq22204__$1);
var G__22207 = cljs.core.first(seq22204__$2);
var seq22204__$3 = cljs.core.next(seq22204__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__22205,G__22206,G__22207,seq22204__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__10133__auto___22225 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__22223 = arguments.length;
switch (G__22223) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22227 = arguments.length;
var i__10088__auto___22228 = (0);
while(true){
if((i__10088__auto___22228 < len__10087__auto___22227)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22228]));

var G__22229 = (i__10088__auto___22228 + (1));
i__10088__auto___22228 = G__22229;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

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
return (function (p1__22215_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__22215_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__22216_SHARP_){
var _STAR_cljs_warnings_STAR_22224 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__22216_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_22224;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9762__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22217__auto__","or__22217__auto__",1373059980,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22217__auto__","or__22217__auto__",1373059980,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22217__auto__","or__22217__auto__",1373059980,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq22219){
var G__22220 = cljs.core.first(seq22219);
var seq22219__$1 = cljs.core.next(seq22219);
var G__22221 = cljs.core.first(seq22219__$1);
var seq22219__$2 = cljs.core.next(seq22219__$1);
var G__22222 = cljs.core.first(seq22219__$2);
var seq22219__$3 = cljs.core.next(seq22219__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__22220,G__22221,G__22222,seq22219__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__10133__auto___22230 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22231 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22232 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__10133__auto___22233 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__10133__auto___22234 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__10133__auto___22235 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__10133__auto___22236 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__10133__auto___22237 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__10133__auto___22238 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__10133__auto___22239 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = key;
return cljs.core._conj((function (){var x__9762__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__10133__auto___22240 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__9762__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__10133__auto___22245 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__22242 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__22243 = cljs.core.seq(vec__22242);
var first__22244 = cljs.core.first(seq__22243);
var seq__22243__$1 = cljs.core.next(seq__22243);
var x = first__22244;
var ys = seq__22243__$1;
return cljs.core._conj((function (){var x__9762__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22242,seq__22243,first__22244,seq__22243__$1,x,ys){
return (function (p1__22241_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__22241_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__22242,seq__22243,first__22244,seq__22243__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__10133__auto___22246 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj((function (){var x__9762__auto__ = cast_expr;
return cljs.core._conj((function (){var x__9762__auto____$1 = x;
return cljs.core._conj((function (){var x__9762__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__10133__auto___22247 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__9762__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__10133__auto___22248 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22249 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22250 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22251 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22252 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22253 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = a;
return cljs.core._conj((function (){var x__9762__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22256 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22254__auto__","c__22254__auto__",-1437082461,null)),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22255__auto__","x__22255__auto__",-1111573808,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22255__auto__","x__22255__auto__",-1111573808,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22254__auto__","c__22254__auto__",-1437082461,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22257 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22258 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22259 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22269 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__22266 = arguments.length;
switch (G__22266) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22271 = arguments.length;
var i__10088__auto___22272 = (0);
while(true){
if((i__10088__auto___22272 < len__10087__auto___22271)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22272]));

var G__22273 = (i__10088__auto___22272 + (1));
i__10088__auto___22272 = G__22273;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__22267 = cljs.analyzer.checked_arrays();
var G__22267__$1 = (((G__22267 instanceof cljs.core.Keyword))?G__22267.fqn:null);
switch (G__22267__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = array;
return cljs.core._conj((function (){var x__9762__auto____$1 = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__22268 = cljs.analyzer.checked_arrays();
var G__22268__$1 = (((G__22268 instanceof cljs.core.Keyword))?G__22268.fqn:null);
switch (G__22268__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9762__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq22261){
var G__22262 = cljs.core.first(seq22261);
var seq22261__$1 = cljs.core.next(seq22261);
var G__22263 = cljs.core.first(seq22261__$1);
var seq22261__$2 = cljs.core.next(seq22261__$1);
var G__22264 = cljs.core.first(seq22261__$2);
var seq22261__$3 = cljs.core.next(seq22261__$2);
var G__22265 = cljs.core.first(seq22261__$3);
var seq22261__$4 = cljs.core.next(seq22261__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__22262,G__22263,G__22264,G__22265,seq22261__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__10133__auto___22286 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__22283 = arguments.length;
switch (G__22283) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22288 = arguments.length;
var i__10088__auto___22289 = (0);
while(true){
if((i__10088__auto___22289 < len__10087__auto___22288)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22289]));

var G__22290 = (i__10088__auto___22289 + (1));
i__10088__auto___22289 = G__22290;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__22284 = cljs.analyzer.checked_arrays();
var G__22284__$1 = (((G__22284 instanceof cljs.core.Keyword))?G__22284.fqn:null);
switch (G__22284__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = array;
return cljs.core._conj((function (){var x__9762__auto____$1 = idx;
return cljs.core._conj((function (){var x__9762__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__22285 = cljs.analyzer.checked_arrays();
var G__22285__$1 = (((G__22285 instanceof cljs.core.Keyword))?G__22285.fqn:null);
switch (G__22285__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9762__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq22277){
var G__22278 = cljs.core.first(seq22277);
var seq22277__$1 = cljs.core.next(seq22277);
var G__22279 = cljs.core.first(seq22277__$1);
var seq22277__$2 = cljs.core.next(seq22277__$1);
var G__22280 = cljs.core.first(seq22277__$2);
var seq22277__$3 = cljs.core.next(seq22277__$2);
var G__22281 = cljs.core.first(seq22277__$3);
var seq22277__$4 = cljs.core.next(seq22277__$3);
var G__22282 = cljs.core.first(seq22277__$4);
var seq22277__$5 = cljs.core.next(seq22277__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__22278,G__22279,G__22280,G__22281,G__22282,seq22277__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__10133__auto___22293 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__10133__auto___22294 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj((function (){var x__9762__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__10133__auto___22302 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__22301 = arguments.length;
switch (G__22301) {
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
var args_arr__10110__auto__ = [];
var len__10087__auto___22304 = arguments.length;
var i__10088__auto___22305 = (0);
while(true){
if((i__10088__auto___22305 < len__10087__auto___22304)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22305]));

var G__22306 = (i__10088__auto___22305 + (1));
i__10088__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq22296){
var G__22297 = cljs.core.first(seq22296);
var seq22296__$1 = cljs.core.next(seq22296);
var G__22298 = cljs.core.first(seq22296__$1);
var seq22296__$2 = cljs.core.next(seq22296__$1);
var G__22299 = cljs.core.first(seq22296__$2);
var seq22296__$3 = cljs.core.next(seq22296__$2);
var G__22300 = cljs.core.first(seq22296__$3);
var seq22296__$4 = cljs.core.next(seq22296__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__22297,G__22298,G__22299,G__22300,seq22296__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__10133__auto___22307 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__10133__auto___22308 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__10133__auto___22309 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__10133__auto___22310 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__10133__auto___22311 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__10133__auto___22312 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__10133__auto___22313 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__10133__auto___22314 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__10133__auto___22315 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__10133__auto___22319 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22320 = arguments.length;
var i__10088__auto___22321 = (0);
while(true){
if((i__10088__auto___22321 < len__10087__auto___22320)){
args__10094__auto__.push((arguments[i__10088__auto___22321]));

var G__22322 = (i__10088__auto___22321 + (1));
i__10088__auto___22321 = G__22322;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq22316){
var G__22317 = cljs.core.first(seq22316);
var seq22316__$1 = cljs.core.next(seq22316);
var G__22318 = cljs.core.first(seq22316__$1);
var seq22316__$2 = cljs.core.next(seq22316__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__22317,G__22318,seq22316__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__10133__auto___22326 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22327 = arguments.length;
var i__10088__auto___22328 = (0);
while(true){
if((i__10088__auto___22328 < len__10087__auto___22327)){
args__10094__auto__.push((arguments[i__10088__auto___22328]));

var G__22329 = (i__10088__auto___22328 + (1));
i__10088__auto___22328 = G__22329;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq22323){
var G__22324 = cljs.core.first(seq22323);
var seq22323__$1 = cljs.core.next(seq22323);
var G__22325 = cljs.core.first(seq22323__$1);
var seq22323__$2 = cljs.core.next(seq22323__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__22324,G__22325,seq22323__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__10133__auto___22330 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__10133__auto___22331 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__10133__auto___22335 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22336 = arguments.length;
var i__10088__auto___22337 = (0);
while(true){
if((i__10088__auto___22337 < len__10087__auto___22336)){
args__10094__auto__.push((arguments[i__10088__auto___22337]));

var G__22338 = (i__10088__auto___22337 + (1));
i__10088__auto___22337 = G__22338;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq22332){
var G__22333 = cljs.core.first(seq22332);
var seq22332__$1 = cljs.core.next(seq22332);
var G__22334 = cljs.core.first(seq22332__$1);
var seq22332__$2 = cljs.core.next(seq22332__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__22333,G__22334,seq22332__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__10133__auto___22339 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__10133__auto___22340 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__10133__auto___22344 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22345 = arguments.length;
var i__10088__auto___22346 = (0);
while(true){
if((i__10088__auto___22346 < len__10087__auto___22345)){
args__10094__auto__.push((arguments[i__10088__auto___22346]));

var G__22347 = (i__10088__auto___22346 + (1));
i__10088__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq22341){
var G__22342 = cljs.core.first(seq22341);
var seq22341__$1 = cljs.core.next(seq22341);
var G__22343 = cljs.core.first(seq22341__$1);
var seq22341__$2 = cljs.core.next(seq22341__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__22342,G__22343,seq22341__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__10133__auto___22351 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22352 = arguments.length;
var i__10088__auto___22353 = (0);
while(true){
if((i__10088__auto___22353 < len__10087__auto___22352)){
args__10094__auto__.push((arguments[i__10088__auto___22353]));

var G__22354 = (i__10088__auto___22353 + (1));
i__10088__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq22348){
var G__22349 = cljs.core.first(seq22348);
var seq22348__$1 = cljs.core.next(seq22348);
var G__22350 = cljs.core.first(seq22348__$1);
var seq22348__$2 = cljs.core.next(seq22348__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__22349,G__22350,seq22348__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__10133__auto___22355 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__10133__auto___22356 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__10133__auto___22357 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__10133__auto___22361 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22362 = arguments.length;
var i__10088__auto___22363 = (0);
while(true){
if((i__10088__auto___22363 < len__10087__auto___22362)){
args__10094__auto__.push((arguments[i__10088__auto___22363]));

var G__22364 = (i__10088__auto___22363 + (1));
i__10088__auto___22363 = G__22364;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq22358){
var G__22359 = cljs.core.first(seq22358);
var seq22358__$1 = cljs.core.next(seq22358);
var G__22360 = cljs.core.first(seq22358__$1);
var seq22358__$2 = cljs.core.next(seq22358__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__22359,G__22360,seq22358__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__10133__auto___22368 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22369 = arguments.length;
var i__10088__auto___22370 = (0);
while(true){
if((i__10088__auto___22370 < len__10087__auto___22369)){
args__10094__auto__.push((arguments[i__10088__auto___22370]));

var G__22371 = (i__10088__auto___22370 + (1));
i__10088__auto___22370 = G__22371;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq22365){
var G__22366 = cljs.core.first(seq22365);
var seq22365__$1 = cljs.core.next(seq22365);
var G__22367 = cljs.core.first(seq22365__$1);
var seq22365__$2 = cljs.core.next(seq22365__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__22366,G__22367,seq22365__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__10133__auto___22379 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__22378 = arguments.length;
switch (G__22378) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22381 = arguments.length;
var i__10088__auto___22382 = (0);
while(true){
if((i__10088__auto___22382 < len__10087__auto___22381)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22382]));

var G__22383 = (i__10088__auto___22382 + (1));
i__10088__auto___22382 = G__22383;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq22373){
var G__22374 = cljs.core.first(seq22373);
var seq22373__$1 = cljs.core.next(seq22373);
var G__22375 = cljs.core.first(seq22373__$1);
var seq22373__$2 = cljs.core.next(seq22373__$1);
var G__22376 = cljs.core.first(seq22373__$2);
var seq22373__$3 = cljs.core.next(seq22373__$2);
var G__22377 = cljs.core.first(seq22373__$3);
var seq22373__$4 = cljs.core.next(seq22373__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__22374,G__22375,G__22376,G__22377,seq22373__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__10133__auto___22391 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__22390 = arguments.length;
switch (G__22390) {
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
var args_arr__10110__auto__ = [];
var len__10087__auto___22393 = arguments.length;
var i__10088__auto___22394 = (0);
while(true){
if((i__10088__auto___22394 < len__10087__auto___22393)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22394]));

var G__22395 = (i__10088__auto___22394 + (1));
i__10088__auto___22394 = G__22395;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq22385){
var G__22386 = cljs.core.first(seq22385);
var seq22385__$1 = cljs.core.next(seq22385);
var G__22387 = cljs.core.first(seq22385__$1);
var seq22385__$2 = cljs.core.next(seq22385__$1);
var G__22388 = cljs.core.first(seq22385__$2);
var seq22385__$3 = cljs.core.next(seq22385__$2);
var G__22389 = cljs.core.first(seq22385__$3);
var seq22385__$4 = cljs.core.next(seq22385__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22386,G__22387,G__22388,G__22389,seq22385__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__10133__auto___22403 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__22402 = arguments.length;
switch (G__22402) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22405 = arguments.length;
var i__10088__auto___22406 = (0);
while(true){
if((i__10088__auto___22406 < len__10087__auto___22405)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22406]));

var G__22407 = (i__10088__auto___22406 + (1));
i__10088__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq22397){
var G__22398 = cljs.core.first(seq22397);
var seq22397__$1 = cljs.core.next(seq22397);
var G__22399 = cljs.core.first(seq22397__$1);
var seq22397__$2 = cljs.core.next(seq22397__$1);
var G__22400 = cljs.core.first(seq22397__$2);
var seq22397__$3 = cljs.core.next(seq22397__$2);
var G__22401 = cljs.core.first(seq22397__$3);
var seq22397__$4 = cljs.core.next(seq22397__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__22398,G__22399,G__22400,G__22401,seq22397__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__10133__auto___22415 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__22414 = arguments.length;
switch (G__22414) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22417 = arguments.length;
var i__10088__auto___22418 = (0);
while(true){
if((i__10088__auto___22418 < len__10087__auto___22417)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22418]));

var G__22419 = (i__10088__auto___22418 + (1));
i__10088__auto___22418 = G__22419;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq22409){
var G__22410 = cljs.core.first(seq22409);
var seq22409__$1 = cljs.core.next(seq22409);
var G__22411 = cljs.core.first(seq22409__$1);
var seq22409__$2 = cljs.core.next(seq22409__$1);
var G__22412 = cljs.core.first(seq22409__$2);
var seq22409__$3 = cljs.core.next(seq22409__$2);
var G__22413 = cljs.core.first(seq22409__$3);
var seq22409__$4 = cljs.core.next(seq22409__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__22410,G__22411,G__22412,G__22413,seq22409__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__10133__auto___22427 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__22426 = arguments.length;
switch (G__22426) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22429 = arguments.length;
var i__10088__auto___22430 = (0);
while(true){
if((i__10088__auto___22430 < len__10087__auto___22429)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22430]));

var G__22431 = (i__10088__auto___22430 + (1));
i__10088__auto___22430 = G__22431;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first(seq22421);
var seq22421__$1 = cljs.core.next(seq22421);
var G__22423 = cljs.core.first(seq22421__$1);
var seq22421__$2 = cljs.core.next(seq22421__$1);
var G__22424 = cljs.core.first(seq22421__$2);
var seq22421__$3 = cljs.core.next(seq22421__$2);
var G__22425 = cljs.core.first(seq22421__$3);
var seq22421__$4 = cljs.core.next(seq22421__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__22422,G__22423,G__22424,G__22425,seq22421__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__10133__auto___22439 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__22438 = arguments.length;
switch (G__22438) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22441 = arguments.length;
var i__10088__auto___22442 = (0);
while(true){
if((i__10088__auto___22442 < len__10087__auto___22441)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22442]));

var G__22443 = (i__10088__auto___22442 + (1));
i__10088__auto___22442 = G__22443;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq22433){
var G__22434 = cljs.core.first(seq22433);
var seq22433__$1 = cljs.core.next(seq22433);
var G__22435 = cljs.core.first(seq22433__$1);
var seq22433__$2 = cljs.core.next(seq22433__$1);
var G__22436 = cljs.core.first(seq22433__$2);
var seq22433__$3 = cljs.core.next(seq22433__$2);
var G__22437 = cljs.core.first(seq22433__$3);
var seq22433__$4 = cljs.core.next(seq22433__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22434,G__22435,G__22436,G__22437,seq22433__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__10133__auto___22451 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__22450 = arguments.length;
switch (G__22450) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22453 = arguments.length;
var i__10088__auto___22454 = (0);
while(true){
if((i__10088__auto___22454 < len__10087__auto___22453)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22454]));

var G__22455 = (i__10088__auto___22454 + (1));
i__10088__auto___22454 = G__22455;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq22445){
var G__22446 = cljs.core.first(seq22445);
var seq22445__$1 = cljs.core.next(seq22445);
var G__22447 = cljs.core.first(seq22445__$1);
var seq22445__$2 = cljs.core.next(seq22445__$1);
var G__22448 = cljs.core.first(seq22445__$2);
var seq22445__$3 = cljs.core.next(seq22445__$2);
var G__22449 = cljs.core.first(seq22445__$3);
var seq22445__$4 = cljs.core.next(seq22445__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__22446,G__22447,G__22448,G__22449,seq22445__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__10133__auto___22463 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__22462 = arguments.length;
switch (G__22462) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22465 = arguments.length;
var i__10088__auto___22466 = (0);
while(true){
if((i__10088__auto___22466 < len__10087__auto___22465)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22466]));

var G__22467 = (i__10088__auto___22466 + (1));
i__10088__auto___22466 = G__22467;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq22457){
var G__22458 = cljs.core.first(seq22457);
var seq22457__$1 = cljs.core.next(seq22457);
var G__22459 = cljs.core.first(seq22457__$1);
var seq22457__$2 = cljs.core.next(seq22457__$1);
var G__22460 = cljs.core.first(seq22457__$2);
var seq22457__$3 = cljs.core.next(seq22457__$2);
var G__22461 = cljs.core.first(seq22457__$3);
var seq22457__$4 = cljs.core.next(seq22457__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22458,G__22459,G__22460,G__22461,seq22457__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__10133__auto___22475 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__22474 = arguments.length;
switch (G__22474) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22477 = arguments.length;
var i__10088__auto___22478 = (0);
while(true){
if((i__10088__auto___22478 < len__10087__auto___22477)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22478]));

var G__22479 = (i__10088__auto___22478 + (1));
i__10088__auto___22478 = G__22479;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq22469){
var G__22470 = cljs.core.first(seq22469);
var seq22469__$1 = cljs.core.next(seq22469);
var G__22471 = cljs.core.first(seq22469__$1);
var seq22469__$2 = cljs.core.next(seq22469__$1);
var G__22472 = cljs.core.first(seq22469__$2);
var seq22469__$3 = cljs.core.next(seq22469__$2);
var G__22473 = cljs.core.first(seq22469__$3);
var seq22469__$4 = cljs.core.next(seq22469__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22470,G__22471,G__22472,G__22473,seq22469__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__10133__auto___22480 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__10133__auto___22481 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__10133__auto___22482 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22483 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22484 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22494 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__22493 = arguments.length;
switch (G__22493) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22496 = arguments.length;
var i__10088__auto___22497 = (0);
while(true){
if((i__10088__auto___22497 < len__10087__auto___22496)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22497]));

var G__22498 = (i__10088__auto___22497 + (1));
i__10088__auto___22497 = G__22498;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22485__auto__","x__22485__auto__",-1268562282,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22486__auto__","y__22486__auto__",686169723,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22485__auto__","x__22485__auto__",-1268562282,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22486__auto__","y__22486__auto__",686169723,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22485__auto__","x__22485__auto__",-1268562282,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22486__auto__","y__22486__auto__",686169723,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq22488){
var G__22489 = cljs.core.first(seq22488);
var seq22488__$1 = cljs.core.next(seq22488);
var G__22490 = cljs.core.first(seq22488__$1);
var seq22488__$2 = cljs.core.next(seq22488__$1);
var G__22491 = cljs.core.first(seq22488__$2);
var seq22488__$3 = cljs.core.next(seq22488__$2);
var G__22492 = cljs.core.first(seq22488__$3);
var seq22488__$4 = cljs.core.next(seq22488__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__22489,G__22490,G__22491,G__22492,seq22488__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__10133__auto___22508 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__22507 = arguments.length;
switch (G__22507) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22510 = arguments.length;
var i__10088__auto___22511 = (0);
while(true){
if((i__10088__auto___22511 < len__10087__auto___22510)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22511]));

var G__22512 = (i__10088__auto___22511 + (1));
i__10088__auto___22511 = G__22512;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22499__auto__","x__22499__auto__",-1930210653,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22500__auto__","y__22500__auto__",559324971,null)),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22499__auto__","x__22499__auto__",-1930210653,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22500__auto__","y__22500__auto__",559324971,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22499__auto__","x__22499__auto__",-1930210653,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22500__auto__","y__22500__auto__",559324971,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq22502){
var G__22503 = cljs.core.first(seq22502);
var seq22502__$1 = cljs.core.next(seq22502);
var G__22504 = cljs.core.first(seq22502__$1);
var seq22502__$2 = cljs.core.next(seq22502__$1);
var G__22505 = cljs.core.first(seq22502__$2);
var seq22502__$3 = cljs.core.next(seq22502__$2);
var G__22506 = cljs.core.first(seq22502__$3);
var seq22502__$4 = cljs.core.next(seq22502__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__22503,G__22504,G__22505,G__22506,seq22502__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__10133__auto___22513 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = num;
return cljs.core._conj((function (){var x__9762__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__10133__auto___22514 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__10133__auto___22522 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__22521 = arguments.length;
switch (G__22521) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22524 = arguments.length;
var i__10088__auto___22525 = (0);
while(true){
if((i__10088__auto___22525 < len__10087__auto___22524)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22525]));

var G__22526 = (i__10088__auto___22525 + (1));
i__10088__auto___22525 = G__22526;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq22516){
var G__22517 = cljs.core.first(seq22516);
var seq22516__$1 = cljs.core.next(seq22516);
var G__22518 = cljs.core.first(seq22516__$1);
var seq22516__$2 = cljs.core.next(seq22516__$1);
var G__22519 = cljs.core.first(seq22516__$2);
var seq22516__$3 = cljs.core.next(seq22516__$2);
var G__22520 = cljs.core.first(seq22516__$3);
var seq22516__$4 = cljs.core.next(seq22516__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__22517,G__22518,G__22519,G__22520,seq22516__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__10133__auto___22534 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__22533 = arguments.length;
switch (G__22533) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22536 = arguments.length;
var i__10088__auto___22537 = (0);
while(true){
if((i__10088__auto___22537 < len__10087__auto___22536)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22537]));

var G__22538 = (i__10088__auto___22537 + (1));
i__10088__auto___22537 = G__22538;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq22528){
var G__22529 = cljs.core.first(seq22528);
var seq22528__$1 = cljs.core.next(seq22528);
var G__22530 = cljs.core.first(seq22528__$1);
var seq22528__$2 = cljs.core.next(seq22528__$1);
var G__22531 = cljs.core.first(seq22528__$2);
var seq22528__$3 = cljs.core.next(seq22528__$2);
var G__22532 = cljs.core.first(seq22528__$3);
var seq22528__$4 = cljs.core.next(seq22528__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__22529,G__22530,G__22531,G__22532,seq22528__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__10133__auto___22546 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__22545 = arguments.length;
switch (G__22545) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22548 = arguments.length;
var i__10088__auto___22549 = (0);
while(true){
if((i__10088__auto___22549 < len__10087__auto___22548)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22549]));

var G__22550 = (i__10088__auto___22549 + (1));
i__10088__auto___22549 = G__22550;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq22540){
var G__22541 = cljs.core.first(seq22540);
var seq22540__$1 = cljs.core.next(seq22540);
var G__22542 = cljs.core.first(seq22540__$1);
var seq22540__$2 = cljs.core.next(seq22540__$1);
var G__22543 = cljs.core.first(seq22540__$2);
var seq22540__$3 = cljs.core.next(seq22540__$2);
var G__22544 = cljs.core.first(seq22540__$3);
var seq22540__$4 = cljs.core.next(seq22540__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__22541,G__22542,G__22543,G__22544,seq22540__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__10133__auto___22551 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__10133__auto___22559 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__22558 = arguments.length;
switch (G__22558) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22561 = arguments.length;
var i__10088__auto___22562 = (0);
while(true){
if((i__10088__auto___22562 < len__10087__auto___22561)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22562]));

var G__22563 = (i__10088__auto___22562 + (1));
i__10088__auto___22562 = G__22563;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq22553){
var G__22554 = cljs.core.first(seq22553);
var seq22553__$1 = cljs.core.next(seq22553);
var G__22555 = cljs.core.first(seq22553__$1);
var seq22553__$2 = cljs.core.next(seq22553__$1);
var G__22556 = cljs.core.first(seq22553__$2);
var seq22553__$3 = cljs.core.next(seq22553__$2);
var G__22557 = cljs.core.first(seq22553__$3);
var seq22553__$4 = cljs.core.next(seq22553__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__22554,G__22555,G__22556,G__22557,seq22553__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__10133__auto___22571 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__22570 = arguments.length;
switch (G__22570) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___22573 = arguments.length;
var i__10088__auto___22574 = (0);
while(true){
if((i__10088__auto___22574 < len__10087__auto___22573)){
args_arr__10110__auto__.push((arguments[i__10088__auto___22574]));

var G__22575 = (i__10088__auto___22574 + (1));
i__10088__auto___22574 = G__22575;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq22565){
var G__22566 = cljs.core.first(seq22565);
var seq22565__$1 = cljs.core.next(seq22565);
var G__22567 = cljs.core.first(seq22565__$1);
var seq22565__$2 = cljs.core.next(seq22565__$1);
var G__22568 = cljs.core.first(seq22565__$2);
var seq22565__$3 = cljs.core.next(seq22565__$2);
var G__22569 = cljs.core.first(seq22565__$3);
var seq22565__$4 = cljs.core.next(seq22565__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__22566,G__22567,G__22568,G__22569,seq22565__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__10133__auto___22576 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__10133__auto___22577 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__10133__auto___22578 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__10133__auto___22579 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__10133__auto___22580 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__10133__auto___22581 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__10133__auto___22582 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__10133__auto___22583 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__10133__auto___22584 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = hash;
return cljs.core._conj((function (){var x__9762__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__10133__auto___22585 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9762__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__10133__auto___22587 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null)),(function (){var x__9762__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22586__auto__","h__22586__auto__",554850754,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22588__auto__","x__22588__auto__",-1414492003,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22588__auto__","x__22588__auto__",-1414492003,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___22596 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22597 = arguments.length;
var i__10088__auto___22598 = (0);
while(true){
if((i__10088__auto___22598 < len__10087__auto___22597)){
args__10094__auto__.push((arguments[i__10088__auto___22598]));

var G__22599 = (i__10088__auto___22598 + (1));
i__10088__auto___22598 = G__22599;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((6) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10095__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq22589){
var G__22590 = cljs.core.first(seq22589);
var seq22589__$1 = cljs.core.next(seq22589);
var G__22591 = cljs.core.first(seq22589__$1);
var seq22589__$2 = cljs.core.next(seq22589__$1);
var G__22592 = cljs.core.first(seq22589__$2);
var seq22589__$3 = cljs.core.next(seq22589__$2);
var G__22593 = cljs.core.first(seq22589__$3);
var seq22589__$4 = cljs.core.next(seq22589__$3);
var G__22594 = cljs.core.first(seq22589__$4);
var seq22589__$5 = cljs.core.next(seq22589__$4);
var G__22595 = cljs.core.first(seq22589__$5);
var seq22589__$6 = cljs.core.next(seq22589__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__22590,G__22591,G__22592,G__22593,G__22594,G__22595,seq22589__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = clojure.walk.postwalk((function (p1__22600_SHARP_){
if(cljs.core.sequential_QMARK_(p1__22600_SHARP_)){
var G__22604 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__22600_SHARP_);
var fexpr__22603 = ((cljs.core.vector_QMARK_(p1__22600_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__22603.cljs$core$IFn$_invoke$arity$1 ? fexpr__22603.cljs$core$IFn$_invoke$arity$1(G__22604) : fexpr__22603(G__22604));
} else {
return p1__22600_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___22609 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__22605,fkv){
var vec__22606 = p__22605;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__10133__auto___22613 = (function (){
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
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22614 = arguments.length;
var i__10088__auto___22615 = (0);
while(true){
if((i__10088__auto___22615 < len__10087__auto___22614)){
args__10094__auto__.push((arguments[i__10088__auto___22615]));

var G__22616 = (i__10088__auto___22615 + (1));
i__10088__auto___22615 = G__22616;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__9762__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq22610){
var G__22611 = cljs.core.first(seq22610);
var seq22610__$1 = cljs.core.next(seq22610);
var G__22612 = cljs.core.first(seq22610__$1);
var seq22610__$2 = cljs.core.next(seq22610__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__22611,G__22612,seq22610__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__10133__auto___22621 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22622 = arguments.length;
var i__10088__auto___22623 = (0);
while(true){
if((i__10088__auto___22623 < len__10087__auto___22622)){
args__10094__auto__.push((arguments[i__10088__auto___22623]));

var G__22624 = (i__10088__auto___22623 + (1));
i__10088__auto___22623 = G__22624;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq22617){
var G__22618 = cljs.core.first(seq22617);
var seq22617__$1 = cljs.core.next(seq22617);
var G__22619 = cljs.core.first(seq22617__$1);
var seq22617__$2 = cljs.core.next(seq22617__$1);
var G__22620 = cljs.core.first(seq22617__$2);
var seq22617__$3 = cljs.core.next(seq22617__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22618,G__22619,G__22620,seq22617__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__10133__auto___22629 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22630 = arguments.length;
var i__10088__auto___22631 = (0);
while(true){
if((i__10088__auto___22631 < len__10087__auto___22630)){
args__10094__auto__.push((arguments[i__10088__auto___22631]));

var G__22632 = (i__10088__auto___22631 + (1));
i__10088__auto___22631 = G__22632;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq22625){
var G__22626 = cljs.core.first(seq22625);
var seq22625__$1 = cljs.core.next(seq22625);
var G__22627 = cljs.core.first(seq22625__$1);
var seq22625__$2 = cljs.core.next(seq22625__$1);
var G__22628 = cljs.core.first(seq22625__$2);
var seq22625__$3 = cljs.core.next(seq22625__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__22626,G__22627,G__22628,seq22625__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__10133__auto___22633 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__10133__auto___22638 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22639 = arguments.length;
var i__10088__auto___22640 = (0);
while(true){
if((i__10088__auto___22640 < len__10087__auto___22639)){
args__10094__auto__.push((arguments[i__10088__auto___22640]));

var G__22641 = (i__10088__auto___22640 + (1));
i__10088__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq22634){
var G__22635 = cljs.core.first(seq22634);
var seq22634__$1 = cljs.core.next(seq22634);
var G__22636 = cljs.core.first(seq22634__$1);
var seq22634__$2 = cljs.core.next(seq22634__$1);
var G__22637 = cljs.core.first(seq22634__$2);
var seq22634__$3 = cljs.core.next(seq22634__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__22635,G__22636,G__22637,seq22634__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5455__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__8796__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__5455__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__5455__auto__))
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
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__22642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__22643 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__22642;
s = G__22643;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__22644){
var vec__22645 = p__22644;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22645,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22645,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve(p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__22645,p,sigs){
return (function (p__22648){
var vec__22649 = p__22648;
var seq__22650 = cljs.core.seq(vec__22649);
var first__22651 = cljs.core.first(seq__22650);
var seq__22650__$1 = cljs.core.next(seq__22650);
var f = first__22651;
var meths = seq__22650__$1;
var form = vec__22649;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__22645,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9762__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9762__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9762__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__22652){
var vec__22653 = p__22652;
var seq__22654 = cljs.core.seq(vec__22653);
var first__22655 = cljs.core.first(seq__22654);
var seq__22654__$1 = cljs.core.next(seq__22654);
var vec__22656 = first__22655;
var seq__22657 = cljs.core.seq(vec__22656);
var first__22658 = cljs.core.first(seq__22657);
var seq__22657__$1 = cljs.core.next(seq__22657);
var this$ = first__22658;
var args = seq__22657__$1;
var sig = vec__22656;
var body = seq__22654__$1;
var x__9762__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__22659){
var vec__22660 = p__22659;
var seq__22661 = cljs.core.seq(vec__22660);
var first__22662 = cljs.core.first(seq__22661);
var seq__22661__$1 = cljs.core.next(seq__22661);
var vec__22663 = first__22662;
var seq__22664 = cljs.core.seq(vec__22663);
var first__22665 = cljs.core.first(seq__22664);
var seq__22664__$1 = cljs.core.next(seq__22664);
var this$ = first__22665;
var args = seq__22664__$1;
var sig = vec__22663;
var body = seq__22661__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9762__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__22666){
var vec__22667 = p__22666;
var seq__22668 = cljs.core.seq(vec__22667);
var first__22669 = cljs.core.first(seq__22668);
var seq__22668__$1 = cljs.core.next(seq__22668);
var vec__22670 = first__22669;
var seq__22671 = cljs.core.seq(vec__22670);
var first__22672 = cljs.core.first(seq__22671);
var seq__22671__$1 = cljs.core.next(seq__22671);
var this$ = first__22672;
var args = seq__22671__$1;
var sig = vec__22670;
var body = seq__22668__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__22673){
var vec__22674 = p__22673;
var seq__22675 = cljs.core.seq(vec__22674);
var first__22676 = cljs.core.first(seq__22675);
var seq__22675__$1 = cljs.core.next(seq__22675);
var vec__22677 = first__22676;
var seq__22678 = cljs.core.seq(vec__22677);
var first__22679 = cljs.core.first(seq__22678);
var seq__22678__$1 = cljs.core.next(seq__22678);
var this$ = first__22679;
var args = seq__22678__$1;
var sig = vec__22677;
var body = seq__22675__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9762__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22681){
var vec__22682 = p__22681;
var seq__22683 = cljs.core.seq(vec__22682);
var first__22684 = cljs.core.first(seq__22683);
var seq__22683__$1 = cljs.core.next(seq__22683);
var f = first__22684;
var meths = seq__22683__$1;
var form = vec__22682;
var vec__22685 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22685,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22685,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix(type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22685,f__$1,meths__$1,vec__22682,seq__22683,first__22684,seq__22683__$1,f,meths,form){
return (function (p1__22680_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__22680_SHARP_);
});})(vec__22685,f__$1,meths__$1,vec__22682,seq__22683,first__22684,seq__22683__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__22689){
var vec__22690 = p__22689;
var seq__22691 = cljs.core.seq(vec__22690);
var first__22692 = cljs.core.first(seq__22691);
var seq__22691__$1 = cljs.core.next(seq__22691);
var f = first__22692;
var meths = seq__22691__$1;
var form = vec__22690;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22690,seq__22691,first__22692,seq__22691__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (function (){var G__22695 = type_sym;
var G__22696 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__22695,G__22696) : cljs.core$macros.extend_prefix(G__22695,G__22696));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(vec__22690,seq__22691,first__22692,seq__22691__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22690,seq__22691,first__22692,seq__22691__$1,f,meths,form){
return (function (p1__22688_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__22688_SHARP_);
});})(vec__22690,seq__22691,first__22692,seq__22691__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__22698){
var vec__22699 = p__22698;
var seq__22700 = cljs.core.seq(vec__22699);
var first__22701 = cljs.core.first(seq__22700);
var seq__22700__$1 = cljs.core.next(seq__22700);
var f = first__22701;
var meths = seq__22700__$1;
var form = vec__22699;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22699,seq__22700,first__22701,seq__22700__$1,f,meths,form){
return (function (p1__22697_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__22697_SHARP_);
});})(vec__22699,seq__22700,first__22701,seq__22700__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (function (){var G__22704 = type_sym;
var G__22705 = new cljs.core.Symbol(null,"call","call",1120531661,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__22704,G__22705) : cljs.core$macros.extend_prefix(G__22704,G__22705));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (function (){var G__22708 = type_sym;
var G__22709 = new cljs.core.Symbol(null,"apply","apply",-1334050276,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__22708,G__22709) : cljs.core$macros.extend_prefix(G__22708,G__22709));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9762__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__22710){
var vec__22711 = p__22710;
var seq__22712 = cljs.core.seq(vec__22711);
var first__22713 = cljs.core.first(seq__22712);
var seq__22712__$1 = cljs.core.next(seq__22712);
var f = first__22713;
var meths = seq__22712__$1;
var form = vec__22711;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (function (){var G__22716 = type_sym;
var G__22717 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__22716,G__22717) : cljs.core$macros.extend_prefix(G__22716,G__22717));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__22711,seq__22712,first__22713,seq__22712__$1,f,meths,form){
return (function (p__22718){
var vec__22719 = p__22718;
var seq__22720 = cljs.core.seq(vec__22719);
var first__22721 = cljs.core.first(seq__22720);
var seq__22720__$1 = cljs.core.next(seq__22720);
var sig = first__22721;
var body = seq__22720__$1;
var meth = vec__22719;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (function (){var G__22724 = type_sym;
var G__22725 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__22724,G__22725) : cljs.core$macros.extend_prefix(G__22724,G__22725));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(pf,vec__22711,seq__22712,first__22713,seq__22712__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__22726){
var vec__22727 = p__22726;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22727,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22727,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve(p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag(psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix(type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__22727,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__22727,p,sigs))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
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
var vec__22730 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name(method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name(method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22730,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22730,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_22733 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_22733))){
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

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__22734 = cljs.core.next(sigs__$1);
var G__22735 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__22734;
seen = G__22735;
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

var seen_22739 = cljs.core.PersistentHashSet.EMPTY;
var methods_22740__$1 = methods$;
while(true){
if(cljs.core.seq(methods_22740__$1)){
var vec__22736_22741 = cljs.core.first(methods_22740__$1);
var fname_22742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22736_22741,(0),null);
var method_22743 = vec__22736_22741;
if(cljs.core.contains_QMARK_(seen_22739,fname_22742)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_22742], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_22743);

var G__22744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_22739,fname_22742);
var G__22745 = cljs.core.next(methods_22740__$1);
seen_22739 = G__22744;
methods_22740__$1 = G__22745;
continue;
} else {
}
break;
}

var G__22746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__22747 = impls__$2;
protos = G__22746;
impls__$1 = G__22747;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv((0))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
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
var ret__10133__auto___22757 = (function (){
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
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22758 = arguments.length;
var i__10088__auto___22759 = (0);
while(true){
if((i__10088__auto___22759 < len__10087__auto___22758)){
args__10094__auto__.push((arguments[i__10088__auto___22759]));

var G__22760 = (i__10088__auto___22759 + (1));
i__10088__auto___22759 = G__22760;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__22756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null);
return (fexpr__22756.cljs$core$IFn$_invoke$arity$1 ? fexpr__22756.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__22756(type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__22753 = (function (){var temp__5455__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type(type_sym));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve(type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22753,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22753,(1),null);
if(cljs.core.truth_((function (){var and__8796__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8796__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type(type_sym));
} else {
return and__8796__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type(type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__22753,type,assign_impls){
return (function (p1__22748_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__22748_SHARP_) : assign_impls(env,resolve,type_sym,type,p1__22748_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__22753,type,assign_impls))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq22749){
var G__22750 = cljs.core.first(seq22749);
var seq22749__$1 = cljs.core.next(seq22749);
var G__22751 = cljs.core.first(seq22749__$1);
var seq22749__$2 = cljs.core.next(seq22749__$1);
var G__22752 = cljs.core.first(seq22749__$2);
var seq22749__$3 = cljs.core.next(seq22749__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__22750,G__22751,G__22752,seq22749__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__22762){
var vec__22763 = p__22762;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22763,f,sigs){
return (function (p1__22761_SHARP_){
return cljs.core.cons(cljs.core.second(p1__22761_SHARP_),cljs.core.nnext(p1__22761_SHARP_));
});})(vec__22763,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__22767 = arguments.length;
switch (G__22767) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__22769 = ret__$1;
var G__22770 = specs__$2;
ret = G__22769;
specs__$1 = G__22770;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22771_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__22771_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9762__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__10133__auto___22783 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22784 = arguments.length;
var i__10088__auto___22785 = (0);
while(true){
if((i__10088__auto___22785 < len__10087__auto___22784)){
args__10094__auto__.push((arguments[i__10088__auto___22785]));

var G__22786 = (i__10088__auto___22785 + (1));
i__10088__auto___22785 = G__22786;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__22780 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22780,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22780,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22772__auto__","this__22772__auto__",-2107307877,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22773__auto__","writer__22773__auto__",-1625633281,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__22774__auto__","opt__22774__auto__",751591707,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22773__auto__","writer__22773__auto__",-1625633281,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq22775){
var G__22776 = cljs.core.first(seq22775);
var seq22775__$1 = cljs.core.next(seq22775);
var G__22777 = cljs.core.first(seq22775__$1);
var seq22775__$2 = cljs.core.next(seq22775__$1);
var G__22778 = cljs.core.first(seq22775__$2);
var seq22775__$3 = cljs.core.next(seq22775__$2);
var G__22779 = cljs.core.first(seq22775__$3);
var seq22775__$4 = cljs.core.next(seq22775__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__22776,G__22777,G__22778,G__22779,seq22775__$4);
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
return (function (p1__22787_SHARP_){
return cljs.core.with_meta(p1__22787_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22788__auto__","this__22788__auto__",695767368,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22789__auto__","this__22789__auto__",1926057807,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22789__auto__","this__22789__auto__",1926057807,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__22790__auto__","coll__22790__auto__",-2023456042,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9762__auto__ = cljs.core.hash([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__22790__auto__","coll__22790__auto__",-2023456042,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22791__auto__","this__22791__auto__",-1100608046,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22792__auto__","this__22792__auto__",1540174488,null)),(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22793__auto__","this__22793__auto__",1862629471,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22794__auto__","k__22794__auto__",-859104332,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22793__auto__","this__22793__auto__",1862629471,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22794__auto__","k__22794__auto__",-859104332,null)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22795__auto__","this__22795__auto__",1928845494,null)),(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__22796__auto__","else__22796__auto__",717390559,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__22796__auto__","else__22796__auto__",717390559,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22797__auto__","this__22797__auto__",1677087470,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9762__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22798__auto__","this__22798__auto__",1224139454,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__22799__auto__","entry__22799__auto__",-2034044164,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__22799__auto__","entry__22799__auto__",-2034044164,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22798__auto__","this__22798__auto__",1224139454,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__22799__auto__","entry__22799__auto__",-2034044164,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__22799__auto__","entry__22799__auto__",-2034044164,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22798__auto__","this__22798__auto__",1224139454,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__22799__auto__","entry__22799__auto__",-2034044164,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22800__auto__","this__22800__auto__",-1793683105,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22801__auto__","k__22801__auto__",-1878265242,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22801__auto__","k__22801__auto__",-1878265242,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22801__auto__","k__22801__auto__",-1878265242,null)),(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22802__auto__","this__22802__auto__",676218840,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22803__auto__","k__22803__auto__",-838762935,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22803__auto__","k__22803__auto__",-838762935,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22802__auto__","this__22802__auto__",676218840,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22803__auto__","k__22803__auto__",-838762935,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22803__auto__","k__22803__auto__",-838762935,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22805__auto__","this__22805__auto__",1613263469,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__22804_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__22804_SHARP_);
return cljs.core._conj((function (){var x__9762__auto____$1 = p1__22804_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22807__auto__","this__22807__auto__",-1227703042,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22808__auto__","writer__22808__auto__",-2028213641,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__22809__auto__","opts__22809__auto__",-1495982872,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__22810__auto__","pr-pair__22810__auto__",2127819717,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__22811__auto__","keyval__22811__auto__",-1569261312,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22808__auto__","writer__22808__auto__",-2028213641,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__22809__auto__","opts__22809__auto__",-1495982872,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__22811__auto__","keyval__22811__auto__",-1569261312,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22808__auto__","writer__22808__auto__",-2028213641,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__22810__auto__","pr-pair__22810__auto__",2127819717,null)),(function (){var x__9762__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__22809__auto__","opts__22809__auto__",-1495982872,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__22806_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__22806_SHARP_);
return cljs.core._conj((function (){var x__9762__auto____$1 = p1__22806_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null));
var vec__22812 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9762__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9762__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9762__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___22822 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22823 = arguments.length;
var i__10088__auto___22824 = (0);
while(true){
if((i__10088__auto___22824 < len__10087__auto___22823)){
args__10094__auto__.push((arguments[i__10088__auto___22824]));

var G__22825 = (i__10088__auto___22824 + (1));
i__10088__auto___22824 = G__22825;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22815__auto__","this__22815__auto__",-2029817620,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22815__auto__","this__22815__auto__",-2029817620,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22816__auto__","writer__22816__auto__",-713425338,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22816__auto__","writer__22816__auto__",-713425338,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq22817){
var G__22818 = cljs.core.first(seq22817);
var seq22817__$1 = cljs.core.next(seq22817);
var G__22819 = cljs.core.first(seq22817__$1);
var seq22817__$2 = cljs.core.next(seq22817__$1);
var G__22820 = cljs.core.first(seq22817__$2);
var seq22817__$3 = cljs.core.next(seq22817__$2);
var G__22821 = cljs.core.first(seq22817__$3);
var seq22817__$4 = cljs.core.next(seq22817__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__22818,G__22819,G__22820,G__22821,seq22817__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__10133__auto___22853 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22854 = arguments.length;
var i__10088__auto___22855 = (0);
while(true){
if((i__10088__auto___22855 < len__10087__auto___22854)){
args__10094__auto__.push((arguments[i__10088__auto___22855]));

var G__22856 = (i__10088__auto___22855 + (1));
i__10088__auto___22855 = G__22856;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__22832 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22832,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22832,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__22832,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__22832,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__22835 = cljs.core.seq(methods$);
var chunk__22836 = null;
var count__22837 = (0);
var i__22838 = (0);
while(true){
if((i__22838 < count__22837)){
var vec__22839 = chunk__22836.cljs$core$IIndexed$_nth$arity$2(null,i__22838);
var seq__22840 = cljs.core.seq(vec__22839);
var first__22841 = cljs.core.first(seq__22840);
var seq__22840__$1 = cljs.core.next(seq__22840);
var mname = first__22841;
var arities = seq__22840__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__22857 = seq__22835;
var G__22858 = chunk__22836;
var G__22859 = count__22837;
var G__22860 = (i__22838 + (1));
seq__22835 = G__22857;
chunk__22836 = G__22858;
count__22837 = G__22859;
i__22838 = G__22860;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22835);
if(temp__5457__auto__){
var seq__22835__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22835__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__22835__$1);
var G__22861 = cljs.core.chunk_rest(seq__22835__$1);
var G__22862 = c__9739__auto__;
var G__22863 = cljs.core.count(c__9739__auto__);
var G__22864 = (0);
seq__22835 = G__22861;
chunk__22836 = G__22862;
count__22837 = G__22863;
i__22838 = G__22864;
continue;
} else {
var vec__22842 = cljs.core.first(seq__22835__$1);
var seq__22843 = cljs.core.seq(vec__22842);
var first__22844 = cljs.core.first(seq__22843);
var seq__22843__$1 = cljs.core.next(seq__22843);
var mname = first__22844;
var arities = seq__22843__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__22865 = cljs.core.next(seq__22835__$1);
var G__22866 = null;
var G__22867 = (0);
var G__22868 = (0);
seq__22835 = G__22865;
chunk__22836 = G__22866;
count__22837 = G__22867;
i__22838 = G__22868;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22826__auto__","x__22826__auto__",-1141692116,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9762__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22826__auto__","x__22826__auto__",-1141692116,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9762__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22827__auto__","m__22827__auto__",2074878590,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__22845){
var vec__22846 = p__22845;
var seq__22847 = cljs.core.seq(vec__22846);
var first__22848 = cljs.core.first(seq__22847);
var seq__22847__$1 = cljs.core.next(seq__22847);
var fname = first__22848;
var sigs = seq__22847__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__22849){
var vec__22850 = p__22849;
var seq__22851 = cljs.core.seq(vec__22850);
var first__22852 = cljs.core.first(seq__22851);
var seq__22851__$1 = cljs.core.next(seq__22851);
var fname = first__22852;
var sigs = seq__22851__$1;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9762__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__22850,seq__22851,first__22852,seq__22851__$1,fname,sigs,p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__22850,seq__22851,first__22852,seq__22851__$1,fname,sigs,p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__22832,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9762__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq22828){
var G__22829 = cljs.core.first(seq22828);
var seq22828__$1 = cljs.core.next(seq22828);
var G__22830 = cljs.core.first(seq22828__$1);
var seq22828__$2 = cljs.core.next(seq22828__$1);
var G__22831 = cljs.core.first(seq22828__$2);
var seq22828__$3 = cljs.core.next(seq22828__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__22829,G__22830,G__22831,seq22828__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__10133__auto___22872 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__22869 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols(p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22869,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22869,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22876 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__22873 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols(p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___22880 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22881 = arguments.length;
var i__10088__auto___22882 = (0);
while(true){
if((i__10088__auto___22882 < len__10087__auto___22881)){
args__10094__auto__.push((arguments[i__10088__auto___22882]));

var G__22883 = (i__10088__auto___22882 + (1));
i__10088__auto___22882 = G__22883;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq22877){
var G__22878 = cljs.core.first(seq22877);
var seq22877__$1 = cljs.core.next(seq22877);
var G__22879 = cljs.core.first(seq22877__$1);
var seq22877__$2 = cljs.core.next(seq22877__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__22878,G__22879,seq22877__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__10133__auto___22887 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10094__auto__ = [];
var len__10087__auto___22888 = arguments.length;
var i__10088__auto___22889 = (0);
while(true){
if((i__10088__auto___22889 < len__10087__auto___22888)){
args__10094__auto__.push((arguments[i__10088__auto___22889]));

var G__22890 = (i__10088__auto___22889 + (1));
i__10088__auto___22889 = G__22890;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq22884){
var G__22885 = cljs.core.first(seq22884);
var seq22884__$1 = cljs.core.next(seq22884);
var G__22886 = cljs.core.first(seq22884__$1);
var seq22884__$2 = cljs.core.next(seq22884__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__22885,G__22886,seq22884__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__10133__auto___22899 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22900 = arguments.length;
var i__10088__auto___22901 = (0);
while(true){
if((i__10088__auto___22901 < len__10087__auto___22900)){
args__10094__auto__.push((arguments[i__10088__auto___22901]));

var G__22902 = (i__10088__auto___22901 + (1));
i__10088__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__22895){
var vec__22896 = p__22895;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,(1),null);
return cljs.core._conj((function (){var x__9762__auto__ = k;
return cljs.core._conj((function (){var x__9762__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq22891){
var G__22892 = cljs.core.first(seq22891);
var seq22891__$1 = cljs.core.next(seq22891);
var G__22893 = cljs.core.first(seq22891__$1);
var seq22891__$2 = cljs.core.next(seq22891__$1);
var G__22894 = cljs.core.first(seq22891__$2);
var seq22891__$3 = cljs.core.next(seq22891__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__22892,G__22893,G__22894,seq22891__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__10133__auto___22907 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22908 = arguments.length;
var i__10088__auto___22909 = (0);
while(true){
if((i__10088__auto___22909 < len__10087__auto___22908)){
args__10094__auto__.push((arguments[i__10088__auto___22909]));

var G__22910 = (i__10088__auto___22909 + (1));
i__10088__auto___22909 = G__22910;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq22903){
var G__22904 = cljs.core.first(seq22903);
var seq22903__$1 = cljs.core.next(seq22903);
var G__22905 = cljs.core.first(seq22903__$1);
var seq22903__$2 = cljs.core.next(seq22903__$1);
var G__22906 = cljs.core.first(seq22903__$2);
var seq22903__$3 = cljs.core.next(seq22903__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__22904,G__22905,G__22906,seq22903__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__10133__auto___22923 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22924 = arguments.length;
var i__10088__auto___22925 = (0);
while(true){
if((i__10088__auto___22925 < len__10087__auto___22924)){
args__10094__auto__.push((arguments[i__10088__auto___22925]));

var G__22926 = (i__10088__auto___22925 + (1));
i__10088__auto___22925 = G__22926;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__22917 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__22920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22920,(2),null);
var clause = vec__22920;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__22911__auto__","p__22911__auto__",-492154585,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__22911__auto__","p__22911__auto__",-492154585,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq22912){
var G__22913 = cljs.core.first(seq22912);
var seq22912__$1 = cljs.core.next(seq22912);
var G__22914 = cljs.core.first(seq22912__$1);
var seq22912__$2 = cljs.core.next(seq22912__$1);
var G__22915 = cljs.core.first(seq22912__$2);
var seq22912__$3 = cljs.core.next(seq22912__$2);
var G__22916 = cljs.core.first(seq22912__$3);
var seq22912__$4 = cljs.core.next(seq22912__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__22913,G__22914,G__22915,G__22916,seq22912__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__8796__auto__ = cljs.core.list_QMARK_(x);
if(and__8796__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__10133__auto___22947 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___22948 = arguments.length;
var i__10088__auto___22949 = (0);
while(true){
if((i__10088__auto___22949 < len__10087__auto___22948)){
args__10094__auto__.push((arguments[i__10088__auto___22949]));

var G__22950 = (i__10088__auto___22949 + (1));
i__10088__auto___22949 = G__22950;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (esym,default$,env){
return (function (m,p__22935){
var vec__22936 = p__22935;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22936,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22936,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22936,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__9762__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__22936,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (esym,default$,env,pairs,tests){
return (function (p1__22927_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__22927_SHARP_);
});})(esym,default$,env,pairs,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__22928_SHARP_){
if(cljs.core.seq_QMARK_(p1__22928_SHARP_)){
return cljs.core.vec(p1__22928_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22928_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__22929_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22929_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__22930_SHARP_){
if(cljs.core.seq_QMARK_(p1__22930_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__22930_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__22930_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (esym,default$,env,pairs,tests){
return (function (p__22943){
var vec__22944 = p__22943;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9762__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq22931){
var G__22932 = cljs.core.first(seq22931);
var seq22931__$1 = cljs.core.next(seq22931);
var G__22933 = cljs.core.first(seq22931__$1);
var seq22931__$2 = cljs.core.next(seq22931__$1);
var G__22934 = cljs.core.first(seq22931__$2);
var seq22931__$3 = cljs.core.next(seq22931__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__22932,G__22933,G__22934,seq22931__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__10133__auto___22951 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__10133__auto___22954 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__22953 = arguments.length;
switch (G__22953) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__9762__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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

var ret__10133__auto___22992 = /**
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__22961){
var vec__22962 = p__22961;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22962,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__22993__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__22993 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__22994__i = 0, G__22994__a = new Array(arguments.length -  0);
while (G__22994__i < G__22994__a.length) {G__22994__a[G__22994__i] = arguments[G__22994__i + 0]; ++G__22994__i;}
  msg = new cljs.core.IndexedSeq(G__22994__a,0,null);
} 
return G__22993__delegate.call(this,msg);};
G__22993.cljs$lang$maxFixedArity = 0;
G__22993.cljs$lang$applyTo = (function (arglist__22995){
var msg = cljs.core.seq(arglist__22995);
return G__22993__delegate(msg);
});
G__22993.cljs$core$IFn$_invoke$arity$variadic = G__22993__delegate;
return G__22993;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__22965){
var vec__22966 = p__22965;
var seq__22967 = cljs.core.seq(vec__22966);
var first__22968 = cljs.core.first(seq__22967);
var seq__22967__$1 = cljs.core.next(seq__22967);
var vec__22969 = first__22968;
var seq__22970 = cljs.core.seq(vec__22969);
var first__22971 = cljs.core.first(seq__22970);
var seq__22970__$1 = cljs.core.next(seq__22970);
var bind = first__22971;
var first__22971__$1 = cljs.core.first(seq__22970__$1);
var seq__22970__$2 = cljs.core.next(seq__22970__$1);
var expr = first__22971__$1;
var mod_pairs = seq__22970__$2;
var vec__22972 = seq__22967__$1;
var vec__22975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22972,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(1),null);
var next_groups = vec__22972;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__22966,seq__22967,first__22968,seq__22967__$1,vec__22969,seq__22970,first__22971,seq__22970__$1,bind,first__22971__$1,seq__22970__$2,expr,mod_pairs,vec__22972,vec__22975,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__22978){
var vec__22979 = p__22978;
var seq__22980 = cljs.core.seq(vec__22979);
var first__22981 = cljs.core.first(seq__22980);
var seq__22980__$1 = cljs.core.next(seq__22980);
var vec__22982 = first__22981;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22982,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22982,(1),null);
var pair = vec__22982;
var etc = seq__22980__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__22956__auto__","iterys__22956__auto__",1888593880,null)),(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__22957__auto__","fs__22957__auto__",-346513885,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__22956__auto__","iterys__22956__auto__",1888593880,null)),(function (){var x__9762__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__22957__auto__","fs__22957__auto__",-346513885,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__22957__auto__","fs__22957__auto__",-346513885,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9762__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__22966,seq__22967,first__22968,seq__22967__$1,vec__22969,seq__22970,first__22971,seq__22970__$1,bind,first__22971__$1,seq__22970__$2,expr,mod_pairs,vec__22972,vec__22975,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__22966,seq__22967,first__22968,seq__22967__$1,vec__22969,seq__22970,first__22971,seq__22970__$1,bind,first__22971__$1,seq__22970__$2,expr,mod_pairs,vec__22972,vec__22975,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__22985){
var vec__22986 = p__22985;
var seq__22987 = cljs.core.seq(vec__22986);
var first__22988 = cljs.core.first(seq__22987);
var seq__22987__$1 = cljs.core.next(seq__22987);
var vec__22989 = first__22988;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22989,(1),null);
var pair = vec__22989;
var etc = seq__22987__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__22966,seq__22967,first__22968,seq__22967__$1,vec__22969,seq__22970,first__22971,seq__22970__$1,bind,first__22971__$1,seq__22970__$2,expr,mod_pairs,vec__22972,vec__22975,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22958__auto__","c__22958__auto__",-1418357299,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/.boot/cache/tmp/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/18bi/71hf6z/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null))], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__22959__auto__","size__22959__auto__",1117484558,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22958__auto__","c__22958__auto__",-1418357299,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__22959__auto__","size__22959__auto__",1117484558,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__22959__auto__","size__22959__auto__",1117484558,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22958__auto__","c__22958__auto__",-1418357299,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__22960__auto__","iter__22960__auto__",1284587588,null)),(function (){var x__9762__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__22960__auto__","iter__22960__auto__",1284587588,null)),(function (){var x__9762__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__10133__auto___23001 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23002 = arguments.length;
var i__10088__auto___23003 = (0);
while(true){
if((i__10088__auto___23003 < len__10087__auto___23002)){
args__10094__auto__.push((arguments[i__10088__auto___23003]));

var G__23004 = (i__10088__auto___23003 + (1));
i__10088__auto___23003 = G__23004;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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
var G__23005__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__23005 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__23006__i = 0, G__23006__a = new Array(arguments.length -  0);
while (G__23006__i < G__23006__a.length) {G__23006__a[G__23006__i] = arguments[G__23006__i + 0]; ++G__23006__i;}
  msg = new cljs.core.IndexedSeq(G__23006__a,0,null);
} 
return G__23005__delegate.call(this,msg);};
G__23005.cljs$lang$maxFixedArity = 0;
G__23005.cljs$lang$applyTo = (function (arglist__23007){
var msg = cljs.core.seq(arglist__23007);
return G__23005__delegate(msg);
});
G__23005.cljs$core$IFn$_invoke$arity$variadic = G__23005__delegate;
return G__23005;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair((0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair((1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk((1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22996__auto__","c__22996__auto__",989623600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22996__auto__","c__22996__auto__",989623600,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22996__auto__","c__22996__auto__",989623600,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq22997){
var G__22998 = cljs.core.first(seq22997);
var seq22997__$1 = cljs.core.next(seq22997);
var G__22999 = cljs.core.first(seq22997__$1);
var seq22997__$2 = cljs.core.next(seq22997__$1);
var G__23000 = cljs.core.first(seq22997__$2);
var seq22997__$3 = cljs.core.next(seq22997__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__22998,G__22999,G__23000,seq22997__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__10133__auto___23011 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23012 = arguments.length;
var i__10088__auto___23013 = (0);
while(true){
if((i__10088__auto___23013 < len__10087__auto___23012)){
args__10094__auto__.push((arguments[i__10088__auto___23013]));

var G__23014 = (i__10088__auto___23013 + (1));
i__10088__auto___23013 = G__23014;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq23008){
var G__23009 = cljs.core.first(seq23008);
var seq23008__$1 = cljs.core.next(seq23008);
var G__23010 = cljs.core.first(seq23008__$1);
var seq23008__$2 = cljs.core.next(seq23008__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__23009,G__23010,seq23008__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__10133__auto___23025 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__23024 = arguments.length;
switch (G__23024) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23027 = arguments.length;
var i__10088__auto___23028 = (0);
while(true){
if((i__10088__auto___23028 < len__10087__auto___23027)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23028]));

var G__23029 = (i__10088__auto___23028 + (1));
i__10088__auto___23028 = G__23029;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__23015__auto__","dims__23015__auto__",-886879127,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__23016__auto__","dimarray__23016__auto__",1267016711,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23017__auto__","i__23017__auto__",1925336088,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__23016__auto__","dimarray__23016__auto__",1267016711,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__23016__auto__","dimarray__23016__auto__",1267016711,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23017__auto__","i__23017__auto__",1925336088,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__23015__auto__","dims__23015__auto__",-886879127,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__23016__auto__","dimarray__23016__auto__",1267016711,null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq23019){
var G__23020 = cljs.core.first(seq23019);
var seq23019__$1 = cljs.core.next(seq23019);
var G__23021 = cljs.core.first(seq23019__$1);
var seq23019__$2 = cljs.core.next(seq23019__$1);
var G__23022 = cljs.core.first(seq23019__$2);
var seq23019__$3 = cljs.core.next(seq23019__$2);
var G__23023 = cljs.core.first(seq23019__$3);
var seq23019__$4 = cljs.core.next(seq23019__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__23020,G__23021,G__23022,G__23023,seq23019__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__10133__auto___23038 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__23036 = arguments.length;
switch (G__23036) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23040 = arguments.length;
var i__10088__auto___23041 = (0);
while(true){
if((i__10088__auto___23041 < len__10087__auto___23040)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23041]));

var G__23042 = (i__10088__auto___23041 + (1));
i__10088__auto___23041 = G__23042;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_23037 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_23037;
}})()))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23030__auto__","x__23030__auto__",-1578023563,null)),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23030__auto__","x__23030__auto__",-1578023563,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq23032){
var G__23033 = cljs.core.first(seq23032);
var seq23032__$1 = cljs.core.next(seq23032);
var G__23034 = cljs.core.first(seq23032__$1);
var seq23032__$2 = cljs.core.next(seq23032__$1);
var G__23035 = cljs.core.first(seq23032__$2);
var seq23032__$3 = cljs.core.next(seq23032__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__23033,G__23034,G__23035,seq23032__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__10133__auto___23048 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__23047 = arguments.length;
switch (G__23047) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23050 = arguments.length;
var i__10088__auto___23051 = (0);
while(true){
if((i__10088__auto___23051 < len__10087__auto___23050)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23051]));

var G__23052 = (i__10088__auto___23051 + (1));
i__10088__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq23044){
var G__23045 = cljs.core.first(seq23044);
var seq23044__$1 = cljs.core.next(seq23044);
var G__23046 = cljs.core.first(seq23044__$1);
var seq23044__$2 = cljs.core.next(seq23044__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__23045,G__23046,seq23044__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__10133__auto___23062 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__23059 = arguments.length;
switch (G__23059) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23064 = arguments.length;
var i__10088__auto___23065 = (0);
while(true){
if((i__10088__auto___23065 < len__10087__auto___23064)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23065]));

var G__23066 = (i__10088__auto___23065 + (1));
i__10088__auto___23065 = G__23066;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__23053_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23053_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__23054_SHARP_){
var _STAR_cljs_warnings_STAR_23061 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__23054_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_23061;
}});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq23056){
var G__23057 = cljs.core.first(seq23056);
var seq23056__$1 = cljs.core.next(seq23056);
var G__23058 = cljs.core.first(seq23056__$1);
var seq23056__$2 = cljs.core.next(seq23056__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__23057,G__23058,seq23056__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__10133__auto___23072 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__23071 = arguments.length;
switch (G__23071) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23074 = arguments.length;
var i__10088__auto___23075 = (0);
while(true){
if((i__10088__auto___23075 < len__10087__auto___23074)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23075]));

var G__23076 = (i__10088__auto___23075 + (1));
i__10088__auto___23075 = G__23076;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq23068){
var G__23069 = cljs.core.first(seq23068);
var seq23068__$1 = cljs.core.next(seq23068);
var G__23070 = cljs.core.first(seq23068__$1);
var seq23068__$2 = cljs.core.next(seq23068__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__23069,G__23070,seq23068__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__10133__auto___23086 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__23083 = arguments.length;
switch (G__23083) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___23088 = arguments.length;
var i__10088__auto___23089 = (0);
while(true){
if((i__10088__auto___23089 < len__10087__auto___23088)){
args_arr__10110__auto__.push((arguments[i__10088__auto___23089]));

var G__23090 = (i__10088__auto___23089 + (1));
i__10088__auto___23089 = G__23090;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__23077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23077_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23078_SHARP_){
var _STAR_cljs_warnings_STAR_23085 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__23078_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_23085;
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq23080){
var G__23081 = cljs.core.first(seq23080);
var seq23080__$1 = cljs.core.next(seq23080);
var G__23082 = cljs.core.first(seq23080__$1);
var seq23080__$2 = cljs.core.next(seq23080__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__23081,G__23082,seq23080__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__10133__auto___23106 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23107 = arguments.length;
var i__10088__auto___23108 = (0);
while(true){
if((i__10088__auto___23108 < len__10087__auto___23107)){
args__10094__auto__.push((arguments[i__10088__auto___23108]));

var G__23109 = (i__10088__auto___23108 + (1));
i__10088__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__23094){
var vec__23095 = p__23094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23095,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23095,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f(k));
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__23098){
var vec__23099 = p__23098;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23099,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23099,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__23102){
var vec__23103 = p__23102;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq23091){
var G__23092 = cljs.core.first(seq23091);
var seq23091__$1 = cljs.core.next(seq23091);
var G__23093 = cljs.core.first(seq23091__$1);
var seq23091__$2 = cljs.core.next(seq23091__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__23092,G__23093,seq23091__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__10133__auto___23110 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__10133__auto___23113 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__23111__auto__","a__23111__auto__",-1670274668,null)),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__23112__auto__","l__23112__auto__",-46265581,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__23111__auto__","a__23111__auto__",-1670274668,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__23111__auto__","a__23111__auto__",-1670274668,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__23112__auto__","l__23112__auto__",-46265581,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__10133__auto___23116 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__23114__auto__","a__23114__auto__",1939136447,null)),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__23115__auto__","l__23115__auto__",2037749635,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__23114__auto__","a__23114__auto__",1939136447,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__23115__auto__","l__23115__auto__",2037749635,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__10133__auto___23122 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23123 = arguments.length;
var i__10088__auto___23124 = (0);
while(true){
if((i__10088__auto___23124 < len__10087__auto___23123)){
args__10094__auto__.push((arguments[i__10088__auto___23124]));

var G__23125 = (i__10088__auto___23124 + (1));
i__10088__auto___23124 = G__23125;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__23117__auto__","n__23117__auto__",2023365013,null)),(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__23117__auto__","n__23117__auto__",2023365013,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq23118){
var G__23119 = cljs.core.first(seq23118);
var seq23118__$1 = cljs.core.next(seq23118);
var G__23120 = cljs.core.first(seq23118__$1);
var seq23118__$2 = cljs.core.next(seq23118__$1);
var G__23121 = cljs.core.first(seq23118__$2);
var seq23118__$3 = cljs.core.next(seq23118__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__23119,G__23120,G__23121,seq23118__$3);
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
var args__10094__auto__ = [];
var len__10087__auto___23129 = arguments.length;
var i__10088__auto___23130 = (0);
while(true){
if((i__10088__auto___23130 < len__10087__auto___23129)){
args__10094__auto__.push((arguments[i__10088__auto___23130]));

var G__23131 = (i__10088__auto___23130 + (1));
i__10088__auto___23130 = G__23131;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23126_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23126_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq23127){
var G__23128 = cljs.core.first(seq23127);
var seq23127__$1 = cljs.core.next(seq23127);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__23128,seq23127__$1);
});

var ret__10133__auto___23141 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___23142 = arguments.length;
var i__10088__auto___23143 = (0);
while(true){
if((i__10088__auto___23143 < len__10087__auto___23142)){
args__10094__auto__.push((arguments[i__10088__auto___23143]));

var G__23144 = (i__10088__auto___23143 + (1));
i__10088__auto___23143 = G__23144;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
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
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__23132__auto__","method-table__23132__auto__",1722336346,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__23133__auto__","prefer-table__23133__auto__",775058258,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__23134__auto__","method-cache__23134__auto__",-1579291423,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__23135__auto__","cached-hierarchy__23135__auto__",-60203332,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__23136__auto__","hierarchy__23136__auto__",1640292350,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9762__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9762__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__23136__auto__","hierarchy__23136__auto__",1640292350,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__23132__auto__","method-table__23132__auto__",1722336346,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__23133__auto__","prefer-table__23133__auto__",775058258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__23134__auto__","method-cache__23134__auto__",-1579291423,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__23135__auto__","cached-hierarchy__23135__auto__",-60203332,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq23137){
var G__23138 = cljs.core.first(seq23137);
var seq23137__$1 = cljs.core.next(seq23137);
var G__23139 = cljs.core.first(seq23137__$1);
var seq23137__$2 = cljs.core.next(seq23137__$1);
var G__23140 = cljs.core.first(seq23137__$2);
var seq23137__$3 = cljs.core.next(seq23137__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__23138,G__23139,G__23140,seq23137__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__10133__auto___23150 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23151 = arguments.length;
var i__10088__auto___23152 = (0);
while(true){
if((i__10088__auto___23152 < len__10087__auto___23151)){
args__10094__auto__.push((arguments[i__10088__auto___23152]));

var G__23153 = (i__10088__auto___23152 + (1));
i__10088__auto___23152 = G__23153;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq23145){
var G__23146 = cljs.core.first(seq23145);
var seq23145__$1 = cljs.core.next(seq23145);
var G__23147 = cljs.core.first(seq23145__$1);
var seq23145__$2 = cljs.core.next(seq23145__$1);
var G__23148 = cljs.core.first(seq23145__$2);
var seq23145__$3 = cljs.core.next(seq23145__$2);
var G__23149 = cljs.core.first(seq23145__$3);
var seq23145__$4 = cljs.core.next(seq23145__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__23146,G__23147,G__23148,G__23149,seq23145__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__10133__auto___23156 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__23154__auto__","start__23154__auto__",842914099,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__23155__auto__","ret__23155__auto__",-1813712394,null)),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__23154__auto__","start__23154__auto__",842914099,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__23155__auto__","ret__23155__auto__",-1813712394,null))], 0))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__10133__auto___23171 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23172 = arguments.length;
var i__10088__auto___23173 = (0);
while(true){
if((i__10088__auto___23173 < len__10087__auto___23172)){
args__10094__auto__.push((arguments[i__10088__auto___23173]));

var G__23174 = (i__10088__auto___23173 + (1));
i__10088__auto___23173 = G__23174;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((5) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10095__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__23168){
var map__23169 = p__23168;
var map__23169__$1 = ((((!((map__23169 == null)))?((((map__23169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23169):map__23169);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23169__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__23157__auto__","start__23157__auto__",-948404863,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__23158__auto__","ret__23158__auto__",962891476,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___23159__auto__","___23159__auto__",-92155391,null)),(function (){var x__9762__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__23160__auto__","end__23160__auto__",-450127416,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__23161__auto__","elapsed__23161__auto__",-581208621,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__23160__auto__","end__23160__auto__",-450127416,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__23157__auto__","start__23157__auto__",-948404863,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9762__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__9762__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__9762__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__23161__auto__","elapsed__23161__auto__",-581208621,null)),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq23162){
var G__23163 = cljs.core.first(seq23162);
var seq23162__$1 = cljs.core.next(seq23162);
var G__23164 = cljs.core.first(seq23162__$1);
var seq23162__$2 = cljs.core.next(seq23162__$1);
var G__23165 = cljs.core.first(seq23162__$2);
var seq23162__$3 = cljs.core.next(seq23162__$2);
var G__23166 = cljs.core.first(seq23162__$3);
var seq23162__$4 = cljs.core.next(seq23162__$3);
var G__23167 = cljs.core.first(seq23162__$4);
var seq23162__$5 = cljs.core.next(seq23162__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__23163,G__23164,G__23165,G__23166,G__23167,seq23162__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__23176 = arguments.length;
switch (G__23176) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = (function (){var G__23180 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__23180) : cljs.core$macros.cs(G__23180));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__10133__auto___23182 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__23183_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23183_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = new_arg_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = proto_prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = proto_inv;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__23184__auto__","arr__23184__auto__",832621447,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__23185__auto__","s__23185__auto__",1585547382,null)),(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__23185__auto__","s__23185__auto__",1585547382,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__23184__auto__","arr__23184__auto__",832621447,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__23185__auto__","s__23185__auto__",1585547382,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__23185__auto__","s__23185__auto__",1585547382,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__23184__auto__","arr__23184__auto__",832621447,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):(function (){var G__23195 = f;
var G__23196 = (num_args + (1));
var G__23197 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__23195,G__23196,G__23197) : cljs.core$macros.gen_apply_to_simple_helper(G__23195,G__23196,G__23197));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___23198 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__10133__auto___23204 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23205 = arguments.length;
var i__10088__auto___23206 = (0);
while(true){
if((i__10088__auto___23206 < len__10087__auto___23205)){
args__10094__auto__.push((arguments[i__10088__auto___23206]));

var G__23207 = (i__10088__auto___23206 + (1));
i__10088__auto___23206 = G__23207;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__23199__auto__","sb__23199__auto__",2060041437,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23200__auto__","x__23200__auto__",-1129521558,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__23199__auto__","sb__23199__auto__",2060041437,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23200__auto__","x__23200__auto__",-1129521558,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__23199__auto__","sb__23199__auto__",2060041437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq23201){
var G__23202 = cljs.core.first(seq23201);
var seq23201__$1 = cljs.core.next(seq23201);
var G__23203 = cljs.core.first(seq23201__$1);
var seq23201__$2 = cljs.core.next(seq23201__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__23202,G__23203,seq23201__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__10133__auto___23212 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23213 = arguments.length;
var i__10088__auto___23214 = (0);
while(true){
if((i__10088__auto___23214 < len__10087__auto___23213)){
args__10094__auto__.push((arguments[i__10088__auto___23214]));

var G__23215 = (i__10088__auto___23214 + (1));
i__10088__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23208_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = p1__23208_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq23209){
var G__23210 = cljs.core.first(seq23209);
var seq23209__$1 = cljs.core.next(seq23209);
var G__23211 = cljs.core.first(seq23209__$1);
var seq23209__$2 = cljs.core.next(seq23209__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__23210,G__23211,seq23209__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__10133__auto___23216 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__10133__auto___23218 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9762__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23217__auto__","this__23217__auto__",-1357299281,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23217__auto__","this__23217__auto__",-1357299281,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__10133__auto___23235 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__23227){
var vec__23228 = p__23227;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23228,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23228,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9762__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__23231){
var vec__23232 = p__23231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232,(1),null);
return cljs.core.not(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__10133__auto___23244 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__23240){
var vec__23241 = p__23240;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23241,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23241,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9762__auto__ = cljs.core.name(ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__10133__auto___23253 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__23249){
var vec__23250 = p__23249;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9762__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__10133__auto___23254 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9762__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__10133__auto___23260 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23261 = arguments.length;
var i__10088__auto___23262 = (0);
while(true){
if((i__10088__auto___23262 < len__10087__auto___23261)){
args__10094__auto__.push((arguments[i__10088__auto___23262]));

var G__23263 = (i__10088__auto___23262 + (1));
i__10088__auto___23262 = G__23263;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9762__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9762__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq23255){
var G__23256 = cljs.core.first(seq23255);
var seq23255__$1 = cljs.core.next(seq23255);
var G__23257 = cljs.core.first(seq23255__$1);
var seq23255__$2 = cljs.core.next(seq23255__$1);
var G__23258 = cljs.core.first(seq23255__$2);
var seq23255__$3 = cljs.core.next(seq23255__$2);
var G__23259 = cljs.core.first(seq23255__$3);
var seq23255__$4 = cljs.core.next(seq23255__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23256,G__23257,G__23258,G__23259,seq23255__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__10133__auto___23268 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23269 = arguments.length;
var i__10088__auto___23270 = (0);
while(true){
if((i__10088__auto___23270 < len__10087__auto___23269)){
args__10094__auto__.push((arguments[i__10088__auto___23270]));

var G__23271 = (i__10088__auto___23270 + (1));
i__10088__auto___23270 = G__23271;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq23264){
var G__23265 = cljs.core.first(seq23264);
var seq23264__$1 = cljs.core.next(seq23264);
var G__23266 = cljs.core.first(seq23264__$1);
var seq23264__$2 = cljs.core.next(seq23264__$1);
var G__23267 = cljs.core.first(seq23264__$2);
var seq23264__$3 = cljs.core.next(seq23264__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__23265,G__23266,G__23267,seq23264__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__10133__auto___23275 = (function (){
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
 *   :refer takes a list of symbols to refer from the namespace.
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
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23276 = arguments.length;
var i__10088__auto___23277 = (0);
while(true){
if((i__10088__auto___23277 < len__10087__auto___23276)){
args__10094__auto__.push((arguments[i__10088__auto___23277]));

var G__23278 = (i__10088__auto___23277 + (1));
i__10088__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq23272){
var G__23273 = cljs.core.first(seq23272);
var seq23272__$1 = cljs.core.next(seq23272);
var G__23274 = cljs.core.first(seq23272__$1);
var seq23272__$2 = cljs.core.next(seq23272__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__23273,G__23274,seq23272__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__10133__auto___23282 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23283 = arguments.length;
var i__10088__auto___23284 = (0);
while(true){
if((i__10088__auto___23284 < len__10087__auto___23283)){
args__10094__auto__.push((arguments[i__10088__auto___23284]));

var G__23285 = (i__10088__auto___23284 + (1));
i__10088__auto___23284 = G__23285;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq23279){
var G__23280 = cljs.core.first(seq23279);
var seq23279__$1 = cljs.core.next(seq23279);
var G__23281 = cljs.core.first(seq23279__$1);
var seq23279__$2 = cljs.core.next(seq23279__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__23280,G__23281,seq23279__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__10133__auto___23289 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___23290 = arguments.length;
var i__10088__auto___23291 = (0);
while(true){
if((i__10088__auto___23291 < len__10087__auto___23290)){
args__10094__auto__.push((arguments[i__10088__auto___23291]));

var G__23292 = (i__10088__auto___23291 + (1));
i__10088__auto___23291 = G__23292;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq23286){
var G__23287 = cljs.core.first(seq23286);
var seq23286__$1 = cljs.core.next(seq23286);
var G__23288 = cljs.core.first(seq23286__$1);
var seq23286__$2 = cljs.core.next(seq23286__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__23287,G__23288,seq23286__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__10133__auto___23296 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23297 = arguments.length;
var i__10088__auto___23298 = (0);
while(true){
if((i__10088__auto___23298 < len__10087__auto___23297)){
args__10094__auto__.push((arguments[i__10088__auto___23298]));

var G__23299 = (i__10088__auto___23298 + (1));
i__10088__auto___23298 = G__23299;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq23293){
var G__23294 = cljs.core.first(seq23293);
var seq23293__$1 = cljs.core.next(seq23293);
var G__23295 = cljs.core.first(seq23293__$1);
var seq23293__$2 = cljs.core.next(seq23293__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__23294,G__23295,seq23293__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__10133__auto___23303 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__10094__auto__ = [];
var len__10087__auto___23304 = arguments.length;
var i__10088__auto___23305 = (0);
while(true){
if((i__10088__auto___23305 < len__10087__auto___23304)){
args__10094__auto__.push((arguments[i__10088__auto___23305]));

var G__23306 = (i__10088__auto___23305 + (1));
i__10088__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq23300){
var G__23301 = cljs.core.first(seq23300);
var seq23300__$1 = cljs.core.next(seq23300);
var G__23302 = cljs.core.first(seq23300__$1);
var seq23300__$2 = cljs.core.next(seq23300__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__23301,G__23302,seq23300__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__10133__auto___23310 = (function (){
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
var args__10094__auto__ = [];
var len__10087__auto___23311 = arguments.length;
var i__10088__auto___23312 = (0);
while(true){
if((i__10088__auto___23312 < len__10087__auto___23311)){
args__10094__auto__.push((arguments[i__10088__auto___23312]));

var G__23313 = (i__10088__auto___23312 + (1));
i__10088__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq23307){
var G__23308 = cljs.core.first(seq23307);
var seq23307__$1 = cljs.core.next(seq23307);
var G__23309 = cljs.core.first(seq23307__$1);
var seq23307__$2 = cljs.core.next(seq23307__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__23308,G__23309,seq23307__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__10133__auto___23314 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__10133__auto___23315 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9762__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__10133__auto___23316 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__23317 = form_SINGLEQUOTE_;
var G__23318 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__23317;
form_SINGLEQUOTE_ = G__23318;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9762__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__8796__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__8796__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__23320 = arguments.length;
switch (G__23320) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__23321,solo){
var vec__23322 = p__23321;
var seq__23323 = cljs.core.seq(vec__23322);
var first__23324 = cljs.core.first(seq__23323);
var seq__23323__$1 = cljs.core.next(seq__23323);
var arglist = first__23324;
var body = seq__23323__$1;
var method = vec__23322;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/.boot/cache/tmp/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/18bi/71hf6z/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/.boot/cache/tmp/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/18bi/71hf6z/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});})(sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});})(sig,restarg,vec__23322,seq__23323,first__23324,seq__23323__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))):null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__10133__auto___23328 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__23326__auto__","len__23326__auto__",-469268654,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23327__auto__","i__23327__auto__",-1156330579,null)),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23327__auto__","i__23327__auto__",-1156330579,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__23326__auto__","len__23326__auto__",-469268654,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9762__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23327__auto__","i__23327__auto__",-1156330579,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__23327__auto__","i__23327__auto__",-1156330579,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__23331,emit_var_QMARK_){
var vec__23332 = p__23331;
var vec__23335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332,(0),null);
var seq__23336 = cljs.core.seq(vec__23335);
var first__23337 = cljs.core.first(seq__23336);
var seq__23336__$1 = cljs.core.next(seq__23336);
var arglist = first__23337;
var body = seq__23336__$1;
var method = vec__23335;
var fdecl = vec__23332;
var dest_args = ((function (vec__23332,vec__23335,seq__23336,first__23337,seq__23336__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23332,vec__23335,seq__23336,first__23337,seq__23336__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(vec__23332,vec__23335,seq__23336,first__23337,seq__23336__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__23332,vec__23335,seq__23336,first__23337,seq__23336__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9762__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23329__auto__","args__23329__auto__",-984611565,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23329__auto__","args__23329__auto__",-984611565,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__23330__auto__","argseq__23330__auto__",725105167,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9762__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23329__auto__","args__23329__auto__",-984611565,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/.boot/cache/tmp/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/18bi/71hf6z/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23329__auto__","args__23329__auto__",-984611565,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__23330__auto__","argseq__23330__auto__",725105167,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__23346){
var vec__23347 = p__23346;
var seq__23348 = cljs.core.seq(vec__23347);
var first__23349 = cljs.core.first(seq__23348);
var seq__23348__$1 = cljs.core.next(seq__23348);
var sig = first__23349;
var body = seq__23348__$1;
var method = vec__23347;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__23338_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__23338_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__23339_SHARP_){
return fixed_arity(rname,p1__23339_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(function (){var x__9762__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__23340__auto__","args-arr__23340__auto__",567931715,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__23340__auto__","args-arr__23340__auto__",567931715,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__23341__auto__","argseq__23341__auto__",1191104012,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9762__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/.boot/cache/tmp/private/tmp/lumo-20180216-57427-1l36u4u/lumo-1.8.0/18bi/71hf6z/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,79),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__23340__auto__","args-arr__23340__auto__",567931715,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__23341__auto__","argseq__23341__auto__",1191104012,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__9762__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj((function (){var x__9762__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__23350__i = 0, G__23350__a = new Array(arguments.length -  3);
while (G__23350__i < G__23350__a.length) {G__23350__a[G__23350__i] = arguments[G__23350__i + 3]; ++G__23350__i;}
  fdecl = new cljs.core.IndexedSeq(G__23350__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__23351){
var _AMPERSAND_form = cljs.core.first(arglist__23351);
arglist__23351 = cljs.core.next(arglist__23351);
var _AMPERSAND_env = cljs.core.first(arglist__23351);
arglist__23351 = cljs.core.next(arglist__23351);
var name = cljs.core.first(arglist__23351);
var fdecl = cljs.core.rest(arglist__23351);
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
var args__10094__auto__ = [];
var len__10087__auto___23357 = arguments.length;
var i__10088__auto___23358 = (0);
while(true){
if((i__10088__auto___23358 < len__10087__auto___23357)){
args__10094__auto__.push((arguments[i__10088__auto___23358]));

var G__23359 = (i__10088__auto___23358 + (1));
i__10088__auto___23358 = G__23359;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__23360 = cljs.core.cons(f,p);
var G__23361 = cljs.core.next(args__$1);
p = G__23360;
args__$1 = G__23361;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__23362 = cljs.core.cons(f,p);
var G__23363 = cljs.core.next(args__$1);
p = G__23362;
args__$1 = G__23363;
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
var G__23364 = cljs.core.next(fd);
fd = G__23364;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__23365 = cljs.core.next(fd);
fd = G__23365;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__9762__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
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
var G__23366 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__23367 = cljs.core.next(ds);
acc = G__23366;
ds = G__23367;
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
var G__23368 = cljs.core.next(p);
var G__23369 = cljs.core.cons(cljs.core.first(p),d);
p = G__23368;
d = G__23369;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__23352__auto__","ret__23352__auto__",-11475116,null)),(function (){var x__9762__auto__ = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__23352__auto__","ret__23352__auto__",-11475116,null))], 0))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq23353){
var G__23354 = cljs.core.first(seq23353);
var seq23353__$1 = cljs.core.next(seq23353);
var G__23355 = cljs.core.first(seq23353__$1);
var seq23353__$2 = cljs.core.next(seq23353__$1);
var G__23356 = cljs.core.first(seq23353__$2);
var seq23353__$3 = cljs.core.next(seq23353__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__23354,G__23355,G__23356,seq23353__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__10133__auto___23374 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__23370 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e23373){var e = e23373;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;

