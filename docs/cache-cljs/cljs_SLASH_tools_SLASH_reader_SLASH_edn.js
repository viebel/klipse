goog.provide("cljs.tools.reader.edn");
(function (){
cljs.tools.reader.edn.read; return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read;},new cljs.core.Symbol("cljs.tools.reader.edn","read","cljs.tools.reader.edn/read",(653623649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read","read",(-1514377108),null),"cljs/tools/reader/edn.cljs",(14),(1),(28),true,(28),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.read)?cljs.tools.reader.edn.read.cljs$lang$test:null)])));})()
;

(function (){
cljs.tools.reader.edn.macros; return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.macros;},new cljs.core.Symbol("cljs.tools.reader.edn","macros","cljs.tools.reader.edn/macros",(526034419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"macros","macros",(-1843096338),null),"cljs/tools/reader/edn.cljs",(21),(1),(28),true,(28),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.macros)?cljs.tools.reader.edn.macros.cljs$lang$test:null)])));})()
;

(function (){
cljs.tools.reader.edn.dispatch_macros; return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.dispatch_macros;},new cljs.core.Symbol("cljs.tools.reader.edn","dispatch-macros","cljs.tools.reader.edn/dispatch-macros",(1238477070),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"dispatch-macros","dispatch-macros",(-703882639),null),"cljs/tools/reader/edn.cljs",(37),(1),(28),true,(28),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.dispatch_macros)?cljs.tools.reader.edn.dispatch_macros.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__23164__auto__ = !(("#" === ch));
if(and__23164__auto__){
var and__23164__auto____$1 = !(("'" === ch));
if(and__23164__auto____$1){
var and__23164__auto____$2 = !((":" === ch));
if(and__23164__auto____$2){
return cljs.tools.reader.edn.macros.call(null,ch);
} else {
return and__23164__auto____$2;
}
} else {
return and__23164__auto____$1;
}
} else {
return and__23164__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.macro_terminating_QMARK_;},new cljs.core.Symbol("cljs.tools.reader.edn","macro-terminating?","cljs.tools.reader.edn/macro-terminating?",(234094836),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"macro-terminating?","macro-terminating?",(-1959604229),null),"cljs/tools/reader/edn.cljs",(35),(1),(30),(30),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,((cljs.tools.reader.edn.macro_terminating_QMARK_)?cljs.tools.reader.edn.macro_terminating_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.not_constituent_QMARK_;},new cljs.core.Symbol("cljs.tools.reader.edn","not-constituent?","cljs.tools.reader.edn/not-constituent?",(-445481320),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"not-constituent?","not-constituent?",(1713942507),null),"cljs/tools/reader/edn.cljs",(33),(1),(36),(36),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,((cljs.tools.reader.edn.not_constituent_QMARK_)?cljs.tools.reader.edn.not_constituent_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var args22 = [];
var len__24987__auto___26 = arguments.length;
var i__24988__auto___27 = (0);
while(true){
if((i__24988__auto___27 < len__24987__auto___26)){
args22.push((arguments[i__24988__auto___27]));

var G__28 = (i__24988__auto___27 + (1));
i__24988__auto___27 = G__28;
continue;
} else {
}
break;
}

var G__24 = args22.length;
switch (G__24) {
case (2):
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",(-1809266548),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-token","read-token",(392624627),null),"cljs/tools/reader/edn.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)])));})()
;

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2 = (function (rdr,initch){
return cljs.tools.reader.edn.read_token.call(null,rdr,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,initch,validate_leading_QMARK_){
if(cljs.core.not.call(null,initch)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
if(cljs.core.truth_((function (){var and__23164__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__23164__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_.call(null,initch);
} else {
return and__23164__auto__;
}
})())){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid leading character: ",initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread.call(null,rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid constituent character: ",ch);
} else {
var G__30 = (function (){var G__25 = sb;
G__25.append(cljs.tools.reader.reader_types.read_char.call(null,rdr));

return G__25;
})();
var G__31 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
sb = G__30;
ch = G__31;
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",(-1809266548),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-token","read-token",(392624627),null),"cljs/tools/reader/edn.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",(1185429770),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
(function (){
cljs.tools.reader.edn.read_tagged; return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_tagged;},new cljs.core.Symbol("cljs.tools.reader.edn","read-tagged","cljs.tools.reader.edn/read-tagged",(-1610977071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-tagged","read-tagged",(490742242),null),"cljs/tools/reader/edn.cljs",(21),(1),(64),true,(64),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.read_tagged)?cljs.tools.reader.edn.read_tagged.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__22382__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__22382__auto__)){
var ch = temp__22382__auto__;
var temp__22382__auto____$1 = cljs.tools.reader.edn.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__22382__auto____$1)){
var dm = temp__22382__auto____$1;
return dm.call(null,rdr,ch,opts);
} else {
var temp__22382__auto____$2 = cljs.tools.reader.edn.read_tagged.call(null,(function (){var G__33 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__33,ch);

return G__33;
})(),ch,opts);
if(cljs.core.truth_(temp__22382__auto____$2)){
var obj = temp__22382__auto____$2;
return obj;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_dispatch;},new cljs.core.Symbol("cljs.tools.reader.edn","read-dispatch","cljs.tools.reader.edn/read-dispatch",(-991048699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-dispatch","read-dispatch",(2035522422),null),"cljs/tools/reader/edn.cljs",(21),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_dispatch)?cljs.tools.reader.edn.read_dispatch.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_unmatched_delimiter;},new cljs.core.Symbol("cljs.tools.reader.edn","read-unmatched-delimiter","cljs.tools.reader.edn/read-unmatched-delimiter",(1250060534),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-unmatched-delimiter","read-unmatched-delimiter",(-918012955),null),"cljs/tools/reader/edn.cljs",(32),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"ch","ch",(1085813622),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_unmatched_delimiter)?cljs.tools.reader.edn.read_unmatched_delimiter.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var args34 = [];
var len__24987__auto___37 = arguments.length;
var i__24988__auto___38 = (0);
while(true){
if((i__24988__auto___38 < len__24987__auto___37)){
args34.push((arguments[i__24988__auto___38]));

var G__39 = (i__24988__auto___38 + (1));
i__24988__auto___38 = G__39;
continue;
} else {
}
break;
}

var G__36 = args34.length;
switch (G__36) {
case (4):
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_unicode_char;},new cljs.core.Symbol("cljs.tools.reader.edn","read-unicode-char","cljs.tools.reader.edn/read-unicode-char",(1255640279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-unicode-char","read-unicode-char",(-811696700),null),"cljs/tools/reader/edn.cljs",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(84),(84),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_unicode_char)?cljs.tools.reader.edn.read_unicode_char.cljs$lang$test:null)])));})()
;

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid unicode character: \\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",(-1845493170))], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",(-1845493170))], null));
} else {
var G__41 = (i + (1));
var G__42 = (d + (uc * base));
i = G__41;
uc = G__42;
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",(-1845493170))], null));
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__23200__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__23200__auto__){
return or__23200__auto__;
} else {
var or__23200__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__23200__auto____$1)){
return or__23200__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid character length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", should be: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",(-1845493170))], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",(-1845493170))], null));
} else {
var G__43 = (i + (1));
var G__44 = (d + (uc * base));
i = G__43;
uc = G__44;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = (5);

new cljs.core.Var(function(){return cljs.tools.reader.edn.read_unicode_char;},new cljs.core.Symbol("cljs.tools.reader.edn","read-unicode-char","cljs.tools.reader.edn/read-unicode-char",(1255640279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-unicode-char","read-unicode-char",(-811696700),null),"cljs/tools/reader/edn.cljs",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(84),(84),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",(429068312),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"base","base",(1825810849),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.Symbol(null,"exact?","exact?",(-2028776167),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_unicode_char)?cljs.tools.reader.edn.read_unicode_char.cljs$lang$test:null)]));
(function (){
cljs.tools.reader.edn.upper_limit = ("\ud7ff" | (0)); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.upper_limit;},new cljs.core.Symbol("cljs.tools.reader.edn","upper-limit","cljs.tools.reader.edn/upper-limit",(-366387133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"upper-limit","upper-limit",(1768108372),null),"cljs/tools/reader/edn.cljs",(35),(1),true,(121),(121),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.upper_limit)?cljs.tools.reader.edn.upper_limit.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.lower_limit = ("\ue000" | (0)); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.lower_limit;},new cljs.core.Symbol("cljs.tools.reader.edn","lower-limit","cljs.tools.reader.edn/lower-limit",(666318001),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"lower-limit","lower-limit",(-1158552132),null),"cljs/tools/reader/edn.cljs",(35),(1),true,(122),(122),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.tools.reader.edn.lower_limit)?cljs.tools.reader.edn.lower_limit.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.edn.read_token.call(null,rdr,ch,false));
var token_len = cljs.core.count.call(null,token);
if(((1) === token_len)){
return cljs.core.nth.call(null,token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_char_STAR_;},new cljs.core.Symbol("cljs.tools.reader.edn","read-char*","cljs.tools.reader.edn/read-char*",(-606185164),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-char*","read-char*",(1494526523),null),"cljs/tools/reader/edn.cljs",(18),(1),(124),(124),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"backslash","backslash",(-863649243),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_char_STAR_)?cljs.tools.reader.edn.read_char_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(delim,rdr,opts){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.tools.reader.reader_types.get_line_number.call(null,rdr):null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(first_line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", starting at line"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_line)].join(''):null));
}

if(cljs.core._EQ_.call(null,delim__$1,cljs.tools.reader.impl.utils.char$.call(null,ch))){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__22382__auto__ = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(temp__22382__auto__)){
var macrofn = temp__22382__auto__;
var mret = macrofn.call(null,rdr,ch,opts);
var G__47 = ((!((mret === rdr)))?cljs.core.conj_BANG_.call(null,a,mret):a);
a = G__47;
continue;
} else {
var o = cljs.tools.reader.edn.read.call(null,(function (){var G__46 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__46,ch);

return G__46;
})(),true,null,opts);
var G__48 = ((!((o === rdr)))?cljs.core.conj_BANG_.call(null,a,o):a);
a = G__48;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_delimited;},new cljs.core.Symbol("cljs.tools.reader.edn","read-delimited","cljs.tools.reader.edn/read-delimited",(-1054706618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-delimited","read-delimited",(1139049811),null),"cljs/tools/reader/edn.cljs",(22),(1),(165),(165),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delim","delim",(-1032870297),null),new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_delimited)?cljs.tools.reader.edn.read_delimited.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited.call(null,")",rdr,opts);
if(cljs.core.empty_QMARK_.call(null,the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.call(null,cljs.core.list,the_list);
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_list;},new cljs.core.Symbol("cljs.tools.reader.edn","read-list","cljs.tools.reader.edn/read-list",(1039591215),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-list","read-list",(-1195846640),null),"cljs/tools/reader/edn.cljs",(17),(1),(184),(184),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_list)?cljs.tools.reader.edn.read_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited.call(null,"]",rdr,opts);
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_vector;},new cljs.core.Symbol("cljs.tools.reader.edn","read-vector","cljs.tools.reader.edn/read-vector",(922057545),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-vector","read-vector",(-1145877922),null),"cljs/tools/reader/edn.cljs",(19),(1),(191),(191),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_vector)?cljs.tools.reader.edn.read_vector.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var l = cljs.core.to_array.call(null,cljs.tools.reader.edn.read_delimited.call(null,"}",rdr,opts));
if(((1) === (l.length & (1)))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

return cljs.core.apply.call(null,cljs.core.hash_map,l);
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_map;},new cljs.core.Symbol("cljs.tools.reader.edn","read-map","cljs.tools.reader.edn/read-map",(1434627744),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-map","read-map",(-1421574739),null),"cljs/tools/reader/edn.cljs",(16),(1),(195),(195),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_map)?cljs.tools.reader.edn.read_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(reader,initch,opts){
var sb = (function (){var G__51 = (new goog.string.StringBuffer());
G__51.append(initch);

return G__51;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__23200__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__23200__auto__){
return or__23200__auto__;
} else {
var or__23200__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__23200__auto____$1)){
return or__23200__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
cljs.tools.reader.reader_types.unread.call(null,reader,ch);

var or__23200__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else {
var G__53 = (function (){var G__52 = sb;
G__52.append(ch);

return G__52;
})();
var G__54 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__53;
ch = G__54;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_number;},new cljs.core.Symbol("cljs.tools.reader.edn","read-number","cljs.tools.reader.edn/read-number",(-76415160),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-number","read-number",(2089797727),null),"cljs/tools/reader/edn.cljs",(19),(1),(202),(202),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_number)?cljs.tools.reader.edn.read_number.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__56 = ch;
switch (G__56) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.escape_char;},new cljs.core.Symbol("cljs.tools.reader.edn","escape-char","cljs.tools.reader.edn/escape-char",(17562632),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"escape-char","escape-char",(-2072670949),null),"cljs/tools/reader/edn.cljs",(19),(1),(213),(213),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",(-1249746442),null),new cljs.core.Symbol(null,"rdr","rdr",(190007785),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.escape_char)?cljs.tools.reader.edn.escape_char.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(reader,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
var G__61 = ch;
if(cljs.core._EQ_.call(null,null,G__61)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else {
if(cljs.core._EQ_.call(null,"\\",G__61)){
var G__64 = (function (){var G__62 = sb;
G__62.append(cljs.tools.reader.edn.escape_char.call(null,sb,reader));

return G__62;
})();
var G__65 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__64;
ch = G__65;
continue;
} else {
if(cljs.core._EQ_.call(null,"\"",G__61)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
var G__66 = (function (){var G__63 = sb;
G__63.append(ch);

return G__63;
})();
var G__67 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__66;
ch = G__67;
continue;

}
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_string_STAR_;},new cljs.core.Symbol("cljs.tools.reader.edn","read-string*","cljs.tools.reader.edn/read-string*",(-1143095884),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-string*","read-string*",(1046768315),null),"cljs/tools/reader/edn.cljs",(20),(1),(234),(234),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_string_STAR_)?cljs.tools.reader.edn.read_string_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__22562__auto__ = cljs.tools.reader.edn.read_token.call(null,rdr,initch);
if(cljs.core.truth_(temp__22562__auto__)){
var token = temp__22562__auto__;
var G__69 = token;
switch (G__69) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",(-1371932971),null);

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var or__23200__auto__ = (function (){var temp__22562__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_(temp__22562__auto____$1)){
var p = temp__22562__auto____$1;
return cljs.core.symbol.call(null,p.call(null,(0)),p.call(null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}

}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_symbol;},new cljs.core.Symbol("cljs.tools.reader.edn","read-symbol","cljs.tools.reader.edn/read-symbol",(312159297),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-symbol","read-symbol",(-1789002420),null),"cljs/tools/reader/edn.cljs",(19),(1),(245),(245),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_symbol)?cljs.tools.reader.edn.read_symbol.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = cljs.tools.reader.edn.read_token.call(null,reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_((function (){var and__23164__auto__ = s;
if(cljs.core.truth_(and__23164__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__23164__auto__;
}
})())){
var ns = s.call(null,(0));
var name = s.call(null,(1));
if((":" === cljs.core.nth.call(null,token,(0)))){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_keyword;},new cljs.core.Symbol("cljs.tools.reader.edn","read-keyword","cljs.tools.reader.edn/read-keyword",(-1155492918),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-keyword","read-keyword",(645579997),null),"cljs/tools/reader/edn.cljs",(20),(1),(263),(263),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_keyword)?cljs.tools.reader.edn.read_keyword.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__24698__auto__ = sym;
return cljs.core._conj.call(null,(function (){var x__24698__auto____$1 = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto____$1);
})(),x__24698__auto__);
});
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.wrapping_reader;},new cljs.core.Symbol("cljs.tools.reader.edn","wrapping-reader","cljs.tools.reader.edn/wrapping-reader",(-883062729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"wrapping-reader","wrapping-reader",(1167842242),null),"cljs/tools/reader/edn.cljs",(23),(1),(278),(278),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.wrapping_reader)?cljs.tools.reader.edn.wrapping_reader.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_meta;},new cljs.core.Symbol("cljs.tools.reader.edn","read-meta","cljs.tools.reader.edn/read-meta",(-1402204391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-meta","read-meta",(789762052),null),"cljs/tools/reader/edn.cljs",(17),(1),(283),(283),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_meta)?cljs.tools.reader.edn.read_meta.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
return cljs.core.set.call(null,cljs.tools.reader.edn.read_delimited.call(null,"}",rdr,opts));
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_set;},new cljs.core.Symbol("cljs.tools.reader.edn","read-set","cljs.tools.reader.edn/read-set",(485171199),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-set","read-set",(-1708339988),null),"cljs/tools/reader/edn.cljs",(16),(1),(293),(293),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_set)?cljs.tools.reader.edn.read_set.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__74 = rdr;
cljs.tools.reader.edn.read.call(null,G__74,true,null,true);

return G__74;
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_discard;},new cljs.core.Symbol("cljs.tools.reader.edn","read-discard","cljs.tools.reader.edn/read-discard",(688793043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-discard","read-discard",(-1539025698),null),"cljs/tools/reader/edn.cljs",(20),(1),(297),(297),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_discard)?cljs.tools.reader.edn.read_discard.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.call(null,rdr,cljs.tools.reader.reader_types.read_char.call(null,rdr));
var temp__22382__auto__ = (function (){var G__76 = token;
var G__76__$1 = (((G__76 == null))?null:cljs.tools.reader.impl.commons.parse_symbol.call(null,G__76));
if((G__76__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null,G__76__$1);
}
})();
if(cljs.core.truth_(temp__22382__auto__)){
var ns = temp__22382__auto__;
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited.call(null,"}",rdr,opts);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,items))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

var keys = cljs.core.take_nth.call(null,(2),items);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,items));
return cljs.core.zipmap.call(null,cljs.tools.reader.impl.utils.namespace_keys.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),keys),vals);
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Namespaced map must specify a map");
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token used as namespace in namespaced map: ",token);
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_namespaced_map;},new cljs.core.Symbol("cljs.tools.reader.edn","read-namespaced-map","cljs.tools.reader.edn/read-namespaced-map",(-87156167),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-namespaced-map","read-namespaced-map",(2020666318),null),"cljs/tools/reader/edn.cljs",(27),(1),(302),(302),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_namespaced_map)?cljs.tools.reader.edn.read_namespaced_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__78 = ch;
switch (G__78) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.macros;},new cljs.core.Symbol("cljs.tools.reader.edn","macros","cljs.tools.reader.edn/macros",(526034419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"macros","macros",(-1843096338),null),"cljs/tools/reader/edn.cljs",(14),(1),(317),(317),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.macros)?cljs.tools.reader.edn.macros.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__81 = ch;
switch (G__81) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
default:
return null;

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.dispatch_macros;},new cljs.core.Symbol("cljs.tools.reader.edn","dispatch-macros","cljs.tools.reader.edn/dispatch-macros",(1238477070),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"dispatch-macros","dispatch-macros",(-703882639),null),"cljs/tools/reader/edn.cljs",(23),(1),(333),(333),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",(1085813622),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.dispatch_macros)?cljs.tools.reader.edn.dispatch_macros.cljs$lang$test:null)])));})()
;
(function (){
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
var object = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else {
}

var temp__22382__auto__ = (function (){var or__23200__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"readers","readers",(-2118263030)).cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__22382__auto__)){
var f = temp__22382__auto__;
return f.call(null,object);
} else {
var temp__22382__auto____$1 = new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__22382__auto____$1)){
var d = temp__22382__auto____$1;
return d.call(null,tag,object);
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",cljs.core.name.call(null,tag));
}
}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_tagged;},new cljs.core.Symbol("cljs.tools.reader.edn","read-tagged","cljs.tools.reader.edn/read-tagged",(-1610977071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-tagged","read-tagged",(490742242),null),"cljs/tools/reader/edn.cljs",(19),(1),(343),(343),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",(190007785),null),new cljs.core.Symbol(null,"initch","initch",(946908919),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_tagged)?cljs.tools.reader.edn.read_tagged.cljs$lang$test:null)])));})()
;
/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
(function (){
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var args83 = [];
var len__24987__auto___90 = arguments.length;
var i__24988__auto___91 = (0);
while(true){
if((i__24988__auto___91 < len__24987__auto___90)){
args83.push((arguments[i__24988__auto___91]));

var G__92 = (i__24988__auto___91 + (1));
i__24988__auto___91 = G__92;
continue;
} else {
}
break;
}

var G__85 = args83.length;
switch (G__85) {
case (1):
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (4):
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args83.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read;},new cljs.core.Symbol("cljs.tools.reader.edn","read","cljs.tools.reader.edn/read",(653623649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read","read",(-1514377108),null),"cljs/tools/reader/edn.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(359),(359),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Reads the first object from an IPushbackReader or a java.io.PushbackReader.\n   Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.\n   If no reader is provided, *in* will be used.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration\n   is done by passing an opt map.\n\n   opts is a map that can include the following keys:\n   :eof - value to return on end-of-file. When not supplied, eof throws an exception.\n   :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.\n              When not supplied, only the default-data-readers will be used.\n   :default - A function of two args, that will, if present and no reader is found for a tag,\n              be called with the tag and the value.",(cljs.core.truth_(cljs.tools.reader.edn.read)?cljs.tools.reader.edn.read.cljs$lang$test:null)])));})()
;

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,cljs.core.PersistentArrayMap.EMPTY,reader);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__86,reader){
var map__87 = p__86;
var map__87__$1 = ((((!((map__87 == null)))?((((map__87.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87):map__87);
var opts = map__87__$1;
var eof = cljs.core.get.call(null,map__87__$1,new cljs.core.Keyword(null,"eof","eof",(-489063237)));
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"eof","eof",(-489063237))));
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.edn.read_number.call(null,reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(f)){
var res = f.call(null,reader,ch,opts);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol.call(null,reader,ch);
}

}
}
}
break;
}
}catch (e89){if((e89 instanceof Error)){
var e = e89;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",(-1938323098)),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"reader-exception","reader-exception",(-1938323098))], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",(212345235)),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",(2078222095)),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",(-1269645878)),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"reader-exception","reader-exception",(-1938323098))], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",(212345235)),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",(2078222095)),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",(-1269645878)),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e89;

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.tools.reader.edn.read;},new cljs.core.Symbol("cljs.tools.reader.edn","read","cljs.tools.reader.edn/read",(653623649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read","read",(-1514377108),null),"cljs/tools/reader/edn.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(359),(359),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eof","eof",(1151468290),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",(1810192380),null),new cljs.core.Symbol(null,"eof-error?","eof-error?",(863128689),null),new cljs.core.Symbol(null,"eof","eof",(1151468290),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Reads the first object from an IPushbackReader or a java.io.PushbackReader.\n   Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.\n   If no reader is provided, *in* will be used.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration\n   is done by passing an opt map.\n\n   opts is a map that can include the following keys:\n   :eof - value to return on end-of-file. When not supplied, eof throws an exception.\n   :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.\n              When not supplied, only the default-data-readers will be used.\n   :default - A function of two args, that will, if present and no reader is found for a tag,\n              be called with the tag and the value.",(cljs.core.truth_(cljs.tools.reader.edn.read)?cljs.tools.reader.edn.read.cljs$lang$test:null)]));
/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
(function (){
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var args94 = [];
var len__24987__auto___97 = arguments.length;
var i__24988__auto___98 = (0);
while(true){
if((i__24988__auto___98 < len__24987__auto___97)){
args94.push((arguments[i__24988__auto___98]));

var G__99 = (i__24988__auto___98 + (1));
i__24988__auto___98 = G__99;
continue;
} else {
}
break;
}

var G__96 = args94.length;
switch (G__96) {
case (1):
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args94.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.tools.reader.edn.read_string;},new cljs.core.Symbol("cljs.tools.reader.edn","read-string","cljs.tools.reader.edn/read-string",(1576896950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-string","read-string",(-558384455),null),"cljs/tools/reader/edn.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(416),(416),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Reads one object from the string s.\n   Returns nil when s is nil or empty.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   opts is a map as per clojure.tools.reader.edn/read",(cljs.core.truth_(cljs.tools.reader.edn.read_string)?cljs.tools.reader.edn.read_string.cljs$lang$test:null)])));})()
;

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",(-489063237)),null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__23164__auto__ = s;
if(cljs.core.truth_(and__23164__auto__)){
return cljs.core.not_EQ_.call(null,s,"");
} else {
return and__23164__auto__;
}
})())){
return cljs.tools.reader.edn.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.tools.reader.edn.read_string;},new cljs.core.Symbol("cljs.tools.reader.edn","read-string","cljs.tools.reader.edn/read-string",(1576896950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",(-1275821532),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An EDN reader in clojure",new cljs.core.Keyword(null,"author","author",(2111686192)),"Bronsa"], null)),new cljs.core.Symbol(null,"read-string","read-string",(-558384455),null),"cljs/tools/reader/edn.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(416),(416),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Reads one object from the string s.\n   Returns nil when s is nil or empty.\n\n   Reads data in the edn format (subset of Clojure data):\n   http://edn-format.org\n\n   opts is a map as per clojure.tools.reader.edn/read",(cljs.core.truth_(cljs.tools.reader.edn.read_string)?cljs.tools.reader.edn.read_string.cljs$lang$test:null)]));
