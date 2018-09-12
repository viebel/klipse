// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21355){
var map__21356 = p__21355;
var map__21356__$1 = ((((!((map__21356 == null)))?((((map__21356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21356):map__21356);
var m = map__21356__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__21358_21380 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21359_21381 = null;
var count__21360_21382 = (0);
var i__21361_21383 = (0);
while(true){
if((i__21361_21383 < count__21360_21382)){
var f_21384 = chunk__21359_21381.cljs$core$IIndexed$_nth$arity$2(null,i__21361_21383);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21384], 0));

var G__21385 = seq__21358_21380;
var G__21386 = chunk__21359_21381;
var G__21387 = count__21360_21382;
var G__21388 = (i__21361_21383 + (1));
seq__21358_21380 = G__21385;
chunk__21359_21381 = G__21386;
count__21360_21382 = G__21387;
i__21361_21383 = G__21388;
continue;
} else {
var temp__5457__auto___21389 = cljs.core.seq(seq__21358_21380);
if(temp__5457__auto___21389){
var seq__21358_21390__$1 = temp__5457__auto___21389;
if(cljs.core.chunked_seq_QMARK_(seq__21358_21390__$1)){
var c__9739__auto___21391 = cljs.core.chunk_first(seq__21358_21390__$1);
var G__21392 = cljs.core.chunk_rest(seq__21358_21390__$1);
var G__21393 = c__9739__auto___21391;
var G__21394 = cljs.core.count(c__9739__auto___21391);
var G__21395 = (0);
seq__21358_21380 = G__21392;
chunk__21359_21381 = G__21393;
count__21360_21382 = G__21394;
i__21361_21383 = G__21395;
continue;
} else {
var f_21396 = cljs.core.first(seq__21358_21390__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21396], 0));

var G__21397 = cljs.core.next(seq__21358_21390__$1);
var G__21398 = null;
var G__21399 = (0);
var G__21400 = (0);
seq__21358_21380 = G__21397;
chunk__21359_21381 = G__21398;
count__21360_21382 = G__21399;
i__21361_21383 = G__21400;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21401 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8808__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21401], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21401)))?cljs.core.second(arglists_21401):arglists_21401)], 0));
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
var seq__21362_21402 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21363_21403 = null;
var count__21364_21404 = (0);
var i__21365_21405 = (0);
while(true){
if((i__21365_21405 < count__21364_21404)){
var vec__21366_21406 = chunk__21363_21403.cljs$core$IIndexed$_nth$arity$2(null,i__21365_21405);
var name_21407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366_21406,(0),null);
var map__21369_21408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366_21406,(1),null);
var map__21369_21409__$1 = ((((!((map__21369_21408 == null)))?((((map__21369_21408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21369_21408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21369_21408):map__21369_21408);
var doc_21410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21409__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21409__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21407], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21411], 0));

if(cljs.core.truth_(doc_21410)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21410], 0));
} else {
}

var G__21412 = seq__21362_21402;
var G__21413 = chunk__21363_21403;
var G__21414 = count__21364_21404;
var G__21415 = (i__21365_21405 + (1));
seq__21362_21402 = G__21412;
chunk__21363_21403 = G__21413;
count__21364_21404 = G__21414;
i__21365_21405 = G__21415;
continue;
} else {
var temp__5457__auto___21416 = cljs.core.seq(seq__21362_21402);
if(temp__5457__auto___21416){
var seq__21362_21417__$1 = temp__5457__auto___21416;
if(cljs.core.chunked_seq_QMARK_(seq__21362_21417__$1)){
var c__9739__auto___21418 = cljs.core.chunk_first(seq__21362_21417__$1);
var G__21419 = cljs.core.chunk_rest(seq__21362_21417__$1);
var G__21420 = c__9739__auto___21418;
var G__21421 = cljs.core.count(c__9739__auto___21418);
var G__21422 = (0);
seq__21362_21402 = G__21419;
chunk__21363_21403 = G__21420;
count__21364_21404 = G__21421;
i__21365_21405 = G__21422;
continue;
} else {
var vec__21371_21423 = cljs.core.first(seq__21362_21417__$1);
var name_21424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371_21423,(0),null);
var map__21374_21425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371_21423,(1),null);
var map__21374_21426__$1 = ((((!((map__21374_21425 == null)))?((((map__21374_21425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21374_21425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21374_21425):map__21374_21425);
var doc_21427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374_21426__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374_21426__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21424], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21428], 0));

if(cljs.core.truth_(doc_21427)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21427], 0));
} else {
}

var G__21429 = cljs.core.next(seq__21362_21417__$1);
var G__21430 = null;
var G__21431 = (0);
var G__21432 = (0);
seq__21362_21402 = G__21429;
chunk__21363_21403 = G__21430;
count__21364_21404 = G__21431;
i__21365_21405 = G__21432;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21376 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21377 = null;
var count__21378 = (0);
var i__21379 = (0);
while(true){
if((i__21379 < count__21378)){
var role = chunk__21377.cljs$core$IIndexed$_nth$arity$2(null,i__21379);
var temp__5457__auto___21433__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21433__$1)){
var spec_21434 = temp__5457__auto___21433__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21434)], 0));
} else {
}

var G__21435 = seq__21376;
var G__21436 = chunk__21377;
var G__21437 = count__21378;
var G__21438 = (i__21379 + (1));
seq__21376 = G__21435;
chunk__21377 = G__21436;
count__21378 = G__21437;
i__21379 = G__21438;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__21376);
if(temp__5457__auto____$1){
var seq__21376__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21376__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__21376__$1);
var G__21439 = cljs.core.chunk_rest(seq__21376__$1);
var G__21440 = c__9739__auto__;
var G__21441 = cljs.core.count(c__9739__auto__);
var G__21442 = (0);
seq__21376 = G__21439;
chunk__21377 = G__21440;
count__21378 = G__21441;
i__21379 = G__21442;
continue;
} else {
var role = cljs.core.first(seq__21376__$1);
var temp__5457__auto___21443__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21443__$2)){
var spec_21444 = temp__5457__auto___21443__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21444)], 0));
} else {
}

var G__21445 = cljs.core.next(seq__21376__$1);
var G__21446 = null;
var G__21447 = (0);
var G__21448 = (0);
seq__21376 = G__21445;
chunk__21377 = G__21446;
count__21378 = G__21447;
i__21379 = G__21448;
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
