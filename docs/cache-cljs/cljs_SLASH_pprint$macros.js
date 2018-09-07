goog.provide("cljs.pprint$macros");
var ret__23352__auto___1571 = (function (){
cljs.pprint$macros.with_pretty_writer = (function cljs$pprint$macros$with_pretty_writer(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1572 = arguments.length;
var i__23327__auto___1573 = (0);
while(true){
if((i__23327__auto___1573 < len__23326__auto___1572)){
args__23329__auto__.push((arguments[i__23327__auto___1573]));

var G__1574 = (i__23327__auto___1573 + (1));
i__23327__auto___1573 = G__1574;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.with_pretty_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.pprint$macros.with_pretty_writer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,base_writer,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"base-writer__94__auto__","base-writer__94__auto__",(-471011114),null)),(function (){var x__23030__auto__ = base_writer;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-writer__95__auto__","new-writer__95__auto__",(16506852),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","pretty-writer?","cljs.pprint/pretty-writer?",(-2126032890),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"base-writer__94__auto__","base-writer__94__auto__",(-471011114),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-writer__95__auto__","new-writer__95__auto__",(16506852),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","make-pretty-writer","cljs.pprint/make-pretty-writer",(90762412),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"base-writer__94__auto__","base-writer__94__auto__",(-471011114),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",(-56183119),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",(1588913450),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"base-writer__94__auto__","base-writer__94__auto__",(-471011114),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","-ppflush","cljs.pprint/-ppflush",(-1019520880),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.pprint$macros.with_pretty_writer.cljs$lang$maxFixedArity = (3);

cljs.pprint$macros.with_pretty_writer.cljs$lang$applyTo = (function (seq1567){
var G__1568 = cljs.core.first(seq1567);
var seq1567__$1 = cljs.core.next(seq1567);
var G__1569 = cljs.core.first(seq1567__$1);
var seq1567__$2 = cljs.core.next(seq1567__$1);
var G__1570 = cljs.core.first(seq1567__$2);
var seq1567__$3 = cljs.core.next(seq1567__$2);
return cljs.pprint$macros.with_pretty_writer.cljs$core$IFn$_invoke$arity$variadic(G__1568,G__1569,G__1570,seq1567__$3);
});

return null;
})()
;
cljs.pprint$macros.with_pretty_writer.cljs$lang$macro = true;

var ret__23352__auto___1575 = /**
 * Get the value of the field a named by the argument (which should be a keyword).
 */
cljs.pprint$macros.getf = (function cljs$pprint$macros$getf(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__23030__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this","this",(1028897902),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});
cljs.pprint$macros.getf.cljs$lang$macro = true;

var ret__23352__auto___1576 = /**
 * Set the value of the field SYM to NEW-VAL
 */
cljs.pprint$macros.setf = (function cljs$pprint$macros$setf(_AMPERSAND_form,_AMPERSAND_env,sym,new_val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this","this",(1028897902),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__23030__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = new_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.pprint$macros.setf.cljs$lang$macro = true;

var ret__23352__auto___1581 = (function (){
cljs.pprint$macros.deftype = (function cljs$pprint$macros$deftype(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1582 = arguments.length;
var i__23327__auto___1583 = (0);
while(true){
if((i__23327__auto___1583 < len__23326__auto___1582)){
args__23329__auto__.push((arguments[i__23327__auto___1583]));

var G__1584 = (i__23327__auto___1583 + (1));
i__23327__auto___1583 = G__1584;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.pprint$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_name,fields){
var name_str = cljs.core.name(type_name);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name),fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",(948295858),null)),(function (){var x__23030__auto__ = type_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null)),fields__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",(1764521227),null)),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["make-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(fields__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"."].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name_str);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$1], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",(1764521227),null)),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str),"?"].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__96__auto__","x__96__auto__",(-2067700398),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__96__auto__","x__96__auto__",(-2067700398),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name_str);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.pprint$macros.deftype.cljs$lang$maxFixedArity = (3);

cljs.pprint$macros.deftype.cljs$lang$applyTo = (function (seq1577){
var G__1578 = cljs.core.first(seq1577);
var seq1577__$1 = cljs.core.next(seq1577);
var G__1579 = cljs.core.first(seq1577__$1);
var seq1577__$2 = cljs.core.next(seq1577__$1);
var G__1580 = cljs.core.first(seq1577__$2);
var seq1577__$3 = cljs.core.next(seq1577__$2);
return cljs.pprint$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__1578,G__1579,G__1580,seq1577__$3);
});

return null;
})()
;
cljs.pprint$macros.deftype.cljs$lang$macro = true;

cljs.pprint$macros.parse_lb_options = (function cljs$pprint$macros$parse_lb_options(opts,body){
var body__$1 = body;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var G__1585 = cljs.core.first(body__$1);
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__1585) : opts(G__1585));
})())){
var G__1586 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),body__$1);
var G__1587 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),body__$1));
body__$1 = G__1586;
acc = G__1587;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,acc),body__$1], null);
}
break;
}
});
var ret__23352__auto___1594 = (function (){
/**
 * Execute the body as a pretty printing logical block with output to *out* which
 *   must be a pretty printing writer. When used from pprint or cl-format, this can be
 *   assumed.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Before the body, the caller can optionally specify options: :prefix, :per-line-prefix
 *   and :suffix.
 */
cljs.pprint$macros.pprint_logical_block = (function cljs$pprint$macros$pprint_logical_block(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1595 = arguments.length;
var i__23327__auto___1596 = (0);
while(true){
if((i__23327__auto___1596 < len__23326__auto___1595)){
args__23329__auto__.push((arguments[i__23327__auto___1596]));

var G__1597 = (i__23327__auto___1596 + (1));
i__23327__auto___1596 = G__1597;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.pprint$macros.pprint_logical_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.pprint$macros.pprint_logical_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__1591 = cljs.pprint$macros.parse_lb_options(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),null,new cljs.core.Keyword(null,"suffix","suffix",(367373057)),null], null), null),args);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1591,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1591,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","level-exceeded","cljs.pprint/level-exceeded",(-1557018470),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-write","-write",(1999625154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"#")], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*current-level*","cljs.pprint/*current-level*",(1299227592),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*current-level*","cljs.pprint/*current-level*",(1299227592),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*current-length*","cljs.pprint/*current-length*",(-732560897),null)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","start-block","cljs.pprint/start-block",(-270767114),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),body,(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","end-block","cljs.pprint/end-block",(-397543401),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.pprint$macros.pprint_logical_block.cljs$lang$maxFixedArity = (2);

cljs.pprint$macros.pprint_logical_block.cljs$lang$applyTo = (function (seq1588){
var G__1589 = cljs.core.first(seq1588);
var seq1588__$1 = cljs.core.next(seq1588);
var G__1590 = cljs.core.first(seq1588__$1);
var seq1588__$2 = cljs.core.next(seq1588__$1);
return cljs.pprint$macros.pprint_logical_block.cljs$core$IFn$_invoke$arity$variadic(G__1589,G__1590,seq1588__$2);
});

return null;
})()
;
cljs.pprint$macros.pprint_logical_block.cljs$lang$macro = true;

cljs.pprint$macros.macroexpand = (function cljs$pprint$macros$macroexpand(env,form){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__1598 = form_SINGLEQUOTE_;
var G__1599 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__1598;
form_SINGLEQUOTE_ = G__1599;
continue;
} else {
return form_SINGLEQUOTE_;
}
break;
}
});
cljs.pprint$macros.pll_mod_body = (function cljs$pprint$macros$pll_mod_body(env,var_sym,body){
var inner = (function cljs$pprint$macros$pll_mod_body_$_inner(form){
if(cljs.core.seq_QMARK_(form)){
var form__$1 = cljs.pprint$macros.macroexpand(env,form);
var pred__1607 = cljs.core._EQ_;
var expr__1608 = cljs.core.first(form__$1);
if(cljs.core.truth_((function (){var G__1610 = new cljs.core.Symbol(null,"loop*","loop*",(615029416),null);
var G__1611 = expr__1608;
return (pred__1607.cljs$core$IFn$_invoke$arity$2 ? pred__1607.cljs$core$IFn$_invoke$arity$2(G__1610,G__1611) : pred__1607(G__1610,G__1611));
})())){
return form__$1;
} else {
if(cljs.core.truth_((function (){var G__1612 = new cljs.core.Symbol(null,"recur","recur",(1202958259),null);
var G__1613 = expr__1608;
return (pred__1607.cljs$core$IFn$_invoke$arity$2 ? pred__1607.cljs$core$IFn$_invoke$arity$2(G__1612,G__1613) : pred__1607(G__1612,G__1613));
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__23030__auto__ = var_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())),cljs.core.rest(form__$1));
} else {
return clojure.walk.walk(cljs$pprint$macros$pll_mod_body_$_inner,cljs.core.identity,form__$1);
}
}
} else {
return form;
}
});
return clojure.walk.walk(inner,cljs.core.identity,body);
});
var ret__23352__auto___1618 = (function (){
/**
 * A version of loop that iterates at most *print-length* times. This is designed
 *   for use in pretty-printer dispatch functions.
 */
cljs.pprint$macros.print_length_loop = (function cljs$pprint$macros$print_length_loop(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1619 = arguments.length;
var i__23327__auto___1620 = (0);
while(true){
if((i__23327__auto___1620 < len__23326__auto___1619)){
args__23329__auto__.push((arguments[i__23327__auto___1620]));

var G__1621 = (i__23327__auto___1620 + (1));
i__23327__auto___1620 = G__1621;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.print_length_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.pprint$macros.print_length_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var count_var = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("length-count");
var mod_body = cljs.pprint$macros.pll_mod_body(_AMPERSAND_env,count_var,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,count_var,(0),bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",(-20766927),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<","cljs.core/<",(1677496129),null)),(function (){var x__23030__auto__ = count_var;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",(-20766927),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),mod_body));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-write","-write",(1999625154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",(-1813565621),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"...")], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.pprint$macros.print_length_loop.cljs$lang$maxFixedArity = (3);

cljs.pprint$macros.print_length_loop.cljs$lang$applyTo = (function (seq1614){
var G__1615 = cljs.core.first(seq1614);
var seq1614__$1 = cljs.core.next(seq1614);
var G__1616 = cljs.core.first(seq1614__$1);
var seq1614__$2 = cljs.core.next(seq1614__$1);
var G__1617 = cljs.core.first(seq1614__$2);
var seq1614__$3 = cljs.core.next(seq1614__$2);
return cljs.pprint$macros.print_length_loop.cljs$core$IFn$_invoke$arity$variadic(G__1615,G__1616,G__1617,seq1614__$3);
});

return null;
})()
;
cljs.pprint$macros.print_length_loop.cljs$lang$macro = true;

cljs.pprint$macros.process_directive_table_element = (function cljs$pprint$macros$process_directive_table_element(p__1622){
var vec__1623 = p__1622;
var seq__1624 = cljs.core.seq(vec__1623);
var first__1625 = cljs.core.first(seq__1624);
var seq__1624__$1 = cljs.core.next(seq__1624);
var char$ = first__1625;
var first__1625__$1 = cljs.core.first(seq__1624__$1);
var seq__1624__$2 = cljs.core.next(seq__1624__$1);
var params = first__1625__$1;
var first__1625__$2 = cljs.core.first(seq__1624__$2);
var seq__1624__$3 = cljs.core.next(seq__1624__$2);
var flags = first__1625__$2;
var first__1625__$3 = cljs.core.first(seq__1624__$3);
var seq__1624__$4 = cljs.core.next(seq__1624__$3);
var bracket_info = first__1625__$3;
var generator_fn = seq__1624__$4;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [char$,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),char$,new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",(-1519210683),null)),params)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),flags,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),bracket_info,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),generator_fn)], null)], null);
});
var ret__23352__auto___1629 = (function (){
cljs.pprint$macros.defdirectives = (function cljs$pprint$macros$defdirectives(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1630 = arguments.length;
var i__23327__auto___1631 = (0);
while(true){
if((i__23327__auto___1631 < len__23326__auto___1630)){
args__23329__auto__.push((arguments[i__23327__auto___1631]));

var G__1632 = (i__23327__auto___1631 + (1));
i__23327__auto___1631 = G__1632;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.pprint$macros.defdirectives.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.pprint$macros.defdirectives.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,directives){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"directive-table","directive-table",(-1558673742),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",(303385767),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.pprint$macros.process_directive_table_element,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([directives], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.pprint$macros.defdirectives.cljs$lang$maxFixedArity = (2);

cljs.pprint$macros.defdirectives.cljs$lang$applyTo = (function (seq1626){
var G__1627 = cljs.core.first(seq1626);
var seq1626__$1 = cljs.core.next(seq1626);
var G__1628 = cljs.core.first(seq1626__$1);
var seq1626__$2 = cljs.core.next(seq1626__$1);
return cljs.pprint$macros.defdirectives.cljs$core$IFn$_invoke$arity$variadic(G__1627,G__1628,seq1626__$2);
});

return null;
})()
;
cljs.pprint$macros.defdirectives.cljs$lang$macro = true;

var ret__23352__auto___1633 = /**
 * Makes a function which can directly run format-in. The function is
 * fn [stream & args] ... and returns nil unless the stream is nil (meaning
 * output to a string) in which case it returns the resulting string.
 * 
 * format-in can be either a control string or a previously compiled format.
 */
cljs.pprint$macros.formatter = (function cljs$pprint$macros$formatter(_AMPERSAND_form,_AMPERSAND_env,format_in){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__97__auto__","format-in__97__auto__",(71524030),null)),(function (){var x__23030__auto__ = format_in;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-c-c__98__auto__","my-c-c__98__auto__",(-917646192),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","cached-compile","cljs.pprint/cached-compile",(194847165),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-e-f__99__auto__","my-e-f__99__auto__",(-514297916),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",(1971623147),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-i-n__100__auto__","my-i-n__100__auto__",(955738165),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",(1904204595),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cf__101__auto__","cf__101__auto__",(658119541),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__97__auto__","format-in__97__auto__",(71524030),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-c-c__98__auto__","my-c-c__98__auto__",(-917646192),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__97__auto__","format-in__97__auto__",(71524030),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__97__auto__","format-in__97__auto__",(71524030),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"stream__102__auto__","stream__102__auto__",(1516774378),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__103__auto__","args__103__auto__",(1927451674),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"navigator__104__auto__","navigator__104__auto__",(1205368388),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-i-n__100__auto__","my-i-n__100__auto__",(955738165),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__103__auto__","args__103__auto__",(1927451674),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"my-e-f__99__auto__","my-e-f__99__auto__",(-514297916),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"stream__102__auto__","stream__102__auto__",(1516774378),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cf__101__auto__","cf__101__auto__",(658119541),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"navigator__104__auto__","navigator__104__auto__",(1205368388),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.pprint$macros.formatter.cljs$lang$macro = true;

var ret__23352__auto___1634 = /**
 * Makes a function which can directly run format-in. The function is
 * fn [& args] ... and returns nil. This version of the formatter macro is
 * designed to be used with *out* set to an appropriate Writer. In particular,
 * this is meant to be used as part of a pretty printer dispatch method.
 * 
 * format-in can be either a control string or a previously compiled format.
 */
cljs.pprint$macros.formatter_out = (function cljs$pprint$macros$formatter_out(_AMPERSAND_form,_AMPERSAND_env,format_in){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__105__auto__","format-in__105__auto__",(-993343010),null)),(function (){var x__23030__auto__ = format_in;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cf__106__auto__","cf__106__auto__",(-639568355),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__105__auto__","format-in__105__auto__",(-993343010),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","cached-compile","cljs.pprint/cached-compile",(194847165),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__105__auto__","format-in__105__auto__",(-993343010),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"format-in__105__auto__","format-in__105__auto__",(-993343010),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__107__auto__","args__107__auto__",(738236883),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"navigator__108__auto__","navigator__108__auto__",(-669451906),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",(1904204595),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__107__auto__","args__107__auto__",(738236883),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",(1971623147),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cf__106__auto__","cf__106__auto__",(-639568355),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"navigator__108__auto__","navigator__108__auto__",(-669451906),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.pprint$macros.formatter_out.cljs$lang$macro = true;

var ret__23352__auto___1639 = (function (){
/**
 * Execute body with the pretty print dispatch function bound to function.
 */
cljs.pprint$macros.with_pprint_dispatch = (function cljs$pprint$macros$with_pprint_dispatch(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1640 = arguments.length;
var i__23327__auto___1641 = (0);
while(true){
if((i__23327__auto___1641 < len__23326__auto___1640)){
args__23329__auto__.push((arguments[i__23327__auto___1641]));

var G__1642 = (i__23327__auto___1641 + (1));
i__23327__auto___1641 = G__1642;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.with_pprint_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.pprint$macros.with_pprint_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,function$,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",(-1820734013),null)),(function (){var x__23030__auto__ = function$;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.pprint$macros.with_pprint_dispatch.cljs$lang$maxFixedArity = (3);

cljs.pprint$macros.with_pprint_dispatch.cljs$lang$applyTo = (function (seq1635){
var G__1636 = cljs.core.first(seq1635);
var seq1635__$1 = cljs.core.next(seq1635);
var G__1637 = cljs.core.first(seq1635__$1);
var seq1635__$2 = cljs.core.next(seq1635__$1);
var G__1638 = cljs.core.first(seq1635__$2);
var seq1635__$3 = cljs.core.next(seq1635__$2);
return cljs.pprint$macros.with_pprint_dispatch.cljs$core$IFn$_invoke$arity$variadic(G__1636,G__1637,G__1638,seq1635__$3);
});

return null;
})()
;
cljs.pprint$macros.with_pprint_dispatch.cljs$lang$macro = true;

var ret__23352__auto___1643 = /**
 * A convenience macro that pretty prints the last thing output. This is
 * exactly equivalent to (pprint *1).
 */
cljs.pprint$macros.pp = (function cljs$pprint$macros$pp(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.pprint","pprint","cljs.pprint/pprint",(-1547147237),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*1","cljs.core/*1",(-1526381047),null))));
});
cljs.pprint$macros.pp.cljs$lang$macro = true;

