goog.provide("cljs.core.async.impl.timers");
(function (){
cljs.core.async.impl.timers.MAX_LEVEL = (15); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.MAX_LEVEL;},new cljs.core.Symbol("cljs.core.async.impl.timers","MAX_LEVEL","cljs.core.async.impl.timers/MAX_LEVEL",(-1236050824),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"MAX_LEVEL","MAX_LEVEL",(626617873),null),"cljs/core/async/impl/timers.cljs",(15),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.timers.MAX_LEVEL)?cljs.core.async.impl.timers.MAX_LEVEL.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.timers.P = ((1) / (2)); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.P;},new cljs.core.Symbol("cljs.core.async.impl.timers","P","cljs.core.async.impl.timers/P",(1346920457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"P","P",(-985522478),null),"cljs/core/async/impl/timers.cljs",(7),(1),(15),(15),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.timers.P)?cljs.core.async.impl.timers.P.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var args58 = [];
var len__23656__auto___61 = arguments.length;
var i__23657__auto___62 = (0);
while(true){
if((i__23657__auto___62 < len__23656__auto___61)){
args58.push((arguments[i__23657__auto___62]));

var G__63 = (i__23657__auto___62 + (1));
i__23657__auto___62 = G__63;
continue;
} else {
}
break;
}

var G__60 = args58.length;
switch (G__60) {
case (0):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.random_level;},new cljs.core.Symbol("cljs.core.async.impl.timers","random-level","cljs.core.async.impl.timers/random-level",(814702589),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"random-level","random-level",(-1014428604),null),"cljs/core/async/impl/timers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(17),(17),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.random_level)?cljs.core.async.impl.timers.random_level.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL))){
var G__65 = (level + (1));
level = G__65;
continue;
} else {
return level;
}
break;
}
});

cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.core.async.impl.timers.random_level;},new cljs.core.Symbol("cljs.core.async.impl.timers","random-level","cljs.core.async.impl.timers/random-level",(814702589),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"random-level","random-level",(-1014428604),null),"cljs/core/async/impl/timers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(17),(17),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.random_level)?cljs.core.async.impl.timers.random_level.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var x__23399__auto__ = self__.key;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = self__.val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"forward","forward",(1083186224),null)], null);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

(function (){
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.__GT_SkipListNode;},new cljs.core.Symbol("cljs.core.async.impl.timers","->SkipListNode","cljs.core.async.impl.timers/->SkipListNode",(-1578976177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"->SkipListNode","->SkipListNode",(217673440),null),"cljs/core/async/impl/timers.cljs",(22),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"forward","forward",(1083186224),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.timers.__GT_SkipListNode)?cljs.core.async.impl.timers.__GT_SkipListNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var args66 = [];
var len__23656__auto___69 = arguments.length;
var i__23657__auto___70 = (0);
while(true){
if((i__23657__auto___70 < len__23656__auto___69)){
args66.push((arguments[i__23657__auto___70]));

var G__71 = (i__23657__auto___70 + (1));
i__23657__auto___70 = G__71;
continue;
} else {
}
break;
}

var G__68 = args66.length;
switch (G__68) {
case (1):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (3):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.skip_list_node;},new cljs.core.Symbol("cljs.core.async.impl.timers","skip-list-node","cljs.core.async.impl.timers/skip-list-node",(1587192613),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"skip-list-node","skip-list-node",(-878914150),null),"cljs/core/async/impl/timers.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.skip_list_node)?cljs.core.async.impl.timers.skip_list_node.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_73 = (0);
while(true){
if((i_73 < arr.length)){
(arr[i_73] = null);

var G__74 = (i_73 + (1));
i_73 = G__74;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});

cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.impl.timers.skip_list_node;},new cljs.core.Symbol("cljs.core.async.impl.timers","skip-list-node","cljs.core.async.impl.timers/skip-list-node",(1587192613),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"skip-list-node","skip-list-node",(-878914150),null),"cljs/core/async/impl/timers.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.skip_list_node)?cljs.core.async.impl.timers.skip_list_node.cljs$lang$test:null)]));
(function (){
cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var args75 = [];
var len__23656__auto___78 = arguments.length;
var i__23657__auto___79 = (0);
while(true){
if((i__23657__auto___79 < len__23656__auto___78)){
args75.push((arguments[i__23657__auto___79]));

var G__80 = (i__23657__auto___79 + (1));
i__23657__auto___79 = G__80;
continue;
} else {
}
break;
}

var G__77 = args75.length;
switch (G__77) {
case (3):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args75.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.least_greater_node;},new cljs.core.Symbol("cljs.core.async.impl.timers","least-greater-node","cljs.core.async.impl.timers/least-greater-node",(1837128581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"least-greater-node","least-greater-node",(-658897414),null),"cljs/core/async/impl/timers.cljs",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.least_greater_node)?cljs.core.async.impl.timers.least_greater_node.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__19520__auto__ = (x__$1.forward[level]);
if(cljs.core.truth_(temp__19520__auto__)){
var x_SINGLEQUOTE_ = temp__19520__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__82 = x_SINGLEQUOTE_;
x__$1 = G__82;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__83 = x__$1;
var G__84 = k;
var G__85 = (level - (1));
var G__86 = update;
x = G__83;
k = G__84;
level = G__85;
update = G__86;
continue;
} else {
return x;
}
break;
}
});

cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.async.impl.timers.least_greater_node;},new cljs.core.Symbol("cljs.core.async.impl.timers","least-greater-node","cljs.core.async.impl.timers/least-greater-node",(1837128581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"least-greater-node","least-greater-node",(-658897414),null),"cljs/core/async/impl/timers.cljs",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.timers.least_greater_node)?cljs.core.async.impl.timers.least_greater_node.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
var i_87 = (self__.level + (1));
while(true){
if((i_87 <= (new_level + (1)))){
(update[i_87] = self__.header);

var G__88 = (i_87 + (1));
i_87 = G__88;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
var i_89 = (0);
while(true){
if((i_89 <= self__.level)){
var links_90 = (update[i_89]).forward;
if(((links_90[i_89]) === x__$1)){
(links_90[i_89] = (x__$1.forward[i_89]));

var G__91 = (i_89 + (1));
i_89 = G__91;
continue;
} else {
var G__92 = (i_89 + (1));
i_89 = G__92;
continue;
}
} else {
}
break;
}

while(true){
if(((self__.level > (0))) && (((self__.header.forward[self__.level]) == null))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__93 = x_SINGLEQUOTE_;
x__$1 = G__93;
continue;
}
}
break;
}
})();
if(!((nx == null))){
var G__94 = nx;
var G__95 = (level__$1 - (1));
x = G__94;
level__$1 = G__95;
continue;
} else {
var G__96 = x;
var G__97 = (level__$1 - (1));
x = G__96;
level__$1 = G__97;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__98 = x_SINGLEQUOTE_;
x__$1 = G__98;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__99 = nx;
var G__100 = (level__$1 - (1));
x = G__99;
level__$1 = G__100;
continue;
} else {
var G__101 = x;
var G__102 = (level__$1 - (1));
x = G__101;
level__$1 = G__102;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",(1759972661),null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.timers/SkipList");
});

(function (){
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.__GT_SkipList;},new cljs.core.Symbol("cljs.core.async.impl.timers","->SkipList","cljs.core.async.impl.timers/->SkipList",(-1075342187),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core.async.impl.timers","Object","cljs.core.async.impl.timers/Object",(1889555309),null),null,new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"->SkipList","->SkipList",(685876972),null),"cljs/core/async/impl/timers.cljs",(18),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",(1759972661),null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.timers.__GT_SkipList)?cljs.core.async.impl.timers.__GT_SkipList.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.skip_list;},new cljs.core.Symbol("cljs.core.async.impl.timers","skip-list","cljs.core.async.impl.timers/skip-list",(-514231679),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"skip-list","skip-list",(-1772928982),null),"cljs/core/async/impl/timers.cljs",(16),(1),(145),(145),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.async.impl.timers.skip_list)?cljs.core.async.impl.timers.skip_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.timeouts_map;},new cljs.core.Symbol("cljs.core.async.impl.timers","timeouts-map","cljs.core.async.impl.timers/timeouts-map",(1886843656),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"timeouts-map","timeouts-map",(-478204461),null),"cljs/core/async/impl/timers.cljs",(18),(1),(148),(148),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.timers.timeouts_map)?cljs.core.async.impl.timers.timeouts_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS;},new cljs.core.Symbol("cljs.core.async.impl.timers","TIMEOUT_RESOLUTION_MS","cljs.core.async.impl.timers/TIMEOUT_RESOLUTION_MS",(-1733850794),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"TIMEOUT_RESOLUTION_MS","TIMEOUT_RESOLUTION_MS",(900613885),null),"cljs/core/async/impl/timers.cljs",(27),(1),(150),(150),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS)?cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS.cljs$lang$test:null)])));})()
;
/**
 * returns a channel that will close after msecs
 */
(function (){
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__20817__auto__ = (cljs.core.truth_((function (){var and__20770__auto__ = me;
if(cljs.core.truth_(and__20770__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__20770__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__20817__auto__,timeout,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__20817__auto__,timeout,me))
,msecs);

return timeout_channel;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.timers.timeout;},new cljs.core.Symbol("cljs.core.async.impl.timers","timeout","cljs.core.async.impl.timers/timeout",(-574306696),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.timers","cljs.core.async.impl.timers",(1485676638),null),new cljs.core.Symbol(null,"timeout","timeout",(1321906209),null),"cljs/core/async/impl/timers.cljs",(14),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msecs","msecs",(-942455216),null)], null)),"returns a channel that will close after msecs",(cljs.core.truth_(cljs.core.async.impl.timers.timeout)?cljs.core.async.impl.timers.timeout.cljs$lang$test:null)])));})()
;
