// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__9096__auto__ = (((port == null))?null:port);
var m__9097__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,port,fn1_handler);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__9096__auto__ = (((port == null))?null:port);
var m__9097__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,port,val,fn1_handler);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__9096__auto__ = (((chan == null))?null:chan);
var m__9097__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,chan);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__9096__auto__ = (((chan == null))?null:chan);
var m__9097__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,chan);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__9096__auto__ = (((h == null))?null:h);
var m__9097__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,h);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
var x__9096__auto__ = (((h == null))?null:h);
var m__9097__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,h);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__9096__auto__ = (((h == null))?null:h);
var m__9097__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,h);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

/**
 * returns true if buffer can accept put
 */
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__9096__auto__ = (((b == null))?null:b);
var m__9097__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,b);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

/**
 * remove and return next item from buffer, called under chan mutex
 */
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__9096__auto__ = (((b == null))?null:b);
var m__9097__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,b);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__9096__auto__ = (((b == null))?null:b);
var m__9097__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,b,itm);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
});

/**
 * called on chan closed under chan mutex, return ignored
 */
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
var x__9096__auto__ = (((b == null))?null:b);
var m__9097__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,b);
} else {
var m__9097__auto____$1 = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var G__11834 = arguments.length;
switch (G__11834) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceMappingURL=protocols.js.map
