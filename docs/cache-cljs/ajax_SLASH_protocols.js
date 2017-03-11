goog.provide("ajax.protocols");

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
(function (){
ajax.protocols.AjaxImpl = function(){}; return (
new cljs.core.Var(function(){return ajax.protocols.AjaxImpl;},new cljs.core.Symbol("ajax.protocols","AjaxImpl","ajax.protocols/AjaxImpl",(-222016146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"AjaxImpl","AjaxImpl",(-1064590623),null),"ajax/protocols.cljc",(22),(1),(3),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"-js-ajax-request","-js-ajax-request",(-1245730529),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Makes an actual ajax request.  All parameters except opts\n     are in JS format.  Should return an AjaxRequest."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)], null)])], null),(3),cljs.core.List.EMPTY,"An abstraction for a javascript class that implements\n   Ajax calls.",cljs.core.list("@interface"),(cljs.core.truth_(ajax.protocols.AjaxImpl)?ajax.protocols.AjaxImpl.cljs$lang$test:null)])));})()
;

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
(function (){
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,request,handler);
} else {
var m__25347__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._js_ajax_request;},new cljs.core.Symbol("ajax.protocols","-js-ajax-request","ajax.protocols/-js-ajax-request",(-1008251742),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxImpl","ajax.protocols/AjaxImpl",(-222016146),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-js-ajax-request","-js-ajax-request",(-1245730529),null),"ajax/protocols.cljc",(20),(1),(3),(6),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),"Makes an actual ajax request.  All parameters except opts\n     are in JS format.  Should return an AjaxRequest.",(cljs.core.truth_(ajax.protocols._js_ajax_request)?ajax.protocols._js_ajax_request.cljs$lang$test:null)])));})()
;


/**
 * An abstraction for a running ajax request.
 * @interface
 */
(function (){
ajax.protocols.AjaxRequest = function(){}; return (
new cljs.core.Var(function(){return ajax.protocols.AjaxRequest;},new cljs.core.Symbol("ajax.protocols","AjaxRequest","ajax.protocols/AjaxRequest",(-2103511614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"AjaxRequest","AjaxRequest",(-749331663),null),"ajax/protocols.cljc",(25),(1),(10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"-abort","-abort",(-1020908729),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Aborts a running ajax request, if possible."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)])], null),(10),cljs.core.List.EMPTY,"An abstraction for a running ajax request.",cljs.core.list("@interface"),(cljs.core.truth_(ajax.protocols.AjaxRequest)?ajax.protocols.AjaxRequest.cljs$lang$test:null)])));})()
;

/**
 * Aborts a running ajax request, if possible.
 */
(function (){
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._abort[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._abort;},new cljs.core.Symbol("ajax.protocols","-abort","ajax.protocols/-abort",(-1646310224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxRequest","ajax.protocols/AjaxRequest",(-2103511614),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-abort","-abort",(-1020908729),null),"ajax/protocols.cljc",(10),(1),(10),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Aborts a running ajax request, if possible.",(cljs.core.truth_(ajax.protocols._abort)?ajax.protocols._abort.cljs$lang$test:null)])));})()
;


/**
 * An abstraction for an ajax response.
 * @interface
 */
(function (){
ajax.protocols.AjaxResponse = function(){}; return (
new cljs.core.Var(function(){return ajax.protocols.AjaxResponse;},new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"AjaxResponse","AjaxResponse",(331565261),null),"ajax/protocols.cljc",(26),(1),(15),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"-status","-status",(432393696),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns the HTTP Status of the response as an integer."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-status-text","-status-text",(-881856468),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns the HTTP Status Text of the response as a string."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-body","-body",(1844439543),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-get-response-header","-get-response-header",(-1843423027),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the specified response header (specified by a string) as a string."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"header","header",(1759972661),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-was-aborted","-was-aborted",(-525730189),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Was the response aborted."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)])], null),(15),cljs.core.List.EMPTY,"An abstraction for an ajax response.",cljs.core.list("@interface"),(cljs.core.truth_(ajax.protocols.AjaxResponse)?ajax.protocols.AjaxResponse.cljs$lang$test:null)])));})()
;

/**
 * Returns the HTTP Status of the response as an integer.
 */
(function (){
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._status[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._status;},new cljs.core.Symbol("ajax.protocols","-status","ajax.protocols/-status",(1796009845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-status","-status",(432393696),null),"ajax/protocols.cljc",(11),(1),(15),(17),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the HTTP Status of the response as an integer.",(cljs.core.truth_(ajax.protocols._status)?ajax.protocols._status.cljs$lang$test:null)])));})()
;

/**
 * Returns the HTTP Status Text of the response as a string.
 */
(function (){
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._status_text[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._status_text;},new cljs.core.Symbol("ajax.protocols","-status-text","ajax.protocols/-status-text",(416731867),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-status-text","-status-text",(-881856468),null),"ajax/protocols.cljc",(16),(1),(15),(19),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the HTTP Status Text of the response as a string.",(cljs.core.truth_(ajax.protocols._status_text)?ajax.protocols._status_text.cljs$lang$test:null)])));})()
;

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
(function (){
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._body[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._body;},new cljs.core.Symbol("ajax.protocols","-body","ajax.protocols/-body",(1042863200),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-body","-body",(1844439543),null),"ajax/protocols.cljc",(9),(1),(15),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.",(cljs.core.truth_(ajax.protocols._body)?ajax.protocols._body.cljs$lang$test:null)])));})()
;

/**
 * Gets the specified response header (specified by a string) as a string.
 */
(function (){
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,header);
} else {
var m__25347__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._get_response_header;},new cljs.core.Symbol("ajax.protocols","-get-response-header","ajax.protocols/-get-response-header",(1557445456),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-get-response-header","-get-response-header",(-1843423027),null),"ajax/protocols.cljc",(24),(1),(15),(23),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"header","header",(1759972661),null)], null)),"Gets the specified response header (specified by a string) as a string.",(cljs.core.truth_(ajax.protocols._get_response_header)?ajax.protocols._get_response_header.cljs$lang$test:null)])));})()
;

/**
 * Was the response aborted.
 */
(function (){
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$);
} else {
var m__25347__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._was_aborted;},new cljs.core.Symbol("ajax.protocols","-was-aborted","ajax.protocols/-was-aborted",(846125318),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","AjaxResponse","ajax.protocols/AjaxResponse",(631008080),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-was-aborted","-was-aborted",(-525730189),null),"ajax/protocols.cljc",(16),(1),(15),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Was the response aborted.",(cljs.core.truth_(ajax.protocols._was_aborted)?ajax.protocols._was_aborted.cljs$lang$test:null)])));})()
;


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
(function (){
ajax.protocols.Interceptor = function(){}; return (
new cljs.core.Var(function(){return ajax.protocols.Interceptor;},new cljs.core.Symbol("ajax.protocols","Interceptor","ajax.protocols/Interceptor",(-1826726350),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"Interceptor","Interceptor",(-581468987),null),"ajax/protocols.cljc",(25),(1),(28),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"-process-request","-process-request",(174245715),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Transforms the opts"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-process-response","-process-response",(1132248499),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Transforms the raw response (an implementation of AjaxResponse)"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null)], null)])], null),(28),cljs.core.List.EMPTY,"An abstraction for something that processes requests and responses.",cljs.core.list("@interface"),(cljs.core.truth_(ajax.protocols.Interceptor)?ajax.protocols.Interceptor.cljs$lang$test:null)])));})()
;

/**
 * Transforms the opts
 */
(function (){
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._process_request[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,request);
} else {
var m__25347__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._process_request;},new cljs.core.Symbol("ajax.protocols","-process-request","ajax.protocols/-process-request",(1412030694),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","Interceptor","ajax.protocols/Interceptor",(-1826726350),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-process-request","-process-request",(174245715),null),"ajax/protocols.cljc",(20),(1),(28),(30),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),"Transforms the opts",(cljs.core.truth_(ajax.protocols._process_request)?ajax.protocols._process_request.cljs$lang$test:null)])));})()
;

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
(function (){
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__25346__auto__ = (((this$ == null))?null:this$);
var m__25347__auto__ = (ajax.protocols._process_response[goog.typeOf(x__25346__auto__)]);
if(!((m__25347__auto__ == null))){
return m__25347__auto__.call(null,this$,response);
} else {
var m__25347__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__25347__auto____$1 == null))){
return m__25347__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.protocols._process_response;},new cljs.core.Symbol("ajax.protocols","-process-response","ajax.protocols/-process-response",(-1861773252),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("ajax.protocols","Interceptor","ajax.protocols/Interceptor",(-1826726350),null),new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"-process-response","-process-response",(1132248499),null),"ajax/protocols.cljc",(21),(1),(28),(32),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null)),"Transforms the raw response (an implementation of AjaxResponse)",(cljs.core.truth_(ajax.protocols._process_response)?ajax.protocols._process_response.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
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
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25061__auto__,k__25062__auto__){
var self__ = this;
var this__25061__auto____$1 = this;
return this__25061__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__25062__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25063__auto__,k1182,else__25064__auto__){
var self__ = this;
var this__25063__auto____$1 = this;
var G__1184 = (((k1182 instanceof cljs.core.Keyword))?k1182.fqn:null);
switch (G__1184) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1182,else__25064__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25080__auto__,writer__25081__auto__,opts__25082__auto__){
var self__ = this;
var this__25080__auto____$1 = this;
var pr_pair__25083__auto__ = ((function (this__25080__auto____$1){
return (function (keyval__25084__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25081__auto__,cljs.core.pr_writer,""," ","",opts__25082__auto__,keyval__25084__auto__);
});})(this__25080__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25081__auto__,pr_pair__25083__auto__,"#ajax.protocols.Response{",", ","}",opts__25082__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",(-1997798413)),self__.status],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",(-2049205669)),self__.body],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),self__.status_text],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",(-835030129)),self__.headers],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1181){
var self__ = this;
var G__1181__$1 = this;
return (new cljs.core.RecordIter((0),G__1181__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",(-1997798413)),new cljs.core.Keyword(null,"body","body",(-2049205669)),new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),new cljs.core.Keyword(null,"headers","headers",(-835030129)),new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25059__auto__){
var self__ = this;
var this__25059__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25053__auto__){
var self__ = this;
var this__25053__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25065__auto__){
var self__ = this;
var this__25065__auto____$1 = this;
return ((5) + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25054__auto__){
var self__ = this;
var this__25054__auto____$1 = this;
var h__24144__auto__ = self__.__hash;
if(!((h__24144__auto__ == null))){
return h__24144__auto__;
} else {
var h__24144__auto____$1 = cljs.core.hash_imap.call(null,this__25054__auto____$1);
self__.__hash = h__24144__auto____$1;

return h__24144__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25057__auto__,other__25058__auto__){
var self__ = this;
var this__25057__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23067__auto__ = other__25058__auto__;
if(cljs.core.truth_(and__23067__auto__)){
return ((this__25057__auto____$1.constructor === other__25058__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__25057__auto____$1,other__25058__auto__));
} else {
return and__23067__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",(-2049205669)).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",(-1997798413)).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",(-835030129)).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25070__auto__,k__25071__auto__){
var self__ = this;
var this__25070__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",(-1997798413)),null,new cljs.core.Keyword(null,"body","body",(-2049205669)),null,new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),null,new cljs.core.Keyword(null,"headers","headers",(-835030129)),null,new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)),null], null), null),k__25071__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25070__auto____$1),self__.__meta),k__25071__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25071__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25068__auto__,k__25069__auto__,G__1181){
var self__ = this;
var this__25068__auto____$1 = this;
var pred__1185 = cljs.core.keyword_identical_QMARK_;
var expr__1186 = k__25069__auto__;
if(cljs.core.truth_(pred__1185.call(null,new cljs.core.Keyword(null,"status","status",(-1997798413)),expr__1186))){
return (new ajax.protocols.Response(G__1181,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1185.call(null,new cljs.core.Keyword(null,"body","body",(-2049205669)),expr__1186))){
return (new ajax.protocols.Response(self__.status,G__1181,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1185.call(null,new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),expr__1186))){
return (new ajax.protocols.Response(self__.status,self__.body,G__1181,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1185.call(null,new cljs.core.Keyword(null,"headers","headers",(-835030129)),expr__1186))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__1181,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1185.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)),expr__1186))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__1181,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25069__auto__,G__1181),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25073__auto__){
var self__ = this;
var this__25073__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",(-1997798413)),self__.status],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",(-2049205669)),self__.body],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),self__.status_text],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",(-835030129)),self__.headers],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25060__auto__,G__1181){
var self__ = this;
var this__25060__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__1181,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25066__auto__,entry__25067__auto__){
var self__ = this;
var this__25066__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25067__auto__)){
return this__25066__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__25067__auto__,(0)),cljs.core._nth.call(null,entry__25067__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25066__auto____$1,entry__25067__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"body","body",(-408674142),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"headers","headers",(805501398),null),new cljs.core.Symbol(null,"was-aborted","was-aborted",(-479553301),null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__25336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__25336__auto__,writer__25337__auto__){
return cljs.core._write.call(null,writer__25337__auto__,"ajax.protocols/Response");
});

(function (){
ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.protocols.__GT_Response;},new cljs.core.Symbol("ajax.protocols","->Response","ajax.protocols/->Response",(841058802),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"->Response","->Response",(-1059558801),null),"ajax/protocols.cljc",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"body","body",(-408674142),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"headers","headers",(805501398),null),new cljs.core.Symbol(null,"was-aborted","was-aborted",(-479553301),null)], null)),null,(cljs.core.truth_(ajax.protocols.__GT_Response)?ajax.protocols.__GT_Response.cljs$lang$test:null)])));})()
;

(function (){
ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__1183){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",(-1997798413)).cljs$core$IFn$_invoke$arity$1(G__1183),new cljs.core.Keyword(null,"body","body",(-2049205669)).cljs$core$IFn$_invoke$arity$1(G__1183),new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)).cljs$core$IFn$_invoke$arity$1(G__1183),new cljs.core.Keyword(null,"headers","headers",(-835030129)).cljs$core$IFn$_invoke$arity$1(G__1183),new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828)).cljs$core$IFn$_invoke$arity$1(G__1183),null,cljs.core.dissoc.call(null,G__1183,new cljs.core.Keyword(null,"status","status",(-1997798413)),new cljs.core.Keyword(null,"body","body",(-2049205669)),new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),new cljs.core.Keyword(null,"headers","headers",(-835030129)),new cljs.core.Keyword(null,"was-aborted","was-aborted",(-2120084828))),null));
}); return (
new cljs.core.Var(function(){return ajax.protocols.map__GT_Response;},new cljs.core.Symbol("ajax.protocols","map->Response","ajax.protocols/map->Response",(-1383875025),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.protocols","ajax.protocols",(-1931495210),null),new cljs.core.Symbol(null,"map->Response","map->Response",(-600272678),null),"ajax/protocols.cljc",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1183","G__1183",(1902552429),null)], null)),null,(cljs.core.truth_(ajax.protocols.map__GT_Response)?ajax.protocols.map__GT_Response.cljs$lang$test:null)])));})()
;

