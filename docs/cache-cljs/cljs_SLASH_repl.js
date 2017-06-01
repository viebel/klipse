// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22621){
var map__22654 = p__22621;
var map__22654__$1 = ((((!((map__22654 == null)))?((((map__22654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22654):map__22654);
var m = map__22654__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22660_22713 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22661_22714 = null;
var count__22662_22715 = (0);
var i__22663_22716 = (0);
while(true){
if((i__22663_22716 < count__22662_22715)){
var f_22717 = chunk__22661_22714.cljs$core$IIndexed$_nth$arity$2(null,i__22663_22716);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_22717], 0));

var G__22718 = seq__22660_22713;
var G__22719 = chunk__22661_22714;
var G__22720 = count__22662_22715;
var G__22721 = (i__22663_22716 + (1));
seq__22660_22713 = G__22718;
chunk__22661_22714 = G__22719;
count__22662_22715 = G__22720;
i__22663_22716 = G__22721;
continue;
} else {
var temp__6738__auto___22722 = cljs.core.seq(seq__22660_22713);
if(temp__6738__auto___22722){
var seq__22660_22723__$1 = temp__6738__auto___22722;
if(cljs.core.chunked_seq_QMARK_(seq__22660_22723__$1)){
var c__10350__auto___22724 = cljs.core.chunk_first(seq__22660_22723__$1);
var G__22725 = cljs.core.chunk_rest(seq__22660_22723__$1);
var G__22726 = c__10350__auto___22724;
var G__22727 = cljs.core.count(c__10350__auto___22724);
var G__22728 = (0);
seq__22660_22713 = G__22725;
chunk__22661_22714 = G__22726;
count__22662_22715 = G__22727;
i__22663_22716 = G__22728;
continue;
} else {
var f_22729 = cljs.core.first(seq__22660_22723__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_22729], 0));

var G__22730 = cljs.core.next(seq__22660_22723__$1);
var G__22731 = null;
var G__22732 = (0);
var G__22733 = (0);
seq__22660_22713 = G__22730;
chunk__22661_22714 = G__22731;
count__22662_22715 = G__22732;
i__22663_22716 = G__22733;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22734 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_22734], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22734)))?cljs.core.second(arglists_22734):arglists_22734)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22672_22738 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22673_22739 = null;
var count__22674_22740 = (0);
var i__22675_22741 = (0);
while(true){
if((i__22675_22741 < count__22674_22740)){
var vec__22676_22742 = chunk__22673_22739.cljs$core$IIndexed$_nth$arity$2(null,i__22675_22741);
var name_22743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22676_22742,(0),null);
var map__22679_22744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22676_22742,(1),null);
var map__22679_22745__$1 = ((((!((map__22679_22744 == null)))?((((map__22679_22744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22679_22744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22679_22744):map__22679_22744);
var doc_22746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679_22745__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679_22745__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_22743], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_22747], 0));

if(cljs.core.truth_(doc_22746)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_22746], 0));
} else {
}

var G__22748 = seq__22672_22738;
var G__22749 = chunk__22673_22739;
var G__22750 = count__22674_22740;
var G__22751 = (i__22675_22741 + (1));
seq__22672_22738 = G__22748;
chunk__22673_22739 = G__22749;
count__22674_22740 = G__22750;
i__22675_22741 = G__22751;
continue;
} else {
var temp__6738__auto___22752 = cljs.core.seq(seq__22672_22738);
if(temp__6738__auto___22752){
var seq__22672_22753__$1 = temp__6738__auto___22752;
if(cljs.core.chunked_seq_QMARK_(seq__22672_22753__$1)){
var c__10350__auto___22754 = cljs.core.chunk_first(seq__22672_22753__$1);
var G__22755 = cljs.core.chunk_rest(seq__22672_22753__$1);
var G__22756 = c__10350__auto___22754;
var G__22757 = cljs.core.count(c__10350__auto___22754);
var G__22758 = (0);
seq__22672_22738 = G__22755;
chunk__22673_22739 = G__22756;
count__22674_22740 = G__22757;
i__22675_22741 = G__22758;
continue;
} else {
var vec__22690_22759 = cljs.core.first(seq__22672_22753__$1);
var name_22760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22690_22759,(0),null);
var map__22693_22761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22690_22759,(1),null);
var map__22693_22762__$1 = ((((!((map__22693_22761 == null)))?((((map__22693_22761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22693_22761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22693_22761):map__22693_22761);
var doc_22763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_22762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693_22762__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_22760], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_22764], 0));

if(cljs.core.truth_(doc_22763)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_22763], 0));
} else {
}

var G__22765 = cljs.core.next(seq__22672_22753__$1);
var G__22766 = null;
var G__22767 = (0);
var G__22768 = (0);
seq__22672_22738 = G__22765;
chunk__22673_22739 = G__22766;
count__22674_22740 = G__22767;
i__22675_22741 = G__22768;
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
var temp__6738__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__22702 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22703 = null;
var count__22704 = (0);
var i__22705 = (0);
while(true){
if((i__22705 < count__22704)){
var role = chunk__22703.cljs$core$IIndexed$_nth$arity$2(null,i__22705);
var temp__6738__auto___22769__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6738__auto___22769__$1)){
var spec_22770 = temp__6738__auto___22769__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_22770)], 0));
} else {
}

var G__22774 = seq__22702;
var G__22775 = chunk__22703;
var G__22776 = count__22704;
var G__22777 = (i__22705 + (1));
seq__22702 = G__22774;
chunk__22703 = G__22775;
count__22704 = G__22776;
i__22705 = G__22777;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq(seq__22702);
if(temp__6738__auto____$1){
var seq__22702__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22702__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__22702__$1);
var G__22785 = cljs.core.chunk_rest(seq__22702__$1);
var G__22786 = c__10350__auto__;
var G__22787 = cljs.core.count(c__10350__auto__);
var G__22788 = (0);
seq__22702 = G__22785;
chunk__22703 = G__22786;
count__22704 = G__22787;
i__22705 = G__22788;
continue;
} else {
var role = cljs.core.first(seq__22702__$1);
var temp__6738__auto___22792__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6738__auto___22792__$2)){
var spec_22793 = temp__6738__auto___22792__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_22793)], 0));
} else {
}

var G__22798 = cljs.core.next(seq__22702__$1);
var G__22799 = null;
var G__22800 = (0);
var G__22801 = (0);
seq__22702 = G__22798;
chunk__22703 = G__22799;
count__22704 = G__22800;
i__22705 = G__22801;
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
