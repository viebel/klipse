goog.provide("reagent.impl.component");
(function (){
reagent.impl.component._STAR_current_component_STAR_; return (
new cljs.core.Var(function(){return reagent.impl.component._STAR_current_component_STAR_;},new cljs.core.Symbol("reagent.impl.component","*current-component*","reagent.impl.component/*current-component*",(1988662010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"*current-component*","*current-component*",(253722197),null),"reagent/impl/component.cljs",(39),(1),true,(8),true,(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component._STAR_current_component_STAR_)?reagent.impl.component._STAR_current_component_STAR_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__273 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__274 = (i + (1));
m = G__273;
i = G__274;
continue;
} else {
return m;
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.shallow_obj_to_map;},new cljs.core.Symbol("reagent.impl.component","shallow-obj-to-map","reagent.impl.component/shallow-obj-to-map",(-790210427),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"shallow-obj-to-map","shallow-obj-to-map",(-881538024),null),"reagent/impl/component.cljs",(25),(1),(13),(13),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null)], null)),null,(cljs.core.truth_(reagent.impl.component.shallow_obj_to_map)?reagent.impl.component.shallow_obj_to_map.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.extract_props;},new cljs.core.Symbol("reagent.impl.component","extract-props","reagent.impl.component/extract-props",(-1215435167),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"extract-props","extract-props",(-1357178220),null),"reagent/impl/component.cljs",(20),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.component.extract_props)?reagent.impl.component.extract_props.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.extract_children;},new cljs.core.Symbol("reagent.impl.component","extract-children","reagent.impl.component/extract-children",(-1460271060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"extract-children","extract-children",(1399561393),null),"reagent/impl/component.cljs",(23),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(reagent.impl.component.extract_children)?reagent.impl.component.extract_children.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__20287__auto__ = (p["argv"]);
if((temp__20287__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__20287__auto__;
return a;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.props_argv;},new cljs.core.Symbol("reagent.impl.component","props-argv","reagent.impl.component/props-argv",(-862098247),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"props-argv","props-argv",(-735118398),null),"reagent/impl/component.cljs",(17),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(reagent.impl.component.props_argv)?reagent.impl.component.props_argv.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv.call(null,c,(c["props"]));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.get_argv;},new cljs.core.Symbol("reagent.impl.component","get-argv","reagent.impl.component/get-argv",(231292950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"get-argv","get-argv",(-446768255),null),"reagent/impl/component.cljs",(15),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.get_argv)?reagent.impl.component.get_argv.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__20287__auto__ = (p["argv"]);
if((temp__20287__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__20287__auto__;
return reagent.impl.component.extract_props.call(null,v);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.get_props;},new cljs.core.Symbol("reagent.impl.component","get-props","reagent.impl.component/get-props",(-25223045),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"get-props","get-props",(-689851264),null),"reagent/impl/component.cljs",(16),(1),(40),(40),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.get_props)?reagent.impl.component.get_props.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__20287__auto__ = (p["argv"]);
if((temp__20287__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else {
var v = temp__20287__auto__;
return reagent.impl.component.extract_children.call(null,v);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.get_children;},new cljs.core.Symbol("reagent.impl.component","get-children","reagent.impl.component/get-children",(2024797056),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"get-children","get-children",(-1877389515),null),"reagent/impl/component.cljs",(19),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.get_children)?reagent.impl.component.get_children.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (cljs.core.some_QMARK_.call(null,(function (){var G__278 = c;
var G__278__$1 = (((G__278 == null))?null:G__278.prototype);
var G__278__$2 = (((G__278__$1 == null))?null:(G__278__$1["reagentRender"]));
return G__278__$2;
})()));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.reagent_class_QMARK_;},new cljs.core.Symbol("reagent.impl.component","reagent-class?","reagent.impl.component/reagent-class?",(-278011815),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"reagent-class?","reagent-class?",(-963635764),null),"reagent/impl/component.cljs",(30),(1),(54),(54),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,((reagent.impl.component.reagent_class_QMARK_)?reagent.impl.component.reagent_class_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (cljs.core.some_QMARK_.call(null,(function (){var G__282 = c;
var G__282__$1 = (((G__282 == null))?null:G__282.prototype);
var G__282__$2 = (((G__282__$1 == null))?null:(G__282__$1["render"]));
return G__282__$2;
})()));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.react_class_QMARK_;},new cljs.core.Symbol("reagent.impl.component","react-class?","reagent.impl.component/react-class?",(-1375639658),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"react-class?","react-class?",(1166865147),null),"reagent/impl/component.cljs",(28),(1),(58),(58),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,((reagent.impl.component.react_class_QMARK_)?reagent.impl.component.react_class_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return cljs.core.some_QMARK_.call(null,(c["reagentRender"]));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.reagent_component_QMARK_;},new cljs.core.Symbol("reagent.impl.component","reagent-component?","reagent.impl.component/reagent-component?",(1890695462),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"reagent-component?","reagent-component?",(1497306251),null),"reagent/impl/component.cljs",(34),(1),(62),(62),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,((reagent.impl.component.reagent_component_QMARK_)?reagent.impl.component.reagent_component_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
}); return (
new cljs.core.Var(function(){return reagent.impl.component.cached_react_class;},new cljs.core.Symbol("reagent.impl.component","cached-react-class","reagent.impl.component/cached-react-class",(291812165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"cached-react-class","cached-react-class",(704261160),null),"reagent/impl/component.cljs",(25),(1),(65),(65),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.cached_react_class)?reagent.impl.component.cached_react_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
}); return (
new cljs.core.Var(function(){return reagent.impl.component.cache_react_class;},new cljs.core.Symbol("reagent.impl.component","cache-react-class","reagent.impl.component/cache-react-class",(-679187856),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"cache-react-class","cache-react-class",(-32835621),null),"reagent/impl/component.cljs",(24),(1),(68),(68),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"constructor","constructor",(-313397284),null)], null)),null,(cljs.core.truth_(reagent.impl.component.cache_react_class)?reagent.impl.component.cache_react_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.state_atom;},new cljs.core.Symbol("reagent.impl.component","state-atom","reagent.impl.component/state-atom",(-679304673),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"state-atom","state-atom",(-1350625912),null),"reagent/impl/component.cljs",(17),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(reagent.impl.component.state_atom)?reagent.impl.component.state_atom.cljs$lang$test:null)])));})()
;
if(typeof reagent.impl.component.as_element !== 'undefined'){
} else {
(function (){
reagent.impl.component.as_element = null; return (
new cljs.core.Var(function(){return reagent.impl.component.as_element;},new cljs.core.Symbol("reagent.impl.component","as-element","reagent.impl.component/as-element",(-1443509186),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"as-element","as-element",(-2139409597),null),"reagent/impl/component.cljs",(20),(1),(81),(81),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.as_element)?reagent.impl.component.as_element.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error("Assert failed: (ifn? f)"))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__284 = n;
switch (G__284) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__286__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__287__i = 0, G__287__a = new Array(arguments.length -  0);
while (G__287__i < G__287__a.length) {G__287__a[G__287__i] = arguments[G__287__i + 0]; ++G__287__i;}
  args = new cljs.core.IndexedSeq(G__287__a,0);
} 
return G__286__delegate.call(this,args);};
G__286.cljs$lang$maxFixedArity = 0;
G__286.cljs$lang$applyTo = (function (arglist__288){
var args = cljs.core.seq(arglist__288);
return G__286__delegate(args);
});
G__286.cljs$core$IFn$_invoke$arity$variadic = G__286__delegate;
return G__286;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__289 = c;
c = G__289;
continue;
} else {
return res;

}
}
break;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.wrap_render;},new cljs.core.Symbol("reagent.impl.component","wrap-render","reagent.impl.component/wrap-render",(-194173412),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"wrap-render","wrap-render",(-872434783),null),"reagent/impl/component.cljs",(18),(1),(86),(86),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.wrap_render)?reagent.impl.component.wrap_render.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.comp_name; return (
new cljs.core.Var(function(){return reagent.impl.component.comp_name;},new cljs.core.Symbol("reagent.impl.component","comp-name","reagent.impl.component/comp-name",(1561634027),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"comp-name","comp-name",(1166159940),null),"reagent/impl/component.cljs",(19),(1),(110),true,(110),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.comp_name)?reagent.impl.component.comp_name.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_291 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str([cljs.core.str("Error rendering component"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join(''))].join(''));
} else {
}
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_291;
}}); return (
new cljs.core.Var(function(){return reagent.impl.component.do_render;},new cljs.core.Symbol("reagent.impl.component","do-render","reagent.impl.component/do-render",(417478065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"do-render","do-render",(-260089820),null),"reagent/impl/component.cljs",(16),(1),(112),(112),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.do_render)?reagent.impl.component.do_render.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",(1588056370)),true], null); return (
new cljs.core.Var(function(){return reagent.impl.component.rat_opts;},new cljs.core.Symbol("reagent.impl.component","rat-opts","reagent.impl.component/rat-opts",(2122666735),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"rat-opts","rat-opts",(370159170),null),"reagent/impl/component.cljs",(14),(1),(130),(130),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.rat_opts)?reagent.impl.component.rat_opts.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",(-1408033454)),(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null); return (
new cljs.core.Var(function(){return reagent.impl.component.static_fns;},new cljs.core.Symbol("reagent.impl.component","static-fns","reagent.impl.component/static-fns",(-1420835258),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"static-fns","static-fns",(1138580779),null),"reagent/impl/component.cljs",(16),(1),(132),(132),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.static_fns)?reagent.impl.component.static_fns.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__295 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__295) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported"),cljs.core.str("\n"),cljs.core.str("false")].join('')));


break;
case "componentDidUpdate":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__295))

break;
case "componentWillUnmount":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__297_299 = (c["cljsRatom"]);
var G__297_300__$1 = (((G__297_299 == null))?null:reagent.ratom.dispose_BANG_.call(null,G__297_299));

reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__295))

break;
case "componentWillReceiveProps":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__295))

break;
case "shouldComponentUpdate":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__20817__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = ((old_argv == null)) || ((new_argv == null));
if((f == null)){
return (noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv));
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__295))

break;
case "componentWillUpdate":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__295))

break;
case "getInitialState":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__295))

break;
case "componentDidMount":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__295))

break;
case "componentWillMount":
return ((function (G__295){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__295))

break;
default:
return null;

}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.custom_wrapper;},new cljs.core.Symbol("reagent.impl.component","custom-wrapper","reagent.impl.component/custom-wrapper",(735007843),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"custom-wrapper","custom-wrapper",(56420604),null),"reagent/impl/component.cljs",(21),(1),(144),(144),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.component.custom_wrapper)?reagent.impl.component.custom_wrapper.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__20770__auto__ = wrap;
if(cljs.core.truth_(and__20770__auto__)){
return f;
} else {
return and__20770__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}
} else {
}

var or__20817__auto__ = wrap;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return f;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.get_wrapper;},new cljs.core.Symbol("reagent.impl.component","get-wrapper","reagent.impl.component/get-wrapper",(-589822500),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"get-wrapper","get-wrapper",(-1001686687),null),"reagent/impl/component.cljs",(18),(1),(201),(201),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null)),null,(cljs.core.truth_(reagent.impl.component.get_wrapper)?reagent.impl.component.get_wrapper.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",(1573788814)),null,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",(1795750960)),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",(-285327619)),null], null); return (
new cljs.core.Var(function(){return reagent.impl.component.obligatory;},new cljs.core.Symbol("reagent.impl.component","obligatory","reagent.impl.component/obligatory",(-1815383079),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"obligatory","obligatory",(-1954746526),null),"reagent/impl/component.cljs",(16),(1),(208),(208),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.obligatory)?reagent.impl.component.obligatory.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel); return (
new cljs.core.Var(function(){return reagent.impl.component.dash_to_camel;},new cljs.core.Symbol("reagent.impl.component","dash-to-camel","reagent.impl.component/dash-to-camel",(-623322083),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"dash-to-camel","dash-to-camel",(-229225590),null),"reagent/impl/component.cljs",(19),(1),(212),(212),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.component.dash_to_camel)?reagent.impl.component.dash_to_camel.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
}); return (
new cljs.core.Var(function(){return reagent.impl.component.camelify_map_keys;},new cljs.core.Symbol("reagent.impl.component","camelify-map-keys","reagent.impl.component/camelify-map-keys",(916929090),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"camelify-map-keys","camelify-map-keys",(1228260663),null),"reagent/impl/component.cljs",(24),(1),(214),(214),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fun-map","fun-map",(229483546),null)], null)),null,(cljs.core.truth_(reagent.impl.component.camelify_map_keys)?reagent.impl.component.camelify_map_keys.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
}); return (
new cljs.core.Var(function(){return reagent.impl.component.add_obligatory;},new cljs.core.Symbol("reagent.impl.component","add-obligatory","reagent.impl.component/add-obligatory",(-1999867396),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"add-obligatory","add-obligatory",(-1871635865),null),"reagent/impl/component.cljs",(21),(1),(219),(219),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fun-map","fun-map",(229483546),null)], null)),null,(cljs.core.truth_(reagent.impl.component.add_obligatory)?reagent.impl.component.add_obligatory.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var renders_303 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)),new cljs.core.Keyword(null,"componentFunction","componentFunction",(825866104))], null));
var render_fun_304 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_303));
if((cljs.core.count.call(null,renders_303) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Missing reagent-render"),cljs.core.str("\n"),cljs.core.str("(pos? (count renders))")].join('')));
}

if(((1) === cljs.core.count.call(null,renders_303))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Too many render functions supplied"),cljs.core.str("\n"),cljs.core.str("(== 1 (count renders))")].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_304)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.call(null,render_fun_304))].join('')),cljs.core.str("\n"),cljs.core.str("(ifn? render-fun)")].join('')));
}


var render_fun = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",(825866104)).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__20817__auto__ = render_fun;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str((function (){var or__20817__auto__ = new cljs.core.Keyword(null,"displayName","displayName",(-809144601)).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__302 = name;
switch (G__302) {
case "":
return [cljs.core.str(cljs.core.gensym.call(null,"reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",(-809144601)),name__$1,new cljs.core.Keyword(null,"autobind","autobind",(-570650245)),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",(-1527295613)),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)),render_fun__$1,new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.wrap_funs;},new cljs.core.Symbol("reagent.impl.component","wrap-funs","reagent.impl.component/wrap-funs",(572685259),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"wrap-funs","wrap-funs",(173315966),null),"reagent/impl/component.cljs",(16),(1),(222),(222),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fmap","fmap",(55293788),null)], null)),null,(cljs.core.truth_(reagent.impl.component.wrap_funs)?reagent.impl.component.wrap_funs.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__307 = o;
(G__307[cljs.core.name.call(null,k)] = v);

return G__307;
}),({}),m);
}); return (
new cljs.core.Var(function(){return reagent.impl.component.map_to_js;},new cljs.core.Symbol("reagent.impl.component","map-to-js","reagent.impl.component/map-to-js",(-1988541403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"map-to-js","map-to-js",(-1595150514),null),"reagent/impl/component.cljs",(16),(1),(250),(250),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(reagent.impl.component.map_to_js)?reagent.impl.component.map_to_js.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.cljsify;},new cljs.core.Symbol("reagent.impl.component","cljsify","reagent.impl.component/cljsify",(619169299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"cljsify","cljsify",(1016245624),null),"reagent/impl/component.cljs",(14),(1),(256),(256),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(reagent.impl.component.cljsify)?reagent.impl.component.cljsify.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return (reagent.impl.util.react["createClass"])(reagent.impl.component.cljsify.call(null,body));
}); return (
new cljs.core.Var(function(){return reagent.impl.component.create_class;},new cljs.core.Symbol("reagent.impl.component","create-class","reagent.impl.component/create-class",(-1311665611),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"create-class","create-class",(-665911586),null),"reagent/impl/component.cljs",(19),(1),(263),(263),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(reagent.impl.component.create_class)?reagent.impl.component.create_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var elem = (function (){var G__313 = (function (){var or__20817__auto__ = (function (){var G__315 = c;
var G__315__$1 = (((G__315 == null))?null:(G__315["_reactInternalInstance"]));
return G__315__$1;
})();
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return c;
}
})();
var G__313__$1 = (((G__313 == null))?null:(G__313["_currentElement"]));
return G__313__$1;
})();
var name = (function (){var G__316 = elem;
var G__316__$1 = (((G__316 == null))?null:(G__316["type"]));
var G__316__$2 = (((G__316__$1 == null))?null:(G__316__$1["displayName"]));
return G__316__$2;
})();
var path = (function (){var G__317 = elem;
var G__317__$1 = (((G__317 == null))?null:(G__317["_owner"]));
var G__317__$2 = (((G__317__$1 == null))?null:reagent.impl.component.component_path.call(null,G__317__$1));
var G__317__$3 = (((G__317__$2 == null))?null:[cljs.core.str(G__317__$2),cljs.core.str(" > ")].join(''));
return G__317__$3;
})();
var res = [cljs.core.str(path),cljs.core.str(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.component_path;},new cljs.core.Symbol("reagent.impl.component","component-path","reagent.impl.component/component-path",(1019689925),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"component-path","component-path",(625585842),null),"reagent/impl/component.cljs",(21),(1),(269),(269),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.impl.component.component_path)?reagent.impl.component.component_path.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__20817__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var G__319 = c;
var G__319__$1 = (((G__319 == null))?null:G__319.constructor);
var G__319__$2 = (((G__319__$1 == null))?null:reagent.impl.util.fun_name.call(null,G__319__$1));
return G__319__$2;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

}); return (
new cljs.core.Var(function(){return reagent.impl.component.comp_name;},new cljs.core.Symbol("reagent.impl.component","comp-name","reagent.impl.component/comp-name",(1561634027),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"comp-name","comp-name",(1166159940),null),"reagent/impl/component.cljs",(16),(1),(283),(283),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.impl.component.comp_name)?reagent.impl.component.comp_name.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected a function, not "),cljs.core.str(cljs.core.pr_str.call(null,f))].join('')),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!(!((reagent.impl.component.react_class_QMARK_.call(null,f)) && (!(reagent.impl.component.reagent_class_QMARK_.call(null,f)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str("Using native React classes directly in Hiccup forms "),cljs.core.str("is not supported. Use create-element or "),cljs.core.str("adapt-react-class instead: "),cljs.core.str((function (){var n = reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),cljs.core.str(reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",(-985383853)),f);
var res = reagent.impl.component.create_class.call(null,withrender);
return reagent.impl.component.cache_react_class.call(null,f,res);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.fn_to_class;},new cljs.core.Symbol("reagent.impl.component","fn-to-class","reagent.impl.component/fn-to-class",(1379292760),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"fn-to-class","fn-to-class",(1002815949),null),"reagent/impl/component.cljs",(18),(1),(293),(293),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.component.fn_to_class)?reagent.impl.component.fn_to_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__20287__auto__ = reagent.impl.component.cached_react_class.call(null,tag);
if((temp__20287__auto__ == null)){
return reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__20287__auto__;
return cached_class;
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.as_class;},new cljs.core.Symbol("reagent.impl.component","as-class","reagent.impl.component/as-class",(1217681120),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"as-class","as-class",(1893907019),null),"reagent/impl/component.cljs",(15),(1),(309),(309),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null)], null)),null,(cljs.core.truth_(reagent.impl.component.as_class)?reagent.impl.component.as_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return reagent.impl.component.as_class.call(null,comp);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.component.reactify_component;},new cljs.core.Symbol("reagent.impl.component","reactify-component","reagent.impl.component/reactify-component",(-219665800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.component","reagent.impl.component",(-668306351),null),new cljs.core.Symbol(null,"reactify-component","reactify-component",(-882526483),null),"reagent/impl/component.cljs",(25),(1),(314),(314),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null)], null)),null,(cljs.core.truth_(reagent.impl.component.reactify_component)?reagent.impl.component.reactify_component.cljs$lang$test:null)])));})()
;
