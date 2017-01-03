goog.provide("reagent.impl.template");
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
(function (){
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/; return (
new cljs.core.Var(function(){return reagent.impl.template.re_tag;},new cljs.core.Symbol("reagent.impl.template","re-tag","reagent.impl.template/re-tag",(-1044367305),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"re-tag","re-tag",(2095460483),null),"reagent/impl/template.cljs",(9),(1),(13),(15),cljs.core.List.EMPTY,"Regular expression that parses a CSS-style id and class\n             from a tag name.",(cljs.core.truth_(reagent.impl.template.re_tag)?reagent.impl.template.re_tag.cljs$lang$test:null)])));})()
;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
})

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.impl.template/NativeWrapper");
});

(function (){
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
}); return (
new cljs.core.Var(function(){return reagent.impl.template.__GT_NativeWrapper;},new cljs.core.Symbol("reagent.impl.template","->NativeWrapper","reagent.impl.template/->NativeWrapper",(-456801959),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"->NativeWrapper","->NativeWrapper",(1005046437),null),"reagent/impl/template.cljs",(23),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(17),(17),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,null,(cljs.core.truth_(reagent.impl.template.__GT_NativeWrapper)?reagent.impl.template.__GT_NativeWrapper.cljs$lang$test:null)])));})()
;

(function (){
reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
}); return (
new cljs.core.Var(function(){return reagent.impl.template.named_QMARK_;},new cljs.core.Symbol("reagent.impl.template","named?","reagent.impl.template/named?",(41047973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"named?","named?",(1427130449),null),"reagent/impl/template.cljs",(22),(1),(22),(22),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((reagent.impl.template.named_QMARK_)?reagent.impl.template.named_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
}); return (
new cljs.core.Var(function(){return reagent.impl.template.hiccup_tag_QMARK_;},new cljs.core.Symbol("reagent.impl.template","hiccup-tag?","reagent.impl.template/hiccup-tag?",(1116102782),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"hiccup-tag?","hiccup-tag?",(1071933450),null),"reagent/impl/template.cljs",(27),(1),(26),(26),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((reagent.impl.template.hiccup_tag_QMARK_)?reagent.impl.template.hiccup_tag_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
}); return (
new cljs.core.Var(function(){return reagent.impl.template.valid_tag_QMARK_;},new cljs.core.Symbol("reagent.impl.template","valid-tag?","reagent.impl.template/valid-tag?",(-147472468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"valid-tag?","valid-tag?",(1243064160),null),"reagent/impl/template.cljs",(26),(1),(30),(30),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((reagent.impl.template.valid_tag_QMARK_)?reagent.impl.template.valid_tag_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.prop_name_cache = ({"charset": "charSet", "for": "htmlFor", "class": "className"}); return (
new cljs.core.Var(function(){return reagent.impl.template.prop_name_cache;},new cljs.core.Symbol("reagent.impl.template","prop-name-cache","reagent.impl.template/prop-name-cache",(1175625890),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"prop-name-cache","prop-name-cache",(321693934),null),"reagent/impl/template.cljs",(21),(1),(38),(38),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.prop_name_cache)?reagent.impl.template.prop_name_cache.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.cache_get;},new cljs.core.Symbol("reagent.impl.template","cache-get","reagent.impl.template/cache-get",(-2052423),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"cache-get","cache-get",(-1933400331),null),"reagent/impl/template.cljs",(16),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(reagent.impl.template.cache_get)?reagent.impl.template.cache_get.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__20287__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__20287__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__20287__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.cached_prop_name;},new cljs.core.Symbol("reagent.impl.template","cached-prop-name","reagent.impl.template/cached-prop-name",(859412206),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"cached-prop-name","cached-prop-name",(2082185050),null),"reagent/impl/template.cljs",(23),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(reagent.impl.template.cached_prop_name)?reagent.impl.template.cached_prop_name.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
}); return (
new cljs.core.Var(function(){return reagent.impl.template.js_val_QMARK_;},new cljs.core.Symbol("reagent.impl.template","js-val?","reagent.impl.template/js-val?",(786644557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"js-val?","js-val?",(-71235599),null),"reagent/impl/template.cljs",(23),(1),(54),(54),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((reagent.impl.template.js_val_QMARK_)?reagent.impl.template.js_val_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.convert_prop_value; return (
new cljs.core.Var(function(){return reagent.impl.template.convert_prop_value;},new cljs.core.Symbol("reagent.impl.template","convert-prop-value","reagent.impl.template/convert-prop-value",(-1656332442),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"convert-prop-value","convert-prop-value",(1311221530),null),"reagent/impl/template.cljs",(28),(1),(57),true,(57),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.convert_prop_value)?reagent.impl.template.convert_prop_value.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__321 = o;
(G__321[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));

return G__321;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.kv_conv;},new cljs.core.Symbol("reagent.impl.template","kv-conv","reagent.impl.template/kv-conv",(-1544624411),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"kv-conv","kv-conv",(-687018351),null),"reagent/impl/template.cljs",(14),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.template.kv_conv)?reagent.impl.template.kv_conv.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__322__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__323__i = 0, G__323__a = new Array(arguments.length -  0);
while (G__323__i < G__323__a.length) {G__323__a[G__323__i] = arguments[G__323__i + 0]; ++G__323__i;}
  args = new cljs.core.IndexedSeq(G__323__a,0);
} 
return G__322__delegate.call(this,args);};
G__322.cljs$lang$maxFixedArity = 0;
G__322.cljs$lang$applyTo = (function (arglist__324){
var args = cljs.core.seq(arglist__324);
return G__322__delegate(args);
});
G__322.cljs$core$IFn$_invoke$arity$variadic = G__322__delegate;
return G__322;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.convert_prop_value;},new cljs.core.Symbol("reagent.impl.template","convert-prop-value","reagent.impl.template/convert-prop-value",(-1656332442),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"convert-prop-value","convert-prop-value",(1311221530),null),"reagent/impl/template.cljs",(25),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.convert_prop_value)?reagent.impl.template.convert_prop_value.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__326 = (((o == null))?({}):o);
(G__326[k] = v);

return G__326;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.oset;},new cljs.core.Symbol("reagent.impl.template","oset","reagent.impl.template/oset",(1629482581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"oset","oset",(-553790071),null),"reagent/impl/template.cljs",(11),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.template.oset)?reagent.impl.template.oset.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.oget;},new cljs.core.Symbol("reagent.impl.template","oget","reagent.impl.template/oget",(1818416677),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"oget","oget",(-1589587479),null),"reagent/impl/template.cljs",(11),(1),(77),(77),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(reagent.impl.template.oget)?reagent.impl.template.oget.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((cljs.core.some_QMARK_.call(null,id)) && ((reagent.impl.template.oget.call(null,p,"id") == null)))?reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__20287__auto__ = (id_class["className"]);
if((temp__20287__auto__ == null)){
return p__$1;
} else {
var class$ = temp__20287__auto__;
var old = reagent.impl.template.oget.call(null,p__$1,"className");
return reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('')));
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.set_id_class;},new cljs.core.Symbol("reagent.impl.template","set-id-class","reagent.impl.template/set-id-class",(-1064374370),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"set-id-class","set-id-class",(-1108810166),null),"reagent/impl/template.cljs",(19),(1),(80),(80),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"id-class","id-class",(626394274),null)], null)),null,(cljs.core.truth_(reagent.impl.template.set_id_class)?reagent.impl.template.set_id_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class.call(null,reagent.impl.template.convert_prop_value.call(null,props),id_class);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.convert_props;},new cljs.core.Symbol("reagent.impl.template","convert-props","reagent.impl.template/convert-props",(620323834),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"convert-props","convert-props",(1999071822),null),"reagent/impl/template.cljs",(20),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"id-class","id-class",(626394274),null)], null)),null,(cljs.core.truth_(reagent.impl.template.convert_props)?reagent.impl.template.convert_props.cljs$lang$test:null)])));})()
;
if(typeof reagent.impl.template.find_dom_node !== 'undefined'){
} else {
(function (){
reagent.impl.template.find_dom_node = null; return (
new cljs.core.Var(function(){return reagent.impl.template.find_dom_node;},new cljs.core.Symbol("reagent.impl.template","find-dom-node","reagent.impl.template/find-dom-node",(-1073620349),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"find-dom-node","find-dom-node",(354820671),null),"reagent/impl/template.cljs",(23),(1),(102),(102),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.find_dom_node)?reagent.impl.template.find_dom_node.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["text",null,"textarea",null,"password",null,"search",null,"tel",null,"url",null], null), null); return (
new cljs.core.Var(function(){return reagent.impl.template.these_inputs_have_selection_api;},new cljs.core.Symbol("reagent.impl.template","these-inputs-have-selection-api","reagent.impl.template/these-inputs-have-selection-api",(-557010121),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"these-inputs-have-selection-api","these-inputs-have-selection-api",(-1843221637),null),"reagent/impl/template.cljs",(37),(1),(107),(107),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.these_inputs_have_selection_api)?reagent.impl.template.these_inputs_have_selection_api.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.has_selection_api_QMARK_;},new cljs.core.Symbol("reagent.impl.template","has-selection-api?","reagent.impl.template/has-selection-api?",(44539254),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"has-selection-api?","has-selection-api?",(-161880638),null),"reagent/impl/template.cljs",(34),(1),(110),(110),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-type","input-type",(-1797461929),null)], null)),null,((reagent.impl.template.has_selection_api_QMARK_)?reagent.impl.template.has_selection_api_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = reagent.impl.template.find_dom_node.call(null,this$);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
if(!(((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))){
(this$["cljsDOMValue"] = rendered_value);

return (node["value"] = rendered_value);
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,((function (node_value,rendered_value,dom_value,node){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(node_value,rendered_value,dom_value,node))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(this$["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.input_set_value;},new cljs.core.Symbol("reagent.impl.template","input-set-value","reagent.impl.template/input-set-value",(946551149),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-set-value","input-set-value",(1330196921),null),"reagent/impl/template.cljs",(22),(1),(114),(114),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(reagent.impl.template.input_set_value)?reagent.impl.template.input_set_value.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.template.input_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.input_handle_change;},new cljs.core.Symbol("reagent.impl.template","input-handle-change","reagent.impl.template/input-handle-change",(1977825699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-handle-change","input-handle-change",(-1174326921),null),"reagent/impl/template.cljs",(26),(1),(164),(164),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"on-change","on-change",(908485378),null),new cljs.core.Symbol(null,"e","e",(-1273166571),null)], null)),null,(cljs.core.truth_(reagent.impl.template.input_handle_change)?reagent.impl.template.input_handle_change.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.some_QMARK_.call(null,jsprops);
if(and__20770__auto__){
var and__20770__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__20770__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("reagent.dom needs to be loaded for controlled input to work"),cljs.core.str("\n"),cljs.core.str("find-dom-node")].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__328 = jsprops;
(G__328["defaultValue"] = value);

(G__328["onChange"] = ((function (G__328,v,value,on_change){
return (function (p1__11_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__11_SHARP_);
});})(G__328,v,value,on_change))
);

return G__328;
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.input_render_setup;},new cljs.core.Symbol("reagent.impl.template","input-render-setup","reagent.impl.template/input-render-setup",(-106074998),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-render-setup","input-render-setup",(1297050438),null),"reagent/impl/template.cljs",(25),(1),(173),(173),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"jsprops","jsprops",(-611761942),null)], null)),null,(cljs.core.truth_(reagent.impl.template.input_render_setup)?reagent.impl.template.input_render_setup.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.input_unmount;},new cljs.core.Symbol("reagent.impl.template","input-unmount","reagent.impl.template/input-unmount",(1720326238),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-unmount","input-unmount",(-1276632942),null),"reagent/impl/template.cljs",(20),(1),(194),(194),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(reagent.impl.template.input_unmount)?reagent.impl.template.input_unmount.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__330 = x;
switch (G__330) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.input_component_QMARK_;},new cljs.core.Symbol("reagent.impl.template","input-component?","reagent.impl.template/input-component?",(719966255),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-component?","input-component?",(-103814173),null),"reagent/impl/template.cljs",(32),(1),(197),(197),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((reagent.impl.template.input_component_QMARK_)?reagent.impl.template.input_component_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.reagent_input_class = null; return (
new cljs.core.Var(function(){return reagent.impl.template.reagent_input_class;},new cljs.core.Symbol("reagent.impl.template","reagent-input-class","reagent.impl.template/reagent-input-class",(-1534445713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"reagent-input-class","reagent-input-class",(275267347),null),"reagent/impl/template.cljs",(25),(1),(202),(202),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.reagent_input_class)?reagent.impl.template.reagent_input_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.make_element; return (
new cljs.core.Var(function(){return reagent.impl.template.make_element;},new cljs.core.Symbol("reagent.impl.template","make-element","reagent.impl.template/make-element",(-2024583643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"make-element","make-element",(846284505),null),"reagent/impl/template.cljs",(22),(1),(204),true,(204),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.make_element)?reagent.impl.template.make_element.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-update","component-did-update",(-1468549173)),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"reagent-render","reagent-render",(-985383853)),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",(-2058314698)),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"display-name","display-name",(694513143)),"ReagentInput"], null); return (
new cljs.core.Var(function(){return reagent.impl.template.input_spec;},new cljs.core.Symbol("reagent.impl.template","input-spec","reagent.impl.template/input-spec",(972546630),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"input-spec","input-spec",(1964371450),null),"reagent/impl/template.cljs",(16),(1),(206),(206),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.input_spec)?reagent.impl.template.input_spec.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.reagent_input;},new cljs.core.Symbol("reagent.impl.template","reagent-input","reagent.impl.template/reagent-input",(391965952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"reagent-input","reagent-input",(1518265684),null),"reagent/impl/template.cljs",(20),(1),(216),(216),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.template.reagent_input)?reagent.impl.template.reagent_input.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__335 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__335,(0),null);
var id = cljs.core.nth.call(null,vec__335,(1),null);
var class$ = cljs.core.nth.call(null,vec__335,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str("tag")].join('')));
}

return ({"name": tag, "className": class$__$1, "id": id});
}); return (
new cljs.core.Var(function(){return reagent.impl.template.parse_tag;},new cljs.core.Symbol("reagent.impl.template","parse-tag","reagent.impl.template/parse-tag",(-1053453595),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"parse-tag","parse-tag",(-1227122031),null),"reagent/impl/template.cljs",(16),(1),(224),(224),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hiccup-tag","hiccup-tag",(416823352),null)], null)),null,(cljs.core.truth_(reagent.impl.template.parse_tag)?reagent.impl.template.parse_tag.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",(-1516042587)));
}catch (e339){var e = e339;
return null;
}}); return (
new cljs.core.Var(function(){return reagent.impl.template.try_get_key;},new cljs.core.Symbol("reagent.impl.template","try-get-key","reagent.impl.template/try-get-key",(-430873685),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"try-get-key","try-get-key",(364079999),null),"reagent/impl/template.cljs",(18),(1),(234),(234),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.try_get_key)?reagent.impl.template.try_get_key.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.get_key;},new cljs.core.Symbol("reagent.impl.template","get-key","reagent.impl.template/get-key",(67272598),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"get-key","get-key",(-1218418750),null),"reagent/impl/template.cljs",(14),(1),(240),(240),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.get_key)?reagent.impl.template.get_key.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__20287__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__20287__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__20287__auto__;
return k;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.key_from_vec;},new cljs.core.Symbol("reagent.impl.template","key-from-vec","reagent.impl.template/key-from-vec",(-1583111675),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"key-from-vec","key-from-vec",(-590501167),null),"reagent/impl/template.cljs",(19),(1),(244),(244),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.template.key_from_vec)?reagent.impl.template.key_from_vec.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__20427__auto___340 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__20427__auto___340 == null)){
} else {
var key_341 = temp__20427__auto___340;
(jsprops["key"] = key_341);
}

return (reagent.impl.util.react["createElement"])(c,jsprops);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.reag_element;},new cljs.core.Symbol("reagent.impl.template","reag-element","reagent.impl.template/reag-element",(1272514295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"reag-element","reag-element",(-2067853533),null),"reagent/impl/template.cljs",(19),(1),(249),(249),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.template.reag_element)?reagent.impl.template.reag_element.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
var G__343 = (new reagent.impl.template.NativeWrapper());
(G__343["name"] = c);

(G__343["id"] = null);

(G__343["class"] = null);

return G__343;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.adapt_react_class;},new cljs.core.Symbol("reagent.impl.template","adapt-react-class","reagent.impl.template/adapt-react-class",(1034554965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",(1221068673),null),"reagent/impl/template.cljs",(24),(1),(256),(256),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.template.adapt_react_class)?reagent.impl.template.adapt_react_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.tag_name_cache = ({}); return (
new cljs.core.Var(function(){return reagent.impl.template.tag_name_cache;},new cljs.core.Symbol("reagent.impl.template","tag-name-cache","reagent.impl.template/tag-name-cache",(907738209),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"tag-name-cache","tag-name-cache",(1123607725),null),"reagent/impl/template.cljs",(20),(1),(262),(262),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.tag_name_cache)?reagent.impl.template.tag_name_cache.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__20287__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__20287__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__20287__auto__;
return s;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.cached_parse;},new cljs.core.Symbol("reagent.impl.template","cached-parse","reagent.impl.template/cached-parse",(-950448493),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"cached-parse","cached-parse",(1920681567),null),"reagent/impl/template.cljs",(19),(1),(264),(264),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.cached_parse)?reagent.impl.template.cached_parse.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.as_element; return (
new cljs.core.Var(function(){return reagent.impl.template.as_element;},new cljs.core.Symbol("reagent.impl.template","as-element","reagent.impl.template/as-element",(-581354721),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"as-element","as-element",(-2139409597),null),"reagent/impl/template.cljs",(20),(1),(269),true,(269),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.as_element)?reagent.impl.template.as_element.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset.call(null,jsprops,"key",key));
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.native_element;},new cljs.core.Symbol("reagent.impl.template","native-element","reagent.impl.template/native-element",(-925479848),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"native-element","native-element",(-1783581548),null),"reagent/impl/template.cljs",(21),(1),(271),(271),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parsed","parsed",(820942371),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"first","first",(996428481),null)], null)),null,(cljs.core.truth_(reagent.impl.template.native_element)?reagent.impl.template.native_element.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__345 = n;
switch (G__345) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll))].join('');

}); return (
new cljs.core.Var(function(){return reagent.impl.template.str_coll;},new cljs.core.Symbol("reagent.impl.template","str-coll","reagent.impl.template/str-coll",(-260075018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"str-coll","str-coll",(761129538),null),"reagent/impl/template.cljs",(15),(1),(287),(287),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),null,(cljs.core.truth_(reagent.impl.template.str_coll)?reagent.impl.template.str_coll.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__23658__auto__ = [];
var len__23656__auto___349 = arguments.length;
var i__23657__auto___350 = (0);
while(true){
if((i__23657__auto___350 < len__23656__auto___349)){
args__23658__auto__.push((arguments[i__23657__auto___350]));

var G__351 = (i__23657__auto___350 + (1));
i__23657__auto___350 = G__351;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.impl.template.hiccup_err;},new cljs.core.Symbol("reagent.impl.template","hiccup-err","reagent.impl.template/hiccup-err",(-1787916486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"hiccup-err","hiccup-err",(-1035171954),null),"reagent/impl/template.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(296),(296),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),null,(cljs.core.truth_(reagent.impl.template.hiccup_err)?reagent.impl.template.hiccup_err.cljs$lang$test:null)])));})()
;

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,msg)),cljs.core.str(": "),cljs.core.str(reagent.impl.template.str_coll.call(null,v)),cljs.core.str("\n"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq347){
var G__348 = cljs.core.first.call(null,seq347);
var seq347__$1 = cljs.core.next.call(null,seq347);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(G__348,seq347__$1);
});

new cljs.core.Var(function(){return reagent.impl.template.hiccup_err;},new cljs.core.Symbol("reagent.impl.template","hiccup-err","reagent.impl.template/hiccup-err",(-1787916486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"hiccup-err","hiccup-err",(-1035171954),null),"reagent/impl/template.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(296),(296),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),null,(cljs.core.truth_(reagent.impl.template.hiccup_err)?reagent.impl.template.hiccup_err.cljs$lang$test:null)]));
(function (){
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty")),cljs.core.str("\n"),cljs.core.str("(pos? (count v))")].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form")),cljs.core.str("\n"),cljs.core.str("(valid-tag? tag)")].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__353 = pos;
switch (G__353) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag")),cljs.core.str("\n"),cljs.core.str("(= \">\" n)")].join('')));
}

if((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Expected React component in")),cljs.core.str("\n"),cljs.core.str("(or (string? comp) (fn? comp))")].join('')));
}

return reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__355;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.vec_to_elem;},new cljs.core.Symbol("reagent.impl.template","vec-to-elem","reagent.impl.template/vec-to-elem",(53488801),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"vec-to-elem","vec-to-elem",(-1236126603),null),"reagent/impl/template.cljs",(18),(1),(299),(299),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.template.vec_to_elem)?reagent.impl.template.vec_to_elem.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.expand_seq; return (
new cljs.core.Var(function(){return reagent.impl.template.expand_seq;},new cljs.core.Symbol("reagent.impl.template","expand-seq","reagent.impl.template/expand-seq",(85925345),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"expand-seq","expand-seq",(-935520867),null),"reagent/impl/template.cljs",(20),(1),(324),true,(324),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.expand_seq)?reagent.impl.template.expand_seq.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.expand_seq_check; return (
new cljs.core.Var(function(){return reagent.impl.template.expand_seq_check;},new cljs.core.Symbol("reagent.impl.template","expand-seq-check","reagent.impl.template/expand-seq-check",(-389943406),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"expand-seq-check","expand-seq-check",(1026549598),null),"reagent/impl/template.cljs",(26),(1),(325),true,(325),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.template.expand_seq_check)?reagent.impl.template.expand_seq_check.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.as_element;},new cljs.core.Symbol("reagent.impl.template","as-element","reagent.impl.template/as-element",(-581354721),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"as-element","as-element",(-2139409597),null),"reagent/impl/template.cljs",(17),(1),(327),(327),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.as_element)?reagent.impl.template.as_element.cljs$lang$test:null)])));})()
;
reagent.impl.component.as_element = reagent.impl.template.as_element;
(function (){
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__23475__auto___358 = a.length;
var i_359 = (0);
while(true){
if((i_359 < n__23475__auto___358)){
(a[i_359] = reagent.impl.template.as_element.call(null,(a[i_359])));

var G__360 = (i_359 + (1));
i_359 = G__360;
continue;
} else {
}
break;
}

return a;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.expand_seq;},new cljs.core.Symbol("reagent.impl.template","expand-seq","reagent.impl.template/expand-seq",(85925345),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"expand-seq","expand-seq",(-935520867),null),"reagent/impl/template.cljs",(17),(1),(339),(339),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(reagent.impl.template.expand_seq)?reagent.impl.template.expand_seq.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__23475__auto___361 = a.length;
var i_362 = (0);
while(true){
if((i_362 < n__23475__auto___361)){
var val_363 = (a[i_362]);
if((cljs.core.vector_QMARK_.call(null,val_363)) && ((reagent.impl.template.key_from_vec.call(null,val_363) == null))){
(o["no-key"] = true);
} else {
}

(a[i_362] = reagent.impl.template.as_element.call(null,val_363));

var G__364 = (i_362 + (1));
i_362 = G__364;
continue;
} else {
}
break;
}

return a;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.expand_seq_dev;},new cljs.core.Symbol("reagent.impl.template","expand-seq-dev","reagent.impl.template/expand-seq-dev",(1549687502),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"expand-seq-dev","expand-seq-dev",(-281263590),null),"reagent/impl/template.cljs",(21),(1),(345),(345),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"o","o",(290524299),null)], null)),null,(cljs.core.truth_(reagent.impl.template.expand_seq_dev)?reagent.impl.template.expand_seq_dev.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__368 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__368,(0),null);
var derefed = cljs.core.nth.call(null,vec__368,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
}); return (
new cljs.core.Var(function(){return reagent.impl.template.expand_seq_check;},new cljs.core.Symbol("reagent.impl.template","expand-seq-check","reagent.impl.template/expand-seq-check",(-389943406),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"expand-seq-check","expand-seq-check",(1026549598),null),"reagent/impl/template.cljs",(23),(1),(355),(355),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(reagent.impl.template.expand_seq_check)?reagent.impl.template.expand_seq_check.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__372 = (cljs.core.count.call(null,argv) - first_child);
switch (G__372) {
case (0):
return (reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (reagent.impl.util.react["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return (reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__372){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__372))
,[comp,jsprops],argv));

}
}); return (
new cljs.core.Var(function(){return reagent.impl.template.make_element;},new cljs.core.Symbol("reagent.impl.template","make-element","reagent.impl.template/make-element",(-2024583643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.template","reagent.impl.template",(-1264860531),null),new cljs.core.Symbol(null,"make-element","make-element",(846284505),null),"reagent/impl/template.cljs",(19),(1),(392),(392),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"jsprops","jsprops",(-611761942),null),new cljs.core.Symbol(null,"first-child","first-child",(-540335927),null)], null)),null,(cljs.core.truth_(reagent.impl.template.make_element)?reagent.impl.template.make_element.cljs$lang$test:null)])));})()
;
