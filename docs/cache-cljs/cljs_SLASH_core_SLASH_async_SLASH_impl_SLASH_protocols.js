goog.provide("cljs.core.async.impl.protocols");
(function (){
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.MAX_QUEUE_SIZE;},new cljs.core.Symbol("cljs.core.async.impl.protocols","MAX-QUEUE-SIZE","cljs.core.async.impl.protocols/MAX-QUEUE-SIZE",(-719673046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"MAX-QUEUE-SIZE","MAX-QUEUE-SIZE",(1507428732),null),"cljs/core/async/impl/protocols.cljs",(28),(1),true,(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)?cljs.core.async.impl.protocols.MAX_QUEUE_SIZE.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.ReadPort = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.ReadPort;},new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"ReadPort","ReadPort",(1322894448),null),"cljs/core/async/impl/protocols.cljs",(22),(1),(13),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"take!","take!",(626882591),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"derefable val if taken, nil if take was enqueued"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1-handler","fn1-handler",(1382191329),null)], null)], null)], true, false)], null),(13),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.ReadPort)?cljs.core.async.impl.protocols.ReadPort.cljs$lang$test:null)])));})()
;

/**
 * derefable val if taken, nil if take was enqueued
 */
(function (){
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__23054__auto__ = (((port == null))?null:port);
var m__23055__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,port,fn1_handler);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.take_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","take!","cljs.core.async.impl.protocols/take!",(-1583380563),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","ReadPort","cljs.core.async.impl.protocols/ReadPort",(-879043634),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"take!","take!",(626882591),null),"cljs/core/async/impl/protocols.cljs",(9),(1),(13),(14),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"fn1-handler","fn1-handler",(1382191329),null)], null)),"derefable val if taken, nil if take was enqueued",(cljs.core.truth_(cljs.core.async.impl.protocols.take_BANG_)?cljs.core.async.impl.protocols.take_BANG_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.WritePort = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.WritePort;},new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"WritePort","WritePort",(-1682597729),null),"cljs/core/async/impl/protocols.cljs",(23),(1),(16),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"put!","put!",(-531220546),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"derefable boolean (false if already closed) if handled, nil if put was enqueued.\n                               Must throw on nil val."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1-handler","fn1-handler",(1382191329),null)], null)], null)], true, false)], null),(16),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.WritePort)?cljs.core.async.impl.protocols.WritePort.cljs$lang$test:null)])));})()
;

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
(function (){
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__23054__auto__ = (((port == null))?null:port);
var m__23055__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,port,val,fn1_handler);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.put_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","put!","cljs.core.async.impl.protocols/put!",(1696012032),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","WritePort","cljs.core.async.impl.protocols/WritePort",(7649325),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"put!","put!",(-531220546),null),"cljs/core/async/impl/protocols.cljs",(8),(1),(16),(17),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",(-1119498507),null),new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"fn1-handler","fn1-handler",(1382191329),null)], null)),"derefable boolean (false if already closed) if handled, nil if put was enqueued.\n                               Must throw on nil val.",(cljs.core.truth_(cljs.core.async.impl.protocols.put_BANG_)?cljs.core.async.impl.protocols.put_BANG_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.Channel = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.Channel;},new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"Channel","Channel",(-1566654414),null),"cljs/core/async/impl/protocols.cljs",(21),(1),(20),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"close!","close!",(-438778971),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",(-462490168),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"closed?","closed?",(231762487),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",(-462490168),null)], null)], null)], true, false)], null),(20),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.Channel)?cljs.core.async.impl.protocols.Channel.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__23054__auto__ = (((chan == null))?null:chan);
var m__23055__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,chan);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.close_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","close!","cljs.core.async.impl.protocols/close!",(1654252395),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"close!","close!",(-438778971),null),"cljs/core/async/impl/protocols.cljs",(10),(1),(20),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",(-462490168),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.protocols.close_BANG_)?cljs.core.async.impl.protocols.close_BANG_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__23054__auto__ = (((chan == null))?null:chan);
var m__23055__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,chan);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.closed_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","closed?","cljs.core.async.impl.protocols/closed?",(-2129573279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",(668983692),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"closed?","closed?",(231762487),null),"cljs/core/async/impl/protocols.cljs",(11),(1),(20),(22),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",(-462490168),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.protocols.closed_QMARK_)?cljs.core.async.impl.protocols.closed_QMARK_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.Handler = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.Handler;},new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"Handler","Handler",(1735718821),null),"cljs/core/async/impl/protocols.cljs",(21),(1),(24),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"active?","active?",(2100031303),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"returns true if has callback. Must work w/o lock"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"blockable?","blockable?",(433713575),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"returns true if this handler may be blocked, otherwise it must not block"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"commit","commit",(1753905916),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"commit to fulfilling its end of the transfer, returns cb. Must be called within lock"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)], null)], true, false)], null),(24),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.Handler)?cljs.core.async.impl.protocols.Handler.cljs$lang$test:null)])));})()
;

/**
 * returns true if has callback. Must work w/o lock
 */
(function (){
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__23054__auto__ = (((h == null))?null:h);
var m__23055__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,h);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.active_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","active?","cljs.core.async.impl.protocols/active?",(-236155127),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"active?","active?",(2100031303),null),"cljs/core/async/impl/protocols.cljs",(11),(1),(24),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)),"returns true if has callback. Must work w/o lock",(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_)?cljs.core.async.impl.protocols.active_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
(function (){
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
var x__23054__auto__ = (((h == null))?null:h);
var m__23055__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,h);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.blockable_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","blockable?","cljs.core.async.impl.protocols/blockable?",(-1658973707),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"blockable?","blockable?",(433713575),null),"cljs/core/async/impl/protocols.cljs",(14),(1),(24),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)),"returns true if this handler may be blocked, otherwise it must not block",(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_)?cljs.core.async.impl.protocols.blockable_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
(function (){
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__23054__auto__ = (((h == null))?null:h);
var m__23055__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,h);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.commit;},new cljs.core.Symbol("cljs.core.async.impl.protocols","commit","cljs.core.async.impl.protocols/commit",(-473212350),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Handler","cljs.core.async.impl.protocols/Handler",(-365586581),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"commit","commit",(1753905916),null),"cljs/core/async/impl/protocols.cljs",(10),(1),(24),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null)], null)),"commit to fulfilling its end of the transfer, returns cb. Must be called within lock",(cljs.core.truth_(cljs.core.async.impl.protocols.commit)?cljs.core.async.impl.protocols.commit.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.Buffer = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.Buffer;},new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null),"cljs/core/async/impl/protocols.cljs",(20),(1),(30),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"full?","full?",(-92675286),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"returns true if buffer can accept put"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"remove!","remove!",(-971026110),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"remove and return next item from buffer, called under chan mutex"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"add!*","add!*",(700170479),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"if room, add item to the buffer, returns b, called under chan mutex"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"close-buf!","close-buf!",(759757635),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"called on chan closed under chan mutex, return ignored"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)], null)], true, false)], null),(30),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.Buffer)?cljs.core.async.impl.protocols.Buffer.cljs$lang$test:null)])));})()
;

/**
 * returns true if buffer can accept put
 */
(function (){
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__23054__auto__ = (((b == null))?null:b);
var m__23055__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,b);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.full_QMARK_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","full?","cljs.core.async.impl.protocols/full?",(2100871908),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"full?","full?",(-92675286),null),"cljs/core/async/impl/protocols.cljs",(9),(1),(30),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"returns true if buffer can accept put",(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_)?cljs.core.async.impl.protocols.full_QMARK_.cljs$lang$test:null)])));})()
;

/**
 * remove and return next item from buffer, called under chan mutex
 */
(function (){
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__23054__auto__ = (((b == null))?null:b);
var m__23055__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,b);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.remove_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","remove!","cljs.core.async.impl.protocols/remove!",(1272476400),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"remove!","remove!",(-971026110),null),"cljs/core/async/impl/protocols.cljs",(11),(1),(30),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"remove and return next item from buffer, called under chan mutex",(cljs.core.truth_(cljs.core.async.impl.protocols.remove_BANG_)?cljs.core.async.impl.protocols.remove_BANG_.cljs$lang$test:null)])));})()
;

/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
(function (){
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__23054__auto__ = (((b == null))?null:b);
var m__23055__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,b,itm);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.add_BANG__STAR_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","add!*","cljs.core.async.impl.protocols/add!*",(-1804017615),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"add!*","add!*",(700170479),null),"cljs/core/async/impl/protocols.cljs",(9),(1),(30),(33),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),"if room, add item to the buffer, returns b, called under chan mutex",(cljs.core.truth_(cljs.core.async.impl.protocols.add_BANG__STAR_)?cljs.core.async.impl.protocols.add_BANG__STAR_.cljs$lang$test:null)])));})()
;

/**
 * called on chan closed under chan mutex, return ignored
 */
(function (){
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
var x__23054__auto__ = (((b == null))?null:b);
var m__23055__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,b);
} else {
var m__23055__auto____$1 = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.close_buf_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","close-buf!","cljs.core.async.impl.protocols/close-buf!",(-1500014347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.async.impl.protocols","Buffer","cljs.core.async.impl.protocols/Buffer",(-1746985281),null),new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"close-buf!","close-buf!",(759757635),null),"cljs/core/async/impl/protocols.cljs",(14),(1),(30),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"called on chan closed under chan mutex, return ignored",(cljs.core.truth_(cljs.core.async.impl.protocols.close_buf_BANG_)?cljs.core.async.impl.protocols.close_buf_BANG_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var args22 = [];
var len__23656__auto___25 = arguments.length;
var i__23657__auto___26 = (0);
while(true){
if((i__23657__auto___26 < len__23656__auto___25)){
args22.push((arguments[i__23657__auto___26]));

var G__27 = (i__23657__auto___26 + (1));
i__23657__auto___26 = G__27;
continue;
} else {
}
break;
}

var G__24 = args22.length;
switch (G__24) {
case (1):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.add_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","add!","cljs.core.async.impl.protocols/add!",(-63751713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"add!","add!",(2046056845),null),"cljs/core/async/impl/protocols.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.protocols.add_BANG_)?cljs.core.async.impl.protocols.add_BANG_.cljs$lang$test:null)])));})()
;

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

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.async.impl.protocols.add_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.protocols","add!","cljs.core.async.impl.protocols/add!",(-63751713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"add!","add!",(2046056845),null),"cljs/core/async/impl/protocols.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"itm","itm",(-713282527),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.protocols.add_BANG_)?cljs.core.async.impl.protocols.add_BANG_.cljs$lang$test:null)]));

/**
 * @interface
 */
(function (){
cljs.core.async.impl.protocols.UnblockingBuffer = function(){}; return (
new cljs.core.Var(function(){return cljs.core.async.impl.protocols.UnblockingBuffer;},new cljs.core.Symbol("cljs.core.async.impl.protocols","UnblockingBuffer","cljs.core.async.impl.protocols/UnblockingBuffer",(-2140758482),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.async.impl.protocols","cljs.core.async.impl.protocols",(1922237102),null),new cljs.core.Symbol(null,"UnblockingBuffer","UnblockingBuffer",(94666488),null),"cljs/core/async/impl/protocols.cljs",(30),(1),(43),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.EMPTY], null),(43),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.async.impl.protocols.UnblockingBuffer)?cljs.core.async.impl.protocols.UnblockingBuffer.cljs$lang$test:null)])));})()
;

