goog.provide("cljs.core.async");
(function (){
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args145 = [];
var len__23656__auto___151 = arguments.length;
var i__23657__auto___152 = (0);
while(true){
if((i__23657__auto___152 < len__23656__auto___151)){
args145.push((arguments[i__23657__auto___152]));

var G__153 = (i__23657__auto___152 + (1));
i__23657__auto___152 = G__153;
continue;
} else {
}
break;
}

var G__147 = args145.length;
switch (G__147) {
case (1):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args145.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.fn_handler;},new cljs.core.Symbol("cljs.core.async","fn-handler","cljs.core.async/fn-handler",(2140930848),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"fn-handler","fn-handler",(648785851),null),"cljs/core/async.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),null,(cljs.core.truth_(cljs.core.async.fn_handler)?cljs.core.async.fn_handler.cljs$lang$test:null)])));})()
;

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async148 = (function (f,blockable,meta149){
this.f = f;
this.blockable = blockable;
this.meta149 = meta149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150,meta149__$1){
var self__ = this;
var _150__$1 = this;
return (new cljs.core.async.t_cljs$core$async148(self__.f,self__.blockable,meta149__$1));
});

cljs.core.async.t_cljs$core$async148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150){
var self__ = this;
var _150__$1 = this;
return self__.meta149;
});

cljs.core.async.t_cljs$core$async148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null),new cljs.core.Symbol(null,"meta149","meta149",(-297869530),null)], null);
});

cljs.core.async.t_cljs$core$async148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async148";

cljs.core.async.t_cljs$core$async148.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async148");
});

(function (){
cljs.core.async.__GT_t_cljs$core$async148 = (function cljs$core$async$__GT_t_cljs$core$async148(f__$1,blockable__$1,meta149){
return (new cljs.core.async.t_cljs$core$async148(f__$1,blockable__$1,meta149));
}); return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async148;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async148","cljs.core.async/->t_cljs$core$async148",(1801167663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async148","->t_cljs$core$async148",(-1402194000),null),"cljs/core/async.cljs",true,(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(15),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null),new cljs.core.Symbol(null,"meta149","meta149",(-297869530),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async148)?cljs.core.async.__GT_t_cljs$core$async148.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async148(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.fn_handler;},new cljs.core.Symbol("cljs.core.async","fn-handler","cljs.core.async/fn-handler",(2140930848),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"fn-handler","fn-handler",(648785851),null),"cljs/core/async.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"blockable","blockable",(-28395259),null)], null)),null,(cljs.core.truth_(cljs.core.async.fn_handler)?cljs.core.async.fn_handler.cljs$lang$test:null)]));
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
(function (){
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
}); return (
new cljs.core.Var(function(){return cljs.core.async.buffer;},new cljs.core.Symbol("cljs.core.async","buffer","cljs.core.async/buffer",(-542699698),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),"cljs/core/async.cljs",(13),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Returns a fixed buffer of size n. When full, puts will block/park.",(cljs.core.truth_(cljs.core.async.buffer)?cljs.core.async.buffer.cljs$lang$test:null)])));})()
;
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
(function (){
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
}); return (
new cljs.core.Var(function(){return cljs.core.async.dropping_buffer;},new cljs.core.Symbol("cljs.core.async","dropping-buffer","cljs.core.async/dropping-buffer",(1774687601),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"dropping-buffer","dropping-buffer",(-1600636534),null),"cljs/core/async.cljs",(22),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Returns a buffer of size n. When full, puts will complete but\n  val will be dropped (no transfer).",(cljs.core.truth_(cljs.core.async.dropping_buffer)?cljs.core.async.dropping_buffer.cljs$lang$test:null)])));})()
;
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
(function (){
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
}); return (
new cljs.core.Var(function(){return cljs.core.async.sliding_buffer;},new cljs.core.Symbol("cljs.core.async","sliding-buffer","cljs.core.async/sliding-buffer",(1718631329),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"sliding-buffer","sliding-buffer",(759016662),null),"cljs/core/async.cljs",(21),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Returns a buffer of size n. When full, puts will complete, and be\n  buffered, but oldest elements in buffer will be dropped (not\n  transferred).",(cljs.core.truth_(cljs.core.async.sliding_buffer)?cljs.core.async.sliding_buffer.cljs$lang$test:null)])));})()
;
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
(function (){
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unblocking_buffer_QMARK_;},new cljs.core.Symbol("cljs.core.async","unblocking-buffer?","cljs.core.async/unblocking-buffer?",(-679926153),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unblocking-buffer?","unblocking-buffer?",(-1876575970),null),"cljs/core/async.cljs",(25),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buff","buff",(-1262863071),null)], null)),"Returns true if a channel created with buff will never block. That is to say,\n   puts into this buffer will never cause the buffer to be full. ",(cljs.core.truth_(cljs.core.async.unblocking_buffer_QMARK_)?cljs.core.async.unblocking_buffer_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
(function (){
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args157 = [];
var len__23656__auto___160 = arguments.length;
var i__23657__auto___161 = (0);
while(true){
if((i__23657__auto___161 < len__23656__auto___160)){
args157.push((arguments[i__23657__auto___161]));

var G__162 = (i__23657__auto___161 + (1));
i__23657__auto___161 = G__162;
continue;
} else {
}
break;
}

var G__159 = args157.length;
switch (G__159) {
case (0):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.chan;},new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"chan","chan",(-462490168),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(45),(45),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Creates a channel with an optional buffer, an optional transducer (like (map f),\n  (filter p) etc or a composition thereof), and an optional exception handler.\n  If buf-or-n is a number, will create and use a fixed buffer of that size. If a\n  transducer is supplied a buffer must be specified. ex-handler must be a\n  fn of one argument - if an exception occurs during transformation it will be called\n  with the thrown value as an argument, and any non-nil return value will be placed\n  in the channel.",(cljs.core.truth_(cljs.core.async.chan)?cljs.core.async.chan.cljs$lang$test:null)])));})()
;

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.chan;},new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"chan","chan",(-462490168),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(45),(45),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Creates a channel with an optional buffer, an optional transducer (like (map f),\n  (filter p) etc or a composition thereof), and an optional exception handler.\n  If buf-or-n is a number, will create and use a fixed buffer of that size. If a\n  transducer is supplied a buffer must be specified. ex-handler must be a\n  fn of one argument - if an exception occurs during transformation it will be called\n  with the thrown value as an argument, and any non-nil return value will be placed\n  in the channel.",(cljs.core.truth_(cljs.core.async.chan)?cljs.core.async.chan.cljs$lang$test:null)]));
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
(function (){
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args164 = [];
var len__23656__auto___167 = arguments.length;
var i__23657__auto___168 = (0);
while(true){
if((i__23657__auto___168 < len__23656__auto___167)){
args164.push((arguments[i__23657__auto___168]));

var G__169 = (i__23657__auto___168 + (1));
i__23657__auto___168 = G__169;
continue;
} else {
}
break;
}

var G__166 = args164.length;
switch (G__166) {
case (0):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args164.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.promise_chan;},new cljs.core.Symbol("cljs.core.async","promise-chan","cljs.core.async/promise-chan",(2017156358),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"promise-chan","promise-chan",(-1320228375),null),"cljs/core/async.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(67),(67),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Creates a promise channel with an optional transducer, and an optional\n  exception-handler. A promise channel can take exactly one value that consumers\n  will receive. Once full, puts complete but val is dropped (no transfer).\n  Consumers will block until either a value is placed in the channel or the\n  channel is closed. See chan for the semantics of xform and ex-handler.",(cljs.core.truth_(cljs.core.async.promise_chan)?cljs.core.async.promise_chan.cljs$lang$test:null)])));})()
;

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.promise_chan;},new cljs.core.Symbol("cljs.core.async","promise-chan","cljs.core.async/promise-chan",(2017156358),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"promise-chan","promise-chan",(-1320228375),null),"cljs/core/async.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(67),(67),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Creates a promise channel with an optional transducer, and an optional\n  exception-handler. A promise channel can take exactly one value that consumers\n  will receive. Once full, puts complete but val is dropped (no transfer).\n  Consumers will block until either a value is placed in the channel or the\n  channel is closed. See chan for the semantics of xform and ex-handler.",(cljs.core.truth_(cljs.core.async.promise_chan)?cljs.core.async.promise_chan.cljs$lang$test:null)]));
/**
 * Returns a channel that will close after msecs
 */
(function (){
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
}); return (
new cljs.core.Var(function(){return cljs.core.async.timeout;},new cljs.core.Symbol("cljs.core.async","timeout","cljs.core.async/timeout",(-2129255094),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"timeout","timeout",(1321906209),null),"cljs/core/async.cljs",(14),(1),(78),(78),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msecs","msecs",(-942455216),null)], null)),"Returns a channel that will close after msecs",(cljs.core.truth_(cljs.core.async.timeout)?cljs.core.async.timeout.cljs$lang$test:null)])));})()
;
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
(function (){
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
}); return (
new cljs.core.Var(function(){return cljs.core.async._LT__BANG_;},new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",(1278951036),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"<!","<!",(-1961915773),null),"cljs/core/async.cljs",(9),(1),(83),(83),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null)], null)),"takes a val from port. Must be called inside a (go ...) block. Will\n  return nil if closed. Will park if nothing is available.\n  Returns true unless port is already closed",(cljs.core.truth_(cljs.core.async._LT__BANG_)?cljs.core.async._LT__BANG_.cljs$lang$test:null)])));})()
;
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
(function (){
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args171 = [];
var len__23656__auto___174 = arguments.length;
var i__23657__auto___175 = (0);
while(true){
if((i__23657__auto___175 < len__23656__auto___174)){
args171.push((arguments[i__23657__auto___175]));

var G__176 = (i__23657__auto___175 + (1));
i__23657__auto___175 = G__176;
continue;
} else {
}
break;
}

var G__173 = args171.length;
switch (G__173) {
case (2):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args171.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.take_BANG_;},new cljs.core.Symbol("cljs.core.async","take!","cljs.core.async/take!",(1578226660),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"take!","take!",(626882591),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(90),(90),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),"Asynchronously takes a val from port, passing to fn1. Will pass nil\n   if closed. If on-caller? (default true) is true, and value is\n   immediately available, will call fn1 on calling thread.\n   Returns nil.",(cljs.core.truth_(cljs.core.async.take_BANG_)?cljs.core.async.take_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_178 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_178);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_178,ret){
return (function (){
return fn1.call(null,val_178);
});})(val_178,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.take_BANG_;},new cljs.core.Symbol("cljs.core.async","take!","cljs.core.async/take!",(1578226660),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"take!","take!",(626882591),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(90),(90),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),"Asynchronously takes a val from port, passing to fn1. Will pass nil\n   if closed. If on-caller? (default true) is true, and value is\n   immediately available, will call fn1 on calling thread.\n   Returns nil.",(cljs.core.truth_(cljs.core.async.take_BANG_)?cljs.core.async.take_BANG_.cljs$lang$test:null)]));
(function (){
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
}); return (
new cljs.core.Var(function(){return cljs.core.async.nop;},new cljs.core.Symbol("cljs.core.async","nop","cljs.core.async/nop",(-1309744464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"nop","nop",(-113543655),null),"cljs/core/async.cljs",(11),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),null,(cljs.core.truth_(cljs.core.async.nop)?cljs.core.async.nop.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop); return (
new cljs.core.Var(function(){return cljs.core.async.fhnop;},new cljs.core.Symbol("cljs.core.async","fhnop","cljs.core.async/fhnop",(-395853073),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"fhnop","fhnop",(591099460),null),"cljs/core/async.cljs",(21),(1),(106),(106),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.fhnop)?cljs.core.async.fhnop.cljs$lang$test:null)])));})()
;
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
(function (){
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
}); return (
new cljs.core.Var(function(){return cljs.core.async._GT__BANG_;},new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",(-950205298),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,">!",">!",(-1080922249),null),"cljs/core/async.cljs",(9),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"puts a val into port. nil values are not allowed. Must be called\n  inside a (go ...) block. Will park if no buffer space is available.\n  Returns true unless port is already closed.",(cljs.core.truth_(cljs.core.async._GT__BANG_)?cljs.core.async._GT__BANG_.cljs$lang$test:null)])));})()
;
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
(function (){
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args179 = [];
var len__23656__auto___182 = arguments.length;
var i__23657__auto___183 = (0);
while(true){
if((i__23657__auto___183 < len__23656__auto___182)){
args179.push((arguments[i__23657__auto___183]));

var G__184 = (i__23657__auto___183 + (1));
i__23657__auto___183 = G__184;
continue;
} else {
}
break;
}

var G__181 = args179.length;
switch (G__181) {
case (2):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args179.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.put_BANG_;},new cljs.core.Symbol("cljs.core.async","put!","cljs.core.async/put!",(681138889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"put!","put!",(-531220546),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(115),(115),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),"Asynchronously puts a val into port, calling fn0 (if supplied) when\n   complete. nil values are not allowed. Will throw if closed. If\n   on-caller? (default true) is true, and the put is immediately\n   accepted, will call fn0 on calling thread.  Returns nil.",(cljs.core.truth_(cljs.core.async.put_BANG_)?cljs.core.async.put_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__19520__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__19520__auto__)){
var ret = temp__19520__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__19520__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__19520__auto__)){
var retb = temp__19520__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__19520__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__19520__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.async.put_BANG_;},new cljs.core.Symbol("cljs.core.async","put!","cljs.core.async/put!",(681138889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"put!","put!",(-531220546),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(115),(115),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"on-caller?","on-caller?",(824964483),null)], null)),"Asynchronously puts a val into port, calling fn0 (if supplied) when\n   complete. nil values are not allowed. Will throw if closed. If\n   on-caller? (default true) is true, and the put is immediately\n   accepted, will call fn0 on calling thread.  Returns nil.",(cljs.core.truth_(cljs.core.async.put_BANG_)?cljs.core.async.put_BANG_.cljs$lang$test:null)]));
(function (){
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
}); return (
new cljs.core.Var(function(){return cljs.core.async.close_BANG_;},new cljs.core.Symbol("cljs.core.async","close!","cljs.core.async/close!",(741103410),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"close!","close!",(-438778971),null),"cljs/core/async.cljs",(13),(1),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null)], null)),null,(cljs.core.truth_(cljs.core.async.close_BANG_)?cljs.core.async.close_BANG_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__23475__auto___186 = n;
var x_187 = (0);
while(true){
if((x_187 < n__23475__auto___186)){
(a[x_187] = (0));

var G__188 = (x_187 + (1));
x_187 = G__188;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__189 = (i + (1));
i = G__189;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.random_array;},new cljs.core.Symbol("cljs.core.async","random-array","cljs.core.async/random-array",(786423755),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"random-array","random-array",(-451726148),null),"cljs/core/async.cljs",(20),(1),(139),(139),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.async.random_array)?cljs.core.async.random_array.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async193 = (function (flag,meta194){
this.flag = flag;
this.meta194 = meta194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_195,meta194__$1){
var self__ = this;
var _195__$1 = this;
return (new cljs.core.async.t_cljs$core$async193(self__.flag,meta194__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_195){
var self__ = this;
var _195__$1 = this;
return self__.meta194;
});})(flag))
;

cljs.core.async.t_cljs$core$async193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async193.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"meta194","meta194",(2003709448),null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async193";

cljs.core.async.t_cljs$core$async193.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async193");
});})(flag))
;

(function (){
cljs.core.async.__GT_t_cljs$core$async193 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async193(flag__$1,meta194){
return (new cljs.core.async.t_cljs$core$async193(flag__$1,meta194));
});})(flag))
; return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async193;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async193","cljs.core.async/->t_cljs$core$async193",(792062411),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async193","->t_cljs$core$async193",(-427912544),null),"cljs/core/async.cljs",true,(5),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(155),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"meta194","meta194",(2003709448),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async193)?cljs.core.async.__GT_t_cljs$core$async193.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async193(flag,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.alt_flag;},new cljs.core.Symbol("cljs.core.async","alt-flag","cljs.core.async/alt-flag",(-1395175627),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"alt-flag","alt-flag",(-1794972754),null),"cljs/core/async.cljs",(16),(1),(153),(153),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.async.alt_flag)?cljs.core.async.alt_flag.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async199 = (function (flag,cb,meta200){
this.flag = flag;
this.cb = cb;
this.meta200 = meta200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_201,meta200__$1){
var self__ = this;
var _201__$1 = this;
return (new cljs.core.async.t_cljs$core$async199(self__.flag,self__.cb,meta200__$1));
});

cljs.core.async.t_cljs$core$async199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_201){
var self__ = this;
var _201__$1 = this;
return self__.meta200;
});

cljs.core.async.t_cljs$core$async199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null),new cljs.core.Symbol(null,"meta200","meta200",(1681120003),null)], null);
});

cljs.core.async.t_cljs$core$async199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async199";

cljs.core.async.t_cljs$core$async199.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async199");
});

(function (){
cljs.core.async.__GT_t_cljs$core$async199 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async199(flag__$1,cb__$1,meta200){
return (new cljs.core.async.t_cljs$core$async199(flag__$1,cb__$1,meta200));
}); return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async199;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async199","cljs.core.async/->t_cljs$core$async199",(1607269792),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async199","->t_cljs$core$async199",(-1743230247),null),"cljs/core/async.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(164),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null),new cljs.core.Symbol(null,"meta200","meta200",(1681120003),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async199)?cljs.core.async.__GT_t_cljs$core$async199.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async199(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.alt_handler;},new cljs.core.Symbol("cljs.core.async","alt-handler","cljs.core.async/alt-handler",(-232349693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"alt-handler","alt-handler",(963786170),null),"cljs/core/async.cljs",(19),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",(-1565787888),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),null,(cljs.core.truth_(cljs.core.async.alt_handler)?cljs.core.async.alt_handler.cljs$lang$test:null)])));})()
;
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
(function (){
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",(1431093715)).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20817__auto__ = wport;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return port;
}
})()], null));
} else {
var G__202 = (i + (1));
i = G__202;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20817__auto__ = ret;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",(-1987822328)))){
var temp__19834__auto__ = (function (){var and__20770__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(temp__19834__auto__)){
var got = temp__19834__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",(-1987822328))], null));
} else {
return null;
}
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.do_alts;},new cljs.core.Symbol("cljs.core.async","do-alts","cljs.core.async/do-alts",(-270489113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"do-alts","do-alts",(657404956),null),"cljs/core/async.cljs",(14),(1),(172),(172),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fret","fret",(-911283525),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"returns derefable [val port] if immediate, nil if enqueued",(cljs.core.truth_(cljs.core.async.do_alts)?cljs.core.async.do_alts.cljs$lang$test:null)])));})()
;
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
(function (){
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___208 = arguments.length;
var i__23657__auto___209 = (0);
while(true){
if((i__23657__auto___209 < len__23656__auto___208)){
args__23658__auto__.push((arguments[i__23657__auto___209]));

var G__210 = (i__23657__auto___209 + (1));
i__23657__auto___209 = G__210;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.alts_BANG_;},new cljs.core.Symbol("cljs.core.async","alts!","cljs.core.async/alts!",(1340091011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(198),(198),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Completes at most one of several channel operations. Must be called\n   inside a (go ...) block. ports is a vector of channel endpoints,\n   which can be either a channel to take from or a vector of\n  [channel-to-put-to val-to-put], in any combination. Takes will be\n  made as if by <!, and puts will be made as if by >!. Unless\n  the :priority option is true, if more than one port operation is\n  ready a non-deterministic choice will be made. If no operation is\n  ready and a :default value is supplied, [default-val :default] will\n  be returned, otherwise alts! will park until the first operation to\n  become ready completes. Returns [val port] of the completed\n  operation, where val is the value taken for takes, and a\n  boolean (true unless already closed, as per put!) for puts.\n\n  opts are passed as :key val ... Supported options:\n\n  :default val - the value to use if none of the operations are immediately ready\n  :priority true - (default nil) when true, the operations will be tried in order.\n\n  Note: there is no guarantee that the port exps or val exprs will be\n  used, nor in what order should they be, so they should not be\n  depended upon for side effects.",(cljs.core.truth_(cljs.core.async.alts_BANG_)?cljs.core.async.alts_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__205){
var map__206 = p__205;
var map__206__$1 = ((((!((map__206 == null)))?((((map__206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__206):map__206);
var opts = map__206__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq203){
var G__204 = cljs.core.first.call(null,seq203);
var seq203__$1 = cljs.core.next.call(null,seq203);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__204,seq203__$1);
});

new cljs.core.Var(function(){return cljs.core.async.alts_BANG_;},new cljs.core.Symbol("cljs.core.async","alts!","cljs.core.async/alts!",(1340091011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(198),(198),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Completes at most one of several channel operations. Must be called\n   inside a (go ...) block. ports is a vector of channel endpoints,\n   which can be either a channel to take from or a vector of\n  [channel-to-put-to val-to-put], in any combination. Takes will be\n  made as if by <!, and puts will be made as if by >!. Unless\n  the :priority option is true, if more than one port operation is\n  ready a non-deterministic choice will be made. If no operation is\n  ready and a :default value is supplied, [default-val :default] will\n  be returned, otherwise alts! will park until the first operation to\n  become ready completes. Returns [val port] of the completed\n  operation, where val is the value taken for takes, and a\n  boolean (true unless already closed, as per put!) for puts.\n\n  opts are passed as :key val ... Supported options:\n\n  :default val - the value to use if none of the operations are immediately ready\n  :priority true - (default nil) when true, the operations will be tried in order.\n\n  Note: there is no guarantee that the port exps or val exprs will be\n  used, nor in what order should they be, so they should not be\n  depended upon for side effects.",(cljs.core.truth_(cljs.core.async.alts_BANG_)?cljs.core.async.alts_BANG_.cljs$lang$test:null)]));
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
(function (){
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.offer_BANG_;},new cljs.core.Symbol("cljs.core.async","offer!","cljs.core.async/offer!",(-1651850991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"offer!","offer!",(-715166584),null),"cljs/core/async.cljs",(13),(1),(224),(224),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Puts a val into port if it's possible to do so immediately.\n  nil values are not allowed. Never blocks. Returns true if offer succeeds.",(cljs.core.truth_(cljs.core.async.offer_BANG_)?cljs.core.async.offer_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
(function (){
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.poll_BANG_;},new cljs.core.Symbol("cljs.core.async","poll!","cljs.core.async/poll!",(-1056896780),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"poll!","poll!",(248296539),null),"cljs/core/async.cljs",(12),(1),(231),(231),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null)], null)),"Takes a val from port if it's possible to do so immediately.\n  Never blocks. Returns value if successful, nil otherwise.",(cljs.core.truth_(cljs.core.async.poll_BANG_)?cljs.core.async.poll_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
(function (){
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args211 = [];
var len__23656__auto___261 = arguments.length;
var i__23657__auto___262 = (0);
while(true){
if((i__23657__auto___262 < len__23656__auto___261)){
args211.push((arguments[i__23657__auto___262]));

var G__263 = (i__23657__auto___262 + (1));
i__23657__auto___262 = G__263;
continue;
} else {
}
break;
}

var G__213 = args211.length;
switch (G__213) {
case (2):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args211.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.pipe;},new cljs.core.Symbol("cljs.core.async","pipe","cljs.core.async/pipe",(-1125327057),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipe","pipe",(1977107376),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Takes elements from the from channel and supplies them to the to\n   channel. By default, the to channel will be closed when the from\n   channel closes, but can be determined by the close?  parameter. Will\n   stop consuming the from channel if the to channel closes",(cljs.core.truth_(cljs.core.async.pipe)?cljs.core.async.pipe.cljs$lang$test:null)])));})()
;

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8__auto___265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___265){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___265){
return (function (state_237){
var state_val_238 = (state_237[(1)]);
if((state_val_238 === (1))){
var state_237__$1 = state_237;
var statearr_239_266 = state_237__$1;
(statearr_239_266[(2)] = null);

(statearr_239_266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (2))){
var state_237__$1 = state_237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_237__$1,(4),from);
} else {
if((state_val_238 === (3))){
var inst_235 = (state_237[(2)]);
var state_237__$1 = state_237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_237__$1,inst_235);
} else {
if((state_val_238 === (4))){
var inst_216 = (state_237[(7)]);
var inst_216__$1 = (state_237[(2)]);
var inst_217 = (inst_216__$1 == null);
var state_237__$1 = (function (){var statearr_240 = state_237;
(statearr_240[(7)] = inst_216__$1);

return statearr_240;
})();
if(cljs.core.truth_(inst_217)){
var statearr_241_267 = state_237__$1;
(statearr_241_267[(1)] = (5));

} else {
var statearr_242_268 = state_237__$1;
(statearr_242_268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (5))){
var state_237__$1 = state_237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_243_269 = state_237__$1;
(statearr_243_269[(1)] = (8));

} else {
var statearr_244_270 = state_237__$1;
(statearr_244_270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (6))){
var inst_216 = (state_237[(7)]);
var state_237__$1 = state_237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_237__$1,(11),to,inst_216);
} else {
if((state_val_238 === (7))){
var inst_233 = (state_237[(2)]);
var state_237__$1 = state_237;
var statearr_245_271 = state_237__$1;
(statearr_245_271[(2)] = inst_233);

(statearr_245_271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (8))){
var inst_220 = cljs.core.async.close_BANG_.call(null,to);
var state_237__$1 = state_237;
var statearr_246_272 = state_237__$1;
(statearr_246_272[(2)] = inst_220);

(statearr_246_272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (9))){
var state_237__$1 = state_237;
var statearr_247_273 = state_237__$1;
(statearr_247_273[(2)] = null);

(statearr_247_273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (10))){
var inst_223 = (state_237[(2)]);
var state_237__$1 = state_237;
var statearr_248_274 = state_237__$1;
(statearr_248_274[(2)] = inst_223);

(statearr_248_274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (11))){
var inst_226 = (state_237[(2)]);
var state_237__$1 = state_237;
if(cljs.core.truth_(inst_226)){
var statearr_249_275 = state_237__$1;
(statearr_249_275[(1)] = (12));

} else {
var statearr_250_276 = state_237__$1;
(statearr_250_276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (12))){
var state_237__$1 = state_237;
var statearr_251_277 = state_237__$1;
(statearr_251_277[(2)] = null);

(statearr_251_277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (13))){
var state_237__$1 = state_237;
var statearr_252_278 = state_237__$1;
(statearr_252_278[(2)] = null);

(statearr_252_278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_238 === (14))){
var inst_231 = (state_237[(2)]);
var state_237__$1 = state_237;
var statearr_253_279 = state_237__$1;
(statearr_253_279[(2)] = inst_231);

(statearr_253_279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
});})(c__8__auto___265))
;
return ((function (switch__3__auto__,c__8__auto___265){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_257 = [null,null,null,null,null,null,null,null];
(statearr_257[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_257[(1)] = (1));

return statearr_257;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_237){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e258){if((e258 instanceof Object)){
var ex__7__auto__ = e258;
var statearr_259_280 = state_237;
(statearr_259_280[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_237);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__281 = state_237;
state_237 = G__281;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___265))
})();
var state__10__auto__ = (function (){var statearr_260 = f__9__auto__.call(null);
(statearr_260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___265);

return statearr_260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___265))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.pipe;},new cljs.core.Symbol("cljs.core.async","pipe","cljs.core.async/pipe",(-1125327057),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipe","pipe",(1977107376),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Takes elements from the from channel and supplies them to the to\n   channel. By default, the to channel will be closed when the from\n   channel closes, but can be determined by the close?  parameter. Will\n   stop consuming the from channel if the to channel closes",(cljs.core.truth_(cljs.core.async.pipe)?cljs.core.async.pipe.cljs$lang$test:null)]));
(function (){
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__469){
var vec__470 = p__469;
var v = cljs.core.nth.call(null,vec__470,(0),null);
var p = cljs.core.nth.call(null,vec__470,(1),null);
var job = vec__470;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8__auto___656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___656,res,vec__470,v,p,job,jobs,results){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___656,res,vec__470,v,p,job,jobs,results){
return (function (state_477){
var state_val_478 = (state_477[(1)]);
if((state_val_478 === (1))){
var state_477__$1 = state_477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_477__$1,(2),res,v);
} else {
if((state_val_478 === (2))){
var inst_474 = (state_477[(2)]);
var inst_475 = cljs.core.async.close_BANG_.call(null,res);
var state_477__$1 = (function (){var statearr_479 = state_477;
(statearr_479[(7)] = inst_474);

return statearr_479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_477__$1,inst_475);
} else {
return null;
}
}
});})(c__8__auto___656,res,vec__470,v,p,job,jobs,results))
;
return ((function (switch__3__auto__,c__8__auto___656,res,vec__470,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_483 = [null,null,null,null,null,null,null,null];
(statearr_483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_483[(1)] = (1));

return statearr_483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_477){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e484){if((e484 instanceof Object)){
var ex__7__auto__ = e484;
var statearr_485_657 = state_477;
(statearr_485_657[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_477);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__658 = state_477;
state_477 = G__658;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___656,res,vec__470,v,p,job,jobs,results))
})();
var state__10__auto__ = (function (){var statearr_486 = f__9__auto__.call(null);
(statearr_486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___656);

return statearr_486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___656,res,vec__470,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__487){
var vec__488 = p__487;
var v = cljs.core.nth.call(null,vec__488,(0),null);
var p = cljs.core.nth.call(null,vec__488,(1),null);
var job = vec__488;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__23475__auto___659 = n;
var __660 = (0);
while(true){
if((__660 < n__23475__auto___659)){
var G__491_661 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__491_661) {
case "compute":
var c__8__auto___663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__660,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (__660,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function (state_504){
var state_val_505 = (state_504[(1)]);
if((state_val_505 === (1))){
var state_504__$1 = state_504;
var statearr_506_664 = state_504__$1;
(statearr_506_664[(2)] = null);

(statearr_506_664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_505 === (2))){
var state_504__$1 = state_504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_504__$1,(4),jobs);
} else {
if((state_val_505 === (3))){
var inst_502 = (state_504[(2)]);
var state_504__$1 = state_504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_504__$1,inst_502);
} else {
if((state_val_505 === (4))){
var inst_494 = (state_504[(2)]);
var inst_495 = process.call(null,inst_494);
var state_504__$1 = state_504;
if(cljs.core.truth_(inst_495)){
var statearr_507_665 = state_504__$1;
(statearr_507_665[(1)] = (5));

} else {
var statearr_508_666 = state_504__$1;
(statearr_508_666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_505 === (5))){
var state_504__$1 = state_504;
var statearr_509_667 = state_504__$1;
(statearr_509_667[(2)] = null);

(statearr_509_667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_505 === (6))){
var state_504__$1 = state_504;
var statearr_510_668 = state_504__$1;
(statearr_510_668[(2)] = null);

(statearr_510_668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_505 === (7))){
var inst_500 = (state_504[(2)]);
var state_504__$1 = state_504;
var statearr_511_669 = state_504__$1;
(statearr_511_669[(2)] = inst_500);

(statearr_511_669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__660,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async))
;
return ((function (__660,switch__3__auto__,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_515 = [null,null,null,null,null,null,null];
(statearr_515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_515[(1)] = (1));

return statearr_515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_504){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e516){if((e516 instanceof Object)){
var ex__7__auto__ = e516;
var statearr_517_670 = state_504;
(statearr_517_670[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_504);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__671 = state_504;
state_504 = G__671;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(__660,switch__3__auto__,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_518 = f__9__auto__.call(null);
(statearr_518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___663);

return statearr_518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(__660,c__8__auto___663,G__491_661,n__23475__auto___659,jobs,results,process,async))
);


break;
case "async":
var c__8__auto___672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__660,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (__660,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function (state_531){
var state_val_532 = (state_531[(1)]);
if((state_val_532 === (1))){
var state_531__$1 = state_531;
var statearr_533_673 = state_531__$1;
(statearr_533_673[(2)] = null);

(statearr_533_673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_532 === (2))){
var state_531__$1 = state_531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_531__$1,(4),jobs);
} else {
if((state_val_532 === (3))){
var inst_529 = (state_531[(2)]);
var state_531__$1 = state_531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_531__$1,inst_529);
} else {
if((state_val_532 === (4))){
var inst_521 = (state_531[(2)]);
var inst_522 = async.call(null,inst_521);
var state_531__$1 = state_531;
if(cljs.core.truth_(inst_522)){
var statearr_534_674 = state_531__$1;
(statearr_534_674[(1)] = (5));

} else {
var statearr_535_675 = state_531__$1;
(statearr_535_675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_532 === (5))){
var state_531__$1 = state_531;
var statearr_536_676 = state_531__$1;
(statearr_536_676[(2)] = null);

(statearr_536_676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_532 === (6))){
var state_531__$1 = state_531;
var statearr_537_677 = state_531__$1;
(statearr_537_677[(2)] = null);

(statearr_537_677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_532 === (7))){
var inst_527 = (state_531[(2)]);
var state_531__$1 = state_531;
var statearr_538_678 = state_531__$1;
(statearr_538_678[(2)] = inst_527);

(statearr_538_678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(__660,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async))
;
return ((function (__660,switch__3__auto__,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_542 = [null,null,null,null,null,null,null];
(statearr_542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_542[(1)] = (1));

return statearr_542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_531){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e543){if((e543 instanceof Object)){
var ex__7__auto__ = e543;
var statearr_544_679 = state_531;
(statearr_544_679[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_531);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__680 = state_531;
state_531 = G__680;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(__660,switch__3__auto__,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_545 = f__9__auto__.call(null);
(statearr_545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___672);

return statearr_545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(__660,c__8__auto___672,G__491_661,n__23475__auto___659,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__681 = (__660 + (1));
__660 = G__681;
continue;
} else {
}
break;
}

var c__8__auto___682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___682,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___682,jobs,results,process,async){
return (function (state_637){
var state_val_638 = (state_637[(1)]);
if((state_val_638 === (1))){
var state_637__$1 = state_637;
var statearr_639_683 = state_637__$1;
(statearr_639_683[(2)] = null);

(statearr_639_683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_638 === (2))){
var state_637__$1 = state_637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_637__$1,(4),from);
} else {
if((state_val_638 === (3))){
var inst_635 = (state_637[(2)]);
var state_637__$1 = state_637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_637__$1,inst_635);
} else {
if((state_val_638 === (4))){
var inst_618 = (state_637[(7)]);
var inst_618__$1 = (state_637[(2)]);
var inst_619 = (inst_618__$1 == null);
var state_637__$1 = (function (){var statearr_640 = state_637;
(statearr_640[(7)] = inst_618__$1);

return statearr_640;
})();
if(cljs.core.truth_(inst_619)){
var statearr_641_684 = state_637__$1;
(statearr_641_684[(1)] = (5));

} else {
var statearr_642_685 = state_637__$1;
(statearr_642_685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_638 === (5))){
var inst_621 = cljs.core.async.close_BANG_.call(null,jobs);
var state_637__$1 = state_637;
var statearr_643_686 = state_637__$1;
(statearr_643_686[(2)] = inst_621);

(statearr_643_686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_638 === (6))){
var inst_618 = (state_637[(7)]);
var inst_623 = (state_637[(8)]);
var inst_623__$1 = cljs.core.async.chan.call(null,(1));
var inst_624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_625 = [inst_618,inst_623__$1];
var inst_626 = (new cljs.core.PersistentVector(null,(2),(5),inst_624,inst_625,null));
var state_637__$1 = (function (){var statearr_644 = state_637;
(statearr_644[(8)] = inst_623__$1);

return statearr_644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_637__$1,(8),jobs,inst_626);
} else {
if((state_val_638 === (7))){
var inst_633 = (state_637[(2)]);
var state_637__$1 = state_637;
var statearr_645_687 = state_637__$1;
(statearr_645_687[(2)] = inst_633);

(statearr_645_687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_638 === (8))){
var inst_623 = (state_637[(8)]);
var inst_628 = (state_637[(2)]);
var state_637__$1 = (function (){var statearr_646 = state_637;
(statearr_646[(9)] = inst_628);

return statearr_646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_637__$1,(9),results,inst_623);
} else {
if((state_val_638 === (9))){
var inst_630 = (state_637[(2)]);
var state_637__$1 = (function (){var statearr_647 = state_637;
(statearr_647[(10)] = inst_630);

return statearr_647;
})();
var statearr_648_688 = state_637__$1;
(statearr_648_688[(2)] = null);

(statearr_648_688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8__auto___682,jobs,results,process,async))
;
return ((function (switch__3__auto__,c__8__auto___682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_652[(1)] = (1));

return statearr_652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_637){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e653){if((e653 instanceof Object)){
var ex__7__auto__ = e653;
var statearr_654_689 = state_637;
(statearr_654_689[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_637);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__690 = state_637;
state_637 = G__690;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___682,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_655 = f__9__auto__.call(null);
(statearr_655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___682);

return statearr_655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___682,jobs,results,process,async))
);


var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,jobs,results,process,async){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,jobs,results,process,async){
return (function (state_583){
var state_val_584 = (state_583[(1)]);
if((state_val_584 === (1))){
var state_583__$1 = state_583;
var statearr_585_691 = state_583__$1;
(statearr_585_691[(2)] = null);

(statearr_585_691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (2))){
var state_583__$1 = state_583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_583__$1,(4),results);
} else {
if((state_val_584 === (3))){
var inst_581 = (state_583[(2)]);
var state_583__$1 = state_583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_583__$1,inst_581);
} else {
if((state_val_584 === (4))){
var inst_548 = (state_583[(7)]);
var inst_548__$1 = (state_583[(2)]);
var inst_549 = (inst_548__$1 == null);
var state_583__$1 = (function (){var statearr_586 = state_583;
(statearr_586[(7)] = inst_548__$1);

return statearr_586;
})();
if(cljs.core.truth_(inst_549)){
var statearr_587_692 = state_583__$1;
(statearr_587_692[(1)] = (5));

} else {
var statearr_588_693 = state_583__$1;
(statearr_588_693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (5))){
var state_583__$1 = state_583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_589_694 = state_583__$1;
(statearr_589_694[(1)] = (8));

} else {
var statearr_590_695 = state_583__$1;
(statearr_590_695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (6))){
var inst_548 = (state_583[(7)]);
var state_583__$1 = state_583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_583__$1,(11),inst_548);
} else {
if((state_val_584 === (7))){
var inst_579 = (state_583[(2)]);
var state_583__$1 = state_583;
var statearr_591_696 = state_583__$1;
(statearr_591_696[(2)] = inst_579);

(statearr_591_696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (8))){
var inst_552 = cljs.core.async.close_BANG_.call(null,to);
var state_583__$1 = state_583;
var statearr_592_697 = state_583__$1;
(statearr_592_697[(2)] = inst_552);

(statearr_592_697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (9))){
var state_583__$1 = state_583;
var statearr_593_698 = state_583__$1;
(statearr_593_698[(2)] = null);

(statearr_593_698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (10))){
var inst_555 = (state_583[(2)]);
var state_583__$1 = state_583;
var statearr_594_699 = state_583__$1;
(statearr_594_699[(2)] = inst_555);

(statearr_594_699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (11))){
var inst_558 = (state_583[(2)]);
var state_583__$1 = (function (){var statearr_595 = state_583;
(statearr_595[(8)] = inst_558);

return statearr_595;
})();
var statearr_596_700 = state_583__$1;
(statearr_596_700[(2)] = null);

(statearr_596_700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (12))){
var inst_558 = (state_583[(8)]);
var state_583__$1 = state_583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_583__$1,(14),inst_558);
} else {
if((state_val_584 === (13))){
var inst_576 = (state_583[(2)]);
var state_583__$1 = (function (){var statearr_597 = state_583;
(statearr_597[(9)] = inst_576);

return statearr_597;
})();
var statearr_598_701 = state_583__$1;
(statearr_598_701[(2)] = null);

(statearr_598_701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (14))){
var inst_561 = (state_583[(10)]);
var inst_563 = (state_583[(11)]);
var inst_561__$1 = (state_583[(2)]);
var inst_562 = (inst_561__$1 == null);
var inst_563__$1 = cljs.core.not.call(null,inst_562);
var state_583__$1 = (function (){var statearr_599 = state_583;
(statearr_599[(10)] = inst_561__$1);

(statearr_599[(11)] = inst_563__$1);

return statearr_599;
})();
if(inst_563__$1){
var statearr_600_702 = state_583__$1;
(statearr_600_702[(1)] = (15));

} else {
var statearr_601_703 = state_583__$1;
(statearr_601_703[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (15))){
var inst_561 = (state_583[(10)]);
var state_583__$1 = state_583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_583__$1,(18),to,inst_561);
} else {
if((state_val_584 === (16))){
var inst_563 = (state_583[(11)]);
var state_583__$1 = state_583;
var statearr_602_704 = state_583__$1;
(statearr_602_704[(2)] = inst_563);

(statearr_602_704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (17))){
var inst_569 = (state_583[(2)]);
var state_583__$1 = state_583;
if(cljs.core.truth_(inst_569)){
var statearr_603_705 = state_583__$1;
(statearr_603_705[(1)] = (19));

} else {
var statearr_604_706 = state_583__$1;
(statearr_604_706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (18))){
var inst_566 = (state_583[(2)]);
var state_583__$1 = state_583;
var statearr_605_707 = state_583__$1;
(statearr_605_707[(2)] = inst_566);

(statearr_605_707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (19))){
var state_583__$1 = state_583;
var statearr_606_708 = state_583__$1;
(statearr_606_708[(2)] = null);

(statearr_606_708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (20))){
var state_583__$1 = state_583;
var statearr_607_709 = state_583__$1;
(statearr_607_709[(2)] = null);

(statearr_607_709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_584 === (21))){
var inst_574 = (state_583[(2)]);
var state_583__$1 = state_583;
var statearr_608_710 = state_583__$1;
(statearr_608_710[(2)] = inst_574);

(statearr_608_710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
});})(c__8__auto__,jobs,results,process,async))
;
return ((function (switch__3__auto__,c__8__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_612 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4__auto__);

(statearr_612[(1)] = (1));

return statearr_612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1 = (function (state_583){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e613){if((e613 instanceof Object)){
var ex__7__auto__ = e613;
var statearr_614_711 = state_583;
(statearr_614_711[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_583);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__712 = state_583;
state_583 = G__712;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__ = function(state_583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1.call(this,state_583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,jobs,results,process,async))
})();
var state__10__auto__ = (function (){var statearr_615 = f__9__auto__.call(null);
(statearr_615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,jobs,results,process,async))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return cljs.core.async.pipeline_STAR_;},new cljs.core.Symbol("cljs.core.async","pipeline*","cljs.core.async/pipeline*",(280675124),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipeline*","pipeline*",(-672239697),null),"cljs/core/async.cljs",(17),(1),(256),(256),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null)),null,(cljs.core.truth_(cljs.core.async.pipeline_STAR_)?cljs.core.async.pipeline_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
(function (){
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args713 = [];
var len__23656__auto___716 = arguments.length;
var i__23657__auto___717 = (0);
while(true){
if((i__23657__auto___717 < len__23656__auto___716)){
args713.push((arguments[i__23657__auto___717]));

var G__718 = (i__23657__auto___717 + (1));
i__23657__auto___717 = G__718;
continue;
} else {
}
break;
}

var G__715 = args713.length;
switch (G__715) {
case (4):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args713.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.pipeline_async;},new cljs.core.Symbol("cljs.core.async","pipeline-async","cljs.core.async/pipeline-async",(-207534901),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipeline-async","pipeline-async",(-1150635588),null),"cljs/core/async.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(306),(306),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Takes elements from the from channel and supplies them to the to\n  channel, subject to the async function af, with parallelism n. af\n  must be a function of two arguments, the first an input value and\n  the second a channel on which to place the result(s). af must close!\n  the channel before returning.  The presumption is that af will\n  return immediately, having launched some asynchronous operation\n  whose completion/callback will manipulate the result channel. Outputs\n  will be returned in order relative to  the inputs. By default, the to\n  channel will be closed when the from channel closes, but can be\n  determined by the close?  parameter. Will stop consuming the from\n  channel if the to channel closes.",(cljs.core.truth_(cljs.core.async.pipeline_async)?cljs.core.async.pipeline_async.cljs$lang$test:null)])));})()
;

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",(1050769601)));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = (5);

new cljs.core.Var(function(){return cljs.core.async.pipeline_async;},new cljs.core.Symbol("cljs.core.async","pipeline-async","cljs.core.async/pipeline-async",(-207534901),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipeline-async","pipeline-async",(-1150635588),null),"cljs/core/async.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(306),(306),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"af","af",(-1206419596),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Takes elements from the from channel and supplies them to the to\n  channel, subject to the async function af, with parallelism n. af\n  must be a function of two arguments, the first an input value and\n  the second a channel on which to place the result(s). af must close!\n  the channel before returning.  The presumption is that af will\n  return immediately, having launched some asynchronous operation\n  whose completion/callback will manipulate the result channel. Outputs\n  will be returned in order relative to  the inputs. By default, the to\n  channel will be closed when the from channel closes, but can be\n  determined by the close?  parameter. Will stop consuming the from\n  channel if the to channel closes.",(cljs.core.truth_(cljs.core.async.pipeline_async)?cljs.core.async.pipeline_async.cljs$lang$test:null)]));
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
(function (){
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args720 = [];
var len__23656__auto___723 = arguments.length;
var i__23657__auto___724 = (0);
while(true){
if((i__23657__auto___724 < len__23656__auto___723)){
args720.push((arguments[i__23657__auto___724]));

var G__725 = (i__23657__auto___724 + (1));
i__23657__auto___724 = G__725;
continue;
} else {
}
break;
}

var G__722 = args720.length;
switch (G__722) {
case (4):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args720.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.pipeline;},new cljs.core.Symbol("cljs.core.async","pipeline","cljs.core.async/pipeline",(285393498),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipeline","pipeline",(1238785485),null),"cljs/core/async.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(321),(321),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Takes elements from the from channel and supplies them to the to\n  channel, subject to the transducer xf, with parallelism n. Because\n  it is parallel, the transducer will be applied independently to each\n  element, not across elements, and may produce zero or more outputs\n  per input.  Outputs will be returned in order relative to the\n  inputs. By default, the to channel will be closed when the from\n  channel closes, but can be determined by the close?  parameter. Will\n  stop consuming the from channel if the to channel closes.\n\n  Note this is supplied for API compatibility with the Clojure version.\n  Values of N > 1 will not result in actual concurrency in a\n  single-threaded runtime.",(cljs.core.truth_(cljs.core.async.pipeline)?cljs.core.async.pipeline.cljs$lang$test:null)])));})()
;

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",(1555393130)));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = (6);

new cljs.core.Var(function(){return cljs.core.async.pipeline;},new cljs.core.Symbol("cljs.core.async","pipeline","cljs.core.async/pipeline",(285393498),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pipeline","pipeline",(1238785485),null),"cljs/core/async.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(321),(321),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null)], null)),"Takes elements from the from channel and supplies them to the to\n  channel, subject to the transducer xf, with parallelism n. Because\n  it is parallel, the transducer will be applied independently to each\n  element, not across elements, and may produce zero or more outputs\n  per input.  Outputs will be returned in order relative to the\n  inputs. By default, the to channel will be closed when the from\n  channel closes, but can be determined by the close?  parameter. Will\n  stop consuming the from channel if the to channel closes.\n\n  Note this is supplied for API compatibility with the Clojure version.\n  Values of N > 1 will not result in actual concurrency in a\n  single-threaded runtime.",(cljs.core.truth_(cljs.core.async.pipeline)?cljs.core.async.pipeline.cljs$lang$test:null)]));
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
(function (){
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args727 = [];
var len__23656__auto___780 = arguments.length;
var i__23657__auto___781 = (0);
while(true){
if((i__23657__auto___781 < len__23656__auto___780)){
args727.push((arguments[i__23657__auto___781]));

var G__782 = (i__23657__auto___781 + (1));
i__23657__auto___781 = G__782;
continue;
} else {
}
break;
}

var G__729 = args727.length;
switch (G__729) {
case (2):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args727.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.split;},new cljs.core.Symbol("cljs.core.async","split","cljs.core.async/split",(-155104394),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"split","split",(1041096409),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(338),(338),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),"Takes a predicate and a source channel and returns a vector of two\n  channels, the first of which will contain the values for which the\n  predicate returned true, the second those for which it returned\n  false.\n\n  The out channels will be unbuffered by default, or two buf-or-ns can\n  be supplied. The channels will close after the source channel has\n  closed.",(cljs.core.truth_(cljs.core.async.split)?cljs.core.async.split.cljs$lang$test:null)])));})()
;

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8__auto___784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___784,tc,fc){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___784,tc,fc){
return (function (state_755){
var state_val_756 = (state_755[(1)]);
if((state_val_756 === (1))){
var state_755__$1 = state_755;
var statearr_757_785 = state_755__$1;
(statearr_757_785[(2)] = null);

(statearr_757_785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (2))){
var state_755__$1 = state_755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_755__$1,(4),ch);
} else {
if((state_val_756 === (3))){
var inst_753 = (state_755[(2)]);
var state_755__$1 = state_755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_755__$1,inst_753);
} else {
if((state_val_756 === (4))){
var inst_732 = (state_755[(7)]);
var inst_732__$1 = (state_755[(2)]);
var inst_733 = (inst_732__$1 == null);
var state_755__$1 = (function (){var statearr_758 = state_755;
(statearr_758[(7)] = inst_732__$1);

return statearr_758;
})();
if(cljs.core.truth_(inst_733)){
var statearr_759_786 = state_755__$1;
(statearr_759_786[(1)] = (5));

} else {
var statearr_760_787 = state_755__$1;
(statearr_760_787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (5))){
var inst_735 = cljs.core.async.close_BANG_.call(null,tc);
var inst_736 = cljs.core.async.close_BANG_.call(null,fc);
var state_755__$1 = (function (){var statearr_761 = state_755;
(statearr_761[(8)] = inst_735);

return statearr_761;
})();
var statearr_762_788 = state_755__$1;
(statearr_762_788[(2)] = inst_736);

(statearr_762_788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (6))){
var inst_732 = (state_755[(7)]);
var inst_738 = p.call(null,inst_732);
var state_755__$1 = state_755;
if(cljs.core.truth_(inst_738)){
var statearr_763_789 = state_755__$1;
(statearr_763_789[(1)] = (9));

} else {
var statearr_764_790 = state_755__$1;
(statearr_764_790[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (7))){
var inst_751 = (state_755[(2)]);
var state_755__$1 = state_755;
var statearr_765_791 = state_755__$1;
(statearr_765_791[(2)] = inst_751);

(statearr_765_791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (8))){
var inst_744 = (state_755[(2)]);
var state_755__$1 = state_755;
if(cljs.core.truth_(inst_744)){
var statearr_766_792 = state_755__$1;
(statearr_766_792[(1)] = (12));

} else {
var statearr_767_793 = state_755__$1;
(statearr_767_793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (9))){
var state_755__$1 = state_755;
var statearr_768_794 = state_755__$1;
(statearr_768_794[(2)] = tc);

(statearr_768_794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (10))){
var state_755__$1 = state_755;
var statearr_769_795 = state_755__$1;
(statearr_769_795[(2)] = fc);

(statearr_769_795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (11))){
var inst_732 = (state_755[(7)]);
var inst_742 = (state_755[(2)]);
var state_755__$1 = state_755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_755__$1,(8),inst_742,inst_732);
} else {
if((state_val_756 === (12))){
var state_755__$1 = state_755;
var statearr_770_796 = state_755__$1;
(statearr_770_796[(2)] = null);

(statearr_770_796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (13))){
var state_755__$1 = state_755;
var statearr_771_797 = state_755__$1;
(statearr_771_797[(2)] = null);

(statearr_771_797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_756 === (14))){
var inst_749 = (state_755[(2)]);
var state_755__$1 = state_755;
var statearr_772_798 = state_755__$1;
(statearr_772_798[(2)] = inst_749);

(statearr_772_798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
});})(c__8__auto___784,tc,fc))
;
return ((function (switch__3__auto__,c__8__auto___784,tc,fc){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_776 = [null,null,null,null,null,null,null,null,null];
(statearr_776[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_776[(1)] = (1));

return statearr_776;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_755){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e777){if((e777 instanceof Object)){
var ex__7__auto__ = e777;
var statearr_778_799 = state_755;
(statearr_778_799[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_755);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__800 = state_755;
state_755 = G__800;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___784,tc,fc))
})();
var state__10__auto__ = (function (){var statearr_779 = f__9__auto__.call(null);
(statearr_779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___784);

return statearr_779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___784,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.async.split;},new cljs.core.Symbol("cljs.core.async","split","cljs.core.async/split",(-155104394),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"split","split",(1041096409),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(338),(338),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"t-buf-or-n","t-buf-or-n",(-879733999),null),new cljs.core.Symbol(null,"f-buf-or-n","f-buf-or-n",(-765541573),null)], null)),"Takes a predicate and a source channel and returns a vector of two\n  channels, the first of which will contain the values for which the\n  predicate returned true, the second those for which it returned\n  false.\n\n  The out channels will be unbuffered by default, or two buf-or-ns can\n  be supplied. The channels will close after the source channel has\n  closed.",(cljs.core.truth_(cljs.core.async.split)?cljs.core.async.split.cljs$lang$test:null)]));
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
(function (){
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_864){
var state_val_865 = (state_864[(1)]);
if((state_val_865 === (1))){
var inst_844 = init;
var state_864__$1 = (function (){var statearr_866 = state_864;
(statearr_866[(7)] = inst_844);

return statearr_866;
})();
var statearr_867_887 = state_864__$1;
(statearr_867_887[(2)] = null);

(statearr_867_887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (2))){
var state_864__$1 = state_864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_864__$1,(4),ch);
} else {
if((state_val_865 === (3))){
var inst_862 = (state_864[(2)]);
var state_864__$1 = state_864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_864__$1,inst_862);
} else {
if((state_val_865 === (4))){
var inst_847 = (state_864[(8)]);
var inst_847__$1 = (state_864[(2)]);
var inst_848 = (inst_847__$1 == null);
var state_864__$1 = (function (){var statearr_868 = state_864;
(statearr_868[(8)] = inst_847__$1);

return statearr_868;
})();
if(cljs.core.truth_(inst_848)){
var statearr_869_888 = state_864__$1;
(statearr_869_888[(1)] = (5));

} else {
var statearr_870_889 = state_864__$1;
(statearr_870_889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (5))){
var inst_844 = (state_864[(7)]);
var state_864__$1 = state_864;
var statearr_871_890 = state_864__$1;
(statearr_871_890[(2)] = inst_844);

(statearr_871_890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (6))){
var inst_844 = (state_864[(7)]);
var inst_847 = (state_864[(8)]);
var inst_851 = (state_864[(9)]);
var inst_851__$1 = f.call(null,inst_844,inst_847);
var inst_852 = cljs.core.reduced_QMARK_.call(null,inst_851__$1);
var state_864__$1 = (function (){var statearr_872 = state_864;
(statearr_872[(9)] = inst_851__$1);

return statearr_872;
})();
if(inst_852){
var statearr_873_891 = state_864__$1;
(statearr_873_891[(1)] = (8));

} else {
var statearr_874_892 = state_864__$1;
(statearr_874_892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (7))){
var inst_860 = (state_864[(2)]);
var state_864__$1 = state_864;
var statearr_875_893 = state_864__$1;
(statearr_875_893[(2)] = inst_860);

(statearr_875_893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (8))){
var inst_851 = (state_864[(9)]);
var inst_854 = cljs.core.deref.call(null,inst_851);
var state_864__$1 = state_864;
var statearr_876_894 = state_864__$1;
(statearr_876_894[(2)] = inst_854);

(statearr_876_894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (9))){
var inst_851 = (state_864[(9)]);
var inst_844 = inst_851;
var state_864__$1 = (function (){var statearr_877 = state_864;
(statearr_877[(7)] = inst_844);

return statearr_877;
})();
var statearr_878_895 = state_864__$1;
(statearr_878_895[(2)] = null);

(statearr_878_895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_865 === (10))){
var inst_858 = (state_864[(2)]);
var state_864__$1 = state_864;
var statearr_879_896 = state_864__$1;
(statearr_879_896[(2)] = inst_858);

(statearr_879_896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4__auto____0 = (function (){
var statearr_883 = [null,null,null,null,null,null,null,null,null,null];
(statearr_883[(0)] = cljs$core$async$reduce_$_state_machine__4__auto__);

(statearr_883[(1)] = (1));

return statearr_883;
});
var cljs$core$async$reduce_$_state_machine__4__auto____1 = (function (state_864){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e884){if((e884 instanceof Object)){
var ex__7__auto__ = e884;
var statearr_885_897 = state_864;
(statearr_885_897[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_864);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__898 = state_864;
state_864 = G__898;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4__auto__ = function(state_864){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4__auto____1.call(this,state_864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4__auto____0;
cljs$core$async$reduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4__auto____1;
return cljs$core$async$reduce_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_886 = f__9__auto__.call(null);
(statearr_886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return cljs.core.async.reduce;},new cljs.core.Symbol("cljs.core.async","reduce","cljs.core.async/reduce",(464169705),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"reduce","reduce",(1358839360),null),"cljs/core/async.cljs",(13),(1),(359),(359),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"f should be a function of 2 arguments. Returns a channel containing\n  the single result of applying f to init and the first item from the\n  channel, then applying f to that result and the 2nd item, etc. If\n  the channel closes without yielding items, returns init and f is not\n  called. ch must close before reduce produces a result.",(cljs.core.truth_(cljs.core.async.reduce)?cljs.core.async.reduce.cljs$lang$test:null)])));})()
;
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
(function (){
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,f__$1){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,f__$1){
return (function (state_918){
var state_val_919 = (state_918[(1)]);
if((state_val_919 === (1))){
var inst_913 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_918__$1 = state_918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_918__$1,(2),inst_913);
} else {
if((state_val_919 === (2))){
var inst_915 = (state_918[(2)]);
var inst_916 = f__$1.call(null,inst_915);
var state_918__$1 = state_918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_918__$1,inst_916);
} else {
return null;
}
}
});})(c__8__auto__,f__$1))
;
return ((function (switch__3__auto__,c__8__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4__auto____0 = (function (){
var statearr_923 = [null,null,null,null,null,null,null];
(statearr_923[(0)] = cljs$core$async$transduce_$_state_machine__4__auto__);

(statearr_923[(1)] = (1));

return statearr_923;
});
var cljs$core$async$transduce_$_state_machine__4__auto____1 = (function (state_918){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e924){if((e924 instanceof Object)){
var ex__7__auto__ = e924;
var statearr_925_927 = state_918;
(statearr_925_927[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_918);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__928 = state_918;
state_918 = G__928;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4__auto__ = function(state_918){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4__auto____1.call(this,state_918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4__auto____0;
cljs$core$async$transduce_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4__auto____1;
return cljs$core$async$transduce_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,f__$1))
})();
var state__10__auto__ = (function (){var statearr_926 = f__9__auto__.call(null);
(statearr_926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,f__$1))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return cljs.core.async.transduce;},new cljs.core.Symbol("cljs.core.async","transduce","cljs.core.async/transduce",(-929896239),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"transduce","transduce",(-2083619734),null),"cljs/core/async.cljs",(16),(1),(375),(375),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"async/reduces a channel with a transformation (xform f).\n  Returns a channel containing the result.  ch must close before\n  transduce produces a result.",(cljs.core.truth_(cljs.core.async.transduce)?cljs.core.async.transduce.cljs$lang$test:null)])));})()
;
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
(function (){
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args929 = [];
var len__23656__auto___981 = arguments.length;
var i__23657__auto___982 = (0);
while(true){
if((i__23657__auto___982 < len__23656__auto___981)){
args929.push((arguments[i__23657__auto___982]));

var G__983 = (i__23657__auto___982 + (1));
i__23657__auto___982 = G__983;
continue;
} else {
}
break;
}

var G__931 = args929.length;
switch (G__931) {
case (2):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args929.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.onto_chan;},new cljs.core.Symbol("cljs.core.async","onto-chan","cljs.core.async/onto-chan",(1791478565),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"onto-chan","onto-chan",(-1246584694),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(385),(385),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Puts the contents of coll into the supplied channel.\n\n  By default the channel will be closed after the items are copied,\n  but can be determined by the close? parameter.\n\n  Returns a channel which will close after the items are copied.",(cljs.core.truth_(cljs.core.async.onto_chan)?cljs.core.async.onto_chan.cljs$lang$test:null)])));})()
;

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_956){
var state_val_957 = (state_956[(1)]);
if((state_val_957 === (1))){
var inst_932 = cljs.core.seq.call(null,coll);
var inst_933 = inst_932;
var state_956__$1 = (function (){var statearr_958 = state_956;
(statearr_958[(7)] = inst_933);

return statearr_958;
})();
var statearr_959_985 = state_956__$1;
(statearr_959_985[(2)] = null);

(statearr_959_985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (2))){
var inst_933 = (state_956[(7)]);
var state_956__$1 = state_956;
if(cljs.core.truth_(inst_933)){
var statearr_960_986 = state_956__$1;
(statearr_960_986[(1)] = (4));

} else {
var statearr_961_987 = state_956__$1;
(statearr_961_987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (3))){
var inst_954 = (state_956[(2)]);
var state_956__$1 = state_956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_956__$1,inst_954);
} else {
if((state_val_957 === (4))){
var inst_933 = (state_956[(7)]);
var inst_936 = cljs.core.first.call(null,inst_933);
var state_956__$1 = state_956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_956__$1,(7),ch,inst_936);
} else {
if((state_val_957 === (5))){
var inst_933 = (state_956[(7)]);
var state_956__$1 = state_956;
var statearr_962_988 = state_956__$1;
(statearr_962_988[(2)] = inst_933);

(statearr_962_988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (6))){
var inst_941 = (state_956[(2)]);
var state_956__$1 = state_956;
if(cljs.core.truth_(inst_941)){
var statearr_963_989 = state_956__$1;
(statearr_963_989[(1)] = (8));

} else {
var statearr_964_990 = state_956__$1;
(statearr_964_990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (7))){
var inst_938 = (state_956[(2)]);
var state_956__$1 = state_956;
var statearr_965_991 = state_956__$1;
(statearr_965_991[(2)] = inst_938);

(statearr_965_991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (8))){
var inst_933 = (state_956[(7)]);
var inst_943 = cljs.core.next.call(null,inst_933);
var inst_933__$1 = inst_943;
var state_956__$1 = (function (){var statearr_966 = state_956;
(statearr_966[(7)] = inst_933__$1);

return statearr_966;
})();
var statearr_967_992 = state_956__$1;
(statearr_967_992[(2)] = null);

(statearr_967_992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (9))){
var state_956__$1 = state_956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_968_993 = state_956__$1;
(statearr_968_993[(1)] = (11));

} else {
var statearr_969_994 = state_956__$1;
(statearr_969_994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (10))){
var inst_952 = (state_956[(2)]);
var state_956__$1 = state_956;
var statearr_970_995 = state_956__$1;
(statearr_970_995[(2)] = inst_952);

(statearr_970_995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (11))){
var inst_947 = cljs.core.async.close_BANG_.call(null,ch);
var state_956__$1 = state_956;
var statearr_971_996 = state_956__$1;
(statearr_971_996[(2)] = inst_947);

(statearr_971_996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (12))){
var state_956__$1 = state_956;
var statearr_972_997 = state_956__$1;
(statearr_972_997[(2)] = null);

(statearr_972_997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_957 === (13))){
var inst_950 = (state_956[(2)]);
var state_956__$1 = state_956;
var statearr_973_998 = state_956__$1;
(statearr_973_998[(2)] = inst_950);

(statearr_973_998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_977 = [null,null,null,null,null,null,null,null];
(statearr_977[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_977[(1)] = (1));

return statearr_977;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_956){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e978){if((e978 instanceof Object)){
var ex__7__auto__ = e978;
var statearr_979_999 = state_956;
(statearr_979_999[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_956);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1000 = state_956;
state_956 = G__1000;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_980 = f__9__auto__.call(null);
(statearr_980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.onto_chan;},new cljs.core.Symbol("cljs.core.async","onto-chan","cljs.core.async/onto-chan",(1791478565),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"onto-chan","onto-chan",(-1246584694),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(385),(385),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Puts the contents of coll into the supplied channel.\n\n  By default the channel will be closed after the items are copied,\n  but can be determined by the close? parameter.\n\n  Returns a channel which will close after the items are copied.",(cljs.core.truth_(cljs.core.async.onto_chan)?cljs.core.async.onto_chan.cljs$lang$test:null)]));
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
(function (){
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
}); return (
new cljs.core.Var(function(){return cljs.core.async.to_chan;},new cljs.core.Symbol("cljs.core.async","to-chan","cljs.core.async/to-chan",(1383476709),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"to-chan","to-chan",(-1992175286),null),"cljs/core/async.cljs",(14),(1),(401),(401),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Creates and returns a channel which contains the contents of coll,\n  closing when exhausted.",(cljs.core.truth_(cljs.core.async.to_chan)?cljs.core.async.to_chan.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.core.async.Mux = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.Mux;},new cljs.core.Symbol("cljs.core.async","Mux","cljs.core.async/Mux",(-667288355),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"Mux","Mux",(332136516),null),"cljs/core/async.cljs",(17),(1),(410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"muxch*","muxch*",(-2122090743),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)], null)], true, false)], null),(410),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.Mux)?cljs.core.async.Mux.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23054__auto__ = (((_ == null))?null:_);
var m__23055__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,_);
} else {
var m__23055__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.muxch_STAR_;},new cljs.core.Symbol("cljs.core.async","muxch*","cljs.core.async/muxch*",(-556801136),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mux","cljs.core.async/Mux",(-667288355),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"muxch*","muxch*",(-2122090743),null),"cljs/core/async.cljs",(10),(1),(410),(411),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),null,(cljs.core.truth_(cljs.core.async.muxch_STAR_)?cljs.core.async.muxch_STAR_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.async.Mult = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.Mult;},new cljs.core.Symbol("cljs.core.async","Mult","cljs.core.async/Mult",(498326447),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"Mult","Mult",(-981944554),null),"cljs/core/async.cljs",(18),(1),(413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"tap*","tap*",(-1412413607),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"untap*","untap*",(-1769013548),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"untap-all*","untap-all*",(-1556544171),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)], true, false)], null),(413),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.Mult)?cljs.core.async.Mult.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23055__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.tap_STAR_;},new cljs.core.Symbol("cljs.core.async","tap*","cljs.core.async/tap*",(1654467104),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mult","cljs.core.async/Mult",(498326447),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"tap*","tap*",(-1412413607),null),"cljs/core/async.cljs",(8),(1),(413),(414),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),null,(cljs.core.truth_(cljs.core.async.tap_STAR_)?cljs.core.async.tap_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,ch);
} else {
var m__23055__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.untap_STAR_;},new cljs.core.Symbol("cljs.core.async","untap*","cljs.core.async/untap*",(1850033021),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mult","cljs.core.async/Mult",(498326447),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"untap*","untap*",(-1769013548),null),"cljs/core/async.cljs",(10),(1),(413),(415),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.core.async.untap_STAR_)?cljs.core.async.untap_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m);
} else {
var m__23055__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.untap_all_STAR_;},new cljs.core.Symbol("cljs.core.async","untap-all*","cljs.core.async/untap-all*",(-401757716),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mult","cljs.core.async/Mult",(498326447),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"untap-all*","untap-all*",(-1556544171),null),"cljs/core/async.cljs",(14),(1),(413),(416),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.core.async.untap_all_STAR_)?cljs.core.async.untap_all_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
(function (){
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async1226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mult}
*/
cljs.core.async.t_cljs$core$async1226 = (function (ch,cs,meta1227){
this.ch = ch;
this.cs = cs;
this.meta1227 = meta1227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1228,meta1227__$1){
var self__ = this;
var _1228__$1 = this;
return (new cljs.core.async.t_cljs$core$async1226(self__.ch,self__.cs,meta1227__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1228){
var self__ = this;
var _1228__$1 = this;
return self__.meta1227;
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"meta1227","meta1227",(1467566202),null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async1226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1226";

cljs.core.async.t_cljs$core$async1226.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async1226");
});})(cs))
;

(function (){
cljs.core.async.__GT_t_cljs$core$async1226 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async1226(ch__$1,cs__$1,meta1227){
return (new cljs.core.async.t_cljs$core$async1226(ch__$1,cs__$1,meta1227));
});})(cs))
; return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async1226;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async1226","cljs.core.async/->t_cljs$core$async1226",(700410882),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async","Mux","cljs.core.async/Mux",(-667288355),null),null,new cljs.core.Symbol("cljs.core.async","Mult","cljs.core.async/Mult",(498326447),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async1226","->t_cljs$core$async1226",(1626588057),null),"cljs/core/async.cljs",true,(11),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(432),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"meta1227","meta1227",(1467566202),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async1226)?cljs.core.async.__GT_t_cljs$core$async1226.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async1226(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8__auto___1451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1451,cs,m,dchan,dctr,done){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1451,cs,m,dchan,dctr,done){
return (function (state_1363){
var state_val_1364 = (state_1363[(1)]);
if((state_val_1364 === (32))){
var inst_1306 = (state_1363[(7)]);
var inst_1303 = (state_1363[(8)]);
var inst_1304 = (state_1363[(9)]);
var inst_1305 = (state_1363[(10)]);
var inst_1318 = (state_1363[(2)]);
var inst_1319 = (inst_1306 + (1));
var tmp1365 = inst_1303;
var tmp1366 = inst_1304;
var tmp1367 = inst_1305;
var inst_1303__$1 = tmp1365;
var inst_1304__$1 = tmp1366;
var inst_1305__$1 = tmp1367;
var inst_1306__$1 = inst_1319;
var state_1363__$1 = (function (){var statearr_1368 = state_1363;
(statearr_1368[(11)] = inst_1318);

(statearr_1368[(8)] = inst_1303__$1);

(statearr_1368[(9)] = inst_1304__$1);

(statearr_1368[(10)] = inst_1305__$1);

(statearr_1368[(7)] = inst_1306__$1);

return statearr_1368;
})();
var statearr_1369_1452 = state_1363__$1;
(statearr_1369_1452[(2)] = null);

(statearr_1369_1452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (1))){
var state_1363__$1 = state_1363;
var statearr_1370_1453 = state_1363__$1;
(statearr_1370_1453[(2)] = null);

(statearr_1370_1453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (33))){
var inst_1322 = (state_1363[(12)]);
var inst_1324 = cljs.core.chunked_seq_QMARK_.call(null,inst_1322);
var state_1363__$1 = state_1363;
if(inst_1324){
var statearr_1371_1454 = state_1363__$1;
(statearr_1371_1454[(1)] = (36));

} else {
var statearr_1372_1455 = state_1363__$1;
(statearr_1372_1455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (2))){
var state_1363__$1 = state_1363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1363__$1,(4),ch);
} else {
if((state_val_1364 === (34))){
var state_1363__$1 = state_1363;
var statearr_1373_1456 = state_1363__$1;
(statearr_1373_1456[(2)] = null);

(statearr_1373_1456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (3))){
var inst_1361 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1363__$1,inst_1361);
} else {
if((state_val_1364 === (35))){
var inst_1345 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1374_1457 = state_1363__$1;
(statearr_1374_1457[(2)] = inst_1345);

(statearr_1374_1457[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (4))){
var inst_1231 = (state_1363[(13)]);
var inst_1231__$1 = (state_1363[(2)]);
var inst_1232 = (inst_1231__$1 == null);
var state_1363__$1 = (function (){var statearr_1375 = state_1363;
(statearr_1375[(13)] = inst_1231__$1);

return statearr_1375;
})();
if(cljs.core.truth_(inst_1232)){
var statearr_1376_1458 = state_1363__$1;
(statearr_1376_1458[(1)] = (5));

} else {
var statearr_1377_1459 = state_1363__$1;
(statearr_1377_1459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (36))){
var inst_1322 = (state_1363[(12)]);
var inst_1326 = cljs.core.chunk_first.call(null,inst_1322);
var inst_1327 = cljs.core.chunk_rest.call(null,inst_1322);
var inst_1328 = cljs.core.count.call(null,inst_1326);
var inst_1303 = inst_1327;
var inst_1304 = inst_1326;
var inst_1305 = inst_1328;
var inst_1306 = (0);
var state_1363__$1 = (function (){var statearr_1378 = state_1363;
(statearr_1378[(8)] = inst_1303);

(statearr_1378[(9)] = inst_1304);

(statearr_1378[(10)] = inst_1305);

(statearr_1378[(7)] = inst_1306);

return statearr_1378;
})();
var statearr_1379_1460 = state_1363__$1;
(statearr_1379_1460[(2)] = null);

(statearr_1379_1460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (5))){
var inst_1238 = cljs.core.deref.call(null,cs);
var inst_1239 = cljs.core.seq.call(null,inst_1238);
var inst_1240 = inst_1239;
var inst_1241 = null;
var inst_1242 = (0);
var inst_1243 = (0);
var state_1363__$1 = (function (){var statearr_1380 = state_1363;
(statearr_1380[(14)] = inst_1240);

(statearr_1380[(17)] = inst_1241);

(statearr_1380[(18)] = inst_1242);

(statearr_1380[(19)] = inst_1243);

return statearr_1380;
})();
var statearr_1381_1461 = state_1363__$1;
(statearr_1381_1461[(2)] = null);

(statearr_1381_1461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (37))){
var inst_1322 = (state_1363[(12)]);
var inst_1331 = (state_1363[(15)]);
var inst_1231 = (state_1363[(13)]);
var inst_1331__$1 = cljs.core.first.call(null,inst_1322);
var inst_1332 = cljs.core.async.put_BANG_.call(null,inst_1331__$1,inst_1231,done);
var state_1363__$1 = (function (){var statearr_1382 = state_1363;
(statearr_1382[(15)] = inst_1331__$1);

return statearr_1382;
})();
if(cljs.core.truth_(inst_1332)){
var statearr_1383_1462 = state_1363__$1;
(statearr_1383_1462[(1)] = (39));

} else {
var statearr_1384_1463 = state_1363__$1;
(statearr_1384_1463[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (6))){
var inst_1295 = (state_1363[(16)]);
var inst_1294 = cljs.core.deref.call(null,cs);
var inst_1295__$1 = cljs.core.keys.call(null,inst_1294);
var inst_1296 = cljs.core.count.call(null,inst_1295__$1);
var inst_1297 = cljs.core.reset_BANG_.call(null,dctr,inst_1296);
var inst_1302 = cljs.core.seq.call(null,inst_1295__$1);
var inst_1303 = inst_1302;
var inst_1304 = null;
var inst_1305 = (0);
var inst_1306 = (0);
var state_1363__$1 = (function (){var statearr_1385 = state_1363;
(statearr_1385[(16)] = inst_1295__$1);

(statearr_1385[(20)] = inst_1297);

(statearr_1385[(8)] = inst_1303);

(statearr_1385[(9)] = inst_1304);

(statearr_1385[(10)] = inst_1305);

(statearr_1385[(7)] = inst_1306);

return statearr_1385;
})();
var statearr_1386_1464 = state_1363__$1;
(statearr_1386_1464[(2)] = null);

(statearr_1386_1464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (38))){
var inst_1342 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1387_1465 = state_1363__$1;
(statearr_1387_1465[(2)] = inst_1342);

(statearr_1387_1465[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (7))){
var inst_1359 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1388_1466 = state_1363__$1;
(statearr_1388_1466[(2)] = inst_1359);

(statearr_1388_1466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (39))){
var state_1363__$1 = state_1363;
var statearr_1389_1467 = state_1363__$1;
(statearr_1389_1467[(2)] = null);

(statearr_1389_1467[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (8))){
var inst_1243 = (state_1363[(19)]);
var inst_1242 = (state_1363[(18)]);
var inst_1245 = (inst_1243 < inst_1242);
var inst_1246 = inst_1245;
var state_1363__$1 = state_1363;
if(cljs.core.truth_(inst_1246)){
var statearr_1390_1468 = state_1363__$1;
(statearr_1390_1468[(1)] = (10));

} else {
var statearr_1391_1469 = state_1363__$1;
(statearr_1391_1469[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (40))){
var inst_1331 = (state_1363[(15)]);
var inst_1335 = done.call(null,null);
var inst_1336 = cljs.core.async.untap_STAR_.call(null,m,inst_1331);
var state_1363__$1 = (function (){var statearr_1392 = state_1363;
(statearr_1392[(21)] = inst_1335);

return statearr_1392;
})();
var statearr_1393_1470 = state_1363__$1;
(statearr_1393_1470[(2)] = inst_1336);

(statearr_1393_1470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (9))){
var inst_1292 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1394_1471 = state_1363__$1;
(statearr_1394_1471[(2)] = inst_1292);

(statearr_1394_1471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (41))){
var inst_1322 = (state_1363[(12)]);
var inst_1338 = (state_1363[(2)]);
var inst_1339 = cljs.core.next.call(null,inst_1322);
var inst_1303 = inst_1339;
var inst_1304 = null;
var inst_1305 = (0);
var inst_1306 = (0);
var state_1363__$1 = (function (){var statearr_1395 = state_1363;
(statearr_1395[(22)] = inst_1338);

(statearr_1395[(8)] = inst_1303);

(statearr_1395[(9)] = inst_1304);

(statearr_1395[(10)] = inst_1305);

(statearr_1395[(7)] = inst_1306);

return statearr_1395;
})();
var statearr_1396_1472 = state_1363__$1;
(statearr_1396_1472[(2)] = null);

(statearr_1396_1472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (10))){
var inst_1241 = (state_1363[(17)]);
var inst_1243 = (state_1363[(19)]);
var inst_1251 = cljs.core._nth.call(null,inst_1241,inst_1243);
var inst_1252 = cljs.core.nth.call(null,inst_1251,(0),null);
var inst_1253 = cljs.core.nth.call(null,inst_1251,(1),null);
var state_1363__$1 = (function (){var statearr_1397 = state_1363;
(statearr_1397[(23)] = inst_1252);

return statearr_1397;
})();
if(cljs.core.truth_(inst_1253)){
var statearr_1398_1473 = state_1363__$1;
(statearr_1398_1473[(1)] = (13));

} else {
var statearr_1399_1474 = state_1363__$1;
(statearr_1399_1474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (42))){
var state_1363__$1 = state_1363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1363__$1,(45),dchan);
} else {
if((state_val_1364 === (11))){
var inst_1240 = (state_1363[(14)]);
var inst_1262 = (state_1363[(24)]);
var inst_1262__$1 = cljs.core.seq.call(null,inst_1240);
var state_1363__$1 = (function (){var statearr_1400 = state_1363;
(statearr_1400[(24)] = inst_1262__$1);

return statearr_1400;
})();
if(inst_1262__$1){
var statearr_1401_1475 = state_1363__$1;
(statearr_1401_1475[(1)] = (16));

} else {
var statearr_1402_1476 = state_1363__$1;
(statearr_1402_1476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (43))){
var state_1363__$1 = state_1363;
var statearr_1403_1477 = state_1363__$1;
(statearr_1403_1477[(2)] = null);

(statearr_1403_1477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (12))){
var inst_1290 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1404_1478 = state_1363__$1;
(statearr_1404_1478[(2)] = inst_1290);

(statearr_1404_1478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (44))){
var inst_1356 = (state_1363[(2)]);
var state_1363__$1 = (function (){var statearr_1405 = state_1363;
(statearr_1405[(25)] = inst_1356);

return statearr_1405;
})();
var statearr_1406_1479 = state_1363__$1;
(statearr_1406_1479[(2)] = null);

(statearr_1406_1479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (13))){
var inst_1252 = (state_1363[(23)]);
var inst_1255 = cljs.core.async.close_BANG_.call(null,inst_1252);
var state_1363__$1 = state_1363;
var statearr_1407_1480 = state_1363__$1;
(statearr_1407_1480[(2)] = inst_1255);

(statearr_1407_1480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (45))){
var inst_1353 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1411_1481 = state_1363__$1;
(statearr_1411_1481[(2)] = inst_1353);

(statearr_1411_1481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (14))){
var state_1363__$1 = state_1363;
var statearr_1412_1482 = state_1363__$1;
(statearr_1412_1482[(2)] = null);

(statearr_1412_1482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (15))){
var inst_1243 = (state_1363[(19)]);
var inst_1240 = (state_1363[(14)]);
var inst_1241 = (state_1363[(17)]);
var inst_1242 = (state_1363[(18)]);
var inst_1258 = (state_1363[(2)]);
var inst_1259 = (inst_1243 + (1));
var tmp1408 = inst_1240;
var tmp1409 = inst_1241;
var tmp1410 = inst_1242;
var inst_1240__$1 = tmp1408;
var inst_1241__$1 = tmp1409;
var inst_1242__$1 = tmp1410;
var inst_1243__$1 = inst_1259;
var state_1363__$1 = (function (){var statearr_1413 = state_1363;
(statearr_1413[(26)] = inst_1258);

(statearr_1413[(14)] = inst_1240__$1);

(statearr_1413[(17)] = inst_1241__$1);

(statearr_1413[(18)] = inst_1242__$1);

(statearr_1413[(19)] = inst_1243__$1);

return statearr_1413;
})();
var statearr_1414_1483 = state_1363__$1;
(statearr_1414_1483[(2)] = null);

(statearr_1414_1483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (16))){
var inst_1262 = (state_1363[(24)]);
var inst_1264 = cljs.core.chunked_seq_QMARK_.call(null,inst_1262);
var state_1363__$1 = state_1363;
if(inst_1264){
var statearr_1415_1484 = state_1363__$1;
(statearr_1415_1484[(1)] = (19));

} else {
var statearr_1416_1485 = state_1363__$1;
(statearr_1416_1485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (17))){
var state_1363__$1 = state_1363;
var statearr_1417_1486 = state_1363__$1;
(statearr_1417_1486[(2)] = null);

(statearr_1417_1486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (18))){
var inst_1288 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1418_1487 = state_1363__$1;
(statearr_1418_1487[(2)] = inst_1288);

(statearr_1418_1487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (19))){
var inst_1262 = (state_1363[(24)]);
var inst_1266 = cljs.core.chunk_first.call(null,inst_1262);
var inst_1267 = cljs.core.chunk_rest.call(null,inst_1262);
var inst_1268 = cljs.core.count.call(null,inst_1266);
var inst_1240 = inst_1267;
var inst_1241 = inst_1266;
var inst_1242 = inst_1268;
var inst_1243 = (0);
var state_1363__$1 = (function (){var statearr_1419 = state_1363;
(statearr_1419[(14)] = inst_1240);

(statearr_1419[(17)] = inst_1241);

(statearr_1419[(18)] = inst_1242);

(statearr_1419[(19)] = inst_1243);

return statearr_1419;
})();
var statearr_1420_1488 = state_1363__$1;
(statearr_1420_1488[(2)] = null);

(statearr_1420_1488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (20))){
var inst_1262 = (state_1363[(24)]);
var inst_1274 = cljs.core.first.call(null,inst_1262);
var inst_1275 = cljs.core.nth.call(null,inst_1274,(0),null);
var inst_1276 = cljs.core.nth.call(null,inst_1274,(1),null);
var state_1363__$1 = (function (){var statearr_1421 = state_1363;
(statearr_1421[(27)] = inst_1275);

return statearr_1421;
})();
if(cljs.core.truth_(inst_1276)){
var statearr_1422_1489 = state_1363__$1;
(statearr_1422_1489[(1)] = (22));

} else {
var statearr_1423_1490 = state_1363__$1;
(statearr_1423_1490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (21))){
var inst_1285 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1424_1491 = state_1363__$1;
(statearr_1424_1491[(2)] = inst_1285);

(statearr_1424_1491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (22))){
var inst_1275 = (state_1363[(27)]);
var inst_1278 = cljs.core.async.close_BANG_.call(null,inst_1275);
var state_1363__$1 = state_1363;
var statearr_1425_1492 = state_1363__$1;
(statearr_1425_1492[(2)] = inst_1278);

(statearr_1425_1492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (23))){
var state_1363__$1 = state_1363;
var statearr_1426_1493 = state_1363__$1;
(statearr_1426_1493[(2)] = null);

(statearr_1426_1493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (24))){
var inst_1262 = (state_1363[(24)]);
var inst_1281 = (state_1363[(2)]);
var inst_1282 = cljs.core.next.call(null,inst_1262);
var inst_1240 = inst_1282;
var inst_1241 = null;
var inst_1242 = (0);
var inst_1243 = (0);
var state_1363__$1 = (function (){var statearr_1427 = state_1363;
(statearr_1427[(28)] = inst_1281);

(statearr_1427[(14)] = inst_1240);

(statearr_1427[(17)] = inst_1241);

(statearr_1427[(18)] = inst_1242);

(statearr_1427[(19)] = inst_1243);

return statearr_1427;
})();
var statearr_1428_1494 = state_1363__$1;
(statearr_1428_1494[(2)] = null);

(statearr_1428_1494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (25))){
var inst_1306 = (state_1363[(7)]);
var inst_1305 = (state_1363[(10)]);
var inst_1308 = (inst_1306 < inst_1305);
var inst_1309 = inst_1308;
var state_1363__$1 = state_1363;
if(cljs.core.truth_(inst_1309)){
var statearr_1429_1495 = state_1363__$1;
(statearr_1429_1495[(1)] = (27));

} else {
var statearr_1430_1496 = state_1363__$1;
(statearr_1430_1496[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (26))){
var inst_1295 = (state_1363[(16)]);
var inst_1349 = (state_1363[(2)]);
var inst_1350 = cljs.core.seq.call(null,inst_1295);
var state_1363__$1 = (function (){var statearr_1431 = state_1363;
(statearr_1431[(29)] = inst_1349);

return statearr_1431;
})();
if(inst_1350){
var statearr_1432_1497 = state_1363__$1;
(statearr_1432_1497[(1)] = (42));

} else {
var statearr_1433_1498 = state_1363__$1;
(statearr_1433_1498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (27))){
var inst_1304 = (state_1363[(9)]);
var inst_1306 = (state_1363[(7)]);
var inst_1311 = (state_1363[(30)]);
var inst_1231 = (state_1363[(13)]);
var inst_1311__$1 = cljs.core._nth.call(null,inst_1304,inst_1306);
var inst_1312 = cljs.core.async.put_BANG_.call(null,inst_1311__$1,inst_1231,done);
var state_1363__$1 = (function (){var statearr_1434 = state_1363;
(statearr_1434[(30)] = inst_1311__$1);

return statearr_1434;
})();
if(cljs.core.truth_(inst_1312)){
var statearr_1435_1499 = state_1363__$1;
(statearr_1435_1499[(1)] = (30));

} else {
var statearr_1436_1500 = state_1363__$1;
(statearr_1436_1500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (28))){
var inst_1303 = (state_1363[(8)]);
var inst_1322 = (state_1363[(12)]);
var inst_1322__$1 = cljs.core.seq.call(null,inst_1303);
var state_1363__$1 = (function (){var statearr_1437 = state_1363;
(statearr_1437[(12)] = inst_1322__$1);

return statearr_1437;
})();
if(inst_1322__$1){
var statearr_1438_1501 = state_1363__$1;
(statearr_1438_1501[(1)] = (33));

} else {
var statearr_1439_1502 = state_1363__$1;
(statearr_1439_1502[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (29))){
var inst_1347 = (state_1363[(2)]);
var state_1363__$1 = state_1363;
var statearr_1440_1503 = state_1363__$1;
(statearr_1440_1503[(2)] = inst_1347);

(statearr_1440_1503[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (30))){
var state_1363__$1 = state_1363;
var statearr_1441_1504 = state_1363__$1;
(statearr_1441_1504[(2)] = null);

(statearr_1441_1504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1364 === (31))){
var inst_1311 = (state_1363[(30)]);
var inst_1315 = done.call(null,null);
var inst_1316 = cljs.core.async.untap_STAR_.call(null,m,inst_1311);
var state_1363__$1 = (function (){var statearr_1442 = state_1363;
(statearr_1442[(31)] = inst_1315);

return statearr_1442;
})();
var statearr_1443_1505 = state_1363__$1;
(statearr_1443_1505[(2)] = inst_1316);

(statearr_1443_1505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
});})(c__8__auto___1451,cs,m,dchan,dctr,done))
;
return ((function (switch__3__auto__,c__8__auto___1451,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4__auto__ = null;
var cljs$core$async$mult_$_state_machine__4__auto____0 = (function (){
var statearr_1447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1447[(0)] = cljs$core$async$mult_$_state_machine__4__auto__);

(statearr_1447[(1)] = (1));

return statearr_1447;
});
var cljs$core$async$mult_$_state_machine__4__auto____1 = (function (state_1363){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1448){if((e1448 instanceof Object)){
var ex__7__auto__ = e1448;
var statearr_1449_1506 = state_1363;
(statearr_1449_1506[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1363);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1507 = state_1363;
state_1363 = G__1507;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4__auto__ = function(state_1363){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4__auto____1.call(this,state_1363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4__auto____0;
cljs$core$async$mult_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4__auto____1;
return cljs$core$async$mult_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1451,cs,m,dchan,dctr,done))
})();
var state__10__auto__ = (function (){var statearr_1450 = f__9__auto__.call(null);
(statearr_1450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___1451);

return statearr_1450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1451,cs,m,dchan,dctr,done))
);


return m;
}); return (
new cljs.core.Var(function(){return cljs.core.async.mult;},new cljs.core.Symbol("cljs.core.async","mult","cljs.core.async/mult",(-435577366),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),"cljs/core/async.cljs",(11),(1),(418),(418),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult.",(cljs.core.truth_(cljs.core.async.mult)?cljs.core.async.mult.cljs$lang$test:null)])));})()
;
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
(function (){
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args1508 = [];
var len__23656__auto___1511 = arguments.length;
var i__23657__auto___1512 = (0);
while(true){
if((i__23657__auto___1512 < len__23656__auto___1511)){
args1508.push((arguments[i__23657__auto___1512]));

var G__1513 = (i__23657__auto___1512 + (1));
i__23657__auto___1512 = G__1513;
continue;
} else {
}
break;
}

var G__1510 = args1508.length;
switch (G__1510) {
case (2):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1508.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.tap;},new cljs.core.Symbol("cljs.core.async","tap","cljs.core.async/tap",(2029476193),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"tap","tap",(553829064),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(461),(461),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Copies the mult source onto the supplied channel.\n\n  By default the channel will be closed when the source closes,\n  but can be determined by the close? parameter.",(cljs.core.truth_(cljs.core.async.tap)?cljs.core.async.tap.cljs$lang$test:null)])));})()
;

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.tap;},new cljs.core.Symbol("cljs.core.async","tap","cljs.core.async/tap",(2029476193),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"tap","tap",(553829064),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(461),(461),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Copies the mult source onto the supplied channel.\n\n  By default the channel will be closed when the source closes,\n  but can be determined by the close? parameter.",(cljs.core.truth_(cljs.core.async.tap)?cljs.core.async.tap.cljs$lang$test:null)]));
/**
 * Disconnects a target channel from a mult
 */
(function (){
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.untap;},new cljs.core.Symbol("cljs.core.async","untap","cljs.core.async/untap",(1149440150),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"untap","untap",(206858233),null),"cljs/core/async.cljs",(12),(1),(469),(469),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Disconnects a target channel from a mult",(cljs.core.truth_(cljs.core.async.untap)?cljs.core.async.untap.cljs$lang$test:null)])));})()
;
/**
 * Disconnects all target channels from a mult
 */
(function (){
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
}); return (
new cljs.core.Var(function(){return cljs.core.async.untap_all;},new cljs.core.Symbol("cljs.core.async","untap-all","cljs.core.async/untap-all",(-658229165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"untap-all","untap-all",(-477409846),null),"cljs/core/async.cljs",(16),(1),(474),(474),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",(-1187640995),null)], null)),"Disconnects all target channels from a mult",(cljs.core.truth_(cljs.core.async.untap_all)?cljs.core.async.untap_all.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.core.async.Mix = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.Mix;},new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"Mix","Mix",(1866242972),null),"cljs/core/async.cljs",(17),(1),(478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"admix*","admix*",(1745259777),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"unmix*","unmix*",(-1694849663),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"unmix-all*","unmix-all*",(-611573479),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"toggle*","toggle*",(-513067875),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"state-map","state-map",(326659399),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"solo-mode*","solo-mode*",(-1348795864),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"mode","mode",(-2000032078),null)], null)], null)], true, false)], null),(478),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.Mix)?cljs.core.async.Mix.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,ch);
} else {
var m__23055__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.admix_STAR_;},new cljs.core.Symbol("cljs.core.async","admix*","cljs.core.async/admix*",(-1579347714),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"admix*","admix*",(1745259777),null),"cljs/core/async.cljs",(10),(1),(478),(479),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.core.async.admix_STAR_)?cljs.core.async.admix_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,ch);
} else {
var m__23055__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unmix_STAR_;},new cljs.core.Symbol("cljs.core.async","unmix*","cljs.core.async/unmix*",(1638861176),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unmix*","unmix*",(-1694849663),null),"cljs/core/async.cljs",(10),(1),(478),(480),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.core.async.unmix_STAR_)?cljs.core.async.unmix_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m);
} else {
var m__23055__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unmix_all_STAR_;},new cljs.core.Symbol("cljs.core.async","unmix-all*","cljs.core.async/unmix-all*",(-524230944),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unmix-all*","unmix-all*",(-611573479),null),"cljs/core/async.cljs",(14),(1),(478),(481),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.core.async.unmix_all_STAR_)?cljs.core.async.unmix_all_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,state_map);
} else {
var m__23055__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.toggle_STAR_;},new cljs.core.Symbol("cljs.core.async","toggle*","cljs.core.async/toggle*",(-644841174),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"toggle*","toggle*",(-513067875),null),"cljs/core/async.cljs",(11),(1),(478),(482),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"state-map","state-map",(326659399),null)], null)),null,(cljs.core.truth_(cljs.core.async.toggle_STAR_)?cljs.core.async.toggle_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23054__auto__ = (((m == null))?null:m);
var m__23055__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,m,mode);
} else {
var m__23055__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.solo_mode_STAR_;},new cljs.core.Symbol("cljs.core.async","solo-mode*","cljs.core.async/solo-mode*",(1717991059),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"solo-mode*","solo-mode*",(-1348795864),null),"cljs/core/async.cljs",(14),(1),(478),(483),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"mode","mode",(-2000032078),null)], null)),null,(cljs.core.truth_(cljs.core.async.solo_mode_STAR_)?cljs.core.async.solo_mode_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1525 = arguments.length;
var i__23657__auto___1526 = (0);
while(true){
if((i__23657__auto___1526 < len__23656__auto___1525)){
args__23658__auto__.push((arguments[i__23657__auto___1526]));

var G__1527 = (i__23657__auto___1526 + (1));
i__23657__auto___1526 = G__1527;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.ioc_alts_BANG_;},new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"ioc-alts!","ioc-alts!",(2136069053),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(485),(485),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(cljs.core.async.ioc_alts_BANG_)?cljs.core.async.ioc_alts_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__1519){
var map__1520 = p__1519;
var map__1520__$1 = ((((!((map__1520 == null)))?((((map__1520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1520):map__1520);
var opts = map__1520__$1;
var statearr_1522_1528 = state;
(statearr_1522_1528[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__19834__auto__ = cljs.core.async.do_alts.call(null,((function (map__1520,map__1520__$1,opts){
return (function (val){
var statearr_1523_1529 = state;
(statearr_1523_1529[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1520,map__1520__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__19834__auto__)){
var cb = temp__19834__auto__;
var statearr_1524_1530 = state;
(statearr_1524_1530[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq1515){
var G__1516 = cljs.core.first.call(null,seq1515);
var seq1515__$1 = cljs.core.next.call(null,seq1515);
var G__1517 = cljs.core.first.call(null,seq1515__$1);
var seq1515__$2 = cljs.core.next.call(null,seq1515__$1);
var G__1518 = cljs.core.first.call(null,seq1515__$2);
var seq1515__$3 = cljs.core.next.call(null,seq1515__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1516,G__1517,G__1518,seq1515__$3);
});

new cljs.core.Var(function(){return cljs.core.async.ioc_alts_BANG_;},new cljs.core.Symbol("cljs.core.async","ioc-alts!","cljs.core.async/ioc-alts!",(-1272027642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"ioc-alts!","ioc-alts!",(2136069053),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(485),(485),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"cont-block","cont-block",(1395400937),null),new cljs.core.Symbol(null,"ports","ports",(625740665),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(cljs.core.async.ioc_alts_BANG_)?cljs.core.async.ioc_alts_BANG_.cljs$lang$test:null)]));
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
(function (){
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mute","mute",(1151223646)),null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",(-316350075)));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",(-316350075)),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",(-2095325672)),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mutes","mutes",(1068806309)),pick.call(null,new cljs.core.Keyword(null,"mute","mute",(1151223646)),chs),new cljs.core.Keyword(null,"solos","solos",(1441458643)),solos,new cljs.core.Keyword(null,"reads","reads",(-1215067361)),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",(-2095325672)))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async1698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Mix}
*/
cljs.core.async.t_cljs$core$async1698 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1699){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta1699 = meta1699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1700,meta1699__$1){
var self__ = this;
var _1700__$1 = this;
return (new cljs.core.async.t_cljs$core$async1698(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1699__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1700){
var self__ = this;
var _1700__$1 = this;
return self__.meta1699;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",(477485025),null),new cljs.core.Symbol(null,"solo-mode","solo-mode",(2031788074),null),new cljs.core.Symbol(null,"pick","pick",(1300068175),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"calc-state","calc-state",(-349968968),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.Symbol(null,"solo-modes","solo-modes",(882180540),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"meta1699","meta1699",(2051688800),null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1698";

cljs.core.async.t_cljs$core$async1698.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async1698");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

(function (){
cljs.core.async.__GT_t_cljs$core$async1698 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async1698(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1699){
return (new cljs.core.async.t_cljs$core$async1698(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1699));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
; return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async1698;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async1698","cljs.core.async/->t_cljs$core$async1698",(2020636304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async","Mux","cljs.core.async/Mux",(-667288355),null),null,new cljs.core.Symbol("cljs.core.async","Mix","cljs.core.async/Mix",(1416655093),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async1698","->t_cljs$core$async1698",(859824649),null),"cljs/core/async.cljs",true,(11),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(541),cljs.core.list(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",(477485025),null),new cljs.core.Symbol(null,"solo-mode","solo-mode",(2031788074),null),new cljs.core.Symbol(null,"pick","pick",(1300068175),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"calc-state","calc-state",(-349968968),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.Symbol(null,"solo-modes","solo-modes",(882180540),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"meta1699","meta1699",(2051688800),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async1698)?cljs.core.async.__GT_t_cljs$core$async1698.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async1698(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8__auto___1865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1802){
var state_val_1803 = (state_1802[(1)]);
if((state_val_1803 === (32))){
var inst_1761 = (state_1802[(7)]);
var state_1802__$1 = state_1802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1802__$1,(35),out,inst_1761);
} else {
if((state_val_1803 === (1))){
var inst_1704 = (state_1802[(8)]);
var inst_1704__$1 = calc_state.call(null);
var inst_1706 = (inst_1704__$1 == null);
var inst_1707 = cljs.core.not.call(null,inst_1706);
var state_1802__$1 = (function (){var statearr_1804 = state_1802;
(statearr_1804[(8)] = inst_1704__$1);

return statearr_1804;
})();
if(inst_1707){
var statearr_1805_1866 = state_1802__$1;
(statearr_1805_1866[(1)] = (2));

} else {
var statearr_1806_1867 = state_1802__$1;
(statearr_1806_1867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (33))){
var inst_1752 = (state_1802[(9)]);
var inst_1729 = inst_1752;
var state_1802__$1 = (function (){var statearr_1807 = state_1802;
(statearr_1807[(10)] = inst_1729);

return statearr_1807;
})();
var statearr_1808_1868 = state_1802__$1;
(statearr_1808_1868[(2)] = null);

(statearr_1808_1868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (2))){
var inst_1704 = (state_1802[(8)]);
var inst_1709 = inst_1704.cljs$lang$protocol_mask$partition0$;
var inst_1710 = (inst_1709 & (64));
var inst_1711 = inst_1704.cljs$core$ISeq$;
var inst_1712 = (cljs.core.PROTOCOL_SENTINEL === inst_1711);
var inst_1713 = (inst_1710) || (inst_1712);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1713)){
var statearr_1809_1869 = state_1802__$1;
(statearr_1809_1869[(1)] = (5));

} else {
var statearr_1810_1870 = state_1802__$1;
(statearr_1810_1870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (34))){
var inst_1796 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
var statearr_1811_1871 = state_1802__$1;
(statearr_1811_1871[(2)] = inst_1796);

(statearr_1811_1871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (3))){
var state_1802__$1 = state_1802;
var statearr_1812_1872 = state_1802__$1;
(statearr_1812_1872[(2)] = false);

(statearr_1812_1872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (35))){
var inst_1787 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1787)){
var statearr_1813_1873 = state_1802__$1;
(statearr_1813_1873[(1)] = (36));

} else {
var statearr_1814_1874 = state_1802__$1;
(statearr_1814_1874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (4))){
var inst_1720 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1720)){
var statearr_1815_1875 = state_1802__$1;
(statearr_1815_1875[(1)] = (8));

} else {
var statearr_1816_1876 = state_1802__$1;
(statearr_1816_1876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (36))){
var inst_1752 = (state_1802[(9)]);
var inst_1729 = inst_1752;
var state_1802__$1 = (function (){var statearr_1817 = state_1802;
(statearr_1817[(10)] = inst_1729);

return statearr_1817;
})();
var statearr_1818_1877 = state_1802__$1;
(statearr_1818_1877[(2)] = null);

(statearr_1818_1877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (5))){
var state_1802__$1 = state_1802;
var statearr_1819_1878 = state_1802__$1;
(statearr_1819_1878[(2)] = true);

(statearr_1819_1878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (37))){
var state_1802__$1 = state_1802;
var statearr_1820_1879 = state_1802__$1;
(statearr_1820_1879[(2)] = null);

(statearr_1820_1879[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (6))){
var state_1802__$1 = state_1802;
var statearr_1821_1880 = state_1802__$1;
(statearr_1821_1880[(2)] = false);

(statearr_1821_1880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (38))){
var inst_1792 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
var statearr_1822_1881 = state_1802__$1;
(statearr_1822_1881[(2)] = inst_1792);

(statearr_1822_1881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (7))){
var inst_1717 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
var statearr_1823_1882 = state_1802__$1;
(statearr_1823_1882[(2)] = inst_1717);

(statearr_1823_1882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (8))){
var inst_1704 = (state_1802[(8)]);
var inst_1722 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1704);
var state_1802__$1 = state_1802;
var statearr_1824_1883 = state_1802__$1;
(statearr_1824_1883[(2)] = inst_1722);

(statearr_1824_1883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (9))){
var inst_1704 = (state_1802[(8)]);
var state_1802__$1 = state_1802;
var statearr_1825_1884 = state_1802__$1;
(statearr_1825_1884[(2)] = inst_1704);

(statearr_1825_1884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (10))){
var inst_1704 = (state_1802[(8)]);
var inst_1725 = (state_1802[(2)]);
var inst_1726 = cljs.core.get.call(null,inst_1725,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var inst_1727 = cljs.core.get.call(null,inst_1725,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1728 = cljs.core.get.call(null,inst_1725,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var inst_1729 = inst_1704;
var state_1802__$1 = (function (){var statearr_1826 = state_1802;
(statearr_1826[(11)] = inst_1726);

(statearr_1826[(12)] = inst_1727);

(statearr_1826[(13)] = inst_1728);

(statearr_1826[(10)] = inst_1729);

return statearr_1826;
})();
var statearr_1827_1885 = state_1802__$1;
(statearr_1827_1885[(2)] = null);

(statearr_1827_1885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (11))){
var inst_1729 = (state_1802[(10)]);
var inst_1733 = (inst_1729 == null);
var inst_1734 = cljs.core.not.call(null,inst_1733);
var state_1802__$1 = state_1802;
if(inst_1734){
var statearr_1828_1886 = state_1802__$1;
(statearr_1828_1886[(1)] = (13));

} else {
var statearr_1829_1887 = state_1802__$1;
(statearr_1829_1887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (12))){
var inst_1800 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1802__$1,inst_1800);
} else {
if((state_val_1803 === (13))){
var inst_1729 = (state_1802[(10)]);
var inst_1736 = inst_1729.cljs$lang$protocol_mask$partition0$;
var inst_1737 = (inst_1736 & (64));
var inst_1738 = inst_1729.cljs$core$ISeq$;
var inst_1739 = (cljs.core.PROTOCOL_SENTINEL === inst_1738);
var inst_1740 = (inst_1737) || (inst_1739);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1740)){
var statearr_1830_1888 = state_1802__$1;
(statearr_1830_1888[(1)] = (16));

} else {
var statearr_1831_1889 = state_1802__$1;
(statearr_1831_1889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (14))){
var state_1802__$1 = state_1802;
var statearr_1832_1890 = state_1802__$1;
(statearr_1832_1890[(2)] = false);

(statearr_1832_1890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (15))){
var inst_1747 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1747)){
var statearr_1833_1891 = state_1802__$1;
(statearr_1833_1891[(1)] = (19));

} else {
var statearr_1834_1892 = state_1802__$1;
(statearr_1834_1892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (16))){
var state_1802__$1 = state_1802;
var statearr_1835_1893 = state_1802__$1;
(statearr_1835_1893[(2)] = true);

(statearr_1835_1893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (17))){
var state_1802__$1 = state_1802;
var statearr_1836_1894 = state_1802__$1;
(statearr_1836_1894[(2)] = false);

(statearr_1836_1894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (18))){
var inst_1744 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
var statearr_1837_1895 = state_1802__$1;
(statearr_1837_1895[(2)] = inst_1744);

(statearr_1837_1895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (19))){
var inst_1729 = (state_1802[(10)]);
var inst_1749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1729);
var state_1802__$1 = state_1802;
var statearr_1838_1896 = state_1802__$1;
(statearr_1838_1896[(2)] = inst_1749);

(statearr_1838_1896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (20))){
var inst_1729 = (state_1802[(10)]);
var state_1802__$1 = state_1802;
var statearr_1839_1897 = state_1802__$1;
(statearr_1839_1897[(2)] = inst_1729);

(statearr_1839_1897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (21))){
var inst_1752 = (state_1802[(9)]);
var inst_1752__$1 = (state_1802[(2)]);
var inst_1753 = cljs.core.get.call(null,inst_1752__$1,new cljs.core.Keyword(null,"reads","reads",(-1215067361)));
var inst_1754 = cljs.core.get.call(null,inst_1752__$1,new cljs.core.Keyword(null,"mutes","mutes",(1068806309)));
var inst_1755 = cljs.core.get.call(null,inst_1752__$1,new cljs.core.Keyword(null,"solos","solos",(1441458643)));
var state_1802__$1 = (function (){var statearr_1840 = state_1802;
(statearr_1840[(9)] = inst_1752__$1);

(statearr_1840[(15)] = inst_1754);

(statearr_1840[(16)] = inst_1755);

return statearr_1840;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1802__$1,(22),inst_1753);
} else {
if((state_val_1803 === (22))){
var inst_1761 = (state_1802[(7)]);
var inst_1762 = (state_1802[(14)]);
var inst_1760 = (state_1802[(2)]);
var inst_1761__$1 = cljs.core.nth.call(null,inst_1760,(0),null);
var inst_1762__$1 = cljs.core.nth.call(null,inst_1760,(1),null);
var inst_1763 = (inst_1761__$1 == null);
var inst_1764 = cljs.core._EQ_.call(null,inst_1762__$1,change);
var inst_1765 = (inst_1763) || (inst_1764);
var state_1802__$1 = (function (){var statearr_1841 = state_1802;
(statearr_1841[(7)] = inst_1761__$1);

(statearr_1841[(14)] = inst_1762__$1);

return statearr_1841;
})();
if(cljs.core.truth_(inst_1765)){
var statearr_1842_1898 = state_1802__$1;
(statearr_1842_1898[(1)] = (23));

} else {
var statearr_1843_1899 = state_1802__$1;
(statearr_1843_1899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (23))){
var inst_1761 = (state_1802[(7)]);
var inst_1767 = (inst_1761 == null);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1767)){
var statearr_1844_1900 = state_1802__$1;
(statearr_1844_1900[(1)] = (26));

} else {
var statearr_1845_1901 = state_1802__$1;
(statearr_1845_1901[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (24))){
var inst_1755 = (state_1802[(16)]);
var inst_1762 = (state_1802[(14)]);
var inst_1776 = (state_1802[(17)]);
var inst_1776__$1 = inst_1755.call(null,inst_1762);
var state_1802__$1 = (function (){var statearr_1846 = state_1802;
(statearr_1846[(17)] = inst_1776__$1);

return statearr_1846;
})();
if(cljs.core.truth_(inst_1776__$1)){
var statearr_1847_1902 = state_1802__$1;
(statearr_1847_1902[(1)] = (29));

} else {
var statearr_1848_1903 = state_1802__$1;
(statearr_1848_1903[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (25))){
var inst_1798 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
var statearr_1849_1904 = state_1802__$1;
(statearr_1849_1904[(2)] = inst_1798);

(statearr_1849_1904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (26))){
var inst_1762 = (state_1802[(14)]);
var inst_1769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1762);
var state_1802__$1 = state_1802;
var statearr_1850_1905 = state_1802__$1;
(statearr_1850_1905[(2)] = inst_1769);

(statearr_1850_1905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (27))){
var state_1802__$1 = state_1802;
var statearr_1851_1906 = state_1802__$1;
(statearr_1851_1906[(2)] = null);

(statearr_1851_1906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (28))){
var inst_1772 = (state_1802[(2)]);
var inst_1773 = calc_state.call(null);
var inst_1729 = inst_1773;
var state_1802__$1 = (function (){var statearr_1852 = state_1802;
(statearr_1852[(18)] = inst_1772);

(statearr_1852[(10)] = inst_1729);

return statearr_1852;
})();
var statearr_1853_1907 = state_1802__$1;
(statearr_1853_1907[(2)] = null);

(statearr_1853_1907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (29))){
var inst_1776 = (state_1802[(17)]);
var state_1802__$1 = state_1802;
var statearr_1854_1908 = state_1802__$1;
(statearr_1854_1908[(2)] = inst_1776);

(statearr_1854_1908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (30))){
var inst_1755 = (state_1802[(16)]);
var inst_1754 = (state_1802[(15)]);
var inst_1762 = (state_1802[(14)]);
var inst_1779 = cljs.core.empty_QMARK_.call(null,inst_1755);
var inst_1780 = inst_1754.call(null,inst_1762);
var inst_1781 = cljs.core.not.call(null,inst_1780);
var inst_1782 = (inst_1779) && (inst_1781);
var state_1802__$1 = state_1802;
var statearr_1855_1909 = state_1802__$1;
(statearr_1855_1909[(2)] = inst_1782);

(statearr_1855_1909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1803 === (31))){
var inst_1784 = (state_1802[(2)]);
var state_1802__$1 = state_1802;
if(cljs.core.truth_(inst_1784)){
var statearr_1856_1910 = state_1802__$1;
(statearr_1856_1910[(1)] = (32));

} else {
var statearr_1857_1911 = state_1802__$1;
(statearr_1857_1911[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3__auto__,c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4__auto__ = null;
var cljs$core$async$mix_$_state_machine__4__auto____0 = (function (){
var statearr_1861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1861[(0)] = cljs$core$async$mix_$_state_machine__4__auto__);

(statearr_1861[(1)] = (1));

return statearr_1861;
});
var cljs$core$async$mix_$_state_machine__4__auto____1 = (function (state_1802){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1862){if((e1862 instanceof Object)){
var ex__7__auto__ = e1862;
var statearr_1863_1912 = state_1802;
(statearr_1863_1912[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1802);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1913 = state_1802;
state_1802 = G__1913;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4__auto__ = function(state_1802){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4__auto____1.call(this,state_1802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4__auto____0;
cljs$core$async$mix_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4__auto____1;
return cljs$core$async$mix_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10__auto__ = (function (){var statearr_1864 = f__9__auto__.call(null);
(statearr_1864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___1865);

return statearr_1864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___1865,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
}); return (
new cljs.core.Var(function(){return cljs.core.async.mix;},new cljs.core.Symbol("cljs.core.async","mix","cljs.core.async/mix",(957154536),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mix","mix",(2121373763),null),"cljs/core/async.cljs",(10),(1),(496),(496),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",(729986010),null)], null)),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n",(cljs.core.truth_(cljs.core.async.mix)?cljs.core.async.mix.cljs$lang$test:null)])));})()
;
/**
 * Adds ch as an input to the mix
 */
(function (){
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.admix;},new cljs.core.Symbol("cljs.core.async","admix","cljs.core.async/admix",(-1100810304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"admix","admix",(1740079273),null),"cljs/core/async.cljs",(12),(1),(566),(566),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mix","mix",(2121373763),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Adds ch as an input to the mix",(cljs.core.truth_(cljs.core.async.admix)?cljs.core.async.admix.cljs$lang$test:null)])));})()
;
/**
 * Removes ch as an input to the mix
 */
(function (){
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.unmix;},new cljs.core.Symbol("cljs.core.async","unmix","cljs.core.async/unmix",(-215760979),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unmix","unmix",(947849778),null),"cljs/core/async.cljs",(12),(1),(571),(571),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mix","mix",(2121373763),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Removes ch as an input to the mix",(cljs.core.truth_(cljs.core.async.unmix)?cljs.core.async.unmix.cljs$lang$test:null)])));})()
;
/**
 * removes all inputs from the mix
 */
(function (){
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
}); return (
new cljs.core.Var(function(){return cljs.core.async.unmix_all;},new cljs.core.Symbol("cljs.core.async","unmix-all","cljs.core.async/unmix-all",(-1624081758),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unmix-all","unmix-all",(-655431879),null),"cljs/core/async.cljs",(16),(1),(576),(576),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mix","mix",(2121373763),null)], null)),"removes all inputs from the mix",(cljs.core.truth_(cljs.core.async.unmix_all)?cljs.core.async.unmix_all.cljs$lang$test:null)])));})()
;
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
(function (){
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
}); return (
new cljs.core.Var(function(){return cljs.core.async.toggle;},new cljs.core.Symbol("cljs.core.async","toggle","cljs.core.async/toggle",(1744768350),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"toggle","toggle",(-1362593739),null),"cljs/core/async.cljs",(13),(1),(581),(581),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mix","mix",(2121373763),null),new cljs.core.Symbol(null,"state-map","state-map",(326659399),null)], null)),"Atomically sets the state(s) of one or more channels in a mix. The\n  state map is a map of channels -> channel-state-map. A\n  channel-state-map is a map of attrs -> boolean, where attr is one or\n  more of :mute, :pause or :solo. Any states supplied are merged with\n  the current state.\n\n  Note that channels can be added to a mix via toggle, which can be\n  used to add channels in a particular (e.g. paused) state.",(cljs.core.truth_(cljs.core.async.toggle)?cljs.core.async.toggle.cljs$lang$test:null)])));})()
;
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
(function (){
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
}); return (
new cljs.core.Var(function(){return cljs.core.async.solo_mode;},new cljs.core.Symbol("cljs.core.async","solo-mode","cljs.core.async/solo-mode",(542521267),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"solo-mode","solo-mode",(2031788074),null),"cljs/core/async.cljs",(16),(1),(593),(593),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mix","mix",(2121373763),null),new cljs.core.Symbol(null,"mode","mode",(-2000032078),null)], null)),"Sets the solo mode of the mix. mode must be one of :mute or :pause",(cljs.core.truth_(cljs.core.async.solo_mode)?cljs.core.async.solo_mode.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.core.async.Pub = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.Pub;},new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"Pub","Pub",(2012661056),null),"cljs/core/async.cljs",(17),(1),(599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"sub*","sub*",(2085899635),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"unsub*","unsub*",(1763660993),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"unsub-all*","unsub-all*",(2133355011),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)], null)], true, false)], null),(599),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.Pub)?cljs.core.async.Pub.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23054__auto__ = (((p == null))?null:p);
var m__23055__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23055__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.sub_STAR_;},new cljs.core.Symbol("cljs.core.async","sub*","cljs.core.async/sub*",(1193927192),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"sub*","sub*",(2085899635),null),"cljs/core/async.cljs",(8),(1),(599),(600),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),null,(cljs.core.truth_(cljs.core.async.sub_STAR_)?cljs.core.async.sub_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23054__auto__ = (((p == null))?null:p);
var m__23055__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,p,v,ch);
} else {
var m__23055__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unsub_STAR_;},new cljs.core.Symbol("cljs.core.async","unsub*","cljs.core.async/unsub*",(-1581014166),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub*","unsub*",(1763660993),null),"cljs/core/async.cljs",(10),(1),(599),(601),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.core.async.unsub_STAR_)?cljs.core.async.unsub_STAR_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args1914 = [];
var len__23656__auto___1917 = arguments.length;
var i__23657__auto___1918 = (0);
while(true){
if((i__23657__auto___1918 < len__23656__auto___1917)){
args1914.push((arguments[i__23657__auto___1918]));

var G__1919 = (i__23657__auto___1918 + (1));
i__23657__auto___1918 = G__1919;
continue;
} else {
}
break;
}

var G__1916 = args1914.length;
switch (G__1916) {
case (1):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1914.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unsub_all_STAR_;},new cljs.core.Symbol("cljs.core.async","unsub-all*","cljs.core.async/unsub-all*",(938837674),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub-all*","unsub-all*",(2133355011),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(599),(602),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.core.async.unsub_all_STAR_)?cljs.core.async.unsub_all_STAR_.cljs$lang$test:null)])));})()
;

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23054__auto__ = (((p == null))?null:p);
var m__23055__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,p);
} else {
var m__23055__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23054__auto__ = (((p == null))?null:p);
var m__23055__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,p,v);
} else {
var m__23055__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.unsub_all_STAR_;},new cljs.core.Symbol("cljs.core.async","unsub-all*","cljs.core.async/unsub-all*",(938837674),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub-all*","unsub-all*",(2133355011),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(599),(602),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.core.async.unsub_all_STAR_)?cljs.core.async.unsub_all_STAR_.cljs$lang$test:null)]));

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
(function (){
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args1921 = [];
var len__23656__auto___2046 = arguments.length;
var i__23657__auto___2047 = (0);
while(true){
if((i__23657__auto___2047 < len__23656__auto___2046)){
args1921.push((arguments[i__23657__auto___2047]));

var G__2048 = (i__23657__auto___2047 + (1));
i__23657__auto___2047 = G__2048;
continue;
} else {
}
break;
}

var G__1923 = args1921.length;
switch (G__1923) {
case (2):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1921.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.pub;},new cljs.core.Symbol("cljs.core.async","pub","cljs.core.async/pub",(1110118234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pub","pub",(451387619),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(604),(604),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),"Creates and returns a pub(lication) of the supplied channel,\n  partitioned into topics by the topic-fn. topic-fn will be applied to\n  each value on the channel and the result will determine the 'topic'\n  on which that value will be put. Channels can be subscribed to\n  receive copies of topics using 'sub', and unsubscribed using\n  'unsub'. Each topic will be handled by an internal mult on a\n  dedicated channel. By default these internal channels are\n  unbuffered, but a buf-fn can be supplied which, given a topic,\n  creates a buffer with desired properties.\n\n  Each item is distributed to all subs in parallel and synchronously,\n  i.e. each sub must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow subs from holding up the pub.\n\n  Items received when there are no matching subs get dropped.\n\n  Note that if buf-fns are used then each topic is handled\n  asynchronously, i.e. if a channel is subscribed to more than one\n  topic it should not expect them to be interleaved identically with\n  the source.",(cljs.core.truth_(cljs.core.async.pub)?cljs.core.async.pub.cljs$lang$test:null)])));})()
;

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20817__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20817__auto__,mults){
return (function (p1__3_SHARP_){
if(cljs.core.truth_(p1__3_SHARP_.call(null,topic))){
return p1__3_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20817__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async1924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.async.Pub}
*/
cljs.core.async.t_cljs$core$async1924 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta1925){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta1925 = meta1925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1926,meta1925__$1){
var self__ = this;
var _1926__$1 = this;
return (new cljs.core.async.t_cljs$core$async1924(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta1925__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1926){
var self__ = this;
var _1926__$1 = this;
return self__.meta1925;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__19834__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__19834__auto__)){
var m = temp__19834__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null),new cljs.core.Symbol(null,"mults","mults",(-461114485),null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",(1796584816),null),new cljs.core.Symbol(null,"meta1925","meta1925",(304903127),null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1924";

cljs.core.async.t_cljs$core$async1924.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async1924");
});})(mults,ensure_mult))
;

(function (){
cljs.core.async.__GT_t_cljs$core$async1924 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async1924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta1925){
return (new cljs.core.async.t_cljs$core$async1924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta1925));
});})(mults,ensure_mult))
; return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async1924;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async1924","cljs.core.async/->t_cljs$core$async1924",(-158604130),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async","Mux","cljs.core.async/Mux",(-667288355),null),null,new cljs.core.Symbol("cljs.core.async","Pub","cljs.core.async/Pub",(-1398576663),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async1924","->t_cljs$core$async1924",(-1904838153),null),"cljs/core/async.cljs",true,(14),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(633),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null),new cljs.core.Symbol(null,"mults","mults",(-461114485),null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",(1796584816),null),new cljs.core.Symbol(null,"meta1925","meta1925",(304903127),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async1924)?cljs.core.async.__GT_t_cljs$core$async1924.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async1924(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8__auto___2050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2050,mults,ensure_mult,p){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2050,mults,ensure_mult,p){
return (function (state_1998){
var state_val_1999 = (state_1998[(1)]);
if((state_val_1999 === (1))){
var state_1998__$1 = state_1998;
var statearr_2000_2051 = state_1998__$1;
(statearr_2000_2051[(2)] = null);

(statearr_2000_2051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (2))){
var state_1998__$1 = state_1998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1998__$1,(4),ch);
} else {
if((state_val_1999 === (3))){
var inst_1996 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1998__$1,inst_1996);
} else {
if((state_val_1999 === (4))){
var inst_1929 = (state_1998[(7)]);
var inst_1929__$1 = (state_1998[(2)]);
var inst_1930 = (inst_1929__$1 == null);
var state_1998__$1 = (function (){var statearr_2001 = state_1998;
(statearr_2001[(7)] = inst_1929__$1);

return statearr_2001;
})();
if(cljs.core.truth_(inst_1930)){
var statearr_2002_2052 = state_1998__$1;
(statearr_2002_2052[(1)] = (5));

} else {
var statearr_2003_2053 = state_1998__$1;
(statearr_2003_2053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (5))){
var inst_1936 = cljs.core.deref.call(null,mults);
var inst_1937 = cljs.core.vals.call(null,inst_1936);
var inst_1938 = cljs.core.seq.call(null,inst_1937);
var inst_1939 = inst_1938;
var inst_1940 = null;
var inst_1941 = (0);
var inst_1942 = (0);
var state_1998__$1 = (function (){var statearr_2004 = state_1998;
(statearr_2004[(8)] = inst_1939);

(statearr_2004[(11)] = inst_1940);

(statearr_2004[(12)] = inst_1941);

(statearr_2004[(13)] = inst_1942);

return statearr_2004;
})();
var statearr_2005_2054 = state_1998__$1;
(statearr_2005_2054[(2)] = null);

(statearr_2005_2054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (6))){
var inst_1929 = (state_1998[(7)]);
var inst_1977 = (state_1998[(9)]);
var inst_1979 = (state_1998[(10)]);
var inst_1977__$1 = topic_fn.call(null,inst_1929);
var inst_1978 = cljs.core.deref.call(null,mults);
var inst_1979__$1 = cljs.core.get.call(null,inst_1978,inst_1977__$1);
var state_1998__$1 = (function (){var statearr_2006 = state_1998;
(statearr_2006[(9)] = inst_1977__$1);

(statearr_2006[(10)] = inst_1979__$1);

return statearr_2006;
})();
if(cljs.core.truth_(inst_1979__$1)){
var statearr_2007_2055 = state_1998__$1;
(statearr_2007_2055[(1)] = (19));

} else {
var statearr_2008_2056 = state_1998__$1;
(statearr_2008_2056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (7))){
var inst_1994 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2009_2057 = state_1998__$1;
(statearr_2009_2057[(2)] = inst_1994);

(statearr_2009_2057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (8))){
var inst_1942 = (state_1998[(13)]);
var inst_1941 = (state_1998[(12)]);
var inst_1944 = (inst_1942 < inst_1941);
var inst_1945 = inst_1944;
var state_1998__$1 = state_1998;
if(cljs.core.truth_(inst_1945)){
var statearr_2013_2058 = state_1998__$1;
(statearr_2013_2058[(1)] = (10));

} else {
var statearr_2014_2059 = state_1998__$1;
(statearr_2014_2059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (9))){
var inst_1975 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2015_2060 = state_1998__$1;
(statearr_2015_2060[(2)] = inst_1975);

(statearr_2015_2060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (10))){
var inst_1940 = (state_1998[(11)]);
var inst_1942 = (state_1998[(13)]);
var inst_1939 = (state_1998[(8)]);
var inst_1941 = (state_1998[(12)]);
var inst_1947 = cljs.core._nth.call(null,inst_1940,inst_1942);
var inst_1948 = cljs.core.async.muxch_STAR_.call(null,inst_1947);
var inst_1949 = cljs.core.async.close_BANG_.call(null,inst_1948);
var inst_1950 = (inst_1942 + (1));
var tmp2010 = inst_1939;
var tmp2011 = inst_1940;
var tmp2012 = inst_1941;
var inst_1939__$1 = tmp2010;
var inst_1940__$1 = tmp2011;
var inst_1941__$1 = tmp2012;
var inst_1942__$1 = inst_1950;
var state_1998__$1 = (function (){var statearr_2016 = state_1998;
(statearr_2016[(14)] = inst_1949);

(statearr_2016[(8)] = inst_1939__$1);

(statearr_2016[(11)] = inst_1940__$1);

(statearr_2016[(12)] = inst_1941__$1);

(statearr_2016[(13)] = inst_1942__$1);

return statearr_2016;
})();
var statearr_2017_2061 = state_1998__$1;
(statearr_2017_2061[(2)] = null);

(statearr_2017_2061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (11))){
var inst_1939 = (state_1998[(8)]);
var inst_1953 = (state_1998[(15)]);
var inst_1953__$1 = cljs.core.seq.call(null,inst_1939);
var state_1998__$1 = (function (){var statearr_2018 = state_1998;
(statearr_2018[(15)] = inst_1953__$1);

return statearr_2018;
})();
if(inst_1953__$1){
var statearr_2019_2062 = state_1998__$1;
(statearr_2019_2062[(1)] = (13));

} else {
var statearr_2020_2063 = state_1998__$1;
(statearr_2020_2063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (12))){
var inst_1973 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2021_2064 = state_1998__$1;
(statearr_2021_2064[(2)] = inst_1973);

(statearr_2021_2064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (13))){
var inst_1953 = (state_1998[(15)]);
var inst_1955 = cljs.core.chunked_seq_QMARK_.call(null,inst_1953);
var state_1998__$1 = state_1998;
if(inst_1955){
var statearr_2022_2065 = state_1998__$1;
(statearr_2022_2065[(1)] = (16));

} else {
var statearr_2023_2066 = state_1998__$1;
(statearr_2023_2066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (14))){
var state_1998__$1 = state_1998;
var statearr_2024_2067 = state_1998__$1;
(statearr_2024_2067[(2)] = null);

(statearr_2024_2067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (15))){
var inst_1971 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2025_2068 = state_1998__$1;
(statearr_2025_2068[(2)] = inst_1971);

(statearr_2025_2068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (16))){
var inst_1953 = (state_1998[(15)]);
var inst_1957 = cljs.core.chunk_first.call(null,inst_1953);
var inst_1958 = cljs.core.chunk_rest.call(null,inst_1953);
var inst_1959 = cljs.core.count.call(null,inst_1957);
var inst_1939 = inst_1958;
var inst_1940 = inst_1957;
var inst_1941 = inst_1959;
var inst_1942 = (0);
var state_1998__$1 = (function (){var statearr_2026 = state_1998;
(statearr_2026[(8)] = inst_1939);

(statearr_2026[(11)] = inst_1940);

(statearr_2026[(12)] = inst_1941);

(statearr_2026[(13)] = inst_1942);

return statearr_2026;
})();
var statearr_2027_2069 = state_1998__$1;
(statearr_2027_2069[(2)] = null);

(statearr_2027_2069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (17))){
var inst_1953 = (state_1998[(15)]);
var inst_1962 = cljs.core.first.call(null,inst_1953);
var inst_1963 = cljs.core.async.muxch_STAR_.call(null,inst_1962);
var inst_1964 = cljs.core.async.close_BANG_.call(null,inst_1963);
var inst_1965 = cljs.core.next.call(null,inst_1953);
var inst_1939 = inst_1965;
var inst_1940 = null;
var inst_1941 = (0);
var inst_1942 = (0);
var state_1998__$1 = (function (){var statearr_2028 = state_1998;
(statearr_2028[(16)] = inst_1964);

(statearr_2028[(8)] = inst_1939);

(statearr_2028[(11)] = inst_1940);

(statearr_2028[(12)] = inst_1941);

(statearr_2028[(13)] = inst_1942);

return statearr_2028;
})();
var statearr_2029_2070 = state_1998__$1;
(statearr_2029_2070[(2)] = null);

(statearr_2029_2070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (18))){
var inst_1968 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2030_2071 = state_1998__$1;
(statearr_2030_2071[(2)] = inst_1968);

(statearr_2030_2071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (19))){
var inst_1979 = (state_1998[(10)]);
var inst_1929 = (state_1998[(7)]);
var inst_1981 = cljs.core.async.muxch_STAR_.call(null,inst_1979);
var state_1998__$1 = state_1998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1998__$1,(22),inst_1981,inst_1929);
} else {
if((state_val_1999 === (20))){
var state_1998__$1 = state_1998;
var statearr_2031_2072 = state_1998__$1;
(statearr_2031_2072[(2)] = null);

(statearr_2031_2072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (21))){
var inst_1991 = (state_1998[(2)]);
var state_1998__$1 = (function (){var statearr_2032 = state_1998;
(statearr_2032[(17)] = inst_1991);

return statearr_2032;
})();
var statearr_2033_2073 = state_1998__$1;
(statearr_2033_2073[(2)] = null);

(statearr_2033_2073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (22))){
var inst_1983 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
if(cljs.core.truth_(inst_1983)){
var statearr_2034_2074 = state_1998__$1;
(statearr_2034_2074[(1)] = (23));

} else {
var statearr_2035_2075 = state_1998__$1;
(statearr_2035_2075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (23))){
var state_1998__$1 = state_1998;
var statearr_2036_2076 = state_1998__$1;
(statearr_2036_2076[(2)] = null);

(statearr_2036_2076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (24))){
var inst_1977 = (state_1998[(9)]);
var inst_1986 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1977);
var state_1998__$1 = state_1998;
var statearr_2037_2077 = state_1998__$1;
(statearr_2037_2077[(2)] = inst_1986);

(statearr_2037_2077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1999 === (25))){
var inst_1988 = (state_1998[(2)]);
var state_1998__$1 = state_1998;
var statearr_2038_2078 = state_1998__$1;
(statearr_2038_2078[(2)] = inst_1988);

(statearr_2038_2078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
});})(c__8__auto___2050,mults,ensure_mult,p))
;
return ((function (switch__3__auto__,c__8__auto___2050,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2042[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2042[(1)] = (1));

return statearr_2042;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_1998){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2043){if((e2043 instanceof Object)){
var ex__7__auto__ = e2043;
var statearr_2044_2079 = state_1998;
(statearr_2044_2079[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1998);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2080 = state_1998;
state_1998 = G__2080;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_1998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_1998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2050,mults,ensure_mult,p))
})();
var state__10__auto__ = (function (){var statearr_2045 = f__9__auto__.call(null);
(statearr_2045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2050);

return statearr_2045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2050,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.pub;},new cljs.core.Symbol("cljs.core.async","pub","cljs.core.async/pub",(1110118234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"pub","pub",(451387619),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(604),(604),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"topic-fn","topic-fn",(-862449736),null),new cljs.core.Symbol(null,"buf-fn","buf-fn",(-1200281591),null)], null)),"Creates and returns a pub(lication) of the supplied channel,\n  partitioned into topics by the topic-fn. topic-fn will be applied to\n  each value on the channel and the result will determine the 'topic'\n  on which that value will be put. Channels can be subscribed to\n  receive copies of topics using 'sub', and unsubscribed using\n  'unsub'. Each topic will be handled by an internal mult on a\n  dedicated channel. By default these internal channels are\n  unbuffered, but a buf-fn can be supplied which, given a topic,\n  creates a buffer with desired properties.\n\n  Each item is distributed to all subs in parallel and synchronously,\n  i.e. each sub must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow subs from holding up the pub.\n\n  Items received when there are no matching subs get dropped.\n\n  Note that if buf-fns are used then each topic is handled\n  asynchronously, i.e. if a channel is subscribed to more than one\n  topic it should not expect them to be interleaved identically with\n  the source.",(cljs.core.truth_(cljs.core.async.pub)?cljs.core.async.pub.cljs$lang$test:null)]));
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
(function (){
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args2081 = [];
var len__23656__auto___2084 = arguments.length;
var i__23657__auto___2085 = (0);
while(true){
if((i__23657__auto___2085 < len__23656__auto___2084)){
args2081.push((arguments[i__23657__auto___2085]));

var G__2086 = (i__23657__auto___2085 + (1));
i__23657__auto___2085 = G__2086;
continue;
} else {
}
break;
}

var G__2083 = args2081.length;
switch (G__2083) {
case (3):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2081.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.sub;},new cljs.core.Symbol("cljs.core.async","sub","cljs.core.async/sub",(1060152471),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"sub","sub",(-453228498),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(659),(659),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Subscribes a channel to a topic of a pub.\n\n  By default the channel will be closed when the source closes,\n  but can be determined by the close? parameter.",(cljs.core.truth_(cljs.core.async.sub)?cljs.core.async.sub.cljs$lang$test:null)])));})()
;

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.async.sub;},new cljs.core.Symbol("cljs.core.async","sub","cljs.core.async/sub",(1060152471),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"sub","sub",(-453228498),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(659),(659),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"close?","close?",(-1054250076),null)], null)),"Subscribes a channel to a topic of a pub.\n\n  By default the channel will be closed when the source closes,\n  but can be determined by the close? parameter.",(cljs.core.truth_(cljs.core.async.sub)?cljs.core.async.sub.cljs$lang$test:null)]));
/**
 * Unsubscribes a channel from a topic of a pub
 */
(function (){
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.unsub;},new cljs.core.Symbol("cljs.core.async","unsub","cljs.core.async/unsub",(-639298382),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub","unsub",(279611419),null),"cljs/core/async.cljs",(12),(1),(667),(667),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Unsubscribes a channel from a topic of a pub",(cljs.core.truth_(cljs.core.async.unsub)?cljs.core.async.unsub.cljs$lang$test:null)])));})()
;
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
(function (){
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args2088 = [];
var len__23656__auto___2091 = arguments.length;
var i__23657__auto___2092 = (0);
while(true){
if((i__23657__auto___2092 < len__23656__auto___2091)){
args2088.push((arguments[i__23657__auto___2092]));

var G__2093 = (i__23657__auto___2092 + (1));
i__23657__auto___2092 = G__2093;
continue;
} else {
}
break;
}

var G__2090 = args2088.length;
switch (G__2090) {
case (1):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2088.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unsub_all;},new cljs.core.Symbol("cljs.core.async","unsub-all","cljs.core.async/unsub-all",(425524158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub-all","unsub-all",(-804235497),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(672),(672),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),"Unsubscribes all channels from a pub, or a topic of a pub",(cljs.core.truth_(cljs.core.async.unsub_all)?cljs.core.async.unsub_all.cljs$lang$test:null)])));})()
;

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.unsub_all;},new cljs.core.Symbol("cljs.core.async","unsub-all","cljs.core.async/unsub-all",(425524158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unsub-all","unsub-all",(-804235497),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(672),(672),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"topic","topic",(-319949164),null)], null)),"Unsubscribes all channels from a pub, or a topic of a pub",(cljs.core.truth_(cljs.core.async.unsub_all)?cljs.core.async.unsub_all.cljs$lang$test:null)]));
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
(function (){
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args2095 = [];
var len__23656__auto___2166 = arguments.length;
var i__23657__auto___2167 = (0);
while(true){
if((i__23657__auto___2167 < len__23656__auto___2166)){
args2095.push((arguments[i__23657__auto___2167]));

var G__2168 = (i__23657__auto___2167 + (1));
i__23657__auto___2167 = G__2168;
continue;
} else {
}
break;
}

var G__2097 = args2095.length;
switch (G__2097) {
case (2):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2095.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.map;},new cljs.core.Symbol("cljs.core.async","map","cljs.core.async/map",(1255556029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(680),(680),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Takes a function and a collection of source channels, and returns a\n  channel which contains the values produced by applying f to the set\n  of first items taken from each source channel, followed by applying\n  f to the set of second items from each channel, until any one of the\n  channels is closed, at which point the output channel will be\n  closed. The returned channel will be unbuffered by default, or a\n  buf-or-n can be supplied",(cljs.core.truth_(cljs.core.async.map)?cljs.core.async.map.cljs$lang$test:null)])));})()
;

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8__auto___2170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_2136){
var state_val_2137 = (state_2136[(1)]);
if((state_val_2137 === (1))){
var state_2136__$1 = state_2136;
var statearr_2138_2171 = state_2136__$1;
(statearr_2138_2171[(2)] = null);

(statearr_2138_2171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (2))){
var inst_2099 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_2100 = (0);
var state_2136__$1 = (function (){var statearr_2139 = state_2136;
(statearr_2139[(7)] = inst_2099);

(statearr_2139[(8)] = inst_2100);

return statearr_2139;
})();
var statearr_2140_2172 = state_2136__$1;
(statearr_2140_2172[(2)] = null);

(statearr_2140_2172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (3))){
var inst_2134 = (state_2136[(2)]);
var state_2136__$1 = state_2136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2136__$1,inst_2134);
} else {
if((state_val_2137 === (4))){
var inst_2100 = (state_2136[(8)]);
var inst_2102 = (inst_2100 < cnt);
var state_2136__$1 = state_2136;
if(cljs.core.truth_(inst_2102)){
var statearr_2141_2173 = state_2136__$1;
(statearr_2141_2173[(1)] = (6));

} else {
var statearr_2142_2174 = state_2136__$1;
(statearr_2142_2174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (5))){
var inst_2120 = (state_2136[(2)]);
var state_2136__$1 = (function (){var statearr_2143 = state_2136;
(statearr_2143[(9)] = inst_2120);

return statearr_2143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2136__$1,(12),dchan);
} else {
if((state_val_2137 === (6))){
var state_2136__$1 = state_2136;
var statearr_2144_2175 = state_2136__$1;
(statearr_2144_2175[(2)] = null);

(statearr_2144_2175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (7))){
var state_2136__$1 = state_2136;
var statearr_2145_2176 = state_2136__$1;
(statearr_2145_2176[(2)] = null);

(statearr_2145_2176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (8))){
var inst_2118 = (state_2136[(2)]);
var state_2136__$1 = state_2136;
var statearr_2146_2177 = state_2136__$1;
(statearr_2146_2177[(2)] = inst_2118);

(statearr_2146_2177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (9))){
var inst_2100 = (state_2136[(8)]);
var inst_2113 = (state_2136[(2)]);
var inst_2114 = (inst_2100 + (1));
var inst_2100__$1 = inst_2114;
var state_2136__$1 = (function (){var statearr_2147 = state_2136;
(statearr_2147[(10)] = inst_2113);

(statearr_2147[(8)] = inst_2100__$1);

return statearr_2147;
})();
var statearr_2148_2178 = state_2136__$1;
(statearr_2148_2178[(2)] = null);

(statearr_2148_2178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (10))){
var inst_2104 = (state_2136[(2)]);
var inst_2105 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_2136__$1 = (function (){var statearr_2149 = state_2136;
(statearr_2149[(11)] = inst_2104);

return statearr_2149;
})();
var statearr_2150_2179 = state_2136__$1;
(statearr_2150_2179[(2)] = inst_2105);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2136__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (11))){
var inst_2100 = (state_2136[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_2136,(10),Object,null,(9));
var inst_2109 = chs__$1.call(null,inst_2100);
var inst_2110 = done.call(null,inst_2100);
var inst_2111 = cljs.core.async.take_BANG_.call(null,inst_2109,inst_2110);
var state_2136__$1 = state_2136;
var statearr_2151_2180 = state_2136__$1;
(statearr_2151_2180[(2)] = inst_2111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2136__$1);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (12))){
var inst_2122 = (state_2136[(12)]);
var inst_2122__$1 = (state_2136[(2)]);
var inst_2123 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_2122__$1);
var state_2136__$1 = (function (){var statearr_2152 = state_2136;
(statearr_2152[(12)] = inst_2122__$1);

return statearr_2152;
})();
if(cljs.core.truth_(inst_2123)){
var statearr_2153_2181 = state_2136__$1;
(statearr_2153_2181[(1)] = (13));

} else {
var statearr_2154_2182 = state_2136__$1;
(statearr_2154_2182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (13))){
var inst_2125 = cljs.core.async.close_BANG_.call(null,out);
var state_2136__$1 = state_2136;
var statearr_2155_2183 = state_2136__$1;
(statearr_2155_2183[(2)] = inst_2125);

(statearr_2155_2183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (14))){
var inst_2122 = (state_2136[(12)]);
var inst_2127 = cljs.core.apply.call(null,f,inst_2122);
var state_2136__$1 = state_2136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2136__$1,(16),out,inst_2127);
} else {
if((state_val_2137 === (15))){
var inst_2132 = (state_2136[(2)]);
var state_2136__$1 = state_2136;
var statearr_2156_2184 = state_2136__$1;
(statearr_2156_2184[(2)] = inst_2132);

(statearr_2156_2184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2137 === (16))){
var inst_2129 = (state_2136[(2)]);
var state_2136__$1 = (function (){var statearr_2157 = state_2136;
(statearr_2157[(13)] = inst_2129);

return statearr_2157;
})();
var statearr_2158_2185 = state_2136__$1;
(statearr_2158_2185[(2)] = null);

(statearr_2158_2185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
}
});})(c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3__auto__,c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2162[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2162[(1)] = (1));

return statearr_2162;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2136){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2163){if((e2163 instanceof Object)){
var ex__7__auto__ = e2163;
var statearr_2164_2186 = state_2136;
(statearr_2164_2186[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2136);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2187 = state_2136;
state_2136 = G__2187;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10__auto__ = (function (){var statearr_2165 = f__9__auto__.call(null);
(statearr_2165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2170);

return statearr_2165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2170,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.map;},new cljs.core.Symbol("cljs.core.async","map","cljs.core.async/map",(1255556029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"cljs/core/async.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(680),(680),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Takes a function and a collection of source channels, and returns a\n  channel which contains the values produced by applying f to the set\n  of first items taken from each source channel, followed by applying\n  f to the set of second items from each channel, until any one of the\n  channels is closed, at which point the output channel will be\n  closed. The returned channel will be unbuffered by default, or a\n  buf-or-n can be supplied",(cljs.core.truth_(cljs.core.async.map)?cljs.core.async.map.cljs$lang$test:null)]));
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
(function (){
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args2188 = [];
var len__23656__auto___2246 = arguments.length;
var i__23657__auto___2247 = (0);
while(true){
if((i__23657__auto___2247 < len__23656__auto___2246)){
args2188.push((arguments[i__23657__auto___2247]));

var G__2248 = (i__23657__auto___2247 + (1));
i__23657__auto___2247 = G__2248;
continue;
} else {
}
break;
}

var G__2190 = args2188.length;
switch (G__2190) {
case (1):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2188.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.merge;},new cljs.core.Symbol("cljs.core.async","merge","cljs.core.async/merge",(-1358356433),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(716),(716),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Takes a collection of source channels and returns a channel which\n  contains all values taken from them. The returned channel will be\n  unbuffered by default, or a buf-or-n can be supplied. The channel\n  will close after all the source channels have closed.",(cljs.core.truth_(cljs.core.async.merge)?cljs.core.async.merge.cljs$lang$test:null)])));})()
;

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2250,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2250,out){
return (function (state_2222){
var state_val_2223 = (state_2222[(1)]);
if((state_val_2223 === (1))){
var inst_2191 = cljs.core.vec.call(null,chs);
var inst_2192 = inst_2191;
var state_2222__$1 = (function (){var statearr_2224 = state_2222;
(statearr_2224[(7)] = inst_2192);

return statearr_2224;
})();
var statearr_2225_2251 = state_2222__$1;
(statearr_2225_2251[(2)] = null);

(statearr_2225_2251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (2))){
var inst_2192 = (state_2222[(7)]);
var inst_2194 = cljs.core.count.call(null,inst_2192);
var inst_2195 = (inst_2194 > (0));
var state_2222__$1 = state_2222;
if(cljs.core.truth_(inst_2195)){
var statearr_2226_2252 = state_2222__$1;
(statearr_2226_2252[(1)] = (4));

} else {
var statearr_2227_2253 = state_2222__$1;
(statearr_2227_2253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (3))){
var inst_2220 = (state_2222[(2)]);
var state_2222__$1 = state_2222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2222__$1,inst_2220);
} else {
if((state_val_2223 === (4))){
var inst_2192 = (state_2222[(7)]);
var state_2222__$1 = state_2222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_2222__$1,(7),inst_2192);
} else {
if((state_val_2223 === (5))){
var inst_2216 = cljs.core.async.close_BANG_.call(null,out);
var state_2222__$1 = state_2222;
var statearr_2228_2254 = state_2222__$1;
(statearr_2228_2254[(2)] = inst_2216);

(statearr_2228_2254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (6))){
var inst_2218 = (state_2222[(2)]);
var state_2222__$1 = state_2222;
var statearr_2229_2255 = state_2222__$1;
(statearr_2229_2255[(2)] = inst_2218);

(statearr_2229_2255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (7))){
var inst_2201 = (state_2222[(8)]);
var inst_2202 = (state_2222[(9)]);
var inst_2201__$1 = (state_2222[(2)]);
var inst_2202__$1 = cljs.core.nth.call(null,inst_2201__$1,(0),null);
var inst_2203 = cljs.core.nth.call(null,inst_2201__$1,(1),null);
var inst_2204 = (inst_2202__$1 == null);
var state_2222__$1 = (function (){var statearr_2230 = state_2222;
(statearr_2230[(8)] = inst_2201__$1);

(statearr_2230[(9)] = inst_2202__$1);

(statearr_2230[(10)] = inst_2203);

return statearr_2230;
})();
if(cljs.core.truth_(inst_2204)){
var statearr_2231_2256 = state_2222__$1;
(statearr_2231_2256[(1)] = (8));

} else {
var statearr_2232_2257 = state_2222__$1;
(statearr_2232_2257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (8))){
var inst_2192 = (state_2222[(7)]);
var inst_2201 = (state_2222[(8)]);
var inst_2202 = (state_2222[(9)]);
var inst_2203 = (state_2222[(10)]);
var inst_2206 = (function (){var cs = inst_2192;
var vec__2197 = inst_2201;
var v = inst_2202;
var c = inst_2203;
return ((function (cs,vec__2197,v,c,inst_2192,inst_2201,inst_2202,inst_2203,state_val_2223,c__8__auto___2250,out){
return (function (p1__4_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4_SHARP_);
});
;})(cs,vec__2197,v,c,inst_2192,inst_2201,inst_2202,inst_2203,state_val_2223,c__8__auto___2250,out))
})();
var inst_2207 = cljs.core.filterv.call(null,inst_2206,inst_2192);
var inst_2192__$1 = inst_2207;
var state_2222__$1 = (function (){var statearr_2233 = state_2222;
(statearr_2233[(7)] = inst_2192__$1);

return statearr_2233;
})();
var statearr_2234_2258 = state_2222__$1;
(statearr_2234_2258[(2)] = null);

(statearr_2234_2258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (9))){
var inst_2202 = (state_2222[(9)]);
var state_2222__$1 = state_2222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2222__$1,(11),out,inst_2202);
} else {
if((state_val_2223 === (10))){
var inst_2214 = (state_2222[(2)]);
var state_2222__$1 = state_2222;
var statearr_2236_2259 = state_2222__$1;
(statearr_2236_2259[(2)] = inst_2214);

(statearr_2236_2259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2223 === (11))){
var inst_2192 = (state_2222[(7)]);
var inst_2211 = (state_2222[(2)]);
var tmp2235 = inst_2192;
var inst_2192__$1 = tmp2235;
var state_2222__$1 = (function (){var statearr_2237 = state_2222;
(statearr_2237[(11)] = inst_2211);

(statearr_2237[(7)] = inst_2192__$1);

return statearr_2237;
})();
var statearr_2238_2260 = state_2222__$1;
(statearr_2238_2260[(2)] = null);

(statearr_2238_2260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
});})(c__8__auto___2250,out))
;
return ((function (switch__3__auto__,c__8__auto___2250,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2242[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2242[(1)] = (1));

return statearr_2242;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2222){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2243){if((e2243 instanceof Object)){
var ex__7__auto__ = e2243;
var statearr_2244_2261 = state_2222;
(statearr_2244_2261[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2222);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2262 = state_2222;
state_2222 = G__2262;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2250,out))
})();
var state__10__auto__ = (function (){var statearr_2245 = f__9__auto__.call(null);
(statearr_2245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2250);

return statearr_2245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2250,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.merge;},new cljs.core.Symbol("cljs.core.async","merge","cljs.core.async/merge",(-1358356433),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/core/async.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(716),(716),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chs","chs",(2017417647),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Takes a collection of source channels and returns a channel which\n  contains all values taken from them. The returned channel will be\n  unbuffered by default, or a buf-or-n can be supplied. The channel\n  will close after all the source channels have closed.",(cljs.core.truth_(cljs.core.async.merge)?cljs.core.async.merge.cljs$lang$test:null)]));
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
(function (){
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.into;},new cljs.core.Symbol("cljs.core.async","into","cljs.core.async/into",(-1623308397),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"into","into",(1489695498),null),"cljs/core/async.cljs",(11),(1),(734),(734),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Returns a channel containing the single (collection) result of the\n  items taken from the channel conjoined to the supplied\n  collection. ch must close before into produces a result.",(cljs.core.truth_(cljs.core.async.into)?cljs.core.async.into.cljs$lang$test:null)])));})()
;
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
(function (){
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args2263 = [];
var len__23656__auto___2312 = arguments.length;
var i__23657__auto___2313 = (0);
while(true){
if((i__23657__auto___2313 < len__23656__auto___2312)){
args2263.push((arguments[i__23657__auto___2313]));

var G__2314 = (i__23657__auto___2313 + (1));
i__23657__auto___2313 = G__2314;
continue;
} else {
}
break;
}

var G__2265 = args2263.length;
switch (G__2265) {
case (2):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2263.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.take;},new cljs.core.Symbol("cljs.core.async","take","cljs.core.async/take",(-81726950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"take","take",(871646627),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(741),(741),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Returns a channel that will return, at most, n items from ch. After n items\n   have been returned, or ch has been closed, the return chanel will close.\n\n  The output channel is unbuffered by default, unless buf-or-n is given.",(cljs.core.truth_(cljs.core.async.take)?cljs.core.async.take.cljs$lang$test:null)])));})()
;

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2316,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2316,out){
return (function (state_2289){
var state_val_2290 = (state_2289[(1)]);
if((state_val_2290 === (1))){
var inst_2266 = (0);
var state_2289__$1 = (function (){var statearr_2291 = state_2289;
(statearr_2291[(7)] = inst_2266);

return statearr_2291;
})();
var statearr_2292_2317 = state_2289__$1;
(statearr_2292_2317[(2)] = null);

(statearr_2292_2317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (2))){
var inst_2266 = (state_2289[(7)]);
var inst_2268 = (inst_2266 < n);
var state_2289__$1 = state_2289;
if(cljs.core.truth_(inst_2268)){
var statearr_2293_2318 = state_2289__$1;
(statearr_2293_2318[(1)] = (4));

} else {
var statearr_2294_2319 = state_2289__$1;
(statearr_2294_2319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (3))){
var inst_2286 = (state_2289[(2)]);
var inst_2287 = cljs.core.async.close_BANG_.call(null,out);
var state_2289__$1 = (function (){var statearr_2295 = state_2289;
(statearr_2295[(8)] = inst_2286);

return statearr_2295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2289__$1,inst_2287);
} else {
if((state_val_2290 === (4))){
var state_2289__$1 = state_2289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2289__$1,(7),ch);
} else {
if((state_val_2290 === (5))){
var state_2289__$1 = state_2289;
var statearr_2296_2320 = state_2289__$1;
(statearr_2296_2320[(2)] = null);

(statearr_2296_2320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (6))){
var inst_2284 = (state_2289[(2)]);
var state_2289__$1 = state_2289;
var statearr_2297_2321 = state_2289__$1;
(statearr_2297_2321[(2)] = inst_2284);

(statearr_2297_2321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (7))){
var inst_2271 = (state_2289[(9)]);
var inst_2271__$1 = (state_2289[(2)]);
var inst_2272 = (inst_2271__$1 == null);
var inst_2273 = cljs.core.not.call(null,inst_2272);
var state_2289__$1 = (function (){var statearr_2298 = state_2289;
(statearr_2298[(9)] = inst_2271__$1);

return statearr_2298;
})();
if(inst_2273){
var statearr_2299_2322 = state_2289__$1;
(statearr_2299_2322[(1)] = (8));

} else {
var statearr_2300_2323 = state_2289__$1;
(statearr_2300_2323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (8))){
var inst_2271 = (state_2289[(9)]);
var state_2289__$1 = state_2289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2289__$1,(11),out,inst_2271);
} else {
if((state_val_2290 === (9))){
var state_2289__$1 = state_2289;
var statearr_2301_2324 = state_2289__$1;
(statearr_2301_2324[(2)] = null);

(statearr_2301_2324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (10))){
var inst_2281 = (state_2289[(2)]);
var state_2289__$1 = state_2289;
var statearr_2302_2325 = state_2289__$1;
(statearr_2302_2325[(2)] = inst_2281);

(statearr_2302_2325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2290 === (11))){
var inst_2266 = (state_2289[(7)]);
var inst_2276 = (state_2289[(2)]);
var inst_2277 = (inst_2266 + (1));
var inst_2266__$1 = inst_2277;
var state_2289__$1 = (function (){var statearr_2303 = state_2289;
(statearr_2303[(10)] = inst_2276);

(statearr_2303[(7)] = inst_2266__$1);

return statearr_2303;
})();
var statearr_2304_2326 = state_2289__$1;
(statearr_2304_2326[(2)] = null);

(statearr_2304_2326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
});})(c__8__auto___2316,out))
;
return ((function (switch__3__auto__,c__8__auto___2316,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2308[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2308[(1)] = (1));

return statearr_2308;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2289){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2309){if((e2309 instanceof Object)){
var ex__7__auto__ = e2309;
var statearr_2310_2327 = state_2289;
(statearr_2310_2327[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2289);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2328 = state_2289;
state_2289 = G__2328;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2316,out))
})();
var state__10__auto__ = (function (){var statearr_2311 = f__9__auto__.call(null);
(statearr_2311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2316);

return statearr_2311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2316,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.take;},new cljs.core.Symbol("cljs.core.async","take","cljs.core.async/take",(-81726950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"take","take",(871646627),null),"cljs/core/async.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(741),(741),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Returns a channel that will return, at most, n items from ch. After n items\n   have been returned, or ch has been closed, the return chanel will close.\n\n  The output channel is unbuffered by default, unless buf-or-n is given.",(cljs.core.truth_(cljs.core.async.take)?cljs.core.async.take.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async2335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2335 = (function (f,ch,meta2336){
this.f = f;
this.ch = ch;
this.meta2336 = meta2336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2337,meta2336__$1){
var self__ = this;
var _2337__$1 = this;
return (new cljs.core.async.t_cljs$core$async2335(self__.f,self__.ch,meta2336__$1));
});

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2337){
var self__ = this;
var _2337__$1 = this;
return self__.meta2336;
});

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async2338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async2338 = (function (f,ch,meta2336,_,fn1,meta2339){
this.f = f;
this.ch = ch;
this.meta2336 = meta2336;
this._ = _;
this.fn1 = fn1;
this.meta2339 = meta2339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_2340,meta2339__$1){
var self__ = this;
var _2340__$1 = this;
return (new cljs.core.async.t_cljs$core$async2338(self__.f,self__.ch,self__.meta2336,self__._,self__.fn1,meta2339__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_2340){
var self__ = this;
var _2340__$1 = this;
return self__.meta2339;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5_SHARP_){
return f1.call(null,(((p1__5_SHARP_ == null))?null:self__.f.call(null,p1__5_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2336","meta2336",(-1605889702),null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async2335","cljs.core.async/t_cljs$core$async2335",(-1854192200),null)], null)),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"meta2339","meta2339",(1526713790),null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async2338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2338";

cljs.core.async.t_cljs$core$async2338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async2338");
});})(___$1))
;

(function (){
cljs.core.async.__GT_t_cljs$core$async2338 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2338(f__$1,ch__$1,meta2336__$1,___$2,fn1__$1,meta2339){
return (new cljs.core.async.t_cljs$core$async2338(f__$1,ch__$1,meta2336__$1,___$2,fn1__$1,meta2339));
});})(___$1))
; return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async2338;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async2338","cljs.core.async/->t_cljs$core$async2338",(-1878985589),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async2338","->t_cljs$core$async2338",(-925626398),null),"cljs/core/async.cljs",true,(10),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(773),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2336","meta2336",(-1605889702),null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async2335","cljs.core.async/t_cljs$core$async2335",(-1854192200),null)], null)),new cljs.core.Symbol(null,"fn1","fn1",(895834444),null),new cljs.core.Symbol(null,"meta2339","meta2339",(1526713790),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async2338)?cljs.core.async.__GT_t_cljs$core$async2338.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async2338(self__.f,self__.ch,self__.meta2336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20770__auto__ = ret;
if(cljs.core.truth_(and__20770__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20770__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async2335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2336","meta2336",(-1605889702),null)], null);
});

cljs.core.async.t_cljs$core$async2335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2335";

cljs.core.async.t_cljs$core$async2335.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async2335");
});

(function (){
cljs.core.async.__GT_t_cljs$core$async2335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async2335(f__$1,ch__$1,meta2336){
return (new cljs.core.async.t_cljs$core$async2335(f__$1,ch__$1,meta2336));
}); return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async2335;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async2335","cljs.core.async/->t_cljs$core$async2335",(1876064579),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async2335","->t_cljs$core$async2335",(1454304506),null),"cljs/core/async.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(764),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2336","meta2336",(-1605889702),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async2335)?cljs.core.async.__GT_t_cljs$core$async2335.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async2335(f,ch,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.map_LT_;},new cljs.core.Symbol("cljs.core.async","map<","cljs.core.async/map<",(-1889364992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"map<","map<",(-1235808357),null),"cljs/core/async.cljs",(11),(1),(761),(761),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.map_LT_)?cljs.core.async.map_LT_.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async2344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2344 = (function (f,ch,meta2345){
this.f = f;
this.ch = ch;
this.meta2345 = meta2345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2346,meta2345__$1){
var self__ = this;
var _2346__$1 = this;
return (new cljs.core.async.t_cljs$core$async2344(self__.f,self__.ch,meta2345__$1));
});

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2346){
var self__ = this;
var _2346__$1 = this;
return self__.meta2345;
});

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async2344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2345","meta2345",(-1206579365),null)], null);
});

cljs.core.async.t_cljs$core$async2344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2344";

cljs.core.async.t_cljs$core$async2344.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async2344");
});

(function (){
cljs.core.async.__GT_t_cljs$core$async2344 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async2344(f__$1,ch__$1,meta2345){
return (new cljs.core.async.t_cljs$core$async2344(f__$1,ch__$1,meta2345));
}); return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async2344;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async2344","cljs.core.async/->t_cljs$core$async2344",(-700537167),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async2344","->t_cljs$core$async2344",(-1653990616),null),"cljs/core/async.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(791),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2345","meta2345",(-1206579365),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async2344)?cljs.core.async.__GT_t_cljs$core$async2344.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async2344(f,ch,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.map_GT_;},new cljs.core.Symbol("cljs.core.async","map>","cljs.core.async/map>",(457175064),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"map>","map>",(1676369295),null),"cljs/core/async.cljs",(11),(1),(788),(788),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.map_GT_)?cljs.core.async.map_GT_.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async2350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.WritePort}
*/
cljs.core.async.t_cljs$core$async2350 = (function (p,ch,meta2351){
this.p = p;
this.ch = ch;
this.meta2351 = meta2351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2352,meta2351__$1){
var self__ = this;
var _2352__$1 = this;
return (new cljs.core.async.t_cljs$core$async2350(self__.p,self__.ch,meta2351__$1));
});

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2352){
var self__ = this;
var _2352__$1 = this;
return self__.meta2351;
});

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async2350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2351","meta2351",(185951413),null)], null);
});

cljs.core.async.t_cljs$core$async2350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2350";

cljs.core.async.t_cljs$core$async2350.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async/t_cljs$core$async2350");
});

(function (){
cljs.core.async.__GT_t_cljs$core$async2350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async2350(p__$1,ch__$1,meta2351){
return (new cljs.core.async.t_cljs$core$async2350(p__$1,ch__$1,meta2351));
}); return (
new cljs.core.Var(function(){return cljs.core.async.__GT_t_cljs$core$async2350;},new cljs.core.Symbol("cljs.core.async","->t_cljs$core$async2350","cljs.core.async/->t_cljs$core$async2350",(-1746706375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"->t_cljs$core$async2350","->t_cljs$core$async2350",(-589837138),null),"cljs/core/async.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(805),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"meta2351","meta2351",(185951413),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.__GT_t_cljs$core$async2350)?cljs.core.async.__GT_t_cljs$core$async2350.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.t_cljs$core$async2350(p,ch,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.filter_GT_;},new cljs.core.Symbol("cljs.core.async","filter>","cljs.core.async/filter>",(874314272),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"filter>","filter>",(-37644455),null),"cljs/core/async.cljs",(14),(1),(802),(802),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.filter_GT_)?cljs.core.async.filter_GT_.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
}); return (
new cljs.core.Var(function(){return cljs.core.async.remove_GT_;},new cljs.core.Symbol("cljs.core.async","remove>","cljs.core.async/remove>",(1576225227),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"remove>","remove>",(-2066812256),null),"cljs/core/async.cljs",(14),(1),(819),(819),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.remove_GT_)?cljs.core.async.remove_GT_.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args2353 = [];
var len__23656__auto___2397 = arguments.length;
var i__23657__auto___2398 = (0);
while(true){
if((i__23657__auto___2398 < len__23656__auto___2397)){
args2353.push((arguments[i__23657__auto___2398]));

var G__2399 = (i__23657__auto___2398 + (1));
i__23657__auto___2398 = G__2399;
continue;
} else {
}
break;
}

var G__2355 = args2353.length;
switch (G__2355) {
case (2):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2353.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.filter_LT_;},new cljs.core.Symbol("cljs.core.async","filter<","cljs.core.async/filter<",(1242532108),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"filter<","filter<",(-2127027053),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(824),(824),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.filter_LT_)?cljs.core.async.filter_LT_.cljs$lang$test:null)])));})()
;

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2401,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2401,out){
return (function (state_2376){
var state_val_2377 = (state_2376[(1)]);
if((state_val_2377 === (1))){
var state_2376__$1 = state_2376;
var statearr_2378_2402 = state_2376__$1;
(statearr_2378_2402[(2)] = null);

(statearr_2378_2402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (2))){
var state_2376__$1 = state_2376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2376__$1,(4),ch);
} else {
if((state_val_2377 === (3))){
var inst_2374 = (state_2376[(2)]);
var state_2376__$1 = state_2376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2376__$1,inst_2374);
} else {
if((state_val_2377 === (4))){
var inst_2358 = (state_2376[(7)]);
var inst_2358__$1 = (state_2376[(2)]);
var inst_2359 = (inst_2358__$1 == null);
var state_2376__$1 = (function (){var statearr_2379 = state_2376;
(statearr_2379[(7)] = inst_2358__$1);

return statearr_2379;
})();
if(cljs.core.truth_(inst_2359)){
var statearr_2380_2403 = state_2376__$1;
(statearr_2380_2403[(1)] = (5));

} else {
var statearr_2381_2404 = state_2376__$1;
(statearr_2381_2404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (5))){
var inst_2361 = cljs.core.async.close_BANG_.call(null,out);
var state_2376__$1 = state_2376;
var statearr_2382_2405 = state_2376__$1;
(statearr_2382_2405[(2)] = inst_2361);

(statearr_2382_2405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (6))){
var inst_2358 = (state_2376[(7)]);
var inst_2363 = p.call(null,inst_2358);
var state_2376__$1 = state_2376;
if(cljs.core.truth_(inst_2363)){
var statearr_2383_2406 = state_2376__$1;
(statearr_2383_2406[(1)] = (8));

} else {
var statearr_2384_2407 = state_2376__$1;
(statearr_2384_2407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (7))){
var inst_2372 = (state_2376[(2)]);
var state_2376__$1 = state_2376;
var statearr_2385_2408 = state_2376__$1;
(statearr_2385_2408[(2)] = inst_2372);

(statearr_2385_2408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (8))){
var inst_2358 = (state_2376[(7)]);
var state_2376__$1 = state_2376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2376__$1,(11),out,inst_2358);
} else {
if((state_val_2377 === (9))){
var state_2376__$1 = state_2376;
var statearr_2386_2409 = state_2376__$1;
(statearr_2386_2409[(2)] = null);

(statearr_2386_2409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (10))){
var inst_2369 = (state_2376[(2)]);
var state_2376__$1 = (function (){var statearr_2387 = state_2376;
(statearr_2387[(8)] = inst_2369);

return statearr_2387;
})();
var statearr_2388_2410 = state_2376__$1;
(statearr_2388_2410[(2)] = null);

(statearr_2388_2410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2377 === (11))){
var inst_2366 = (state_2376[(2)]);
var state_2376__$1 = state_2376;
var statearr_2389_2411 = state_2376__$1;
(statearr_2389_2411[(2)] = inst_2366);

(statearr_2389_2411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
});})(c__8__auto___2401,out))
;
return ((function (switch__3__auto__,c__8__auto___2401,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2393 = [null,null,null,null,null,null,null,null,null];
(statearr_2393[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2393[(1)] = (1));

return statearr_2393;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2376){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2394){if((e2394 instanceof Object)){
var ex__7__auto__ = e2394;
var statearr_2395_2412 = state_2376;
(statearr_2395_2412[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2376);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2413 = state_2376;
state_2376 = G__2413;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2401,out))
})();
var state__10__auto__ = (function (){var statearr_2396 = f__9__auto__.call(null);
(statearr_2396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2401);

return statearr_2396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2401,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.filter_LT_;},new cljs.core.Symbol("cljs.core.async","filter<","cljs.core.async/filter<",(1242532108),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"filter<","filter<",(-2127027053),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(824),(824),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.filter_LT_)?cljs.core.async.filter_LT_.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args2414 = [];
var len__23656__auto___2417 = arguments.length;
var i__23657__auto___2418 = (0);
while(true){
if((i__23657__auto___2418 < len__23656__auto___2417)){
args2414.push((arguments[i__23657__auto___2418]));

var G__2419 = (i__23657__auto___2418 + (1));
i__23657__auto___2418 = G__2419;
continue;
} else {
}
break;
}

var G__2416 = args2414.length;
switch (G__2416) {
case (2):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2414.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.remove_LT_;},new cljs.core.Symbol("cljs.core.async","remove<","cljs.core.async/remove<",(713025466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"remove<","remove<",(1639140115),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(838),(838),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.remove_LT_)?cljs.core.async.remove_LT_.cljs$lang$test:null)])));})()
;

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.remove_LT_;},new cljs.core.Symbol("cljs.core.async","remove<","cljs.core.async/remove<",(713025466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"remove<","remove<",(1639140115),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(838),(838),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.remove_LT_)?cljs.core.async.remove_LT_.cljs$lang$test:null)]));
(function (){
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_2586){
var state_val_2587 = (state_2586[(1)]);
if((state_val_2587 === (1))){
var state_2586__$1 = state_2586;
var statearr_2588_2629 = state_2586__$1;
(statearr_2588_2629[(2)] = null);

(statearr_2588_2629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (2))){
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2586__$1,(4),in$);
} else {
if((state_val_2587 === (3))){
var inst_2584 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2586__$1,inst_2584);
} else {
if((state_val_2587 === (4))){
var inst_2527 = (state_2586[(7)]);
var inst_2527__$1 = (state_2586[(2)]);
var inst_2528 = (inst_2527__$1 == null);
var state_2586__$1 = (function (){var statearr_2589 = state_2586;
(statearr_2589[(7)] = inst_2527__$1);

return statearr_2589;
})();
if(cljs.core.truth_(inst_2528)){
var statearr_2590_2630 = state_2586__$1;
(statearr_2590_2630[(1)] = (5));

} else {
var statearr_2591_2631 = state_2586__$1;
(statearr_2591_2631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (5))){
var inst_2530 = cljs.core.async.close_BANG_.call(null,out);
var state_2586__$1 = state_2586;
var statearr_2592_2632 = state_2586__$1;
(statearr_2592_2632[(2)] = inst_2530);

(statearr_2592_2632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (6))){
var inst_2527 = (state_2586[(7)]);
var inst_2536 = f.call(null,inst_2527);
var inst_2537 = cljs.core.seq.call(null,inst_2536);
var inst_2538 = inst_2537;
var inst_2539 = null;
var inst_2540 = (0);
var inst_2541 = (0);
var state_2586__$1 = (function (){var statearr_2593 = state_2586;
(statearr_2593[(8)] = inst_2538);

(statearr_2593[(11)] = inst_2539);

(statearr_2593[(10)] = inst_2540);

(statearr_2593[(9)] = inst_2541);

return statearr_2593;
})();
var statearr_2594_2633 = state_2586__$1;
(statearr_2594_2633[(2)] = null);

(statearr_2594_2633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (7))){
var inst_2582 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2595_2634 = state_2586__$1;
(statearr_2595_2634[(2)] = inst_2582);

(statearr_2595_2634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (8))){
var inst_2541 = (state_2586[(9)]);
var inst_2540 = (state_2586[(10)]);
var inst_2543 = (inst_2541 < inst_2540);
var inst_2544 = inst_2543;
var state_2586__$1 = state_2586;
if(cljs.core.truth_(inst_2544)){
var statearr_2596_2635 = state_2586__$1;
(statearr_2596_2635[(1)] = (10));

} else {
var statearr_2597_2636 = state_2586__$1;
(statearr_2597_2636[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (9))){
var inst_2574 = (state_2586[(2)]);
var inst_2575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_2586__$1 = (function (){var statearr_2598 = state_2586;
(statearr_2598[(12)] = inst_2574);

return statearr_2598;
})();
if(cljs.core.truth_(inst_2575)){
var statearr_2599_2637 = state_2586__$1;
(statearr_2599_2637[(1)] = (21));

} else {
var statearr_2600_2638 = state_2586__$1;
(statearr_2600_2638[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (10))){
var inst_2539 = (state_2586[(11)]);
var inst_2541 = (state_2586[(9)]);
var inst_2546 = cljs.core._nth.call(null,inst_2539,inst_2541);
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2586__$1,(13),out,inst_2546);
} else {
if((state_val_2587 === (11))){
var inst_2538 = (state_2586[(8)]);
var inst_2552 = (state_2586[(13)]);
var inst_2552__$1 = cljs.core.seq.call(null,inst_2538);
var state_2586__$1 = (function (){var statearr_2604 = state_2586;
(statearr_2604[(13)] = inst_2552__$1);

return statearr_2604;
})();
if(inst_2552__$1){
var statearr_2605_2639 = state_2586__$1;
(statearr_2605_2639[(1)] = (14));

} else {
var statearr_2606_2640 = state_2586__$1;
(statearr_2606_2640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (12))){
var inst_2572 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2607_2641 = state_2586__$1;
(statearr_2607_2641[(2)] = inst_2572);

(statearr_2607_2641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (13))){
var inst_2541 = (state_2586[(9)]);
var inst_2538 = (state_2586[(8)]);
var inst_2539 = (state_2586[(11)]);
var inst_2540 = (state_2586[(10)]);
var inst_2548 = (state_2586[(2)]);
var inst_2549 = (inst_2541 + (1));
var tmp2601 = inst_2538;
var tmp2602 = inst_2539;
var tmp2603 = inst_2540;
var inst_2538__$1 = tmp2601;
var inst_2539__$1 = tmp2602;
var inst_2540__$1 = tmp2603;
var inst_2541__$1 = inst_2549;
var state_2586__$1 = (function (){var statearr_2608 = state_2586;
(statearr_2608[(14)] = inst_2548);

(statearr_2608[(8)] = inst_2538__$1);

(statearr_2608[(11)] = inst_2539__$1);

(statearr_2608[(10)] = inst_2540__$1);

(statearr_2608[(9)] = inst_2541__$1);

return statearr_2608;
})();
var statearr_2609_2642 = state_2586__$1;
(statearr_2609_2642[(2)] = null);

(statearr_2609_2642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (14))){
var inst_2552 = (state_2586[(13)]);
var inst_2554 = cljs.core.chunked_seq_QMARK_.call(null,inst_2552);
var state_2586__$1 = state_2586;
if(inst_2554){
var statearr_2610_2643 = state_2586__$1;
(statearr_2610_2643[(1)] = (17));

} else {
var statearr_2611_2644 = state_2586__$1;
(statearr_2611_2644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (15))){
var state_2586__$1 = state_2586;
var statearr_2612_2645 = state_2586__$1;
(statearr_2612_2645[(2)] = null);

(statearr_2612_2645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (16))){
var inst_2570 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2613_2646 = state_2586__$1;
(statearr_2613_2646[(2)] = inst_2570);

(statearr_2613_2646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (17))){
var inst_2552 = (state_2586[(13)]);
var inst_2556 = cljs.core.chunk_first.call(null,inst_2552);
var inst_2557 = cljs.core.chunk_rest.call(null,inst_2552);
var inst_2558 = cljs.core.count.call(null,inst_2556);
var inst_2538 = inst_2557;
var inst_2539 = inst_2556;
var inst_2540 = inst_2558;
var inst_2541 = (0);
var state_2586__$1 = (function (){var statearr_2614 = state_2586;
(statearr_2614[(8)] = inst_2538);

(statearr_2614[(11)] = inst_2539);

(statearr_2614[(10)] = inst_2540);

(statearr_2614[(9)] = inst_2541);

return statearr_2614;
})();
var statearr_2615_2647 = state_2586__$1;
(statearr_2615_2647[(2)] = null);

(statearr_2615_2647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (18))){
var inst_2552 = (state_2586[(13)]);
var inst_2561 = cljs.core.first.call(null,inst_2552);
var state_2586__$1 = state_2586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2586__$1,(20),out,inst_2561);
} else {
if((state_val_2587 === (19))){
var inst_2567 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2616_2648 = state_2586__$1;
(statearr_2616_2648[(2)] = inst_2567);

(statearr_2616_2648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (20))){
var inst_2552 = (state_2586[(13)]);
var inst_2563 = (state_2586[(2)]);
var inst_2564 = cljs.core.next.call(null,inst_2552);
var inst_2538 = inst_2564;
var inst_2539 = null;
var inst_2540 = (0);
var inst_2541 = (0);
var state_2586__$1 = (function (){var statearr_2617 = state_2586;
(statearr_2617[(15)] = inst_2563);

(statearr_2617[(8)] = inst_2538);

(statearr_2617[(11)] = inst_2539);

(statearr_2617[(10)] = inst_2540);

(statearr_2617[(9)] = inst_2541);

return statearr_2617;
})();
var statearr_2618_2649 = state_2586__$1;
(statearr_2618_2649[(2)] = null);

(statearr_2618_2649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (21))){
var state_2586__$1 = state_2586;
var statearr_2619_2650 = state_2586__$1;
(statearr_2619_2650[(2)] = null);

(statearr_2619_2650[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (22))){
var state_2586__$1 = state_2586;
var statearr_2620_2651 = state_2586__$1;
(statearr_2620_2651[(2)] = null);

(statearr_2620_2651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2587 === (23))){
var inst_2580 = (state_2586[(2)]);
var state_2586__$1 = state_2586;
var statearr_2621_2652 = state_2586__$1;
(statearr_2621_2652[(2)] = inst_2580);

(statearr_2621_2652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0 = (function (){
var statearr_2625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4__auto__);

(statearr_2625[(1)] = (1));

return statearr_2625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1 = (function (state_2586){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2626){if((e2626 instanceof Object)){
var ex__7__auto__ = e2626;
var statearr_2627_2653 = state_2586;
(statearr_2627_2653[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2586);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2654 = state_2586;
state_2586 = G__2654;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__ = function(state_2586){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1.call(this,state_2586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_2628 = f__9__auto__.call(null);
(statearr_2628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_2628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return cljs.core.async.mapcat_STAR_;},new cljs.core.Symbol("cljs.core.async","mapcat*","cljs.core.async/mapcat*",(227257995),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mapcat*","mapcat*",(1430657506),null),"cljs/core/async.cljs",(15),(1),(843),(843),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null)),null,(cljs.core.truth_(cljs.core.async.mapcat_STAR_)?cljs.core.async.mapcat_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args2655 = [];
var len__23656__auto___2658 = arguments.length;
var i__23657__auto___2659 = (0);
while(true){
if((i__23657__auto___2659 < len__23656__auto___2658)){
args2655.push((arguments[i__23657__auto___2659]));

var G__2660 = (i__23657__auto___2659 + (1));
i__23657__auto___2659 = G__2660;
continue;
} else {
}
break;
}

var G__2657 = args2655.length;
switch (G__2657) {
case (2):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2655.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.mapcat_LT_;},new cljs.core.Symbol("cljs.core.async","mapcat<","cljs.core.async/mapcat<",(-245076058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mapcat<","mapcat<",(-1203791139),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(853),(853),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.mapcat_LT_)?cljs.core.async.mapcat_LT_.cljs$lang$test:null)])));})()
;

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.mapcat_LT_;},new cljs.core.Symbol("cljs.core.async","mapcat<","cljs.core.async/mapcat<",(-245076058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mapcat<","mapcat<",(-1203791139),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(853),(853),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"in","in",(109346662),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.mapcat_LT_)?cljs.core.async.mapcat_LT_.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args2662 = [];
var len__23656__auto___2665 = arguments.length;
var i__23657__auto___2666 = (0);
while(true){
if((i__23657__auto___2666 < len__23656__auto___2665)){
args2662.push((arguments[i__23657__auto___2666]));

var G__2667 = (i__23657__auto___2666 + (1));
i__23657__auto___2666 = G__2667;
continue;
} else {
}
break;
}

var G__2664 = args2662.length;
switch (G__2664) {
case (2):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2662.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.mapcat_GT_;},new cljs.core.Symbol("cljs.core.async","mapcat>","cljs.core.async/mapcat>",(1944556653),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mapcat>","mapcat>",(-1129121340),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(861),(861),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.mapcat_GT_)?cljs.core.async.mapcat_GT_.cljs$lang$test:null)])));})()
;

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.mapcat_GT_;},new cljs.core.Symbol("cljs.core.async","mapcat>","cljs.core.async/mapcat>",(1944556653),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"mapcat>","mapcat>",(-1129121340),null),"cljs/core/async.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(861),(861),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out","out",(729986010),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.mapcat_GT_)?cljs.core.async.mapcat_GT_.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args2669 = [];
var len__23656__auto___2720 = arguments.length;
var i__23657__auto___2721 = (0);
while(true){
if((i__23657__auto___2721 < len__23656__auto___2720)){
args2669.push((arguments[i__23657__auto___2721]));

var G__2722 = (i__23657__auto___2721 + (1));
i__23657__auto___2721 = G__2722;
continue;
} else {
}
break;
}

var G__2671 = args2669.length;
switch (G__2671) {
case (1):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2669.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.unique;},new cljs.core.Symbol("cljs.core.async","unique","cljs.core.async/unique",(1008817542),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unique","unique",(1969928809),null),"cljs/core/async.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(869),(869),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.unique)?cljs.core.async.unique.cljs$lang$test:null)])));})()
;

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2724,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2724,out){
return (function (state_2695){
var state_val_2696 = (state_2695[(1)]);
if((state_val_2696 === (1))){
var inst_2672 = null;
var state_2695__$1 = (function (){var statearr_2697 = state_2695;
(statearr_2697[(7)] = inst_2672);

return statearr_2697;
})();
var statearr_2698_2725 = state_2695__$1;
(statearr_2698_2725[(2)] = null);

(statearr_2698_2725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (2))){
var state_2695__$1 = state_2695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2695__$1,(4),ch);
} else {
if((state_val_2696 === (3))){
var inst_2692 = (state_2695[(2)]);
var inst_2693 = cljs.core.async.close_BANG_.call(null,out);
var state_2695__$1 = (function (){var statearr_2699 = state_2695;
(statearr_2699[(8)] = inst_2692);

return statearr_2699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2695__$1,inst_2693);
} else {
if((state_val_2696 === (4))){
var inst_2675 = (state_2695[(9)]);
var inst_2675__$1 = (state_2695[(2)]);
var inst_2676 = (inst_2675__$1 == null);
var inst_2677 = cljs.core.not.call(null,inst_2676);
var state_2695__$1 = (function (){var statearr_2700 = state_2695;
(statearr_2700[(9)] = inst_2675__$1);

return statearr_2700;
})();
if(inst_2677){
var statearr_2701_2726 = state_2695__$1;
(statearr_2701_2726[(1)] = (5));

} else {
var statearr_2702_2727 = state_2695__$1;
(statearr_2702_2727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (5))){
var inst_2675 = (state_2695[(9)]);
var inst_2672 = (state_2695[(7)]);
var inst_2679 = cljs.core._EQ_.call(null,inst_2675,inst_2672);
var state_2695__$1 = state_2695;
if(inst_2679){
var statearr_2703_2728 = state_2695__$1;
(statearr_2703_2728[(1)] = (8));

} else {
var statearr_2704_2729 = state_2695__$1;
(statearr_2704_2729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (6))){
var state_2695__$1 = state_2695;
var statearr_2706_2730 = state_2695__$1;
(statearr_2706_2730[(2)] = null);

(statearr_2706_2730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (7))){
var inst_2690 = (state_2695[(2)]);
var state_2695__$1 = state_2695;
var statearr_2707_2731 = state_2695__$1;
(statearr_2707_2731[(2)] = inst_2690);

(statearr_2707_2731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (8))){
var inst_2672 = (state_2695[(7)]);
var tmp2705 = inst_2672;
var inst_2672__$1 = tmp2705;
var state_2695__$1 = (function (){var statearr_2708 = state_2695;
(statearr_2708[(7)] = inst_2672__$1);

return statearr_2708;
})();
var statearr_2709_2732 = state_2695__$1;
(statearr_2709_2732[(2)] = null);

(statearr_2709_2732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (9))){
var inst_2675 = (state_2695[(9)]);
var state_2695__$1 = state_2695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2695__$1,(11),out,inst_2675);
} else {
if((state_val_2696 === (10))){
var inst_2687 = (state_2695[(2)]);
var state_2695__$1 = state_2695;
var statearr_2710_2733 = state_2695__$1;
(statearr_2710_2733[(2)] = inst_2687);

(statearr_2710_2733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2696 === (11))){
var inst_2675 = (state_2695[(9)]);
var inst_2684 = (state_2695[(2)]);
var inst_2672 = inst_2675;
var state_2695__$1 = (function (){var statearr_2711 = state_2695;
(statearr_2711[(10)] = inst_2684);

(statearr_2711[(7)] = inst_2672);

return statearr_2711;
})();
var statearr_2712_2734 = state_2695__$1;
(statearr_2712_2734[(2)] = null);

(statearr_2712_2734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
});})(c__8__auto___2724,out))
;
return ((function (switch__3__auto__,c__8__auto___2724,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2716[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2716[(1)] = (1));

return statearr_2716;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2695){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2717){if((e2717 instanceof Object)){
var ex__7__auto__ = e2717;
var statearr_2718_2735 = state_2695;
(statearr_2718_2735[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2695);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2736 = state_2695;
state_2695 = G__2736;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2724,out))
})();
var state__10__auto__ = (function (){var statearr_2719 = f__9__auto__.call(null);
(statearr_2719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2724);

return statearr_2719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2724,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.unique;},new cljs.core.Symbol("cljs.core.async","unique","cljs.core.async/unique",(1008817542),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"unique","unique",(1969928809),null),"cljs/core/async.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(869),(869),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.unique)?cljs.core.async.unique.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args2737 = [];
var len__23656__auto___2807 = arguments.length;
var i__23657__auto___2808 = (0);
while(true){
if((i__23657__auto___2808 < len__23656__auto___2807)){
args2737.push((arguments[i__23657__auto___2808]));

var G__2809 = (i__23657__auto___2808 + (1));
i__23657__auto___2808 = G__2809;
continue;
} else {
}
break;
}

var G__2739 = args2737.length;
switch (G__2739) {
case (2):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2737.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.partition;},new cljs.core.Symbol("cljs.core.async","partition","cljs.core.async/partition",(-325504515),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"partition","partition",(-1479695018),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(885),(885),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.partition)?cljs.core.async.partition.cljs$lang$test:null)])));})()
;

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2811,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2811,out){
return (function (state_2777){
var state_val_2778 = (state_2777[(1)]);
if((state_val_2778 === (1))){
var inst_2740 = (new Array(n));
var inst_2741 = inst_2740;
var inst_2742 = (0);
var state_2777__$1 = (function (){var statearr_2779 = state_2777;
(statearr_2779[(7)] = inst_2741);

(statearr_2779[(9)] = inst_2742);

return statearr_2779;
})();
var statearr_2780_2812 = state_2777__$1;
(statearr_2780_2812[(2)] = null);

(statearr_2780_2812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (2))){
var state_2777__$1 = state_2777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2777__$1,(4),ch);
} else {
if((state_val_2778 === (3))){
var inst_2775 = (state_2777[(2)]);
var state_2777__$1 = state_2777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2777__$1,inst_2775);
} else {
if((state_val_2778 === (4))){
var inst_2745 = (state_2777[(8)]);
var inst_2745__$1 = (state_2777[(2)]);
var inst_2746 = (inst_2745__$1 == null);
var inst_2747 = cljs.core.not.call(null,inst_2746);
var state_2777__$1 = (function (){var statearr_2781 = state_2777;
(statearr_2781[(8)] = inst_2745__$1);

return statearr_2781;
})();
if(inst_2747){
var statearr_2782_2813 = state_2777__$1;
(statearr_2782_2813[(1)] = (5));

} else {
var statearr_2783_2814 = state_2777__$1;
(statearr_2783_2814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (5))){
var inst_2741 = (state_2777[(7)]);
var inst_2742 = (state_2777[(9)]);
var inst_2745 = (state_2777[(8)]);
var inst_2750 = (state_2777[(10)]);
var inst_2749 = (inst_2741[inst_2742] = inst_2745);
var inst_2750__$1 = (inst_2742 + (1));
var inst_2751 = (inst_2750__$1 < n);
var state_2777__$1 = (function (){var statearr_2784 = state_2777;
(statearr_2784[(11)] = inst_2749);

(statearr_2784[(10)] = inst_2750__$1);

return statearr_2784;
})();
if(cljs.core.truth_(inst_2751)){
var statearr_2785_2815 = state_2777__$1;
(statearr_2785_2815[(1)] = (8));

} else {
var statearr_2786_2816 = state_2777__$1;
(statearr_2786_2816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (6))){
var inst_2742 = (state_2777[(9)]);
var inst_2763 = (inst_2742 > (0));
var state_2777__$1 = state_2777;
if(cljs.core.truth_(inst_2763)){
var statearr_2788_2817 = state_2777__$1;
(statearr_2788_2817[(1)] = (12));

} else {
var statearr_2789_2818 = state_2777__$1;
(statearr_2789_2818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (7))){
var inst_2773 = (state_2777[(2)]);
var state_2777__$1 = state_2777;
var statearr_2790_2819 = state_2777__$1;
(statearr_2790_2819[(2)] = inst_2773);

(statearr_2790_2819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (8))){
var inst_2741 = (state_2777[(7)]);
var inst_2750 = (state_2777[(10)]);
var tmp2787 = inst_2741;
var inst_2741__$1 = tmp2787;
var inst_2742 = inst_2750;
var state_2777__$1 = (function (){var statearr_2791 = state_2777;
(statearr_2791[(7)] = inst_2741__$1);

(statearr_2791[(9)] = inst_2742);

return statearr_2791;
})();
var statearr_2792_2820 = state_2777__$1;
(statearr_2792_2820[(2)] = null);

(statearr_2792_2820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (9))){
var inst_2741 = (state_2777[(7)]);
var inst_2755 = cljs.core.vec.call(null,inst_2741);
var state_2777__$1 = state_2777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2777__$1,(11),out,inst_2755);
} else {
if((state_val_2778 === (10))){
var inst_2761 = (state_2777[(2)]);
var state_2777__$1 = state_2777;
var statearr_2793_2821 = state_2777__$1;
(statearr_2793_2821[(2)] = inst_2761);

(statearr_2793_2821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (11))){
var inst_2757 = (state_2777[(2)]);
var inst_2758 = (new Array(n));
var inst_2741 = inst_2758;
var inst_2742 = (0);
var state_2777__$1 = (function (){var statearr_2794 = state_2777;
(statearr_2794[(12)] = inst_2757);

(statearr_2794[(7)] = inst_2741);

(statearr_2794[(9)] = inst_2742);

return statearr_2794;
})();
var statearr_2795_2822 = state_2777__$1;
(statearr_2795_2822[(2)] = null);

(statearr_2795_2822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (12))){
var inst_2741 = (state_2777[(7)]);
var inst_2765 = cljs.core.vec.call(null,inst_2741);
var state_2777__$1 = state_2777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2777__$1,(15),out,inst_2765);
} else {
if((state_val_2778 === (13))){
var state_2777__$1 = state_2777;
var statearr_2796_2823 = state_2777__$1;
(statearr_2796_2823[(2)] = null);

(statearr_2796_2823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (14))){
var inst_2770 = (state_2777[(2)]);
var inst_2771 = cljs.core.async.close_BANG_.call(null,out);
var state_2777__$1 = (function (){var statearr_2797 = state_2777;
(statearr_2797[(13)] = inst_2770);

return statearr_2797;
})();
var statearr_2798_2824 = state_2777__$1;
(statearr_2798_2824[(2)] = inst_2771);

(statearr_2798_2824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2778 === (15))){
var inst_2767 = (state_2777[(2)]);
var state_2777__$1 = state_2777;
var statearr_2799_2825 = state_2777__$1;
(statearr_2799_2825[(2)] = inst_2767);

(statearr_2799_2825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
});})(c__8__auto___2811,out))
;
return ((function (switch__3__auto__,c__8__auto___2811,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2803[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2803[(1)] = (1));

return statearr_2803;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2777){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2804){if((e2804 instanceof Object)){
var ex__7__auto__ = e2804;
var statearr_2805_2826 = state_2777;
(statearr_2805_2826[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2777);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2827 = state_2777;
state_2777 = G__2827;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2811,out))
})();
var state__10__auto__ = (function (){var statearr_2806 = f__9__auto__.call(null);
(statearr_2806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2811);

return statearr_2806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2811,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.partition;},new cljs.core.Symbol("cljs.core.async","partition","cljs.core.async/partition",(-325504515),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"partition","partition",(-1479695018),null),"cljs/core/async.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(885),(885),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.partition)?cljs.core.async.partition.cljs$lang$test:null)]));
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
(function (){
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args2828 = [];
var len__23656__auto___2902 = arguments.length;
var i__23657__auto___2903 = (0);
while(true){
if((i__23657__auto___2903 < len__23656__auto___2902)){
args2828.push((arguments[i__23657__auto___2903]));

var G__2904 = (i__23657__auto___2903 + (1));
i__23657__auto___2903 = G__2904;
continue;
} else {
}
break;
}

var G__2830 = args2828.length;
switch (G__2830) {
case (2):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2828.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.partition_by;},new cljs.core.Symbol("cljs.core.async","partition-by","cljs.core.async/partition-by",(2021021148),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"partition-by","partition-by",(-1329938249),null),"cljs/core/async.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(907),(907),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.partition_by)?cljs.core.async.partition_by.cljs$lang$test:null)])));})()
;

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8__auto___2906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto___2906,out){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto___2906,out){
return (function (state_2872){
var state_val_2873 = (state_2872[(1)]);
if((state_val_2873 === (1))){
var inst_2831 = [];
var inst_2832 = inst_2831;
var inst_2833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123));
var state_2872__$1 = (function (){var statearr_2874 = state_2872;
(statearr_2874[(7)] = inst_2832);

(statearr_2874[(9)] = inst_2833);

return statearr_2874;
})();
var statearr_2875_2907 = state_2872__$1;
(statearr_2875_2907[(2)] = null);

(statearr_2875_2907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (2))){
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2872__$1,(4),ch);
} else {
if((state_val_2873 === (3))){
var inst_2870 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2872__$1,inst_2870);
} else {
if((state_val_2873 === (4))){
var inst_2836 = (state_2872[(8)]);
var inst_2836__$1 = (state_2872[(2)]);
var inst_2837 = (inst_2836__$1 == null);
var inst_2838 = cljs.core.not.call(null,inst_2837);
var state_2872__$1 = (function (){var statearr_2876 = state_2872;
(statearr_2876[(8)] = inst_2836__$1);

return statearr_2876;
})();
if(inst_2838){
var statearr_2877_2908 = state_2872__$1;
(statearr_2877_2908[(1)] = (5));

} else {
var statearr_2878_2909 = state_2872__$1;
(statearr_2878_2909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (5))){
var inst_2836 = (state_2872[(8)]);
var inst_2840 = (state_2872[(10)]);
var inst_2833 = (state_2872[(9)]);
var inst_2840__$1 = f.call(null,inst_2836);
var inst_2841 = cljs.core._EQ_.call(null,inst_2840__$1,inst_2833);
var inst_2842 = cljs.core.keyword_identical_QMARK_.call(null,inst_2833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",(-69252123)));
var inst_2843 = (inst_2841) || (inst_2842);
var state_2872__$1 = (function (){var statearr_2879 = state_2872;
(statearr_2879[(10)] = inst_2840__$1);

return statearr_2879;
})();
if(cljs.core.truth_(inst_2843)){
var statearr_2880_2910 = state_2872__$1;
(statearr_2880_2910[(1)] = (8));

} else {
var statearr_2881_2911 = state_2872__$1;
(statearr_2881_2911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (6))){
var inst_2832 = (state_2872[(7)]);
var inst_2857 = inst_2832.length;
var inst_2858 = (inst_2857 > (0));
var state_2872__$1 = state_2872;
if(cljs.core.truth_(inst_2858)){
var statearr_2883_2912 = state_2872__$1;
(statearr_2883_2912[(1)] = (12));

} else {
var statearr_2884_2913 = state_2872__$1;
(statearr_2884_2913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (7))){
var inst_2868 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2885_2914 = state_2872__$1;
(statearr_2885_2914[(2)] = inst_2868);

(statearr_2885_2914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (8))){
var inst_2832 = (state_2872[(7)]);
var inst_2836 = (state_2872[(8)]);
var inst_2840 = (state_2872[(10)]);
var inst_2845 = inst_2832.push(inst_2836);
var tmp2882 = inst_2832;
var inst_2832__$1 = tmp2882;
var inst_2833 = inst_2840;
var state_2872__$1 = (function (){var statearr_2886 = state_2872;
(statearr_2886[(11)] = inst_2845);

(statearr_2886[(7)] = inst_2832__$1);

(statearr_2886[(9)] = inst_2833);

return statearr_2886;
})();
var statearr_2887_2915 = state_2872__$1;
(statearr_2887_2915[(2)] = null);

(statearr_2887_2915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (9))){
var inst_2832 = (state_2872[(7)]);
var inst_2848 = cljs.core.vec.call(null,inst_2832);
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2872__$1,(11),out,inst_2848);
} else {
if((state_val_2873 === (10))){
var inst_2855 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2888_2916 = state_2872__$1;
(statearr_2888_2916[(2)] = inst_2855);

(statearr_2888_2916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (11))){
var inst_2836 = (state_2872[(8)]);
var inst_2840 = (state_2872[(10)]);
var inst_2850 = (state_2872[(2)]);
var inst_2851 = [];
var inst_2852 = inst_2851.push(inst_2836);
var inst_2832 = inst_2851;
var inst_2833 = inst_2840;
var state_2872__$1 = (function (){var statearr_2889 = state_2872;
(statearr_2889[(12)] = inst_2850);

(statearr_2889[(13)] = inst_2852);

(statearr_2889[(7)] = inst_2832);

(statearr_2889[(9)] = inst_2833);

return statearr_2889;
})();
var statearr_2890_2917 = state_2872__$1;
(statearr_2890_2917[(2)] = null);

(statearr_2890_2917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (12))){
var inst_2832 = (state_2872[(7)]);
var inst_2860 = cljs.core.vec.call(null,inst_2832);
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2872__$1,(15),out,inst_2860);
} else {
if((state_val_2873 === (13))){
var state_2872__$1 = state_2872;
var statearr_2891_2918 = state_2872__$1;
(statearr_2891_2918[(2)] = null);

(statearr_2891_2918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (14))){
var inst_2865 = (state_2872[(2)]);
var inst_2866 = cljs.core.async.close_BANG_.call(null,out);
var state_2872__$1 = (function (){var statearr_2892 = state_2872;
(statearr_2892[(14)] = inst_2865);

return statearr_2892;
})();
var statearr_2893_2919 = state_2872__$1;
(statearr_2893_2919[(2)] = inst_2866);

(statearr_2893_2919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2873 === (15))){
var inst_2862 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2894_2920 = state_2872__$1;
(statearr_2894_2920[(2)] = inst_2862);

(statearr_2894_2920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
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
}
}
}
}
}
});})(c__8__auto___2906,out))
;
return ((function (switch__3__auto__,c__8__auto___2906,out){
return (function() {
var cljs$core$async$state_machine__4__auto__ = null;
var cljs$core$async$state_machine__4__auto____0 = (function (){
var statearr_2898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2898[(0)] = cljs$core$async$state_machine__4__auto__);

(statearr_2898[(1)] = (1));

return statearr_2898;
});
var cljs$core$async$state_machine__4__auto____1 = (function (state_2872){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_2872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e2899){if((e2899 instanceof Object)){
var ex__7__auto__ = e2899;
var statearr_2900_2921 = state_2872;
(statearr_2900_2921[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2872);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e2899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2922 = state_2872;
state_2872 = G__2922;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
cljs$core$async$state_machine__4__auto__ = function(state_2872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4__auto____1.call(this,state_2872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4__auto____0;
cljs$core$async$state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4__auto____1;
return cljs$core$async$state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto___2906,out))
})();
var state__10__auto__ = (function (){var statearr_2901 = f__9__auto__.call(null);
(statearr_2901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto___2906);

return statearr_2901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto___2906,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.partition_by;},new cljs.core.Symbol("cljs.core.async","partition-by","cljs.core.async/partition-by",(2021021148),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",(-159169011),null),new cljs.core.Symbol(null,"partition-by","partition-by",(-1329938249),null),"cljs/core/async.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(907),(907),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"buf-or-n","buf-or-n",(-1646815050),null)], null)),"Deprecated - this function will be removed. Use transducer instead",(cljs.core.truth_(cljs.core.async.partition_by)?cljs.core.async.partition_by.cljs$lang$test:null)]));
