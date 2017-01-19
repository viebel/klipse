goog.provide("cljs.core.match.protocols");

/**
 * @interface
 */
(function (){
cljs.core.match.protocols.ISpecializeMatrix = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.ISpecializeMatrix;},new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"ISpecializeMatrix","ISpecializeMatrix",(-1429167885),null),"cljs/core/match/protocols.cljc",(31),(1),(6),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"specialize-matrix","specialize-matrix",(-645674080),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)], null)], true, false)], null),(6),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.ISpecializeMatrix)?cljs.core.match.protocols.ISpecializeMatrix.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.specialize_matrix = (function cljs$core$match$protocols$specialize_matrix(this$,matrix){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 == null)))){
return this$.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2(this$,matrix);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.specialize_matrix[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,matrix);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.specialize_matrix["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,matrix);
} else {
throw cljs.core.missing_protocol.call(null,"ISpecializeMatrix.specialize-matrix",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.specialize_matrix;},new cljs.core.Symbol("cljs.core.match.protocols","specialize-matrix","cljs.core.match.protocols/specialize-matrix",(2055431169),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"specialize-matrix","specialize-matrix",(-645674080),null),"cljs/core/match/protocols.cljc",(21),(1),(6),(7),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.specialize_matrix)?cljs.core.match.protocols.specialize_matrix.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IContainsRestPattern = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IContainsRestPattern;},new cljs.core.Symbol("cljs.core.match.protocols","IContainsRestPattern","cljs.core.match.protocols/IContainsRestPattern",(-698882889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IContainsRestPattern","IContainsRestPattern",(894933014),null),"cljs/core/match/protocols.cljc",(34),(1),(9),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"contains-rest-pattern?","contains-rest-pattern?",(1686017915),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(9),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IContainsRestPattern)?cljs.core.match.protocols.IContainsRestPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.contains_rest_pattern_QMARK_ = (function cljs$core$match$protocols$contains_rest_pattern_QMARK_(this$){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1 == null)))){
return this$.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.contains_rest_pattern_QMARK_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.contains_rest_pattern_QMARK_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IContainsRestPattern.contains-rest-pattern?",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.contains_rest_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match.protocols","contains-rest-pattern?","cljs.core.match.protocols/contains-rest-pattern?",(125757592),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IContainsRestPattern","cljs.core.match.protocols/IContainsRestPattern",(-698882889),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"contains-rest-pattern?","contains-rest-pattern?",(1686017915),null),"cljs/core/match/protocols.cljc",(26),(1),(9),(10),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.contains_rest_pattern_QMARK_)?cljs.core.match.protocols.contains_rest_pattern_QMARK_.cljs$lang$test:null)])));})()
;


/**
 * Allows arbitrary objects to act like a map-like object when pattern
 *   matched. Avoid extending this directly for Java Beans, see
 *   `match.java/bean-match`.
 * @interface
 */
(function (){
cljs.core.match.protocols.IMatchLookup = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IMatchLookup;},new cljs.core.Symbol("cljs.core.match.protocols","IMatchLookup","cljs.core.match.protocols/IMatchLookup",(-1605103614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IMatchLookup","IMatchLookup",(1096142749),null),"cljs/core/match/protocols.cljc",(26),(1),(12),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"val-at","val-at",(267553823),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)], null)], true, false)], null),(12),cljs.core.List.EMPTY,"Allows arbitrary objects to act like a map-like object when pattern\n  matched. Avoid extending this directly for Java Beans, see\n  `match.java/bean-match`.",cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IMatchLookup)?cljs.core.match.protocols.IMatchLookup.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.val_at = (function cljs$core$match$protocols$val_at(this$,k,not_found){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 == null)))){
return this$.cljs$core$match$protocols$IMatchLookup$val_at$arity$3(this$,k,not_found);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.val_at[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,k,not_found);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.val_at["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,k,not_found);
} else {
throw cljs.core.missing_protocol.call(null,"IMatchLookup.val-at",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.val_at;},new cljs.core.Symbol("cljs.core.match.protocols","val-at","cljs.core.match.protocols/val-at",(-521066052),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IMatchLookup","cljs.core.match.protocols/IMatchLookup",(-1605103614),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"val-at","val-at",(267553823),null),"cljs/core/match/protocols.cljc",(10),(1),(12),(16),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.val_at)?cljs.core.match.protocols.val_at.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.INodeCompile = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.INodeCompile;},new cljs.core.Symbol("cljs.core.match.protocols","INodeCompile","cljs.core.match.protocols/INodeCompile",(-1426427387),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"INodeCompile","INodeCompile",(1241159394),null),"cljs/core/match/protocols.cljc",(26),(1),(20),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"n-to-clj","n-to-clj",(435800964),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(20),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.INodeCompile)?cljs.core.match.protocols.INodeCompile.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.n_to_clj = (function cljs$core$match$protocols$n_to_clj(this$){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 == null)))){
return this$.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.n_to_clj[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.n_to_clj["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INodeCompile.n-to-clj",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.n_to_clj;},new cljs.core.Symbol("cljs.core.match.protocols","n-to-clj","cljs.core.match.protocols/n-to-clj",(-1158123673),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","INodeCompile","cljs.core.match.protocols/INodeCompile",(-1426427387),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"n-to-clj","n-to-clj",(435800964),null),"cljs/core/match/protocols.cljc",(12),(1),(20),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.n_to_clj)?cljs.core.match.protocols.n_to_clj.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IPatternCompile = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IPatternCompile;},new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IPatternCompile","IPatternCompile",(946772576),null),"cljs/core/match/protocols.cljc",(29),(1),(23),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"to-source*","to-source*",(1401037324),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)], null)], true, false)], null),(23),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IPatternCompile)?cljs.core.match.protocols.IPatternCompile.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.to_source_STAR_ = (function cljs$core$match$protocols$to_source_STAR_(this$,ocr){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 == null)))){
return this$.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2(this$,ocr);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.to_source_STAR_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,ocr);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.to_source_STAR_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,ocr);
} else {
throw cljs.core.missing_protocol.call(null,"IPatternCompile.to-source*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.to_source_STAR_;},new cljs.core.Symbol("cljs.core.match.protocols","to-source*","cljs.core.match.protocols/to-source*",(-226231955),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"to-source*","to-source*",(1401037324),null),"cljs/core/match/protocols.cljc",(14),(1),(23),(24),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.to_source_STAR_)?cljs.core.match.protocols.to_source_STAR_.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IVecMod = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IVecMod;},new cljs.core.Symbol("cljs.core.match.protocols","IVecMod","cljs.core.match.protocols/IVecMod",(1684101973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IVecMod","IVecMod",(-949931788),null),"cljs/core/match/protocols.cljc",(21),(1),(26),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"prepend","prepend",(1983147567),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"drop-nth","drop-nth",(-1477008594),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"swap","swap",(1869207164),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)], null)], true, false)], null),(26),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IVecMod)?cljs.core.match.protocols.IVecMod.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.prepend = (function cljs$core$match$protocols$prepend(this$,x){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IVecMod$prepend$arity$2 == null)))){
return this$.cljs$core$match$protocols$IVecMod$prepend$arity$2(this$,x);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.prepend[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,x);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.prepend["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IVecMod.prepend",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.prepend;},new cljs.core.Symbol("cljs.core.match.protocols","prepend","cljs.core.match.protocols/prepend",(-1758162226),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IVecMod","cljs.core.match.protocols/IVecMod",(1684101973),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"prepend","prepend",(1983147567),null),"cljs/core/match/protocols.cljc",(11),(1),(26),(27),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.prepend)?cljs.core.match.protocols.prepend.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.drop_nth = (function cljs$core$match$protocols$drop_nth(this$,n){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 == null)))){
return this$.cljs$core$match$protocols$IVecMod$drop_nth$arity$2(this$,n);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.drop_nth[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,n);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.drop_nth["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,n);
} else {
throw cljs.core.missing_protocol.call(null,"IVecMod.drop-nth",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.drop_nth;},new cljs.core.Symbol("cljs.core.match.protocols","drop-nth","cljs.core.match.protocols/drop-nth",(83283919),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IVecMod","cljs.core.match.protocols/IVecMod",(1684101973),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"drop-nth","drop-nth",(-1477008594),null),"cljs/core/match/protocols.cljc",(12),(1),(26),(28),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.drop_nth)?cljs.core.match.protocols.drop_nth.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.swap = (function cljs$core$match$protocols$swap(this$,n){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IVecMod$swap$arity$2 == null)))){
return this$.cljs$core$match$protocols$IVecMod$swap$arity$2(this$,n);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.swap[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,n);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.swap["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,n);
} else {
throw cljs.core.missing_protocol.call(null,"IVecMod.swap",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.swap;},new cljs.core.Symbol("cljs.core.match.protocols","swap","cljs.core.match.protocols/swap",(-831964451),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IVecMod","cljs.core.match.protocols/IVecMod",(1684101973),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"swap","swap",(1869207164),null),"cljs/core/match/protocols.cljc",(8),(1),(26),(29),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.swap)?cljs.core.match.protocols.swap.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IVectorPattern = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IVectorPattern;},new cljs.core.Symbol("cljs.core.match.protocols","IVectorPattern","cljs.core.match.protocols/IVectorPattern",(-592933530),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IVectorPattern","IVectorPattern",(598220993),null),"cljs/core/match/protocols.cljc",(28),(1),(31),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",(1041096409),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)], null)], true, false)], null),(31),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IVectorPattern)?cljs.core.match.protocols.IVectorPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.split = (function cljs$core$match$protocols$split(this$,n){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$IVectorPattern$split$arity$2 == null)))){
return this$.cljs$core$match$protocols$IVectorPattern$split$arity$2(this$,n);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.split[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,n);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.split["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,n);
} else {
throw cljs.core.missing_protocol.call(null,"IVectorPattern.split",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.split;},new cljs.core.Symbol("cljs.core.match.protocols","split","cljs.core.match.protocols/split",(-1727167944),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","IVectorPattern","cljs.core.match.protocols/IVectorPattern",(-592933530),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"split","split",(1041096409),null),"cljs/core/match/protocols.cljc",(9),(1),(31),(32),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.split)?cljs.core.match.protocols.split.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.ISyntaxTag = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.ISyntaxTag;},new cljs.core.Symbol("cljs.core.match.protocols","ISyntaxTag","cljs.core.match.protocols/ISyntaxTag",(-273302598),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"ISyntaxTag","ISyntaxTag",(213210325),null),"cljs/core/match/protocols.cljc",(24),(1),(34),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"syntax-tag","syntax-tag",(-1609768413),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(34),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.ISyntaxTag)?cljs.core.match.protocols.ISyntaxTag.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.protocols.syntax_tag = (function cljs$core$match$protocols$syntax_tag(this$){
if((!((this$ == null))) && (!((this$.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 == null)))){
return this$.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (cljs.core.match.protocols.syntax_tag[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (cljs.core.match.protocols.syntax_tag["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISyntaxTag.syntax-tag",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.protocols.syntax_tag;},new cljs.core.Symbol("cljs.core.match.protocols","syntax-tag","cljs.core.match.protocols/syntax-tag",(-821256382),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.core.match.protocols","ISyntaxTag","cljs.core.match.protocols/ISyntaxTag",(-273302598),null),new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"syntax-tag","syntax-tag",(-1609768413),null),"cljs/core/match/protocols.cljc",(14),(1),(34),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.core.match.protocols.syntax_tag)?cljs.core.match.protocols.syntax_tag.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IExistentialPattern = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IExistentialPattern;},new cljs.core.Symbol("cljs.core.match.protocols","IExistentialPattern","cljs.core.match.protocols/IExistentialPattern",(201202898),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IExistentialPattern","IExistentialPattern",(-1426147213),null),"cljs/core/match/protocols.cljc",(33),(1),(39),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.EMPTY], null),(39),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IExistentialPattern)?cljs.core.match.protocols.IExistentialPattern.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
cljs.core.match.protocols.IPseudoPattern = function(){}; return (
new cljs.core.Var(function(){return cljs.core.match.protocols.IPseudoPattern;},new cljs.core.Symbol("cljs.core.match.protocols","IPseudoPattern","cljs.core.match.protocols/IPseudoPattern",(-554076115),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core.match.protocols","cljs.core.match.protocols",(849567823),null),new cljs.core.Symbol(null,"IPseudoPattern","IPseudoPattern",(1039718218),null),"cljs/core/match/protocols.cljc",(28),(1),(41),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.EMPTY], null),(41),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs.core.match.protocols.IPseudoPattern)?cljs.core.match.protocols.IPseudoPattern.cljs$lang$test:null)])));})()
;

