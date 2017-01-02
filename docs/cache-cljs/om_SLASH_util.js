goog.provide("om.util");
(function (){
om.util.force_children = (function om$util$force_children(x){
var G__25 = x;
var G__25__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.util.force_children),G__25):G__25);
return G__25__$1;
}); return (
new cljs.core.Var(function(){return om.util.force_children;},new cljs.core.Symbol("om.util","force-children","om.util/force-children",(2134283787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"force-children","force-children",(61186105),null),"om/util.cljc",(21),(1),(4),(4),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.util.force_children)?om.util.force_children.cljs$lang$test:null)])));})()
;
(function (){
om.util.union_QMARK_ = (function om$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__27 = expr;
var G__27__$1 = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,G__27):G__27);
return G__27__$1;
})();
return (cljs.core.map_QMARK_.call(null,expr__$1)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr__$1))));
}); return (
new cljs.core.Var(function(){return om.util.union_QMARK_;},new cljs.core.Symbol("om.util","union?","om.util/union?",(386759448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"union?","union?",(-1567596274),null),"om/util.cljc",(13),(1),(8),(8),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,((om.util.union_QMARK_)?om.util.union_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.util.join_QMARK_ = (function om$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
}); return (
new cljs.core.Var(function(){return om.util.join_QMARK_;},new cljs.core.Symbol("om.util","join?","om.util/join?",(772778027),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"join?","join?",(-90522087),null),"om/util.cljc",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.util.join_QMARK_)?om.util.join_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if x is an ident.
 */
(function (){
om.util.ident_QMARK_ = (function om$util$ident_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
}); return (
new cljs.core.Var(function(){return om.util.ident_QMARK_;},new cljs.core.Symbol("om.util","ident?","om.util/ident?",(1756482694),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"ident?","ident?",(-2061359468),null),"om/util.cljc",(13),(1),(20),(20),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if x is an ident.",((om.util.ident_QMARK_)?om.util.ident_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.util.join_entry = (function om$util$join_entry(expr){
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
return cljs.core.first.call(null,expr);
}
}); return (
new cljs.core.Var(function(){return om.util.join_entry;},new cljs.core.Symbol("om.util","join-entry","om.util/join-entry",(-420185786),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"join-entry","join-entry",(-1251392728),null),"om/util.cljc",(17),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(om.util.join_entry)?om.util.join_entry.cljs$lang$test:null)])));})()
;
(function (){
om.util.join_key = (function om$util$join_key(expr){
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return om.util.join_key.call(null,cljs.core.first.call(null,expr));
} else {
return expr;

}
}
}); return (
new cljs.core.Var(function(){return om.util.join_key;},new cljs.core.Symbol("om.util","join-key","om.util/join-key",(579616806),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"join-key","join-key",(-1904235980),null),"om/util.cljc",(15),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(om.util.join_key)?om.util.join_key.cljs$lang$test:null)])));})()
;
(function (){
om.util.join_value = (function om$util$join_value(join){
return cljs.core.second.call(null,om.util.join_entry.call(null,join));
}); return (
new cljs.core.Var(function(){return om.util.join_value;},new cljs.core.Symbol("om.util","join-value","om.util/join-value",(-1556651594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"join-value","join-value",(265849796),null),"om/util.cljc",(17),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"join","join",(881669637),null)], null)),null,(cljs.core.truth_(om.util.join_value)?om.util.join_value.cljs$lang$test:null)])));})()
;
(function (){
om.util.unique_ident_QMARK_ = (function om$util$unique_ident_QMARK_(x){
return (om.util.ident_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),cljs.core.second.call(null,x)));
}); return (
new cljs.core.Var(function(){return om.util.unique_ident_QMARK_;},new cljs.core.Symbol("om.util","unique-ident?","om.util/unique-ident?",(-1423470464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"unique-ident?","unique-ident?",(529197682),null),"om/util.cljc",(20),(1),(42),(42),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.util.unique_ident_QMARK_)?om.util.unique_ident_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.util.recursion_QMARK_ = (function om$util$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_.call(null,new cljs.core.Symbol(null,"...","...",(-1926939749),null),x)) || (typeof x === 'number');
}); return (
new cljs.core.Var(function(){return om.util.recursion_QMARK_;},new cljs.core.Symbol("om.util","recursion?","om.util/recursion?",(-809659618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"recursion?","recursion?",(856209772),null),"om/util.cljc",(17),(1),(47),(47),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.util.recursion_QMARK_)?om.util.recursion_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.util.mutation_QMARK_ = (function om$util$mutation_QMARK_(expr){
var expr__$1 = (function (){var G__29 = expr;
var G__29__$1 = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,G__29):G__29);
return G__29__$1;
})();
return (expr__$1 instanceof cljs.core.Symbol);
}); return (
new cljs.core.Var(function(){return om.util.mutation_QMARK_;},new cljs.core.Symbol("om.util","mutation?","om.util/mutation?",(1820210853),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"mutation?","mutation?",(-1077077869),null),"om/util.cljc",(16),(1),(54),(54),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,((om.util.mutation_QMARK_)?om.util.mutation_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.util.mutation_key = (function om$util$mutation_key(expr){
if((cljs.core.first.call(null,expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (first expr))"));
}

return cljs.core.first.call(null,expr);
}); return (
new cljs.core.Var(function(){return om.util.mutation_key;},new cljs.core.Symbol("om.util","mutation-key","om.util/mutation-key",(-1180572510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.util","om.util",(972728510),null),new cljs.core.Symbol(null,"mutation-key","mutation-key",(221388432),null),"om/util.cljc",(19),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(om.util.mutation_key)?om.util.mutation_key.cljs$lang$test:null)])));})()
;
