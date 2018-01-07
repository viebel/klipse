// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19567){
var map__19568 = p__19567;
var map__19568__$1 = ((((!((map__19568 == null)))?((((map__19568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19568):map__19568);
var m = map__19568__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19570_19602 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19571_19603 = null;
var count__19572_19604 = (0);
var i__19573_19605 = (0);
while(true){
if((i__19573_19605 < count__19572_19604)){
var f_19606 = chunk__19571_19603.cljs$core$IIndexed$_nth$arity$2(null,i__19573_19605);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19606], 0));

var G__19607 = seq__19570_19602;
var G__19608 = chunk__19571_19603;
var G__19609 = count__19572_19604;
var G__19610 = (i__19573_19605 + (1));
seq__19570_19602 = G__19607;
chunk__19571_19603 = G__19608;
count__19572_19604 = G__19609;
i__19573_19605 = G__19610;
continue;
} else {
var temp__5278__auto___19611 = cljs.core.seq(seq__19570_19602);
if(temp__5278__auto___19611){
var seq__19570_19612__$1 = temp__5278__auto___19611;
if(cljs.core.chunked_seq_QMARK_(seq__19570_19612__$1)){
var c__9683__auto___19613 = cljs.core.chunk_first(seq__19570_19612__$1);
var G__19616 = cljs.core.chunk_rest(seq__19570_19612__$1);
var G__19617 = c__9683__auto___19613;
var G__19618 = cljs.core.count(c__9683__auto___19613);
var G__19619 = (0);
seq__19570_19602 = G__19616;
chunk__19571_19603 = G__19617;
count__19572_19604 = G__19618;
i__19573_19605 = G__19619;
continue;
} else {
var f_19621 = cljs.core.first(seq__19570_19612__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19621], 0));

var G__19622 = cljs.core.next(seq__19570_19612__$1);
var G__19623 = null;
var G__19624 = (0);
var G__19625 = (0);
seq__19570_19602 = G__19622;
chunk__19571_19603 = G__19623;
count__19572_19604 = G__19624;
i__19573_19605 = G__19625;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19628 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19628], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19628)))?cljs.core.second(arglists_19628):arglists_19628)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19574_19630 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19575_19631 = null;
var count__19576_19632 = (0);
var i__19577_19633 = (0);
while(true){
if((i__19577_19633 < count__19576_19632)){
var vec__19578_19634 = chunk__19575_19631.cljs$core$IIndexed$_nth$arity$2(null,i__19577_19633);
var name_19635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19578_19634,(0),null);
var map__19581_19636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19578_19634,(1),null);
var map__19581_19637__$1 = ((((!((map__19581_19636 == null)))?((((map__19581_19636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19581_19636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19581_19636):map__19581_19636);
var doc_19638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581_19637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581_19637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19635], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19639], 0));

if(cljs.core.truth_(doc_19638)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19638], 0));
} else {
}

var G__19640 = seq__19574_19630;
var G__19641 = chunk__19575_19631;
var G__19642 = count__19576_19632;
var G__19643 = (i__19577_19633 + (1));
seq__19574_19630 = G__19640;
chunk__19575_19631 = G__19641;
count__19576_19632 = G__19642;
i__19577_19633 = G__19643;
continue;
} else {
var temp__5278__auto___19644 = cljs.core.seq(seq__19574_19630);
if(temp__5278__auto___19644){
var seq__19574_19645__$1 = temp__5278__auto___19644;
if(cljs.core.chunked_seq_QMARK_(seq__19574_19645__$1)){
var c__9683__auto___19647 = cljs.core.chunk_first(seq__19574_19645__$1);
var G__19649 = cljs.core.chunk_rest(seq__19574_19645__$1);
var G__19650 = c__9683__auto___19647;
var G__19651 = cljs.core.count(c__9683__auto___19647);
var G__19652 = (0);
seq__19574_19630 = G__19649;
chunk__19575_19631 = G__19650;
count__19576_19632 = G__19651;
i__19577_19633 = G__19652;
continue;
} else {
var vec__19584_19653 = cljs.core.first(seq__19574_19645__$1);
var name_19654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584_19653,(0),null);
var map__19587_19655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584_19653,(1),null);
var map__19587_19656__$1 = ((((!((map__19587_19655 == null)))?((((map__19587_19655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19587_19655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19587_19655):map__19587_19655);
var doc_19657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19587_19656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19587_19656__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19654], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19658], 0));

if(cljs.core.truth_(doc_19657)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19657], 0));
} else {
}

var G__19659 = cljs.core.next(seq__19574_19645__$1);
var G__19660 = null;
var G__19661 = (0);
var G__19662 = (0);
seq__19574_19630 = G__19659;
chunk__19575_19631 = G__19660;
count__19576_19632 = G__19661;
i__19577_19633 = G__19662;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19596 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19597 = null;
var count__19598 = (0);
var i__19599 = (0);
while(true){
if((i__19599 < count__19598)){
var role = chunk__19597.cljs$core$IIndexed$_nth$arity$2(null,i__19599);
var temp__5278__auto___19664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5278__auto___19664__$1)){
var spec_19665 = temp__5278__auto___19664__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_19665)], 0));
} else {
}

var G__19666 = seq__19596;
var G__19667 = chunk__19597;
var G__19668 = count__19598;
var G__19669 = (i__19599 + (1));
seq__19596 = G__19666;
chunk__19597 = G__19667;
count__19598 = G__19668;
i__19599 = G__19669;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq(seq__19596);
if(temp__5278__auto____$1){
var seq__19596__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19596__$1)){
var c__9683__auto__ = cljs.core.chunk_first(seq__19596__$1);
var G__19670 = cljs.core.chunk_rest(seq__19596__$1);
var G__19671 = c__9683__auto__;
var G__19672 = cljs.core.count(c__9683__auto__);
var G__19673 = (0);
seq__19596 = G__19670;
chunk__19597 = G__19671;
count__19598 = G__19672;
i__19599 = G__19673;
continue;
} else {
var role = cljs.core.first(seq__19596__$1);
var temp__5278__auto___19674__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5278__auto___19674__$2)){
var spec_19675 = temp__5278__auto___19674__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_19675)], 0));
} else {
}

var G__19676 = cljs.core.next(seq__19596__$1);
var G__19677 = null;
var G__19678 = (0);
var G__19679 = (0);
seq__19596 = G__19676;
chunk__19597 = G__19677;
count__19598 = G__19678;
i__19599 = G__19679;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
