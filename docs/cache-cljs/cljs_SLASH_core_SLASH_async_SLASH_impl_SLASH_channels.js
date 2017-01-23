goog.provide("cljs.core.async.impl.channels");
(function (){
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31 = (function (val,meta32){
this.val = val;
this.meta32 = meta32;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33,meta32__$1){
var self__ = this;
var _33__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(self__.val,meta32__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33){
var self__ = this;
var _33__$1 = this;
return self__.meta32;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"meta32","meta32",(2073478690),null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31");
});

(function (){
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels31(val__$1,meta32){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val__$1,meta32));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31;},new cljs.core.Symbol("cljs.core.async.impl.channels","->t_cljs$core$async$impl$channels31","cljs.core.async.impl.channels/->t_cljs$core$async$impl$channels31",(1291519908),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"->t_cljs$core$async$impl$channels31","->t_cljs$core$async$impl$channels31",(1997739453),null),"cljs/core/async/impl/channels.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(17),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"meta32","meta32",(2073478690),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null], null), null),null,(cljs.core.truth_(cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31)?cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31.cljs$lang$test:null)])));})()
;

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31(val,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.box;},new cljs.core.Symbol("cljs.core.async.impl.channels","box","cljs.core.async.impl.channels/box",(-1528778184),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"box","box",(-1123515375),null),"cljs/core/async/impl/channels.cljs",(10),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.box)?cljs.core.async.impl.channels.box.cljs$lang$test:null)])));})()
;

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.channels/PutBox");
});

(function (){
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.__GT_PutBox;},new cljs.core.Symbol("cljs.core.async.impl.channels","->PutBox","cljs.core.async.impl.channels/->PutBox",(832977820),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"->PutBox","->PutBox",(784209267),null),"cljs/core/async/impl/channels.cljs",(16),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),null,null,(cljs.core.truth_(cljs.core.async.impl.channels.__GT_PutBox)?cljs.core.async.impl.channels.__GT_PutBox.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.put_active_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.channels","put-active?","cljs.core.async.impl.channels/put-active?",(-1027662323),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"put-active?","put-active?",(-1136072606),null),"cljs/core/async/impl/channels.cljs",(18),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"box","box",(-1123515375),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.put_active_QMARK_)?cljs.core.async.impl.channels.put_active_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.channels.MAX_DIRTY = (64); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.MAX_DIRTY;},new cljs.core.Symbol("cljs.core.async.impl.channels","MAX_DIRTY","cljs.core.async.impl.channels/MAX_DIRTY",(629775411),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"MAX_DIRTY","MAX_DIRTY",(44142104),null),"cljs/core/async/impl/channels.cljs",(23),(1),true,(25),(25),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.channels.MAX_DIRTY)?cljs.core.async.impl.channels.MAX_DIRTY.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.core.async.impl.channels.MMC = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.MMC;},new cljs.core.Symbol("cljs.core.async.impl.channels","MMC","cljs.core.async.impl.channels/MMC",(-1278628728),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"MMC","MMC",(-1999520111),null),"cljs/core/async/impl/channels.cljs",(17),(1),(27),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"abort","abort",(-2133242571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(27),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.channels.MMC)?cljs.core.async.impl.channels.MMC.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.abort;},new cljs.core.Symbol("cljs.core.async.impl.channels","abort","cljs.core.async.impl.channels/abort",(1772273454),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.channels","MMC","cljs.core.async.impl.channels/MMC",(-1278628728),null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"abort","abort",(-2133242571),null),"cljs/core/async/impl/channels.cljs",(9),(1),(27),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.abort)?cljs.core.async.impl.channels.abort.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.Channel}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_34 = self__.puts.pop();
if((putter_34 == null)){
} else {
var put_handler_35 = putter_34.handler;
var val_36 = putter_34.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_35)){
var put_cb_37 = cljs.core.async.impl.protocols.commit.call(null,put_handler_35);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_37,put_handler_35,val_36,putter_34,this$__$1){
return (function (){
return put_cb_37.call(null,true);
});})(put_cb_37,put_handler_35,val_36,putter_34,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = self__.buf;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__20770__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker_38 = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_38)){
var take_cb_39 = cljs.core.async.impl.protocols.commit.call(null,taker_38);
var val_40__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_39,val_40__$1,taker_38,done_QMARK_,closed__$1,this$__$1){
return (function (){
return take_cb_39.call(null,val_40__$1);
});})(take_cb_39,val_40__$1,taker_38,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var _ = cljs.core.async.impl.protocols.commit.call(null,handler);
var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))){
} else {
var putter_41 = self__.puts.pop();
if((putter_41 == null)){
} else {
var put_handler_42 = putter_41.handler;
var val_43 = putter_41.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_42)){
var put_cb_44 = cljs.core.async.impl.protocols.commit.call(null,put_handler_42);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_44,put_handler_42,val_43,putter_41,_,retval,this$__$1){
return (function (){
return put_cb_44.call(null,true);
});})(put_cb_44,put_handler_42,val_43,putter_41,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_43))){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__20770__auto__;
}
})())){
var has_val = (function (){var and__20770__auto__ = self__.buf;
if(cljs.core.truth_(and__20770__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__20770__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__20770__auto__ = self__.buf;
if(cljs.core.truth_(and__20770__auto__)){
return (self__.puts.length === (0));
} else {
return and__20770__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_45 = self__.takes.pop();
if((taker_45 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_45)){
var take_cb_46 = cljs.core.async.impl.protocols.commit.call(null,taker_45);
var val_47 = (cljs.core.truth_((function (){var and__20770__auto__ = self__.buf;
if(cljs.core.truth_(and__20770__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__20770__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_46,val_47,taker_45,this$__$1){
return (function (){
return take_cb_46.call(null,val_47);
});})(take_cb_46,val_47,taker_45,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",(298247964),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",(575642138),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"puts","puts",(-1883877054),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",(57041148),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"not-native","not-native",(-236392494),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",(720856168),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"add!","add!",(2046056845),null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

(function (){
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.__GT_ManyToManyChannel;},new cljs.core.Symbol("cljs.core.async.impl.channels","->ManyToManyChannel","cljs.core.async.impl.channels/->ManyToManyChannel",(-400927467),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core.async.impl.channels","MMC","cljs.core.async.impl.channels/MMC",(-1278628728),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),null,new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"->ManyToManyChannel","->ManyToManyChannel",(-2128364674),null),"cljs/core/async/impl/channels.cljs",(27),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(30),(30),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",(298247964),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",(575642138),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"puts","puts",(-1883877054),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",(57041148),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"not-native","not-native",(-236392494),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",(720856168),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"add!","add!",(2046056845),null)], null)),null,null,(cljs.core.truth_(cljs.core.async.impl.channels.__GT_ManyToManyChannel)?cljs.core.async.impl.channels.__GT_ManyToManyChannel.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.ex_handler;},new cljs.core.Symbol("cljs.core.async.impl.channels","ex-handler","cljs.core.async.impl.channels/ex-handler",(-1675879566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"ex-handler","ex-handler",(-83620523),null),"cljs/core/async/impl/channels.cljs",(18),(1),(158),(158),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ex","ex",(226760186),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.ex_handler)?cljs.core.async.impl.channels.ex_handler.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__20817__auto__ = exh;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.handle;},new cljs.core.Symbol("cljs.core.async.impl.channels","handle","cljs.core.async.impl.channels/handle",(1454058324),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"handle","handle",(-1115486915),null),"cljs/core/async/impl/channels.cljs",(14),(1),(162),(162),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.handle)?cljs.core.async.impl.channels.handle.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args48 = [];
var len__23656__auto___53 = arguments.length;
var i__23657__auto___54 = (0);
while(true){
if((i__23657__auto___54 < len__23656__auto___53)){
args48.push((arguments[i__23657__auto___54]));

var G__55 = (i__23657__auto___54 + (1));
i__23657__auto___54 = G__55;
continue;
} else {
}
break;
}

var G__50 = args48.length;
switch (G__50) {
case (1):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.channels.chan;},new cljs.core.Symbol("cljs.core.async.impl.channels","chan","cljs.core.async.impl.channels/chan",(-586749983),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"chan","chan",(-462490168),null),"cljs/core/async/impl/channels.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(168),(168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.chan)?cljs.core.async.impl.channels.chan.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__57 = null;
var G__57__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e51){var t = e51;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__57__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e52){var t = e52;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__57 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__57__1.call(this,buf__$1);
case 2:
return G__57__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57.cljs$core$IFn$_invoke$arity$1 = G__57__1;
G__57.cljs$core$IFn$_invoke$arity$2 = G__57__2;
return G__57;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.async.impl.channels.chan;},new cljs.core.Symbol("cljs.core.async.impl.channels","chan","cljs.core.async.impl.channels/chan",(-586749983),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.channels","cljs.core.async.impl.channels",(-448510655),null),new cljs.core.Symbol(null,"chan","chan",(-462490168),null),"cljs/core/async/impl/channels.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(168),(168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"xform","xform",(-85179481),null),new cljs.core.Symbol(null,"exh","exh",(-922658902),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.channels.chan)?cljs.core.async.impl.channels.chan.cljs$lang$test:null)]));
