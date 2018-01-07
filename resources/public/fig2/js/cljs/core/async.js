// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13604 = arguments.length;
switch (G__13604) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13605 = (function (f,blockable,meta13606){
this.f = f;
this.blockable = blockable;
this.meta13606 = meta13606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13607,meta13606__$1){
var self__ = this;
var _13607__$1 = this;
return (new cljs.core.async.t_cljs$core$async13605(self__.f,self__.blockable,meta13606__$1));
});

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13607){
var self__ = this;
var _13607__$1 = this;
return self__.meta13606;
});

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13606","meta13606",-2091318082,null)], null);
});

cljs.core.async.t_cljs$core$async13605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13605";

cljs.core.async.t_cljs$core$async13605.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async13605");
});

cljs.core.async.__GT_t_cljs$core$async13605 = (function cljs$core$async$__GT_t_cljs$core$async13605(f__$1,blockable__$1,meta13606){
return (new cljs.core.async.t_cljs$core$async13605(f__$1,blockable__$1,meta13606));
});

}

return (new cljs.core.async.t_cljs$core$async13605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
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
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13611 = arguments.length;
switch (G__13611) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13614 = arguments.length;
switch (G__13614) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13617 = arguments.length;
switch (G__13617) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13619 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13619);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13619,ret){
return (function (){
return fn1.call(null,val_13619);
});})(val_13619,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13621 = arguments.length;
switch (G__13621) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9406__auto___13623 = n;
var x_13624 = (0);
while(true){
if((x_13624 < n__9406__auto___13623)){
(a[x_13624] = (0));

var G__13625 = (x_13624 + (1));
x_13624 = G__13625;
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

var G__13626 = (i + (1));
i = G__13626;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13627 = (function (flag,meta13628){
this.flag = flag;
this.meta13628 = meta13628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13629,meta13628__$1){
var self__ = this;
var _13629__$1 = this;
return (new cljs.core.async.t_cljs$core$async13627(self__.flag,meta13628__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13629){
var self__ = this;
var _13629__$1 = this;
return self__.meta13628;
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13628","meta13628",1412225105,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13627";

cljs.core.async.t_cljs$core$async13627.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async13627");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13627 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13627(flag__$1,meta13628){
return (new cljs.core.async.t_cljs$core$async13627(flag__$1,meta13628));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13627(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13630 = (function (flag,cb,meta13631){
this.flag = flag;
this.cb = cb;
this.meta13631 = meta13631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13632,meta13631__$1){
var self__ = this;
var _13632__$1 = this;
return (new cljs.core.async.t_cljs$core$async13630(self__.flag,self__.cb,meta13631__$1));
});

cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13632){
var self__ = this;
var _13632__$1 = this;
return self__.meta13631;
});

cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13631","meta13631",763580203,null)], null);
});

cljs.core.async.t_cljs$core$async13630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13630";

cljs.core.async.t_cljs$core$async13630.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async13630");
});

cljs.core.async.__GT_t_cljs$core$async13630 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13630(flag__$1,cb__$1,meta13631){
return (new cljs.core.async.t_cljs$core$async13630(flag__$1,cb__$1,meta13631));
});

}

return (new cljs.core.async.t_cljs$core$async13630(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13633_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13633_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13634_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13634_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8363__auto__ = wport;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13635 = (i + (1));
i = G__13635;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8363__auto__ = ret;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__8351__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
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
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___13641 = arguments.length;
var i__9641__auto___13642 = (0);
while(true){
if((i__9641__auto___13642 < len__9640__auto___13641)){
args__9647__auto__.push((arguments[i__9641__auto___13642]));

var G__13643 = (i__9641__auto___13642 + (1));
i__9641__auto___13642 = G__13643;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13638){
var map__13639 = p__13638;
var map__13639__$1 = ((((!((map__13639 == null)))?((((map__13639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639):map__13639);
var opts = map__13639__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13636){
var G__13637 = cljs.core.first.call(null,seq13636);
var seq13636__$1 = cljs.core.next.call(null,seq13636);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13637,seq13636__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13645 = arguments.length;
switch (G__13645) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13544__auto___13691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___13691){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___13691){
return (function (state_13669){
var state_val_13670 = (state_13669[(1)]);
if((state_val_13670 === (7))){
var inst_13665 = (state_13669[(2)]);
var state_13669__$1 = state_13669;
var statearr_13671_13692 = state_13669__$1;
(statearr_13671_13692[(2)] = inst_13665);

(statearr_13671_13692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (1))){
var state_13669__$1 = state_13669;
var statearr_13672_13693 = state_13669__$1;
(statearr_13672_13693[(2)] = null);

(statearr_13672_13693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (4))){
var inst_13648 = (state_13669[(7)]);
var inst_13648__$1 = (state_13669[(2)]);
var inst_13649 = (inst_13648__$1 == null);
var state_13669__$1 = (function (){var statearr_13673 = state_13669;
(statearr_13673[(7)] = inst_13648__$1);

return statearr_13673;
})();
if(cljs.core.truth_(inst_13649)){
var statearr_13674_13694 = state_13669__$1;
(statearr_13674_13694[(1)] = (5));

} else {
var statearr_13675_13695 = state_13669__$1;
(statearr_13675_13695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (13))){
var state_13669__$1 = state_13669;
var statearr_13676_13696 = state_13669__$1;
(statearr_13676_13696[(2)] = null);

(statearr_13676_13696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (6))){
var inst_13648 = (state_13669[(7)]);
var state_13669__$1 = state_13669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13669__$1,(11),to,inst_13648);
} else {
if((state_val_13670 === (3))){
var inst_13667 = (state_13669[(2)]);
var state_13669__$1 = state_13669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13669__$1,inst_13667);
} else {
if((state_val_13670 === (12))){
var state_13669__$1 = state_13669;
var statearr_13677_13697 = state_13669__$1;
(statearr_13677_13697[(2)] = null);

(statearr_13677_13697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (2))){
var state_13669__$1 = state_13669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13669__$1,(4),from);
} else {
if((state_val_13670 === (11))){
var inst_13658 = (state_13669[(2)]);
var state_13669__$1 = state_13669;
if(cljs.core.truth_(inst_13658)){
var statearr_13678_13698 = state_13669__$1;
(statearr_13678_13698[(1)] = (12));

} else {
var statearr_13679_13699 = state_13669__$1;
(statearr_13679_13699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (9))){
var state_13669__$1 = state_13669;
var statearr_13680_13700 = state_13669__$1;
(statearr_13680_13700[(2)] = null);

(statearr_13680_13700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (5))){
var state_13669__$1 = state_13669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13681_13701 = state_13669__$1;
(statearr_13681_13701[(1)] = (8));

} else {
var statearr_13682_13702 = state_13669__$1;
(statearr_13682_13702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (14))){
var inst_13663 = (state_13669[(2)]);
var state_13669__$1 = state_13669;
var statearr_13683_13703 = state_13669__$1;
(statearr_13683_13703[(2)] = inst_13663);

(statearr_13683_13703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (10))){
var inst_13655 = (state_13669[(2)]);
var state_13669__$1 = state_13669;
var statearr_13684_13704 = state_13669__$1;
(statearr_13684_13704[(2)] = inst_13655);

(statearr_13684_13704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13670 === (8))){
var inst_13652 = cljs.core.async.close_BANG_.call(null,to);
var state_13669__$1 = state_13669;
var statearr_13685_13705 = state_13669__$1;
(statearr_13685_13705[(2)] = inst_13652);

(statearr_13685_13705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___13691))
;
return ((function (switch__13454__auto__,c__13544__auto___13691){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_13686 = [null,null,null,null,null,null,null,null];
(statearr_13686[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_13686[(1)] = (1));

return statearr_13686;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_13669){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13687){if((e13687 instanceof Object)){
var ex__13458__auto__ = e13687;
var statearr_13688_13706 = state_13669;
(statearr_13688_13706[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13707 = state_13669;
state_13669 = G__13707;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_13669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_13669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___13691))
})();
var state__13546__auto__ = (function (){var statearr_13689 = f__13545__auto__.call(null);
(statearr_13689[(6)] = c__13544__auto___13691);

return statearr_13689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___13691))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13708){
var vec__13709 = p__13708;
var v = cljs.core.nth.call(null,vec__13709,(0),null);
var p = cljs.core.nth.call(null,vec__13709,(1),null);
var job = vec__13709;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13544__auto___13880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results){
return (function (state_13716){
var state_val_13717 = (state_13716[(1)]);
if((state_val_13717 === (1))){
var state_13716__$1 = state_13716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13716__$1,(2),res,v);
} else {
if((state_val_13717 === (2))){
var inst_13713 = (state_13716[(2)]);
var inst_13714 = cljs.core.async.close_BANG_.call(null,res);
var state_13716__$1 = (function (){var statearr_13718 = state_13716;
(statearr_13718[(7)] = inst_13713);

return statearr_13718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13716__$1,inst_13714);
} else {
return null;
}
}
});})(c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results))
;
return ((function (switch__13454__auto__,c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_13719 = [null,null,null,null,null,null,null,null];
(statearr_13719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_13719[(1)] = (1));

return statearr_13719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_13716){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13720){if((e13720 instanceof Object)){
var ex__13458__auto__ = e13720;
var statearr_13721_13881 = state_13716;
(statearr_13721_13881[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13882 = state_13716;
state_13716 = G__13882;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_13716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_13716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results))
})();
var state__13546__auto__ = (function (){var statearr_13722 = f__13545__auto__.call(null);
(statearr_13722[(6)] = c__13544__auto___13880);

return statearr_13722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___13880,res,vec__13709,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13723){
var vec__13724 = p__13723;
var v = cljs.core.nth.call(null,vec__13724,(0),null);
var p = cljs.core.nth.call(null,vec__13724,(1),null);
var job = vec__13724;
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
var n__9406__auto___13883 = n;
var __13884 = (0);
while(true){
if((__13884 < n__9406__auto___13883)){
var G__13727_13885 = type;
var G__13727_13886__$1 = (((G__13727_13885 instanceof cljs.core.Keyword))?G__13727_13885.fqn:null);
switch (G__13727_13886__$1) {
case "compute":
var c__13544__auto___13888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13884,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (__13884,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function (state_13740){
var state_val_13741 = (state_13740[(1)]);
if((state_val_13741 === (1))){
var state_13740__$1 = state_13740;
var statearr_13742_13889 = state_13740__$1;
(statearr_13742_13889[(2)] = null);

(statearr_13742_13889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (2))){
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13740__$1,(4),jobs);
} else {
if((state_val_13741 === (3))){
var inst_13738 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13740__$1,inst_13738);
} else {
if((state_val_13741 === (4))){
var inst_13730 = (state_13740[(2)]);
var inst_13731 = process.call(null,inst_13730);
var state_13740__$1 = state_13740;
if(cljs.core.truth_(inst_13731)){
var statearr_13743_13890 = state_13740__$1;
(statearr_13743_13890[(1)] = (5));

} else {
var statearr_13744_13891 = state_13740__$1;
(statearr_13744_13891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (5))){
var state_13740__$1 = state_13740;
var statearr_13745_13892 = state_13740__$1;
(statearr_13745_13892[(2)] = null);

(statearr_13745_13892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (6))){
var state_13740__$1 = state_13740;
var statearr_13746_13893 = state_13740__$1;
(statearr_13746_13893[(2)] = null);

(statearr_13746_13893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (7))){
var inst_13736 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
var statearr_13747_13894 = state_13740__$1;
(statearr_13747_13894[(2)] = inst_13736);

(statearr_13747_13894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13884,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
;
return ((function (__13884,switch__13454__auto__,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_13748 = [null,null,null,null,null,null,null];
(statearr_13748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_13748[(1)] = (1));

return statearr_13748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_13740){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13749){if((e13749 instanceof Object)){
var ex__13458__auto__ = e13749;
var statearr_13750_13895 = state_13740;
(statearr_13750_13895[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13896 = state_13740;
state_13740 = G__13896;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_13740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_13740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(__13884,switch__13454__auto__,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
})();
var state__13546__auto__ = (function (){var statearr_13751 = f__13545__auto__.call(null);
(statearr_13751[(6)] = c__13544__auto___13888);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(__13884,c__13544__auto___13888,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
);


break;
case "async":
var c__13544__auto___13897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13884,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (__13884,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function (state_13764){
var state_val_13765 = (state_13764[(1)]);
if((state_val_13765 === (1))){
var state_13764__$1 = state_13764;
var statearr_13766_13898 = state_13764__$1;
(statearr_13766_13898[(2)] = null);

(statearr_13766_13898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (2))){
var state_13764__$1 = state_13764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13764__$1,(4),jobs);
} else {
if((state_val_13765 === (3))){
var inst_13762 = (state_13764[(2)]);
var state_13764__$1 = state_13764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13764__$1,inst_13762);
} else {
if((state_val_13765 === (4))){
var inst_13754 = (state_13764[(2)]);
var inst_13755 = async.call(null,inst_13754);
var state_13764__$1 = state_13764;
if(cljs.core.truth_(inst_13755)){
var statearr_13767_13899 = state_13764__$1;
(statearr_13767_13899[(1)] = (5));

} else {
var statearr_13768_13900 = state_13764__$1;
(statearr_13768_13900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (5))){
var state_13764__$1 = state_13764;
var statearr_13769_13901 = state_13764__$1;
(statearr_13769_13901[(2)] = null);

(statearr_13769_13901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (6))){
var state_13764__$1 = state_13764;
var statearr_13770_13902 = state_13764__$1;
(statearr_13770_13902[(2)] = null);

(statearr_13770_13902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (7))){
var inst_13760 = (state_13764[(2)]);
var state_13764__$1 = state_13764;
var statearr_13771_13903 = state_13764__$1;
(statearr_13771_13903[(2)] = inst_13760);

(statearr_13771_13903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13884,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
;
return ((function (__13884,switch__13454__auto__,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_13772 = [null,null,null,null,null,null,null];
(statearr_13772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_13772[(1)] = (1));

return statearr_13772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_13764){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13773){if((e13773 instanceof Object)){
var ex__13458__auto__ = e13773;
var statearr_13774_13904 = state_13764;
(statearr_13774_13904[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13905 = state_13764;
state_13764 = G__13905;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_13764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_13764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(__13884,switch__13454__auto__,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
})();
var state__13546__auto__ = (function (){var statearr_13775 = f__13545__auto__.call(null);
(statearr_13775[(6)] = c__13544__auto___13897);

return statearr_13775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(__13884,c__13544__auto___13897,G__13727_13885,G__13727_13886__$1,n__9406__auto___13883,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13727_13886__$1)].join('')));

}

var G__13906 = (__13884 + (1));
__13884 = G__13906;
continue;
} else {
}
break;
}

var c__13544__auto___13907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___13907,jobs,results,process,async){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___13907,jobs,results,process,async){
return (function (state_13797){
var state_val_13798 = (state_13797[(1)]);
if((state_val_13798 === (1))){
var state_13797__$1 = state_13797;
var statearr_13799_13908 = state_13797__$1;
(statearr_13799_13908[(2)] = null);

(statearr_13799_13908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (2))){
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13797__$1,(4),from);
} else {
if((state_val_13798 === (3))){
var inst_13795 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13797__$1,inst_13795);
} else {
if((state_val_13798 === (4))){
var inst_13778 = (state_13797[(7)]);
var inst_13778__$1 = (state_13797[(2)]);
var inst_13779 = (inst_13778__$1 == null);
var state_13797__$1 = (function (){var statearr_13800 = state_13797;
(statearr_13800[(7)] = inst_13778__$1);

return statearr_13800;
})();
if(cljs.core.truth_(inst_13779)){
var statearr_13801_13909 = state_13797__$1;
(statearr_13801_13909[(1)] = (5));

} else {
var statearr_13802_13910 = state_13797__$1;
(statearr_13802_13910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (5))){
var inst_13781 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13797__$1 = state_13797;
var statearr_13803_13911 = state_13797__$1;
(statearr_13803_13911[(2)] = inst_13781);

(statearr_13803_13911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (6))){
var inst_13778 = (state_13797[(7)]);
var inst_13783 = (state_13797[(8)]);
var inst_13783__$1 = cljs.core.async.chan.call(null,(1));
var inst_13784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13785 = [inst_13778,inst_13783__$1];
var inst_13786 = (new cljs.core.PersistentVector(null,2,(5),inst_13784,inst_13785,null));
var state_13797__$1 = (function (){var statearr_13804 = state_13797;
(statearr_13804[(8)] = inst_13783__$1);

return statearr_13804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13797__$1,(8),jobs,inst_13786);
} else {
if((state_val_13798 === (7))){
var inst_13793 = (state_13797[(2)]);
var state_13797__$1 = state_13797;
var statearr_13805_13912 = state_13797__$1;
(statearr_13805_13912[(2)] = inst_13793);

(statearr_13805_13912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13798 === (8))){
var inst_13783 = (state_13797[(8)]);
var inst_13788 = (state_13797[(2)]);
var state_13797__$1 = (function (){var statearr_13806 = state_13797;
(statearr_13806[(9)] = inst_13788);

return statearr_13806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13797__$1,(9),results,inst_13783);
} else {
if((state_val_13798 === (9))){
var inst_13790 = (state_13797[(2)]);
var state_13797__$1 = (function (){var statearr_13807 = state_13797;
(statearr_13807[(10)] = inst_13790);

return statearr_13807;
})();
var statearr_13808_13913 = state_13797__$1;
(statearr_13808_13913[(2)] = null);

(statearr_13808_13913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___13907,jobs,results,process,async))
;
return ((function (switch__13454__auto__,c__13544__auto___13907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_13809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_13809[(1)] = (1));

return statearr_13809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_13797){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13810){if((e13810 instanceof Object)){
var ex__13458__auto__ = e13810;
var statearr_13811_13914 = state_13797;
(statearr_13811_13914[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13915 = state_13797;
state_13797 = G__13915;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_13797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_13797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___13907,jobs,results,process,async))
})();
var state__13546__auto__ = (function (){var statearr_13812 = f__13545__auto__.call(null);
(statearr_13812[(6)] = c__13544__auto___13907);

return statearr_13812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___13907,jobs,results,process,async))
);


var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,jobs,results,process,async){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,jobs,results,process,async){
return (function (state_13850){
var state_val_13851 = (state_13850[(1)]);
if((state_val_13851 === (7))){
var inst_13846 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
var statearr_13852_13916 = state_13850__$1;
(statearr_13852_13916[(2)] = inst_13846);

(statearr_13852_13916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (20))){
var state_13850__$1 = state_13850;
var statearr_13853_13917 = state_13850__$1;
(statearr_13853_13917[(2)] = null);

(statearr_13853_13917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (1))){
var state_13850__$1 = state_13850;
var statearr_13854_13918 = state_13850__$1;
(statearr_13854_13918[(2)] = null);

(statearr_13854_13918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (4))){
var inst_13815 = (state_13850[(7)]);
var inst_13815__$1 = (state_13850[(2)]);
var inst_13816 = (inst_13815__$1 == null);
var state_13850__$1 = (function (){var statearr_13855 = state_13850;
(statearr_13855[(7)] = inst_13815__$1);

return statearr_13855;
})();
if(cljs.core.truth_(inst_13816)){
var statearr_13856_13919 = state_13850__$1;
(statearr_13856_13919[(1)] = (5));

} else {
var statearr_13857_13920 = state_13850__$1;
(statearr_13857_13920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (15))){
var inst_13828 = (state_13850[(8)]);
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13850__$1,(18),to,inst_13828);
} else {
if((state_val_13851 === (21))){
var inst_13841 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
var statearr_13858_13921 = state_13850__$1;
(statearr_13858_13921[(2)] = inst_13841);

(statearr_13858_13921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (13))){
var inst_13843 = (state_13850[(2)]);
var state_13850__$1 = (function (){var statearr_13859 = state_13850;
(statearr_13859[(9)] = inst_13843);

return statearr_13859;
})();
var statearr_13860_13922 = state_13850__$1;
(statearr_13860_13922[(2)] = null);

(statearr_13860_13922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (6))){
var inst_13815 = (state_13850[(7)]);
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,(11),inst_13815);
} else {
if((state_val_13851 === (17))){
var inst_13836 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
if(cljs.core.truth_(inst_13836)){
var statearr_13861_13923 = state_13850__$1;
(statearr_13861_13923[(1)] = (19));

} else {
var statearr_13862_13924 = state_13850__$1;
(statearr_13862_13924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (3))){
var inst_13848 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13850__$1,inst_13848);
} else {
if((state_val_13851 === (12))){
var inst_13825 = (state_13850[(10)]);
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,(14),inst_13825);
} else {
if((state_val_13851 === (2))){
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,(4),results);
} else {
if((state_val_13851 === (19))){
var state_13850__$1 = state_13850;
var statearr_13863_13925 = state_13850__$1;
(statearr_13863_13925[(2)] = null);

(statearr_13863_13925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (11))){
var inst_13825 = (state_13850[(2)]);
var state_13850__$1 = (function (){var statearr_13864 = state_13850;
(statearr_13864[(10)] = inst_13825);

return statearr_13864;
})();
var statearr_13865_13926 = state_13850__$1;
(statearr_13865_13926[(2)] = null);

(statearr_13865_13926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (9))){
var state_13850__$1 = state_13850;
var statearr_13866_13927 = state_13850__$1;
(statearr_13866_13927[(2)] = null);

(statearr_13866_13927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (5))){
var state_13850__$1 = state_13850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13867_13928 = state_13850__$1;
(statearr_13867_13928[(1)] = (8));

} else {
var statearr_13868_13929 = state_13850__$1;
(statearr_13868_13929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (14))){
var inst_13830 = (state_13850[(11)]);
var inst_13828 = (state_13850[(8)]);
var inst_13828__$1 = (state_13850[(2)]);
var inst_13829 = (inst_13828__$1 == null);
var inst_13830__$1 = cljs.core.not.call(null,inst_13829);
var state_13850__$1 = (function (){var statearr_13869 = state_13850;
(statearr_13869[(11)] = inst_13830__$1);

(statearr_13869[(8)] = inst_13828__$1);

return statearr_13869;
})();
if(inst_13830__$1){
var statearr_13870_13930 = state_13850__$1;
(statearr_13870_13930[(1)] = (15));

} else {
var statearr_13871_13931 = state_13850__$1;
(statearr_13871_13931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (16))){
var inst_13830 = (state_13850[(11)]);
var state_13850__$1 = state_13850;
var statearr_13872_13932 = state_13850__$1;
(statearr_13872_13932[(2)] = inst_13830);

(statearr_13872_13932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (10))){
var inst_13822 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
var statearr_13873_13933 = state_13850__$1;
(statearr_13873_13933[(2)] = inst_13822);

(statearr_13873_13933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (18))){
var inst_13833 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
var statearr_13874_13934 = state_13850__$1;
(statearr_13874_13934[(2)] = inst_13833);

(statearr_13874_13934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (8))){
var inst_13819 = cljs.core.async.close_BANG_.call(null,to);
var state_13850__$1 = state_13850;
var statearr_13875_13935 = state_13850__$1;
(statearr_13875_13935[(2)] = inst_13819);

(statearr_13875_13935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__,jobs,results,process,async))
;
return ((function (switch__13454__auto__,c__13544__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_13876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_13876[(1)] = (1));

return statearr_13876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_13850){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object)){
var ex__13458__auto__ = e13877;
var statearr_13878_13936 = state_13850;
(statearr_13878_13936[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13937 = state_13850;
state_13850 = G__13937;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_13850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_13850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,jobs,results,process,async))
})();
var state__13546__auto__ = (function (){var statearr_13879 = f__13545__auto__.call(null);
(statearr_13879[(6)] = c__13544__auto__);

return statearr_13879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,jobs,results,process,async))
);

return c__13544__auto__;
});
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
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13939 = arguments.length;
switch (G__13939) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13942 = arguments.length;
switch (G__13942) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13945 = arguments.length;
switch (G__13945) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13544__auto___13994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___13994,tc,fc){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___13994,tc,fc){
return (function (state_13971){
var state_val_13972 = (state_13971[(1)]);
if((state_val_13972 === (7))){
var inst_13967 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13973_13995 = state_13971__$1;
(statearr_13973_13995[(2)] = inst_13967);

(statearr_13973_13995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (1))){
var state_13971__$1 = state_13971;
var statearr_13974_13996 = state_13971__$1;
(statearr_13974_13996[(2)] = null);

(statearr_13974_13996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (4))){
var inst_13948 = (state_13971[(7)]);
var inst_13948__$1 = (state_13971[(2)]);
var inst_13949 = (inst_13948__$1 == null);
var state_13971__$1 = (function (){var statearr_13975 = state_13971;
(statearr_13975[(7)] = inst_13948__$1);

return statearr_13975;
})();
if(cljs.core.truth_(inst_13949)){
var statearr_13976_13997 = state_13971__$1;
(statearr_13976_13997[(1)] = (5));

} else {
var statearr_13977_13998 = state_13971__$1;
(statearr_13977_13998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (13))){
var state_13971__$1 = state_13971;
var statearr_13978_13999 = state_13971__$1;
(statearr_13978_13999[(2)] = null);

(statearr_13978_13999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (6))){
var inst_13948 = (state_13971[(7)]);
var inst_13954 = p.call(null,inst_13948);
var state_13971__$1 = state_13971;
if(cljs.core.truth_(inst_13954)){
var statearr_13979_14000 = state_13971__$1;
(statearr_13979_14000[(1)] = (9));

} else {
var statearr_13980_14001 = state_13971__$1;
(statearr_13980_14001[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (3))){
var inst_13969 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13971__$1,inst_13969);
} else {
if((state_val_13972 === (12))){
var state_13971__$1 = state_13971;
var statearr_13981_14002 = state_13971__$1;
(statearr_13981_14002[(2)] = null);

(statearr_13981_14002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (2))){
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13971__$1,(4),ch);
} else {
if((state_val_13972 === (11))){
var inst_13948 = (state_13971[(7)]);
var inst_13958 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13971__$1,(8),inst_13958,inst_13948);
} else {
if((state_val_13972 === (9))){
var state_13971__$1 = state_13971;
var statearr_13982_14003 = state_13971__$1;
(statearr_13982_14003[(2)] = tc);

(statearr_13982_14003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (5))){
var inst_13951 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13952 = cljs.core.async.close_BANG_.call(null,fc);
var state_13971__$1 = (function (){var statearr_13983 = state_13971;
(statearr_13983[(8)] = inst_13951);

return statearr_13983;
})();
var statearr_13984_14004 = state_13971__$1;
(statearr_13984_14004[(2)] = inst_13952);

(statearr_13984_14004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (14))){
var inst_13965 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13985_14005 = state_13971__$1;
(statearr_13985_14005[(2)] = inst_13965);

(statearr_13985_14005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (10))){
var state_13971__$1 = state_13971;
var statearr_13986_14006 = state_13971__$1;
(statearr_13986_14006[(2)] = fc);

(statearr_13986_14006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13972 === (8))){
var inst_13960 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
if(cljs.core.truth_(inst_13960)){
var statearr_13987_14007 = state_13971__$1;
(statearr_13987_14007[(1)] = (12));

} else {
var statearr_13988_14008 = state_13971__$1;
(statearr_13988_14008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___13994,tc,fc))
;
return ((function (switch__13454__auto__,c__13544__auto___13994,tc,fc){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_13989 = [null,null,null,null,null,null,null,null,null];
(statearr_13989[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_13989[(1)] = (1));

return statearr_13989;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_13971){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_13971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e13990){if((e13990 instanceof Object)){
var ex__13458__auto__ = e13990;
var statearr_13991_14009 = state_13971;
(statearr_13991_14009[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14010 = state_13971;
state_13971 = G__14010;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_13971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_13971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___13994,tc,fc))
})();
var state__13546__auto__ = (function (){var statearr_13992 = f__13545__auto__.call(null);
(statearr_13992[(6)] = c__13544__auto___13994);

return statearr_13992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___13994,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_14031){
var state_val_14032 = (state_14031[(1)]);
if((state_val_14032 === (7))){
var inst_14027 = (state_14031[(2)]);
var state_14031__$1 = state_14031;
var statearr_14033_14051 = state_14031__$1;
(statearr_14033_14051[(2)] = inst_14027);

(statearr_14033_14051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (1))){
var inst_14011 = init;
var state_14031__$1 = (function (){var statearr_14034 = state_14031;
(statearr_14034[(7)] = inst_14011);

return statearr_14034;
})();
var statearr_14035_14052 = state_14031__$1;
(statearr_14035_14052[(2)] = null);

(statearr_14035_14052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (4))){
var inst_14014 = (state_14031[(8)]);
var inst_14014__$1 = (state_14031[(2)]);
var inst_14015 = (inst_14014__$1 == null);
var state_14031__$1 = (function (){var statearr_14036 = state_14031;
(statearr_14036[(8)] = inst_14014__$1);

return statearr_14036;
})();
if(cljs.core.truth_(inst_14015)){
var statearr_14037_14053 = state_14031__$1;
(statearr_14037_14053[(1)] = (5));

} else {
var statearr_14038_14054 = state_14031__$1;
(statearr_14038_14054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (6))){
var inst_14014 = (state_14031[(8)]);
var inst_14018 = (state_14031[(9)]);
var inst_14011 = (state_14031[(7)]);
var inst_14018__$1 = f.call(null,inst_14011,inst_14014);
var inst_14019 = cljs.core.reduced_QMARK_.call(null,inst_14018__$1);
var state_14031__$1 = (function (){var statearr_14039 = state_14031;
(statearr_14039[(9)] = inst_14018__$1);

return statearr_14039;
})();
if(inst_14019){
var statearr_14040_14055 = state_14031__$1;
(statearr_14040_14055[(1)] = (8));

} else {
var statearr_14041_14056 = state_14031__$1;
(statearr_14041_14056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (3))){
var inst_14029 = (state_14031[(2)]);
var state_14031__$1 = state_14031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14031__$1,inst_14029);
} else {
if((state_val_14032 === (2))){
var state_14031__$1 = state_14031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14031__$1,(4),ch);
} else {
if((state_val_14032 === (9))){
var inst_14018 = (state_14031[(9)]);
var inst_14011 = inst_14018;
var state_14031__$1 = (function (){var statearr_14042 = state_14031;
(statearr_14042[(7)] = inst_14011);

return statearr_14042;
})();
var statearr_14043_14057 = state_14031__$1;
(statearr_14043_14057[(2)] = null);

(statearr_14043_14057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (5))){
var inst_14011 = (state_14031[(7)]);
var state_14031__$1 = state_14031;
var statearr_14044_14058 = state_14031__$1;
(statearr_14044_14058[(2)] = inst_14011);

(statearr_14044_14058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (10))){
var inst_14025 = (state_14031[(2)]);
var state_14031__$1 = state_14031;
var statearr_14045_14059 = state_14031__$1;
(statearr_14045_14059[(2)] = inst_14025);

(statearr_14045_14059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14032 === (8))){
var inst_14018 = (state_14031[(9)]);
var inst_14021 = cljs.core.deref.call(null,inst_14018);
var state_14031__$1 = state_14031;
var statearr_14046_14060 = state_14031__$1;
(statearr_14046_14060[(2)] = inst_14021);

(statearr_14046_14060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13455__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13455__auto____0 = (function (){
var statearr_14047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14047[(0)] = cljs$core$async$reduce_$_state_machine__13455__auto__);

(statearr_14047[(1)] = (1));

return statearr_14047;
});
var cljs$core$async$reduce_$_state_machine__13455__auto____1 = (function (state_14031){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14048){if((e14048 instanceof Object)){
var ex__13458__auto__ = e14048;
var statearr_14049_14061 = state_14031;
(statearr_14049_14061[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14062 = state_14031;
state_14031 = G__14062;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13455__auto__ = function(state_14031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13455__auto____1.call(this,state_14031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13455__auto____0;
cljs$core$async$reduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13455__auto____1;
return cljs$core$async$reduce_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_14050 = f__13545__auto__.call(null);
(statearr_14050[(6)] = c__13544__auto__);

return statearr_14050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,f__$1){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,f__$1){
return (function (state_14068){
var state_val_14069 = (state_14068[(1)]);
if((state_val_14069 === (1))){
var inst_14063 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14068__$1 = state_14068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14068__$1,(2),inst_14063);
} else {
if((state_val_14069 === (2))){
var inst_14065 = (state_14068[(2)]);
var inst_14066 = f__$1.call(null,inst_14065);
var state_14068__$1 = state_14068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14068__$1,inst_14066);
} else {
return null;
}
}
});})(c__13544__auto__,f__$1))
;
return ((function (switch__13454__auto__,c__13544__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13455__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13455__auto____0 = (function (){
var statearr_14070 = [null,null,null,null,null,null,null];
(statearr_14070[(0)] = cljs$core$async$transduce_$_state_machine__13455__auto__);

(statearr_14070[(1)] = (1));

return statearr_14070;
});
var cljs$core$async$transduce_$_state_machine__13455__auto____1 = (function (state_14068){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14071){if((e14071 instanceof Object)){
var ex__13458__auto__ = e14071;
var statearr_14072_14074 = state_14068;
(statearr_14072_14074[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14075 = state_14068;
state_14068 = G__14075;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13455__auto__ = function(state_14068){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13455__auto____1.call(this,state_14068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13455__auto____0;
cljs$core$async$transduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13455__auto____1;
return cljs$core$async$transduce_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,f__$1))
})();
var state__13546__auto__ = (function (){var statearr_14073 = f__13545__auto__.call(null);
(statearr_14073[(6)] = c__13544__auto__);

return statearr_14073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,f__$1))
);

return c__13544__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14077 = arguments.length;
switch (G__14077) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_14102){
var state_val_14103 = (state_14102[(1)]);
if((state_val_14103 === (7))){
var inst_14084 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
var statearr_14104_14125 = state_14102__$1;
(statearr_14104_14125[(2)] = inst_14084);

(statearr_14104_14125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (1))){
var inst_14078 = cljs.core.seq.call(null,coll);
var inst_14079 = inst_14078;
var state_14102__$1 = (function (){var statearr_14105 = state_14102;
(statearr_14105[(7)] = inst_14079);

return statearr_14105;
})();
var statearr_14106_14126 = state_14102__$1;
(statearr_14106_14126[(2)] = null);

(statearr_14106_14126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (4))){
var inst_14079 = (state_14102[(7)]);
var inst_14082 = cljs.core.first.call(null,inst_14079);
var state_14102__$1 = state_14102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14102__$1,(7),ch,inst_14082);
} else {
if((state_val_14103 === (13))){
var inst_14096 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
var statearr_14107_14127 = state_14102__$1;
(statearr_14107_14127[(2)] = inst_14096);

(statearr_14107_14127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (6))){
var inst_14087 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
if(cljs.core.truth_(inst_14087)){
var statearr_14108_14128 = state_14102__$1;
(statearr_14108_14128[(1)] = (8));

} else {
var statearr_14109_14129 = state_14102__$1;
(statearr_14109_14129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (3))){
var inst_14100 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14102__$1,inst_14100);
} else {
if((state_val_14103 === (12))){
var state_14102__$1 = state_14102;
var statearr_14110_14130 = state_14102__$1;
(statearr_14110_14130[(2)] = null);

(statearr_14110_14130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (2))){
var inst_14079 = (state_14102[(7)]);
var state_14102__$1 = state_14102;
if(cljs.core.truth_(inst_14079)){
var statearr_14111_14131 = state_14102__$1;
(statearr_14111_14131[(1)] = (4));

} else {
var statearr_14112_14132 = state_14102__$1;
(statearr_14112_14132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (11))){
var inst_14093 = cljs.core.async.close_BANG_.call(null,ch);
var state_14102__$1 = state_14102;
var statearr_14113_14133 = state_14102__$1;
(statearr_14113_14133[(2)] = inst_14093);

(statearr_14113_14133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (9))){
var state_14102__$1 = state_14102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14114_14134 = state_14102__$1;
(statearr_14114_14134[(1)] = (11));

} else {
var statearr_14115_14135 = state_14102__$1;
(statearr_14115_14135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (5))){
var inst_14079 = (state_14102[(7)]);
var state_14102__$1 = state_14102;
var statearr_14116_14136 = state_14102__$1;
(statearr_14116_14136[(2)] = inst_14079);

(statearr_14116_14136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (10))){
var inst_14098 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
var statearr_14117_14137 = state_14102__$1;
(statearr_14117_14137[(2)] = inst_14098);

(statearr_14117_14137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (8))){
var inst_14079 = (state_14102[(7)]);
var inst_14089 = cljs.core.next.call(null,inst_14079);
var inst_14079__$1 = inst_14089;
var state_14102__$1 = (function (){var statearr_14118 = state_14102;
(statearr_14118[(7)] = inst_14079__$1);

return statearr_14118;
})();
var statearr_14119_14138 = state_14102__$1;
(statearr_14119_14138[(2)] = null);

(statearr_14119_14138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_14120 = [null,null,null,null,null,null,null,null];
(statearr_14120[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_14120[(1)] = (1));

return statearr_14120;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14102){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14121){if((e14121 instanceof Object)){
var ex__13458__auto__ = e14121;
var statearr_14122_14139 = state_14102;
(statearr_14122_14139[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14140 = state_14102;
state_14102 = G__14140;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_14123 = f__13545__auto__.call(null);
(statearr_14123[(6)] = c__13544__auto__);

return statearr_14123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9097__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,ch);
} else {
var m__9097__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m);
} else {
var m__9097__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

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
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14141 = (function (ch,cs,meta14142){
this.ch = ch;
this.cs = cs;
this.meta14142 = meta14142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14143,meta14142__$1){
var self__ = this;
var _14143__$1 = this;
return (new cljs.core.async.t_cljs$core$async14141(self__.ch,self__.cs,meta14142__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14143){
var self__ = this;
var _14143__$1 = this;
return self__.meta14142;
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14142","meta14142",172275610,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14141";

cljs.core.async.t_cljs$core$async14141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async14141");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14141 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14141(ch__$1,cs__$1,meta14142){
return (new cljs.core.async.t_cljs$core$async14141(ch__$1,cs__$1,meta14142));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14141(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13544__auto___14363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___14363,cs,m,dchan,dctr,done){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___14363,cs,m,dchan,dctr,done){
return (function (state_14278){
var state_val_14279 = (state_14278[(1)]);
if((state_val_14279 === (7))){
var inst_14274 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14280_14364 = state_14278__$1;
(statearr_14280_14364[(2)] = inst_14274);

(statearr_14280_14364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (20))){
var inst_14177 = (state_14278[(7)]);
var inst_14189 = cljs.core.first.call(null,inst_14177);
var inst_14190 = cljs.core.nth.call(null,inst_14189,(0),null);
var inst_14191 = cljs.core.nth.call(null,inst_14189,(1),null);
var state_14278__$1 = (function (){var statearr_14281 = state_14278;
(statearr_14281[(8)] = inst_14190);

return statearr_14281;
})();
if(cljs.core.truth_(inst_14191)){
var statearr_14282_14365 = state_14278__$1;
(statearr_14282_14365[(1)] = (22));

} else {
var statearr_14283_14366 = state_14278__$1;
(statearr_14283_14366[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (27))){
var inst_14146 = (state_14278[(9)]);
var inst_14226 = (state_14278[(10)]);
var inst_14219 = (state_14278[(11)]);
var inst_14221 = (state_14278[(12)]);
var inst_14226__$1 = cljs.core._nth.call(null,inst_14219,inst_14221);
var inst_14227 = cljs.core.async.put_BANG_.call(null,inst_14226__$1,inst_14146,done);
var state_14278__$1 = (function (){var statearr_14284 = state_14278;
(statearr_14284[(10)] = inst_14226__$1);

return statearr_14284;
})();
if(cljs.core.truth_(inst_14227)){
var statearr_14285_14367 = state_14278__$1;
(statearr_14285_14367[(1)] = (30));

} else {
var statearr_14286_14368 = state_14278__$1;
(statearr_14286_14368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (1))){
var state_14278__$1 = state_14278;
var statearr_14287_14369 = state_14278__$1;
(statearr_14287_14369[(2)] = null);

(statearr_14287_14369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (24))){
var inst_14177 = (state_14278[(7)]);
var inst_14196 = (state_14278[(2)]);
var inst_14197 = cljs.core.next.call(null,inst_14177);
var inst_14155 = inst_14197;
var inst_14156 = null;
var inst_14157 = (0);
var inst_14158 = (0);
var state_14278__$1 = (function (){var statearr_14288 = state_14278;
(statearr_14288[(13)] = inst_14196);

(statearr_14288[(14)] = inst_14156);

(statearr_14288[(15)] = inst_14157);

(statearr_14288[(16)] = inst_14158);

(statearr_14288[(17)] = inst_14155);

return statearr_14288;
})();
var statearr_14289_14370 = state_14278__$1;
(statearr_14289_14370[(2)] = null);

(statearr_14289_14370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (39))){
var state_14278__$1 = state_14278;
var statearr_14293_14371 = state_14278__$1;
(statearr_14293_14371[(2)] = null);

(statearr_14293_14371[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (4))){
var inst_14146 = (state_14278[(9)]);
var inst_14146__$1 = (state_14278[(2)]);
var inst_14147 = (inst_14146__$1 == null);
var state_14278__$1 = (function (){var statearr_14294 = state_14278;
(statearr_14294[(9)] = inst_14146__$1);

return statearr_14294;
})();
if(cljs.core.truth_(inst_14147)){
var statearr_14295_14372 = state_14278__$1;
(statearr_14295_14372[(1)] = (5));

} else {
var statearr_14296_14373 = state_14278__$1;
(statearr_14296_14373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (15))){
var inst_14156 = (state_14278[(14)]);
var inst_14157 = (state_14278[(15)]);
var inst_14158 = (state_14278[(16)]);
var inst_14155 = (state_14278[(17)]);
var inst_14173 = (state_14278[(2)]);
var inst_14174 = (inst_14158 + (1));
var tmp14290 = inst_14156;
var tmp14291 = inst_14157;
var tmp14292 = inst_14155;
var inst_14155__$1 = tmp14292;
var inst_14156__$1 = tmp14290;
var inst_14157__$1 = tmp14291;
var inst_14158__$1 = inst_14174;
var state_14278__$1 = (function (){var statearr_14297 = state_14278;
(statearr_14297[(18)] = inst_14173);

(statearr_14297[(14)] = inst_14156__$1);

(statearr_14297[(15)] = inst_14157__$1);

(statearr_14297[(16)] = inst_14158__$1);

(statearr_14297[(17)] = inst_14155__$1);

return statearr_14297;
})();
var statearr_14298_14374 = state_14278__$1;
(statearr_14298_14374[(2)] = null);

(statearr_14298_14374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (21))){
var inst_14200 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14302_14375 = state_14278__$1;
(statearr_14302_14375[(2)] = inst_14200);

(statearr_14302_14375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (31))){
var inst_14226 = (state_14278[(10)]);
var inst_14230 = done.call(null,null);
var inst_14231 = cljs.core.async.untap_STAR_.call(null,m,inst_14226);
var state_14278__$1 = (function (){var statearr_14303 = state_14278;
(statearr_14303[(19)] = inst_14230);

return statearr_14303;
})();
var statearr_14304_14376 = state_14278__$1;
(statearr_14304_14376[(2)] = inst_14231);

(statearr_14304_14376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (32))){
var inst_14220 = (state_14278[(20)]);
var inst_14218 = (state_14278[(21)]);
var inst_14219 = (state_14278[(11)]);
var inst_14221 = (state_14278[(12)]);
var inst_14233 = (state_14278[(2)]);
var inst_14234 = (inst_14221 + (1));
var tmp14299 = inst_14220;
var tmp14300 = inst_14218;
var tmp14301 = inst_14219;
var inst_14218__$1 = tmp14300;
var inst_14219__$1 = tmp14301;
var inst_14220__$1 = tmp14299;
var inst_14221__$1 = inst_14234;
var state_14278__$1 = (function (){var statearr_14305 = state_14278;
(statearr_14305[(20)] = inst_14220__$1);

(statearr_14305[(22)] = inst_14233);

(statearr_14305[(21)] = inst_14218__$1);

(statearr_14305[(11)] = inst_14219__$1);

(statearr_14305[(12)] = inst_14221__$1);

return statearr_14305;
})();
var statearr_14306_14377 = state_14278__$1;
(statearr_14306_14377[(2)] = null);

(statearr_14306_14377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (40))){
var inst_14246 = (state_14278[(23)]);
var inst_14250 = done.call(null,null);
var inst_14251 = cljs.core.async.untap_STAR_.call(null,m,inst_14246);
var state_14278__$1 = (function (){var statearr_14307 = state_14278;
(statearr_14307[(24)] = inst_14250);

return statearr_14307;
})();
var statearr_14308_14378 = state_14278__$1;
(statearr_14308_14378[(2)] = inst_14251);

(statearr_14308_14378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (33))){
var inst_14237 = (state_14278[(25)]);
var inst_14239 = cljs.core.chunked_seq_QMARK_.call(null,inst_14237);
var state_14278__$1 = state_14278;
if(inst_14239){
var statearr_14309_14379 = state_14278__$1;
(statearr_14309_14379[(1)] = (36));

} else {
var statearr_14310_14380 = state_14278__$1;
(statearr_14310_14380[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (13))){
var inst_14167 = (state_14278[(26)]);
var inst_14170 = cljs.core.async.close_BANG_.call(null,inst_14167);
var state_14278__$1 = state_14278;
var statearr_14311_14381 = state_14278__$1;
(statearr_14311_14381[(2)] = inst_14170);

(statearr_14311_14381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (22))){
var inst_14190 = (state_14278[(8)]);
var inst_14193 = cljs.core.async.close_BANG_.call(null,inst_14190);
var state_14278__$1 = state_14278;
var statearr_14312_14382 = state_14278__$1;
(statearr_14312_14382[(2)] = inst_14193);

(statearr_14312_14382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (36))){
var inst_14237 = (state_14278[(25)]);
var inst_14241 = cljs.core.chunk_first.call(null,inst_14237);
var inst_14242 = cljs.core.chunk_rest.call(null,inst_14237);
var inst_14243 = cljs.core.count.call(null,inst_14241);
var inst_14218 = inst_14242;
var inst_14219 = inst_14241;
var inst_14220 = inst_14243;
var inst_14221 = (0);
var state_14278__$1 = (function (){var statearr_14313 = state_14278;
(statearr_14313[(20)] = inst_14220);

(statearr_14313[(21)] = inst_14218);

(statearr_14313[(11)] = inst_14219);

(statearr_14313[(12)] = inst_14221);

return statearr_14313;
})();
var statearr_14314_14383 = state_14278__$1;
(statearr_14314_14383[(2)] = null);

(statearr_14314_14383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (41))){
var inst_14237 = (state_14278[(25)]);
var inst_14253 = (state_14278[(2)]);
var inst_14254 = cljs.core.next.call(null,inst_14237);
var inst_14218 = inst_14254;
var inst_14219 = null;
var inst_14220 = (0);
var inst_14221 = (0);
var state_14278__$1 = (function (){var statearr_14315 = state_14278;
(statearr_14315[(20)] = inst_14220);

(statearr_14315[(27)] = inst_14253);

(statearr_14315[(21)] = inst_14218);

(statearr_14315[(11)] = inst_14219);

(statearr_14315[(12)] = inst_14221);

return statearr_14315;
})();
var statearr_14316_14384 = state_14278__$1;
(statearr_14316_14384[(2)] = null);

(statearr_14316_14384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (43))){
var state_14278__$1 = state_14278;
var statearr_14317_14385 = state_14278__$1;
(statearr_14317_14385[(2)] = null);

(statearr_14317_14385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (29))){
var inst_14262 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14318_14386 = state_14278__$1;
(statearr_14318_14386[(2)] = inst_14262);

(statearr_14318_14386[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (44))){
var inst_14271 = (state_14278[(2)]);
var state_14278__$1 = (function (){var statearr_14319 = state_14278;
(statearr_14319[(28)] = inst_14271);

return statearr_14319;
})();
var statearr_14320_14387 = state_14278__$1;
(statearr_14320_14387[(2)] = null);

(statearr_14320_14387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (6))){
var inst_14210 = (state_14278[(29)]);
var inst_14209 = cljs.core.deref.call(null,cs);
var inst_14210__$1 = cljs.core.keys.call(null,inst_14209);
var inst_14211 = cljs.core.count.call(null,inst_14210__$1);
var inst_14212 = cljs.core.reset_BANG_.call(null,dctr,inst_14211);
var inst_14217 = cljs.core.seq.call(null,inst_14210__$1);
var inst_14218 = inst_14217;
var inst_14219 = null;
var inst_14220 = (0);
var inst_14221 = (0);
var state_14278__$1 = (function (){var statearr_14321 = state_14278;
(statearr_14321[(29)] = inst_14210__$1);

(statearr_14321[(20)] = inst_14220);

(statearr_14321[(21)] = inst_14218);

(statearr_14321[(30)] = inst_14212);

(statearr_14321[(11)] = inst_14219);

(statearr_14321[(12)] = inst_14221);

return statearr_14321;
})();
var statearr_14322_14388 = state_14278__$1;
(statearr_14322_14388[(2)] = null);

(statearr_14322_14388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (28))){
var inst_14237 = (state_14278[(25)]);
var inst_14218 = (state_14278[(21)]);
var inst_14237__$1 = cljs.core.seq.call(null,inst_14218);
var state_14278__$1 = (function (){var statearr_14323 = state_14278;
(statearr_14323[(25)] = inst_14237__$1);

return statearr_14323;
})();
if(inst_14237__$1){
var statearr_14324_14389 = state_14278__$1;
(statearr_14324_14389[(1)] = (33));

} else {
var statearr_14325_14390 = state_14278__$1;
(statearr_14325_14390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (25))){
var inst_14220 = (state_14278[(20)]);
var inst_14221 = (state_14278[(12)]);
var inst_14223 = (inst_14221 < inst_14220);
var inst_14224 = inst_14223;
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14224)){
var statearr_14326_14391 = state_14278__$1;
(statearr_14326_14391[(1)] = (27));

} else {
var statearr_14327_14392 = state_14278__$1;
(statearr_14327_14392[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (34))){
var state_14278__$1 = state_14278;
var statearr_14328_14393 = state_14278__$1;
(statearr_14328_14393[(2)] = null);

(statearr_14328_14393[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (17))){
var state_14278__$1 = state_14278;
var statearr_14329_14394 = state_14278__$1;
(statearr_14329_14394[(2)] = null);

(statearr_14329_14394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (3))){
var inst_14276 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14278__$1,inst_14276);
} else {
if((state_val_14279 === (12))){
var inst_14205 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14330_14395 = state_14278__$1;
(statearr_14330_14395[(2)] = inst_14205);

(statearr_14330_14395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (2))){
var state_14278__$1 = state_14278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14278__$1,(4),ch);
} else {
if((state_val_14279 === (23))){
var state_14278__$1 = state_14278;
var statearr_14331_14396 = state_14278__$1;
(statearr_14331_14396[(2)] = null);

(statearr_14331_14396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (35))){
var inst_14260 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14332_14397 = state_14278__$1;
(statearr_14332_14397[(2)] = inst_14260);

(statearr_14332_14397[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (19))){
var inst_14177 = (state_14278[(7)]);
var inst_14181 = cljs.core.chunk_first.call(null,inst_14177);
var inst_14182 = cljs.core.chunk_rest.call(null,inst_14177);
var inst_14183 = cljs.core.count.call(null,inst_14181);
var inst_14155 = inst_14182;
var inst_14156 = inst_14181;
var inst_14157 = inst_14183;
var inst_14158 = (0);
var state_14278__$1 = (function (){var statearr_14333 = state_14278;
(statearr_14333[(14)] = inst_14156);

(statearr_14333[(15)] = inst_14157);

(statearr_14333[(16)] = inst_14158);

(statearr_14333[(17)] = inst_14155);

return statearr_14333;
})();
var statearr_14334_14398 = state_14278__$1;
(statearr_14334_14398[(2)] = null);

(statearr_14334_14398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (11))){
var inst_14177 = (state_14278[(7)]);
var inst_14155 = (state_14278[(17)]);
var inst_14177__$1 = cljs.core.seq.call(null,inst_14155);
var state_14278__$1 = (function (){var statearr_14335 = state_14278;
(statearr_14335[(7)] = inst_14177__$1);

return statearr_14335;
})();
if(inst_14177__$1){
var statearr_14336_14399 = state_14278__$1;
(statearr_14336_14399[(1)] = (16));

} else {
var statearr_14337_14400 = state_14278__$1;
(statearr_14337_14400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (9))){
var inst_14207 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14338_14401 = state_14278__$1;
(statearr_14338_14401[(2)] = inst_14207);

(statearr_14338_14401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (5))){
var inst_14153 = cljs.core.deref.call(null,cs);
var inst_14154 = cljs.core.seq.call(null,inst_14153);
var inst_14155 = inst_14154;
var inst_14156 = null;
var inst_14157 = (0);
var inst_14158 = (0);
var state_14278__$1 = (function (){var statearr_14339 = state_14278;
(statearr_14339[(14)] = inst_14156);

(statearr_14339[(15)] = inst_14157);

(statearr_14339[(16)] = inst_14158);

(statearr_14339[(17)] = inst_14155);

return statearr_14339;
})();
var statearr_14340_14402 = state_14278__$1;
(statearr_14340_14402[(2)] = null);

(statearr_14340_14402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (14))){
var state_14278__$1 = state_14278;
var statearr_14341_14403 = state_14278__$1;
(statearr_14341_14403[(2)] = null);

(statearr_14341_14403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (45))){
var inst_14268 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14342_14404 = state_14278__$1;
(statearr_14342_14404[(2)] = inst_14268);

(statearr_14342_14404[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (26))){
var inst_14210 = (state_14278[(29)]);
var inst_14264 = (state_14278[(2)]);
var inst_14265 = cljs.core.seq.call(null,inst_14210);
var state_14278__$1 = (function (){var statearr_14343 = state_14278;
(statearr_14343[(31)] = inst_14264);

return statearr_14343;
})();
if(inst_14265){
var statearr_14344_14405 = state_14278__$1;
(statearr_14344_14405[(1)] = (42));

} else {
var statearr_14345_14406 = state_14278__$1;
(statearr_14345_14406[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (16))){
var inst_14177 = (state_14278[(7)]);
var inst_14179 = cljs.core.chunked_seq_QMARK_.call(null,inst_14177);
var state_14278__$1 = state_14278;
if(inst_14179){
var statearr_14346_14407 = state_14278__$1;
(statearr_14346_14407[(1)] = (19));

} else {
var statearr_14347_14408 = state_14278__$1;
(statearr_14347_14408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (38))){
var inst_14257 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14348_14409 = state_14278__$1;
(statearr_14348_14409[(2)] = inst_14257);

(statearr_14348_14409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (30))){
var state_14278__$1 = state_14278;
var statearr_14349_14410 = state_14278__$1;
(statearr_14349_14410[(2)] = null);

(statearr_14349_14410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (10))){
var inst_14156 = (state_14278[(14)]);
var inst_14158 = (state_14278[(16)]);
var inst_14166 = cljs.core._nth.call(null,inst_14156,inst_14158);
var inst_14167 = cljs.core.nth.call(null,inst_14166,(0),null);
var inst_14168 = cljs.core.nth.call(null,inst_14166,(1),null);
var state_14278__$1 = (function (){var statearr_14350 = state_14278;
(statearr_14350[(26)] = inst_14167);

return statearr_14350;
})();
if(cljs.core.truth_(inst_14168)){
var statearr_14351_14411 = state_14278__$1;
(statearr_14351_14411[(1)] = (13));

} else {
var statearr_14352_14412 = state_14278__$1;
(statearr_14352_14412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (18))){
var inst_14203 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14353_14413 = state_14278__$1;
(statearr_14353_14413[(2)] = inst_14203);

(statearr_14353_14413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (42))){
var state_14278__$1 = state_14278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14278__$1,(45),dchan);
} else {
if((state_val_14279 === (37))){
var inst_14237 = (state_14278[(25)]);
var inst_14146 = (state_14278[(9)]);
var inst_14246 = (state_14278[(23)]);
var inst_14246__$1 = cljs.core.first.call(null,inst_14237);
var inst_14247 = cljs.core.async.put_BANG_.call(null,inst_14246__$1,inst_14146,done);
var state_14278__$1 = (function (){var statearr_14354 = state_14278;
(statearr_14354[(23)] = inst_14246__$1);

return statearr_14354;
})();
if(cljs.core.truth_(inst_14247)){
var statearr_14355_14414 = state_14278__$1;
(statearr_14355_14414[(1)] = (39));

} else {
var statearr_14356_14415 = state_14278__$1;
(statearr_14356_14415[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (8))){
var inst_14157 = (state_14278[(15)]);
var inst_14158 = (state_14278[(16)]);
var inst_14160 = (inst_14158 < inst_14157);
var inst_14161 = inst_14160;
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14161)){
var statearr_14357_14416 = state_14278__$1;
(statearr_14357_14416[(1)] = (10));

} else {
var statearr_14358_14417 = state_14278__$1;
(statearr_14358_14417[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___14363,cs,m,dchan,dctr,done))
;
return ((function (switch__13454__auto__,c__13544__auto___14363,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13455__auto__ = null;
var cljs$core$async$mult_$_state_machine__13455__auto____0 = (function (){
var statearr_14359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14359[(0)] = cljs$core$async$mult_$_state_machine__13455__auto__);

(statearr_14359[(1)] = (1));

return statearr_14359;
});
var cljs$core$async$mult_$_state_machine__13455__auto____1 = (function (state_14278){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14360){if((e14360 instanceof Object)){
var ex__13458__auto__ = e14360;
var statearr_14361_14418 = state_14278;
(statearr_14361_14418[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14419 = state_14278;
state_14278 = G__14419;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13455__auto__ = function(state_14278){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13455__auto____1.call(this,state_14278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13455__auto____0;
cljs$core$async$mult_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13455__auto____1;
return cljs$core$async$mult_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___14363,cs,m,dchan,dctr,done))
})();
var state__13546__auto__ = (function (){var statearr_14362 = f__13545__auto__.call(null);
(statearr_14362[(6)] = c__13544__auto___14363);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___14363,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14421 = arguments.length;
switch (G__14421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,ch);
} else {
var m__9097__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,ch);
} else {
var m__9097__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m);
} else {
var m__9097__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,state_map);
} else {
var m__9097__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9096__auto__ = (((m == null))?null:m);
var m__9097__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,m,mode);
} else {
var m__9097__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___14433 = arguments.length;
var i__9641__auto___14434 = (0);
while(true){
if((i__9641__auto___14434 < len__9640__auto___14433)){
args__9647__auto__.push((arguments[i__9641__auto___14434]));

var G__14435 = (i__9641__auto___14434 + (1));
i__9641__auto___14434 = G__14435;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((3) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14427){
var map__14428 = p__14427;
var map__14428__$1 = ((((!((map__14428 == null)))?((((map__14428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14428):map__14428);
var opts = map__14428__$1;
var statearr_14430_14436 = state;
(statearr_14430_14436[(1)] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__14428,map__14428__$1,opts){
return (function (val){
var statearr_14431_14437 = state;
(statearr_14431_14437[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14428,map__14428__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_14432_14438 = state;
(statearr_14432_14438[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14423){
var G__14424 = cljs.core.first.call(null,seq14423);
var seq14423__$1 = cljs.core.next.call(null,seq14423);
var G__14425 = cljs.core.first.call(null,seq14423__$1);
var seq14423__$2 = cljs.core.next.call(null,seq14423__$1);
var G__14426 = cljs.core.first.call(null,seq14423__$2);
var seq14423__$3 = cljs.core.next.call(null,seq14423__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14424,G__14425,G__14426,seq14423__$3);
});

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
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
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
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14439 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14440){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14440 = meta14440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14441,meta14440__$1){
var self__ = this;
var _14441__$1 = this;
return (new cljs.core.async.t_cljs$core$async14439(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14440__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14441){
var self__ = this;
var _14441__$1 = this;
return self__.meta14440;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14440","meta14440",1090302689,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14439";

cljs.core.async.t_cljs$core$async14439.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async14439");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14439 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14439(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14440){
return (new cljs.core.async.t_cljs$core$async14439(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14440));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14439(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13544__auto___14603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14543){
var state_val_14544 = (state_14543[(1)]);
if((state_val_14544 === (7))){
var inst_14458 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14545_14604 = state_14543__$1;
(statearr_14545_14604[(2)] = inst_14458);

(statearr_14545_14604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (20))){
var inst_14470 = (state_14543[(7)]);
var state_14543__$1 = state_14543;
var statearr_14546_14605 = state_14543__$1;
(statearr_14546_14605[(2)] = inst_14470);

(statearr_14546_14605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (27))){
var state_14543__$1 = state_14543;
var statearr_14547_14606 = state_14543__$1;
(statearr_14547_14606[(2)] = null);

(statearr_14547_14606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (1))){
var inst_14445 = (state_14543[(8)]);
var inst_14445__$1 = calc_state.call(null);
var inst_14447 = (inst_14445__$1 == null);
var inst_14448 = cljs.core.not.call(null,inst_14447);
var state_14543__$1 = (function (){var statearr_14548 = state_14543;
(statearr_14548[(8)] = inst_14445__$1);

return statearr_14548;
})();
if(inst_14448){
var statearr_14549_14607 = state_14543__$1;
(statearr_14549_14607[(1)] = (2));

} else {
var statearr_14550_14608 = state_14543__$1;
(statearr_14550_14608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (24))){
var inst_14503 = (state_14543[(9)]);
var inst_14494 = (state_14543[(10)]);
var inst_14517 = (state_14543[(11)]);
var inst_14517__$1 = inst_14494.call(null,inst_14503);
var state_14543__$1 = (function (){var statearr_14551 = state_14543;
(statearr_14551[(11)] = inst_14517__$1);

return statearr_14551;
})();
if(cljs.core.truth_(inst_14517__$1)){
var statearr_14552_14609 = state_14543__$1;
(statearr_14552_14609[(1)] = (29));

} else {
var statearr_14553_14610 = state_14543__$1;
(statearr_14553_14610[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (4))){
var inst_14461 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14461)){
var statearr_14554_14611 = state_14543__$1;
(statearr_14554_14611[(1)] = (8));

} else {
var statearr_14555_14612 = state_14543__$1;
(statearr_14555_14612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (15))){
var inst_14488 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14488)){
var statearr_14556_14613 = state_14543__$1;
(statearr_14556_14613[(1)] = (19));

} else {
var statearr_14557_14614 = state_14543__$1;
(statearr_14557_14614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (21))){
var inst_14493 = (state_14543[(12)]);
var inst_14493__$1 = (state_14543[(2)]);
var inst_14494 = cljs.core.get.call(null,inst_14493__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14495 = cljs.core.get.call(null,inst_14493__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14496 = cljs.core.get.call(null,inst_14493__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14543__$1 = (function (){var statearr_14558 = state_14543;
(statearr_14558[(10)] = inst_14494);

(statearr_14558[(12)] = inst_14493__$1);

(statearr_14558[(13)] = inst_14495);

return statearr_14558;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14543__$1,(22),inst_14496);
} else {
if((state_val_14544 === (31))){
var inst_14525 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14525)){
var statearr_14559_14615 = state_14543__$1;
(statearr_14559_14615[(1)] = (32));

} else {
var statearr_14560_14616 = state_14543__$1;
(statearr_14560_14616[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (32))){
var inst_14502 = (state_14543[(14)]);
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14543__$1,(35),out,inst_14502);
} else {
if((state_val_14544 === (33))){
var inst_14493 = (state_14543[(12)]);
var inst_14470 = inst_14493;
var state_14543__$1 = (function (){var statearr_14561 = state_14543;
(statearr_14561[(7)] = inst_14470);

return statearr_14561;
})();
var statearr_14562_14617 = state_14543__$1;
(statearr_14562_14617[(2)] = null);

(statearr_14562_14617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (13))){
var inst_14470 = (state_14543[(7)]);
var inst_14477 = inst_14470.cljs$lang$protocol_mask$partition0$;
var inst_14478 = (inst_14477 & (64));
var inst_14479 = inst_14470.cljs$core$ISeq$;
var inst_14480 = (cljs.core.PROTOCOL_SENTINEL === inst_14479);
var inst_14481 = (inst_14478) || (inst_14480);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14481)){
var statearr_14563_14618 = state_14543__$1;
(statearr_14563_14618[(1)] = (16));

} else {
var statearr_14564_14619 = state_14543__$1;
(statearr_14564_14619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (22))){
var inst_14503 = (state_14543[(9)]);
var inst_14502 = (state_14543[(14)]);
var inst_14501 = (state_14543[(2)]);
var inst_14502__$1 = cljs.core.nth.call(null,inst_14501,(0),null);
var inst_14503__$1 = cljs.core.nth.call(null,inst_14501,(1),null);
var inst_14504 = (inst_14502__$1 == null);
var inst_14505 = cljs.core._EQ_.call(null,inst_14503__$1,change);
var inst_14506 = (inst_14504) || (inst_14505);
var state_14543__$1 = (function (){var statearr_14565 = state_14543;
(statearr_14565[(9)] = inst_14503__$1);

(statearr_14565[(14)] = inst_14502__$1);

return statearr_14565;
})();
if(cljs.core.truth_(inst_14506)){
var statearr_14566_14620 = state_14543__$1;
(statearr_14566_14620[(1)] = (23));

} else {
var statearr_14567_14621 = state_14543__$1;
(statearr_14567_14621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (36))){
var inst_14493 = (state_14543[(12)]);
var inst_14470 = inst_14493;
var state_14543__$1 = (function (){var statearr_14568 = state_14543;
(statearr_14568[(7)] = inst_14470);

return statearr_14568;
})();
var statearr_14569_14622 = state_14543__$1;
(statearr_14569_14622[(2)] = null);

(statearr_14569_14622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (29))){
var inst_14517 = (state_14543[(11)]);
var state_14543__$1 = state_14543;
var statearr_14570_14623 = state_14543__$1;
(statearr_14570_14623[(2)] = inst_14517);

(statearr_14570_14623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (6))){
var state_14543__$1 = state_14543;
var statearr_14571_14624 = state_14543__$1;
(statearr_14571_14624[(2)] = false);

(statearr_14571_14624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (28))){
var inst_14513 = (state_14543[(2)]);
var inst_14514 = calc_state.call(null);
var inst_14470 = inst_14514;
var state_14543__$1 = (function (){var statearr_14572 = state_14543;
(statearr_14572[(7)] = inst_14470);

(statearr_14572[(15)] = inst_14513);

return statearr_14572;
})();
var statearr_14573_14625 = state_14543__$1;
(statearr_14573_14625[(2)] = null);

(statearr_14573_14625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (25))){
var inst_14539 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14574_14626 = state_14543__$1;
(statearr_14574_14626[(2)] = inst_14539);

(statearr_14574_14626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (34))){
var inst_14537 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14575_14627 = state_14543__$1;
(statearr_14575_14627[(2)] = inst_14537);

(statearr_14575_14627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (17))){
var state_14543__$1 = state_14543;
var statearr_14576_14628 = state_14543__$1;
(statearr_14576_14628[(2)] = false);

(statearr_14576_14628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (3))){
var state_14543__$1 = state_14543;
var statearr_14577_14629 = state_14543__$1;
(statearr_14577_14629[(2)] = false);

(statearr_14577_14629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (12))){
var inst_14541 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14543__$1,inst_14541);
} else {
if((state_val_14544 === (2))){
var inst_14445 = (state_14543[(8)]);
var inst_14450 = inst_14445.cljs$lang$protocol_mask$partition0$;
var inst_14451 = (inst_14450 & (64));
var inst_14452 = inst_14445.cljs$core$ISeq$;
var inst_14453 = (cljs.core.PROTOCOL_SENTINEL === inst_14452);
var inst_14454 = (inst_14451) || (inst_14453);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14454)){
var statearr_14578_14630 = state_14543__$1;
(statearr_14578_14630[(1)] = (5));

} else {
var statearr_14579_14631 = state_14543__$1;
(statearr_14579_14631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (23))){
var inst_14502 = (state_14543[(14)]);
var inst_14508 = (inst_14502 == null);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14508)){
var statearr_14580_14632 = state_14543__$1;
(statearr_14580_14632[(1)] = (26));

} else {
var statearr_14581_14633 = state_14543__$1;
(statearr_14581_14633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (35))){
var inst_14528 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14528)){
var statearr_14582_14634 = state_14543__$1;
(statearr_14582_14634[(1)] = (36));

} else {
var statearr_14583_14635 = state_14543__$1;
(statearr_14583_14635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (19))){
var inst_14470 = (state_14543[(7)]);
var inst_14490 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14470);
var state_14543__$1 = state_14543;
var statearr_14584_14636 = state_14543__$1;
(statearr_14584_14636[(2)] = inst_14490);

(statearr_14584_14636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (11))){
var inst_14470 = (state_14543[(7)]);
var inst_14474 = (inst_14470 == null);
var inst_14475 = cljs.core.not.call(null,inst_14474);
var state_14543__$1 = state_14543;
if(inst_14475){
var statearr_14585_14637 = state_14543__$1;
(statearr_14585_14637[(1)] = (13));

} else {
var statearr_14586_14638 = state_14543__$1;
(statearr_14586_14638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (9))){
var inst_14445 = (state_14543[(8)]);
var state_14543__$1 = state_14543;
var statearr_14587_14639 = state_14543__$1;
(statearr_14587_14639[(2)] = inst_14445);

(statearr_14587_14639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (5))){
var state_14543__$1 = state_14543;
var statearr_14588_14640 = state_14543__$1;
(statearr_14588_14640[(2)] = true);

(statearr_14588_14640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (14))){
var state_14543__$1 = state_14543;
var statearr_14589_14641 = state_14543__$1;
(statearr_14589_14641[(2)] = false);

(statearr_14589_14641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (26))){
var inst_14503 = (state_14543[(9)]);
var inst_14510 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14503);
var state_14543__$1 = state_14543;
var statearr_14590_14642 = state_14543__$1;
(statearr_14590_14642[(2)] = inst_14510);

(statearr_14590_14642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (16))){
var state_14543__$1 = state_14543;
var statearr_14591_14643 = state_14543__$1;
(statearr_14591_14643[(2)] = true);

(statearr_14591_14643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (38))){
var inst_14533 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14592_14644 = state_14543__$1;
(statearr_14592_14644[(2)] = inst_14533);

(statearr_14592_14644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (30))){
var inst_14503 = (state_14543[(9)]);
var inst_14494 = (state_14543[(10)]);
var inst_14495 = (state_14543[(13)]);
var inst_14520 = cljs.core.empty_QMARK_.call(null,inst_14494);
var inst_14521 = inst_14495.call(null,inst_14503);
var inst_14522 = cljs.core.not.call(null,inst_14521);
var inst_14523 = (inst_14520) && (inst_14522);
var state_14543__$1 = state_14543;
var statearr_14593_14645 = state_14543__$1;
(statearr_14593_14645[(2)] = inst_14523);

(statearr_14593_14645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (10))){
var inst_14445 = (state_14543[(8)]);
var inst_14466 = (state_14543[(2)]);
var inst_14467 = cljs.core.get.call(null,inst_14466,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14468 = cljs.core.get.call(null,inst_14466,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14469 = cljs.core.get.call(null,inst_14466,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14470 = inst_14445;
var state_14543__$1 = (function (){var statearr_14594 = state_14543;
(statearr_14594[(7)] = inst_14470);

(statearr_14594[(16)] = inst_14467);

(statearr_14594[(17)] = inst_14469);

(statearr_14594[(18)] = inst_14468);

return statearr_14594;
})();
var statearr_14595_14646 = state_14543__$1;
(statearr_14595_14646[(2)] = null);

(statearr_14595_14646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (18))){
var inst_14485 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14596_14647 = state_14543__$1;
(statearr_14596_14647[(2)] = inst_14485);

(statearr_14596_14647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (37))){
var state_14543__$1 = state_14543;
var statearr_14597_14648 = state_14543__$1;
(statearr_14597_14648[(2)] = null);

(statearr_14597_14648[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (8))){
var inst_14445 = (state_14543[(8)]);
var inst_14463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14445);
var state_14543__$1 = state_14543;
var statearr_14598_14649 = state_14543__$1;
(statearr_14598_14649[(2)] = inst_14463);

(statearr_14598_14649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13454__auto__,c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13455__auto__ = null;
var cljs$core$async$mix_$_state_machine__13455__auto____0 = (function (){
var statearr_14599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14599[(0)] = cljs$core$async$mix_$_state_machine__13455__auto__);

(statearr_14599[(1)] = (1));

return statearr_14599;
});
var cljs$core$async$mix_$_state_machine__13455__auto____1 = (function (state_14543){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14600){if((e14600 instanceof Object)){
var ex__13458__auto__ = e14600;
var statearr_14601_14650 = state_14543;
(statearr_14601_14650[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14651 = state_14543;
state_14543 = G__14651;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13455__auto__ = function(state_14543){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13455__auto____1.call(this,state_14543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13455__auto____0;
cljs$core$async$mix_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13455__auto____1;
return cljs$core$async$mix_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13546__auto__ = (function (){var statearr_14602 = f__13545__auto__.call(null);
(statearr_14602[(6)] = c__13544__auto___14603);

return statearr_14602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___14603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
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
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9096__auto__ = (((p == null))?null:p);
var m__9097__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9097__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9096__auto__ = (((p == null))?null:p);
var m__9097__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,p,v,ch);
} else {
var m__9097__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14653 = arguments.length;
switch (G__14653) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9096__auto__ = (((p == null))?null:p);
var m__9097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,p);
} else {
var m__9097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,p);
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
var x__9096__auto__ = (((p == null))?null:p);
var m__9097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,p,v);
} else {
var m__9097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14657 = arguments.length;
switch (G__14657) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8363__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8363__auto__,mults){
return (function (p1__14655_SHARP_){
if(cljs.core.truth_(p1__14655_SHARP_.call(null,topic))){
return p1__14655_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14655_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8363__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14659 = meta14659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14660,meta14659__$1){
var self__ = this;
var _14660__$1 = this;
return (new cljs.core.async.t_cljs$core$async14658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14659__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14660){
var self__ = this;
var _14660__$1 = this;
return self__.meta14659;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14659","meta14659",1273148628,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14658";

cljs.core.async.t_cljs$core$async14658.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async14658");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14658 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14659){
return (new cljs.core.async.t_cljs$core$async14658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14659));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13544__auto___14778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___14778,mults,ensure_mult,p){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___14778,mults,ensure_mult,p){
return (function (state_14732){
var state_val_14733 = (state_14732[(1)]);
if((state_val_14733 === (7))){
var inst_14728 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14734_14779 = state_14732__$1;
(statearr_14734_14779[(2)] = inst_14728);

(statearr_14734_14779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (20))){
var state_14732__$1 = state_14732;
var statearr_14735_14780 = state_14732__$1;
(statearr_14735_14780[(2)] = null);

(statearr_14735_14780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (1))){
var state_14732__$1 = state_14732;
var statearr_14736_14781 = state_14732__$1;
(statearr_14736_14781[(2)] = null);

(statearr_14736_14781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (24))){
var inst_14711 = (state_14732[(7)]);
var inst_14720 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14711);
var state_14732__$1 = state_14732;
var statearr_14737_14782 = state_14732__$1;
(statearr_14737_14782[(2)] = inst_14720);

(statearr_14737_14782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (4))){
var inst_14663 = (state_14732[(8)]);
var inst_14663__$1 = (state_14732[(2)]);
var inst_14664 = (inst_14663__$1 == null);
var state_14732__$1 = (function (){var statearr_14738 = state_14732;
(statearr_14738[(8)] = inst_14663__$1);

return statearr_14738;
})();
if(cljs.core.truth_(inst_14664)){
var statearr_14739_14783 = state_14732__$1;
(statearr_14739_14783[(1)] = (5));

} else {
var statearr_14740_14784 = state_14732__$1;
(statearr_14740_14784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (15))){
var inst_14705 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14741_14785 = state_14732__$1;
(statearr_14741_14785[(2)] = inst_14705);

(statearr_14741_14785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (21))){
var inst_14725 = (state_14732[(2)]);
var state_14732__$1 = (function (){var statearr_14742 = state_14732;
(statearr_14742[(9)] = inst_14725);

return statearr_14742;
})();
var statearr_14743_14786 = state_14732__$1;
(statearr_14743_14786[(2)] = null);

(statearr_14743_14786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (13))){
var inst_14687 = (state_14732[(10)]);
var inst_14689 = cljs.core.chunked_seq_QMARK_.call(null,inst_14687);
var state_14732__$1 = state_14732;
if(inst_14689){
var statearr_14744_14787 = state_14732__$1;
(statearr_14744_14787[(1)] = (16));

} else {
var statearr_14745_14788 = state_14732__$1;
(statearr_14745_14788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (22))){
var inst_14717 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
if(cljs.core.truth_(inst_14717)){
var statearr_14746_14789 = state_14732__$1;
(statearr_14746_14789[(1)] = (23));

} else {
var statearr_14747_14790 = state_14732__$1;
(statearr_14747_14790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (6))){
var inst_14713 = (state_14732[(11)]);
var inst_14711 = (state_14732[(7)]);
var inst_14663 = (state_14732[(8)]);
var inst_14711__$1 = topic_fn.call(null,inst_14663);
var inst_14712 = cljs.core.deref.call(null,mults);
var inst_14713__$1 = cljs.core.get.call(null,inst_14712,inst_14711__$1);
var state_14732__$1 = (function (){var statearr_14748 = state_14732;
(statearr_14748[(11)] = inst_14713__$1);

(statearr_14748[(7)] = inst_14711__$1);

return statearr_14748;
})();
if(cljs.core.truth_(inst_14713__$1)){
var statearr_14749_14791 = state_14732__$1;
(statearr_14749_14791[(1)] = (19));

} else {
var statearr_14750_14792 = state_14732__$1;
(statearr_14750_14792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (25))){
var inst_14722 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14751_14793 = state_14732__$1;
(statearr_14751_14793[(2)] = inst_14722);

(statearr_14751_14793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (17))){
var inst_14687 = (state_14732[(10)]);
var inst_14696 = cljs.core.first.call(null,inst_14687);
var inst_14697 = cljs.core.async.muxch_STAR_.call(null,inst_14696);
var inst_14698 = cljs.core.async.close_BANG_.call(null,inst_14697);
var inst_14699 = cljs.core.next.call(null,inst_14687);
var inst_14673 = inst_14699;
var inst_14674 = null;
var inst_14675 = (0);
var inst_14676 = (0);
var state_14732__$1 = (function (){var statearr_14752 = state_14732;
(statearr_14752[(12)] = inst_14674);

(statearr_14752[(13)] = inst_14675);

(statearr_14752[(14)] = inst_14676);

(statearr_14752[(15)] = inst_14698);

(statearr_14752[(16)] = inst_14673);

return statearr_14752;
})();
var statearr_14753_14794 = state_14732__$1;
(statearr_14753_14794[(2)] = null);

(statearr_14753_14794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (3))){
var inst_14730 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14732__$1,inst_14730);
} else {
if((state_val_14733 === (12))){
var inst_14707 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14754_14795 = state_14732__$1;
(statearr_14754_14795[(2)] = inst_14707);

(statearr_14754_14795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (2))){
var state_14732__$1 = state_14732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14732__$1,(4),ch);
} else {
if((state_val_14733 === (23))){
var state_14732__$1 = state_14732;
var statearr_14755_14796 = state_14732__$1;
(statearr_14755_14796[(2)] = null);

(statearr_14755_14796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (19))){
var inst_14713 = (state_14732[(11)]);
var inst_14663 = (state_14732[(8)]);
var inst_14715 = cljs.core.async.muxch_STAR_.call(null,inst_14713);
var state_14732__$1 = state_14732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14732__$1,(22),inst_14715,inst_14663);
} else {
if((state_val_14733 === (11))){
var inst_14687 = (state_14732[(10)]);
var inst_14673 = (state_14732[(16)]);
var inst_14687__$1 = cljs.core.seq.call(null,inst_14673);
var state_14732__$1 = (function (){var statearr_14756 = state_14732;
(statearr_14756[(10)] = inst_14687__$1);

return statearr_14756;
})();
if(inst_14687__$1){
var statearr_14757_14797 = state_14732__$1;
(statearr_14757_14797[(1)] = (13));

} else {
var statearr_14758_14798 = state_14732__$1;
(statearr_14758_14798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (9))){
var inst_14709 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14759_14799 = state_14732__$1;
(statearr_14759_14799[(2)] = inst_14709);

(statearr_14759_14799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (5))){
var inst_14670 = cljs.core.deref.call(null,mults);
var inst_14671 = cljs.core.vals.call(null,inst_14670);
var inst_14672 = cljs.core.seq.call(null,inst_14671);
var inst_14673 = inst_14672;
var inst_14674 = null;
var inst_14675 = (0);
var inst_14676 = (0);
var state_14732__$1 = (function (){var statearr_14760 = state_14732;
(statearr_14760[(12)] = inst_14674);

(statearr_14760[(13)] = inst_14675);

(statearr_14760[(14)] = inst_14676);

(statearr_14760[(16)] = inst_14673);

return statearr_14760;
})();
var statearr_14761_14800 = state_14732__$1;
(statearr_14761_14800[(2)] = null);

(statearr_14761_14800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (14))){
var state_14732__$1 = state_14732;
var statearr_14765_14801 = state_14732__$1;
(statearr_14765_14801[(2)] = null);

(statearr_14765_14801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (16))){
var inst_14687 = (state_14732[(10)]);
var inst_14691 = cljs.core.chunk_first.call(null,inst_14687);
var inst_14692 = cljs.core.chunk_rest.call(null,inst_14687);
var inst_14693 = cljs.core.count.call(null,inst_14691);
var inst_14673 = inst_14692;
var inst_14674 = inst_14691;
var inst_14675 = inst_14693;
var inst_14676 = (0);
var state_14732__$1 = (function (){var statearr_14766 = state_14732;
(statearr_14766[(12)] = inst_14674);

(statearr_14766[(13)] = inst_14675);

(statearr_14766[(14)] = inst_14676);

(statearr_14766[(16)] = inst_14673);

return statearr_14766;
})();
var statearr_14767_14802 = state_14732__$1;
(statearr_14767_14802[(2)] = null);

(statearr_14767_14802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (10))){
var inst_14674 = (state_14732[(12)]);
var inst_14675 = (state_14732[(13)]);
var inst_14676 = (state_14732[(14)]);
var inst_14673 = (state_14732[(16)]);
var inst_14681 = cljs.core._nth.call(null,inst_14674,inst_14676);
var inst_14682 = cljs.core.async.muxch_STAR_.call(null,inst_14681);
var inst_14683 = cljs.core.async.close_BANG_.call(null,inst_14682);
var inst_14684 = (inst_14676 + (1));
var tmp14762 = inst_14674;
var tmp14763 = inst_14675;
var tmp14764 = inst_14673;
var inst_14673__$1 = tmp14764;
var inst_14674__$1 = tmp14762;
var inst_14675__$1 = tmp14763;
var inst_14676__$1 = inst_14684;
var state_14732__$1 = (function (){var statearr_14768 = state_14732;
(statearr_14768[(12)] = inst_14674__$1);

(statearr_14768[(17)] = inst_14683);

(statearr_14768[(13)] = inst_14675__$1);

(statearr_14768[(14)] = inst_14676__$1);

(statearr_14768[(16)] = inst_14673__$1);

return statearr_14768;
})();
var statearr_14769_14803 = state_14732__$1;
(statearr_14769_14803[(2)] = null);

(statearr_14769_14803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (18))){
var inst_14702 = (state_14732[(2)]);
var state_14732__$1 = state_14732;
var statearr_14770_14804 = state_14732__$1;
(statearr_14770_14804[(2)] = inst_14702);

(statearr_14770_14804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14733 === (8))){
var inst_14675 = (state_14732[(13)]);
var inst_14676 = (state_14732[(14)]);
var inst_14678 = (inst_14676 < inst_14675);
var inst_14679 = inst_14678;
var state_14732__$1 = state_14732;
if(cljs.core.truth_(inst_14679)){
var statearr_14771_14805 = state_14732__$1;
(statearr_14771_14805[(1)] = (10));

} else {
var statearr_14772_14806 = state_14732__$1;
(statearr_14772_14806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___14778,mults,ensure_mult,p))
;
return ((function (switch__13454__auto__,c__13544__auto___14778,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_14773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14773[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_14773[(1)] = (1));

return statearr_14773;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14732){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14774){if((e14774 instanceof Object)){
var ex__13458__auto__ = e14774;
var statearr_14775_14807 = state_14732;
(statearr_14775_14807[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14808 = state_14732;
state_14732 = G__14808;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___14778,mults,ensure_mult,p))
})();
var state__13546__auto__ = (function (){var statearr_14776 = f__13545__auto__.call(null);
(statearr_14776[(6)] = c__13544__auto___14778);

return statearr_14776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___14778,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14810 = arguments.length;
switch (G__14810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14813 = arguments.length;
switch (G__14813) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14816 = arguments.length;
switch (G__14816) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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
var c__13544__auto___14883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (7))){
var state_14855__$1 = state_14855;
var statearr_14857_14884 = state_14855__$1;
(statearr_14857_14884[(2)] = null);

(statearr_14857_14884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (1))){
var state_14855__$1 = state_14855;
var statearr_14858_14885 = state_14855__$1;
(statearr_14858_14885[(2)] = null);

(statearr_14858_14885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (4))){
var inst_14819 = (state_14855[(7)]);
var inst_14821 = (inst_14819 < cnt);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14821)){
var statearr_14859_14886 = state_14855__$1;
(statearr_14859_14886[(1)] = (6));

} else {
var statearr_14860_14887 = state_14855__$1;
(statearr_14860_14887[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (15))){
var inst_14851 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14861_14888 = state_14855__$1;
(statearr_14861_14888[(2)] = inst_14851);

(statearr_14861_14888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (13))){
var inst_14844 = cljs.core.async.close_BANG_.call(null,out);
var state_14855__$1 = state_14855;
var statearr_14862_14889 = state_14855__$1;
(statearr_14862_14889[(2)] = inst_14844);

(statearr_14862_14889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (6))){
var state_14855__$1 = state_14855;
var statearr_14863_14890 = state_14855__$1;
(statearr_14863_14890[(2)] = null);

(statearr_14863_14890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (3))){
var inst_14853 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14853);
} else {
if((state_val_14856 === (12))){
var inst_14841 = (state_14855[(8)]);
var inst_14841__$1 = (state_14855[(2)]);
var inst_14842 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14841__$1);
var state_14855__$1 = (function (){var statearr_14864 = state_14855;
(statearr_14864[(8)] = inst_14841__$1);

return statearr_14864;
})();
if(cljs.core.truth_(inst_14842)){
var statearr_14865_14891 = state_14855__$1;
(statearr_14865_14891[(1)] = (13));

} else {
var statearr_14866_14892 = state_14855__$1;
(statearr_14866_14892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (2))){
var inst_14818 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14819 = (0);
var state_14855__$1 = (function (){var statearr_14867 = state_14855;
(statearr_14867[(7)] = inst_14819);

(statearr_14867[(9)] = inst_14818);

return statearr_14867;
})();
var statearr_14868_14893 = state_14855__$1;
(statearr_14868_14893[(2)] = null);

(statearr_14868_14893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (11))){
var inst_14819 = (state_14855[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14855,(10),Object,null,(9));
var inst_14828 = chs__$1.call(null,inst_14819);
var inst_14829 = done.call(null,inst_14819);
var inst_14830 = cljs.core.async.take_BANG_.call(null,inst_14828,inst_14829);
var state_14855__$1 = state_14855;
var statearr_14869_14894 = state_14855__$1;
(statearr_14869_14894[(2)] = inst_14830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (9))){
var inst_14819 = (state_14855[(7)]);
var inst_14832 = (state_14855[(2)]);
var inst_14833 = (inst_14819 + (1));
var inst_14819__$1 = inst_14833;
var state_14855__$1 = (function (){var statearr_14870 = state_14855;
(statearr_14870[(7)] = inst_14819__$1);

(statearr_14870[(10)] = inst_14832);

return statearr_14870;
})();
var statearr_14871_14895 = state_14855__$1;
(statearr_14871_14895[(2)] = null);

(statearr_14871_14895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (5))){
var inst_14839 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14872 = state_14855;
(statearr_14872[(11)] = inst_14839);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(12),dchan);
} else {
if((state_val_14856 === (14))){
var inst_14841 = (state_14855[(8)]);
var inst_14846 = cljs.core.apply.call(null,f,inst_14841);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,(16),out,inst_14846);
} else {
if((state_val_14856 === (16))){
var inst_14848 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14873 = state_14855;
(statearr_14873[(12)] = inst_14848);

return statearr_14873;
})();
var statearr_14874_14896 = state_14855__$1;
(statearr_14874_14896[(2)] = null);

(statearr_14874_14896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (10))){
var inst_14823 = (state_14855[(2)]);
var inst_14824 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14855__$1 = (function (){var statearr_14875 = state_14855;
(statearr_14875[(13)] = inst_14823);

return statearr_14875;
})();
var statearr_14876_14897 = state_14855__$1;
(statearr_14876_14897[(2)] = inst_14824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (8))){
var inst_14837 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14877_14898 = state_14855__$1;
(statearr_14877_14898[(2)] = inst_14837);

(statearr_14877_14898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13454__auto__,c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_14878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14878[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_14878[(1)] = (1));

return statearr_14878;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14855){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14879){if((e14879 instanceof Object)){
var ex__13458__auto__ = e14879;
var statearr_14880_14899 = state_14855;
(statearr_14880_14899[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14900 = state_14855;
state_14855 = G__14900;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13546__auto__ = (function (){var statearr_14881 = f__13545__auto__.call(null);
(statearr_14881[(6)] = c__13544__auto___14883);

return statearr_14881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___14883,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14903 = arguments.length;
switch (G__14903) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___14957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___14957,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___14957,out){
return (function (state_14935){
var state_val_14936 = (state_14935[(1)]);
if((state_val_14936 === (7))){
var inst_14915 = (state_14935[(7)]);
var inst_14914 = (state_14935[(8)]);
var inst_14914__$1 = (state_14935[(2)]);
var inst_14915__$1 = cljs.core.nth.call(null,inst_14914__$1,(0),null);
var inst_14916 = cljs.core.nth.call(null,inst_14914__$1,(1),null);
var inst_14917 = (inst_14915__$1 == null);
var state_14935__$1 = (function (){var statearr_14937 = state_14935;
(statearr_14937[(7)] = inst_14915__$1);

(statearr_14937[(8)] = inst_14914__$1);

(statearr_14937[(9)] = inst_14916);

return statearr_14937;
})();
if(cljs.core.truth_(inst_14917)){
var statearr_14938_14958 = state_14935__$1;
(statearr_14938_14958[(1)] = (8));

} else {
var statearr_14939_14959 = state_14935__$1;
(statearr_14939_14959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (1))){
var inst_14904 = cljs.core.vec.call(null,chs);
var inst_14905 = inst_14904;
var state_14935__$1 = (function (){var statearr_14940 = state_14935;
(statearr_14940[(10)] = inst_14905);

return statearr_14940;
})();
var statearr_14941_14960 = state_14935__$1;
(statearr_14941_14960[(2)] = null);

(statearr_14941_14960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (4))){
var inst_14905 = (state_14935[(10)]);
var state_14935__$1 = state_14935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14935__$1,(7),inst_14905);
} else {
if((state_val_14936 === (6))){
var inst_14931 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14942_14961 = state_14935__$1;
(statearr_14942_14961[(2)] = inst_14931);

(statearr_14942_14961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (3))){
var inst_14933 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else {
if((state_val_14936 === (2))){
var inst_14905 = (state_14935[(10)]);
var inst_14907 = cljs.core.count.call(null,inst_14905);
var inst_14908 = (inst_14907 > (0));
var state_14935__$1 = state_14935;
if(cljs.core.truth_(inst_14908)){
var statearr_14944_14962 = state_14935__$1;
(statearr_14944_14962[(1)] = (4));

} else {
var statearr_14945_14963 = state_14935__$1;
(statearr_14945_14963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (11))){
var inst_14905 = (state_14935[(10)]);
var inst_14924 = (state_14935[(2)]);
var tmp14943 = inst_14905;
var inst_14905__$1 = tmp14943;
var state_14935__$1 = (function (){var statearr_14946 = state_14935;
(statearr_14946[(10)] = inst_14905__$1);

(statearr_14946[(11)] = inst_14924);

return statearr_14946;
})();
var statearr_14947_14964 = state_14935__$1;
(statearr_14947_14964[(2)] = null);

(statearr_14947_14964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (9))){
var inst_14915 = (state_14935[(7)]);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(11),out,inst_14915);
} else {
if((state_val_14936 === (5))){
var inst_14929 = cljs.core.async.close_BANG_.call(null,out);
var state_14935__$1 = state_14935;
var statearr_14948_14965 = state_14935__$1;
(statearr_14948_14965[(2)] = inst_14929);

(statearr_14948_14965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (10))){
var inst_14927 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14949_14966 = state_14935__$1;
(statearr_14949_14966[(2)] = inst_14927);

(statearr_14949_14966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (8))){
var inst_14915 = (state_14935[(7)]);
var inst_14905 = (state_14935[(10)]);
var inst_14914 = (state_14935[(8)]);
var inst_14916 = (state_14935[(9)]);
var inst_14919 = (function (){var cs = inst_14905;
var vec__14910 = inst_14914;
var v = inst_14915;
var c = inst_14916;
return ((function (cs,vec__14910,v,c,inst_14915,inst_14905,inst_14914,inst_14916,state_val_14936,c__13544__auto___14957,out){
return (function (p1__14901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14901_SHARP_);
});
;})(cs,vec__14910,v,c,inst_14915,inst_14905,inst_14914,inst_14916,state_val_14936,c__13544__auto___14957,out))
})();
var inst_14920 = cljs.core.filterv.call(null,inst_14919,inst_14905);
var inst_14905__$1 = inst_14920;
var state_14935__$1 = (function (){var statearr_14950 = state_14935;
(statearr_14950[(10)] = inst_14905__$1);

return statearr_14950;
})();
var statearr_14951_14967 = state_14935__$1;
(statearr_14951_14967[(2)] = null);

(statearr_14951_14967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___14957,out))
;
return ((function (switch__13454__auto__,c__13544__auto___14957,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_14952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14952[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_14952[(1)] = (1));

return statearr_14952;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14935){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e14953){if((e14953 instanceof Object)){
var ex__13458__auto__ = e14953;
var statearr_14954_14968 = state_14935;
(statearr_14954_14968[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14969 = state_14935;
state_14935 = G__14969;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___14957,out))
})();
var state__13546__auto__ = (function (){var statearr_14955 = f__13545__auto__.call(null);
(statearr_14955[(6)] = c__13544__auto___14957);

return statearr_14955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___14957,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14971 = arguments.length;
switch (G__14971) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___15016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___15016,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___15016,out){
return (function (state_14995){
var state_val_14996 = (state_14995[(1)]);
if((state_val_14996 === (7))){
var inst_14977 = (state_14995[(7)]);
var inst_14977__$1 = (state_14995[(2)]);
var inst_14978 = (inst_14977__$1 == null);
var inst_14979 = cljs.core.not.call(null,inst_14978);
var state_14995__$1 = (function (){var statearr_14997 = state_14995;
(statearr_14997[(7)] = inst_14977__$1);

return statearr_14997;
})();
if(inst_14979){
var statearr_14998_15017 = state_14995__$1;
(statearr_14998_15017[(1)] = (8));

} else {
var statearr_14999_15018 = state_14995__$1;
(statearr_14999_15018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (1))){
var inst_14972 = (0);
var state_14995__$1 = (function (){var statearr_15000 = state_14995;
(statearr_15000[(8)] = inst_14972);

return statearr_15000;
})();
var statearr_15001_15019 = state_14995__$1;
(statearr_15001_15019[(2)] = null);

(statearr_15001_15019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (4))){
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14995__$1,(7),ch);
} else {
if((state_val_14996 === (6))){
var inst_14990 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
var statearr_15002_15020 = state_14995__$1;
(statearr_15002_15020[(2)] = inst_14990);

(statearr_15002_15020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (3))){
var inst_14992 = (state_14995[(2)]);
var inst_14993 = cljs.core.async.close_BANG_.call(null,out);
var state_14995__$1 = (function (){var statearr_15003 = state_14995;
(statearr_15003[(9)] = inst_14992);

return statearr_15003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14995__$1,inst_14993);
} else {
if((state_val_14996 === (2))){
var inst_14972 = (state_14995[(8)]);
var inst_14974 = (inst_14972 < n);
var state_14995__$1 = state_14995;
if(cljs.core.truth_(inst_14974)){
var statearr_15004_15021 = state_14995__$1;
(statearr_15004_15021[(1)] = (4));

} else {
var statearr_15005_15022 = state_14995__$1;
(statearr_15005_15022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (11))){
var inst_14972 = (state_14995[(8)]);
var inst_14982 = (state_14995[(2)]);
var inst_14983 = (inst_14972 + (1));
var inst_14972__$1 = inst_14983;
var state_14995__$1 = (function (){var statearr_15006 = state_14995;
(statearr_15006[(10)] = inst_14982);

(statearr_15006[(8)] = inst_14972__$1);

return statearr_15006;
})();
var statearr_15007_15023 = state_14995__$1;
(statearr_15007_15023[(2)] = null);

(statearr_15007_15023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (9))){
var state_14995__$1 = state_14995;
var statearr_15008_15024 = state_14995__$1;
(statearr_15008_15024[(2)] = null);

(statearr_15008_15024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (5))){
var state_14995__$1 = state_14995;
var statearr_15009_15025 = state_14995__$1;
(statearr_15009_15025[(2)] = null);

(statearr_15009_15025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (10))){
var inst_14987 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
var statearr_15010_15026 = state_14995__$1;
(statearr_15010_15026[(2)] = inst_14987);

(statearr_15010_15026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (8))){
var inst_14977 = (state_14995[(7)]);
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14995__$1,(11),out,inst_14977);
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
});})(c__13544__auto___15016,out))
;
return ((function (switch__13454__auto__,c__13544__auto___15016,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15011[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15011[(1)] = (1));

return statearr_15011;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14995){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_14995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15012){if((e15012 instanceof Object)){
var ex__13458__auto__ = e15012;
var statearr_15013_15027 = state_14995;
(statearr_15013_15027[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15028 = state_14995;
state_14995 = G__15028;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___15016,out))
})();
var state__13546__auto__ = (function (){var statearr_15014 = f__13545__auto__.call(null);
(statearr_15014[(6)] = c__13544__auto___15016);

return statearr_15014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___15016,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15030 = (function (f,ch,meta15031){
this.f = f;
this.ch = ch;
this.meta15031 = meta15031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15032,meta15031__$1){
var self__ = this;
var _15032__$1 = this;
return (new cljs.core.async.t_cljs$core$async15030(self__.f,self__.ch,meta15031__$1));
});

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15032){
var self__ = this;
var _15032__$1 = this;
return self__.meta15031;
});

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15033 = (function (f,ch,meta15031,_,fn1,meta15034){
this.f = f;
this.ch = ch;
this.meta15031 = meta15031;
this._ = _;
this.fn1 = fn1;
this.meta15034 = meta15034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15035,meta15034__$1){
var self__ = this;
var _15035__$1 = this;
return (new cljs.core.async.t_cljs$core$async15033(self__.f,self__.ch,self__.meta15031,self__._,self__.fn1,meta15034__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15035){
var self__ = this;
var _15035__$1 = this;
return self__.meta15034;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15029_SHARP_){
return f1.call(null,(((p1__15029_SHARP_ == null))?null:self__.f.call(null,p1__15029_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15031","meta15031",1638250678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15030","cljs.core.async/t_cljs$core$async15030",-1090945427,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15034","meta15034",-1268806403,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15033";

cljs.core.async.t_cljs$core$async15033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async15033");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15033 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15033(f__$1,ch__$1,meta15031__$1,___$2,fn1__$1,meta15034){
return (new cljs.core.async.t_cljs$core$async15033(f__$1,ch__$1,meta15031__$1,___$2,fn1__$1,meta15034));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15033(self__.f,self__.ch,self__.meta15031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8351__auto__ = ret;
if(cljs.core.truth_(and__8351__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8351__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15031","meta15031",1638250678,null)], null);
});

cljs.core.async.t_cljs$core$async15030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15030";

cljs.core.async.t_cljs$core$async15030.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async15030");
});

cljs.core.async.__GT_t_cljs$core$async15030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15030(f__$1,ch__$1,meta15031){
return (new cljs.core.async.t_cljs$core$async15030(f__$1,ch__$1,meta15031));
});

}

return (new cljs.core.async.t_cljs$core$async15030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15036 = (function (f,ch,meta15037){
this.f = f;
this.ch = ch;
this.meta15037 = meta15037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15038,meta15037__$1){
var self__ = this;
var _15038__$1 = this;
return (new cljs.core.async.t_cljs$core$async15036(self__.f,self__.ch,meta15037__$1));
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15038){
var self__ = this;
var _15038__$1 = this;
return self__.meta15037;
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15037","meta15037",449764612,null)], null);
});

cljs.core.async.t_cljs$core$async15036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15036";

cljs.core.async.t_cljs$core$async15036.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async15036");
});

cljs.core.async.__GT_t_cljs$core$async15036 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15036(f__$1,ch__$1,meta15037){
return (new cljs.core.async.t_cljs$core$async15036(f__$1,ch__$1,meta15037));
});

}

return (new cljs.core.async.t_cljs$core$async15036(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15039 = (function (p,ch,meta15040){
this.p = p;
this.ch = ch;
this.meta15040 = meta15040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15041,meta15040__$1){
var self__ = this;
var _15041__$1 = this;
return (new cljs.core.async.t_cljs$core$async15039(self__.p,self__.ch,meta15040__$1));
});

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15041){
var self__ = this;
var _15041__$1 = this;
return self__.meta15040;
});

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15040","meta15040",-1586635989,null)], null);
});

cljs.core.async.t_cljs$core$async15039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15039";

cljs.core.async.t_cljs$core$async15039.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.core.async/t_cljs$core$async15039");
});

cljs.core.async.__GT_t_cljs$core$async15039 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15039(p__$1,ch__$1,meta15040){
return (new cljs.core.async.t_cljs$core$async15039(p__$1,ch__$1,meta15040));
});

}

return (new cljs.core.async.t_cljs$core$async15039(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15043 = arguments.length;
switch (G__15043) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___15083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___15083,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___15083,out){
return (function (state_15064){
var state_val_15065 = (state_15064[(1)]);
if((state_val_15065 === (7))){
var inst_15060 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15066_15084 = state_15064__$1;
(statearr_15066_15084[(2)] = inst_15060);

(statearr_15066_15084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (1))){
var state_15064__$1 = state_15064;
var statearr_15067_15085 = state_15064__$1;
(statearr_15067_15085[(2)] = null);

(statearr_15067_15085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (4))){
var inst_15046 = (state_15064[(7)]);
var inst_15046__$1 = (state_15064[(2)]);
var inst_15047 = (inst_15046__$1 == null);
var state_15064__$1 = (function (){var statearr_15068 = state_15064;
(statearr_15068[(7)] = inst_15046__$1);

return statearr_15068;
})();
if(cljs.core.truth_(inst_15047)){
var statearr_15069_15086 = state_15064__$1;
(statearr_15069_15086[(1)] = (5));

} else {
var statearr_15070_15087 = state_15064__$1;
(statearr_15070_15087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (6))){
var inst_15046 = (state_15064[(7)]);
var inst_15051 = p.call(null,inst_15046);
var state_15064__$1 = state_15064;
if(cljs.core.truth_(inst_15051)){
var statearr_15071_15088 = state_15064__$1;
(statearr_15071_15088[(1)] = (8));

} else {
var statearr_15072_15089 = state_15064__$1;
(statearr_15072_15089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (3))){
var inst_15062 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15064__$1,inst_15062);
} else {
if((state_val_15065 === (2))){
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15064__$1,(4),ch);
} else {
if((state_val_15065 === (11))){
var inst_15054 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15073_15090 = state_15064__$1;
(statearr_15073_15090[(2)] = inst_15054);

(statearr_15073_15090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (9))){
var state_15064__$1 = state_15064;
var statearr_15074_15091 = state_15064__$1;
(statearr_15074_15091[(2)] = null);

(statearr_15074_15091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (5))){
var inst_15049 = cljs.core.async.close_BANG_.call(null,out);
var state_15064__$1 = state_15064;
var statearr_15075_15092 = state_15064__$1;
(statearr_15075_15092[(2)] = inst_15049);

(statearr_15075_15092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (10))){
var inst_15057 = (state_15064[(2)]);
var state_15064__$1 = (function (){var statearr_15076 = state_15064;
(statearr_15076[(8)] = inst_15057);

return statearr_15076;
})();
var statearr_15077_15093 = state_15064__$1;
(statearr_15077_15093[(2)] = null);

(statearr_15077_15093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (8))){
var inst_15046 = (state_15064[(7)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15064__$1,(11),out,inst_15046);
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
});})(c__13544__auto___15083,out))
;
return ((function (switch__13454__auto__,c__13544__auto___15083,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15078 = [null,null,null,null,null,null,null,null,null];
(statearr_15078[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15078[(1)] = (1));

return statearr_15078;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15064){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_15064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15079){if((e15079 instanceof Object)){
var ex__13458__auto__ = e15079;
var statearr_15080_15094 = state_15064;
(statearr_15080_15094[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15095 = state_15064;
state_15064 = G__15095;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___15083,out))
})();
var state__13546__auto__ = (function (){var statearr_15081 = f__13545__auto__.call(null);
(statearr_15081[(6)] = c__13544__auto___15083);

return statearr_15081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___15083,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15097 = arguments.length;
switch (G__15097) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_15160){
var state_val_15161 = (state_15160[(1)]);
if((state_val_15161 === (7))){
var inst_15156 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15162_15200 = state_15160__$1;
(statearr_15162_15200[(2)] = inst_15156);

(statearr_15162_15200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (20))){
var inst_15126 = (state_15160[(7)]);
var inst_15137 = (state_15160[(2)]);
var inst_15138 = cljs.core.next.call(null,inst_15126);
var inst_15112 = inst_15138;
var inst_15113 = null;
var inst_15114 = (0);
var inst_15115 = (0);
var state_15160__$1 = (function (){var statearr_15163 = state_15160;
(statearr_15163[(8)] = inst_15137);

(statearr_15163[(9)] = inst_15112);

(statearr_15163[(10)] = inst_15114);

(statearr_15163[(11)] = inst_15115);

(statearr_15163[(12)] = inst_15113);

return statearr_15163;
})();
var statearr_15164_15201 = state_15160__$1;
(statearr_15164_15201[(2)] = null);

(statearr_15164_15201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (1))){
var state_15160__$1 = state_15160;
var statearr_15165_15202 = state_15160__$1;
(statearr_15165_15202[(2)] = null);

(statearr_15165_15202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (4))){
var inst_15101 = (state_15160[(13)]);
var inst_15101__$1 = (state_15160[(2)]);
var inst_15102 = (inst_15101__$1 == null);
var state_15160__$1 = (function (){var statearr_15166 = state_15160;
(statearr_15166[(13)] = inst_15101__$1);

return statearr_15166;
})();
if(cljs.core.truth_(inst_15102)){
var statearr_15167_15203 = state_15160__$1;
(statearr_15167_15203[(1)] = (5));

} else {
var statearr_15168_15204 = state_15160__$1;
(statearr_15168_15204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (15))){
var state_15160__$1 = state_15160;
var statearr_15172_15205 = state_15160__$1;
(statearr_15172_15205[(2)] = null);

(statearr_15172_15205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (21))){
var state_15160__$1 = state_15160;
var statearr_15173_15206 = state_15160__$1;
(statearr_15173_15206[(2)] = null);

(statearr_15173_15206[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (13))){
var inst_15112 = (state_15160[(9)]);
var inst_15114 = (state_15160[(10)]);
var inst_15115 = (state_15160[(11)]);
var inst_15113 = (state_15160[(12)]);
var inst_15122 = (state_15160[(2)]);
var inst_15123 = (inst_15115 + (1));
var tmp15169 = inst_15112;
var tmp15170 = inst_15114;
var tmp15171 = inst_15113;
var inst_15112__$1 = tmp15169;
var inst_15113__$1 = tmp15171;
var inst_15114__$1 = tmp15170;
var inst_15115__$1 = inst_15123;
var state_15160__$1 = (function (){var statearr_15174 = state_15160;
(statearr_15174[(14)] = inst_15122);

(statearr_15174[(9)] = inst_15112__$1);

(statearr_15174[(10)] = inst_15114__$1);

(statearr_15174[(11)] = inst_15115__$1);

(statearr_15174[(12)] = inst_15113__$1);

return statearr_15174;
})();
var statearr_15175_15207 = state_15160__$1;
(statearr_15175_15207[(2)] = null);

(statearr_15175_15207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (22))){
var state_15160__$1 = state_15160;
var statearr_15176_15208 = state_15160__$1;
(statearr_15176_15208[(2)] = null);

(statearr_15176_15208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (6))){
var inst_15101 = (state_15160[(13)]);
var inst_15110 = f.call(null,inst_15101);
var inst_15111 = cljs.core.seq.call(null,inst_15110);
var inst_15112 = inst_15111;
var inst_15113 = null;
var inst_15114 = (0);
var inst_15115 = (0);
var state_15160__$1 = (function (){var statearr_15177 = state_15160;
(statearr_15177[(9)] = inst_15112);

(statearr_15177[(10)] = inst_15114);

(statearr_15177[(11)] = inst_15115);

(statearr_15177[(12)] = inst_15113);

return statearr_15177;
})();
var statearr_15178_15209 = state_15160__$1;
(statearr_15178_15209[(2)] = null);

(statearr_15178_15209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (17))){
var inst_15126 = (state_15160[(7)]);
var inst_15130 = cljs.core.chunk_first.call(null,inst_15126);
var inst_15131 = cljs.core.chunk_rest.call(null,inst_15126);
var inst_15132 = cljs.core.count.call(null,inst_15130);
var inst_15112 = inst_15131;
var inst_15113 = inst_15130;
var inst_15114 = inst_15132;
var inst_15115 = (0);
var state_15160__$1 = (function (){var statearr_15179 = state_15160;
(statearr_15179[(9)] = inst_15112);

(statearr_15179[(10)] = inst_15114);

(statearr_15179[(11)] = inst_15115);

(statearr_15179[(12)] = inst_15113);

return statearr_15179;
})();
var statearr_15180_15210 = state_15160__$1;
(statearr_15180_15210[(2)] = null);

(statearr_15180_15210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (3))){
var inst_15158 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15160__$1,inst_15158);
} else {
if((state_val_15161 === (12))){
var inst_15146 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15181_15211 = state_15160__$1;
(statearr_15181_15211[(2)] = inst_15146);

(statearr_15181_15211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (2))){
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15160__$1,(4),in$);
} else {
if((state_val_15161 === (23))){
var inst_15154 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15182_15212 = state_15160__$1;
(statearr_15182_15212[(2)] = inst_15154);

(statearr_15182_15212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (19))){
var inst_15141 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15183_15213 = state_15160__$1;
(statearr_15183_15213[(2)] = inst_15141);

(statearr_15183_15213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (11))){
var inst_15112 = (state_15160[(9)]);
var inst_15126 = (state_15160[(7)]);
var inst_15126__$1 = cljs.core.seq.call(null,inst_15112);
var state_15160__$1 = (function (){var statearr_15184 = state_15160;
(statearr_15184[(7)] = inst_15126__$1);

return statearr_15184;
})();
if(inst_15126__$1){
var statearr_15185_15214 = state_15160__$1;
(statearr_15185_15214[(1)] = (14));

} else {
var statearr_15186_15215 = state_15160__$1;
(statearr_15186_15215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (9))){
var inst_15148 = (state_15160[(2)]);
var inst_15149 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15160__$1 = (function (){var statearr_15187 = state_15160;
(statearr_15187[(15)] = inst_15148);

return statearr_15187;
})();
if(cljs.core.truth_(inst_15149)){
var statearr_15188_15216 = state_15160__$1;
(statearr_15188_15216[(1)] = (21));

} else {
var statearr_15189_15217 = state_15160__$1;
(statearr_15189_15217[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (5))){
var inst_15104 = cljs.core.async.close_BANG_.call(null,out);
var state_15160__$1 = state_15160;
var statearr_15190_15218 = state_15160__$1;
(statearr_15190_15218[(2)] = inst_15104);

(statearr_15190_15218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (14))){
var inst_15126 = (state_15160[(7)]);
var inst_15128 = cljs.core.chunked_seq_QMARK_.call(null,inst_15126);
var state_15160__$1 = state_15160;
if(inst_15128){
var statearr_15191_15219 = state_15160__$1;
(statearr_15191_15219[(1)] = (17));

} else {
var statearr_15192_15220 = state_15160__$1;
(statearr_15192_15220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (16))){
var inst_15144 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15193_15221 = state_15160__$1;
(statearr_15193_15221[(2)] = inst_15144);

(statearr_15193_15221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (10))){
var inst_15115 = (state_15160[(11)]);
var inst_15113 = (state_15160[(12)]);
var inst_15120 = cljs.core._nth.call(null,inst_15113,inst_15115);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15160__$1,(13),out,inst_15120);
} else {
if((state_val_15161 === (18))){
var inst_15126 = (state_15160[(7)]);
var inst_15135 = cljs.core.first.call(null,inst_15126);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15160__$1,(20),out,inst_15135);
} else {
if((state_val_15161 === (8))){
var inst_15114 = (state_15160[(10)]);
var inst_15115 = (state_15160[(11)]);
var inst_15117 = (inst_15115 < inst_15114);
var inst_15118 = inst_15117;
var state_15160__$1 = state_15160;
if(cljs.core.truth_(inst_15118)){
var statearr_15194_15222 = state_15160__$1;
(statearr_15194_15222[(1)] = (10));

} else {
var statearr_15195_15223 = state_15160__$1;
(statearr_15195_15223[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15196[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__);

(statearr_15196[(1)] = (1));

return statearr_15196;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1 = (function (state_15160){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_15160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15197){if((e15197 instanceof Object)){
var ex__13458__auto__ = e15197;
var statearr_15198_15224 = state_15160;
(statearr_15198_15224[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15225 = state_15160;
state_15160 = G__15225;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__ = function(state_15160){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1.call(this,state_15160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_15199 = f__13545__auto__.call(null);
(statearr_15199[(6)] = c__13544__auto__);

return statearr_15199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15227 = arguments.length;
switch (G__15227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15230 = arguments.length;
switch (G__15230) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15233 = arguments.length;
switch (G__15233) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___15280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___15280,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___15280,out){
return (function (state_15257){
var state_val_15258 = (state_15257[(1)]);
if((state_val_15258 === (7))){
var inst_15252 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
var statearr_15259_15281 = state_15257__$1;
(statearr_15259_15281[(2)] = inst_15252);

(statearr_15259_15281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (1))){
var inst_15234 = null;
var state_15257__$1 = (function (){var statearr_15260 = state_15257;
(statearr_15260[(7)] = inst_15234);

return statearr_15260;
})();
var statearr_15261_15282 = state_15257__$1;
(statearr_15261_15282[(2)] = null);

(statearr_15261_15282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (4))){
var inst_15237 = (state_15257[(8)]);
var inst_15237__$1 = (state_15257[(2)]);
var inst_15238 = (inst_15237__$1 == null);
var inst_15239 = cljs.core.not.call(null,inst_15238);
var state_15257__$1 = (function (){var statearr_15262 = state_15257;
(statearr_15262[(8)] = inst_15237__$1);

return statearr_15262;
})();
if(inst_15239){
var statearr_15263_15283 = state_15257__$1;
(statearr_15263_15283[(1)] = (5));

} else {
var statearr_15264_15284 = state_15257__$1;
(statearr_15264_15284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (6))){
var state_15257__$1 = state_15257;
var statearr_15265_15285 = state_15257__$1;
(statearr_15265_15285[(2)] = null);

(statearr_15265_15285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (3))){
var inst_15254 = (state_15257[(2)]);
var inst_15255 = cljs.core.async.close_BANG_.call(null,out);
var state_15257__$1 = (function (){var statearr_15266 = state_15257;
(statearr_15266[(9)] = inst_15254);

return statearr_15266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15257__$1,inst_15255);
} else {
if((state_val_15258 === (2))){
var state_15257__$1 = state_15257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15257__$1,(4),ch);
} else {
if((state_val_15258 === (11))){
var inst_15237 = (state_15257[(8)]);
var inst_15246 = (state_15257[(2)]);
var inst_15234 = inst_15237;
var state_15257__$1 = (function (){var statearr_15267 = state_15257;
(statearr_15267[(10)] = inst_15246);

(statearr_15267[(7)] = inst_15234);

return statearr_15267;
})();
var statearr_15268_15286 = state_15257__$1;
(statearr_15268_15286[(2)] = null);

(statearr_15268_15286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (9))){
var inst_15237 = (state_15257[(8)]);
var state_15257__$1 = state_15257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15257__$1,(11),out,inst_15237);
} else {
if((state_val_15258 === (5))){
var inst_15237 = (state_15257[(8)]);
var inst_15234 = (state_15257[(7)]);
var inst_15241 = cljs.core._EQ_.call(null,inst_15237,inst_15234);
var state_15257__$1 = state_15257;
if(inst_15241){
var statearr_15270_15287 = state_15257__$1;
(statearr_15270_15287[(1)] = (8));

} else {
var statearr_15271_15288 = state_15257__$1;
(statearr_15271_15288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (10))){
var inst_15249 = (state_15257[(2)]);
var state_15257__$1 = state_15257;
var statearr_15272_15289 = state_15257__$1;
(statearr_15272_15289[(2)] = inst_15249);

(statearr_15272_15289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15258 === (8))){
var inst_15234 = (state_15257[(7)]);
var tmp15269 = inst_15234;
var inst_15234__$1 = tmp15269;
var state_15257__$1 = (function (){var statearr_15273 = state_15257;
(statearr_15273[(7)] = inst_15234__$1);

return statearr_15273;
})();
var statearr_15274_15290 = state_15257__$1;
(statearr_15274_15290[(2)] = null);

(statearr_15274_15290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___15280,out))
;
return ((function (switch__13454__auto__,c__13544__auto___15280,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15275[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15275[(1)] = (1));

return statearr_15275;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15257){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_15257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15276){if((e15276 instanceof Object)){
var ex__13458__auto__ = e15276;
var statearr_15277_15291 = state_15257;
(statearr_15277_15291[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15292 = state_15257;
state_15257 = G__15292;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___15280,out))
})();
var state__13546__auto__ = (function (){var statearr_15278 = f__13545__auto__.call(null);
(statearr_15278[(6)] = c__13544__auto___15280);

return statearr_15278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___15280,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15294 = arguments.length;
switch (G__15294) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___15360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___15360,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___15360,out){
return (function (state_15332){
var state_val_15333 = (state_15332[(1)]);
if((state_val_15333 === (7))){
var inst_15328 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15334_15361 = state_15332__$1;
(statearr_15334_15361[(2)] = inst_15328);

(statearr_15334_15361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (1))){
var inst_15295 = (new Array(n));
var inst_15296 = inst_15295;
var inst_15297 = (0);
var state_15332__$1 = (function (){var statearr_15335 = state_15332;
(statearr_15335[(7)] = inst_15297);

(statearr_15335[(8)] = inst_15296);

return statearr_15335;
})();
var statearr_15336_15362 = state_15332__$1;
(statearr_15336_15362[(2)] = null);

(statearr_15336_15362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (4))){
var inst_15300 = (state_15332[(9)]);
var inst_15300__$1 = (state_15332[(2)]);
var inst_15301 = (inst_15300__$1 == null);
var inst_15302 = cljs.core.not.call(null,inst_15301);
var state_15332__$1 = (function (){var statearr_15337 = state_15332;
(statearr_15337[(9)] = inst_15300__$1);

return statearr_15337;
})();
if(inst_15302){
var statearr_15338_15363 = state_15332__$1;
(statearr_15338_15363[(1)] = (5));

} else {
var statearr_15339_15364 = state_15332__$1;
(statearr_15339_15364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (15))){
var inst_15322 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15340_15365 = state_15332__$1;
(statearr_15340_15365[(2)] = inst_15322);

(statearr_15340_15365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (13))){
var state_15332__$1 = state_15332;
var statearr_15341_15366 = state_15332__$1;
(statearr_15341_15366[(2)] = null);

(statearr_15341_15366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (6))){
var inst_15297 = (state_15332[(7)]);
var inst_15318 = (inst_15297 > (0));
var state_15332__$1 = state_15332;
if(cljs.core.truth_(inst_15318)){
var statearr_15342_15367 = state_15332__$1;
(statearr_15342_15367[(1)] = (12));

} else {
var statearr_15343_15368 = state_15332__$1;
(statearr_15343_15368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (3))){
var inst_15330 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15332__$1,inst_15330);
} else {
if((state_val_15333 === (12))){
var inst_15296 = (state_15332[(8)]);
var inst_15320 = cljs.core.vec.call(null,inst_15296);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15332__$1,(15),out,inst_15320);
} else {
if((state_val_15333 === (2))){
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15332__$1,(4),ch);
} else {
if((state_val_15333 === (11))){
var inst_15312 = (state_15332[(2)]);
var inst_15313 = (new Array(n));
var inst_15296 = inst_15313;
var inst_15297 = (0);
var state_15332__$1 = (function (){var statearr_15344 = state_15332;
(statearr_15344[(10)] = inst_15312);

(statearr_15344[(7)] = inst_15297);

(statearr_15344[(8)] = inst_15296);

return statearr_15344;
})();
var statearr_15345_15369 = state_15332__$1;
(statearr_15345_15369[(2)] = null);

(statearr_15345_15369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (9))){
var inst_15296 = (state_15332[(8)]);
var inst_15310 = cljs.core.vec.call(null,inst_15296);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15332__$1,(11),out,inst_15310);
} else {
if((state_val_15333 === (5))){
var inst_15297 = (state_15332[(7)]);
var inst_15300 = (state_15332[(9)]);
var inst_15305 = (state_15332[(11)]);
var inst_15296 = (state_15332[(8)]);
var inst_15304 = (inst_15296[inst_15297] = inst_15300);
var inst_15305__$1 = (inst_15297 + (1));
var inst_15306 = (inst_15305__$1 < n);
var state_15332__$1 = (function (){var statearr_15346 = state_15332;
(statearr_15346[(12)] = inst_15304);

(statearr_15346[(11)] = inst_15305__$1);

return statearr_15346;
})();
if(cljs.core.truth_(inst_15306)){
var statearr_15347_15370 = state_15332__$1;
(statearr_15347_15370[(1)] = (8));

} else {
var statearr_15348_15371 = state_15332__$1;
(statearr_15348_15371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (14))){
var inst_15325 = (state_15332[(2)]);
var inst_15326 = cljs.core.async.close_BANG_.call(null,out);
var state_15332__$1 = (function (){var statearr_15350 = state_15332;
(statearr_15350[(13)] = inst_15325);

return statearr_15350;
})();
var statearr_15351_15372 = state_15332__$1;
(statearr_15351_15372[(2)] = inst_15326);

(statearr_15351_15372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (10))){
var inst_15316 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15352_15373 = state_15332__$1;
(statearr_15352_15373[(2)] = inst_15316);

(statearr_15352_15373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (8))){
var inst_15305 = (state_15332[(11)]);
var inst_15296 = (state_15332[(8)]);
var tmp15349 = inst_15296;
var inst_15296__$1 = tmp15349;
var inst_15297 = inst_15305;
var state_15332__$1 = (function (){var statearr_15353 = state_15332;
(statearr_15353[(7)] = inst_15297);

(statearr_15353[(8)] = inst_15296__$1);

return statearr_15353;
})();
var statearr_15354_15374 = state_15332__$1;
(statearr_15354_15374[(2)] = null);

(statearr_15354_15374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___15360,out))
;
return ((function (switch__13454__auto__,c__13544__auto___15360,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15355[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15355[(1)] = (1));

return statearr_15355;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15332){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_15332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15356){if((e15356 instanceof Object)){
var ex__13458__auto__ = e15356;
var statearr_15357_15375 = state_15332;
(statearr_15357_15375[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15376 = state_15332;
state_15332 = G__15376;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___15360,out))
})();
var state__13546__auto__ = (function (){var statearr_15358 = f__13545__auto__.call(null);
(statearr_15358[(6)] = c__13544__auto___15360);

return statearr_15358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___15360,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15378 = arguments.length;
switch (G__15378) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13544__auto___15448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto___15448,out){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto___15448,out){
return (function (state_15420){
var state_val_15421 = (state_15420[(1)]);
if((state_val_15421 === (7))){
var inst_15416 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
var statearr_15422_15449 = state_15420__$1;
(statearr_15422_15449[(2)] = inst_15416);

(statearr_15422_15449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (1))){
var inst_15379 = [];
var inst_15380 = inst_15379;
var inst_15381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15420__$1 = (function (){var statearr_15423 = state_15420;
(statearr_15423[(7)] = inst_15380);

(statearr_15423[(8)] = inst_15381);

return statearr_15423;
})();
var statearr_15424_15450 = state_15420__$1;
(statearr_15424_15450[(2)] = null);

(statearr_15424_15450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (4))){
var inst_15384 = (state_15420[(9)]);
var inst_15384__$1 = (state_15420[(2)]);
var inst_15385 = (inst_15384__$1 == null);
var inst_15386 = cljs.core.not.call(null,inst_15385);
var state_15420__$1 = (function (){var statearr_15425 = state_15420;
(statearr_15425[(9)] = inst_15384__$1);

return statearr_15425;
})();
if(inst_15386){
var statearr_15426_15451 = state_15420__$1;
(statearr_15426_15451[(1)] = (5));

} else {
var statearr_15427_15452 = state_15420__$1;
(statearr_15427_15452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (15))){
var inst_15410 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
var statearr_15428_15453 = state_15420__$1;
(statearr_15428_15453[(2)] = inst_15410);

(statearr_15428_15453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (13))){
var state_15420__$1 = state_15420;
var statearr_15429_15454 = state_15420__$1;
(statearr_15429_15454[(2)] = null);

(statearr_15429_15454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (6))){
var inst_15380 = (state_15420[(7)]);
var inst_15405 = inst_15380.length;
var inst_15406 = (inst_15405 > (0));
var state_15420__$1 = state_15420;
if(cljs.core.truth_(inst_15406)){
var statearr_15430_15455 = state_15420__$1;
(statearr_15430_15455[(1)] = (12));

} else {
var statearr_15431_15456 = state_15420__$1;
(statearr_15431_15456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (3))){
var inst_15418 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15420__$1,inst_15418);
} else {
if((state_val_15421 === (12))){
var inst_15380 = (state_15420[(7)]);
var inst_15408 = cljs.core.vec.call(null,inst_15380);
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15420__$1,(15),out,inst_15408);
} else {
if((state_val_15421 === (2))){
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15420__$1,(4),ch);
} else {
if((state_val_15421 === (11))){
var inst_15388 = (state_15420[(10)]);
var inst_15384 = (state_15420[(9)]);
var inst_15398 = (state_15420[(2)]);
var inst_15399 = [];
var inst_15400 = inst_15399.push(inst_15384);
var inst_15380 = inst_15399;
var inst_15381 = inst_15388;
var state_15420__$1 = (function (){var statearr_15432 = state_15420;
(statearr_15432[(11)] = inst_15398);

(statearr_15432[(7)] = inst_15380);

(statearr_15432[(8)] = inst_15381);

(statearr_15432[(12)] = inst_15400);

return statearr_15432;
})();
var statearr_15433_15457 = state_15420__$1;
(statearr_15433_15457[(2)] = null);

(statearr_15433_15457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (9))){
var inst_15380 = (state_15420[(7)]);
var inst_15396 = cljs.core.vec.call(null,inst_15380);
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15420__$1,(11),out,inst_15396);
} else {
if((state_val_15421 === (5))){
var inst_15388 = (state_15420[(10)]);
var inst_15381 = (state_15420[(8)]);
var inst_15384 = (state_15420[(9)]);
var inst_15388__$1 = f.call(null,inst_15384);
var inst_15389 = cljs.core._EQ_.call(null,inst_15388__$1,inst_15381);
var inst_15390 = cljs.core.keyword_identical_QMARK_.call(null,inst_15381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15391 = (inst_15389) || (inst_15390);
var state_15420__$1 = (function (){var statearr_15434 = state_15420;
(statearr_15434[(10)] = inst_15388__$1);

return statearr_15434;
})();
if(cljs.core.truth_(inst_15391)){
var statearr_15435_15458 = state_15420__$1;
(statearr_15435_15458[(1)] = (8));

} else {
var statearr_15436_15459 = state_15420__$1;
(statearr_15436_15459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (14))){
var inst_15413 = (state_15420[(2)]);
var inst_15414 = cljs.core.async.close_BANG_.call(null,out);
var state_15420__$1 = (function (){var statearr_15438 = state_15420;
(statearr_15438[(13)] = inst_15413);

return statearr_15438;
})();
var statearr_15439_15460 = state_15420__$1;
(statearr_15439_15460[(2)] = inst_15414);

(statearr_15439_15460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (10))){
var inst_15403 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
var statearr_15440_15461 = state_15420__$1;
(statearr_15440_15461[(2)] = inst_15403);

(statearr_15440_15461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (8))){
var inst_15380 = (state_15420[(7)]);
var inst_15388 = (state_15420[(10)]);
var inst_15384 = (state_15420[(9)]);
var inst_15393 = inst_15380.push(inst_15384);
var tmp15437 = inst_15380;
var inst_15380__$1 = tmp15437;
var inst_15381 = inst_15388;
var state_15420__$1 = (function (){var statearr_15441 = state_15420;
(statearr_15441[(7)] = inst_15380__$1);

(statearr_15441[(8)] = inst_15381);

(statearr_15441[(14)] = inst_15393);

return statearr_15441;
})();
var statearr_15442_15462 = state_15420__$1;
(statearr_15442_15462[(2)] = null);

(statearr_15442_15462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__13544__auto___15448,out))
;
return ((function (switch__13454__auto__,c__13544__auto___15448,out){
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15443[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15443[(1)] = (1));

return statearr_15443;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15420){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_15420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object)){
var ex__13458__auto__ = e15444;
var statearr_15445_15463 = state_15420;
(statearr_15445_15463[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15464 = state_15420;
state_15420 = G__15464;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto___15448,out))
})();
var state__13546__auto__ = (function (){var statearr_15446 = f__13545__auto__.call(null);
(statearr_15446[(6)] = c__13544__auto___15448);

return statearr_15446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto___15448,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
