goog.provide("cljs.pprint");
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1645 = arguments.length;
var i__23327__auto___1646 = (0);
while(true){
if((i__23327__auto___1646 < len__23326__auto___1645)){
args__23329__auto__.push((arguments[i__23327__auto___1646]));

var G__1647 = (i__23327__auto___1646 + (1));
i__23327__auto___1646 = G__1647;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq1644){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1644));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1649 = arguments.length;
var i__23327__auto___1650 = (0);
while(true){
if((i__23327__auto___1650 < len__23326__auto___1649)){
args__23329__auto__.push((arguments[i__23327__auto___1650]));

var G__1651 = (i__23327__auto___1650 + (1));
i__23327__auto___1650 = G__1651;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq1648){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1648));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__1652 = cljs.core._EQ_;
var expr__1653 = c;
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\b",expr__1653) : pred__1652("\b",expr__1653)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\t",expr__1653) : pred__1652("\t",expr__1653)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\n",expr__1653) : pred__1652("\n",expr__1653)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\f",expr__1653) : pred__1652("\f",expr__1653)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\r",expr__1653) : pred__1652("\r",expr__1653)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\"",expr__1653) : pred__1652("\"",expr__1653)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__1652.cljs$core$IFn$_invoke$arity$2 ? pred__1652.cljs$core$IFn$_invoke$arity$2("\\",expr__1653) : pred__1652("\\",expr__1653)))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1656 = arguments.length;
var i__23327__auto___1657 = (0);
while(true){
if((i__23327__auto___1657 < len__23326__auto___1656)){
args__23329__auto__.push((arguments[i__23327__auto___1657]));

var G__1658 = (i__23327__auto___1657 + (1));
i__23327__auto___1657 = G__1658;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq1655){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1655));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1660 = arguments.length;
var i__23327__auto___1661 = (0);
while(true){
if((i__23327__auto___1661 < len__23326__auto___1660)){
args__23329__auto__.push((arguments[i__23327__auto___1661]));

var G__1662 = (i__23327__auto___1661 + (1));
i__23327__auto___1661 = G__1662;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq1659){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1659));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__1663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1663,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1663,(1),null);
var G__1666 = new_context;
var G__1667 = remainder;
var G__1668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1666;
lis__$1 = G__1667;
acc = G__1668;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1669 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1669,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1669,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__1672 = new_context;
var G__1673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1672;
acc = G__1673;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1674,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1674,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1674,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__1677 = new_context;
var G__1678 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1677;
acc = G__1678;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$unzip_map_$_iter__1679(s__1680){
return (new cljs.core.LazySeq(null,(function (){
var s__1680__$1 = s__1680;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__1680__$1);
if(temp__22039__auto__){
var s__1680__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1680__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__1680__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__1682 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__1681 = (0);
while(true){
if((i__1681 < size__22959__auto__)){
var vec__1683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__1681);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1683,(0),null);
var vec__1686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1683,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1686,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1686,(1),null);
cljs.core.chunk_append(b__1682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__1711 = (i__1681 + (1));
i__1681 = G__1711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1682),cljs$pprint$unzip_map_$_iter__1679(cljs.core.chunk_rest(s__1680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1682),null);
}
} else {
var vec__1689 = cljs.core.first(s__1680__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1689,(0),null);
var vec__1692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1689,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__1679(cljs.core.rest(s__1680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$unzip_map_$_iter__1695(s__1696){
return (new cljs.core.LazySeq(null,(function (){
var s__1696__$1 = s__1696;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__1696__$1);
if(temp__22039__auto__){
var s__1696__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1696__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__1696__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__1698 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__1697 = (0);
while(true){
if((i__1697 < size__22959__auto__)){
var vec__1699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__1697);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1699,(0),null);
var vec__1702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1699,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1702,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1702,(1),null);
cljs.core.chunk_append(b__1698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__1712 = (i__1697 + (1));
i__1697 = G__1712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1698),cljs$pprint$unzip_map_$_iter__1695(cljs.core.chunk_rest(s__1696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1698),null);
}
} else {
var vec__1705 = cljs.core.first(s__1696__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1705,(0),null);
var vec__1708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1705,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1708,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1708,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__1695(cljs.core.rest(s__1696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$tuple_map_$_iter__1713(s__1714){
return (new cljs.core.LazySeq(null,(function (){
var s__1714__$1 = s__1714;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__1714__$1);
if(temp__22039__auto__){
var s__1714__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1714__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__1714__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__1716 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__1715 = (0);
while(true){
if((i__1715 < size__22959__auto__)){
var vec__1717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__1715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(1),null);
cljs.core.chunk_append(b__1716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__1723 = (i__1715 + (1));
i__1715 = G__1723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1716),cljs$pprint$tuple_map_$_iter__1713(cljs.core.chunk_rest(s__1714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1716),null);
}
} else {
var vec__1720 = cljs.core.first(s__1714__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1720,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__1713(cljs.core.rest(s__1714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__1724 = (n - (1));
n = G__1724;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__1725 = (n + (1));
n = G__1725;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__1727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__1727) : test(G__1727));
})()))){
return pos;
} else {
var G__1728 = (pos + (1));
pos = G__1728;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__22826__auto__ = (((pp == null))?null:pp);
var m__22827__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__22826__auto__)]);
if(!((m__22827__auto__ == null))){
return (m__22827__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__22827__auto__(pp));
} else {
var m__22827__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__22827__auto____$1 == null))){
return (m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__22827__auto____$1(pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__1729 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__1729) : sym(G__1729));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",(212345235)));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",(61366548)));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",(61366548)),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",(185279322)));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",(212345235))) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",(185279322))),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__1731 = arguments.length;
switch (G__1731) {
case (1):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",(61366548)),max_columns,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0),new cljs.core.Keyword(null,"line","line",(212345235)),(0),new cljs.core.Keyword(null,"base","base",(185279322)),writer], null));
if(typeof cljs.pprint.t_cljs$pprint1732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1732 = (function (writer,max_columns,fields,meta1733){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta1733 = meta1733;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_1734,meta1733__$1){
var self__ = this;
var _1734__$1 = this;
return (new cljs.pprint.t_cljs$pprint1732(self__.writer,self__.max_columns,self__.fields,meta1733__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_1734){
var self__ = this;
var _1734__$1 = this;
return self__.meta1733;
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1735 = cljs.core._EQ_;
var expr__1736 = cljs.core.type(x);
if(cljs.core.truth_((pred__1735.cljs$core$IFn$_invoke$arity$2 ? pred__1735.cljs$core$IFn$_invoke$arity$2(String,expr__1736) : pred__1735(String,expr__1736)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",(212345235))) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__1735,expr__1736,this$__$1,fields){
return (function (p1__109_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__109_SHARP_,"\n");
});})(s,nl,pred__1735,expr__1736,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",(185279322))),s);
} else {
if(cljs.core.truth_((pred__1735.cljs$core$IFn$_invoke$arity$2 ? pred__1735.cljs$core$IFn$_invoke$arity$2(Number,expr__1736) : pred__1735(Number,expr__1736)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1736)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1733","meta1733",(-333620622),null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint1732.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1732.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1732";

cljs.pprint.t_cljs$pprint1732.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint1732");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint1732 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint1732(writer__$1,max_columns__$1,fields__$1,meta1733){
return (new cljs.pprint.t_cljs$pprint1732(writer__$1,max_columns__$1,fields__$1,meta1733));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint1732(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = (2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1740,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1744 = k1740;
var G__1744__$1 = (((G__1744 instanceof cljs.core.Keyword))?G__1744.fqn:null);
switch (G__1744__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1740,else__22796__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.logical-block{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1739){
var self__ = this;
var G__1739__$1 = this;
return (new cljs.core.RecordIter((0),G__1739__$1,(10),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",(-878878779)),new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((10) + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1745 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1977012399) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1745(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1741,other1742){
var self__ = this;
var this1741__$1 = this;
return (!((other1742 == null))) && ((this1741__$1.constructor === other1742.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.parent,other1742.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.section,other1742.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.start_col,other1742.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.indent,other1742.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.done_nl,other1742.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.intra_block_nl,other1742.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.prefix,other1742.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.per_line_prefix,other1742.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.suffix,other1742.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.logical_block_callback,other1742.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1741__$1.__extmap,other1742.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",(367373057)),null,new cljs.core.Keyword(null,"indent","indent",(-148200125)),null,new cljs.core.Keyword(null,"parent","parent",(-878878779)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)),null,new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1739){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1746 = cljs.core.keyword_identical_QMARK_;
var expr__1747 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1749 = new cljs.core.Keyword(null,"parent","parent",(-878878779));
var G__1750 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1749,G__1750) : pred__1746(G__1749,G__1750));
})())){
return (new cljs.pprint.logical_block(G__1739,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1751 = new cljs.core.Keyword(null,"section","section",(-300141526));
var G__1752 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1751,G__1752) : pred__1746(G__1751,G__1752));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__1739,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1753 = new cljs.core.Keyword(null,"start-col","start-col",(668080143));
var G__1754 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1753,G__1754) : pred__1746(G__1753,G__1754));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__1739,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1755 = new cljs.core.Keyword(null,"indent","indent",(-148200125));
var G__1756 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1755,G__1756) : pred__1746(G__1755,G__1756));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__1739,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1757 = new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340));
var G__1758 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1757,G__1758) : pred__1746(G__1757,G__1758));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__1739,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1759 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875));
var G__1760 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1759,G__1760) : pred__1746(G__1759,G__1760));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__1739,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1761 = new cljs.core.Keyword(null,"prefix","prefix",(-265908465));
var G__1762 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1761,G__1762) : pred__1746(G__1761,G__1762));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__1739,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1763 = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813));
var G__1764 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1763,G__1764) : pred__1746(G__1763,G__1764));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__1739,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1765 = new cljs.core.Keyword(null,"suffix","suffix",(367373057));
var G__1766 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1765,G__1766) : pred__1746(G__1765,G__1766));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__1739,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1767 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194));
var G__1768 = expr__1747;
return (pred__1746.cljs$core$IFn$_invoke$arity$2 ? pred__1746.cljs$core$IFn$_invoke$arity$2(G__1767,G__1768) : pred__1746(G__1767,G__1768));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__1739,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1739),null));
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
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1739){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__1739,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",(761652748),null),new cljs.core.Symbol(null,"section","section",(1340390001),null),new cljs.core.Symbol(null,"start-col","start-col",(-1986355626),null),new cljs.core.Symbol(null,"indent","indent",(1492331402),null),new cljs.core.Symbol(null,"done-nl","done-nl",(1259507187),null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",(-845608894),null),new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",(-1807493956),null),new cljs.core.Symbol(null,"suffix","suffix",(2007904584),null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",(-1041744575),null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__1743){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"section","section",(-300141526)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(G__1743),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(G__1743),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1743,new cljs.core.Keyword(null,"parent","parent",(-878878779)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194))], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__1770 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__1770;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1772,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1776 = k1772;
var G__1776__$1 = (((G__1776 instanceof cljs.core.Keyword))?G__1776.fqn:null);
switch (G__1776__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1772,else__22796__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1771){
var self__ = this;
var G__1771__$1 = this;
return (new cljs.core.RecordIter((0),G__1771__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1777 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1809113693) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1777(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1773,other1774){
var self__ = this;
var this1773__$1 = this;
return (!((other1774 == null))) && ((this1773__$1.constructor === other1774.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.type_tag,other1774.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.data,other1774.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.trailing_white_space,other1774.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.start_pos,other1774.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.end_pos,other1774.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1773__$1.__extmap,other1774.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"data","data",(-232669377)),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1771){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1778 = cljs.core.keyword_identical_QMARK_;
var expr__1779 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1781 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1782 = expr__1779;
return (pred__1778.cljs$core$IFn$_invoke$arity$2 ? pred__1778.cljs$core$IFn$_invoke$arity$2(G__1781,G__1782) : pred__1778(G__1781,G__1782));
})())){
return (new cljs.pprint.buffer_blob(G__1771,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1783 = new cljs.core.Keyword(null,"data","data",(-232669377));
var G__1784 = expr__1779;
return (pred__1778.cljs$core$IFn$_invoke$arity$2 ? pred__1778.cljs$core$IFn$_invoke$arity$2(G__1783,G__1784) : pred__1778(G__1783,G__1784));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__1771,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1785 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996));
var G__1786 = expr__1779;
return (pred__1778.cljs$core$IFn$_invoke$arity$2 ? pred__1778.cljs$core$IFn$_invoke$arity$2(G__1785,G__1786) : pred__1778(G__1785,G__1786));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__1771,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1787 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1788 = expr__1779;
return (pred__1778.cljs$core$IFn$_invoke$arity$2 ? pred__1778.cljs$core$IFn$_invoke$arity$2(G__1787,G__1788) : pred__1778(G__1787,G__1788));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__1771,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1789 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1790 = expr__1779;
return (pred__1778.cljs$core$IFn$_invoke$arity$2 ? pred__1778.cljs$core$IFn$_invoke$arity$2(G__1789,G__1790) : pred__1778(G__1789,G__1790));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__1771,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1771),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1771){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__1771,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",(-1158428773),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__1775){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1775),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(G__1775),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(G__1775),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1775),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1775),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1775,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__96__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1793,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1797 = k1793;
var G__1797__$1 = (((G__1797 instanceof cljs.core.Keyword))?G__1797.fqn:null);
switch (G__1797__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1793,else__22796__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.nl-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1792){
var self__ = this;
var G__1792__$1 = this;
return (new cljs.core.RecordIter((0),G__1792__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1798 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-1640656800) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1798(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1794,other1795){
var self__ = this;
var this1794__$1 = this;
return (!((other1795 == null))) && ((this1794__$1.constructor === other1795.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.type_tag,other1795.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.type,other1795.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.logical_block,other1795.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.start_pos,other1795.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.end_pos,other1795.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1794__$1.__extmap,other1795.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"type","type",(1174270348)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1792){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1799 = cljs.core.keyword_identical_QMARK_;
var expr__1800 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1802 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1803 = expr__1800;
return (pred__1799.cljs$core$IFn$_invoke$arity$2 ? pred__1799.cljs$core$IFn$_invoke$arity$2(G__1802,G__1803) : pred__1799(G__1802,G__1803));
})())){
return (new cljs.pprint.nl_t(G__1792,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1804 = new cljs.core.Keyword(null,"type","type",(1174270348));
var G__1805 = expr__1800;
return (pred__1799.cljs$core$IFn$_invoke$arity$2 ? pred__1799.cljs$core$IFn$_invoke$arity$2(G__1804,G__1805) : pred__1799(G__1804,G__1805));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__1792,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1806 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1807 = expr__1800;
return (pred__1799.cljs$core$IFn$_invoke$arity$2 ? pred__1799.cljs$core$IFn$_invoke$arity$2(G__1806,G__1807) : pred__1799(G__1806,G__1807));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__1792,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1808 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1809 = expr__1800;
return (pred__1799.cljs$core$IFn$_invoke$arity$2 ? pred__1799.cljs$core$IFn$_invoke$arity$2(G__1808,G__1809) : pred__1799(G__1808,G__1809));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__1792,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1810 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1811 = expr__1800;
return (pred__1799.cljs$core$IFn$_invoke$arity$2 ? pred__1799.cljs$core$IFn$_invoke$arity$2(G__1810,G__1811) : pred__1799(G__1810,G__1811));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__1792,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1792),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1792){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__1792,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__1796){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1796),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(G__1796),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1796),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1796),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1796),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1796,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__96__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1814,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1818 = k1814;
var G__1818__$1 = (((G__1818 instanceof cljs.core.Keyword))?G__1818.fqn:null);
switch (G__1818__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1814,else__22796__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1813){
var self__ = this;
var G__1813__$1 = this;
return (new cljs.core.RecordIter((0),G__1813__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1819 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-414877272) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1819(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1815,other1816){
var self__ = this;
var this1815__$1 = this;
return (!((other1816 == null))) && ((this1815__$1.constructor === other1816.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1815__$1.type_tag,other1816.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1815__$1.logical_block,other1816.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1815__$1.start_pos,other1816.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1815__$1.end_pos,other1816.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1815__$1.__extmap,other1816.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1813){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1820 = cljs.core.keyword_identical_QMARK_;
var expr__1821 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1823 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1824 = expr__1821;
return (pred__1820.cljs$core$IFn$_invoke$arity$2 ? pred__1820.cljs$core$IFn$_invoke$arity$2(G__1823,G__1824) : pred__1820(G__1823,G__1824));
})())){
return (new cljs.pprint.start_block_t(G__1813,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1825 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1826 = expr__1821;
return (pred__1820.cljs$core$IFn$_invoke$arity$2 ? pred__1820.cljs$core$IFn$_invoke$arity$2(G__1825,G__1826) : pred__1820(G__1825,G__1826));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__1813,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1827 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1828 = expr__1821;
return (pred__1820.cljs$core$IFn$_invoke$arity$2 ? pred__1820.cljs$core$IFn$_invoke$arity$2(G__1827,G__1828) : pred__1820(G__1827,G__1828));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__1813,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1829 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1830 = expr__1821;
return (pred__1820.cljs$core$IFn$_invoke$arity$2 ? pred__1820.cljs$core$IFn$_invoke$arity$2(G__1829,G__1830) : pred__1820(G__1829,G__1830));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1813,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1813),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1813){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1813,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__1817){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1817),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1817),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1817),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1817),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1817,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__96__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1833,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1837 = k1833;
var G__1837__$1 = (((G__1837 instanceof cljs.core.Keyword))?G__1837.fqn:null);
switch (G__1837__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1833,else__22796__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1832){
var self__ = this;
var G__1832__$1 = this;
return (new cljs.core.RecordIter((0),G__1832__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1838 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1365867980) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1838(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1834,other1835){
var self__ = this;
var this1834__$1 = this;
return (!((other1835 == null))) && ((this1834__$1.constructor === other1835.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1834__$1.type_tag,other1835.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1834__$1.logical_block,other1835.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1834__$1.start_pos,other1835.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1834__$1.end_pos,other1835.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1834__$1.__extmap,other1835.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1832){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1839 = cljs.core.keyword_identical_QMARK_;
var expr__1840 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1842 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1843 = expr__1840;
return (pred__1839.cljs$core$IFn$_invoke$arity$2 ? pred__1839.cljs$core$IFn$_invoke$arity$2(G__1842,G__1843) : pred__1839(G__1842,G__1843));
})())){
return (new cljs.pprint.end_block_t(G__1832,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1844 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1845 = expr__1840;
return (pred__1839.cljs$core$IFn$_invoke$arity$2 ? pred__1839.cljs$core$IFn$_invoke$arity$2(G__1844,G__1845) : pred__1839(G__1844,G__1845));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__1832,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1846 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1847 = expr__1840;
return (pred__1839.cljs$core$IFn$_invoke$arity$2 ? pred__1839.cljs$core$IFn$_invoke$arity$2(G__1846,G__1847) : pred__1839(G__1846,G__1847));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__1832,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1848 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1849 = expr__1840;
return (pred__1839.cljs$core$IFn$_invoke$arity$2 ? pred__1839.cljs$core$IFn$_invoke$arity$2(G__1848,G__1849) : pred__1839(G__1848,G__1849));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1832,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1832),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1832){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1832,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__1836){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1836),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1836),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1836),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1836),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1836,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__96__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k1852,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__1856 = k1852;
var G__1856__$1 = (((G__1856 instanceof cljs.core.Keyword))?G__1856.fqn:null);
switch (G__1856__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1852,else__22796__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.indent-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1851){
var self__ = this;
var G__1851__$1 = this;
return (new cljs.core.RecordIter((0),G__1851__$1,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((6) + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__1857 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-1602780238) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__1857(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1853,other1854){
var self__ = this;
var this1853__$1 = this;
return (!((other1854 == null))) && ((this1853__$1.constructor === other1854.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.type_tag,other1854.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.logical_block,other1854.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.relative_to,other1854.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.offset,other1854.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.start_pos,other1854.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.end_pos,other1854.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1853__$1.__extmap,other1854.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__1851){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__1858 = cljs.core.keyword_identical_QMARK_;
var expr__1859 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__1861 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1862 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1861,G__1862) : pred__1858(G__1861,G__1862));
})())){
return (new cljs.pprint.indent_t(G__1851,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1863 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1864 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1863,G__1864) : pred__1858(G__1863,G__1864));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__1851,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1865 = new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051));
var G__1866 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1865,G__1866) : pred__1858(G__1865,G__1866));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__1851,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1867 = new cljs.core.Keyword(null,"offset","offset",(296498311));
var G__1868 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1867,G__1868) : pred__1858(G__1867,G__1868));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__1851,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1869 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1870 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1869,G__1870) : pred__1858(G__1869,G__1870));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__1851,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1871 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1872 = expr__1859;
return (pred__1858.cljs$core$IFn$_invoke$arity$2 ? pred__1858.cljs$core$IFn$_invoke$arity$2(G__1871,G__1872) : pred__1858(G__1871,G__1872));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__1851,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__1851),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__1851){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__1851,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__1855){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1855),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1855),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(G__1855),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__1855),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1855),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1855),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1855,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__96__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (p1__111_SHARP_,p2__110_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(p2__110_SHARP_);
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),(function (this$,token){
var temp__22039__auto___1875 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___1875)){
var cb_1876 = temp__22039__auto___1875;
var G__1874_1877 = new cljs.core.Keyword(null,"start","start",(-355208981));
(cb_1876.cljs$core$IFn$_invoke$arity$1 ? cb_1876.cljs$core$IFn$_invoke$arity$1(G__1874_1877) : cb_1876(G__1874_1877));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
var temp__22039__auto___1878 = new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__22039__auto___1878)){
var prefix_1879 = temp__22039__auto___1878;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_1879);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),(function (this$,token){
var temp__22039__auto___1881 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___1881)){
var cb_1882 = temp__22039__auto___1881;
var G__1880_1883 = new cljs.core.Keyword(null,"end","end",(-268185958));
(cb_1882.cljs$core$IFn$_invoke$arity$1 ? cb_1882.cljs$core$IFn$_invoke$arity$1(G__1880_1883) : cb_1882(G__1880_1883));
} else {
}

var temp__22039__auto__ = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__22039__auto__)){
var suffix = temp__22039__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__1884 = cljs.core._EQ_;
var expr__1885 = new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__1887 = new cljs.core.Keyword(null,"block","block",(664686210));
var G__1888 = expr__1885;
return (pred__1884.cljs$core$IFn$_invoke$arity$2 ? pred__1884.cljs$core$IFn$_invoke$arity$2(G__1887,G__1888) : pred__1884(G__1887,G__1888));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__1889 = new cljs.core.Keyword(null,"current","current",(-1088038603));
var G__1890 = expr__1885;
return (pred__1884.cljs$core$IFn$_invoke$arity$2 ? pred__1884.cljs$core$IFn$_invoke$arity$2(G__1889,G__1890) : pred__1884(G__1889,G__1890));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1885)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),(function (this$,token){
if(cljs.core.truth_((function (){var or__22217__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",(883462889))));
if(and__22202__auto__){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__22202__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl(this$,token));
} else {
var temp__21984__auto___1891 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___1891)){
var tws_1892 = temp__21984__auto___1891;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1892);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__1893 = cljs.core.seq(tokens);
var chunk__1894 = null;
var count__1895 = (0);
var i__1896 = (0);
while(true){
if((i__1896 < count__1895)){
var token = chunk__1894.cljs$core$IIndexed$_nth$arity$2(null,i__1896);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114))))){
var temp__21984__auto___1897 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___1897)){
var tws_1898 = temp__21984__auto___1897;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1898);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token(this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_1899 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__22202__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__22202__auto__)){
return tws_1899;
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1899);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}

var G__1900 = seq__1893;
var G__1901 = chunk__1894;
var G__1902 = count__1895;
var G__1903 = (i__1896 + (1));
seq__1893 = G__1900;
chunk__1894 = G__1901;
count__1895 = G__1902;
i__1896 = G__1903;
continue;
} else {
var temp__22039__auto__ = cljs.core.seq(seq__1893);
if(temp__22039__auto__){
var seq__1893__$1 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1893__$1)){
var c__22996__auto__ = cljs.core.chunk_first(seq__1893__$1);
var G__1904 = cljs.core.chunk_rest(seq__1893__$1);
var G__1905 = c__22996__auto__;
var G__1906 = cljs.core.count(c__22996__auto__);
var G__1907 = (0);
seq__1893 = G__1904;
chunk__1894 = G__1905;
count__1895 = G__1906;
i__1896 = G__1907;
continue;
} else {
var token = cljs.core.first(seq__1893__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114))))){
var temp__21984__auto___1908 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___1908)){
var tws_1909 = temp__21984__auto___1908;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1909);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token(this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_1910 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__22202__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__22202__auto__)){
return tws_1910;
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1910);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}

var G__1911 = cljs.core.next(seq__1893__$1);
var G__1912 = null;
var G__1913 = (0);
var G__1914 = (0);
seq__1893 = G__1911;
chunk__1894 = G__1912;
count__1895 = G__1913;
i__1896 = G__1914;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__22217__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width(this$));
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__22202__auto__ = miser_width;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = maxcol;
if(cljs.core.truth_(and__22202__auto____$1)){
var and__22202__auto____$2 = (cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__22202__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__22202__auto____$2;
}
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",(872268697)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",(-556060186)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",(883462889)),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
var or__22217__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__22217__auto____$1){
return or__22217__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__112_SHARP_){
return cljs.core.not((function (){var and__22202__auto__ = cljs.pprint.nl_t_QMARK_(p1__112_SHARP_);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__112_SHARP_),lb);
} else {
return and__22202__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__113_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__113_SHARP_);
return cljs.core.not((function (){var and__22202__auto__ = cljs.pprint.nl_t_QMARK_(p1__113_SHARP_);
if(cljs.core.truth_(and__22202__auto__)){
var or__22217__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__22217__auto__){
return or__22217__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__22202__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__1915 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__1915;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_1916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_1916);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__114_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__114_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__1917 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1917,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1917,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__1920 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1920,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1920,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__1923 = newl;
var G__1924 = this$;
var G__1925 = section;
var G__1926 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__1923,G__1924,G__1925,G__1926) : cljs.pprint.emit_nl_QMARK_(G__1923,G__1924,G__1925,G__1926));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string(this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__1927 = new_buffer;
buffer = G__1927;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__21984__auto__ = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto__)){
var buf = temp__21984__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__22039__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto__)){
var tws = temp__22039__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_1932 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_1933 = (oldpos_1932 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_1933);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_1932,newpos_1933));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__1928_1934 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__1929_1935 = null;
var count__1930_1936 = (0);
var i__1931_1937 = (0);
while(true){
if((i__1931_1937 < count__1930_1936)){
var l_1938__$1 = chunk__1929_1935.cljs$core$IIndexed$_nth$arity$2(null,i__1931_1937);
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_1938__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__1939 = seq__1928_1934;
var G__1940 = chunk__1929_1935;
var G__1941 = count__1930_1936;
var G__1942 = (i__1931_1937 + (1));
seq__1928_1934 = G__1939;
chunk__1929_1935 = G__1940;
count__1930_1936 = G__1941;
i__1931_1937 = G__1942;
continue;
} else {
var temp__22039__auto___1943 = cljs.core.seq(seq__1928_1934);
if(temp__22039__auto___1943){
var seq__1928_1944__$1 = temp__22039__auto___1943;
if(cljs.core.chunked_seq_QMARK_(seq__1928_1944__$1)){
var c__22996__auto___1945 = cljs.core.chunk_first(seq__1928_1944__$1);
var G__1946 = cljs.core.chunk_rest(seq__1928_1944__$1);
var G__1947 = c__22996__auto___1945;
var G__1948 = cljs.core.count(c__22996__auto___1945);
var G__1949 = (0);
seq__1928_1934 = G__1946;
chunk__1929_1935 = G__1947;
count__1930_1936 = G__1948;
i__1931_1937 = G__1949;
continue;
} else {
var l_1950__$1 = cljs.core.first(seq__1928_1944__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_1950__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__1951 = cljs.core.next(seq__1928_1944__$1);
var G__1952 = null;
var G__1953 = (0);
var G__1954 = (0);
seq__1928_1934 = G__1951;
chunk__1929_1935 = G__1952;
count__1930_1936 = G__1953;
i__1931_1937 = G__1954;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"writing","writing",(-1486865108)));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)),new cljs.core.Keyword(null,"buffer-block","buffer-block",(-10937307)),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)),new cljs.core.Keyword(null,"sections","sections",(-886710106)),new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"pos","pos",(-864607220)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.Keyword(null,"buffer-level","buffer-level",(928864731)),new cljs.core.Keyword(null,"buffer","buffer",(617295198))],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",(-1486865108)),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint1955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
 * @implements {cljs.pprint.IPrettyFlush}
*/
cljs.pprint.t_cljs$pprint1955 = (function (writer,max_columns,miser_width,lb,fields,meta1956){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta1956 = meta1956;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_1957,meta1956__$1){
var self__ = this;
var _1957__$1 = this;
return (new cljs.pprint.t_cljs$pprint1955(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta1956__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_1957){
var self__ = this;
var _1957__$1 = this;
return self__.meta1956;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1958 = cljs.core._EQ_;
var expr__1959 = cljs.core.type(x);
if(cljs.core.truth_((pred__1958.cljs$core$IFn$_invoke$arity$2 ? pred__1958.cljs$core$IFn$_invoke$arity$2(String,expr__1959) : pred__1958(String,expr__1959)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__1958.cljs$core$IFn$_invoke$arity$2 ? pred__1958.cljs$core$IFn$_invoke$arity$2(Number,expr__1959) : pred__1958(Number,expr__1959)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1959)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint1955.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1956","meta1956",(1700673277),null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1955.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1955.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1955";

cljs.pprint.t_cljs$pprint1955.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint1955");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint1955 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint1955(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1956){
return (new cljs.pprint.t_cljs$pprint1955(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1956));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint1955(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

var temp__22039__auto___1962 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___1962)){
var cb_1963 = temp__22039__auto___1962;
var G__1961_1964 = new cljs.core.Keyword(null,"start","start",(-355208981));
(cb_1963.cljs$core$IFn$_invoke$arity$1 ? cb_1963.cljs$core$IFn$_invoke$arity$1(G__1961_1964) : cb_1963(G__1961_1964));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__22039__auto___1966 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___1966)){
var cb_1967 = temp__22039__auto___1966;
var G__1965_1968 = new cljs.core.Keyword(null,"end","end",(-268185958));
(cb_1967.cljs$core$IFn$_invoke$arity$1 ? cb_1967.cljs$core$IFn$_invoke$arity$1(G__1965_1968) : cb_1967(G__1965_1968));
} else {
}
} else {
var oldpos_1969 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_1970 = (oldpos_1969 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_1970);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_1969,newpos_1970));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)));

var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__1971 = cljs.core._EQ_;
var expr__1972 = relative_to;
if(cljs.core.truth_((function (){var G__1974 = new cljs.core.Keyword(null,"block","block",(664686210));
var G__1975 = expr__1972;
return (pred__1971.cljs$core$IFn$_invoke$arity$2 ? pred__1971.cljs$core$IFn$_invoke$arity$2(G__1974,G__1975) : pred__1971(G__1974,G__1975));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__1976 = new cljs.core.Keyword(null,"current","current",(-1088038603));
var G__1977 = expr__1972;
return (pred__1971.cljs$core$IFn$_invoke$arity$2 ? pred__1971.cljs$core$IFn$_invoke$arity$2(G__1976,G__1977) : pred__1971(G__1976,G__1977));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1972)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__115_SHARP_){
var temp__22039__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__115_SHARP_));
if(cljs.core.truth_(temp__22039__auto__)){
var v = temp__22039__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__115_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__22202__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__22202__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__22202__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__22202__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__22202__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr(object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_(object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__23329__auto__ = [];
var len__23326__auto___1996 = arguments.length;
var i__23327__auto___1997 = (0);
while(true){
if((i__23327__auto___1997 < len__23326__auto___1996)){
args__23329__auto__.push((arguments[i__23327__auto___1997]));

var G__1998 = (i__23327__auto___1997 + (1));
i__23327__auto___1997 = G__1998;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((1) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23330__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",(1534941648)),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_1982 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_1983 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_1984 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_1985 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_1986 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_1987 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_1988 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_1989 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_1990 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_1991 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_1992 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_1993 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",(1903212362)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",(588987862)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",(1290497552)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",(-700165781)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",(857016463)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",(1129599760)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",(-810413306)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",(2130686956)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",(1534941648))))?new cljs.core.Keyword(null,"stream","stream",(1534941648)).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__94__auto___1999 = base_writer;
var new_writer__95__auto___2000 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__94__auto___1999));
var _STAR_out_STAR_1994_2001 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__95__auto___2000)?cljs.pprint.make_pretty_writer(base_writer__94__auto___1999,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__94__auto___1999);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1994_2001;
}} else {
var _STAR_out_STAR_1995_2002 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr(object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1995_2002;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_1993;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_1992;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_1991;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_1990;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_1989;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_1988;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_1987;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_1986;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_1985;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_1984;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_1983;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_1982;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq1980){
var G__1981 = cljs.core.first(seq1980);
var seq1980__$1 = cljs.core.next(seq1980);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__1981,seq1980__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__2004 = arguments.length;
switch (G__2004) {
case (1):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_2005 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2005;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__94__auto__ = writer;
var new_writer__95__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__94__auto__));
var _STAR_out_STAR_2006 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__95__auto__)?cljs.pprint.make_pretty_writer(base_writer__94__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__94__auto__);

try{var _STAR_print_pretty_STAR_2007_2009 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_2007_2009;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2006;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = (2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices(arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__22202__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__22202__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__22202__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"linear","linear",(872268697)),null,new cljs.core.Keyword(null,"miser","miser",(-556060186)),null,new cljs.core.Keyword(null,"fill","fill",(883462889)),null,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",(664686210)),null,new cljs.core.Keyword(null,"current","current",(-1088038603)),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"line-relative","line-relative",(1149548219)),null,new cljs.core.Keyword(null,"section-relative","section-relative",(-658298724)),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__23329__auto__ = [];
var len__23326__auto___2013 = arguments.length;
var i__23327__auto___2014 = (0);
while(true){
if((i__23327__auto___2014 < len__23326__auto___2013)){
args__23329__auto__.push((arguments[i__23327__auto___2014]));

var G__2015 = (i__23327__auto___2014 + (1));
i__23327__auto___2014 = G__2015;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format(format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator(args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format(writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq2010){
var G__2011 = cljs.core.first(seq2010);
var seq2010__$1 = cljs.core.next(seq2010);
var G__2012 = cljs.core.first(seq2010__$1);
var seq2010__$2 = cljs.core.next(seq2010__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__2011,G__2012,seq2010__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k2017,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__2021 = k2017;
var G__2021__$1 = (((G__2021 instanceof cljs.core.Keyword))?G__2021.fqn:null);
switch (G__2021__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2017,else__22796__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2016){
var self__ = this;
var G__2016__$1 = this;
return (new cljs.core.RecordIter((0),G__2016__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((3) + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__2022 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-402038447) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__2022(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2018,other2019){
var self__ = this;
var this2018__$1 = this;
return (!((other2019 == null))) && ((this2018__$1.constructor === other2019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2018__$1.seq,other2019.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2018__$1.rest,other2019.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2018__$1.pos,other2019.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2018__$1.__extmap,other2019.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)),null,new cljs.core.Keyword(null,"pos","pos",(-864607220)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__2016){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__2023 = cljs.core.keyword_identical_QMARK_;
var expr__2024 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__2026 = new cljs.core.Keyword(null,"seq","seq",(-1817803783));
var G__2027 = expr__2024;
return (pred__2023.cljs$core$IFn$_invoke$arity$2 ? pred__2023.cljs$core$IFn$_invoke$arity$2(G__2026,G__2027) : pred__2023(G__2026,G__2027));
})())){
return (new cljs.pprint.arg_navigator(G__2016,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2028 = new cljs.core.Keyword(null,"rest","rest",(-1241696419));
var G__2029 = expr__2024;
return (pred__2023.cljs$core$IFn$_invoke$arity$2 ? pred__2023.cljs$core$IFn$_invoke$arity$2(G__2028,G__2029) : pred__2023(G__2028,G__2029));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__2016,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2030 = new cljs.core.Keyword(null,"pos","pos",(-864607220));
var G__2031 = expr__2024;
return (pred__2023.cljs$core$IFn$_invoke$arity$2 ? pred__2023.cljs$core$IFn$_invoke$arity$2(G__2030,G__2031) : pred__2023(G__2030,G__2031));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__2016,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__2016),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__2016){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__2016,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",(-177272256),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__2020){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(G__2020),new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(G__2020),new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(G__2020),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2020,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220))], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__2033 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2033,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2033,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format(raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__2036 = navigator;
var G__2037 = (new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__2036,G__2037) : cljs.pprint.relative_reposition(G__2036,G__2037));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k2039,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__2043 = k2039;
var G__2043__$1 = (((G__2043 instanceof cljs.core.Keyword))?G__2043.fqn:null);
switch (G__2043__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2039,else__22796__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",(710516235)),self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2038){
var self__ = this;
var G__2038__$1 = this;
return (new cljs.core.RecordIter((0),G__2038__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",(-238706040)),new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__2044 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-829256337) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__2044(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2040,other2041){
var self__ = this;
var this2040__$1 = this;
return (!((other2041 == null))) && ((this2040__$1.constructor === other2041.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2040__$1.func,other2041.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2040__$1.def,other2041.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2040__$1.params,other2041.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2040__$1.offset,other2041.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2040__$1.__extmap,other2041.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"func","func",(-238706040)),null,new cljs.core.Keyword(null,"def","def",(-1043430536)),null,new cljs.core.Keyword(null,"params","params",(710516235)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__2038){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__2045 = cljs.core.keyword_identical_QMARK_;
var expr__2046 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__2048 = new cljs.core.Keyword(null,"func","func",(-238706040));
var G__2049 = expr__2046;
return (pred__2045.cljs$core$IFn$_invoke$arity$2 ? pred__2045.cljs$core$IFn$_invoke$arity$2(G__2048,G__2049) : pred__2045(G__2048,G__2049));
})())){
return (new cljs.pprint.compiled_directive(G__2038,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2050 = new cljs.core.Keyword(null,"def","def",(-1043430536));
var G__2051 = expr__2046;
return (pred__2045.cljs$core$IFn$_invoke$arity$2 ? pred__2045.cljs$core$IFn$_invoke$arity$2(G__2050,G__2051) : pred__2045(G__2050,G__2051));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__2038,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2052 = new cljs.core.Keyword(null,"params","params",(710516235));
var G__2053 = expr__2046;
return (pred__2045.cljs$core$IFn$_invoke$arity$2 ? pred__2045.cljs$core$IFn$_invoke$arity$2(G__2052,G__2053) : pred__2045(G__2052,G__2053));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__2038,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2054 = new cljs.core.Keyword(null,"offset","offset",(296498311));
var G__2055 = expr__2046;
return (pred__2045.cljs$core$IFn$_invoke$arity$2 ? pred__2045.cljs$core$IFn$_invoke$arity$2(G__2054,G__2055) : pred__2045(G__2054,G__2055));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__2038,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__2038),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",(710516235)),self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__2038){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__2038,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__2042){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(G__2042),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(G__2042),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(G__2042),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__2042),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2042,new cljs.core.Keyword(null,"func","func",(-238706040)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311))], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__2057,navigator){
var vec__2058 = p__2057;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(0),null);
var vec__2061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2061,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2061,(1),null);
var vec__2064 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196))))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2064,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__2067 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2067,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2067,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__22217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__2070 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2070,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2070,(1),null);
var base_output = (function (){var or__22217__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func(arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__116_SHARP_){
if((p1__116_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__116_SHARP_,base),cljs.core.quot(p1__116_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__117_SHARP_){
if((p1__117_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__117_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__117_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__2073 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2073,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2073,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_2076 = (arg < (0));
var pos_arg_2077 = ((neg_2076)?(- arg):arg);
var raw_str_2078 = cljs.pprint.opt_base_str(base,pos_arg_2077);
var group_str_2079 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_2076,pos_arg_2077,raw_str_2078,vec__2073,arg,arg_navigator__$1){
return (function (p1__118_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__118_SHARP_);
});})(neg_2076,pos_arg_2077,raw_str_2078,vec__2073,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)).cljs$core$IFn$_invoke$arity$1(params),raw_str_2078));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",(652859327)).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_2078);
var signed_str_2080 = ((neg_2076)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_2079)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_2079)].join(''):group_str_2079
));
var padded_str_2081 = (((signed_str_2080.length < new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - signed_str_2080.length),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_2080)].join(''):signed_str_2080);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_2081], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),(1),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__2082 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__2083 = (pos - (1));
var G__2084 = cljs.core.first(remainder);
var G__2085 = cljs.core.next(remainder);
acc = G__2082;
pos = G__2083;
this$ = G__2084;
remainder = G__2085;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__2086 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_2089 = (((arg < (0)))?(- arg):arg);
var parts_2090 = cljs.pprint.remainders((1000),abs_arg_2089);
if((cljs.core.count(parts_2090) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_2091 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_2090);
var full_str_2092 = cljs.pprint.add_english_scales(parts_strs_2091,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_2092)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__2093 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2093,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2093,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_2096 = (((arg < (0)))?(- arg):arg);
var parts_2097 = cljs.pprint.remainders((1000),abs_arg_2096);
if((cljs.core.count(parts_2097) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_2098 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_2097));
var head_str_2099 = cljs.pprint.add_english_scales(parts_strs_2098,(1));
var tail_str_2100 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_2097));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_2099))) && (!(cljs.core.empty_QMARK_(tail_str_2100))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_2099),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_2100)].join(''):((!(cljs.core.empty_QMARK_(head_str_2099)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_2099),"th"].join(''):tail_str_2100
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));

var low_two_digits_2101 = cljs.core.rem(arg,(100));
var not_teens_2102 = (((11) < low_two_digits_2101)) || (((19) > low_two_digits_2101));
var low_digit_2103 = cljs.core.rem(low_two_digits_2101,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_2103 === (1))) && (not_teens_2102))?"st":((((low_digit_2103 === (2))) && (not_teens_2102))?"nd":((((low_digit_2103 === (3))) && (not_teens_2102))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__2104 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2104,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2104,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_2107 = cljs.pprint.remainders((10),arg);
var acc_2108 = cljs.core.PersistentVector.EMPTY;
var pos_2109 = (cljs.core.count(digits_2107) - (1));
var digits_2110__$1 = digits_2107;
while(true){
if(cljs.core.empty_QMARK_(digits_2110__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_2108)], 0));
} else {
var digit_2111 = cljs.core.first(digits_2110__$1);
var G__2112 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_2111))?acc_2108:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_2108,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_2109),(digit_2111 - (1)))));
var G__2113 = (pos_2109 - (1));
var G__2114 = cljs.core.next(digits_2110__$1);
acc_2108 = G__2112;
pos_2109 = G__2113;
digits_2110__$1 = G__2114;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__2115 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2115,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2115,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__2118 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2118,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2118,(1),null);
var pred__2121_2124 = cljs.core._EQ_;
var expr__2122_2125 = new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__2121_2124.cljs$core$IFn$_invoke$arity$2 ? pred__2121_2124.cljs$core$IFn$_invoke$arity$2("o",expr__2122_2125) : pred__2121_2124("o",expr__2122_2125)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__2121_2124.cljs$core$IFn$_invoke$arity$2 ? pred__2121_2124.cljs$core$IFn$_invoke$arity$2("u",expr__2122_2125) : pred__2121_2124("u",expr__2122_2125)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__2121_2124.cljs$core$IFn$_invoke$arity$2 ? pred__2121_2124.cljs$core$IFn$_invoke$arity$2(null,expr__2122_2125) : pred__2121_2124(null,expr__2122_2125)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2122_2125)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__2126 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2126,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2126,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__2129 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2129,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2129,(1),null);
var vec__2132 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2132,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2132,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__2135 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__2138 = (i - (1));
i = G__2138;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__22217__auto__ = d;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__22485__auto__ = (2);
var y__22486__auto__ = w;
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__22485__auto__ = (e + (1));
var y__22486__auto__ = (w__$1 - (1));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})():(w__$1 + e)
));
var vec__2139 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2139,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__2142 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2142,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2142,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var vec__2145 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2145,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2145,(1),null);
var vec__2148 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2148,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2148,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__2151 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2151,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2151,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__2154 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__22202__auto__ = w;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = d;
if(cljs.core.truth_(and__22202__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_2157 = cljs.core.count(fixed_repr__$1);
var signed_len_2158 = (cljs.core.truth_(add_sign)?(len_2157 + (1)):len_2157);
var prepend_zero_2159__$1 = (prepend_zero) && (!((signed_len_2158 >= w)));
var append_zero_2160__$1 = (append_zero) && (!((signed_len_2158 >= w)));
var full_len_2161 = (((prepend_zero_2159__$1) || (append_zero_2160__$1))?(signed_len_2158 + (1)):signed_len_2158);
if(cljs.core.truth_((function (){var and__22202__auto__ = (full_len_2161 > w);
if(and__22202__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_2161),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_2159__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_2160__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__2162 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2162,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2162,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__2168_2178 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__2169_2179 = G__2168_2178;
var mantissa_2180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2169_2179,(0),null);
var exp_2181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2169_2179,(1),null);
var G__2168_2182__$1 = G__2168_2178;
while(true){
var vec__2172_2183 = G__2168_2182__$1;
var mantissa_2184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2172_2183,(0),null);
var exp_2185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2172_2183,(1),null);
var w_2186 = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d_2187 = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e_2188 = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var k_2189 = new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params);
var expchar_2190 = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return "E";
}
})();
var add_sign_2191 = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_2192 = (k_2189 <= (0));
var scaled_exp_2193 = (exp_2185__$1 - (k_2189 - (1)));
var scaled_exp_str_2194 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_2193))].join('');
var scaled_exp_str_2195__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_2190),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_2193 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_2188)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_2188 - cljs.core.count(scaled_exp_str_2194)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_2194)].join('');
var exp_width_2196 = cljs.core.count(scaled_exp_str_2195__$1);
var base_mantissa_width_2197 = cljs.core.count(mantissa_2184__$1);
var scaled_mantissa_2198 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_2189),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_2184__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_2187)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_2187 - (base_mantissa_width_2197 - (1))) - (((k_2189 < (0)))?(- k_2189):(0))),"0")):null))].join('');
var w_mantissa_2199 = (cljs.core.truth_(w_2186)?(w_2186 - exp_width_2196):null);
var vec__2175_2200 = cljs.pprint.round_str(scaled_mantissa_2198,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_2189,(0)))?(d_2187 - (1)):(((k_2189 > (0)))?d_2187:(((k_2189 < (0)))?(d_2187 - (1)):null))),(cljs.core.truth_(w_mantissa_2199)?(w_mantissa_2199 - (cljs.core.truth_(add_sign_2191)?(1):(0))):null));
var rounded_mantissa_2201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2175_2200,(0),null);
var __2202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2175_2200,(1),null);
var incr_exp_2203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2175_2200,(2),null);
var full_mantissa_2204 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_2201,k_2189);
var append_zero_2205 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_2189,cljs.core.count(rounded_mantissa_2201))) && ((d_2187 == null));
if(cljs.core.not(incr_exp_2203)){
if(cljs.core.truth_(w_2186)){
var len_2206 = (cljs.core.count(full_mantissa_2204) + exp_width_2196);
var signed_len_2207 = (cljs.core.truth_(add_sign_2191)?(len_2206 + (1)):len_2206);
var prepend_zero_2208__$1 = (prepend_zero_2192) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_2207,w_2186)));
var full_len_2209 = ((prepend_zero_2208__$1)?(signed_len_2207 + (1)):signed_len_2207);
var append_zero_2210__$1 = (append_zero_2205) && ((full_len_2209 < w_2186));
if(cljs.core.truth_((function (){var and__22202__auto__ = (function (){var or__22217__auto__ = (full_len_2209 > w_2186);
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = e_2188;
if(cljs.core.truth_(and__22202__auto__)){
return ((exp_width_2196 - (2)) > e_2188);
} else {
return and__22202__auto__;
}
}
})();
if(cljs.core.truth_(and__22202__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_2186,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_2186 - full_len_2209) - ((append_zero_2210__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_2191)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_2208__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_2204),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_2210__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_2195__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_2191)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_2192)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_2204),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_2205)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_2195__$1)].join('')], 0));
}
} else {
var G__2211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_2201,(exp_2185__$1 + (1))], null);
G__2168_2182__$1 = G__2211;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__2212 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2212,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2212,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__2215 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2215,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2215,(1),null);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,(0)))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__22485__auto__ = cljs.core.count(mantissa);
var y__22486__auto__ = (function (){var x__22499__auto__ = n;
var y__22500__auto__ = (7);
return ((x__22499__auto__ < y__22500__auto__) ? x__22499__auto__ : y__22500__auto__);
})();
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",(354169001)),ww,new cljs.core.Keyword(null,"d","d",(1972142424)),dd,new cljs.core.Keyword(null,"k","k",(-2146297393)),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__2218 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2218,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2218,(1),null);
var vec__2221 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2221,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2221,(1),null);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg < (0));
}
})();
var vec__2224 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2224,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2224,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2224,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__22202__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return add_sign;
} else {
return and__22202__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params));
if(and__22202__auto__){
return add_sign;
} else {
return and__22202__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",(762528866)).cljs$core$IFn$_invoke$arity$1(params);
var vec__2227 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2227,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2227,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__2230 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2230,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2230,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__2233 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2233,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2233,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__2236 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2236,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2236,(1),null);
var vec__2239 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2239,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2239,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__2242 = (count + (1));
var G__2243 = iter_result;
var G__2244 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__2242;
args__$1 = G__2243;
last_pos = G__2244;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__2245 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2245,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2245,(1),null);
var vec__2248 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2248,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2248,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__2251 = (count + (1));
var G__2252 = cljs.core.next(arg_list__$1);
count = G__2251;
arg_list__$1 = G__2252;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__2253 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2253,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2253,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__2256 = (count + (1));
var G__2257 = iter_result;
var G__2258 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__2256;
navigator__$2 = G__2257;
last_pos = G__2258;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__2259 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2259,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2259,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__2262 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2262,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2262,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__2265 = (count + (1));
var G__2266 = navigator__$3;
count = G__2265;
navigator__$2 = G__2266;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block(params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses(params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__2267 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_2270 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2270;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2267,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2267,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__2271 = cljs.core.next(clauses__$1);
var G__2272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__2273 = iter_result;
clauses__$1 = G__2271;
acc = G__2272;
navigator__$1 = G__2273;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__2274 = (function (){var temp__22039__auto__ = new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__22039__auto__)){
var else$ = temp__22039__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__2277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2274,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2274,(1),null);
var navigator__$1 = (function (){var or__22217__auto__ = new_navigator;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return navigator;
}
})();
var vec__2280 = (function (){var temp__22039__auto__ = new cljs.core.Keyword(null,"else-params","else-params",(-832171646)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__22039__auto__)){
var p = temp__22039__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2280,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2280,(1),null);
var navigator__$2 = (function (){var or__22217__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__22217__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__22217__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var vec__2283 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2283,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2283,(1),null);
var slots = (function (){var x__22485__auto__ = (1);
var y__22486__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__22485__auto__ = minpad;
var y__22486__auto__ = cljs.core.quot(total_pad,slots);
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__22202__auto__ = eol_str;
if(cljs.core.truth_(and__22202__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_2286__$1 = slots;
var extra_pad_2287__$1 = extra_pad;
var strs_2288__$1 = strs;
var pad_only_2289 = (function (){var or__22217__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_2288__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_2288__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_2289))?cljs.core.first(strs_2288__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__22217__auto__ = pad_only_2289;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.next(strs_2288__$1);
if(or__22217__auto____$1){
return or__22217__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_2287__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__2290 = (slots_2286__$1 - (1));
var G__2291 = (extra_pad_2287__$1 - (1));
var G__2292 = (cljs.core.truth_(pad_only_2289)?strs_2288__$1:cljs.core.next(strs_2288__$1));
var G__2293 = false;
slots_2286__$1 = G__2290;
extra_pad_2287__$1 = G__2291;
strs_2288__$1 = G__2292;
pad_only_2289 = G__2293;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint2294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint2294 = (function (writer,meta2295){
this.writer = writer;
this.meta2295 = meta2295;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2296,meta2295__$1){
var self__ = this;
var _2296__$1 = this;
return (new cljs.pprint.t_cljs$pprint2294(self__.writer,meta2295__$1));
});

cljs.pprint.t_cljs$pprint2294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2296){
var self__ = this;
var _2296__$1 = this;
return self__.meta2295;
});

cljs.pprint.t_cljs$pprint2294.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint2294.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2297 = cljs.core._EQ_;
var expr__2298 = cljs.core.type(x);
if(cljs.core.truth_((pred__2297.cljs$core$IFn$_invoke$arity$2 ? pred__2297.cljs$core$IFn$_invoke$arity$2(String,expr__2298) : pred__2297(String,expr__2298)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__2297.cljs$core$IFn$_invoke$arity$2 ? pred__2297.cljs$core$IFn$_invoke$arity$2(Number,expr__2298) : pred__2297(Number,expr__2298)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2298)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint2294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta2295","meta2295",(-1865745126),null)], null);
});

cljs.pprint.t_cljs$pprint2294.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2294.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2294";

cljs.pprint.t_cljs$pprint2294.cljs$lang$ctorPrWriter = (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint2294");
});

cljs.pprint.__GT_t_cljs$pprint2294 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint2294(writer__$1,meta2295){
return (new cljs.pprint.t_cljs$pprint2294(writer__$1,meta2295));
});

}

return (new cljs.pprint.t_cljs$pprint2294(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint2300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint2300 = (function (writer,meta2301){
this.writer = writer;
this.meta2301 = meta2301;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2302,meta2301__$1){
var self__ = this;
var _2302__$1 = this;
return (new cljs.pprint.t_cljs$pprint2300(self__.writer,meta2301__$1));
});

cljs.pprint.t_cljs$pprint2300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2302){
var self__ = this;
var _2302__$1 = this;
return self__.meta2301;
});

cljs.pprint.t_cljs$pprint2300.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint2300.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2303 = cljs.core._EQ_;
var expr__2304 = cljs.core.type(x);
if(cljs.core.truth_((pred__2303.cljs$core$IFn$_invoke$arity$2 ? pred__2303.cljs$core$IFn$_invoke$arity$2(String,expr__2304) : pred__2303(String,expr__2304)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__2303.cljs$core$IFn$_invoke$arity$2 ? pred__2303.cljs$core$IFn$_invoke$arity$2(Number,expr__2304) : pred__2303(Number,expr__2304)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2304)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint2300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta2301","meta2301",(231324670),null)], null);
});

cljs.pprint.t_cljs$pprint2300.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2300.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2300";

cljs.pprint.t_cljs$pprint2300.cljs$lang$ctorPrWriter = (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint2300");
});

cljs.pprint.__GT_t_cljs$pprint2300 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint2300(writer__$1,meta2301){
return (new cljs.pprint.t_cljs$pprint2300(writer__$1,meta2301));
});

}

return (new cljs.pprint.t_cljs$pprint2300(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__22202__auto__ = first_QMARK_;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = f;
if(cljs.core.truth_(and__22202__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__22202__auto__ = m;
if(cljs.core.truth_(and__22202__auto__)){
return (m.index + (1));
} else {
return and__22202__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint2306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint2306 = (function (writer,last_was_whitespace_QMARK_,meta2307){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta2307 = meta2307;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_2308,meta2307__$1){
var self__ = this;
var _2308__$1 = this;
return (new cljs.pprint.t_cljs$pprint2306(self__.writer,self__.last_was_whitespace_QMARK_,meta2307__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_2308){
var self__ = this;
var _2308__$1 = this;
return self__.meta2307;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2306.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2306.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2309 = cljs.core._EQ_;
var expr__2310 = cljs.core.type(x);
if(cljs.core.truth_((pred__2309.cljs$core$IFn$_invoke$arity$2 ? pred__2309.cljs$core$IFn$_invoke$arity$2(String,expr__2310) : pred__2309(String,expr__2310)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__2312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__2312);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__2309.cljs$core$IFn$_invoke$arity$2 ? pred__2309.cljs$core$IFn$_invoke$arity$2(Number,expr__2310) : pred__2309(Number,expr__2310)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2310)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2306.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",(-1073928093),null),new cljs.core.Symbol(null,"meta2307","meta2307",(258511232),null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2306.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2306.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2306";

cljs.pprint.t_cljs$pprint2306.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint2306");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint2306 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint2306(writer__$1,last_was_whitespace_QMARK___$1,meta2307){
return (new cljs.pprint.t_cljs$pprint2306(writer__$1,last_was_whitespace_QMARK___$1,meta2307));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint2306(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint2313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint2313 = (function (writer,capped,meta2314){
this.writer = writer;
this.capped = capped;
this.meta2314 = meta2314;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_2315,meta2314__$1){
var self__ = this;
var _2315__$1 = this;
return (new cljs.pprint.t_cljs$pprint2313(self__.writer,self__.capped,meta2314__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint2313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_2315){
var self__ = this;
var _2315__$1 = this;
return self__.meta2314;
});})(capped))
;

cljs.pprint.t_cljs$pprint2313.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint2313.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2316 = cljs.core._EQ_;
var expr__2317 = cljs.core.type(x);
if(cljs.core.truth_((pred__2316.cljs$core$IFn$_invoke$arity$2 ? pred__2316.cljs$core$IFn$_invoke$arity$2(String,expr__2317) : pred__2316(String,expr__2317)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__22202__auto__ = m;
if(cljs.core.truth_(and__22202__auto__)){
return m.index;
} else {
return and__22202__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__2316.cljs$core$IFn$_invoke$arity$2 ? pred__2316.cljs$core$IFn$_invoke$arity$2(Number,expr__2317) : pred__2316(Number,expr__2317)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__22202__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__22202__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2317)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint2313.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"capped","capped",(-1650988402),null),new cljs.core.Symbol(null,"meta2314","meta2314",(-230332835),null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint2313.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2313.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2313";

cljs.pprint.t_cljs$pprint2313.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint2313");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint2313 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint2313(writer__$1,capped__$1,meta2314){
return (new cljs.pprint.t_cljs$pprint2313(writer__$1,capped__$1,meta2314));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint2313(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_2319 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer(cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2319;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_2321 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_2322 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var current_2323 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_2324 = (((current_2323 < colnum_2321))?(colnum_2321 - current_2323):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_2322,(0)))?(0):(colinc_2322 - cljs.core.rem((current_2323 - colnum_2321),colinc_2322))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_2324," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_2325 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_2326 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var start_col_2327 = (colrel_2325 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_2328 = (((colinc_2326 > (0)))?cljs.core.rem(start_col_2327,colinc_2326):(0));
var space_count_2329 = (colrel_2325 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_2328))?(0):(colinc_2326 - offset_2328)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_2329," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__2330 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2330,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2330,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2333_2335 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2334_2336 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2334_2336;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2333_2335;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",(-1088038603)):new cljs.core.Keyword(null,"block","block",(664686210)));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)):new cljs.core.Keyword(null,"fill","fill",(883462889))):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",(-556060186)):new cljs.core.Keyword(null,"linear","linear",(872268697))));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"A",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__119_SHARP_,p2__120_SHARP_,p3__121_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__119_SHARP_,p2__120_SHARP_,p3__121_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"S",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__122_SHARP_,p2__123_SHARP_,p3__124_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__122_SHARP_,p2__123_SHARP_,p3__124_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"D",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__125_SHARP_,p2__126_SHARP_,p3__127_SHARP_){
return cljs.pprint.format_integer((10),p1__125_SHARP_,p2__126_SHARP_,p3__127_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"B",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__128_SHARP_,p2__129_SHARP_,p3__130_SHARP_){
return cljs.pprint.format_integer((2),p1__128_SHARP_,p2__129_SHARP_,p3__130_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"O",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__131_SHARP_,p2__132_SHARP_,p3__133_SHARP_){
return cljs.pprint.format_integer((8),p1__131_SHARP_,p2__132_SHARP_,p3__133_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"X",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__134_SHARP_,p2__135_SHARP_,p3__136_SHARP_){
return cljs.pprint.format_integer((16),p1__134_SHARP_,p2__135_SHARP_,p3__136_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"R",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__137_SHARP_,p2__138_SHARP_,p3__139_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(p1__137_SHARP_),p1__137_SHARP_,p2__138_SHARP_,p3__139_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__22202__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
return (function (p1__140_SHARP_,p2__141_SHARP_,p3__142_SHARP_){
return cljs.pprint.format_old_roman(p1__140_SHARP_,p2__141_SHARP_,p3__142_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__143_SHARP_,p2__144_SHARP_,p3__145_SHARP_){
return cljs.pprint.format_new_roman(p1__143_SHARP_,p2__144_SHARP_,p3__145_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__146_SHARP_,p2__147_SHARP_,p3__148_SHARP_){
return cljs.pprint.format_ordinal_english(p1__146_SHARP_,p2__147_SHARP_,p3__148_SHARP_);
});
} else {
return (function (p1__149_SHARP_,p2__150_SHARP_,p3__151_SHARP_){
return cljs.pprint.format_cardinal_english(p1__149_SHARP_,p2__150_SHARP_,p3__151_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"P",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__2337 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2337,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2337,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"C",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"F",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"E",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"G",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"$",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"%",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__23117__auto___2355 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_2356 = (0);
while(true){
if((i_2356 < n__23117__auto___2355)){
cljs.pprint.prn();

var G__2357 = (i_2356 + (1));
i_2356 = G__2357;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"&",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_2358 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_2358 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__23117__auto___2359 = (cnt_2358 - (1));
var i_2360 = (0);
while(true){
if((i_2360 < n__23117__auto___2359)){
cljs.pprint.prn();

var G__2361 = (i_2360 + (1));
i_2360 = G__2361;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"|",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__23117__auto___2362 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_2363 = (0);
while(true){
if((i_2363 < n__23117__auto___2362)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__2364 = (i_2363 + (1));
i_2363 = G__2364;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"~",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"\n",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"T",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",(2023796854)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__152_SHARP_,p2__153_SHARP_,p3__154_SHARP_){
return cljs.pprint.relative_tabulation(p1__152_SHARP_,p2__153_SHARP_,p3__154_SHARP_);
});
} else {
return (function (p1__155_SHARP_,p2__156_SHARP_,p3__157_SHARP_){
return cljs.pprint.absolute_tabulation(p1__155_SHARP_,p2__156_SHARP_,p3__157_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"*",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"?",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__2340 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2340,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2340,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__2343 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2343,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2343,(1),null);
var vec__2346 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2346,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2346,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"(",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__22202__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__158_SHARP_,p2__159_SHARP_,p3__160_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__158_SHARP_,p2__159_SHARP_,p3__160_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),")",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"[",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",(762528866)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"last","last",(1105735132))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),";",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"]",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"{",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",(-452581833)),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var and__22202__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"}",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"<",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"first","first",(-644103046))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),">",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"^",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",(951899358)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",(1729550917)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",(951899358)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",(1729550917)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)):new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)));
if(cljs.core.truth_((function (){var and__22202__auto__ = arg1;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = arg2;
if(cljs.core.truth_(and__22202__auto____$1)){
return arg3;
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__22202__auto__ = arg1;
if(cljs.core.truth_(and__22202__auto__)){
return arg2;
} else {
return and__22202__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"W",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var or__22217__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",(1290497552)),null,new cljs.core.Keyword(null,"length","length",(588987862)),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__2349 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2349,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2349,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__2352 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2352,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2352,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"_",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"I",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)),null,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__2365){
var vec__2366 = p__2365;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2366,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2366,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2366,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__2369){
var vec__2370 = p__2369;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2370,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2370,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["v",null,"V",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",(-965200945)),"@",new cljs.core.Keyword(null,"at","at",(1476951349))], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__2373){
var vec__2374 = p__2373;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2374,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2374,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2374,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",(-393648840)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
var and__22202__auto____$1 = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__22202__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__22499__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__22500__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__22499__auto__ < y__22500__auto__) ? x__22499__auto__ : y__22500__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__161_SHARP_,p2__162_SHARP_){
var val = cljs.core.first(p1__161_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__162_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__162_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__161_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__22960__auto__ = (function cljs$pprint$map_params_$_iter__2377(s__2378){
return (new cljs.core.LazySeq(null,(function (){
var s__2378__$1 = s__2378;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__2378__$1);
if(temp__22039__auto__){
var s__2378__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2378__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__2378__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__2380 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__2379 = (0);
while(true){
if((i__2379 < size__22959__auto__)){
var vec__2381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__2379);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2381,(0),null);
var vec__2384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2381,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2384,(0),null);
cljs.core.chunk_append(b__2380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__2393 = (i__2379 + (1));
i__2379 = G__2393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2380),cljs$pprint$map_params_$_iter__2377(cljs.core.chunk_rest(s__2378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2380),null);
}
} else {
var vec__2387 = cljs.core.first(s__2378__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2387,(0),null);
var vec__2390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2387,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2390,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__2377(cljs.core.rest(s__2378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__163_SHARP_,p2__164_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__163_SHARP_,p2__164_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__165_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__165_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__2394 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2394,(0),null);
var vec__2397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2394,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2397,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2397,(1),null);
var vec__2400 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2400,(0),null);
var vec__2403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2400,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2403,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2403,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2403,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__2406 = new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__2406.cljs$core$IFn$_invoke$arity$2 ? fexpr__2406.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__2406(params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",(-1989541586)),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__22202__auto__ = new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__22202__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__22202__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__2407 = (function (){var G__2410 = new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$));
var G__2411 = new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$);
var G__2412 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__2410,G__2411,G__2412) : cljs.pprint.collect_clauses(G__2410,G__2411,G__2412));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2407,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2407,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",(-1508377146)),null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__2413){
var vec__2414 = p__2413;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2414,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2414,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2414,(2),null);
var vec__2417 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2417,(0),null);
var vec__2420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2417,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2420,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2420,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2420,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2420,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",(-1508377146)):new cljs.core.Keyword(null,"clauses","clauses",(1454841241))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",(-1508377146)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",(-832171646)),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",(-1628749125)))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_2423 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_2423){
return (function (p__2424){
var vec__2425 = p__2424;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2425,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2425,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_2423))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_2423;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__22217__auto__ = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__22217__auto____$1)){
return or__22217__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__2428 = cljs.core.next(format__$1);
format__$1 = G__2428;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__2430 = arguments.length;
switch (G__2430) {
case (3):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__22202__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__22202__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_2431 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2431;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__2432 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2432,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2432,(1),null);
var vec__2435 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2435,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2435,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = (3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),"'",new cljs.core.Symbol(null,"var","var",(870848730),null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",(843087510),null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",(1013085760),null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__2439 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__2439) : cljs.pprint.reader_macros(G__2439));
})();
if(cljs.core.truth_((function (){var and__22202__auto__ = macro_char;
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2440_2443 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2441_2444 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count2442_2445 = (0);
var alis_2446__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2442_2445 < cljs.core._STAR_print_length_STAR_))){
if(alis_2446__$1){
cljs.pprint.write_out(cljs.core.first(alis_2446__$1));

if(cljs.core.next(alis_2446__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2447 = (length_count2442_2445 + (1));
var G__2448 = cljs.core.next(alis_2446__$1);
length_count2442_2445 = G__2447;
alis_2446__$1 = G__2448;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2441_2444;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2440_2443;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2449_2452 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2450_2453 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2451_2454 = (0);
var aseq_2455 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2451_2454 < cljs.core._STAR_print_length_STAR_))){
if(aseq_2455){
cljs.pprint.write_out(cljs.core.first(aseq_2455));

if(cljs.core.next(aseq_2455)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2456 = (length_count2451_2454 + (1));
var G__2457 = cljs.core.next(aseq_2455);
length_count2451_2454 = G__2456;
aseq_2455 = G__2457;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2450_2453;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2449_2452;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__105__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2458__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2458 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2459__i = 0, G__2459__a = new Array(arguments.length -  0);
while (G__2459__i < G__2459__a.length) {G__2459__a[G__2459__i] = arguments[G__2459__i + 0]; ++G__2459__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2459__a,0,null);
} 
return G__2458__delegate.call(this,args__107__auto__);};
G__2458.cljs$lang$maxFixedArity = 0;
G__2458.cljs$lang$applyTo = (function (arglist__2460){
var args__107__auto__ = cljs.core.seq(arglist__2460);
return G__2458__delegate(args__107__auto__);
});
G__2458.cljs$core$IFn$_invoke$arity$variadic = G__2458__delegate;
return G__2458;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__2461 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__2464 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",(463499081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",(770546058),null),new cljs.core.Symbol(null,"lift-ns","lift-ns",(602311926),null),"cljs/core.cljs",(15),(1),(9841),(9841),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__2464.cljs$core$IFn$_invoke$arity$1 ? fexpr__2464.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__2464(amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2461,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2461,(1),null);
var amap__$1 = (function (){var or__22217__auto__ = lift_map;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2465_2470 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2466_2471 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count2467_2472 = (0);
var aseq_2473 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2467_2472 < cljs.core._STAR_print_length_STAR_))){
if(aseq_2473){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2468_2474 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2469_2475 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_2473));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_2473)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2469_2475;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2468_2474;
}}


if(cljs.core.next(aseq_2473)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2476 = (length_count2467_2472 + (1));
var G__2477 = cljs.core.next(aseq_2473);
length_count2467_2472 = G__2476;
aseq_2473 = G__2477;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2466_2471;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2465_2470;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__105__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2478__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2478 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2479__i = 0, G__2479__a = new Array(arguments.length -  0);
while (G__2479__i < G__2479__a.length) {G__2479__a[G__2479__i] = arguments[G__2479__i + 0]; ++G__2479__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2479__a,0,null);
} 
return G__2478__delegate.call(this,args__107__auto__);};
G__2478.cljs$lang$maxFixedArity = 0;
G__2478.cljs$lang$applyTo = (function (arglist__2480){
var args__107__auto__ = cljs.core.seq(arglist__2480);
return G__2478__delegate(args__107__auto__);
});
G__2478.cljs$core$IFn$_invoke$arity$variadic = G__2478__delegate;
return G__2478;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__22217__auto__ = (function (){var temp__22039__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__22039__auto__)){
var match = temp__22039__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map(match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2481_2485 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2482_2486 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint.write_out((((function (){var and__22202__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__22202__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__22202__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",(1599158697)):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2482_2486;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2481_2485;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__105__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2487__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2487 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2488__i = 0, G__2488__a = new Array(arguments.length -  0);
while (G__2488__i < G__2488__a.length) {G__2488__a[G__2488__i] = arguments[G__2488__i + 0]; ++G__2488__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2488__a,0,null);
} 
return G__2487__delegate.call(this,args__107__auto__);};
G__2487.cljs$lang$maxFixedArity = 0;
G__2487.cljs$lang$applyTo = (function (arglist__2489){
var args__107__auto__ = cljs.core.seq(arglist__2489);
return G__2487__delegate(args__107__auto__);
});
G__2487.cljs$core$IFn$_invoke$arity$variadic = G__2487__delegate;
return G__2487;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",(1455835879));
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",(-145586795));
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",(-1038572696));
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",(765357683));
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__2491 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2491,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2491,(1),null);
var vec__2494 = reference;
var seq__2495 = cljs.core.seq(vec__2494);
var first__2496 = cljs.core.first(seq__2495);
var seq__2495__$1 = cljs.core.next(seq__2495);
var keyw = first__2496;
var args = seq__2495__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2497_2513 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2498_2514 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__2499_2515 = (function (){var format_in__105__auto__ = "~w~:i";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2516__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2516 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2517__i = 0, G__2517__a = new Array(arguments.length -  0);
while (G__2517__i < G__2517__a.length) {G__2517__a[G__2517__i] = arguments[G__2517__i + 0]; ++G__2517__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2517__a,0,null);
} 
return G__2516__delegate.call(this,args__107__auto__);};
G__2516.cljs$lang$maxFixedArity = 0;
G__2516.cljs$lang$applyTo = (function (arglist__2518){
var args__107__auto__ = cljs.core.seq(arglist__2518);
return G__2516__delegate(args__107__auto__);
});
G__2516.cljs$core$IFn$_invoke$arity$variadic = G__2516__delegate;
return G__2516;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2499_2515.cljs$core$IFn$_invoke$arity$1 ? fexpr__2499_2515.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__2499_2515(keyw));

var args_2519__$1 = args;
while(true){
if(cljs.core.seq(args_2519__$1)){
var fexpr__2500_2520 = (function (){var format_in__105__auto__ = " ";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2521__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2521 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2522__i = 0, G__2522__a = new Array(arguments.length -  0);
while (G__2522__i < G__2522__a.length) {G__2522__a[G__2522__i] = arguments[G__2522__i + 0]; ++G__2522__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2522__a,0,null);
} 
return G__2521__delegate.call(this,args__107__auto__);};
G__2521.cljs$lang$maxFixedArity = 0;
G__2521.cljs$lang$applyTo = (function (arglist__2523){
var args__107__auto__ = cljs.core.seq(arglist__2523);
return G__2521__delegate(args__107__auto__);
});
G__2521.cljs$core$IFn$_invoke$arity$variadic = G__2521__delegate;
return G__2521;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2500_2520.cljs$core$IFn$_invoke$arity$0 ? fexpr__2500_2520.cljs$core$IFn$_invoke$arity$0() : fexpr__2500_2520());

var arg_2524 = cljs.core.first(args_2519__$1);
if(cljs.core.sequential_QMARK_(arg_2524)){
var vec__2501_2525 = cljs.pprint.brackets(arg_2524);
var start_2526__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2501_2525,(0),null);
var end_2527__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2501_2525,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2504_2528 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2505_2529 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_2526__$1,null,end_2527__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_2524),(3))) && ((cljs.core.second(arg_2524) instanceof cljs.core.Keyword))){
var vec__2506_2530 = arg_2524;
var ns_2531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2506_2530,(0),null);
var kw_2532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2506_2530,(1),null);
var lis_2533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2506_2530,(2),null);
var fexpr__2509_2534 = (function (){var format_in__105__auto__ = "~w ~w ";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2506_2530,ns_2531,kw_2532,lis_2533,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2535__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2535 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2536__i = 0, G__2536__a = new Array(arguments.length -  0);
while (G__2536__i < G__2536__a.length) {G__2536__a[G__2536__i] = arguments[G__2536__i + 0]; ++G__2536__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2536__a,0,null);
} 
return G__2535__delegate.call(this,args__107__auto__);};
G__2535.cljs$lang$maxFixedArity = 0;
G__2535.cljs$lang$applyTo = (function (arglist__2537){
var args__107__auto__ = cljs.core.seq(arglist__2537);
return G__2535__delegate(args__107__auto__);
});
G__2535.cljs$core$IFn$_invoke$arity$variadic = G__2535__delegate;
return G__2535;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2506_2530,ns_2531,kw_2532,lis_2533,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2509_2534.cljs$core$IFn$_invoke$arity$2 ? fexpr__2509_2534.cljs$core$IFn$_invoke$arity$2(ns_2531,kw_2532) : fexpr__2509_2534(ns_2531,kw_2532));

if(cljs.core.sequential_QMARK_(lis_2533)){
var fexpr__2510_2538 = (function (){var format_in__105__auto__ = ((cljs.core.vector_QMARK_(lis_2533))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2506_2530,ns_2531,kw_2532,lis_2533,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2539__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2539 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2540__i = 0, G__2540__a = new Array(arguments.length -  0);
while (G__2540__i < G__2540__a.length) {G__2540__a[G__2540__i] = arguments[G__2540__i + 0]; ++G__2540__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2540__a,0,null);
} 
return G__2539__delegate.call(this,args__107__auto__);};
G__2539.cljs$lang$maxFixedArity = 0;
G__2539.cljs$lang$applyTo = (function (arglist__2541){
var args__107__auto__ = cljs.core.seq(arglist__2541);
return G__2539__delegate(args__107__auto__);
});
G__2539.cljs$core$IFn$_invoke$arity$variadic = G__2539__delegate;
return G__2539;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2506_2530,ns_2531,kw_2532,lis_2533,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2510_2538.cljs$core$IFn$_invoke$arity$1 ? fexpr__2510_2538.cljs$core$IFn$_invoke$arity$1(lis_2533) : fexpr__2510_2538(lis_2533));
} else {
cljs.pprint.write_out(lis_2533);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__105__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2542__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2542 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2543__i = 0, G__2543__a = new Array(arguments.length -  0);
while (G__2543__i < G__2543__a.length) {G__2543__a[G__2543__i] = arguments[G__2543__i + 0]; ++G__2543__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2543__a,0,null);
} 
return G__2542__delegate.call(this,args__107__auto__);};
G__2542.cljs$lang$maxFixedArity = 0;
G__2542.cljs$lang$applyTo = (function (arglist__2544){
var args__107__auto__ = cljs.core.seq(arglist__2544);
return G__2542__delegate(args__107__auto__);
});
G__2542.cljs$core$IFn$_invoke$arity$variadic = G__2542__delegate;
return G__2542;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2504_2528,_STAR_current_length_STAR_2505_2529,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})(),arg_2524);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2505_2529;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2504_2528;
}}


if(cljs.core.next(args_2519__$1)){
var fexpr__2511_2545 = (function (){var format_in__105__auto__ = "~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2546__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2546 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2547__i = 0, G__2547__a = new Array(arguments.length -  0);
while (G__2547__i < G__2547__a.length) {G__2547__a[G__2547__i] = arguments[G__2547__i + 0]; ++G__2547__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2547__a,0,null);
} 
return G__2546__delegate.call(this,args__107__auto__);};
G__2546.cljs$lang$maxFixedArity = 0;
G__2546.cljs$lang$applyTo = (function (arglist__2548){
var args__107__auto__ = cljs.core.seq(arglist__2548);
return G__2546__delegate(args__107__auto__);
});
G__2546.cljs$core$IFn$_invoke$arity$variadic = G__2546__delegate;
return G__2546;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,vec__2501_2525,start_2526__$1,end_2527__$1,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2511_2545.cljs$core$IFn$_invoke$arity$0 ? fexpr__2511_2545.cljs$core$IFn$_invoke$arity$0() : fexpr__2511_2545());
} else {
}
} else {
cljs.pprint.write_out(arg_2524);

if(cljs.core.next(args_2519__$1)){
var fexpr__2512_2549 = (function (){var format_in__105__auto__ = "~:_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (args_2519__$1,format_in__105__auto__,cf__106__auto__,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args){
return (function() { 
var G__2550__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2550 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2551__i = 0, G__2551__a = new Array(arguments.length -  0);
while (G__2551__i < G__2551__a.length) {G__2551__a[G__2551__i] = arguments[G__2551__i + 0]; ++G__2551__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2551__a,0,null);
} 
return G__2550__delegate.call(this,args__107__auto__);};
G__2550.cljs$lang$maxFixedArity = 0;
G__2550.cljs$lang$applyTo = (function (arglist__2552){
var args__107__auto__ = cljs.core.seq(arglist__2552);
return G__2550__delegate(args__107__auto__);
});
G__2550.cljs$core$IFn$_invoke$arity$variadic = G__2550__delegate;
return G__2550;
})()
;
;})(args_2519__$1,format_in__105__auto__,cf__106__auto__,arg_2524,_STAR_current_level_STAR_2497_2513,_STAR_current_length_STAR_2498_2514,vec__2491,start,end,vec__2494,seq__2495,first__2496,seq__2495__$1,keyw,args))
})();
(fexpr__2512_2549.cljs$core$IFn$_invoke$arity$0 ? fexpr__2512_2549.cljs$core$IFn$_invoke$arity$0() : fexpr__2512_2549());
} else {
}
}

var G__2553 = cljs.core.next(args_2519__$1);
args_2519__$1 = G__2553;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2498_2514;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2497_2513;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__2554 = alis;
var seq__2555 = cljs.core.seq(vec__2554);
var first__2556 = cljs.core.first(seq__2555);
var seq__2555__$1 = cljs.core.next(seq__2555);
var ns_sym = first__2556;
var first__2556__$1 = cljs.core.first(seq__2555__$1);
var seq__2555__$2 = cljs.core.next(seq__2555__$1);
var ns_name = first__2556__$1;
var stuff = seq__2555__$2;
var vec__2557 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2557,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2557,(1),null);
var vec__2560 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2560,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2560,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2563_2570 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2564_2571 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__2565_2572 = (function (){var format_in__105__auto__ = "~w ~1I~@_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references){
return (function() { 
var G__2573__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2573 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2574__i = 0, G__2574__a = new Array(arguments.length -  0);
while (G__2574__i < G__2574__a.length) {G__2574__a[G__2574__i] = arguments[G__2574__i + 0]; ++G__2574__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2574__a,0,null);
} 
return G__2573__delegate.call(this,args__107__auto__);};
G__2573.cljs$lang$maxFixedArity = 0;
G__2573.cljs$lang$applyTo = (function (arglist__2575){
var args__107__auto__ = cljs.core.seq(arglist__2575);
return G__2573__delegate(args__107__auto__);
});
G__2573.cljs$core$IFn$_invoke$arity$variadic = G__2573__delegate;
return G__2573;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references))
})();
(fexpr__2565_2572.cljs$core$IFn$_invoke$arity$2 ? fexpr__2565_2572.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__2565_2572(ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = attr_map;
if(cljs.core.truth_(or__22217__auto____$1)){
return or__22217__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__2566_2576 = (function (){var format_in__105__auto__ = "~@:_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references){
return (function() { 
var G__2577__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2577 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2578__i = 0, G__2578__a = new Array(arguments.length -  0);
while (G__2578__i < G__2578__a.length) {G__2578__a[G__2578__i] = arguments[G__2578__i + 0]; ++G__2578__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2578__a,0,null);
} 
return G__2577__delegate.call(this,args__107__auto__);};
G__2577.cljs$lang$maxFixedArity = 0;
G__2577.cljs$lang$applyTo = (function (arglist__2579){
var args__107__auto__ = cljs.core.seq(arglist__2579);
return G__2577__delegate(args__107__auto__);
});
G__2577.cljs$core$IFn$_invoke$arity$variadic = G__2577__delegate;
return G__2577;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references))
})();
(fexpr__2566_2576.cljs$core$IFn$_invoke$arity$0 ? fexpr__2566_2576.cljs$core$IFn$_invoke$arity$0() : fexpr__2566_2576());
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__22217__auto__ = attr_map;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__2568_2580 = attr_map;
var G__2569_2581 = cljs.core.seq(references);
var fexpr__2567_2582 = (function (){var format_in__105__auto__ = "~w~:[~;~:@_~]";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,G__2568_2580,G__2569_2581,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references){
return (function() { 
var G__2583__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2583 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2584__i = 0, G__2584__a = new Array(arguments.length -  0);
while (G__2584__i < G__2584__a.length) {G__2584__a[G__2584__i] = arguments[G__2584__i + 0]; ++G__2584__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2584__a,0,null);
} 
return G__2583__delegate.call(this,args__107__auto__);};
G__2583.cljs$lang$maxFixedArity = 0;
G__2583.cljs$lang$applyTo = (function (arglist__2585){
var args__107__auto__ = cljs.core.seq(arglist__2585);
return G__2583__delegate(args__107__auto__);
});
G__2583.cljs$core$IFn$_invoke$arity$variadic = G__2583__delegate;
return G__2583;
})()
;
;})(format_in__105__auto__,cf__106__auto__,G__2568_2580,G__2569_2581,_STAR_current_level_STAR_2563_2570,_STAR_current_length_STAR_2564_2571,vec__2554,seq__2555,first__2556,seq__2555__$1,ns_sym,first__2556__$1,seq__2555__$2,ns_name,stuff,vec__2557,doc_str,stuff__$1,vec__2560,attr_map,references))
})();
(fexpr__2567_2582.cljs$core$IFn$_invoke$arity$2 ? fexpr__2567_2582.cljs$core$IFn$_invoke$arity$2(G__2568_2580,G__2569_2581) : fexpr__2567_2582(G__2568_2580,G__2569_2581));
} else {
}

var references_2586__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_2586__$1));

var temp__22039__auto___2587 = cljs.core.next(references_2586__$1);
if(temp__22039__auto___2587){
var references_2588__$2 = temp__22039__auto___2587;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2589 = references_2588__$2;
references_2586__$1 = G__2589;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2564_2571;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2563_2570;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__105__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2590__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2590 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2591__i = 0, G__2591__a = new Array(arguments.length -  0);
while (G__2591__i < G__2591__a.length) {G__2591__a[G__2591__i] = arguments[G__2591__i + 0]; ++G__2591__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2591__a,0,null);
} 
return G__2590__delegate.call(this,args__107__auto__);};
G__2590.cljs$lang$maxFixedArity = 0;
G__2590.cljs$lang$applyTo = (function (arglist__2592){
var args__107__auto__ = cljs.core.seq(arglist__2592);
return G__2590__delegate(args__107__auto__);
});
G__2590.cljs$core$IFn$_invoke$arity$variadic = G__2590__delegate;
return G__2590;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__2593_2596 = (function (){var format_in__105__auto__ = " ~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2597__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2597 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2598__i = 0, G__2598__a = new Array(arguments.length -  0);
while (G__2598__i < G__2598__a.length) {G__2598__a[G__2598__i] = arguments[G__2598__i + 0]; ++G__2598__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2598__a,0,null);
} 
return G__2597__delegate.call(this,args__107__auto__);};
G__2597.cljs$lang$maxFixedArity = 0;
G__2597.cljs$lang$applyTo = (function (arglist__2599){
var args__107__auto__ = cljs.core.seq(arglist__2599);
return G__2597__delegate(args__107__auto__);
});
G__2597.cljs$core$IFn$_invoke$arity$variadic = G__2597__delegate;
return G__2597;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
(fexpr__2593_2596.cljs$core$IFn$_invoke$arity$0 ? fexpr__2593_2596.cljs$core$IFn$_invoke$arity$0() : fexpr__2593_2596());
} else {
var fexpr__2594_2600 = (function (){var format_in__105__auto__ = " ~@_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2601__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2601 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2602__i = 0, G__2602__a = new Array(arguments.length -  0);
while (G__2602__i < G__2602__a.length) {G__2602__a[G__2602__i] = arguments[G__2602__i + 0]; ++G__2602__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2602__a,0,null);
} 
return G__2601__delegate.call(this,args__107__auto__);};
G__2601.cljs$lang$maxFixedArity = 0;
G__2601.cljs$lang$applyTo = (function (arglist__2603){
var args__107__auto__ = cljs.core.seq(arglist__2603);
return G__2601__delegate(args__107__auto__);
});
G__2601.cljs$core$IFn$_invoke$arity$variadic = G__2601__delegate;
return G__2601;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
(fexpr__2594_2600.cljs$core$IFn$_invoke$arity$0 ? fexpr__2594_2600.cljs$core$IFn$_invoke$arity$0() : fexpr__2594_2600());
}

var fexpr__2595 = (function (){var format_in__105__auto__ = "~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2604__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2604 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2605__i = 0, G__2605__a = new Array(arguments.length -  0);
while (G__2605__i < G__2605__a.length) {G__2605__a[G__2605__i] = arguments[G__2605__i + 0]; ++G__2605__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2605__a,0,null);
} 
return G__2604__delegate.call(this,args__107__auto__);};
G__2604.cljs$lang$maxFixedArity = 0;
G__2604.cljs$lang$applyTo = (function (arglist__2606){
var args__107__auto__ = cljs.core.seq(arglist__2606);
return G__2604__delegate(args__107__auto__);
});
G__2604.cljs$core$IFn$_invoke$arity$variadic = G__2604__delegate;
return G__2604;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
return (fexpr__2595.cljs$core$IFn$_invoke$arity$1 ? fexpr__2595.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__2595(alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__2607 = (function (){var format_in__105__auto__ = " ~_~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2608__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2608 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2609__i = 0, G__2609__a = new Array(arguments.length -  0);
while (G__2609__i < G__2609__a.length) {G__2609__a[G__2609__i] = arguments[G__2609__i + 0]; ++G__2609__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2609__a,0,null);
} 
return G__2608__delegate.call(this,args__107__auto__);};
G__2608.cljs$lang$maxFixedArity = 0;
G__2608.cljs$lang$applyTo = (function (arglist__2610){
var args__107__auto__ = cljs.core.seq(arglist__2610);
return G__2608__delegate(args__107__auto__);
});
G__2608.cljs$core$IFn$_invoke$arity$variadic = G__2608__delegate;
return G__2608;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
return (fexpr__2607.cljs$core$IFn$_invoke$arity$1 ? fexpr__2607.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__2607(alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__2611 = alis;
var seq__2612 = cljs.core.seq(vec__2611);
var first__2613 = cljs.core.first(seq__2612);
var seq__2612__$1 = cljs.core.next(seq__2612);
var defn_sym = first__2613;
var first__2613__$1 = cljs.core.first(seq__2612__$1);
var seq__2612__$2 = cljs.core.next(seq__2612__$1);
var defn_name = first__2613__$1;
var stuff = seq__2612__$2;
var vec__2614 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2614,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2614,(1),null);
var vec__2617 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2617,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2617,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2620_2625 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2621_2626 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__2622_2627 = (function (){var format_in__105__auto__ = "~w ~1I~@_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2){
return (function() { 
var G__2628__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2628 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2629__i = 0, G__2629__a = new Array(arguments.length -  0);
while (G__2629__i < G__2629__a.length) {G__2629__a[G__2629__i] = arguments[G__2629__i + 0]; ++G__2629__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2629__a,0,null);
} 
return G__2628__delegate.call(this,args__107__auto__);};
G__2628.cljs$lang$maxFixedArity = 0;
G__2628.cljs$lang$applyTo = (function (arglist__2630){
var args__107__auto__ = cljs.core.seq(arglist__2630);
return G__2628__delegate(args__107__auto__);
});
G__2628.cljs$core$IFn$_invoke$arity$variadic = G__2628__delegate;
return G__2628;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2))
})();
(fexpr__2622_2627.cljs$core$IFn$_invoke$arity$2 ? fexpr__2622_2627.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__2622_2627(defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__2623_2631 = (function (){var format_in__105__auto__ = " ~_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2){
return (function() { 
var G__2632__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2632 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2633__i = 0, G__2633__a = new Array(arguments.length -  0);
while (G__2633__i < G__2633__a.length) {G__2633__a[G__2633__i] = arguments[G__2633__i + 0]; ++G__2633__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2633__a,0,null);
} 
return G__2632__delegate.call(this,args__107__auto__);};
G__2632.cljs$lang$maxFixedArity = 0;
G__2632.cljs$lang$applyTo = (function (arglist__2634){
var args__107__auto__ = cljs.core.seq(arglist__2634);
return G__2632__delegate(args__107__auto__);
});
G__2632.cljs$core$IFn$_invoke$arity$variadic = G__2632__delegate;
return G__2632;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2))
})();
(fexpr__2623_2631.cljs$core$IFn$_invoke$arity$1 ? fexpr__2623_2631.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__2623_2631(doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__2624_2635 = (function (){var format_in__105__auto__ = " ~_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2){
return (function() { 
var G__2636__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2636 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2637__i = 0, G__2637__a = new Array(arguments.length -  0);
while (G__2637__i < G__2637__a.length) {G__2637__a[G__2637__i] = arguments[G__2637__i + 0]; ++G__2637__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2637__a,0,null);
} 
return G__2636__delegate.call(this,args__107__auto__);};
G__2636.cljs$lang$maxFixedArity = 0;
G__2636.cljs$lang$applyTo = (function (arglist__2638){
var args__107__auto__ = cljs.core.seq(arglist__2638);
return G__2636__delegate(args__107__auto__);
});
G__2636.cljs$core$IFn$_invoke$arity$variadic = G__2636__delegate;
return G__2636;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2620_2625,_STAR_current_length_STAR_2621_2626,vec__2611,seq__2612,first__2613,seq__2612__$1,defn_sym,first__2613__$1,seq__2612__$2,defn_name,stuff,vec__2614,doc_str,stuff__$1,vec__2617,attr_map,stuff__$2))
})();
(fexpr__2624_2635.cljs$core$IFn$_invoke$arity$1 ? fexpr__2624_2635.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__2624_2635(attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2621_2626;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2620_2625;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2639_2644 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2640_2645 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2641_2646 = (0);
var binding_2647 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2641_2646 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_2647)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2642_2648 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2643_2649 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_2647));

if(cljs.core.next(binding_2647)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(binding_2647));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2643_2649;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2642_2648;
}}


if(cljs.core.next(cljs.core.rest(binding_2647))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2650 = (length_count2641_2646 + (1));
var G__2651 = cljs.core.next(cljs.core.rest(binding_2647));
length_count2641_2646 = G__2650;
binding_2647 = G__2651;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2640_2645;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2639_2644;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2652_2657 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2653_2658 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__2654_2659 = (function (){var format_in__105__auto__ = "~w ~1I~@_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2652_2657,_STAR_current_length_STAR_2653_2658,base_sym){
return (function() { 
var G__2660__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2660 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2661__i = 0, G__2661__a = new Array(arguments.length -  0);
while (G__2661__i < G__2661__a.length) {G__2661__a[G__2661__i] = arguments[G__2661__i + 0]; ++G__2661__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2661__a,0,null);
} 
return G__2660__delegate.call(this,args__107__auto__);};
G__2660.cljs$lang$maxFixedArity = 0;
G__2660.cljs$lang$applyTo = (function (arglist__2662){
var args__107__auto__ = cljs.core.seq(arglist__2662);
return G__2660__delegate(args__107__auto__);
});
G__2660.cljs$core$IFn$_invoke$arity$variadic = G__2660__delegate;
return G__2660;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2652_2657,_STAR_current_length_STAR_2653_2658,base_sym))
})();
(fexpr__2654_2659.cljs$core$IFn$_invoke$arity$1 ? fexpr__2654_2659.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__2654_2659(base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__2656_2663 = cljs.core.next(cljs.core.rest(alis));
var fexpr__2655_2664 = (function (){var format_in__105__auto__ = " ~_~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,G__2656_2663,_STAR_current_level_STAR_2652_2657,_STAR_current_length_STAR_2653_2658,base_sym){
return (function() { 
var G__2665__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2665 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2666__i = 0, G__2666__a = new Array(arguments.length -  0);
while (G__2666__i < G__2666__a.length) {G__2666__a[G__2666__i] = arguments[G__2666__i + 0]; ++G__2666__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2666__a,0,null);
} 
return G__2665__delegate.call(this,args__107__auto__);};
G__2665.cljs$lang$maxFixedArity = 0;
G__2665.cljs$lang$applyTo = (function (arglist__2667){
var args__107__auto__ = cljs.core.seq(arglist__2667);
return G__2665__delegate(args__107__auto__);
});
G__2665.cljs$core$IFn$_invoke$arity$variadic = G__2665__delegate;
return G__2665;
})()
;
;})(format_in__105__auto__,cf__106__auto__,G__2656_2663,_STAR_current_level_STAR_2652_2657,_STAR_current_length_STAR_2653_2658,base_sym))
})();
(fexpr__2655_2664.cljs$core$IFn$_invoke$arity$1 ? fexpr__2655_2664.cljs$core$IFn$_invoke$arity$1(G__2656_2663) : fexpr__2655_2664(G__2656_2663));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2653_2658;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2652_2657;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__105__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__2668__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2668 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2669__i = 0, G__2669__a = new Array(arguments.length -  0);
while (G__2669__i < G__2669__a.length) {G__2669__a[G__2669__i] = arguments[G__2669__i + 0]; ++G__2669__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2669__a,0,null);
} 
return G__2668__delegate.call(this,args__107__auto__);};
G__2668.cljs$lang$maxFixedArity = 0;
G__2668.cljs$lang$applyTo = (function (arglist__2670){
var args__107__auto__ = cljs.core.seq(arglist__2670);
return G__2668__delegate(args__107__auto__);
});
G__2668.cljs$core$IFn$_invoke$arity$variadic = G__2668__delegate;
return G__2668;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2671_2676 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2672_2677 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var length_count2673_2678 = (0);
var alis_2679__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2673_2678 < cljs.core._STAR_print_length_STAR_))){
if(alis_2679__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2674_2680 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2675_2681 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_2679__$1));

if(cljs.core.next(alis_2679__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(alis_2679__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2675_2681;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2674_2680;
}}


if(cljs.core.next(cljs.core.rest(alis_2679__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2682 = (length_count2673_2678 + (1));
var G__2683 = cljs.core.next(cljs.core.rest(alis_2679__$1));
length_count2673_2678 = G__2682;
alis_2679__$1 = G__2683;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2672_2677;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2671_2676;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2684_2689 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2685_2690 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__105__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2684_2689,_STAR_current_length_STAR_2685_2690){
return (function() { 
var G__2691__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2691 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2692__i = 0, G__2692__a = new Array(arguments.length -  0);
while (G__2692__i < G__2692__a.length) {G__2692__a[G__2692__i] = arguments[G__2692__i + 0]; ++G__2692__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2692__a,0,null);
} 
return G__2691__delegate.call(this,args__107__auto__);};
G__2691.cljs$lang$maxFixedArity = 0;
G__2691.cljs$lang$applyTo = (function (arglist__2693){
var args__107__auto__ = cljs.core.seq(arglist__2693);
return G__2691__delegate(args__107__auto__);
});
G__2691.cljs$core$IFn$_invoke$arity$variadic = G__2691__delegate;
return G__2691;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_2684_2689,_STAR_current_length_STAR_2685_2690))
})(),alis);

var length_count2686_2694 = (0);
var alis_2695__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2686_2694 < cljs.core._STAR_print_length_STAR_))){
if(alis_2695__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2687_2696 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2688_2697 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_2695__$1));

if(cljs.core.next(alis_2695__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(alis_2695__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2688_2697;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2687_2696;
}}


if(cljs.core.next(cljs.core.rest(alis_2695__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2698 = (length_count2686_2694 + (1));
var G__2699 = cljs.core.next(cljs.core.rest(alis_2695__$1));
length_count2686_2694 = G__2698;
alis_2695__$1 = G__2699;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2685_2690;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2684_2689;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_2700 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_2700,args,nlis){
return (function (p1__166_SHARP_,p2__167_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__166_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__167_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_2700,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__2701 = (function (){var format_in__105__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile(format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_symbol_map_STAR_2700,args,nlis){
return (function() { 
var G__2702__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__2702 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__2703__i = 0, G__2703__a = new Array(arguments.length -  0);
while (G__2703__i < G__2703__a.length) {G__2703__a[G__2703__i] = arguments[G__2703__i + 0]; ++G__2703__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__2703__a,0,null);
} 
return G__2702__delegate.call(this,args__107__auto__);};
G__2702.cljs$lang$maxFixedArity = 0;
G__2702.cljs$lang$applyTo = (function (arglist__2704){
var args__107__auto__ = cljs.core.seq(arglist__2704);
return G__2702__delegate(args__107__auto__);
});
G__2702.cljs$core$IFn$_invoke$arity$variadic = G__2702__delegate;
return G__2702;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_symbol_map_STAR_2700,args,nlis))
})();
return (fexpr__2701.cljs$core$IFn$_invoke$arity$1 ? fexpr__2701.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__2701(nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_2700;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2705_2708 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2706_2709 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

var length_count2707_2710 = (0);
var alis_2711__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2707_2710 < cljs.core._STAR_print_length_STAR_))){
if(alis_2711__$1){
cljs.pprint.write_out(cljs.core.first(alis_2711__$1));

if(cljs.core.next(alis_2711__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2712 = (length_count2707_2710 + (1));
var G__2713 = cljs.core.next(alis_2711__$1);
length_count2707_2710 = G__2712;
alis_2711__$1 = G__2713;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2706_2709;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2705_2708;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__22960__auto__ = (function cljs$pprint$two_forms_$_iter__2714(s__2715){
return (new cljs.core.LazySeq(null,(function (){
var s__2715__$1 = s__2715;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__2715__$1);
if(temp__22039__auto__){
var s__2715__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2715__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__2715__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__2717 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__2716 = (0);
while(true){
if((i__2716 < size__22959__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__2716);
cljs.core.chunk_append(b__2717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__2718 = (i__2716 + (1));
i__2716 = G__2718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2717),cljs$pprint$two_forms_$_iter__2714(cljs.core.chunk_rest(s__2715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2717),null);
}
} else {
var x = cljs.core.first(s__2715__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__2714(cljs.core.rest(s__2715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__168_SHARP_){
var vec__2719 = p1__168_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2719,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2719,(1),null);
if(cljs.core.not((function (){var or__22217__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__168_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",(1975675962),null),new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.Symbol(null,"when-first","when-first",(821699168),null),new cljs.core.Symbol(null,"if","if",(1181717262),null),new cljs.core.Symbol(null,"condp","condp",(1054325175),null),new cljs.core.Symbol(null,"..","..",(-300507420),null),new cljs.core.Symbol(null,"defmacro","defmacro",(2054157304),null),new cljs.core.Symbol(null,"defn","defn",(-126010802),null),new cljs.core.Symbol(null,"loop","loop",(1244978678),null),new cljs.core.Symbol(null,"struct","struct",(325972931),null),new cljs.core.Symbol(null,"doseq","doseq",(221164135),null),new cljs.core.Symbol(null,"if-not","if-not",(-265415609),null),new cljs.core.Symbol(null,"when-not","when-not",(-1223136340),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"when","when",(1064114221),null),new cljs.core.Symbol(null,"with-open","with-open",(172119667),null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",(837642072),null),new cljs.core.Symbol(null,"defonce","defonce",(-1681484013),null),new cljs.core.Symbol(null,"when-let","when-let",(-1383043480),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"dotimes","dotimes",(-818708397),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"let","let",(358118826),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"defn-","defn-",(1097765044),null),new cljs.core.Symbol(null,"locking","locking",(1542862874),null),new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"if-let","if-let",(1803593690),null),new cljs.core.Symbol(null,"binding","binding",(-2114503176),null),new cljs.core.Symbol(null,"struct-map","struct-map",(-1387540878),null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__21984__auto__ = (function (){var G__2722 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__2722) : cljs.pprint._STAR_code_table_STAR_(G__2722));
})();
if(cljs.core.truth_(temp__21984__auto__)){
var special_form = temp__21984__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form(alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__21984__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym(cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__21984__auto__)){
var arg_num = temp__21984__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr(sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",(-145586795)),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__22485__auto__ = (0);
var y__22486__auto__ = (width - cljs.core.count(s));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__2724 = arguments.length;
switch (G__2724) {
case (2):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_2725 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_2725){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_2725){
return (function (p1__169_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__169_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_2725))
,rows));
});})(_STAR_print_newline_STAR_2725))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_2725){
return (function (p1__170_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__170_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_2725))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_2725){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__22960__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_2725){
return (function cljs$pprint$iter__2726(s__2727){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_2725){
return (function (){
var s__2727__$1 = s__2727;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__2727__$1);
if(temp__22039__auto__){
var s__2727__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2727__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__2727__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__2729 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__2728 = (0);
while(true){
if((i__2728 < size__22959__auto__)){
var vec__2730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__2728);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2730,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2730,(1),null);
cljs.core.chunk_append(b__2729,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__2741 = (i__2728 + (1));
i__2728 = G__2741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2729),cljs$pprint$iter__2726(cljs.core.chunk_rest(s__2727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2729),null);
}
} else {
var vec__2733 = cljs.core.first(s__2727__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2733,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2733,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__2726(cljs.core.rest(s__2727__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_2725))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_2725))
;
return iter__22960__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__22960__auto__,widths,spacers,_STAR_print_newline_STAR_2725){
return (function (p1__171_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__171_SHARP_);
});})(iter__22960__auto__,widths,spacers,_STAR_print_newline_STAR_2725))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_2725))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__2736 = cljs.core.seq(rows);
var chunk__2737 = null;
var count__2738 = (0);
var i__2739 = (0);
while(true){
if((i__2739 < count__2738)){
var row = chunk__2737.cljs$core$IIndexed$_nth$arity$2(null,i__2739);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__2742 = seq__2736;
var G__2743 = chunk__2737;
var G__2744 = count__2738;
var G__2745 = (i__2739 + (1));
seq__2736 = G__2742;
chunk__2737 = G__2743;
count__2738 = G__2744;
i__2739 = G__2745;
continue;
} else {
var temp__22039__auto__ = cljs.core.seq(seq__2736);
if(temp__22039__auto__){
var seq__2736__$1 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2736__$1)){
var c__22996__auto__ = cljs.core.chunk_first(seq__2736__$1);
var G__2746 = cljs.core.chunk_rest(seq__2736__$1);
var G__2747 = c__22996__auto__;
var G__2748 = cljs.core.count(c__22996__auto__);
var G__2749 = (0);
seq__2736 = G__2746;
chunk__2737 = G__2747;
count__2738 = G__2748;
i__2739 = G__2749;
continue;
} else {
var row = cljs.core.first(seq__2736__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__2750 = cljs.core.next(seq__2736__$1);
var G__2751 = null;
var G__2752 = (0);
var G__2753 = (0);
seq__2736 = G__2750;
chunk__2737 = G__2751;
count__2738 = G__2752;
i__2739 = G__2753;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_2725;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = (2);

