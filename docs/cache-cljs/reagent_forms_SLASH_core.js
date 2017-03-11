goog.provide("reagent_forms.core");
(function (){
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
}); return (
new cljs.core.Var(function(){return reagent_forms.core.value_of;},new cljs.core.Symbol("reagent-forms.core","value-of","reagent-forms.core/value-of",(770922577),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"value-of","value-of",(-1188378022),null),"reagent_forms/core.cljs",(15),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",(-680416020),null)], null)),null,(cljs.core.truth_(reagent_forms.core.value_of)?reagent_forms.core.value_of.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
})); return (
new cljs.core.Var(function(){return reagent_forms.core.id__GT_path;},new cljs.core.Symbol("reagent-forms.core","id->path","reagent-forms.core/id->path",(-803543971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"id->path","id->path",(2101507654),null),"reagent_forms/core.cljs",(24),(1),(15),(15),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent_forms.core.id__GT_path)?reagent_forms.core.id__GT_path.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__29_SHARP_,p2__28_SHARP_){
var or__23109__auto__ = p2__28_SHARP_.call(null,path,value,p1__29_SHARP_);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return p1__29_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
}); return (
new cljs.core.Var(function(){return reagent_forms.core.set_doc_value;},new cljs.core.Symbol("reagent-forms.core","set-doc-value","reagent-forms.core/set-doc-value",(-210275103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"set-doc-value","set-doc-value",(128969464),null),"reagent_forms/core.cljs",(20),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),null,(cljs.core.truth_(reagent_forms.core.set_doc_value)?reagent_forms.core.set_doc_value.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
}); return (
new cljs.core.Var(function(){return reagent_forms.core.mk_save_fn;},new cljs.core.Symbol("reagent-forms.core","mk-save-fn","reagent-forms.core/mk-save-fn",(1167354517),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"mk-save-fn","mk-save-fn",(-766249826),null),"reagent_forms/core.cljs",(18),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),null,(cljs.core.truth_(reagent_forms.core.mk_save_fn)?reagent_forms.core.mk_save_fn.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
}); return (
new cljs.core.Var(function(){return reagent_forms.core.wrap_get_fn;},new cljs.core.Symbol("reagent-forms.core","wrap-get-fn","reagent-forms.core/wrap-get-fn",(2001352747),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"wrap-get-fn","wrap-get-fn",(-332222932),null),"reagent_forms/core.cljs",(18),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"wrapper","wrapper",(671428003),null)], null)),null,(cljs.core.truth_(reagent_forms.core.wrap_get_fn)?reagent_forms.core.wrap_get_fn.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
}); return (
new cljs.core.Var(function(){return reagent_forms.core.wrap_save_fn;},new cljs.core.Symbol("reagent-forms.core","wrap-save-fn","reagent-forms.core/wrap-save-fn",(-1040832257),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"wrap-save-fn","wrap-save-fn",(892444388),null),"reagent_forms/core.cljs",(19),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"save!","save!",(503157724),null),new cljs.core.Symbol(null,"wrapper","wrapper",(671428003),null)], null)),null,(cljs.core.truth_(reagent_forms.core.wrap_save_fn)?reagent_forms.core.wrap_save_fn.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"doc","doc",(1913296891)).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",(1683182755)),(function (){var temp__21873__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",(-1938980694)).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__21873__auto__)){
var in_fn = temp__21873__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",(1683182755)).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",(1683182755)).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",(-1137373803)),(function (){var temp__21873__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",(747295447)).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__21873__auto__)){
var out_fn = temp__21873__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",(-1137373803)).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",(-1137373803)).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
}); return (
new cljs.core.Var(function(){return reagent_forms.core.wrap_fns;},new cljs.core.Symbol("reagent-forms.core","wrap-fns","reagent-forms.core/wrap-fns",(1800303544),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"wrap-fns","wrap-fns",(126992771),null),"reagent_forms/core.cljs",(15),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(reagent_forms.core.wrap_fns)?reagent_forms.core.wrap_fns.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"date-format","date-format",(-557196721)),new cljs.core.Keyword(null,"fmt","fmt",(332300772)),new cljs.core.Keyword(null,"event","event",(301435442)),new cljs.core.Keyword(null,"inline","inline",(1399884222)),new cljs.core.Keyword(null,"field","field",(-1302436500)),new cljs.core.Keyword(null,"preamble","preamble",(1641040241)),new cljs.core.Keyword(null,"visible?","visible?",(2129863715)),new cljs.core.Keyword(null,"auto-close?","auto-close?",(-1675434568)));
}); return (
new cljs.core.Var(function(){return reagent_forms.core.clean_attrs;},new cljs.core.Symbol("reagent-forms.core","clean-attrs","reagent-forms.core/clean-attrs",(2110865860),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"clean-attrs","clean-attrs",(-795282435),null),"reagent_forms/core.cljs",(18),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null)], null)),null,(cljs.core.truth_(reagent_forms.core.clean_attrs)?reagent_forms.core.clean_attrs.cljs$lang$test:null)])));})()
;
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
(function (){
reagent_forms.core.format_type = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",(1639692286)),new cljs.core.Keyword(null,"numeric","numeric",(-1495594714))], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",(-1495594714));
} else {
return field_type;
}
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return reagent_forms.core.format_type;},new cljs.core.Symbol("reagent-forms.core","format-type","reagent-forms.core/format-type",(-181551520),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"format-type","format-type",(1617251431),null),"reagent_forms/core.cljs",(22),(1),(62),(62),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent_forms.core.format_type)?reagent_forms.core.format_type.cljs$lang$test:null)])));})()
;
}
(function (){
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
}); return (
new cljs.core.Var(function(){return reagent_forms.core.valid_number_ending_QMARK_;},new cljs.core.Symbol("reagent-forms.core","valid-number-ending?","reagent-forms.core/valid-number-ending?",(1101511660),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"valid-number-ending?","valid-number-ending?",(-579975721),null),"reagent_forms/core.cljs",(27),(1),(68),(68),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_)?reagent_forms.core.valid_number_ending_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__23067__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__23067__auto__){
return fmt;
} else {
return and__23067__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
}); return (
new cljs.core.Var(function(){return reagent_forms.core.format_value;},new cljs.core.Symbol("reagent-forms.core","format-value","reagent-forms.core/format-value",(1749000146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"format-value","format-value",(-1654247973),null),"reagent_forms/core.cljs",(19),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmt","fmt",(1972832299),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(reagent_forms.core.format_value)?reagent_forms.core.format_value.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",(-1495594714)),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
(function (){
reagent_forms.core.bind = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (p__908,_){
var map__909 = p__908;
var map__909__$1 = ((((!((map__909 == null)))?((((map__909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__909):map__909);
var field = cljs.core.get.call(null,map__909__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"numeric","numeric",(-1495594714)),new cljs.core.Keyword(null,"password","password",(417022471)),new cljs.core.Keyword(null,"email","email",(1415816706)),new cljs.core.Keyword(null,"tel","tel",(224138159)),new cljs.core.Keyword(null,"range","range",(1639692286)),new cljs.core.Keyword(null,"textarea","textarea",(-650375824))], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",(289353943));
} else {
return field;
}
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return reagent_forms.core.bind;},new cljs.core.Symbol("reagent-forms.core","bind","reagent-forms.core/bind",(-327275377),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"bind","bind",(1527103110),null),"reagent_forms/core.cljs",(15),(1),(86),(86),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent_forms.core.bind)?reagent_forms.core.bind.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",(289353943)),(function (p__911,p__912){
var map__913 = p__911;
var map__913__$1 = ((((!((map__913 == null)))?((((map__913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__913):map__913);
var field = cljs.core.get.call(null,map__913__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var id = cljs.core.get.call(null,map__913__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var fmt = cljs.core.get.call(null,map__913__$1,new cljs.core.Keyword(null,"fmt","fmt",(332300772)));
var map__914 = p__912;
var map__914__$1 = ((((!((map__914 == null)))?((((map__914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__914):map__914);
var get = cljs.core.get.call(null,map__914__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__914__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var doc = cljs.core.get.call(null,map__914__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var value = (function (){var or__23109__auto__ = get.call(null,id);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (map__913,map__913__$1,field,id,fmt,map__914,map__914__$1,get,save_BANG_,doc){
return (function (p1__30_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__30_SHARP_)));
});})(map__913,map__913__$1,field,id,fmt,map__914,map__914__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",(1612615655)),(function (p__917,p__918){
var map__919 = p__917;
var map__919__$1 = ((((!((map__919 == null)))?((((map__919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__919):map__919);
var id = cljs.core.get.call(null,map__919__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var map__920 = p__918;
var map__920__$1 = ((((!((map__920 == null)))?((((map__920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__920):map__920);
var get = cljs.core.get.call(null,map__920__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__920__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",(-50955819)),cljs.core.boolean$.call(null,get.call(null,id)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (map__919,map__919__$1,id,map__920,map__920__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__919,map__919__$1,id,map__920,map__920__$1,get,save_BANG_))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_,___$1){
return null;
}));
(function (){
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__25948__auto__ = [];
var len__25946__auto___934 = arguments.length;
var i__25947__auto___935 = (0);
while(true){
if((i__25947__auto___935 < len__25946__auto___934)){
args__25948__auto__.push((arguments[i__25947__auto___935]));

var G__936 = (i__25947__auto___935 + (1));
i__25947__auto___935 = G__936;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return reagent_forms.core.set_attrs;},new cljs.core.Symbol("reagent-forms.core","set-attrs","reagent-forms.core/set-attrs",(626977284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"set-attrs","set-attrs",(-2003412931),null),"reagent_forms/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(104),(104),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null)], null)),null,(cljs.core.truth_(reagent_forms.core.set_attrs)?reagent_forms.core.set_attrs.cljs$lang$test:null)])));})()
;

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__926,opts,p__927){
var vec__928 = p__926;
var seq__929 = cljs.core.seq.call(null,vec__928);
var first__930 = cljs.core.first.call(null,seq__929);
var seq__929__$1 = cljs.core.next.call(null,seq__929);
var type = first__930;
var first__930__$1 = cljs.core.first.call(null,seq__929__$1);
var seq__929__$2 = cljs.core.next.call(null,seq__929__$1);
var attrs = first__930__$1;
var body = seq__929__$2;
var vec__931 = p__927;
var default_attrs = cljs.core.nth.call(null,vec__931,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",(-50955819)),new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863)))))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq923){
var G__924 = cljs.core.first.call(null,seq923);
var seq923__$1 = cljs.core.next.call(null,seq923);
var G__925 = cljs.core.first.call(null,seq923__$1);
var seq923__$2 = cljs.core.next.call(null,seq923__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__924,G__925,seq923__$2);
});

new cljs.core.Var(function(){return reagent_forms.core.set_attrs;},new cljs.core.Symbol("reagent-forms.core","set-attrs","reagent-forms.core/set-attrs",(626977284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"set-attrs","set-attrs",(-2003412931),null),"reagent_forms/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(104),(104),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-attrs","default-attrs",(1218056830),null)], null)], null)),null,(cljs.core.truth_(reagent_forms.core.set_attrs)?reagent_forms.core.set_attrs.cljs$lang$test:null)]));
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
(function (){
reagent_forms.core.init_field = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (p__937,_){
var vec__938 = p__937;
var ___$1 = cljs.core.nth.call(null,vec__938,(0),null);
var map__941 = cljs.core.nth.call(null,vec__938,(1),null);
var map__941__$1 = ((((!((map__941 == null)))?((((map__941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__941):map__941);
var field = cljs.core.get.call(null,map__941__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",(1639692286)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"password","password",(417022471)),new cljs.core.Keyword(null,"email","email",(1415816706)),new cljs.core.Keyword(null,"tel","tel",(224138159)),new cljs.core.Keyword(null,"textarea","textarea",(-650375824))], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",(289353943));
} else {
return field__$1;
}
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return reagent_forms.core.init_field;},new cljs.core.Symbol("reagent-forms.core","init-field","reagent-forms.core/init-field",(775928937),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"init-field","init-field",(-1022948750),null),"reagent_forms/core.cljs",(21),(1),(115),(115),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent_forms.core.init_field)?reagent_forms.core.init_field.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",(-1736937707)),(function (p__943,p__944){
var vec__945 = p__943;
var seq__946 = cljs.core.seq.call(null,vec__945);
var first__947 = cljs.core.first.call(null,seq__946);
var seq__946__$1 = cljs.core.next.call(null,seq__946);
var type = first__947;
var first__947__$1 = cljs.core.first.call(null,seq__946__$1);
var seq__946__$2 = cljs.core.next.call(null,seq__946__$1);
var map__948 = first__947__$1;
var map__948__$1 = ((((!((map__948 == null)))?((((map__948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__948):map__948);
var attrs = map__948__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__948__$1,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)));
var body = seq__946__$2;
var map__949 = p__944;
var map__949__$1 = ((((!((map__949 == null)))?((((map__949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__949):map__949);
var doc = cljs.core.get.call(null,map__949__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
return ((function (vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,(function (){var temp__21873__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__21873__auto____$1)){
var valid_class = temp__21873__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",(-2030961996))], null),((function (valid_class,temp__21873__auto____$1,visible__27__auto__,temp__21873__auto__,vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc){
return (function (p1__31_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__31_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__21873__auto____$1,visible__27__auto__,temp__21873__auto__,vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc))
);
} else {
return attrs;
}
})())], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,(function (){var temp__21873__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__21873__auto____$1)){
var valid_class = temp__21873__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",(-2030961996))], null),((function (valid_class,temp__21873__auto____$1,temp__21873__auto__,vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc){
return (function (p1__31_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__31_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__21873__auto____$1,temp__21873__auto__,vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc))
);
} else {
return attrs;
}
})())], null),body);
}
});
;})(vec__945,seq__946,first__947,seq__946__$1,type,first__947__$1,seq__946__$2,map__948,map__948__$1,attrs,valid_QMARK_,body,map__949,map__949__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",(289353943)),(function (p__952,p__953){
var vec__954 = p__952;
var _ = cljs.core.nth.call(null,vec__954,(0),null);
var map__957 = cljs.core.nth.call(null,vec__954,(1),null);
var map__957__$1 = ((((!((map__957 == null)))?((((map__957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__957):map__957);
var attrs = map__957__$1;
var field = cljs.core.get.call(null,map__957__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var component = vec__954;
var map__958 = p__953;
var map__958__$1 = ((((!((map__958 == null)))?((((map__958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__958):map__958);
var opts = map__958__$1;
var doc = cljs.core.get.call(null,map__958__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
return ((function (vec__954,_,map__957,map__957__$1,attrs,field,component,map__958,map__958__$1,opts,doc){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),field], null));
}
});
;})(vec__954,_,map__957,map__957__$1,attrs,field,component,map__958,map__958__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",(-1495594714)),(function (p__961,p__962){
var vec__963 = p__961;
var type = cljs.core.nth.call(null,vec__963,(0),null);
var map__966 = cljs.core.nth.call(null,vec__963,(1),null);
var map__966__$1 = ((((!((map__966 == null)))?((((map__966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__966):map__966);
var attrs = map__966__$1;
var id = cljs.core.get.call(null,map__966__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var fmt = cljs.core.get.call(null,map__966__$1,new cljs.core.Keyword(null,"fmt","fmt",(332300772)));
var map__967 = p__962;
var map__967__$1 = ((((!((map__967 == null)))?((((map__967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__967):map__967);
var doc = cljs.core.get.call(null,map__967__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__967__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__967__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var or__23109__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_){
return (function (p1__32_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__32_SHARP_));
});})(visible__27__auto__,temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",(814300747)),((function (visible__27__auto__,temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_){
return (function (p1__33_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",(-1495594714)),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__33_SHARP_))));
});})(visible__27__auto__,temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var or__23109__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_){
return (function (p1__32_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__32_SHARP_));
});})(temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",(814300747)),((function (temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_){
return (function (p1__33_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",(-1495594714)),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__33_SHARP_))));
});})(temp__21873__auto__,input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__963,type,map__966,map__966__$1,attrs,id,fmt,map__967,map__967__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",(821741450)),(function (p__970,p__971){
var vec__972 = p__970;
var _ = cljs.core.nth.call(null,vec__972,(0),null);
var map__975 = cljs.core.nth.call(null,vec__972,(1),null);
var map__975__$1 = ((((!((map__975 == null)))?((((map__975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__975):map__975);
var attrs = map__975__$1;
var id = cljs.core.get.call(null,map__975__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var date_format = cljs.core.get.call(null,map__975__$1,new cljs.core.Keyword(null,"date-format","date-format",(-557196721)));
var inline = cljs.core.get.call(null,map__975__$1,new cljs.core.Keyword(null,"inline","inline",(1399884222)));
var auto_close_QMARK_ = cljs.core.get.call(null,map__975__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",(-1675434568)));
var lang = cljs.core.get.call(null,map__975__$1,new cljs.core.Keyword(null,"lang","lang",(-1819677104)),new cljs.core.Keyword(null,"en-US","en-US",(1221407245)));
var map__976 = p__971;
var map__976__$1 = ((((!((map__976 == null)))?((((map__976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__976):map__976);
var doc = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",(-1960248533)).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",(-1960248533)).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",(-1960248533)).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__23109__auto__ = new cljs.core.Keyword(null,"year","year",(335913393)).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__23109__auto__ = selected_month;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__23109__auto__ = new cljs.core.Keyword(null,"day","day",(-274800446)).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",(2036556212)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",(-987970676)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",(-1123419636)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",(-191706886)),true,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__34_SHARP_){
p1__34_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var temp__21873__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__21873__auto____$1)){
var date = temp__21873__auto____$1;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return "";
}
})()], null),reagent_forms.core.clean_attrs.call(null,attrs))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",(-1300181023)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__35_SHARP_){
p1__35_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",(-1048928069))], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,((function (visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__36_SHARP_){
return save_BANG_.call(null,id,p1__36_SHARP_);
});})(visible__27__auto__,temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",(2036556212)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",(-987970676)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",(-1123419636)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",(-191706886)),true,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__34_SHARP_){
p1__34_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var temp__21873__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__21873__auto____$1)){
var date = temp__21873__auto____$1;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return "";
}
})()], null),reagent_forms.core.clean_attrs.call(null,attrs))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",(-1300181023)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__35_SHARP_){
p1__35_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",(-1048928069))], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,((function (temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_){
return (function (p1__36_SHARP_){
return save_BANG_.call(null,id,p1__36_SHARP_);
});})(temp__21873__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__972,_,map__975,map__975__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__976,map__976__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",(1612615655)),(function (p__979,p__980){
var vec__981 = p__979;
var _ = cljs.core.nth.call(null,vec__981,(0),null);
var map__984 = cljs.core.nth.call(null,vec__981,(1),null);
var map__984__$1 = ((((!((map__984 == null)))?((((map__984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__984):map__984);
var attrs = map__984__$1;
var id = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var field = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var checked = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"checked","checked",(-50955819)));
var default_checked = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863)));
var component = vec__981;
var map__985 = p__980;
var map__985__$1 = ((((!((map__985 == null)))?((((map__985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__985):map__985);
var opts = map__985__$1;
var doc = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
if(cljs.core.truth_((function (){var or__23109__auto__ = checked;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__981,_,map__984,map__984__$1,attrs,id,field,checked,default_checked,component,map__985,map__985__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",(-50955819)),new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863))));
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),field], null));
}
});
;})(vec__981,_,map__984,map__984__$1,attrs,id,field,checked,default_checked,component,map__985,map__985__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",(1718410804)),(function (p__988,p__989){
var vec__990 = p__988;
var type = cljs.core.nth.call(null,vec__990,(0),null);
var map__993 = cljs.core.nth.call(null,vec__990,(1),null);
var map__993__$1 = ((((!((map__993 == null)))?((((map__993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__993):map__993);
var attrs = map__993__$1;
var id = cljs.core.get.call(null,map__993__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var preamble = cljs.core.get.call(null,map__993__$1,new cljs.core.Keyword(null,"preamble","preamble",(1641040241)));
var postamble = cljs.core.get.call(null,map__993__$1,new cljs.core.Keyword(null,"postamble","postamble",(-500033366)));
var placeholder = cljs.core.get.call(null,map__993__$1,new cljs.core.Keyword(null,"placeholder","placeholder",(-104873083)));
var map__994 = p__989;
var map__994__$1 = ((((!((map__994 == null)))?((((map__994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__994):map__994);
var doc = cljs.core.get.call(null,map__994__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__994__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
return ((function (vec__990,type,map__993,map__993__$1,attrs,id,preamble,postamble,placeholder,map__994,map__994__$1,doc,get){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__21873__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__21873__auto____$1)){
var value = temp__21873__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__21873__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__21873__auto____$1)){
var value = temp__21873__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__990,type,map__993,map__993__$1,attrs,id,preamble,postamble,placeholder,map__994,map__994__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",(-571950580)),(function (p__997,p__998){
var vec__999 = p__997;
var seq__1000 = cljs.core.seq.call(null,vec__999);
var first__1001 = cljs.core.first.call(null,seq__1000);
var seq__1000__$1 = cljs.core.next.call(null,seq__1000);
var type = first__1001;
var first__1001__$1 = cljs.core.first.call(null,seq__1000__$1);
var seq__1000__$2 = cljs.core.next.call(null,seq__1000__$1);
var map__1002 = first__1001__$1;
var map__1002__$1 = ((((!((map__1002 == null)))?((((map__1002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1002):map__1002);
var attrs = map__1002__$1;
var id = cljs.core.get.call(null,map__1002__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var event = cljs.core.get.call(null,map__1002__$1,new cljs.core.Keyword(null,"event","event",(301435442)));
var touch_event = cljs.core.get.call(null,map__1002__$1,new cljs.core.Keyword(null,"touch-event","touch-event",(-1071581783)));
var closeable_QMARK_ = cljs.core.get.call(null,map__1002__$1,new cljs.core.Keyword(null,"closeable?","closeable?",(1490064409)),true);
var body = seq__1000__$2;
var map__1003 = p__998;
var map__1003__$1 = ((((!((map__1003 == null)))?((((map__1003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1003):map__1003);
var opts = map__1003__$1;
var doc = cljs.core.get.call(null,map__1003__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__1003__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__1003__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
return ((function (vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__21873__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__21873__auto____$1)){
var message = temp__21873__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,attrs),(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",(-1545560743)),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",(1174270348)),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",(399337029)),true,(function (){var or__23109__auto__ = touch_event;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",(1632826543));
}
})(),((function (message,temp__21873__auto____$1,visible__27__auto__,temp__21873__auto__,vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__21873__auto____$1,visible__27__auto__,temp__21873__auto__,vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__21873__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__21873__auto____$1)){
var message = temp__21873__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,attrs),(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",(-1545560743)),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",(1174270348)),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",(399337029)),true,(function (){var or__23109__auto__ = touch_event;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",(1632826543));
}
})(),((function (message,temp__21873__auto____$1,temp__21873__auto__,vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__21873__auto____$1,temp__21873__auto__,vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__999,seq__1000,first__1001,seq__1000__$1,type,first__1001__$1,seq__1000__$2,map__1002,map__1002__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__1003,map__1003__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",(1323726374)),(function (p__1006,p__1007){
var vec__1008 = p__1006;
var seq__1009 = cljs.core.seq.call(null,vec__1008);
var first__1010 = cljs.core.first.call(null,seq__1009);
var seq__1009__$1 = cljs.core.next.call(null,seq__1009);
var type = first__1010;
var first__1010__$1 = cljs.core.first.call(null,seq__1009__$1);
var seq__1009__$2 = cljs.core.next.call(null,seq__1009__$1);
var map__1011 = first__1010__$1;
var map__1011__$1 = ((((!((map__1011 == null)))?((((map__1011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1011):map__1011);
var attrs = map__1011__$1;
var field = cljs.core.get.call(null,map__1011__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var name = cljs.core.get.call(null,map__1011__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
var value = cljs.core.get.call(null,map__1011__$1,new cljs.core.Keyword(null,"value","value",(305978217)));
var checked = cljs.core.get.call(null,map__1011__$1,new cljs.core.Keyword(null,"checked","checked",(-50955819)));
var default_checked = cljs.core.get.call(null,map__1011__$1,new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863)));
var body = seq__1009__$2;
var map__1012 = p__1007;
var map__1012__$1 = ((((!((map__1012 == null)))?((((map__1012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1012):map__1012);
var doc = cljs.core.get.call(null,map__1012__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__1012__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__1012__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
if(cljs.core.truth_((function (){var or__23109__auto__ = checked;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.dissoc.call(null,reagent_forms.core.clean_attrs.call(null,attrs),new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"radio","radio",(1323726374)),new cljs.core.Keyword(null,"checked","checked",(-50955819)),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__27__auto__,temp__21873__auto__,vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_))
], null))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.dissoc.call(null,reagent_forms.core.clean_attrs.call(null,attrs),new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"default-checked","default-checked",(1039965863))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"radio","radio",(1323726374)),new cljs.core.Keyword(null,"checked","checked",(-50955819)),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__21873__auto__,vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_))
], null))], null),body);
}
});
;})(vec__1008,seq__1009,first__1010,seq__1009__$1,type,first__1010__$1,seq__1009__$2,map__1011,map__1011__$1,attrs,field,name,value,checked,default_checked,body,map__1012,map__1012__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",(-1364611797)),(function (p__1015,p__1016){
var vec__1017 = p__1015;
var type = cljs.core.nth.call(null,vec__1017,(0),null);
var map__1020 = cljs.core.nth.call(null,vec__1017,(1),null);
var map__1020__$1 = ((((!((map__1020 == null)))?((((map__1020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1020):map__1020);
var attrs = map__1020__$1;
var result_fn = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"result-fn","result-fn",(-726333573)),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"item-class","item-class",(1277553858)));
var input_placeholder = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",(-965612860)));
var highlight_class = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",(1738202282)));
var list_class = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"list-class","list-class",(1412758252)));
var data_source = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"data-source","data-source",(-658934676)));
var input_class = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"input-class","input-class",(-62053138)));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",(330213424)),true);
var id = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var choice_fn = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",(-1053191627)),cljs.core.identity);
var map__1021 = p__1016;
var map__1021__$1 = ((((!((map__1021 == null)))?((((map__1021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1021):map__1021);
var doc = cljs.core.get.call(null,map__1021__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__1021__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__1021__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__23067__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__23067__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__23067__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"placeholder","placeholder",(-104873083)),input_placeholder,new cljs.core.Keyword(null,"class","class",(-2030961996)),input_class,new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",(-13737624)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",(814300747)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__37_SHARP_){
var temp__22186__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__37_SHARP_));
if(cljs.core.truth_(temp__22186__auto__)){
var value = temp__22186__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",(-1374733765)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__38_SHARP_){
var G__1024 = p1__38_SHARP_.which;
switch (G__1024) {
case (38):
p1__38_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__38_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__38_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
p1__38_SHARP_.preventDefault();

return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",(-1349521403)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),(cljs.core.truth_((function (){var or__23109__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__23109__auto__){
return or__23109__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",(1333468478)):new cljs.core.Keyword(null,"block","block",(664686210)))], null),new cljs.core.Keyword(null,"class","class",(-2030961996)),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",(-1664921661)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",(-1864319528)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",(723558921)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",(895755393)),index,new cljs.core.Keyword(null,"key","key",(-1516042587)),index,new cljs.core.Keyword(null,"class","class",(-2030961996)),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",(-858472552)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__39_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__39_SHARP_.target.getAttribute("tabIndex")));
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__40_SHARP_){
p1__40_SHARP_.preventDefault();

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__27__auto__,temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",(556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"text","text",(-1790561697)),new cljs.core.Keyword(null,"placeholder","placeholder",(-104873083)),input_placeholder,new cljs.core.Keyword(null,"class","class",(-2030961996)),input_class,new cljs.core.Keyword(null,"value","value",(305978217)),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",(-13737624)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",(814300747)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__37_SHARP_){
var temp__22186__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__37_SHARP_));
if(cljs.core.truth_(temp__22186__auto__)){
var value = temp__22186__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",(-1374733765)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__38_SHARP_){
var G__1025 = p1__38_SHARP_.which;
switch (G__1025) {
case (38):
p1__38_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__38_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__38_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
p1__38_SHARP_.preventDefault();

return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",(-1349521403)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",(-496642736)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",(242065432)),(cljs.core.truth_((function (){var or__23109__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__23109__auto__){
return or__23109__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",(1333468478)):new cljs.core.Keyword(null,"block","block",(664686210)))], null),new cljs.core.Keyword(null,"class","class",(-2030961996)),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",(-1664921661)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",(-1864319528)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",(723558921)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",(895755393)),index,new cljs.core.Keyword(null,"key","key",(-1516042587)),index,new cljs.core.Keyword(null,"class","class",(-2030961996)),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",(-858472552)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__39_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__39_SHARP_.target.getAttribute("tabIndex")));
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",(1632826543)),((function (temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_){
return (function (p1__40_SHARP_){
p1__40_SHARP_.preventDefault();

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__21873__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__1017,type,map__1020,map__1020__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__1021,map__1021__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",(-1269645878)),(function (p__1028,p__1029){
var vec__1030 = p__1028;
var type = cljs.core.nth.call(null,vec__1030,(0),null);
var map__1033 = cljs.core.nth.call(null,vec__1030,(1),null);
var map__1033__$1 = ((((!((map__1033 == null)))?((((map__1033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1033):map__1033);
var attrs = map__1033__$1;
var id = cljs.core.get.call(null,map__1033__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var map__1034 = p__1029;
var map__1034__$1 = ((((!((map__1034 == null)))?((((map__1034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1034):map__1034);
var doc = cljs.core.get.call(null,map__1034__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var save_BANG_ = cljs.core.get.call(null,map__1034__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
return ((function (vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_){
return (function (p1__41_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__41_SHARP_.target.files)));
});})(visible__27__auto__,temp__21873__auto__,vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs.call(null,attrs))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_){
return (function (p1__41_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__41_SHARP_.target.files)));
});})(temp__21873__auto__,vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs.call(null,attrs))], null);
}
});
;})(vec__1030,type,map__1033,map__1033__$1,attrs,id,map__1034,map__1034__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",(-472457450)),(function (p__1037,p__1038){
var vec__1039 = p__1037;
var type = cljs.core.nth.call(null,vec__1039,(0),null);
var map__1042 = cljs.core.nth.call(null,vec__1039,(1),null);
var map__1042__$1 = ((((!((map__1042 == null)))?((((map__1042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1042):map__1042);
var attrs = map__1042__$1;
var id = cljs.core.get.call(null,map__1042__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var map__1043 = p__1038;
var map__1043__$1 = ((((!((map__1043 == null)))?((((map__1043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1043):map__1043);
var doc = cljs.core.get.call(null,map__1043__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var save_BANG_ = cljs.core.get.call(null,map__1043__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
return ((function (vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"multiple","multiple",(1244445549)),true,new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_){
return (function (p1__42_SHARP_){
return save_BANG_.call(null,id,p1__42_SHARP_.target.files);
});})(visible__27__auto__,temp__21873__auto__,vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs.call(null,attrs))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"multiple","multiple",(1244445549)),true,new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_){
return (function (p1__42_SHARP_){
return save_BANG_.call(null,id,p1__42_SHARP_.target.files);
});})(temp__21873__auto__,vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_))
], null),reagent_forms.core.clean_attrs.call(null,attrs))], null);
}
});
;})(vec__1039,type,map__1042,map__1042__$1,attrs,id,map__1043,map__1043__$1,doc,save_BANG_))
}));
(function (){
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__1046,p__1047,selections,field,id){
var vec__1055 = p__1046;
var seq__1056 = cljs.core.seq.call(null,vec__1055);
var first__1057 = cljs.core.first.call(null,seq__1056);
var seq__1056__$1 = cljs.core.next.call(null,seq__1056);
var type = first__1057;
var first__1057__$1 = cljs.core.first.call(null,seq__1056__$1);
var seq__1056__$2 = cljs.core.next.call(null,seq__1056__$1);
var map__1058 = first__1057__$1;
var map__1058__$1 = ((((!((map__1058 == null)))?((((map__1058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1058):map__1058);
var attrs = map__1058__$1;
var key = cljs.core.get.call(null,map__1058__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
var touch_event = cljs.core.get.call(null,map__1058__$1,new cljs.core.Keyword(null,"touch-event","touch-event",(-1071581783)));
var body = seq__1056__$2;
var map__1059 = p__1047;
var map__1059__$1 = ((((!((map__1059 == null)))?((((map__1059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1059):map__1059);
var save_BANG_ = cljs.core.get.call(null,map__1059__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var multi_select = cljs.core.get.call(null,map__1059__$1,new cljs.core.Keyword(null,"multi-select","multi-select",(-1298511287)));
var handle_click_BANG_ = ((function (vec__1055,seq__1056,first__1057,seq__1056__$1,type,first__1057__$1,seq__1056__$2,map__1058,map__1058__$1,attrs,key,touch_event,body,map__1059,map__1059__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not.call(null,value)]));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__1055,seq__1056,first__1057,seq__1056__$1,type,first__1057__$1,seq__1056__$2,map__1058,map__1058__$1,attrs,key,touch_event,body,map__1059,map__1059__$1,save_BANG_,multi_select))
;
return ((function (vec__1055,seq__1056,first__1057,seq__1056__$1,type,first__1057__$1,seq__1056__$2,map__1058,map__1058__$1,attrs,key,touch_event,body,map__1059,map__1059__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",(-2030961996)),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__23109__auto__ = touch_event;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",(1632826543));
}
})(),handle_click_BANG_]),reagent_forms.core.clean_attrs.call(null,attrs)),body], null);
});
;})(vec__1055,seq__1056,first__1057,seq__1056__$1,type,first__1057__$1,seq__1056__$2,map__1058,map__1058__$1,attrs,key,touch_event,body,map__1059,map__1059__$1,save_BANG_,multi_select))
}); return (
new cljs.core.Var(function(){return reagent_forms.core.group_item;},new cljs.core.Symbol("reagent-forms.core","group-item","reagent-forms.core/group-item",(1049197670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"group-item","group-item",(-1983851911),null),"reagent_forms/core.cljs",(18),(1),(315),(315),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"touch-event","touch-event",(568949744),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"save!","save!",(503157724),null),new cljs.core.Symbol(null,"multi-select","multi-select",(342020240),null)], null)], null),new cljs.core.Symbol(null,"selections","selections",(362921294),null),new cljs.core.Symbol(null,"field","field",(338095027),null),new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),null,(cljs.core.truth_(reagent_forms.core.group_item)?reagent_forms.core.group_item.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__1062){
var map__1071 = p__1062;
var map__1071__$1 = ((((!((map__1071 == null)))?((((map__1071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1071):map__1071);
var get = cljs.core.get.call(null,map__1071__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var multi_select = cljs.core.get.call(null,map__1071__$1,new cljs.core.Keyword(null,"multi-select","multi-select",(-1298511287)));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__1071,map__1071__$1,get,multi_select){
return (function (m,p__1073){
var vec__1074 = p__1073;
var _ = cljs.core.nth.call(null,vec__1074,(0),null);
var map__1077 = cljs.core.nth.call(null,vec__1074,(1),null);
var map__1077__$1 = ((((!((map__1077 == null)))?((((map__1077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1077):map__1077);
var key = cljs.core.get.call(null,map__1077__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__1071,map__1071__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
}); return (
new cljs.core.Var(function(){return reagent_forms.core.mk_selections;},new cljs.core.Symbol("reagent-forms.core","mk-selections","reagent-forms.core/mk-selections",(-1962377287),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"mk-selections","mk-selections",(913558944),null),"reagent_forms/core.cljs",(21),(1),(331),(331),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"selectors","selectors",(959789759),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get","get",(-971253014),null),new cljs.core.Symbol(null,"multi-select","multi-select",(342020240),null)], null)], null)], null)),null,(cljs.core.truth_(reagent_forms.core.mk_selections)?reagent_forms.core.mk_selections.cljs$lang$test:null)])));})()
;
/**
 * selectors might be passed in inline or as a collection
 */
(function (){
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
}); return (
new cljs.core.Var(function(){return reagent_forms.core.extract_selectors;},new cljs.core.Symbol("reagent-forms.core","extract-selectors","reagent-forms.core/extract-selectors",(-2114791713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"extract-selectors","extract-selectors",(1051354320),null),"reagent_forms/core.cljs",(24),(1),(338),(338),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selectors","selectors",(959789759),null)], null)),"selectors might be passed in inline or as a collection",(cljs.core.truth_(reagent_forms.core.extract_selectors)?reagent_forms.core.extract_selectors.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__1079,p__1080){
var vec__1092 = p__1079;
var seq__1093 = cljs.core.seq.call(null,vec__1092);
var first__1094 = cljs.core.first.call(null,seq__1093);
var seq__1093__$1 = cljs.core.next.call(null,seq__1093);
var type = first__1094;
var first__1094__$1 = cljs.core.first.call(null,seq__1093__$1);
var seq__1093__$2 = cljs.core.next.call(null,seq__1093__$1);
var map__1095 = first__1094__$1;
var map__1095__$1 = ((((!((map__1095 == null)))?((((map__1095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1095):map__1095);
var attrs = map__1095__$1;
var field = cljs.core.get.call(null,map__1095__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var id = cljs.core.get.call(null,map__1095__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var selection_items = seq__1093__$2;
var map__1096 = p__1080;
var map__1096__$1 = ((((!((map__1096 == null)))?((((map__1096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1096):map__1096);
var opts = map__1096__$1;
var get = cljs.core.get.call(null,map__1096__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",(2129863715)),new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",(762528866)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get){
return (function (p1__43_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get){
return (function (p__1099){
var vec__1100 = p__1099;
var k = cljs.core.nth.call(null,vec__1100,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get))
,p1__43_SHARP_));
});})(selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",(762528866)),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get){
return (function (p1__44_SHARP_){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(p1__44_SHARP_);
if(cljs.core.truth_(temp__21873__auto__)){
var visible_QMARK_ = temp__21873__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",(1913296891)).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__1092,seq__1093,first__1094,seq__1093__$1,type,first__1094__$1,seq__1093__$2,map__1095,map__1095__$1,attrs,field,id,selection_items,map__1096,map__1096__$1,opts,get))
}); return (
new cljs.core.Var(function(){return reagent_forms.core.selection_group;},new cljs.core.Symbol("reagent-forms.core","selection-group","reagent-forms.core/selection-group",(708922912),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"selection-group","selection-group",(-2029593559),null),"reagent_forms/core.cljs",(23),(1),(344),(344),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",(338095027),null),new cljs.core.Symbol(null,"id","id",(252129435),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"selection-items","selection-items",(-1197854396),null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get","get",(-971253014),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(reagent_forms.core.selection_group)?reagent_forms.core.selection_group.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",(1327691774)),(function (p__1103,p__1104){
var vec__1105 = p__1103;
var _ = cljs.core.nth.call(null,vec__1105,(0),null);
var attrs = cljs.core.nth.call(null,vec__1105,(1),null);
var field = vec__1105;
var map__1108 = p__1104;
var map__1108__$1 = ((((!((map__1108 == null)))?((((map__1108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1108):map__1108);
var opts = map__1108__$1;
var doc = cljs.core.get.call(null,map__1108__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
return ((function (vec__1105,_,attrs,field,map__1108,map__1108__$1,opts,doc){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__1105,_,attrs,field,map__1108,map__1108__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",(-1298511287)),(function (p__1110,p__1111){
var vec__1112 = p__1110;
var _ = cljs.core.nth.call(null,vec__1112,(0),null);
var attrs = cljs.core.nth.call(null,vec__1112,(1),null);
var field = vec__1112;
var map__1115 = p__1111;
var map__1115__$1 = ((((!((map__1115 == null)))?((((map__1115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1115):map__1115);
var opts = map__1115__$1;
var doc = cljs.core.get.call(null,map__1115__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
return ((function (vec__1112,_,attrs,field,map__1115,map__1115__$1,opts,doc){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",(-1298511287)),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",(-1298511287)),true)], null);
}
});
;})(vec__1112,_,attrs,field,map__1115,map__1115__$1,opts,doc))
}));
(function (){
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25487__auto__ = (function reagent_forms$core$map_options_$_iter__1141(s__1142){
return (new cljs.core.LazySeq(null,(function (){
var s__1142__$1 = s__1142;
while(true){
var temp__22186__auto__ = cljs.core.seq.call(null,s__1142__$1);
if(temp__22186__auto__){
var s__1142__$2 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1142__$2)){
var c__25485__auto__ = cljs.core.chunk_first.call(null,s__1142__$2);
var size__25486__auto__ = cljs.core.count.call(null,c__25485__auto__);
var b__1144 = cljs.core.chunk_buffer.call(null,size__25486__auto__);
if((function (){var i__1143 = (0);
while(true){
if((i__1143 < size__25486__auto__)){
var vec__1155 = cljs.core._nth.call(null,c__25485__auto__,i__1143);
var _ = cljs.core.nth.call(null,vec__1155,(0),null);
var map__1158 = cljs.core.nth.call(null,vec__1155,(1),null);
var map__1158__$1 = ((((!((map__1158 == null)))?((((map__1158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1158):map__1158);
var key = cljs.core.get.call(null,map__1158__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
var label = cljs.core.nth.call(null,vec__1155,(2),null);
cljs.core.chunk_append.call(null,b__1144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__1165 = (i__1143 + (1));
i__1143 = G__1165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1144),reagent_forms$core$map_options_$_iter__1141.call(null,cljs.core.chunk_rest.call(null,s__1142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1144),null);
}
} else {
var vec__1160 = cljs.core.first.call(null,s__1142__$2);
var _ = cljs.core.nth.call(null,vec__1160,(0),null);
var map__1163 = cljs.core.nth.call(null,vec__1160,(1),null);
var map__1163__$1 = ((((!((map__1163 == null)))?((((map__1163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1163):map__1163);
var key = cljs.core.get.call(null,map__1163__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
var label = cljs.core.nth.call(null,vec__1160,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__1141.call(null,cljs.core.rest.call(null,s__1142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25487__auto__.call(null,options);
})());
}); return (
new cljs.core.Var(function(){return reagent_forms.core.map_options;},new cljs.core.Symbol("reagent-forms.core","map-options","reagent-forms.core/map-options",(1021643940),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"map-options","map-options",(1261279917),null),"reagent_forms/core.cljs",(18),(1),(372),(372),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),null,(cljs.core.truth_(reagent_forms.core.map_options)?reagent_forms.core.map_options.cljs$lang$test:null)])));})()
;
(function (){
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__45_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__45_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",(-1516042587))], null)));
}),options)));
}); return (
new cljs.core.Var(function(){return reagent_forms.core.default_selection;},new cljs.core.Symbol("reagent-forms.core","default-selection","reagent-forms.core/default-selection",(-1387767699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"default-selection","default-selection",(942680662),null),"reagent_forms/core.cljs",(24),(1),(378),(378),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent_forms.core.default_selection)?reagent_forms.core.default_selection.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",(765357683)),(function (p__1166,p__1167){
var vec__1168 = p__1166;
var seq__1169 = cljs.core.seq.call(null,vec__1168);
var first__1170 = cljs.core.first.call(null,seq__1169);
var seq__1169__$1 = cljs.core.next.call(null,seq__1169);
var type = first__1170;
var first__1170__$1 = cljs.core.first.call(null,seq__1169__$1);
var seq__1169__$2 = cljs.core.next.call(null,seq__1169__$1);
var map__1171 = first__1170__$1;
var map__1171__$1 = ((((!((map__1171 == null)))?((((map__1171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1171):map__1171);
var attrs = map__1171__$1;
var field = cljs.core.get.call(null,map__1171__$1,new cljs.core.Keyword(null,"field","field",(-1302436500)));
var id = cljs.core.get.call(null,map__1171__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var options = seq__1169__$2;
var map__1172 = p__1167;
var map__1172__$1 = ((((!((map__1172 == null)))?((((map__1172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1172):map__1172);
var doc = cljs.core.get.call(null,map__1172__$1,new cljs.core.Keyword(null,"doc","doc",(1913296891)));
var get = cljs.core.get.call(null,map__1172__$1,new cljs.core.Keyword(null,"get","get",(1683182755)));
var save_BANG_ = cljs.core.get.call(null,map__1172__$1,new cljs.core.Keyword(null,"save!","save!",(-1137373803)));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__23109__auto__ = get.call(null,id);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",(-1516042587))], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_){
return (function (){
var temp__21873__auto__ = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__21873__auto__)){
var visible__27__auto__ = temp__21873__auto__;
if(cljs.core.truth_(visible__27__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,reagent_forms.core.clean_attrs.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",(232220170)),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (visible__27__auto__,temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_){
return (function (p1__46_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__46_SHARP_)));
});})(visible__27__auto__,temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__27__auto__,temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_){
return (function (p1__47_SHARP_){
var temp__21873__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__47_SHARP_));
if(cljs.core.truth_(temp__21873__auto____$1)){
var visible_QMARK_ = temp__21873__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__27__auto__,temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,reagent_forms.core.clean_attrs.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",(232220170)),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",(-732046149)),((function (temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_){
return (function (p1__46_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__46_SHARP_)));
});})(temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_){
return (function (p1__47_SHARP_){
var temp__21873__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",(2129863715)).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__47_SHARP_));
if(cljs.core.truth_(temp__21873__auto____$1)){
var visible_QMARK_ = temp__21873__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__21873__auto__,options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__1168,seq__1169,first__1170,seq__1169__$1,type,first__1170__$1,seq__1169__$2,map__1171,map__1171__$1,attrs,field,id,options,map__1172,map__1172__$1,doc,get,save_BANG_))
}));
(function (){
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",(-1302436500))));
}); return (
new cljs.core.Var(function(){return reagent_forms.core.field_QMARK_;},new cljs.core.Symbol("reagent-forms.core","field?","reagent-forms.core/field?",(-550473497),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"field?","field?",(1257825016),null),"reagent_forms/core.cljs",(14),(1),(404),(404),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(reagent_forms.core.field_QMARK_)?reagent_forms.core.field_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
(function (){
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__25948__auto__ = [];
var len__25946__auto___1178 = arguments.length;
var i__25947__auto___1179 = (0);
while(true){
if((i__25947__auto___1179 < len__25946__auto___1178)){
args__25948__auto__.push((arguments[i__25947__auto___1179]));

var G__1180 = (i__25947__auto___1179 + (1));
i__25947__auto___1179 = G__1180;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return reagent_forms.core.bind_fields;},new cljs.core.Symbol("reagent-forms.core","bind-fields","reagent-forms.core/bind-fields",(537882483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"bind-fields","bind-fields",(-574161544),null),"reagent_forms/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"events","events",(-861883568),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(409),(409),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),"creates data bindings between the form fields and the supplied atom\n   form - the form template with the fields\n   doc - the document that the fields will be bound to\n   events - any events that should be triggered when the document state changes",(cljs.core.truth_(reagent_forms.core.bind_fields)?reagent_forms.core.bind_fields.cljs$lang$test:null)])));})()
;

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),doc,new cljs.core.Keyword(null,"get","get",(1683182755)),(function (p1__48_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__48_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",(-1137373803)),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq1175){
var G__1176 = cljs.core.first.call(null,seq1175);
var seq1175__$1 = cljs.core.next.call(null,seq1175);
var G__1177 = cljs.core.first.call(null,seq1175__$1);
var seq1175__$2 = cljs.core.next.call(null,seq1175__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__1176,G__1177,seq1175__$2);
});

new cljs.core.Var(function(){return reagent_forms.core.bind_fields;},new cljs.core.Symbol("reagent-forms.core","bind-fields","reagent-forms.core/bind-fields",(537882483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.core","reagent-forms.core",(-743037301),null),new cljs.core.Symbol(null,"bind-fields","bind-fields",(-574161544),null),"reagent_forms/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"events","events",(-861883568),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(409),(409),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),"creates data bindings between the form fields and the supplied atom\n   form - the form template with the fields\n   doc - the document that the fields will be bound to\n   events - any events that should be triggered when the document state changes",(cljs.core.truth_(reagent_forms.core.bind_fields)?reagent_forms.core.bind_fields.cljs$lang$test:null)]));
