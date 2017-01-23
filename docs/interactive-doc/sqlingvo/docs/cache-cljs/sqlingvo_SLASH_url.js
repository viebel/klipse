goog.provide("sqlingvo.url");
/**
 * The regular expression that matches a database URL.
 */
(function (){
sqlingvo.url.regular_expression = /(([^:]+):)?([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/([^?]*))(\?(.*))?))/; return (
new cljs.core.Var(function(){return sqlingvo.url.regular_expression;},new cljs.core.Symbol("sqlingvo.url","regular-expression","sqlingvo.url/regular-expression",(-1736530997),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.url","sqlingvo.url",(-961991588),null),new cljs.core.Symbol(null,"regular-expression","regular-expression",(-675407623),null),"sqlingvo/url.cljc",(24),(1),(5),(5),cljs.core.List.EMPTY,"The regular expression that matches a database URL.",(cljs.core.truth_(sqlingvo.url.regular_expression)?sqlingvo.url.regular_expression.cljs$lang$test:null)])));})()
;
/**
 * Parse the database `url` with `regular-expression` and return the
 *   database spec. Returns nil if the URL does not match.
 */
(function (){
sqlingvo.url.parse = (function sqlingvo$url$parse(url){
var temp__19834__auto__ = cljs.core.re_matches.call(null,sqlingvo.url.regular_expression,[cljs.core.str(url)].join(''));
if(cljs.core.truth_(temp__19834__auto__)){
var matches = temp__19834__auto__;
var database = cljs.core.nth.call(null,matches,(13));
var server_name = cljs.core.nth.call(null,matches,(8));
var server_port = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,(10)));
var query_string = cljs.core.nth.call(null,matches,(15));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pool","pool",(-1814211613)),cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(2))),new cljs.core.Keyword(null,"password","password",(417022471)),cljs.core.nth.call(null,matches,(6)),new cljs.core.Keyword(null,"name","name",(1843675177)),database,new cljs.core.Keyword(null,"username","username",(1605666410)),cljs.core.nth.call(null,matches,(5)),new cljs.core.Keyword(null,"server-port","server-port",(663745648)),server_port,new cljs.core.Keyword(null,"query-params","query-params",(900640534)),no.en.core.parse_query_params.call(null,query_string),new cljs.core.Keyword(null,"server-name","server-name",(-1012104295)),server_name,new cljs.core.Keyword(null,"scheme","scheme",(90199613)),cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(3)))], null);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.url.parse;},new cljs.core.Symbol("sqlingvo.url","parse","sqlingvo.url/parse",(1413613006),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.url","sqlingvo.url",(-961991588),null),new cljs.core.Symbol(null,"parse","parse",(478366908),null),"sqlingvo/url.cljc",(12),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",(1916828573),null)], null)),"Parse the database `url` with `regular-expression` and return the\n  database spec. Returns nil if the URL does not match.",(cljs.core.truth_(sqlingvo.url.parse)?sqlingvo.url.parse.cljs$lang$test:null)])));})()
;
/**
 * Parse the database `url` with `regular-expression` and return the
 *   database spec. Throws an exception if `url` does not match.
 */
(function (){
sqlingvo.url.parse_BANG_ = (function sqlingvo$url$parse_BANG_(url){
var or__20817__auto__ = sqlingvo.url.parse.call(null,url);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't parse database URL: "),cljs.core.str(url)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",(276297046)),url], null));
}
}); return (
new cljs.core.Var(function(){return sqlingvo.url.parse_BANG_;},new cljs.core.Symbol("sqlingvo.url","parse!","sqlingvo.url/parse!",(895968134),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.url","sqlingvo.url",(-961991588),null),new cljs.core.Symbol(null,"parse!","parse!",(-39409032),null),"sqlingvo/url.cljc",(13),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",(1916828573),null)], null)),"Parse the database `url` with `regular-expression` and return the\n  database spec. Throws an exception if `url` does not match.",(cljs.core.truth_(sqlingvo.url.parse_BANG_)?sqlingvo.url.parse_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Format the `db` spec as a URL.
 */
(function (){
sqlingvo.url.format = (function sqlingvo$url$format(db){
return no.en.core.format_url.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"uri","uri",(-774711847)),[cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(db))].join('')));
}); return (
new cljs.core.Var(function(){return sqlingvo.url.format;},new cljs.core.Symbol("sqlingvo.url","format","sqlingvo.url/format",(-610033541),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.url","sqlingvo.url",(-961991588),null),new cljs.core.Symbol(null,"format","format",(333606761),null),"sqlingvo/url.cljc",(13),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Format the `db` spec as a URL.",(cljs.core.truth_(sqlingvo.url.format)?sqlingvo.url.format.cljs$lang$test:null)])));})()
;
