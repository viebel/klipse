goog.provide("cljs.core.async.impl.buffers");
(function (){
cljs.core.async.impl.buffers.acopy = (function cljs$core$async$impl$buffers$acopy(src,src_start,dest,dest_start,len){
var cnt = (0);
while(true){
if((cnt < len)){
(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));

var G__22 = (cnt + (1));
cnt = G__22;
continue;
} else {
return null;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.acopy;},new cljs.core.Symbol("cljs.core.async.impl.buffers","acopy","cljs.core.async.impl.buffers/acopy",(120308915),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"acopy","acopy",(-1862042503),null),"cljs/core/async/impl/buffers.cljs",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",(-10544524),null),new cljs.core.Symbol(null,"src-start","src-start",(-1944043761),null),new cljs.core.Symbol(null,"dest","dest",(1605962050),null),new cljs.core.Symbol(null,"dest-start","dest-start",(-1707002170),null),new cljs.core.Symbol(null,"len","len",(-1230778691),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.acopy)?cljs.core.async.impl.buffers.acopy.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.async.impl.buffers.Object}
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){
var self__ = this;
var _ = this;
if((self__.length === (0))){
return null;
} else {
var x = (self__.arr[self__.tail]);
(self__.arr[self__.tail] = null);

self__.tail = ((self__.tail + (1)) % self__.arr.length);

self__.length = (self__.length - (1));

return x;
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){
var self__ = this;
var _ = this;
(self__.arr[self__.head] = x);

self__.head = ((self__.head + (1)) % self__.arr.length);

self__.length = (self__.length + (1));

return null;
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){
var self__ = this;
var this$ = this;
if(((self__.length + (1)) === self__.arr.length)){
this$.resize();
} else {
}

return this$.unshift(x);
});

cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){
var self__ = this;
var _ = this;
var new_arr_size = (self__.arr.length * (2));
var new_arr = (new Array(new_arr_size));
if((self__.tail < self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),self__.length);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail > self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),(self__.arr.length - self__.tail));

cljs.core.async.impl.buffers.acopy.call(null,self__.arr,(0),new_arr,(self__.arr.length - self__.tail),self__.head);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail === self__.head)){
self__.tail = (0);

self__.head = (0);

return self__.arr = new_arr;
} else {
return null;
}
}
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){
var self__ = this;
var this$ = this;
var n__23475__auto__ = self__.length;
var x = (0);
while(true){
if((x < n__23475__auto__)){
var v_23 = this$.pop();
if(keep_QMARK_.call(null,v_23)){
this$.unshift(v_23);
} else {
}

var G__24 = (x + (1));
x = G__24;
continue;
} else {
return null;
}
break;
}
});

cljs.core.async.impl.buffers.RingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",(869147608),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",(494507963),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});

(function (){
cljs.core.async.impl.buffers.__GT_RingBuffer = (function cljs$core$async$impl$buffers$__GT_RingBuffer(head,tail,length,arr){
return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.__GT_RingBuffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","->RingBuffer","cljs.core.async.impl.buffers/->RingBuffer",(-1912000467),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core.async.impl.buffers","Object","cljs.core.async.impl.buffers/Object",(-1845519912),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"->RingBuffer","->RingBuffer",(1022466423),null),"cljs/core/async/impl/buffers.cljs",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",(869147608),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",(494507963),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),null,null,(cljs.core.truth_(cljs.core.async.impl.buffers.__GT_RingBuffer)?cljs.core.async.impl.buffers.__GT_RingBuffer.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.buffers.ring_buffer = (function cljs$core$async$impl$buffers$ring_buffer(n){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str("(> n 0)")].join('')));
}

return (new cljs.core.async.impl.buffers.RingBuffer((0),(0),(0),(new Array(n))));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.ring_buffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","ring-buffer","cljs.core.async.impl.buffers/ring-buffer",(405479288),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"ring-buffer","ring-buffer",(1782743090),null),"cljs/core/async/impl/buffers.cljs",(18),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.ring_buffer)?cljs.core.async.impl.buffers.ring_buffer.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.buf.length === self__.n);
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
self__.buf.unbounded_unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.FixedBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});

(function (){
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function cljs$core$async$impl$buffers$__GT_FixedBuffer(buf,n){
return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.__GT_FixedBuffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","->FixedBuffer","cljs.core.async.impl.buffers/->FixedBuffer",(2066444922),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"->FixedBuffer","->FixedBuffer",(-447489716),null),"cljs/core/async/impl/buffers.cljs",(21),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(80),(80),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.buffers.__GT_FixedBuffer)?cljs.core.async.impl.buffers.__GT_FixedBuffer.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.buffers.fixed_buffer = (function cljs$core$async$impl$buffers$fixed_buffer(n){
return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.fixed_buffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","fixed-buffer","cljs.core.async.impl.buffers/fixed-buffer",(1893027186),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"fixed-buffer","fixed-buffer",(-16849876),null),"cljs/core/async/impl/buffers.cljs",(19),(1),(94),(94),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.fixed_buffer)?cljs.core.async.impl.buffers.fixed_buffer.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
} else {
self__.buf.unshift(itm);
}

return this$__$1;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.DroppingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});

(function (){
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function cljs$core$async$impl$buffers$__GT_DroppingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.__GT_DroppingBuffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","->DroppingBuffer","cljs.core.async.impl.buffers/->DroppingBuffer",(-1046846528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core.async.impl.protocols","UnblockingBuffer","cljs.core.async.impl.protocols/UnblockingBuffer",(-2140758482),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"->DroppingBuffer","->DroppingBuffer",(1935919114),null),"cljs/core/async/impl/buffers.cljs",(24),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.buffers.__GT_DroppingBuffer)?cljs.core.async.impl.buffers.__GT_DroppingBuffer.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.buffers.dropping_buffer = (function cljs$core$async$impl$buffers$dropping_buffer(n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.dropping_buffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","dropping-buffer","cljs.core.async.impl.buffers/dropping-buffer",(526622928),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"dropping-buffer","dropping-buffer",(-1600636534),null),"cljs/core/async/impl/buffers.cljs",(22),(1),(113),(113),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.dropping_buffer)?cljs.core.async.impl.buffers.dropping_buffer.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else {
}

self__.buf.unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.SlidingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});

(function (){
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function cljs$core$async$impl$buffers$__GT_SlidingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.__GT_SlidingBuffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","->SlidingBuffer","cljs.core.async.impl.buffers/->SlidingBuffer",(-1081867119),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core.async.impl.protocols","UnblockingBuffer","cljs.core.async.impl.protocols/UnblockingBuffer",(-2140758482),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"->SlidingBuffer","->SlidingBuffer",(1239391067),null),"cljs/core/async/impl/buffers.cljs",(23),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(116),(116),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.buffers.__GT_SlidingBuffer)?cljs.core.async.impl.buffers.__GT_SlidingBuffer.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.buffers.sliding_buffer = (function cljs$core$async$impl$buffers$sliding_buffer(n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.sliding_buffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","sliding-buffer","cljs.core.async.impl.buffers/sliding-buffer",(-1680583424),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"sliding-buffer","sliding-buffer",(759016662),null),"cljs/core/async/impl/buffers.cljs",(21),(1),(133),(133),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.sliding_buffer)?cljs.core.async.impl.buffers.sliding_buffer.cljs$lang$test:null)])));})()
;
if(typeof cljs.core.async.impl.buffers.NO_VAL !== 'undefined'){
} else {
(function (){
cljs.core.async.impl.buffers.NO_VAL = (new Object()); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.NO_VAL;},new cljs.core.Symbol("cljs.core.async.impl.buffers","NO-VAL","cljs.core.async.impl.buffers/NO-VAL",(1918184372),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"NO-VAL","NO-VAL",(-461520006),null),"cljs/core/async/impl/buffers.cljs",(26),(1),(136),(136),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.buffers.NO_VAL)?cljs.core.async.impl.buffers.NO_VAL.cljs$lang$test:null)])));})()
;
}
(function (){
cljs.core.async.impl.buffers.undelivered_QMARK_ = (function cljs$core$async$impl$buffers$undelivered_QMARK_(val){
return (cljs.core.async.impl.buffers.NO_VAL === val);
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.undelivered_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.buffers","undelivered?","cljs.core.async.impl.buffers/undelivered?",(-655225581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"undelivered?","undelivered?",(1261086409),null),"cljs/core/async/impl/buffers.cljs",(20),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_)?cljs.core.async.impl.buffers.undelivered_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.PromiseBuffer = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
self__.val = itm;
} else {
}

return this$__$1;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
return self__.val = null;
} else {
return null;
}
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
return (0);
} else {
return (1);
}
});

cljs.core.async.impl.buffers.PromiseBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/PromiseBuffer";

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.buffers/PromiseBuffer");
});

(function (){
cljs.core.async.impl.buffers.__GT_PromiseBuffer = (function cljs$core$async$impl$buffers$__GT_PromiseBuffer(val){
return (new cljs.core.async.impl.buffers.PromiseBuffer(val));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.__GT_PromiseBuffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","->PromiseBuffer","cljs.core.async.impl.buffers/->PromiseBuffer",(133955389),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core.async.impl.protocols","UnblockingBuffer","cljs.core.async.impl.protocols/UnblockingBuffer",(-2140758482),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"->PromiseBuffer","->PromiseBuffer",(-240942073),null),"cljs/core/async/impl/buffers.cljs",(23),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(140),(140),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.buffers.__GT_PromiseBuffer)?cljs.core.async.impl.buffers.__GT_PromiseBuffer.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.buffers.promise_buffer = (function cljs$core$async$impl$buffers$promise_buffer(){
return (new cljs.core.async.impl.buffers.PromiseBuffer(cljs.core.async.impl.buffers.NO_VAL));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.buffers.promise_buffer;},new cljs.core.Symbol("cljs.core.async.impl.buffers","promise-buffer","cljs.core.async.impl.buffers/promise-buffer",(1056561588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.buffers","cljs.core.async.impl.buffers",(582696206),null),new cljs.core.Symbol(null,"promise-buffer","promise-buffer",(-1895730946),null),"cljs/core/async/impl/buffers.cljs",(21),(1),(158),(158),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.async.impl.buffers.promise_buffer)?cljs.core.async.impl.buffers.promise_buffer.cljs$lang$test:null)])));})()
;
